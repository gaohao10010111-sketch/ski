'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { getImagePath } from '@/utils/paths'
import { useToast } from '@/components/Toast'
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Plus,
  Download,
  Eye,
  Flag,
  Snowflake,
  Star,
  Trophy,
  Loader2,
  AlertCircle,
  Mountain,
  Sparkles,
  ArrowLeftRight,
  Wind
} from 'lucide-react'
import { competitionsApi, type Competition } from '@/lib/api'

// 状态配置
const statusConfig: Record<string, { label: string; color: string }> = {
  SCHEDULED: { label: '即将开始', color: 'bg-blue-100 text-blue-800' },
  REGISTRATION: { label: '报名中', color: 'bg-yellow-100 text-yellow-800' },
  ONGOING: { label: '进行中', color: 'bg-green-100 text-green-800' },
  COMPLETED: { label: '已结束', color: 'bg-gray-100 text-gray-800' },
  CANCELLED: { label: '已取消', color: 'bg-red-100 text-red-800' }
}

// 运动类型配置
const sportTypeConfig: Record<string, { label: string; icon: React.ComponentType<{ className?: string }>; color: string }> = {
  ALPINE_SKI: { label: '高山滑雪', icon: Mountain, color: 'text-blue-600' },
  SNOWBOARD_SLOPESTYLE_BIGAIR: { label: '单板坡障/大跳台', icon: Sparkles, color: 'text-purple-600' },
  SNOWBOARD_PARALLEL: { label: '单板平行项目', icon: ArrowLeftRight, color: 'text-green-600' },
  FREESTYLE_SLOPESTYLE_BIGAIR: { label: '自由式坡障/大跳台', icon: Wind, color: 'text-orange-600' }
}

// 赛事级别配置
const levelConfig: Record<string, { label: string; color: string; icon: React.ComponentType<{ className?: string }> }> = {
  A: { label: 'A级赛事', color: 'text-red-600', icon: Flag },
  B: { label: 'B级赛事', color: 'text-orange-600', icon: Trophy },
  C: { label: 'C级赛事', color: 'text-yellow-600', icon: Star },
  NATIONAL: { label: '全国级', color: 'text-red-600', icon: Flag },
  REGIONAL: { label: '地区级', color: 'text-blue-600', icon: Users },
  INTERNATIONAL: { label: '国际级', color: 'text-purple-600', icon: Trophy }
}

// 格式化日期
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

// 格式化简短日期
function formatShortDate(dateString: string): string {
  const date = new Date(dateString)
  return `${date.getMonth() + 1}月${date.getDate()}日`
}

export default function SchedulePage() {
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedSportType, setSelectedSportType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list')
  const { showToast } = useToast()

  // API数据状态
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 获取比赛数据
  const fetchCompetitions = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await competitionsApi.list({ pageSize: 50 })
      if (response.success && response.data) {
        setCompetitions(response.data)
      } else {
        setError(response.error?.message || '获取赛程数据失败')
      }
    } catch (err) {
      console.error('获取赛程数据错误:', err)
      setError('网络错误，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCompetitions()
  }, [fetchCompetitions])

  // 筛选比赛
  const filteredCompetitions = competitions.filter(comp => {
    const eventMonth = new Date(comp.startDate).getMonth() + 1
    const matchMonth = selectedMonth === 'all' || eventMonth.toString() === selectedMonth
    const matchSportType = selectedSportType === 'all' || comp.sportType === selectedSportType
    const matchStatus = selectedStatus === 'all' || comp.status === selectedStatus
    return matchMonth && matchSportType && matchStatus
  })

  // 按日期排序
  const sortedCompetitions = [...filteredCompetitions].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  )

  const handleCreateEvent = () => {
    showToast('创建新赛事功能即将上线，敬请期待！', 'info')
  }

  const handleExportSchedule = () => {
    if (sortedCompetitions.length === 0) {
      showToast('没有可导出的赛程数据', 'warning')
      return
    }

    // 生成CSV数据
    const headers = ['比赛名称', '运动类型', '开始日期', '结束日期', '地点', '场馆', '状态', '主办方']
    const rows = sortedCompetitions.map(comp => [
      comp.name,
      sportTypeConfig[comp.sportType]?.label || comp.sportType,
      comp.startDate,
      comp.endDate,
      comp.location,
      comp.venue || '',
      statusConfig[comp.status]?.label || comp.status,
      comp.organizer || ''
    ])

    const csvContent = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `赛程日程_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(link.href)

    showToast('赛程日程导出成功！', 'success')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-15 rounded-full overflow-hidden">
        <img
          src={getImagePath("/images/ski-bg.jpg")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="mb-8 relative z-10">
        <h1 className="section-title">赛事日程</h1>
        <p className="text-gray-600 text-lg">
          查看完整的滑雪赛事日程安排，包括高山滑雪、单板滑雪和自由式滑雪赛事
        </p>
      </div>

      {/* 操作栏 */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 flex-wrap">
            <div>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
              >
                <option value="all">全部月份</option>
                <option value="1">1月</option>
                <option value="2">2月</option>
                <option value="3">3月</option>
                <option value="11">11月</option>
                <option value="12">12月</option>
              </select>
            </div>
            <div>
              <select
                value={selectedSportType}
                onChange={(e) => setSelectedSportType(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
              >
                <option value="all">全部项目</option>
                <option value="ALPINE_SKI">高山滑雪</option>
                <option value="SNOWBOARD_SLOPESTYLE_BIGAIR">单板坡障/大跳台</option>
                <option value="SNOWBOARD_PARALLEL">单板平行项目</option>
                <option value="FREESTYLE_SLOPESTYLE_BIGAIR">自由式坡障/大跳台</option>
              </select>
            </div>
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
              >
                <option value="all">全部状态</option>
                <option value="SCHEDULED">即将开始</option>
                <option value="ONGOING">进行中</option>
                <option value="COMPLETED">已结束</option>
              </select>
            </div>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-ski-blue shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                列表视图
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'calendar'
                    ? 'bg-white text-ski-blue shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                日历视图
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleCreateEvent} className="btn-primary flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              创建赛事
            </button>
            <button onClick={handleExportSchedule} className="btn-secondary flex items-center">
              <Download className="h-4 w-4 mr-2" />
              导出日程
            </button>
          </div>
        </div>
      </div>

      {/* 加载状态 */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-ski-blue animate-spin mb-4" />
          <p className="text-gray-500">加载赛程数据中...</p>
        </div>
      )}

      {/* 错误状态 */}
      {error && !isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchCompetitions}
            className="px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            重新加载
          </button>
        </div>
      )}

      {/* 赛事列表 */}
      {!isLoading && !error && viewMode === 'list' && (
        <div className="space-y-6">
          {sortedCompetitions.length === 0 ? (
            <div className="card text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">暂无符合条件的赛事</p>
            </div>
          ) : (
            sortedCompetitions.map((comp) => {
              const sportConfig = sportTypeConfig[comp.sportType] || { label: comp.sportType, icon: Snowflake, color: 'text-gray-600' }
              const SportIcon = sportConfig.icon
              const levelInfo = levelConfig[comp.raceLevel || ''] || { label: comp.raceLevel, color: 'text-gray-600', icon: Star }
              const LevelIcon = levelInfo.icon

              return (
                <div key={comp.id} className="card hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <Link
                          href={`/competitions/${comp.id}`}
                          className="text-xl font-semibold text-gray-900 hover:text-ski-blue transition-colors"
                        >
                          {comp.name}
                        </Link>
                        <span className={`badge ${statusConfig[comp.status]?.color || 'bg-gray-100 text-gray-800'} text-xs`}>
                          {statusConfig[comp.status]?.label || comp.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatShortDate(comp.startDate)}
                          {comp.startDate !== comp.endDate && ` - ${formatShortDate(comp.endDate)}`}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {comp.venue || comp.location}
                        </div>
                        <div className="flex items-center">
                          <SportIcon className={`h-4 w-4 mr-1 ${sportConfig.color}`} />
                          {sportConfig.label}
                        </div>
                        {comp.raceLevel && (
                          <div className="flex items-center">
                            <LevelIcon className={`h-4 w-4 mr-1 ${levelInfo.color}`} />
                            {levelInfo.label}
                          </div>
                        )}
                        {comp.participantCount && (
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {comp.participantCount} 人
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 lg:mt-0">
                      <Link
                        href={`/competitions/${comp.id}`}
                        className="btn-secondary text-sm flex items-center"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        查看详情
                      </Link>
                    </div>
                  </div>

                  {comp.discipline && (
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium mr-2">小项：</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">{comp.discipline}</span>
                      </div>
                    </div>
                  )}

                  {comp.organizer && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-600">
                          主办方：{comp.organizer}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      )}

      {/* 日历视图 */}
      {!isLoading && !error && viewMode === 'calendar' && (
        <div className="card">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-700 mb-2">日历视图</h4>
            <p className="text-gray-600 mb-4">
              以日历形式展示赛事安排，支持月视图和周视图切换
            </p>
            <p className="text-sm text-gray-500">
              共 {sortedCompetitions.length} 场赛事
            </p>
          </div>

          {/* 简易月度概览 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[12, 1, 2, 3].map(month => {
              const monthCompetitions = sortedCompetitions.filter(comp => {
                const compMonth = new Date(comp.startDate).getMonth() + 1
                return compMonth === month
              })

              return (
                <div key={month} className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3">{month}月</h5>
                  {monthCompetitions.length > 0 ? (
                    <div className="space-y-2">
                      {monthCompetitions.slice(0, 3).map(comp => (
                        <Link
                          key={comp.id}
                          href={`/competitions/${comp.id}`}
                          className="block text-sm text-gray-600 hover:text-ski-blue truncate"
                        >
                          • {comp.name}
                        </Link>
                      ))}
                      {monthCompetitions.length > 3 && (
                        <p className="text-xs text-gray-500">还有 {monthCompetitions.length - 3} 场赛事...</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">暂无赛事</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* 底部说明 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-ski-navy mb-3">赛事说明</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 所有时间均为比赛当地时间</li>
            <li>• 天气情况可能影响比赛安排</li>
            <li>• 请关注官方通知获取最新信息</li>
            <li>• 报名截止日期后不接受新报名</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-ski-navy mb-3">联系方式</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 赛事咨询：400-8888-8888</li>
            <li>• 技术支持：tech@ski.org.cn</li>
            <li>• 紧急联络：emergency@ski.org.cn</li>
            <li>• 工作时间：周一至周五 9:00-18:00</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
