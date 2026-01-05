'use client'

import { useState, useMemo } from 'react'
import { Trophy, Medal, Award, Crown, Download, Search, Database, Filter, Star } from 'lucide-react'
import { useToast } from '@/components/Toast'
import { totalRankingsData, TotalRankingItem } from '@/data/totalRankings'

export default function TotalRankingsPage() {
  // 筛选状态
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isExporting, setIsExporting] = useState(false)

  const { showToast } = useToast()

  // 筛选后的排名数据
  const filteredRankings = useMemo(() => {
    let result = totalRankingsData.rankings

    // 按年龄组筛选
    if (selectedAgeGroup !== 'all') {
      result = result.filter(r => r.ageGroup === selectedAgeGroup)
    }

    // 按性别筛选
    if (selectedGender !== 'all') {
      result = result.filter(r => r.gender === selectedGender)
    }

    // 搜索过滤
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(r =>
        r.athleteName.toLowerCase().includes(term) ||
        r.team.toLowerCase().includes(term)
      )
    }

    // 重新计算排名
    return result.map((item, index) => ({
      ...item,
      rank: index + 1
    }))
  }, [selectedAgeGroup, selectedGender, searchTerm])

  // 导出CSV
  const handleExport = async () => {
    if (filteredRankings.length === 0) {
      showToast('没有数据可导出', 'warning')
      return
    }

    setIsExporting(true)
    try {
      const rows: string[][] = []
      rows.push(['排名', '运动员', '单位', '年龄组', '性别', '总积分', '参赛次数', '最佳名次', '平均积分'])

      for (const item of filteredRankings) {
        rows.push([
          String(item.rank),
          item.athleteName,
          item.team,
          item.ageGroup,
          item.gender,
          String(item.totalPoints),
          String(item.competitionCount),
          String(item.bestRank),
          item.avgPoints.toFixed(1)
        ])
      }

      const csvContent = rows.map(row => row.join(',')).join('\n')
      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `总积分排行榜_${new Date().toISOString().split('T')[0]}.csv`
      link.click()
      URL.revokeObjectURL(url)

      showToast(`成功导出 ${rows.length - 1} 条数据`, 'success')
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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">总积分排行榜</h1>
          <p className="text-xl text-gray-600">跨项目累计积分排名 · 2025-2026赛季</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
            <Database className="h-4 w-4" />
            数据来源: 官方成绩公告
          </div>
        </div>

        {/* 说明提示 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <Filter className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-800">总积分说明</h3>
              <p className="text-sm text-blue-700 mt-1">
                总积分 = 同一运动员在不同比赛中获得的积分累加。
                可按<strong>年龄组、性别</strong>进行筛选查看。
              </p>
            </div>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* 搜索框 */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索运动员或单位..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* 年龄组 */}
            <div>
              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">所有年龄组</option>
                {totalRankingsData.filters.ageGroups.map(ag => (
                  <option key={ag} value={ag}>{ag}</option>
                ))}
              </select>
            </div>

            {/* 性别 */}
            <div>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">所有性别</option>
                {totalRankingsData.filters.genders.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 筛选结果和导出 */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              找到 <span className="font-bold text-yellow-600">{filteredRankings.length}</span> 名运动员
            </span>
            <button
              onClick={handleExport}
              disabled={isExporting || filteredRankings.length === 0}
              className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              {isExporting ? '导出中...' : '导出CSV'}
            </button>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-yellow-500">{totalRankingsData.stats.athleteCount}</div>
            <div className="text-sm text-gray-600">参赛运动员</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-blue-500">{totalRankingsData.stats.competitionCount}</div>
            <div className="text-sm text-gray-600">已录入比赛</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-green-500">{totalRankingsData.stats.totalResults}</div>
            <div className="text-sm text-gray-600">参赛记录</div>
          </div>
        </div>

        {/* 空数据状态 */}
        {filteredRankings.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-500">暂无符合条件的排名数据</p>
            <p className="text-sm text-gray-400 mt-1">请调整筛选条件后重试</p>
          </div>
        )}

        {/* 排名表格 */}
        {filteredRankings.length > 0 && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 text-white">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Trophy className="h-6 w-6" />
                总积分排名
              </h2>
              <p className="text-yellow-100 text-sm mt-1">
                2025-2026赛季 · 跨项目累计积分
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-20">排名</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">运动员</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">单位</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">年龄组</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">参赛次数</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">最佳名次</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">平均积分</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-28">总积分</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRankings.map((item) => (
                    <tr
                      key={`${item.athleteId}-${item.ageGroup}-${item.gender}`}
                      className={`hover:bg-gray-50 ${item.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''}`}
                    >
                      <td className="px-4 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-1">
                          {getRankIcon(item.rank)}
                          {item.rank <= 3 && (
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              item.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' :
                              item.rank === 2 ? 'bg-gray-200 text-gray-600' :
                              item.rank === 3 ? 'bg-orange-200 text-orange-700' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              <span className="text-sm font-bold">
                                {item.athleteName.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{item.athleteName}</div>
                            <div className="text-xs text-gray-500">{item.gender}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600" title={item.team}>
                        {item.team.length > 15 ? item.team.substring(0, 15) + '...' : item.team}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {item.ageGroup}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.competitionCount} 次
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.bestRank === 1 ? 'bg-yellow-100 text-yellow-800' :
                          item.bestRank <= 3 ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          第 {item.bestRank} 名
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-600">
                        {item.avgPoints.toFixed(1)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-center">
                        <span className={`inline-flex px-4 py-2 text-sm font-bold rounded-lg ${
                          item.rank === 1
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md'
                            : item.rank <= 3
                            ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {item.totalPoints} 分
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* 排行榜说明 */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">积分规则说明</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">U系列统一积分体系（360分制）</h4>
              <ul className="space-y-1">
                <li>• 第1名：360分</li>
                <li>• 第2名：329分</li>
                <li>• 第3名：303分</li>
                <li>• 第4-50名：递减至1分</li>
                <li>• 50名后：计0分</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">总积分计算规则</h4>
              <ul className="space-y-1">
                <li>• 总积分 = 所有参赛场次积分之和</li>
                <li>• 支持按年龄组、性别筛选</li>
                <li>• 同一运动员的不同比赛积分累加</li>
                <li>• 跨项目（单板/自由式/高山）均计入</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
