'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Search, User, Trophy, Medal, TrendingUp, Filter, Download, Loader2, AlertCircle, RefreshCw, Database } from 'lucide-react'
import { useToast } from '@/components/Toast'
import { athletesApi, statsApi, type Athlete, type StatsOverview } from '@/lib/api'
import { getPointsRanking, getStatsOverview, getCompetitions, type CompetitionInfo } from '@/lib/resultsStorage'
import { latestResults } from '@/data/latestResults'
import Link from 'next/link'

// 项目类型映射
const sportTypeLabels: Record<string, string> = {
  ALPINE_SKI: '高山滑雪',
  SNOWBOARD_SLOPESTYLE_BIGAIR: '单板坡障/大跳台',
  SNOWBOARD_PARALLEL: '单板平行项目',
  FREESTYLE_SLOPESTYLE_BIGAIR: '自由式坡障/大跳台',
}

const sportTypeColors: Record<string, string> = {
  ALPINE_SKI: 'bg-blue-100 text-blue-800',
  SNOWBOARD_SLOPESTYLE_BIGAIR: 'bg-purple-100 text-purple-800',
  SNOWBOARD_PARALLEL: 'bg-green-100 text-green-800',
  FREESTYLE_SLOPESTYLE_BIGAIR: 'bg-orange-100 text-orange-800',
}

// 状态映射
const statusLabels: Record<string, string> = {
  ACTIVE: '活跃',
  INJURED: '伤病',
  RETIRED: '退役',
}

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-green-100 text-green-800',
  INJURED: 'bg-yellow-100 text-yellow-800',
  RETIRED: 'bg-gray-100 text-gray-800',
}

// 本地到API格式的映射
const localSportTypeMapping: Record<string, string> = {
  'alpine': 'ALPINE_SKI',
  'snowboard-slopestyle': 'SNOWBOARD_SLOPESTYLE_BIGAIR',
  'snowboard-parallel': 'SNOWBOARD_PARALLEL',
  'freestyle-slopestyle': 'FREESTYLE_SLOPESTYLE_BIGAIR',
}

// 从静态数据提取运动员列表（模块级别，确保在导入时就执行）
function buildStaticAthletesList(): Athlete[] {
  const athleteMap = new Map<string, {
    name: string
    team: string
    sportType: string
    totalPoints: number
    bestRank: number
    competitions: number
    gender: 'MALE' | 'FEMALE'
  }>()

  for (const competition of latestResults.competitions) {
    const sportType = localSportTypeMapping[competition.sportType] || 'SNOWBOARD_SLOPESTYLE_BIGAIR'

    for (const event of competition.events) {
      const gender = event.gender.includes('女') ? 'FEMALE' as const : 'MALE' as const

      for (const athlete of event.athletes) {
        const key = `${athlete.name}-${athlete.team}`
        const existing = athleteMap.get(key)

        if (existing) {
          existing.totalPoints += athlete.points || 0
          existing.bestRank = Math.min(existing.bestRank, athlete.rank)
          existing.competitions++
        } else {
          athleteMap.set(key, {
            name: athlete.name,
            team: athlete.team,
            sportType,
            totalPoints: athlete.points || 0,
            bestRank: athlete.rank,
            competitions: 1,
            gender
          })
        }
      }
    }
  }

  // 转换为 Athlete[] 并按积分排序
  const athletes = Array.from(athleteMap.values())
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .map((a, index): Athlete => ({
      id: `static-${index}`,
      name: a.name,
      gender: a.gender,
      sportType: a.sportType,
      status: 'ACTIVE' as const,
      province: a.team,
      club: null,
      currentPoints: a.totalPoints,
      currentRank: index + 1,
      uSeriesGroup: null,
      birthDate: null, // 真实数据中无出生日期
      nationality: 'CHN',
      fisCode: '',
    }))

  return athletes
}

// 预先构建静态运动员列表（在模块加载时执行）
const STATIC_ATHLETES = buildStaticAthletesList()

export default function AthletesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSportType, setSelectedSportType] = useState('all')
  const [isExporting, setIsExporting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [stats, setStats] = useState<StatsOverview | null>(null)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(20)
  const [total, setTotal] = useState(0)
  const { showToast } = useToast()
  const [dataSource, setDataSource] = useState<'local' | 'api'>('local')
  const [hasLocalData, setHasLocalData] = useState(false)
  const [localCompetitions, setLocalCompetitions] = useState<CompetitionInfo[]>([])

  // 从本地数据获取运动员列表
  const fetchLocalAthletes = useCallback((): Athlete[] => {
    if (typeof window === 'undefined') return []

    // 获取所有导入的成绩数据中的运动员
    const localRankings = getPointsRanking()
    const competitions = getCompetitions()
    setLocalCompetitions(competitions)

    if (localRankings.length === 0) return []

    // 将本地格式转换为 Athlete 格式
    const converted: Athlete[] = localRankings.map((item, index) => {
      // 根据team名称推断项目类型
      const competition = competitions[0]
      let sportType = 'SNOWBOARD_SLOPESTYLE_BIGAIR' // 默认
      if (competition?.sportType) {
        sportType = localSportTypeMapping[competition.sportType] || 'SNOWBOARD_SLOPESTYLE_BIGAIR'
      }

      return {
        id: `local-athlete-${index}`,
        name: item.name,
        gender: 'MALE' as const, // 默认设为男性，因为本地数据可能没有性别信息
        sportType,
        status: 'ACTIVE' as const,
        province: item.team,
        club: null,
        currentPoints: item.totalPoints,
        currentRank: index + 1,
        uSeriesGroup: null,
        birthDate: null, // 真实数据中无出生日期
        nationality: 'CHN',
        fisCode: '',
      }
    })

    // 筛选
    let filtered = converted
    if (selectedSportType !== 'all') {
      filtered = filtered.filter(a => a.sportType === selectedSportType)
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(a =>
        a.name.toLowerCase().includes(term) ||
        (a.province && a.province.toLowerCase().includes(term))
      )
    }

    return filtered
  }, [selectedSportType, searchTerm])

  // 获取运动员数据
  const fetchAthletes = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    // 首先尝试从 localStorage 获取数据
    const localAthletes = fetchLocalAthletes()
    if (localAthletes.length > 0) {
      // 分页
      const start = (page - 1) * pageSize
      const end = start + pageSize
      const pagedAthletes = localAthletes.slice(start, end)

      setAthletes(pagedAthletes)
      setTotal(localAthletes.length)
      setHasLocalData(true)
      setDataSource('local')
      setIsLoading(false)
      return
    }

    // 如果没有 localStorage 数据，使用预构建的静态数据
    if (STATIC_ATHLETES.length > 0) {
      // 筛选
      let filtered = STATIC_ATHLETES
      if (selectedSportType !== 'all') {
        filtered = filtered.filter(a => a.sportType === selectedSportType)
      }
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        filtered = filtered.filter(a =>
          a.name.toLowerCase().includes(term) ||
          (a.province && a.province.toLowerCase().includes(term))
        )
      }

      // 分页
      const start = (page - 1) * pageSize
      const end = start + pageSize
      const pagedAthletes = filtered.slice(start, end)

      setAthletes(pagedAthletes)
      setTotal(filtered.length)
      setHasLocalData(true)
      setDataSource('local')
      setIsLoading(false)
      return
    }

    // 如果都没有数据，尝试 API（静态站点一般不会走到这里）
    try {
      const params: Record<string, unknown> = {
        page,
        pageSize,
        search: searchTerm || undefined,
        sportType: selectedSportType !== 'all' ? selectedSportType : undefined,
      }

      const response = await athletesApi.list(params)
      if (response.success && response.data && Array.isArray(response.data)) {
        setAthletes(response.data)
        setTotal(response.meta?.total || response.data.length)
        setDataSource('api')
        setHasLocalData(false)
      } else {
        setAthletes([])
        setTotal(0)
        setHasLocalData(false)
        setDataSource('api')
      }
    } catch {
      setAthletes([])
      setTotal(0)
      setHasLocalData(false)
    } finally {
      setIsLoading(false)
    }
  }, [page, pageSize, searchTerm, selectedSportType, fetchLocalAthletes])

  // 获取统计数据
  const fetchStats = useCallback(async () => {
    // 首先尝试从 localStorage 获取统计
    if (typeof window !== 'undefined') {
      const localStats = getStatsOverview()
      if (localStats.totalCompetitions > 0 || localStats.totalAthletes > 0) {
        setStats({
          overview: {
            totalAthletes: localStats.totalAthletes,
            activeAthletes: localStats.totalAthletes,
            totalCompetitions: localStats.totalCompetitions,
            completedCompetitions: localStats.totalCompetitions,
            upcomingCompetitions: 0,
            currentSeason: '2024-2025',
          },
          athletesBySport: [],
          recentCompetitions: [],
          topAthletes: [],
        } as StatsOverview)
        return
      }
    }

    // 使用静态数据统计
    if (STATIC_ATHLETES.length > 0) {
      setStats({
        overview: {
          totalAthletes: STATIC_ATHLETES.length,
          activeAthletes: STATIC_ATHLETES.length,
          totalCompetitions: latestResults.competitions.length,
          completedCompetitions: latestResults.competitions.filter(c => c.status === 'completed').length,
          upcomingCompetitions: latestResults.competitions.filter(c => c.status === 'upcoming').length,
          currentSeason: '2024-2025',
        },
        athletesBySport: [],
        recentCompetitions: [],
        topAthletes: [],
      } as StatsOverview)
      return
    }

    // 如果都没有，尝试 API
    try {
      const response = await statsApi.overview()
      if (response.success && response.data) {
        setStats(response.data)
      }
    } catch {
    }
  }, [])

  // 初始加载
  useEffect(() => {
    fetchAthletes()
    fetchStats()
  }, [fetchAthletes, fetchStats])

  // 搜索防抖
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1) // 搜索时重置页码
    }, 300)
    return () => clearTimeout(timer)
  }, [searchTerm, selectedSportType])

  // 导出运动员列表
  const handleExport = async () => {
    if (athletes.length === 0) {
      showToast('没有数据可导出', 'warning')
      return
    }

    setIsExporting(true)
    try {
      // 生成CSV内容
      const headers = ['排名', '姓名', '性别', '项目', '积分', '省份', '俱乐部', '状态']
      const rows = athletes.map(a => [
        a.currentRank || '-',
        a.name,
        a.gender === 'MALE' ? '男' : '女',
        sportTypeLabels[a.sportType] || a.sportType,
        a.currentPoints || 0,
        a.province || '-',
        a.club || '-',
        statusLabels[a.status] || a.status,
      ])
      const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')

      // 下载文件
      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `运动员列表_${new Date().toISOString().split('T')[0]}.csv`
      link.click()
      URL.revokeObjectURL(url)

      showToast(`成功导出 ${athletes.length} 名运动员数据`, 'success')
    } catch {
      showToast('导出失败，请重试', 'error')
    } finally {
      setIsExporting(false)
    }
  }

  // 计算分页
  const totalPages = Math.ceil(total / pageSize)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">运动员管理</h1>
          <p className="text-xl text-gray-600">
            中国滑雪运动员档案与积分统计
          </p>
          {hasLocalData && (
            <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              <Database className="h-4 w-4" />
              数据来源: 本地导入的比赛成绩 ({localCompetitions.length} 场比赛)
            </div>
          )}
        </div>

        {/* 搜索和筛选 - 吸顶 */}
        <div className="sticky top-16 z-40 bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索运动员姓名或省份..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedSportType}
                onChange={(e) => setSelectedSportType(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
              >
                <option value="all">所有项目</option>
                <option value="ALPINE_SKI">高山滑雪</option>
                <option value="FREESTYLE_SLOPESTYLE_BIGAIR">自由式坡障/大跳台</option>
                <option value="SNOWBOARD_SLOPESTYLE_BIGAIR">单板坡障/大跳台</option>
                <option value="SNOWBOARD_PARALLEL">单板平行项目</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-medium">
                找到 <span className="text-ski-blue font-bold">{total}</span> 名运动员
              </span>
              <div className="flex gap-2">
                <button
                  onClick={fetchAthletes}
                  disabled={isLoading}
                  className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
                  title="刷新数据"
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={handleExport}
                  disabled={isExporting || athletes.length === 0}
                  className="bg-ski-blue text-white px-4 py-2 rounded-md hover:bg-ski-blue/90 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  {isExporting ? '导出中...' : '导出列表'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats?.overview.totalAthletes ?? '-'}
                </div>
                <div className="text-gray-600">注册运动员</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats?.overview.activeAthletes ?? '-'}
                </div>
                <div className="text-gray-600">活跃运动员</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <Medal className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats?.overview.completedCompetitions ?? '-'}
                </div>
                <div className="text-gray-600">已完成比赛</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-red-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {stats?.overview.currentSeason ?? '-'}
                </div>
                <div className="text-gray-600">当前赛季</div>
              </div>
            </div>
          </div>
        </div>

        {/* 运动员列表 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">运动员列表</h2>
          </div>

          {/* 加载状态 */}
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-ski-blue" />
              <span className="ml-2 text-gray-600">加载中...</span>
            </div>
          )}

          {/* 错误状态 */}
          {error && !isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={fetchAthletes}
                className="bg-ski-blue text-white px-4 py-2 rounded-md hover:bg-ski-blue/90"
              >
                重试
              </button>
            </div>
          )}

          {/* 空状态 */}
          {!isLoading && !error && athletes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <User className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600">暂无运动员数据</p>
            </div>
          )}

          {/* 数据表格 */}
          {!isLoading && !error && athletes.length > 0 && (
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-30">
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
                      积分
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      省份/俱乐部
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      状态
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {athletes.map((athlete) => (
                    <tr key={athlete.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            athlete.currentRank === 1 ? 'bg-yellow-100 text-yellow-800' :
                            athlete.currentRank === 2 ? 'bg-gray-100 text-gray-800' :
                            athlete.currentRank === 3 ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {athlete.currentRank || '-'}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                              <User className="h-6 w-6 text-gray-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{athlete.name}</div>
                            <div className="text-sm text-gray-500">
                              {athlete.gender === 'MALE' ? '男' : '女'}
                              {athlete.uSeriesGroup && ` · ${athlete.uSeriesGroup}`}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          sportTypeColors[athlete.sportType] || 'bg-gray-100 text-gray-800'
                        }`}>
                          {sportTypeLabels[athlete.sportType] || athlete.sportType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {athlete.currentPoints?.toFixed(2) || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>{athlete.province || '-'}</div>
                        {athlete.club && (
                          <div className="text-xs text-gray-500">{athlete.club}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          statusColors[athlete.status] || 'bg-gray-100 text-gray-800'
                        }`}>
                          {statusLabels[athlete.status] || athlete.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Link
                          href={`/athletes/${athlete.id}`}
                          className="text-ski-blue hover:text-ski-blue/80 font-medium"
                        >
                          查看详情
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 分页 */}
        {!isLoading && !error && athletes.length > 0 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-6 rounded-lg shadow-md">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                上一页
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
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
                  <span className="font-medium">{Math.min(page * pageSize, total)}</span> 条，
                  共 <span className="font-medium">{total}</span> 条结果
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
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
                            ? 'z-10 bg-ski-blue border-ski-blue text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
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
      </div>
    </div>
  )
}
