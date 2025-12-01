'use client'

import { useState, useEffect, useCallback } from 'react'
import { Trophy, Medal, Award, Crown, TrendingUp, Loader2, AlertCircle, RefreshCw, Download, Filter, Search } from 'lucide-react'
import { rankingsApi, statsApi, type RankingItem, type StatsOverview } from '@/lib/api'
import { useToast } from '@/components/Toast'
import Link from 'next/link'

// 项目类型映射
const sportTypeLabels: Record<string, string> = {
  ALPINE_SKI: '高山滑雪',
  SNOWBOARD_SLOPESTYLE_BIGAIR: '单板坡障/大跳台',
  SNOWBOARD_PARALLEL: '单板平行项目',
  FREESTYLE_SLOPESTYLE_BIGAIR: '自由式坡障/大跳台',
}

// U系列分组映射
const uSeriesLabels: Record<string, string> = {
  U12: 'U12组',
  U15: 'U15组',
  U18: 'U18组',
}

export default function PointsRankingsPage() {
  const [selectedSportType, setSelectedSportType] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedUSeriesGroup, setSelectedUSeriesGroup] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [rankings, setRankings] = useState<RankingItem[]>([])
  const [stats, setStats] = useState<StatsOverview | null>(null)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(20)
  const [total, setTotal] = useState(0)
  const [isExporting, setIsExporting] = useState(false)
  const { showToast } = useToast()

  // 获取排名数据
  const fetchRankings = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const params: Record<string, unknown> = {
        page,
        pageSize,
        sportType: selectedSportType !== 'all' ? selectedSportType : undefined,
        gender: selectedGender !== 'all' ? selectedGender : undefined,
        uSeriesGroup: selectedUSeriesGroup !== 'all' ? selectedUSeriesGroup : undefined,
      }

      const response = await rankingsApi.list(params)
      if (response.success && response.data) {
        // 前端搜索过滤
        let filtered = response.data
        if (searchTerm) {
          const term = searchTerm.toLowerCase()
          filtered = filtered.filter(
            r => r.athleteName.toLowerCase().includes(term) ||
                 (r.province && r.province.toLowerCase().includes(term))
          )
        }
        setRankings(filtered)
        setTotal(response.meta?.total || filtered.length)
      } else {
        setError(response.error?.message || '获取数据失败')
      }
    } catch (err) {
      console.error('获取排名数据失败:', err)
      setError('网络错误，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }, [page, pageSize, selectedSportType, selectedGender, selectedUSeriesGroup, searchTerm])

  // 获取统计数据
  const fetchStats = useCallback(async () => {
    try {
      const response = await statsApi.overview()
      if (response.success && response.data) {
        setStats(response.data)
      }
    } catch (err) {
      console.error('获取统计数据失败:', err)
    }
  }, [])

  // 初始加载
  useEffect(() => {
    fetchRankings()
    fetchStats()
  }, [fetchRankings, fetchStats])

  // 搜索防抖
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchTerm, selectedSportType, selectedGender, selectedUSeriesGroup])

  // 导出排行榜
  const handleExport = async () => {
    if (rankings.length === 0) {
      showToast('没有数据可导出', 'warning')
      return
    }

    setIsExporting(true)
    try {
      const headers = ['排名', '姓名', '性别', '项目', '分组', '赛季', '总积分', '参赛次数', '省份', '俱乐部']
      const rows = rankings.map(r => [
        r.rank,
        r.athleteName,
        r.gender === 'MALE' ? '男' : '女',
        sportTypeLabels[r.sportType] || r.sportType,
        r.uSeriesGroup ? uSeriesLabels[r.uSeriesGroup] : '-',
        r.season,
        r.totalPoints.toFixed(2),
        r.competitionCount,
        r.province || '-',
        r.club || '-',
      ])
      const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')

      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `积分排行榜_${new Date().toISOString().split('T')[0]}.csv`
      link.click()
      URL.revokeObjectURL(url)

      showToast(`成功导出 ${rankings.length} 条排名数据`, 'success')
    } catch {
      showToast('导出失败，请重试', 'error')
    } finally {
      setIsExporting(false)
    }
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Award className="h-6 w-6 text-orange-500" />
      default:
        return (
          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
            {rank}
          </div>
        )
    }
  }

  // 计算分页
  const totalPages = Math.ceil(total / pageSize)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">积分排行榜</h1>
          <p className="text-xl text-gray-600">中国滑雪运动员积分排名统计</p>
        </div>

        {/* 筛选器 - 吸顶 */}
        <div className="sticky top-16 z-40 bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索运动员..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <select
                value={selectedSportType}
                onChange={(e) => setSelectedSportType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">所有项目</option>
                <option value="ALPINE_SKI">高山滑雪</option>
                <option value="FREESTYLE_SLOPESTYLE_BIGAIR">自由式坡障/大跳台</option>
                <option value="SNOWBOARD_SLOPESTYLE_BIGAIR">单板坡障/大跳台</option>
                <option value="SNOWBOARD_PARALLEL">单板平行项目</option>
              </select>
            </div>

            <div>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">所有性别</option>
                <option value="MALE">男子</option>
                <option value="FEMALE">女子</option>
              </select>
            </div>

            <div>
              <select
                value={selectedUSeriesGroup}
                onChange={(e) => setSelectedUSeriesGroup(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">所有分组</option>
                <option value="U12">U12组</option>
                <option value="U15">U15组</option>
                <option value="U18">U18组</option>
              </select>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-gray-600">
                共 <span className="font-bold text-purple-600">{total}</span> 人
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={fetchRankings}
                disabled={isLoading}
                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                title="刷新数据"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={handleExport}
                disabled={isExporting || rankings.length === 0}
                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                {isExporting ? '导出中...' : '导出'}
              </button>
            </div>
          </div>
        </div>

        {/* 排行榜统计 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              {stats?.overview.totalAthletes ?? '-'}
            </div>
            <div className="text-gray-600">注册运动员</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {stats?.overview.activeAthletes ?? '-'}
            </div>
            <div className="text-gray-600">活跃运动员</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">
              {stats?.overview.completedCompetitions ?? '-'}
            </div>
            <div className="text-gray-600">已完成比赛</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">
              {stats?.overview.currentSeason ?? '-'}
            </div>
            <div className="text-gray-600">当前赛季</div>
          </div>
        </div>

        {/* 排行榜表格 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">积分排行榜</h2>
          </div>

          {/* 加载状态 */}
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
              <span className="ml-2 text-gray-600">加载中...</span>
            </div>
          )}

          {/* 错误状态 */}
          {error && !isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={fetchRankings}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                重试
              </button>
            </div>
          )}

          {/* 空状态 */}
          {!isLoading && !error && rankings.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <Trophy className="h-12 w-12 text-gray-300 mb-4" />
              <p className="text-lg font-medium text-gray-500">暂无符合条件的排名数据</p>
              <p className="text-sm text-gray-400 mt-1">请尝试调整筛选条件</p>
            </div>
          )}

          {/* 数据表格 */}
          {!isLoading && !error && rankings.length > 0 && (
            <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      排名
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      运动员
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      项目
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      分组
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      总积分
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      BL/NL
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      参赛次数
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      赛季
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      省份
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rankings.map((item) => (
                    <tr key={`${item.athleteId}-${item.sportType}`} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getRankIcon(item.rank)}
                          {item.rank <= 3 && (
                            <span className="text-sm font-medium text-gray-900">#{item.rank}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <span className="text-sm font-medium text-purple-600">
                                {item.athleteName.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <Link
                              href={`/athletes/${item.athleteId}`}
                              className="text-sm font-medium text-gray-900 hover:text-purple-600"
                            >
                              {item.athleteName}
                            </Link>
                            <div className="text-sm text-gray-500">
                              {item.gender === 'MALE' ? '男子' : '女子'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {sportTypeLabels[item.sportType] || item.sportType}
                          </div>
                          {item.discipline && (
                            <div className="text-sm text-gray-500">{item.discipline}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.uSeriesGroup ? (
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {uSeriesLabels[item.uSeriesGroup] || item.uSeriesGroup}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-purple-600">
                          {item.totalPoints.toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xs text-gray-600">
                          {item.blPoints !== undefined && (
                            <div>BL: {item.blPoints.toFixed(2)}</div>
                          )}
                          {item.nlPoints !== undefined && (
                            <div>NL: {item.nlPoints.toFixed(2)}</div>
                          )}
                          {item.blPoints === undefined && item.nlPoints === undefined && '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.competitionCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.season}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>{item.province || '-'}</div>
                        {item.club && <div className="text-xs text-gray-500">{item.club}</div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 分页 */}
        {!isLoading && !error && rankings.length > 0 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-6 rounded-lg shadow-md">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                上一页
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                下一页
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  显示第 <span className="font-medium">{(page - 1) * pageSize + 1}</span> 到{' '}
                  <span className="font-medium">{Math.min(page * pageSize, total)}</span> 条，共{' '}
                  <span className="font-medium">{total}</span> 条结果
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    上一页
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum: number
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (page <= 3) {
                      pageNum = i + 1
                    } else if (page >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = page - 2 + i
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                          page === pageNum
                            ? 'z-10 bg-purple-600 border-purple-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page >= totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    下一页
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* 排行榜说明 */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">排行榜说明</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">积分规则</h4>
              <ul className="space-y-1">
                <li>• 高山滑雪：积分越低排名越高（基于时间）</li>
                <li>• 自由式/单板：积分越高排名越高（基于表现）</li>
                <li>• U系列采用360分制统一积分体系</li>
                <li>• 取当前赛季最好成绩</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">积分类型</h4>
              <ul className="space-y-1">
                <li>• BL（基础分）：上赛季表现积分</li>
                <li>• NL（赛季滚动分）：当前赛季实时表现</li>
                <li>• 排序优先级分 = max(BL, NL)</li>
                <li>• 赛季积分 = 子项最佳站积分之和</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
