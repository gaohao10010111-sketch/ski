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

// 格式化日期 - 包含年份
function formatShortDate(dateString: string, includeYear: boolean = true): string {
  if (!dateString || dateString === '-') return '-'
  const parts = dateString.split('-')
  if (parts.length >= 3) {
    const year = parts[0]
    const month = parseInt(parts[1])
    const day = parseInt(parts[2])
    if (includeYear) {
      return `${year}年${month}月${day}日`
    }
    return `${month}月${day}日`
  }
  return dateString
}

// 格式化日期范围 - 智能显示年份
function formatDateRange(startDate: string, endDate: string): string {
  if (!startDate) return '-'
  const startParts = startDate.split('-')
  const endParts = endDate ? endDate.split('-') : startParts

  const startYear = startParts[0]
  const startMonth = parseInt(startParts[1])
  const startDay = parseInt(startParts[2])
  const endYear = endParts[0]
  const endMonth = parseInt(endParts[1])
  const endDay = parseInt(endParts[2])

  // 如果开始和结束是同一天
  if (startDate === endDate) {
    return `${startYear}年${startMonth}月${startDay}日`
  }

  // 如果年份相同
  if (startYear === endYear) {
    // 如果月份也相同
    if (startMonth === endMonth) {
      return `${startYear}年${startMonth}月${startDay}日-${endDay}日`
    }
    return `${startYear}年${startMonth}月${startDay}日-${endMonth}月${endDay}日`
  }

  // 跨年
  return `${startYear}年${startMonth}月${startDay}日-${endYear}年${endMonth}月${endDay}日`
}

// 检查比赛是否已结束
function isCompetitionEnded(endDate: string): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const compEndDate = new Date(endDate)
  return compEndDate < today
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
  const [showPast, setShowPast] = useState(false) // 默认不显示已结束的比赛
  const { showToast } = useToast()

  // 筛选比赛
  const filteredCompetitions = useMemo(() => {
    return competitionSchedule2025.filter(comp => {
      // 默认过滤掉已结束的比赛
      if (!showPast && isCompetitionEnded(comp.endDate || comp.startDate)) {
        return false
      }

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
  }, [selectedMonth, selectedCategory, showPast])

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

    // 生成美观的PDF格式HTML
    const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })

    // 按月份分组
    const competitionsByMonth: Record<string, typeof sortedCompetitions> = {}
    sortedCompetitions.forEach(comp => {
      const month = comp.startDate.substring(0, 7) // YYYY-MM
      if (!competitionsByMonth[month]) {
        competitionsByMonth[month] = []
      }
      competitionsByMonth[month].push(comp)
    })

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>2025-2026赛季全国冬季项目赛事日历</title>
  <style>
    @page {
      size: A4;
      margin: 15mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: "Microsoft YaHei", "SimHei", Arial, sans-serif;
      color: #333;
      line-height: 1.5;
      background: #fff;
    }
    .header {
      text-align: center;
      padding: 20px 0 30px;
      border-bottom: 3px solid #1e40af;
      margin-bottom: 25px;
    }
    .header h1 {
      font-size: 24px;
      color: #1e3a5f;
      margin-bottom: 8px;
    }
    .header .subtitle {
      font-size: 14px;
      color: #666;
    }
    .header .source {
      font-size: 12px;
      color: #888;
      margin-top: 8px;
    }
    .month-section {
      margin-bottom: 25px;
      page-break-inside: avoid;
    }
    .month-title {
      font-size: 16px;
      font-weight: bold;
      color: #1e40af;
      padding: 8px 15px;
      background: linear-gradient(90deg, #eff6ff, #fff);
      border-left: 4px solid #1e40af;
      margin-bottom: 12px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
    }
    th {
      background: #f8fafc;
      color: #475569;
      font-weight: 600;
      text-align: left;
      padding: 10px 8px;
      border-bottom: 2px solid #e2e8f0;
    }
    td {
      padding: 10px 8px;
      border-bottom: 1px solid #f1f5f9;
      vertical-align: top;
    }
    tr:hover {
      background: #f8fafc;
    }
    .highlight-row {
      background: #fef3c7 !important;
    }
    .highlight-row td {
      border-bottom-color: #fde68a;
    }
    .sport-tag {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 10px;
      font-weight: 500;
    }
    .tag-alpine { background: #dbeafe; color: #1d4ed8; }
    .tag-snowboard { background: #f3e8ff; color: #7c3aed; }
    .tag-freestyle { background: #ffedd5; color: #c2410c; }
    .tag-other { background: #f1f5f9; color: #64748b; }
    .key-badge {
      display: inline-block;
      background: #fef08a;
      color: #854d0e;
      padding: 1px 6px;
      border-radius: 8px;
      font-size: 9px;
      font-weight: 600;
      margin-left: 5px;
    }
    .comp-name {
      font-weight: 500;
      color: #1e293b;
    }
    .date-range {
      white-space: nowrap;
      color: #059669;
      font-weight: 500;
    }
    .location {
      color: #6b7280;
    }
    .organizer {
      color: #9ca3af;
      font-size: 10px;
    }
    .footer {
      margin-top: 30px;
      padding-top: 15px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      font-size: 11px;
      color: #9ca3af;
    }
    .stats {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin: 15px 0;
      font-size: 12px;
    }
    .stat-item {
      text-align: center;
    }
    .stat-value {
      font-size: 20px;
      font-weight: bold;
      color: #1e40af;
    }
    .stat-label {
      color: #6b7280;
    }
    .legend {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
      font-size: 11px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .legend-color {
      width: 12px;
      height: 12px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>2025-2026赛季全国冬季项目赛事日历</h1>
    <div class="subtitle">中国滑雪青少年积分排名官方平台</div>
    <div class="source">数据来源：国家体育总局冬季运动管理中心 | 导出日期：${today}</div>
  </div>

  <div class="stats">
    <div class="stat-item">
      <div class="stat-value">${sortedCompetitions.length}</div>
      <div class="stat-label">赛事总数</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${sortedCompetitions.filter(c => c.isOurs).length}</div>
      <div class="stat-label">重点项目</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${Object.keys(competitionsByMonth).length}</div>
      <div class="stat-label">跨越月份</div>
    </div>
  </div>

  <div class="legend">
    <div class="legend-item">
      <div class="legend-color" style="background: #fef3c7;"></div>
      <span>重点关注项目</span>
    </div>
    <div class="legend-item">
      <div class="legend-color tag-alpine"></div>
      <span>高山滑雪</span>
    </div>
    <div class="legend-item">
      <div class="legend-color tag-snowboard"></div>
      <span>单板滑雪</span>
    </div>
    <div class="legend-item">
      <div class="legend-color tag-freestyle"></div>
      <span>自由式滑雪</span>
    </div>
  </div>

  ${Object.entries(competitionsByMonth).map(([month, comps]) => {
    const [year, m] = month.split('-')
    const monthName = `${year}年${parseInt(m)}月`
    return `
    <div class="month-section">
      <div class="month-title">${monthName}（${comps.length}场赛事）</div>
      <table>
        <thead>
          <tr>
            <th style="width: 15%">日期</th>
            <th style="width: 12%">项目</th>
            <th style="width: 35%">比赛名称</th>
            <th style="width: 18%">地点</th>
            <th style="width: 20%">承办单位</th>
          </tr>
        </thead>
        <tbody>
          ${comps.map(comp => {
            const tagClass = comp.category.includes('alpine') ? 'tag-alpine' :
                            comp.category.includes('snowboard') ? 'tag-snowboard' :
                            comp.category.includes('freestyle') ? 'tag-freestyle' : 'tag-other'
            const startDate = formatShortDate(comp.startDate)
            const endDate = comp.endDate && comp.endDate !== comp.startDate ? formatShortDate(comp.endDate) : ''
            const dateStr = endDate ? `${startDate} - ${endDate}` : startDate
            return `
            <tr class="${comp.isOurs ? 'highlight-row' : ''}">
              <td class="date-range">${dateStr}</td>
              <td><span class="sport-tag ${tagClass}">${comp.sport}</span></td>
              <td>
                <span class="comp-name">${comp.name}</span>
                ${comp.isOurs ? '<span class="key-badge">重点</span>' : ''}
              </td>
              <td class="location">${comp.location}</td>
              <td class="organizer">${comp.organizer}</td>
            </tr>
            `
          }).join('')}
        </tbody>
      </table>
    </div>
    `
  }).join('')}

  <div class="footer">
    <p>本日程由中国滑雪青少年积分排名官方平台生成</p>
    <p>赛事安排可能因天气等因素调整，请以官方最新通知为准</p>
  </div>
</body>
</html>
    `

    // 创建新窗口打印PDF
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(htmlContent)
      printWindow.document.close()

      // 等待内容加载完成后打印
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
        }, 500)
      }
    }

    showToast('PDF导出窗口已打开，请在打印对话框中选择"保存为PDF"', 'success')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
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
            {/* 显示往期比赛开关 */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showPast}
                onChange={(e) => setShowPast(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-ski-blue focus:ring-ski-blue"
              />
              <span className="text-sm text-gray-600">显示往期</span>
            </label>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-sm text-gray-500">显示 {stats.filtered} 场{!showPast && '（未结束）'}</span>
            <button onClick={handleExportSchedule} className="btn-secondary flex items-center">
              <Download className="h-4 w-4 mr-2" />
              导出PDF
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
                          {formatDateRange(comp.startDate, comp.endDate)}
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
