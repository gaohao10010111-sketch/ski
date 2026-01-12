'use client'

import { useState, useEffect, Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  Trophy,
  Medal,
  Download,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Award,
  Share2,
  Printer,
  ChevronLeft,
  ChevronRight,
  Filter,
  Eye,
  Star,
  Flag,
  CheckCircle
} from 'lucide-react'
import { useToast } from '@/components/Toast'
import { latestResults, type CompetitionResult, type EventResult, type AthleteResult } from '@/data/latestResults'
import { getImagePath } from '@/utils/paths'

const medalConfig = {
  gold: { color: 'text-yellow-500', bg: 'bg-yellow-50', label: '金牌' },
  silver: { color: 'text-gray-400', bg: 'bg-gray-50', label: '银牌' },
  bronze: { color: 'text-orange-600', bg: 'bg-orange-50', label: '铜牌' },
}

// 项目类型名称映射
const sportTypeNames: Record<string, string> = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle': '单板滑雪',
  'snowboard-parallel': '单板平行项目',
  'freestyle-slopestyle': '自由式滑雪'
}

// 视图模式
type ViewMode = 'list' | 'detail'

function ResultsContent() {
  const searchParams = useSearchParams()
  const sportTypeParam = searchParams?.get('sport')
  const { showToast } = useToast()

  // 状态
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [selectedCompIndex, setSelectedCompIndex] = useState(0)
  const [selectedEventIndex, setSelectedEventIndex] = useState(0)
  const [filterGender, setFilterGender] = useState<'all' | '男子组' | '女子组'>('all')
  const [filterAgeGroup, setFilterAgeGroup] = useState<string>('all')
  const [filterSportType, setFilterSportType] = useState<string>('all')

  // 根据 URL 参数筛选比赛
  const filteredCompetitions = useMemo(() => {
    let competitions = latestResults.competitions

    // URL 参数筛选
    if (sportTypeParam) {
      competitions = competitions.filter(c => c.sportType === sportTypeParam)
    }

    // 项目类型筛选（用户选择）
    if (filterSportType !== 'all') {
      competitions = competitions.filter(c => c.sportType === filterSportType)
    }

    return competitions
  }, [sportTypeParam, filterSportType])

  // 当前选中的比赛
  const selectedCompetition = filteredCompetitions[selectedCompIndex] || filteredCompetitions[0]

  // 获取当前比赛的所有年龄组
  const availableAgeGroups = useMemo(() => {
    if (!selectedCompetition) return []
    const groups = new Set(selectedCompetition.events.map(e => e.ageGroup))
    return Array.from(groups).sort()
  }, [selectedCompetition])

  // 筛选后的事件列表
  const filteredEvents = useMemo(() => {
    if (!selectedCompetition) return []
    return selectedCompetition.events.filter(event => {
      if (filterGender !== 'all' && event.gender !== filterGender) return false
      if (filterAgeGroup !== 'all' && event.ageGroup !== filterAgeGroup) return false
      return true
    })
  }, [selectedCompetition, filterGender, filterAgeGroup])

  // 当前选中的事件
  const currentEvent = filteredEvents[selectedEventIndex] || filteredEvents[0]

  // 切换比赛时重置事件索引和筛选
  useEffect(() => {
    setSelectedEventIndex(0)
    setFilterGender('all')
    setFilterAgeGroup('all')
  }, [selectedCompIndex])

  // 切换筛选时重置事件索引
  useEffect(() => {
    setSelectedEventIndex(0)
  }, [filterGender, filterAgeGroup])

  // 获取奖牌信息
  const getMedal = (rank: number) => {
    if (rank === 1) return 'gold'
    if (rank === 2) return 'silver'
    if (rank === 3) return 'bronze'
    return null
  }

  // 导出当前事件成绩
  const handleExport = () => {
    if (!currentEvent || !selectedCompetition) {
      showToast('没有可导出的数据', 'error')
      return
    }

    const headers = ['名次', '号码', '姓名', '代表队', '成绩/得分', '积分']
    const rows = currentEvent.athletes.map(a => [
      a.rank,
      a.bib,
      a.name,
      a.team,
      a.time || (a.bestScore ? `${a.bestScore}分` : '-'),
      a.points || '-'
    ])
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${selectedCompetition.competition}_${currentEvent.discipline}_${currentEvent.ageGroup}_${currentEvent.gender}.csv`
    link.click()
    URL.revokeObjectURL(url)

    showToast('成绩表已导出', 'success')
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${selectedCompetition?.competition || '比赛'} - 成绩公告`,
          text: `查看${selectedCompetition?.competition || '比赛'}的比赛成绩`,
          url: window.location.href,
        })
      } catch {
        showToast('分享已取消', 'info')
      }
    } else {
      await navigator.clipboard.writeText(window.location.href)
      showToast('链接已复制到剪贴板', 'success')
    }
  }

  const handlePrint = () => {
    window.print()
  }

  // 选择比赛并进入详情视图
  const handleSelectCompetition = (index: number) => {
    setSelectedCompIndex(index)
    setSelectedEventIndex(0)
    setFilterGender('all')
    setFilterAgeGroup('all')
    setViewMode('detail')
  }

  // 返回列表视图
  const handleBackToList = () => {
    setViewMode('list')
  }

  // 计算所有比赛的统计数据
  const allStats = useMemo(() => {
    const totalAthletes = new Set<string>()
    let totalEvents = 0

    filteredCompetitions.forEach(comp => {
      totalEvents += comp.events.length
      comp.events.forEach(event => {
        event.athletes.forEach(a => totalAthletes.add(a.name))
      })
    })

    return {
      totalCompetitions: filteredCompetitions.length,
      totalAthletes: totalAthletes.size,
      totalEvents,
    }
  }, [filteredCompetitions])

  // 没有数据时显示提示
  if (filteredCompetitions.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回首页
        </Link>

        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <Trophy className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">暂无成绩数据</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            {sportTypeParam
              ? `${sportTypeNames[sportTypeParam] || sportTypeParam} 项目暂无比赛成绩数据。`
              : '目前还没有已完成的比赛成绩。'
            }
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  // ============= 列表视图 =============
  if (viewMode === 'list') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回按钮 */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回首页
        </Link>

        {/* 页面标题 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-lg">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-ski-navy mb-2">最新成绩</h1>
          <p className="text-gray-500 text-sm">数据更新于 {latestResults.lastUpdated}</p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-ski-navy">{allStats.totalCompetitions}</div>
            <div className="text-sm text-gray-600">已完赛事</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-ski-navy">{allStats.totalEvents}</div>
            <div className="text-sm text-gray-600">比赛项目</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-ski-navy">{allStats.totalAthletes}</div>
            <div className="text-sm text-gray-600">参赛运动员</div>
          </div>
        </div>

        {/* 筛选器 */}
        {!sportTypeParam && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">筛选项目:</span>
              </div>
              <select
                value={filterSportType}
                onChange={(e) => setFilterSportType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue transition-all"
              >
                <option value="all">全部项目</option>
                <option value="alpine">高山滑雪</option>
                <option value="snowboard-slopestyle">单板滑雪</option>
                <option value="snowboard-parallel">单板平行项目</option>
                <option value="freestyle-slopestyle">自由式滑雪</option>
              </select>
              <div className="flex-1"></div>
              <span className="text-sm text-gray-600">
                找到 <span className="font-bold text-ski-blue">{filteredCompetitions.length}</span> 场比赛
              </span>
            </div>
          </div>
        )}

        {/* 比赛列表 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCompetitions.map((competition, index) => {
            const totalParticipants = competition.events.reduce((sum, e) => sum + e.athletes.length, 0)
            const top3Athletes = competition.events[0]?.athletes.slice(0, 3) || []

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* 比赛图片头部 */}
                <div className="relative h-48 bg-gradient-to-br from-ski-blue to-ski-navy">
                  <img
                    src={getImagePath('/images/snowboard-halfpipe.jpg')}
                    alt={competition.competition}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      已完赛
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700">
                      {sportTypeNames[competition.sportType] || competition.sport}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{competition.competition}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {competition.location}
                    </div>
                  </div>
                </div>

                {/* 比赛信息 */}
                <div className="p-5">
                  {/* 日期和人数 */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{competition.date} ~ {competition.endDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{totalParticipants} 人参赛</span>
                    </div>
                  </div>

                  {/* 项目数量 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      {competition.events.length} 个项目
                    </span>
                    {/* 显示前几个年龄组 */}
                    {Array.from(new Set(competition.events.map(e => e.ageGroup))).slice(0, 3).map((ageGroup, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {ageGroup}
                      </span>
                    ))}
                  </div>

                  {/* 冠军预览 */}
                  {top3Athletes.length > 0 && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-100">
                      <div className="text-xs text-gray-500 mb-2">
                        {competition.events[0]?.discipline} {competition.events[0]?.ageGroup} {competition.events[0]?.gender} 前三名
                      </div>
                      <div className="flex items-center gap-3">
                        {top3Athletes.map((athlete, aIdx) => (
                          <div key={aIdx} className="flex items-center">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-1 ${
                              aIdx === 0 ? 'bg-yellow-400 text-yellow-900' :
                              aIdx === 1 ? 'bg-gray-300 text-gray-700' :
                              'bg-orange-400 text-orange-900'
                            }`}>
                              {aIdx + 1}
                            </div>
                            <span className="text-sm text-gray-700 truncate max-w-[80px]">{athlete.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 操作按钮 */}
                  <button
                    onClick={() => handleSelectCompetition(index)}
                    className="w-full flex items-center justify-center py-3 px-4 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    查看完整成绩
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* 备注 */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <p className="font-medium mb-2">说明：</p>
          <ul className="list-disc list-inside space-y-1">
            <li>成绩数据来源于官方比赛成绩公告</li>
            <li>积分按照中国滑雪协会U系列360分制积分规则计算</li>
            <li>如有疑问请联系赛事组委会</li>
          </ul>
        </div>
      </div>
    )
  }

  // ============= 详情视图 =============
  // 计算统计数据
  const totalAthletes = selectedCompetition?.events.reduce((sum, e) => sum + e.athletes.length, 0) || 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 返回按钮 */}
      <button
        onClick={handleBackToList}
        className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回成绩列表
      </button>

      {/* 页面标题 */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-lg">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-ski-navy mb-2">成绩详情</h1>
        <p className="text-gray-500 text-sm">数据更新于 {latestResults.lastUpdated}</p>

        {/* 比赛选择器 */}
        {filteredCompetitions.length > 1 && (
          <div className="mt-4">
            <select
              value={selectedCompIndex}
              onChange={(e) => setSelectedCompIndex(Number(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-ski-blue"
            >
              {filteredCompetitions.map((c, idx) => (
                <option key={idx} value={idx}>{c.competition}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* 比赛信息卡片 */}
      {selectedCompetition && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-ski-navy mb-4">{selectedCompetition.competition}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-ski-blue" />
              <div>
                <div className="text-sm text-gray-500">比赛日期</div>
                <div className="font-medium">{selectedCompetition.date} ~ {selectedCompetition.endDate}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm text-gray-500">比赛地点</div>
                <div className="font-medium">{selectedCompetition.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-purple-600" />
              <div>
                <div className="text-sm text-gray-500">比赛项目</div>
                <div className="font-medium">{selectedCompetition.sport}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-sm text-gray-500">参赛人数</div>
                <div className="font-medium">{totalAthletes} 人</div>
              </div>
            </div>
          </div>

          {/* 项目统计 */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full">
                已完赛: {selectedCompetition.events.length} 个小项
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                年龄组: {availableAgeGroups.join(' / ')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 操作按钮和筛选 */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleExport}
            className="inline-flex items-center px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            导出当前成绩
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Share2 className="w-4 h-4 mr-2" />
            分享
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors print:hidden"
          >
            <Printer className="w-4 h-4 mr-2" />
            打印
          </button>
        </div>

        {/* 筛选器 */}
        <div className="flex items-center gap-3">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value as 'all' | '男子组' | '女子组')}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-ski-blue focus:border-ski-blue"
          >
            <option value="all">全部性别</option>
            <option value="男子组">男子组</option>
            <option value="女子组">女子组</option>
          </select>
          <select
            value={filterAgeGroup}
            onChange={(e) => setFilterAgeGroup(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-ski-blue focus:border-ski-blue"
          >
            <option value="all">全部年龄组</option>
            {availableAgeGroups.map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 事件切换器 */}
      {filteredEvents.length > 0 && (
        <div className="flex items-center justify-between mb-6 p-4 bg-ski-blue/5 rounded-lg border border-ski-blue/20">
          <button
            onClick={() => setSelectedEventIndex(Math.max(0, selectedEventIndex - 1))}
            disabled={selectedEventIndex === 0}
            className="p-2 rounded-full hover:bg-ski-blue/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-ski-blue" />
          </button>
          <div className="text-center flex-1 px-4">
            <div className="font-bold text-ski-navy text-lg">
              {currentEvent?.discipline} · {currentEvent?.ageGroup} · {currentEvent?.gender}
            </div>
            <div className="text-sm text-gray-500">
              第 {selectedEventIndex + 1} / {filteredEvents.length} 个小项
            </div>
          </div>
          <button
            onClick={() => setSelectedEventIndex(Math.min(filteredEvents.length - 1, selectedEventIndex + 1))}
            disabled={selectedEventIndex >= filteredEvents.length - 1}
            className="p-2 rounded-full hover:bg-ski-blue/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-ski-blue" />
          </button>
        </div>
      )}

      {/* 领奖台 - 显示前3名 */}
      {currentEvent && currentEvent.athletes.length >= 3 && (
        <div className="bg-gradient-to-br from-ski-navy to-blue-900 rounded-xl p-8 mb-8 text-white">
          <h2 className="text-xl font-bold text-center mb-8">领奖台</h2>
          <div className="flex justify-center items-end gap-4">
            {/* 银牌 - 第二名 */}
            {currentEvent.athletes[1] && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
                  <Medal className="w-10 h-10 text-gray-600" />
                </div>
                <div className="bg-gray-300 rounded-t-lg pt-4 pb-2 px-4 w-28">
                  <div className="text-gray-800 font-bold truncate">{currentEvent.athletes[1].name}</div>
                  <div className="text-gray-600 text-sm truncate">{currentEvent.athletes[1].team}</div>
                  <div className="text-gray-700 text-xs mt-1">
                    {currentEvent.athletes[1].time || (currentEvent.athletes[1].bestScore ? `${currentEvent.athletes[1].bestScore}分` : '')}
                  </div>
                </div>
                <div className="bg-gray-400 h-16 w-28 flex items-center justify-center text-2xl font-bold text-gray-700">
                  2
                </div>
              </div>
            )}

            {/* 金牌 - 第一名 */}
            {currentEvent.athletes[0] && (
              <div className="text-center -mt-4">
                <div className="w-24 h-24 mx-auto mb-3 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Trophy className="w-12 h-12 text-yellow-800" />
                </div>
                <div className="bg-yellow-400 rounded-t-lg pt-4 pb-2 px-4 w-32">
                  <div className="text-yellow-900 font-bold text-lg truncate">{currentEvent.athletes[0].name}</div>
                  <div className="text-yellow-800 text-sm truncate">{currentEvent.athletes[0].team}</div>
                  <div className="text-yellow-900 text-xs mt-1">
                    {currentEvent.athletes[0].time || (currentEvent.athletes[0].bestScore ? `${currentEvent.athletes[0].bestScore}分` : '')}
                  </div>
                </div>
                <div className="bg-yellow-500 h-24 w-32 flex items-center justify-center text-3xl font-bold text-yellow-900">
                  1
                </div>
              </div>
            )}

            {/* 铜牌 - 第三名 */}
            {currentEvent.athletes[2] && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Medal className="w-10 h-10 text-orange-800" />
                </div>
                <div className="bg-orange-400 rounded-t-lg pt-4 pb-2 px-4 w-28">
                  <div className="text-orange-900 font-bold truncate">{currentEvent.athletes[2].name}</div>
                  <div className="text-orange-800 text-sm truncate">{currentEvent.athletes[2].team}</div>
                  <div className="text-orange-900 text-xs mt-1">
                    {currentEvent.athletes[2].time || (currentEvent.athletes[2].bestScore ? `${currentEvent.athletes[2].bestScore}分` : '')}
                  </div>
                </div>
                <div className="bg-orange-500 h-12 w-28 flex items-center justify-center text-2xl font-bold text-orange-900">
                  3
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 成绩表格 */}
      {currentEvent && currentEvent.athletes.length > 0 ? (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">名次</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">号码</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">姓名</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">代表队</th>
                  {currentEvent.athletes[0]?.birthYear && (
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">出生年</th>
                  )}
                  {currentEvent.athletes[0]?.run1 && (
                    <>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">第一轮</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">第二轮</th>
                    </>
                  )}
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                    {currentEvent.athletes[0]?.time ? '总成绩' : '最佳得分'}
                  </th>
                  {currentEvent.athletes[0]?.points !== undefined && (
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">积分</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentEvent.athletes.map((athlete, idx) => {
                  const medal = getMedal(athlete.rank)
                  const medalStyle = medal ? medalConfig[medal] : null
                  return (
                    <tr
                      key={`${athlete.name}-${idx}`}
                      className={`hover:bg-gray-50 transition-colors ${medalStyle?.bg || ''}`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {medalStyle ? (
                            <span className={`font-bold ${medalStyle.color}`}>
                              {athlete.rank}
                            </span>
                          ) : (
                            <span className="text-gray-600">{athlete.rank}</span>
                          )}
                          {medalStyle && (
                            <Medal className={`w-4 h-4 ${medalStyle.color}`} />
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{athlete.bib}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{athlete.name}</td>
                      <td className="px-4 py-3 text-gray-600">{athlete.team}</td>
                      {athlete.birthYear && (
                        <td className="px-4 py-3 text-center text-gray-500">{athlete.birthYear}</td>
                      )}
                      {athlete.run1 && (
                        <>
                          <td className="px-4 py-3 text-center font-mono text-gray-700">{athlete.run1}</td>
                          <td className="px-4 py-3 text-center font-mono text-gray-700">{athlete.run2}</td>
                        </>
                      )}
                      <td className="px-4 py-3 text-center font-mono font-semibold text-gray-900">
                        {athlete.time || (athlete.bestScore ? `${athlete.bestScore}` : '-')}
                      </td>
                      {athlete.points !== undefined && (
                        <td className="px-4 py-3 text-center">
                          <span className="inline-flex items-center px-2 py-1 bg-ski-blue/10 text-ski-blue rounded font-medium">
                            {athlete.points}
                          </span>
                        </td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <p className="text-gray-500">该筛选条件下暂无成绩数据</p>
        </div>
      )}

      {/* 小项快速导航 */}
      {filteredEvents.length > 1 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-ski-navy mb-4">全部小项</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredEvents.map((event, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedEventIndex(idx)}
                className={`p-3 rounded-lg text-left transition-all ${
                  idx === selectedEventIndex
                    ? 'bg-ski-blue text-white shadow-md'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="font-medium text-sm">{event.discipline}</div>
                <div className={`text-xs ${idx === selectedEventIndex ? 'text-white/80' : 'text-gray-500'}`}>
                  {event.ageGroup} · {event.gender} · {event.athletes.length}人
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 备注 */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <p className="font-medium mb-2">说明：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>成绩数据来源于官方比赛成绩公告</li>
          <li>积分按照中国滑雪协会U系列360分制积分规则计算</li>
          <li>如有疑问请联系赛事组委会</li>
        </ul>
      </div>
    </div>
  )
}

export default function ResultsAnnouncementPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}
