'use client'

import { useState, useEffect, useCallback } from 'react'
import { getImagePath } from '@/utils/paths'
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  Search,
  Filter,
  Eye,
  Star,
  Mountain,
  Snowflake,
  Flag,
  Award,
  Loader2,
  AlertCircle
} from 'lucide-react'
import { useToast } from '@/components/Toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { competitionsApi, statsApi, type Competition, type StatsOverview } from '@/lib/api'
import { latestResults } from '@/data/latestResults'

// 将本地数据转换为Competition格式
const localCompetitions: Competition[] = latestResults.competitions.map((comp, index) => ({
  id: `local-${index}`,
  name: comp.competition,
  sportType: comp.sportType === 'alpine' ? 'ALPINE_SKI' :
             comp.sportType === 'snowboard-slopestyle' ? 'SNOWBOARD_SLOPESTYLE_BIGAIR' :
             comp.sportType === 'snowboard-parallel' ? 'SNOWBOARD_PARALLEL' :
             'FREESTYLE_SLOPESTYLE_BIGAIR',
  discipline: null,
  location: comp.location,
  venue: null,
  startDate: comp.date,
  endDate: comp.endDate,
  format: 'U系列',
  status: comp.status === 'completed' ? 'COMPLETED' :
          comp.status === 'ongoing' ? 'ONGOING' : 'UPCOMING',
  participantCount: comp.events.reduce((sum, e) => sum + e.athletes.length, 0),
  organizer: '中国滑雪协会',
  raceLevel: 'A',
  pointsTier: 'TIER_360',
}))

// 项目类型映射
const sportTypeLabels: Record<string, string> = {
  ALPINE_SKI: '高山滑雪',
  SNOWBOARD_SLOPESTYLE_BIGAIR: '单板坡障/大跳台',
  SNOWBOARD_PARALLEL: '单板平行项目',
  FREESTYLE_SLOPESTYLE_BIGAIR: '自由式坡障/大跳台',
}

// 状态配置
const statusConfig: Record<string, { label: string; color: string }> = {
  UPCOMING: { label: '即将开始', color: 'bg-blue-100 text-blue-800' },
  ONGOING: { label: '进行中', color: 'bg-green-100 text-green-800' },
  COMPLETED: { label: '已结束', color: 'bg-gray-100 text-gray-800' },
  CANCELLED: { label: '已取消', color: 'bg-red-100 text-red-800' },
}

// 级别配置
const levelConfig: Record<string, { label: string; color: string; icon: typeof Flag }> = {
  A: { label: 'A级赛事', color: 'text-red-600', icon: Flag },
  B: { label: 'B级赛事', color: 'text-blue-600', icon: Star },
  C: { label: 'C级赛事', color: 'text-green-600', icon: MapPin },
}

// 积分档位配置
const tierConfig: Record<string, { label: string; color: string }> = {
  TIER_360: { label: '360分档', color: 'text-red-600' },
  TIER_240: { label: '240分档', color: 'text-blue-600' },
  TIER_120: { label: '120分档', color: 'text-green-600' },
}

// 根据运动类型选择卡片图片
const sportTypeImages: Record<string, string> = {
  ALPINE_SKI: '/images/ski-bg.jpg',
  SNOWBOARD_SLOPESTYLE_BIGAIR: '/images/alpine-race.jpg',
  SNOWBOARD_PARALLEL: '/images/snowboard-jump.jpg',
  FREESTYLE_SLOPESTYLE_BIGAIR: '/images/freestyle-skiing.jpg',
}

// 天气图标（随机装饰用）
const weatherConfig: Record<string, { icon: typeof Snowflake; color: string }> = {
  snow: { icon: Snowflake, color: 'text-blue-500' },
  clear: { icon: Star, color: 'text-yellow-500' },
  cloudy: { icon: Mountain, color: 'text-gray-500' },
}

export default function CompetitionsPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedSportType, setSelectedSportType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [stats, setStats] = useState<StatsOverview | null>(null)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [total, setTotal] = useState(0)
  const router = useRouter()
  const { showToast } = useToast()

  // 获取比赛数据
  const fetchCompetitions = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const params: Record<string, unknown> = {
        page,
        pageSize,
        sportType: selectedSportType !== 'all' ? selectedSportType : undefined,
        status: selectedStatus !== 'all' ? selectedStatus : undefined,
      }

      const response = await competitionsApi.list(params)
      if (response.success && response.data && response.data.length > 0) {
        // 前端搜索过滤
        let filtered = response.data
        if (searchTerm) {
          const term = searchTerm.toLowerCase()
          filtered = filtered.filter(
            c => c.name.toLowerCase().includes(term) || c.location.toLowerCase().includes(term)
          )
        }
        setCompetitions(filtered)
        setTotal(response.meta?.total || filtered.length)
      } else {
        // API无数据时使用本地数据
        let filtered = localCompetitions
        // 项目筛选
        if (selectedSportType !== 'all') {
          filtered = filtered.filter(c => c.sportType === selectedSportType)
        }
        // 状态筛选
        if (selectedStatus !== 'all') {
          filtered = filtered.filter(c => c.status === selectedStatus)
        }
        // 搜索过滤
        if (searchTerm) {
          const term = searchTerm.toLowerCase()
          filtered = filtered.filter(
            c => c.name.toLowerCase().includes(term) || c.location.toLowerCase().includes(term)
          )
        }
        setCompetitions(filtered)
        setTotal(filtered.length)
      }
    } catch (err) {
      // API错误时使用本地数据
      let filtered = localCompetitions
      // 项目筛选
      if (selectedSportType !== 'all') {
        filtered = filtered.filter(c => c.sportType === selectedSportType)
      }
      // 状态筛选
      if (selectedStatus !== 'all') {
        filtered = filtered.filter(c => c.status === selectedStatus)
      }
      // 搜索过滤
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        filtered = filtered.filter(
          c => c.name.toLowerCase().includes(term) || c.location.toLowerCase().includes(term)
        )
      }
      setCompetitions(filtered)
      setTotal(filtered.length)
    } finally {
      setIsLoading(false)
    }
  }, [page, pageSize, selectedSportType, selectedStatus, searchTerm])

  // 计算本地统计数据
  const localStats = {
    totalCompetitions: localCompetitions.length,
    totalAthletes: (() => {
      const athleteSet = new Set<string>()
      latestResults.competitions.forEach(comp => {
        comp.events.forEach(event => {
          event.athletes.forEach(a => athleteSet.add(a.name))
        })
      })
      return athleteSet.size
    })(),
    completedCompetitions: localCompetitions.filter(c => c.status === 'COMPLETED').length,
    upcomingCompetitions: localCompetitions.filter(c => c.status === 'UPCOMING').length,
  }

  // 获取统计数据
  const fetchStats = useCallback(async () => {
    try {
      const response = await statsApi.overview()
      if (response.success && response.data) {
        setStats(response.data)
      }
    } catch (err) {
      // API失败时不设置stats，使用本地数据
    }
  }, [])

  // 初始加载
  useEffect(() => {
    fetchCompetitions()
    fetchStats()
  }, [fetchCompetitions, fetchStats])

  // 搜索防抖
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchTerm, selectedStatus, selectedSportType])

  // 查看比赛详情 - 跳转到成绩公告页面
  const handleViewDetails = (competition: Competition) => {
    router.push(`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${competition.id}`)
  }

  // 获取随机天气图标（装饰用）
  const getRandomWeather = (index: number) => {
    const weathers = ['snow', 'clear', 'cloudy']
    return weathers[index % 3]
  }

  // 计算分页
  const totalPages = Math.ceil(total / pageSize)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="section-title">竞赛管理</h1>
        <p className="text-gray-600 text-lg">高山滑雪竞赛组织、管理和结果统计的专业平台</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8 relative z-10">
        <div className="card text-center p-3 md:p-4">
          <Calendar className="h-6 w-6 md:h-8 md:w-8 text-ski-blue mx-auto mb-1 md:mb-2" />
          <div className="text-xl md:text-2xl font-bold text-ski-navy">
            {stats?.overview.totalCompetitions ?? localStats.totalCompetitions}
          </div>
          <div className="text-xs md:text-sm text-gray-600">本季比赛</div>
        </div>
        <div className="card text-center p-3 md:p-4">
          <Users className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto mb-1 md:mb-2" />
          <div className="text-xl md:text-2xl font-bold text-ski-navy">
            {stats?.overview.totalAthletes ?? localStats.totalAthletes}
          </div>
          <div className="text-xs md:text-sm text-gray-600">注册运动员</div>
        </div>
        <div className="card text-center p-3 md:p-4">
          <Trophy className="h-6 w-6 md:h-8 md:w-8 text-yellow-600 mx-auto mb-1 md:mb-2" />
          <div className="text-xl md:text-2xl font-bold text-ski-navy">
            {stats?.overview.completedCompetitions ?? localStats.completedCompetitions}
          </div>
          <div className="text-xs md:text-sm text-gray-600">已完赛事</div>
        </div>
        <div className="card text-center p-3 md:p-4">
          <Clock className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mx-auto mb-1 md:mb-2" />
          <div className="text-xl md:text-2xl font-bold text-ski-navy">
            {stats?.overview.upcomingCompetitions ?? localStats.upcomingCompetitions}
          </div>
          <div className="text-xs md:text-sm text-gray-600">即将开始</div>
        </div>
      </div>

      {/* 筛选和搜索 - 吸顶 */}
      <div className="sticky top-16 z-40 bg-white rounded-lg shadow-md p-3 md:p-6 mb-4 md:mb-8 border border-gray-200">
        <div className="flex flex-col gap-3 md:gap-4">
          {/* 移动端：筛选标签和结果数在同一行 */}
          <div className="flex items-center justify-between md:hidden">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-xs font-medium text-gray-700">筛选</span>
            </div>
            <span className="text-xs text-gray-600">
              找到 <span className="text-ski-blue font-bold">{total}</span> 场比赛
            </span>
          </div>

          {/* 桌面端：筛选标签 */}
          <div className="hidden md:flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">筛选条件:</span>
          </div>

          {/* 筛选下拉框 */}
          <div className="grid grid-cols-2 md:flex gap-2 md:gap-4">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-2 md:px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
            >
              <option value="all">全部状态</option>
              <option value="UPCOMING">即将开始</option>
              <option value="ONGOING">进行中</option>
              <option value="COMPLETED">已结束</option>
              <option value="CANCELLED">已取消</option>
            </select>

            <select
              value={selectedSportType}
              onChange={(e) => setSelectedSportType(e.target.value)}
              className="px-2 md:px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
            >
              <option value="all">全部项目</option>
              <option value="ALPINE_SKI">高山滑雪</option>
              <option value="FREESTYLE_SLOPESTYLE_BIGAIR">自由式坡障/大跳台</option>
              <option value="SNOWBOARD_SLOPESTYLE_BIGAIR">单板坡障/大跳台</option>
              <option value="SNOWBOARD_PARALLEL">单板平行项目</option>
            </select>
          </div>

          {/* 搜索框 */}
          <div className="relative w-full md:max-w-md">
            <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜索比赛名称或地点..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 md:pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
            />
          </div>

          {/* 桌面端：结果数 */}
          <div className="hidden md:flex items-center">
            <span className="text-sm text-gray-600 font-medium">
              找到 <span className="text-ski-blue font-bold">{total}</span> 场比赛
            </span>
          </div>
        </div>
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
            onClick={fetchCompetitions}
            className="bg-ski-blue text-white px-4 py-2 rounded-md hover:bg-ski-blue/90"
          >
            重试
          </button>
        </div>
      )}

      {/* 空状态 */}
      {!isLoading && !error && competitions.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-600">暂无比赛数据</p>
        </div>
      )}

      {/* 竞赛列表 */}
      {!isLoading && !error && competitions.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 relative z-10">
          {competitions.map((competition, index) => {
            const StatusConf = statusConfig[competition.status] || {
              label: competition.status,
              color: 'bg-gray-100 text-gray-800',
            }
            const LevelConf = levelConfig[competition.raceLevel || ''] || {
              label: tierConfig[competition.pointsTier || '']?.label || '普通赛事',
              color: tierConfig[competition.pointsTier || '']?.color || 'text-gray-600',
              icon: Trophy,
            }
            const weatherType = getRandomWeather(index)
            const WeatherIcon = weatherConfig[weatherType].icon
            const weatherColor = weatherConfig[weatherType].color

            return (
              <div key={competition.id} className="card p-3 md:p-4 hover:shadow-lg transition-shadow duration-200">
                {/* 比赛图片 */}
                <div className="relative h-36 md:h-48 rounded-lg overflow-hidden mb-3 md:mb-4 bg-gradient-to-br from-ski-blue to-ski-navy">
                  <img
                    src={getImagePath(sportTypeImages[competition.sportType] || '/images/ski-bg.jpg')}
                    alt={competition.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-2 md:top-3 left-2 md:left-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${StatusConf.color}`}
                    >
                      {StatusConf.label}
                    </span>
                  </div>
                  <div className="absolute top-2 md:top-3 right-2 md:right-3">
                    <WeatherIcon className={`h-4 w-4 md:h-5 md:w-5 ${weatherColor}`} />
                  </div>
                  <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white">
                      <h3 className="font-bold text-sm md:text-lg line-clamp-2 md:truncate">{competition.name}</h3>
                      <div className="flex items-center text-xs md:text-sm opacity-90">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{competition.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 比赛信息 */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div className="flex items-center space-x-1 md:space-x-2">
                      <LevelConf.icon className={`h-3 w-3 md:h-4 md:w-4 ${LevelConf.color}`} />
                      <span className={`text-xs md:text-sm font-medium ${LevelConf.color}`}>{LevelConf.label}</span>
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 truncate max-w-[140px] md:max-w-none">
                      {sportTypeLabels[competition.sportType] || competition.sportType}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4 text-gray-400 mr-1 md:mr-2 flex-shrink-0" />
                      <span className="text-gray-600 truncate">
                        {competition.startDate}
                        {competition.startDate !== competition.endDate && (
                          <span className="hidden md:inline"> - {competition.endDate}</span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 md:h-4 md:w-4 text-gray-400 mr-1 md:mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{competition.participantCount || 0} 人参赛</span>
                    </div>
                  </div>

                  {competition.organizer && (
                    <div className="text-xs md:text-sm text-gray-600 hidden md:block">
                      <span className="font-medium">主办方:</span> {competition.organizer}
                    </div>
                  )}

                  {/* 操作按钮 */}
                  <div className="flex gap-2 pt-2 md:pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleViewDetails(competition)}
                      className="flex-1 flex items-center justify-center py-1.5 md:py-2 px-2 md:px-3 text-xs md:text-sm bg-ski-blue text-white rounded-md hover:bg-primary-700 transition-colors"
                    >
                      <Eye className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      查看详情
                    </button>

                    {competition.status === 'COMPLETED' && (
                      <Link
                        href={`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${competition.id}`}
                        className="flex-1 flex items-center justify-center py-1.5 md:py-2 px-2 md:px-3 text-xs md:text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
                      >
                        <Award className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        成绩公告
                      </Link>
                    )}

                    {competition.status === 'ONGOING' && (
                      <button
                        className="flex-1 flex items-center justify-center py-1.5 md:py-2 px-2 md:px-3 text-xs md:text-sm bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors shadow-sm"
                        title="比赛进行中，即将发布成绩"
                      >
                        <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        比赛中
                      </button>
                    )}

                    {competition.status === 'UPCOMING' && (
                      <button
                        className="flex-1 flex items-center justify-center py-1.5 md:py-2 px-2 md:px-3 text-xs md:text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                        title="比赛即将开始"
                      >
                        <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        即将开始
                      </button>
                    )}

                    {competition.status === 'CANCELLED' && (
                      <button
                        className="flex-1 flex items-center justify-center py-1.5 md:py-2 px-2 md:px-3 text-xs md:text-sm bg-red-600 text-white rounded-md cursor-not-allowed"
                        disabled
                      >
                        已取消
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* 分页 */}
      {!isLoading && !error && competitions.length > 0 && (
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 relative z-10">
          <div className="text-sm text-gray-700">
            显示 <span className="font-medium">{(page - 1) * pageSize + 1}</span> 到{' '}
            <span className="font-medium">{Math.min(page * pageSize, total)}</span> 条，共{' '}
            <span className="font-medium">{total}</span> 条记录
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className={`px-3 py-1 text-sm rounded-md ${
                    page === pageNum
                      ? 'bg-ski-blue text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              下一页
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
