'use client'

import { useState, useEffect, useCallback } from 'react'
import { getImagePath } from '@/utils/paths'
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  Plus,
  Search,
  Filter,
  Download,
  Edit,
  Eye,
  Star,
  Mountain,
  Snowflake,
  Flag,
  Award,
  Loader2,
  AlertCircle,
  RefreshCw
} from 'lucide-react'
import { useToast } from '@/components/Toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { competitionsApi, statsApi, type Competition, type StatsOverview } from '@/lib/api'

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
  const [isExporting, setIsExporting] = useState(false)
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
      if (response.success && response.data) {
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
        setError(response.error?.message || '获取数据失败')
      }
    } catch (err) {
      setError('网络错误，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }, [page, pageSize, selectedSportType, selectedStatus, searchTerm])

  // 获取统计数据
  const fetchStats = useCallback(async () => {
    try {
      const response = await statsApi.overview()
      if (response.success && response.data) {
        setStats(response.data)
      }
    } catch (err) {
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

  // 新建比赛
  const handleNewCompetition = () => {
    showToast('新建比赛功能即将上线，敬请期待', 'info')
  }

  // 导出比赛列表
  const handleExport = async () => {
    if (competitions.length === 0) {
      showToast('没有数据可导出', 'warning')
      return
    }

    setIsExporting(true)
    try {
      const headers = ['比赛名称', '项目', '地点', '开始日期', '结束日期', '状态', '参赛人数', '主办方']
      const rows = competitions.map(c => [
        c.name,
        sportTypeLabels[c.sportType] || c.sportType,
        c.location,
        c.startDate,
        c.endDate,
        statusConfig[c.status]?.label || c.status,
        c.participantCount || 0,
        c.organizer || '-',
      ])
      const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')

      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `比赛列表_${new Date().toISOString().split('T')[0]}.csv`
      link.click()
      URL.revokeObjectURL(url)

      showToast(`成功导出 ${competitions.length} 场比赛数据`, 'success')
    } catch {
      showToast('导出失败，请重试', 'error')
    } finally {
      setIsExporting(false)
    }
  }

  // 查看比赛详情
  const handleViewDetails = (competition: Competition) => {
    router.push(`/competitions/${competition.id}`)
  }

  // 编辑比赛
  const handleEditCompetition = (competition: Competition) => {
    showToast(`编辑功能即将上线：${competition.name}`, 'info')
  }

  // 导出单场比赛数据
  const handleExportSingle = async (competition: Competition) => {
    const headers = ['比赛名称', '项目', '地点', '开始日期', '结束日期', '状态', '参赛人数', '主办方']
    const row = [
      competition.name,
      sportTypeLabels[competition.sportType] || competition.sportType,
      competition.location,
      competition.startDate,
      competition.endDate,
      statusConfig[competition.status]?.label || competition.status,
      competition.participantCount || 0,
      competition.organizer || '-',
    ]
    const csvContent = [headers, row].map(r => r.join(',')).join('\n')

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${competition.name}_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(url)

    showToast(`已导出「${competition.name}」数据`, 'success')
  }

  // 快速操作
  const handleQuickAction = (action: 'create' | 'schedule' | 'stats') => {
    const messages = {
      create: '新建比赛功能即将上线，敬请期待',
      schedule: '赛程安排功能即将上线，敬请期待',
      stats: '成绩统计功能即将上线，敬请期待',
    }
    showToast(messages[action], 'info')
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
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-15 rounded-full overflow-hidden">
        <img
          src={getImagePath('/images/ski-action-2.jpg')}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-10 left-10 w-36 h-36 opacity-15 rounded-full overflow-hidden">
        <img
          src={getImagePath('/images/giant-slalom.jpg')}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="section-title">竞赛管理</h1>
        <p className="text-gray-600 text-lg">高山滑雪竞赛组织、管理和结果统计的专业平台</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 relative z-10">
        <div className="card text-center">
          <Calendar className="h-8 w-8 text-ski-blue mx-auto mb-2" />
          <div className="text-2xl font-bold text-ski-navy">
            {stats?.overview.totalCompetitions ?? '-'}
          </div>
          <div className="text-sm text-gray-600">本季比赛</div>
        </div>
        <div className="card text-center">
          <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-ski-navy">
            {stats?.overview.totalAthletes ?? '-'}
          </div>
          <div className="text-sm text-gray-600">注册运动员</div>
        </div>
        <div className="card text-center">
          <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-ski-navy">
            {stats?.overview.completedCompetitions ?? '-'}
          </div>
          <div className="text-sm text-gray-600">已完赛事</div>
        </div>
        <div className="card text-center">
          <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-ski-navy">
            {stats?.overview.upcomingCompetitions ?? '-'}
          </div>
          <div className="text-sm text-gray-600">即将开始</div>
        </div>
      </div>

      {/* 筛选和搜索 - 吸顶 */}
      <div className="sticky top-16 z-40 bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">筛选条件:</span>
          </div>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
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
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
          >
            <option value="all">全部项目</option>
            <option value="ALPINE_SKI">高山滑雪</option>
            <option value="FREESTYLE_SLOPESTYLE_BIGAIR">自由式坡障/大跳台</option>
            <option value="SNOWBOARD_SLOPESTYLE_BIGAIR">单板坡障/大跳台</option>
            <option value="SNOWBOARD_PARALLEL">单板平行项目</option>
          </select>

          <div className="relative flex-1 max-w-md">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜索比赛名称或地点..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
            />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 font-medium">
              找到 <span className="text-ski-blue font-bold">{total}</span> 场比赛
            </span>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={fetchCompetitions}
              disabled={isLoading}
              className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
              title="刷新数据"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={handleNewCompetition}
              className="btn-primary flex items-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Plus className="h-4 w-4 mr-2" />
              新建比赛
            </button>
            <button
              onClick={handleExport}
              disabled={isExporting || competitions.length === 0}
              className="btn-secondary flex items-center shadow-sm hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="h-4 w-4 mr-2" />
              {isExporting ? '导出中...' : '导出'}
            </button>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
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
              <div key={competition.id} className="card hover:shadow-lg transition-shadow duration-200">
                {/* 比赛图片 */}
                <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-ski-blue to-ski-navy">
                  <img
                    src={getImagePath('/images/ski-bg.jpg')}
                    alt={competition.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${StatusConf.color}`}
                    >
                      {StatusConf.label}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <WeatherIcon className={`h-5 w-5 ${weatherColor}`} />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white">
                      <h3 className="font-bold text-lg truncate">{competition.name}</h3>
                      <div className="flex items-center text-sm opacity-90">
                        <MapPin className="h-3 w-3 mr-1" />
                        {competition.location}
                        {competition.venue && ` · ${competition.venue}`}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 比赛信息 */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <LevelConf.icon className={`h-4 w-4 ${LevelConf.color}`} />
                      <span className={`text-sm font-medium ${LevelConf.color}`}>{LevelConf.label}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {sportTypeLabels[competition.sportType] || competition.sportType}
                      {competition.discipline && ` · ${competition.discipline}`}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">
                        {competition.startDate}
                        {competition.startDate !== competition.endDate && (
                          <span> - {competition.endDate}</span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">{competition.participantCount || 0} 人参赛</span>
                    </div>
                  </div>

                  {competition.organizer && (
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">主办方:</span> {competition.organizer}
                    </div>
                  )}

                  {/* 操作按钮 */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleViewDetails(competition)}
                      className="flex items-center justify-center py-2 px-3 text-sm bg-ski-blue text-white rounded-md hover:bg-primary-700 transition-colors"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      查看详情
                    </button>

                    {competition.status === 'COMPLETED' && (
                      <Link
                        href={`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${competition.id}`}
                        className="flex items-center justify-center py-2 px-3 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
                      >
                        <Award className="h-4 w-4 mr-1" />
                        成绩公告
                      </Link>
                    )}

                    {competition.status === 'ONGOING' && (
                      <button
                        className="flex items-center justify-center py-2 px-3 text-sm bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors shadow-sm"
                        title="比赛进行中，即将发布成绩"
                      >
                        <Clock className="h-4 w-4 mr-1" />
                        比赛中
                      </button>
                    )}

                    {competition.status === 'UPCOMING' && (
                      <button
                        className="flex items-center justify-center py-2 px-3 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                        title="比赛即将开始"
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        即将开始
                      </button>
                    )}

                    {competition.status === 'CANCELLED' && (
                      <button
                        className="flex items-center justify-center py-2 px-3 text-sm bg-red-600 text-white rounded-md cursor-not-allowed"
                        disabled
                      >
                        已取消
                      </button>
                    )}

                    <button
                      onClick={() => handleEditCompetition(competition)}
                      className="flex items-center justify-center py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      编辑
                    </button>
                    <button
                      onClick={() => handleExportSingle(competition)}
                      className="flex items-center justify-center py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      导出
                    </button>
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

      {/* 快速操作 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div
          onClick={() => handleQuickAction('create')}
          className="card text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <Plus className="h-12 w-12 text-ski-blue mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ski-navy mb-2">创建新比赛</h3>
          <p className="text-sm text-gray-600">设置比赛信息，管理报名和成绩</p>
        </div>

        <div
          onClick={() => handleQuickAction('schedule')}
          className="card text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ski-navy mb-2">赛程安排</h3>
          <p className="text-sm text-gray-600">查看和管理比赛日程安排</p>
        </div>

        <div
          onClick={() => handleQuickAction('stats')}
          className="card text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-ski-navy mb-2">成绩统计</h3>
          <p className="text-sm text-gray-600">分析比赛数据和运动员表现</p>
        </div>
      </div>
    </div>
  )
}
