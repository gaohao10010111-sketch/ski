'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { getImagePath } from '@/utils/paths'
import { useToast } from '@/components/Toast'
import {
  BarChart3,
  TrendingUp,
  Users,
  Trophy,
  Calendar,
  MapPin,
  Target,
  Award,
  PieChart,
  Activity,
  Download,
  Filter,
  Loader2,
  AlertCircle,
  Mountain,
  Sparkles,
  ArrowLeftRight,
  Wind
} from 'lucide-react'
import { statsApi, rankingsApi, type StatsOverview, type RankingItem } from '@/lib/api'
import { latestResults } from '@/data/latestResults'

// 从本地数据计算统计信息
const calculateLocalStats = (): StatsOverview => {
  // 收集所有运动员（去重）
  const allAthletes = new Set<string>()
  const athletesBySport: Record<string, Set<string>> = {
    'ALPINE_SKI': new Set(),
    'SNOWBOARD_SLOPESTYLE_BIGAIR': new Set(),
    'SNOWBOARD_PARALLEL': new Set(),
    'FREESTYLE_SLOPESTYLE_BIGAIR': new Set()
  }

  latestResults.competitions.forEach(comp => {
    const sportKey = comp.sportType === 'alpine' ? 'ALPINE_SKI' :
                     comp.sportType === 'snowboard-slopestyle' ? 'SNOWBOARD_SLOPESTYLE_BIGAIR' :
                     comp.sportType === 'snowboard-parallel' ? 'SNOWBOARD_PARALLEL' :
                     'FREESTYLE_SLOPESTYLE_BIGAIR'
    comp.events.forEach(event => {
      event.athletes.forEach(athlete => {
        allAthletes.add(athlete.name)
        athletesBySport[sportKey]?.add(athlete.name)
      })
    })
  })

  const completedCount = latestResults.competitions.filter(c => c.status === 'completed').length

  return {
    overview: {
      totalAthletes: allAthletes.size,
      activeAthletes: allAthletes.size,
      totalCompetitions: latestResults.competitions.length,
      completedCompetitions: completedCount,
      upcomingCompetitions: latestResults.competitions.length - completedCount,
      currentSeason: '2025-2026'
    },
    athletesBySport: Object.entries(athletesBySport).map(([sportType, athletes]) => ({
      sportType,
      count: athletes.size
    })).filter(item => item.count > 0),
    recentCompetitions: latestResults.competitions.slice(0, 5).map((comp, index) => ({
      id: `local-${index}`,
      name: comp.competition,
      sportType: comp.sportType === 'alpine' ? 'ALPINE_SKI' :
                 comp.sportType === 'snowboard-slopestyle' ? 'SNOWBOARD_SLOPESTYLE_BIGAIR' :
                 comp.sportType === 'snowboard-parallel' ? 'SNOWBOARD_PARALLEL' :
                 'FREESTYLE_SLOPESTYLE_BIGAIR',
      date: comp.date,
      status: comp.status === 'completed' ? 'COMPLETED' :
              comp.status === 'ongoing' ? 'ONGOING' : 'UPCOMING',
      participantCount: comp.events.reduce((sum, e) => sum + e.athletes.length, 0)
    })),
    topAthletes: []
  }
}

// 运动类型配置
const sportTypeConfig: Record<string, { label: string; icon: React.ComponentType<{ className?: string }>; color: string }> = {
  ALPINE_SKI: { label: '高山滑雪', icon: Mountain, color: 'bg-blue-500' },
  SNOWBOARD_SLOPESTYLE_BIGAIR: { label: '单板坡障/大跳台', icon: Sparkles, color: 'bg-purple-500' },
  SNOWBOARD_PARALLEL: { label: '单板平行项目', icon: ArrowLeftRight, color: 'bg-green-500' },
  FREESTYLE_SLOPESTYLE_BIGAIR: { label: '自由式坡障/大跳台', icon: Wind, color: 'bg-orange-500' }
}

export default function CompetitionStatsPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('season')
  const [selectedSportType, setSelectedSportType] = useState('all')
  const { showToast } = useToast()

  // API数据状态
  const [statsData, setStatsData] = useState<StatsOverview | null>(null)
  const [topAthletes, setTopAthletes] = useState<RankingItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 获取统计数据
  const fetchData = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const [statsResponse, rankingsResponse] = await Promise.all([
        statsApi.overview(),
        rankingsApi.list({ pageSize: 10 })
      ])

      if (statsResponse.success && statsResponse.data) {
        setStatsData(statsResponse.data)
      } else {
        // API返回失败，使用本地数据
        setStatsData(calculateLocalStats())
      }

      if (rankingsResponse.success && rankingsResponse.data) {
        setTopAthletes(rankingsResponse.data)
      }
    } catch (err) {
      // 网络错误，使用本地数据回退
      setStatsData(calculateLocalStats())
      setTopAthletes([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleExport = () => {
    if (!statsData) {
      showToast('没有可导出的数据', 'warning')
      return
    }

    // 生成CSV数据
    const headers = ['指标', '数值']
    const rows = [
      ['总运动员数', statsData.overview.totalAthletes.toString()],
      ['活跃运动员', statsData.overview.activeAthletes.toString()],
      ['总比赛数', statsData.overview.totalCompetitions.toString()],
      ['已完成比赛', statsData.overview.completedCompetitions.toString()],
      ['即将举办', statsData.overview.upcomingCompetitions.toString()],
      ['当前赛季', statsData.overview.currentSeason]
    ]

    const csvContent = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `竞赛统计_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(link.href)

    showToast('统计数据导出成功！', 'success')
  }

  const handleDetailedAnalysis = () => {
    showToast('详细分析报告生成中...', 'info')
  }

  const getColorForIndex = (index: number) => {
    const colors = [
      'bg-ski-blue', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500',
      'bg-indigo-500', 'bg-pink-500', 'bg-gray-500'
    ]
    return colors[index % colors.length]
  }

  // 加载状态
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-ski-blue animate-spin mb-4" />
          <p className="text-gray-500">加载统计数据中...</p>
        </div>
      </div>
    )
  }

  // 错误状态
  if (error || !statsData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center py-20">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-gray-600 mb-4">{error || '获取数据失败'}</p>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            重新加载
          </button>
        </div>
      </div>
    )
  }

  // 计算运动员按项目分布
  const athletesBySportMap = statsData.athletesBySport.reduce((acc, item) => {
    acc[item.sportType] = item.count
    return acc
  }, {} as Record<string, number>)

  const totalAthletesBySport = statsData.athletesBySport.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="section-title">竞赛统计</h1>
        <p className="text-gray-600 text-lg">全面的竞赛数据分析和统计报告</p>
      </div>

      {/* 筛选控件 */}
      <div className="card mb-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">统计范围:</span>
          </div>

          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue"
          >
            <option value="season">本赛季</option>
            <option value="year">本年度</option>
            <option value="all">全部</option>
          </select>

          <select
            value={selectedSportType}
            onChange={(e) => setSelectedSportType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue"
          >
            <option value="all">全部项目</option>
            <option value="ALPINE_SKI">高山滑雪</option>
            <option value="SNOWBOARD_SLOPESTYLE_BIGAIR">单板坡障/大跳台</option>
            <option value="SNOWBOARD_PARALLEL">单板平行项目</option>
            <option value="FREESTYLE_SLOPESTYLE_BIGAIR">自由式坡障/大跳台</option>
          </select>

          <div className="flex space-x-2 ml-auto">
            <button
              className="btn-secondary flex items-center"
              onClick={handleExport}
            >
              <Download className="h-4 w-4 mr-2" />
              导出报告
            </button>
            <button
              className="btn-primary flex items-center"
              onClick={handleDetailedAnalysis}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              详细分析
            </button>
          </div>
        </div>
      </div>

      {/* 核心统计指标 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 relative z-10">
        <div className="card text-center">
          <Users className="h-8 w-8 text-ski-blue mx-auto mb-2" />
          <div className="text-3xl font-bold text-ski-navy">{statsData.overview.totalAthletes}</div>
          <div className="text-sm text-gray-600">注册运动员</div>
          <div className="text-xs text-green-600 mt-1">活跃 {statsData.overview.activeAthletes} 人</div>
        </div>

        <div className="card text-center">
          <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-ski-navy">{statsData.overview.totalCompetitions}</div>
          <div className="text-sm text-gray-600">赛事总数</div>
          <div className="text-xs text-green-600 mt-1">已完成 {statsData.overview.completedCompetitions} 场</div>
        </div>

        <div className="card text-center">
          <Target className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-ski-navy">{statsData.overview.upcomingCompetitions}</div>
          <div className="text-sm text-gray-600">即将举办</div>
          <div className="text-xs text-gray-500 mt-1">场赛事</div>
        </div>

        <div className="card text-center">
          <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-ski-navy">{statsData.overview.currentSeason}</div>
          <div className="text-sm text-gray-600">当前赛季</div>
          <div className="text-xs text-green-600 mt-1">赛季进行中</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 relative z-10">
        {/* 项目分布 */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-ski-navy flex items-center">
              <PieChart className="h-6 w-6 mr-2" />
              运动员项目分布
            </h3>
          </div>

          <div className="space-y-4">
            {statsData.athletesBySport.map((item, index) => {
              const sportConfig = sportTypeConfig[item.sportType]
              const percentage = totalAthletesBySport > 0
                ? (item.count / totalAthletesBySport) * 100
                : 0

              return (
                <div key={item.sportType}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {sportConfig?.label || item.sportType}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{item.count} 人</span>
                      <span className="text-xs text-gray-500">({percentage.toFixed(1)}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${sportConfig?.color || getColorForIndex(index)}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 最近比赛 */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-ski-navy flex items-center">
              <Trophy className="h-6 w-6 mr-2" />
              最近赛事
            </h3>
            <Link href="/competitions" className="text-sm text-ski-blue hover:underline">
              查看全部
            </Link>
          </div>

          <div className="space-y-4">
            {statsData.recentCompetitions.length > 0 ? (
              statsData.recentCompetitions.slice(0, 5).map((comp) => {
                const sportConfig = sportTypeConfig[comp.sportType]
                return (
                  <div key={comp.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">{comp.name}</div>
                      <div className="text-xs text-gray-500">
                        {sportConfig?.label || comp.sportType} • {comp.date}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded ${
                        comp.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                        comp.status === 'ONGOING' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {comp.status === 'COMPLETED' ? '已完成' :
                         comp.status === 'ONGOING' ? '进行中' : '即将开始'}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">{comp.participantCount} 人参赛</div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="text-center py-8 text-gray-500">暂无赛事数据</div>
            )}
          </div>
        </div>
      </div>

      {/* 优秀运动员榜单 */}
      <div className="card relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-ski-navy flex items-center">
            <Trophy className="h-6 w-6 mr-2" />
            积分排行榜
          </h3>
          <Link href="/points/rankings" className="text-sm text-ski-blue hover:underline">
            查看完整排名
          </Link>
        </div>

        {topAthletes.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    排名
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    运动员
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    项目
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    省份/俱乐部
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    积分
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    参赛次数
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topAthletes.map((athlete, index) => {
                  const sportConfig = sportTypeConfig[athlete.sportType]
                  return (
                    <tr key={athlete.athleteId} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-yellow-500' :
                          index === 1 ? 'bg-gray-400' :
                          index === 2 ? 'bg-orange-500' : 'bg-gray-300'
                        }`}>
                          {athlete.rank}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          href={`/athletes/${athlete.athleteId}`}
                          className="text-sm font-medium text-gray-900 hover:text-ski-blue"
                        >
                          {athlete.athleteName}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">
                          {sportConfig?.label || athlete.sportType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">
                          {athlete.province || athlete.club || '-'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-ski-blue">
                          {athlete.totalPoints.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">
                          {athlete.competitionCount} 次
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">暂无排名数据</div>
        )}
      </div>

      {/* 各项目顶尖选手 */}
      {statsData.topAthletes && statsData.topAthletes.length > 0 && (
        <div className="card mt-8 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-ski-navy flex items-center">
              <Award className="h-6 w-6 mr-2" />
              各项目顶尖选手
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsData.topAthletes.map((item, index) => {
              const sportConfig = sportTypeConfig[item.sportType]
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-2">
                    {sportConfig?.label || item.sportType}
                    {item.discipline && ` - ${item.discipline}`}
                  </div>
                  <Link
                    href={`/athletes/${item.athlete.id}`}
                    className="font-medium text-gray-900 hover:text-ski-blue block mb-1"
                  >
                    {item.athlete.name}
                  </Link>
                  <div className="text-sm text-gray-600">
                    {item.athlete.province || '-'}
                  </div>
                  <div className="text-lg font-bold text-ski-blue mt-2">
                    {item.totalPoints.toFixed(2)} 分
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* 总结和建议 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 relative z-10">
        <div className="card">
          <h3 className="text-lg font-semibold text-ski-navy mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            数据洞察
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 共有 {statsData.overview.totalAthletes} 名注册运动员</li>
            <li>• 本赛季已举办 {statsData.overview.completedCompetitions} 场比赛</li>
            <li>• 即将举办 {statsData.overview.upcomingCompetitions} 场比赛</li>
            <li>• 活跃运动员占比 {((statsData.overview.activeAthletes / statsData.overview.totalAthletes) * 100 || 0).toFixed(1)}%</li>
            <li>• 当前赛季：{statsData.overview.currentSeason}</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-ski-navy mb-4">发展建议</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 加强青少年选手培养，扩大后备人才</li>
            <li>• 增加各地区赛事覆盖，提高参与度</li>
            <li>• 完善积分体系，激励运动员参赛</li>
            <li>• 优化赛事组织，提升比赛质量</li>
            <li>• 加强数据分析，指导科学训练</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
