'use client'

import { useState, useEffect, useCallback } from 'react'
import { TrendingUp, TrendingDown, BarChart3, Calendar, User, Loader2, AlertCircle, Search } from 'lucide-react'
import { athletesApi, Athlete } from '@/lib/api'

// 项目类型映射
const sportTypeLabels: Record<string, string> = {
  ALPINE_SKI: '高山滑雪',
  SNOWBOARD_SLOPESTYLE_BIGAIR: '单板坡面障碍技巧/大跳台',
  SNOWBOARD_PARALLEL: '单板平行项目',
  FREESTYLE_SLOPESTYLE_BIGAIR: '自由式坡面障碍技巧/大跳台'
}

interface PointsHistory {
  id: string
  date: string
  sportType: string
  discipline: string | null
  previousPoints: number
  newPoints: number
  change: number
  reason: string
  competitionId: string | null
}

interface AthletePointsData {
  athlete: { id: string; name: string; sportType: string }
  seasonSummary: Array<{
    season: string
    sportType: string
    discipline: string | null
    totalPoints: number
    competitionCount: number
    rank: number | null
  }>
  history: PointsHistory[]
  competitionResults: Array<{
    id: string
    competition: {
      id: string
      name: string
      startDate: string
      sportType: string
      discipline: string | null
    }
    finalRank: number
    finalPoints: number
    status: string
    createdAt: string
  }>
}

export default function PointsTrendsPage() {
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [selectedAthleteId, setSelectedAthleteId] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState('6months')
  const [searchQuery, setSearchQuery] = useState('')
  const [athletePointsData, setAthletePointsData] = useState<AthletePointsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingPoints, setLoadingPoints] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 获取运动员列表
  const fetchAthletes = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await athletesApi.list({ pageSize: 100 })
      if (response.success && response.data) {
        setAthletes(response.data)
        // 默认选择第一个运动员
        if (response.data.length > 0 && !selectedAthleteId) {
          setSelectedAthleteId(response.data[0].id)
        }
      } else {
        setError(response.error?.message || '获取运动员列表失败')
      }
    } catch {
      setError('网络错误，请稍后重试')
    } finally {
      setLoading(false)
    }
  }, [selectedAthleteId])

  // 获取选中运动员的积分数据
  const fetchAthletePoints = useCallback(async (athleteId: string) => {
    if (!athleteId) return
    setLoadingPoints(true)
    try {
      const response = await athletesApi.getPoints(athleteId)
      if (response.success && response.data) {
        setAthletePointsData(response.data)
      } else {
        setAthletePointsData(null)
      }
    } catch {
      setAthletePointsData(null)
    } finally {
      setLoadingPoints(false)
    }
  }, [])

  useEffect(() => {
    fetchAthletes()
  }, [fetchAthletes])

  useEffect(() => {
    if (selectedAthleteId) {
      fetchAthletePoints(selectedAthleteId)
    }
  }, [selectedAthleteId, fetchAthletePoints])

  // 筛选运动员
  const filteredAthletes = athletes.filter(athlete =>
    athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (athlete.province && athlete.province.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  // 计算趋势数据
  const calculateTrendData = () => {
    if (!athletePointsData || athletePointsData.history.length === 0) {
      return null
    }

    const history = athletePointsData.history
    const sortedHistory = [...history].sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    )

    // 根据选择的时间段筛选
    const now = new Date()
    const periodMonths = selectedPeriod === '3months' ? 3 : selectedPeriod === '6months' ? 6 : selectedPeriod === '1year' ? 12 : 24
    const cutoffDate = new Date(now.getFullYear(), now.getMonth() - periodMonths, 1)
    const filteredHistory = sortedHistory.filter(h => new Date(h.date) >= cutoffDate)

    if (filteredHistory.length === 0) return null

    const latestPoints = filteredHistory[filteredHistory.length - 1].newPoints
    const earliestPoints = filteredHistory[0].previousPoints
    const allPoints = filteredHistory.map(h => h.newPoints)
    const bestPoints = Math.min(...allPoints)
    const worstPoints = Math.max(...allPoints)

    // 判断趋势（高山滑雪积分越低越好）
    let trend: 'improving' | 'declining' | 'stable' = 'stable'
    if (latestPoints < earliestPoints - 5) trend = 'improving'
    else if (latestPoints > earliestPoints + 5) trend = 'declining'

    // 按月分组
    const monthlyMap = new Map<string, { points: number; competitions: number; bestRank: number }>()
    filteredHistory.forEach(h => {
      const month = h.date.substring(0, 7) // YYYY-MM
      const existing = monthlyMap.get(month)
      if (existing) {
        existing.competitions++
        if (h.newPoints < existing.points) existing.points = h.newPoints
      } else {
        monthlyMap.set(month, { points: h.newPoints, competitions: 1, bestRank: 0 })
      }
    })

    // 从比赛结果获取最佳排名
    athletePointsData.competitionResults.forEach(result => {
      const month = result.competition.startDate.substring(0, 7)
      const existing = monthlyMap.get(month)
      if (existing && (existing.bestRank === 0 || result.finalRank < existing.bestRank)) {
        existing.bestRank = result.finalRank
      }
    })

    const monthlyData = Array.from(monthlyMap.entries()).map(([month, data]) => ({
      month,
      points: data.points,
      competitions: data.competitions,
      bestResult: data.bestRank > 0 ? `第${data.bestRank}名` : '-'
    })).sort((a, b) => a.month.localeCompare(b.month))

    return {
      currentPoints: latestPoints,
      bestPoints,
      worstPoints,
      trend,
      monthlyData
    }
  }

  const selectedAthlete = athletes.find(a => a.id === selectedAthleteId)
  const trendData = calculateTrendData()

  // 加载状态
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-green-600 mx-auto mb-4" />
          <p className="text-gray-600">加载运动员数据中...</p>
        </div>
      </div>
    )
  }

  // 错误状态
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchAthletes}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            重新加载
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">积分趋势分析</h1>
          <p className="text-xl text-gray-600">
            运动员积分变化趋势与表现分析
          </p>
        </div>

        {/* 筛选器 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 inline mr-1" />
                选择运动员
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索运动员..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
                />
              </div>
              <select
                value={selectedAthleteId}
                onChange={(e) => setSelectedAthleteId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">请选择运动员</option>
                {filteredAthletes.map(athlete => (
                  <option key={athlete.id} value={athlete.id}>
                    {athlete.name} - {sportTypeLabels[athlete.sportType] || athlete.sportType}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                时间周期
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mt-10"
              >
                <option value="3months">近3个月</option>
                <option value="6months">近6个月</option>
                <option value="1year">近1年</option>
                <option value="2years">近2年</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                <BarChart3 className="h-4 w-4 inline mr-1" />
                导出报告
              </button>
            </div>
          </div>
        </div>

        {/* 加载积分数据 */}
        {loadingPoints && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-green-600 mx-auto mb-2" />
            <p className="text-gray-600">加载积分数据中...</p>
          </div>
        )}

        {/* 无数据提示 */}
        {!loadingPoints && selectedAthlete && !trendData && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
            <AlertCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">该运动员暂无积分历史数据</p>
          </div>
        )}

        {/* 运动员概况 */}
        {selectedAthlete && trendData && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedAthlete.name}</h2>
                <p className="text-gray-600">
                  {sportTypeLabels[selectedAthlete.sportType] || selectedAthlete.sportType}
                  {selectedAthlete.province && ` · ${selectedAthlete.province}`}
                </p>
              </div>
              <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                trendData.trend === 'improving' ? 'bg-green-100 text-green-800' :
                trendData.trend === 'declining' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {trendData.trend === 'improving' && <TrendingUp className="h-4 w-4 mr-1" />}
                {trendData.trend === 'declining' && <TrendingDown className="h-4 w-4 mr-1" />}
                {trendData.trend === 'improving' ? '积分提升中' :
                 trendData.trend === 'declining' ? '积分下降中' : '积分稳定'}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{trendData.currentPoints.toFixed(2)}</div>
                <div className="text-gray-600">当前积分</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{trendData.bestPoints.toFixed(2)}</div>
                <div className="text-gray-600">最好积分</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{trendData.worstPoints.toFixed(2)}</div>
                <div className="text-gray-600">最差积分</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {(trendData.worstPoints - trendData.bestPoints).toFixed(2)}
                </div>
                <div className="text-gray-600">积分区间</div>
              </div>
            </div>
          </div>
        )}

        {/* 趋势图表 */}
        {trendData && trendData.monthlyData.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">积分变化趋势</h3>

            {/* 简化的趋势图 */}
            <div className="relative h-64 bg-gray-50 rounded-lg p-4">
              <div className="flex items-end justify-between h-full gap-2">
                {trendData.monthlyData.map((data) => {
                  const minPoints = trendData.bestPoints - 10
                  const maxPoints = trendData.worstPoints + 10
                  const range = maxPoints - minPoints
                  const height = Math.max(10, Math.min(100, ((data.points - minPoints) / range) * 100))
                  return (
                    <div key={data.month} className="flex flex-col items-center flex-1">
                      <div className="text-xs text-gray-600 mb-2">{data.points.toFixed(1)}</div>
                      <div
                        className="bg-blue-500 rounded-t w-full max-w-[40px] transition-all duration-300 hover:bg-blue-600 cursor-pointer"
                        style={{ height: `${height}%` }}
                        title={`${data.month}: ${data.points.toFixed(2)}分\n参赛: ${data.competitions}次\n最佳: ${data.bestResult}`}
                      ></div>
                      <div className="text-xs text-gray-500 mt-2 transform -rotate-45 origin-left">
                        {data.month.split('-')[1]}月
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              * 柱状图显示每月最好积分，鼠标悬停查看详细信息
            </div>
          </div>
        )}

        {/* 详细数据表 */}
        {trendData && trendData.monthlyData.length > 0 && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">月度详细数据</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      月份
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      积分
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      参赛次数
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      最好成绩
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      积分变化
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      趋势
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {trendData.monthlyData.map((data, index) => {
                    const prevData = index > 0 ? trendData.monthlyData[index - 1] : null
                    const change = prevData ? data.points - prevData.points : 0
                    const isImproving = change < 0 // 高山滑雪积分越低越好

                    return (
                      <tr key={data.month} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {data.month}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className="font-bold">{data.points.toFixed(2)}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {data.competitions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {data.bestResult}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {prevData ? (
                            <span className={change < 0 ? 'text-green-600' : change > 0 ? 'text-red-600' : 'text-gray-600'}>
                              {change > 0 ? '+' : ''}{change.toFixed(2)}
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {prevData ? (
                            <div className="flex items-center">
                              {isImproving ? (
                                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              ) : change > 0 ? (
                                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                              ) : (
                                <div className="h-4 w-4 mr-1"></div>
                              )}
                              <span className={`text-sm ${
                                isImproving ? 'text-green-600' :
                                change > 0 ? 'text-red-600' : 'text-gray-600'
                              }`}>
                                {isImproving ? '提升' : change > 0 ? '下降' : '持平'}
                              </span>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 赛季积分总览 */}
        {athletePointsData && athletePointsData.seasonSummary.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">赛季积分总览</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {athletePointsData.seasonSummary.map((season, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{season.season}</span>
                    {season.rank && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        排名 #{season.rank}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {sportTypeLabels[season.sportType] || season.sportType}
                    {season.discipline && ` - ${season.discipline}`}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-ski-blue">{season.totalPoints.toFixed(2)}</span>
                    <span className="text-sm text-gray-500">分</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    参赛 {season.competitionCount} 次
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 最近比赛成绩 */}
        {athletePointsData && athletePointsData.competitionResults.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">最近比赛成绩</h3>
            <div className="space-y-3">
              {athletePointsData.competitionResults.slice(0, 5).map((result) => (
                <div key={result.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      result.finalRank === 1 ? 'bg-yellow-500' :
                      result.finalRank === 2 ? 'bg-gray-400' :
                      result.finalRank === 3 ? 'bg-orange-500' : 'bg-gray-300'
                    }`}>
                      {result.finalRank}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{result.competition.name}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(result.competition.startDate).toLocaleDateString('zh-CN')}
                        {' · '}
                        {sportTypeLabels[result.competition.sportType] || result.competition.sportType}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-ski-blue">{result.finalPoints.toFixed(2)}</div>
                    <div className="text-xs text-gray-500">积分</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 无选中运动员提示 */}
        {!selectedAthleteId && athletes.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">请从上方选择一位运动员查看积分趋势</p>
          </div>
        )}

        {/* 无运动员数据 */}
        {athletes.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">暂无运动员数据</p>
          </div>
        )}
      </div>
    </div>
  )
}