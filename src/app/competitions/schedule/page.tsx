'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { getImagePath } from '@/utils/paths'
import { useToast } from '@/components/Toast'
import {
  Calendar,
  MapPin,
  Download,
  Eye,
  Flag,
  Snowflake,
  Star,
  Trophy,
  Mountain,
  Sparkles,
  ArrowLeftRight,
  Wind,
  Medal,
  Users,
  Filter,
  ArrowUpDown,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { competitionSchedule2025, categoryNames, type Competition } from '@/data/competitionSchedule'

// 运动类型配置 - 扩展支持所有项目
const sportTypeConfig: Record<string, { label: string; icon: React.ComponentType<{ className?: string }>; color: string; bgColor: string }> = {
  // 我们的四大项目（高亮显示）
  'alpine': { label: '高山滑雪', icon: Mountain, color: 'text-blue-600', bgColor: 'bg-blue-50 border-blue-200' },
  'snowboard-slopestyle': { label: '单板坡障/大跳台', icon: Sparkles, color: 'text-purple-600', bgColor: 'bg-purple-50 border-purple-200' },
  'snowboard-parallel': { label: '单板平行项目', icon: ArrowLeftRight, color: 'text-green-600', bgColor: 'bg-green-50 border-green-200' },
  'freestyle-slopestyle': { label: '自由式坡障/大跳台', icon: Wind, color: 'text-orange-600', bgColor: 'bg-orange-50 border-orange-200' },
  // 其他滑雪项目
  'freestyle-aerials': { label: '自由式空中技巧', icon: Wind, color: 'text-rose-500', bgColor: 'bg-gray-50' },
  'freestyle-moguls': { label: '自由式雪上技巧', icon: Wind, color: 'text-rose-500', bgColor: 'bg-gray-50' },
  'freestyle-halfpipe': { label: '自由式U型场地', icon: Wind, color: 'text-rose-500', bgColor: 'bg-gray-50' },
  'snowboard-halfpipe': { label: '单板U型场地', icon: Sparkles, color: 'text-violet-500', bgColor: 'bg-gray-50' },
  'snowboard-cross': { label: '单板障碍追逐', icon: Sparkles, color: 'text-violet-500', bgColor: 'bg-gray-50' },
  'freestyle-cross': { label: '自由式障碍追逐', icon: Wind, color: 'text-rose-500', bgColor: 'bg-gray-50' },
  'cross-country': { label: '越野滑雪', icon: Flag, color: 'text-teal-600', bgColor: 'bg-gray-50' },
  'biathlon': { label: '冬季两项', icon: Medal, color: 'text-amber-600', bgColor: 'bg-gray-50' },
  'nordic-combined': { label: '北欧两项', icon: Trophy, color: 'text-cyan-600', bgColor: 'bg-gray-50' },
  // 冰上项目
  'short-track': { label: '短道速滑', icon: Snowflake, color: 'text-sky-600', bgColor: 'bg-gray-50' },
  'speed-skating': { label: '速度滑冰', icon: Snowflake, color: 'text-sky-600', bgColor: 'bg-gray-50' },
  'curling': { label: '冰壶', icon: Star, color: 'text-indigo-600', bgColor: 'bg-gray-50' },
  'figure-skating': { label: '花样滑冰', icon: Star, color: 'text-pink-500', bgColor: 'bg-gray-50' },
  // 雪车雪橇
  'bobsled': { label: '雪车/钢架雪车', icon: Flag, color: 'text-slate-600', bgColor: 'bg-gray-50' },
  'luge': { label: '雪橇', icon: Flag, color: 'text-slate-600', bgColor: 'bg-gray-50' },
  'other': { label: '其他', icon: Snowflake, color: 'text-gray-500', bgColor: 'bg-gray-50' }
}

// 格式化日期
function formatShortDate(dateString: string): string {
  if (!dateString || dateString === '-') return '-'
  const parts = dateString.split('-')
  if (parts.length >= 3) {
    return `${parseInt(parts[1])}月${parseInt(parts[2])}日`
  }
  return dateString
}

// 项目筛选选项
const filterOptions = [
  { value: 'all', label: '全部项目' },
  { value: 'ours', label: '我们的四大项目' },
  { value: 'alpine', label: '高山滑雪' },
  { value: 'snowboard-slopestyle', label: '单板坡障/大跳台' },
  { value: 'snowboard-parallel', label: '单板平行项目' },
  { value: 'freestyle-slopestyle', label: '自由式坡障/大跳台' },
  { value: 'skiing', label: '其他滑雪项目' },
  { value: 'ice', label: '冰上项目' },
  { value: 'sled', label: '雪车雪橇' }
]

// 排序选项
type SortOrder = 'asc' | 'desc' | 'upcoming';
const sortOptions: { value: SortOrder; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: 'upcoming', label: '即将开始', icon: Calendar },
  { value: 'asc', label: '时间正序', icon: ArrowUp },
  { value: 'desc', label: '时间倒序', icon: ArrowDown }
];

export default function SchedulePage() {
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list')
  const [sortOrder, setSortOrder] = useState<SortOrder>('upcoming')
  const { showToast } = useToast()

  // 筛选比赛
  const filteredCompetitions = useMemo(() => {
    return competitionSchedule2025.filter(comp => {
      // 月份筛选
      if (selectedMonth !== 'all') {
        const startMonth = comp.startDate.split('-')[1]
        if (startMonth !== selectedMonth.padStart(2, '0')) return false
      }

      // 类别筛选
      if (selectedCategory === 'ours') {
        return comp.isOurs
      } else if (selectedCategory === 'skiing') {
        return ['freestyle-aerials', 'freestyle-moguls', 'freestyle-halfpipe', 'snowboard-halfpipe',
                'snowboard-cross', 'freestyle-cross', 'cross-country', 'biathlon', 'nordic-combined'].includes(comp.category)
      } else if (selectedCategory === 'ice') {
        return ['short-track', 'speed-skating', 'curling', 'figure-skating'].includes(comp.category)
      } else if (selectedCategory === 'sled') {
        return ['bobsled', 'luge'].includes(comp.category)
      } else if (selectedCategory !== 'all') {
        return comp.category === selectedCategory
      }

      return true
    })
  }, [selectedMonth, selectedCategory])

  // 按日期排序
  const sortedCompetitions = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return [...filteredCompetitions].sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();

      if (sortOrder === 'upcoming') {
        // 即将开始排序：未来的比赛按时间正序，已结束的排在后面
        const aIsFuture = new Date(a.endDate || a.startDate).getTime() >= today.getTime();
        const bIsFuture = new Date(b.endDate || b.startDate).getTime() >= today.getTime();

        if (aIsFuture && !bIsFuture) return -1;
        if (!aIsFuture && bIsFuture) return 1;
        return dateA - dateB;
      } else if (sortOrder === 'desc') {
        // 时间倒序
        return dateB - dateA;
      } else {
        // 时间正序
        return dateA - dateB;
      }
    });
  }, [filteredCompetitions, sortOrder])

  // 统计数据
  const stats = useMemo(() => ({
    total: competitionSchedule2025.length,
    ours: competitionSchedule2025.filter(c => c.isOurs).length,
    filtered: filteredCompetitions.length
  }), [filteredCompetitions])

  const handleExportSchedule = () => {
    if (sortedCompetitions.length === 0) {
      showToast('没有可导出的赛程数据', 'warning')
      return
    }

    const headers = ['序号', '项目', '比赛名称', '开始日期', '结束日期', '承办单位', '地点', '是否我们项目']
    const rows = sortedCompetitions.map(comp => [
      comp.id,
      comp.sport,
      comp.name,
      comp.startDate,
      comp.endDate,
      comp.organizer,
      comp.location,
      comp.isOurs ? '是' : '否'
    ])

    const csvContent = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `2025-2026赛季赛程_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(link.href)

    showToast('赛程日程导出成功！', 'success')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-15 rounded-full overflow-hidden">
        <img src={getImagePath("/images/ski-bg.jpg")} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Header */}
      <div className="mb-8 relative z-10">
        <h1 className="section-title">2025-2026赛季全国冬季项目赛事日历</h1>
        <p className="text-gray-600 text-lg">
          数据来源：国家体育总局冬季运动管理中心
        </p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center">
            <Mountain className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-blue-700">
                {competitionSchedule2025.filter(c => c.category === 'alpine').length}
              </div>
              <div className="text-sm text-blue-600">高山滑雪</div>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center">
            <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-purple-700">
                {competitionSchedule2025.filter(c => c.category === 'snowboard-slopestyle').length}
              </div>
              <div className="text-sm text-purple-600">单板坡障/大跳台</div>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center">
            <ArrowLeftRight className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-green-700">
                {competitionSchedule2025.filter(c => c.category === 'snowboard-parallel').length}
              </div>
              <div className="text-sm text-green-600">单板平行项目</div>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-center">
            <Wind className="w-8 h-8 text-orange-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-orange-700">
                {competitionSchedule2025.filter(c => c.category === 'freestyle-slopestyle').length}
              </div>
              <div className="text-sm text-orange-600">自由式坡障/大跳台</div>
            </div>
          </div>
        </div>
      </div>

      {/* 操作栏 */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 flex-wrap items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">筛选:</span>
            </div>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
            >
              <option value="all">全部月份</option>
              <option value="8">8月</option>
              <option value="9">9月</option>
              <option value="10">10月</option>
              <option value="11">11月</option>
              <option value="12">12月</option>
              <option value="1">1月</option>
              <option value="2">2月</option>
              <option value="3">3月</option>
              <option value="4">4月</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
            >
              {filterOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {/* 排序选择器 */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">排序:</span>
            </div>
            <div className="flex bg-gray-100 rounded-lg p-1">
              {sortOptions.map(opt => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setSortOrder(opt.value)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      sortOrder === opt.value ? 'bg-white text-ski-blue shadow-sm' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {opt.label}
                  </button>
                );
              })}
            </div>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'list' ? 'bg-white text-ski-blue shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                列表视图
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'calendar' ? 'bg-white text-ski-blue shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                日历视图
              </button>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-sm text-gray-500">显示 {stats.filtered} 场</span>
            <button onClick={handleExportSchedule} className="btn-secondary flex items-center">
              <Download className="h-4 w-4 mr-2" />
              导出日程
            </button>
          </div>
        </div>
      </div>

      {/* 赛事列表 */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {sortedCompetitions.length === 0 ? (
            <div className="card text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">暂无符合条件的赛事</p>
            </div>
          ) : (
            sortedCompetitions.map((comp) => {
              const config = sportTypeConfig[comp.category] || sportTypeConfig['other']
              const SportIcon = config.icon

              return (
                <div
                  key={comp.id}
                  className={`card hover:shadow-lg transition-shadow border ${comp.isOurs ? config.bgColor + ' border-2' : 'bg-white'}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        {comp.isOurs && (
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                            重点项目
                          </span>
                        )}
                        <span className="text-lg font-semibold text-gray-900">
                          {comp.name}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                          {formatShortDate(comp.startDate)}
                          {comp.startDate !== comp.endDate && ` - ${formatShortDate(comp.endDate)}`}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                          {comp.location}
                        </div>
                        <div className="flex items-center">
                          <SportIcon className={`h-4 w-4 mr-1 ${config.color}`} />
                          <span className={config.color}>{config.label}</span>
                        </div>
                        {comp.organizer && (
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-gray-400" />
                            <span className="text-gray-500">{comp.organizer}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      )}

      {/* 日历视图 */}
      {viewMode === 'calendar' && (
        <div className="card">
          <div className="bg-gray-50 rounded-lg p-6 text-center mb-6">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <h4 className="text-lg font-medium text-gray-700 mb-2">月度赛事概览</h4>
            <p className="text-gray-600">共 {stats.filtered} 场赛事</p>
          </div>

          {/* 月度概览 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[9, 10, 11, 12, 1, 2, 3].map(month => {
              const monthCompetitions = sortedCompetitions.filter(comp => {
                const compMonth = parseInt(comp.startDate.split('-')[1])
                return compMonth === month
              })

              return (
                <div key={month} className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3 flex items-center justify-between">
                    <span>{month < 9 ? '2026年' : '2025年'}{month}月</span>
                    <span className="text-sm text-gray-500">{monthCompetitions.length}场</span>
                  </h5>
                  {monthCompetitions.length > 0 ? (
                    <div className="space-y-2">
                      {monthCompetitions.slice(0, 5).map(comp => (
                        <div
                          key={comp.id}
                          className={`text-sm p-2 rounded ${comp.isOurs ? 'bg-yellow-50 text-yellow-800' : 'text-gray-600'}`}
                        >
                          {comp.isOurs && <span className="mr-1 text-yellow-600 font-bold">[重点]</span>}
                          {comp.name.length > 25 ? comp.name.slice(0, 25) + '...' : comp.name}
                        </div>
                      ))}
                      {monthCompetitions.length > 5 && (
                        <p className="text-xs text-gray-500 pt-2">还有 {monthCompetitions.length - 5} 场赛事...</p>
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
          <h3 className="text-lg font-semibold text-ski-navy mb-3">数据说明</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 数据来源：国家体育总局冬季运动管理中心</li>
            <li>• 标注 [重点] 的为本系统支持的四大项目</li>
            <li>• 赛事安排可能因天气等因素调整</li>
            <li>• 请以官方最新通知为准</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-ski-navy mb-3">项目分类</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span>高山滑雪</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span>单板坡障/大跳台</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span>单板平行项目</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              <span>自由式坡障/大跳台</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
