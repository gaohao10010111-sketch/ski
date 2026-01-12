'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { Trophy, Medal, Award, Crown, Download, Search, ChevronLeft, ChevronRight, ArrowLeft, ChevronDown, ChevronUp, Users, Sparkles, Target, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight, Minus, Mountain, ArrowLeftRight, Wind, Star } from 'lucide-react'
import { latestResults, type AthleteResult } from '@/data/latestResults'
import { useToast } from '@/components/Toast'
import { totalRankingsData, type TotalRankingItem } from '@/data/totalRankings'

// 项目类型映射
const sportTypeLabels: Record<string, string> = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle': '单板坡障/大跳台',
  'snowboard-bigair': '单板大跳台',
  'snowboard-parallel': '单板平行项目',
  'freestyle-slopestyle': '自由式坡障/大跳台',
  'freestyle-bigair': '自由式大跳台',
}

// 四大项目配置（用于总积分视图的滑动Tab）
const sportTypeConfig = [
  { value: 'alpine', label: '高山滑雪', icon: Mountain },
  { value: 'snowboard-slopestyle-bigair', label: '单板坡障/大跳台', icon: Sparkles },
  { value: 'snowboard-parallel', label: '单板平行项目', icon: ArrowLeftRight },
  { value: 'freestyle-slopestyle-bigair', label: '自由式坡障/大跳台', icon: Wind },
]

// 从数据中提取所有可用的筛选选项
function extractFilterOptions() {
  const disciplines = new Set<string>()
  const ageGroups = new Set<string>()
  const genders = new Set<string>()
  const sportTypes = new Set<string>()

  for (const competition of latestResults.competitions) {
    sportTypes.add(competition.sportType)
    for (const event of competition.events) {
      disciplines.add(event.discipline)
      ageGroups.add(event.ageGroup)
      genders.add(event.gender)
    }
  }

  return {
    disciplines: Array.from(disciplines).sort(),
    ageGroups: Array.from(ageGroups).sort((a, b) => {
      const numA = parseInt(a.replace('U', ''))
      const numB = parseInt(b.replace('U', ''))
      return numA - numB
    }),
    genders: Array.from(genders).sort(),
    sportTypes: Array.from(sportTypes)
  }
}

// 获取匹配筛选条件的赛事组合
interface RankingGroup {
  competition: string
  sportType: string
  discipline: string
  ageGroup: string
  gender: string
  date: string
  location: string
  athletes: AthleteResult[]
}

function getRankingGroups(
  sportType: string,
  discipline: string,
  ageGroup: string,
  gender: string
): RankingGroup[] {
  const groups: RankingGroup[] = []

  for (const competition of latestResults.competitions) {
    if (sportType !== 'all' && competition.sportType !== sportType) continue

    for (const event of competition.events) {
      if (discipline !== 'all' && event.discipline !== discipline) continue
      if (ageGroup !== 'all' && event.ageGroup !== ageGroup) continue
      if (gender !== 'all' && event.gender !== gender) continue

      groups.push({
        competition: competition.competition,
        sportType: competition.sportType,
        discipline: event.discipline,
        ageGroup: event.ageGroup,
        gender: event.gender,
        date: competition.date,
        location: competition.location,
        athletes: event.athletes
      })
    }
  }

  return groups
}

// 排名变化显示组件
function RankChangeDisplay({ change }: { change?: number | null }) {
  if (change === undefined || change === null) {
    // 新进榜
    return (
      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">
        NEW
      </span>
    )
  }

  if (change === 0) {
    // 持平
    return (
      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500">
        <Minus className="w-3 h-3" />
        <span>-</span>
      </span>
    )
  }

  if (change > 0) {
    // 上升
    return (
      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
        <ArrowUpRight className="w-3 h-3" />
        <span>{change}</span>
      </span>
    )
  }

  // 下降
  return (
    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
      <ArrowDownRight className="w-3 h-3" />
      <span>{Math.abs(change)}</span>
    </span>
  )
}

// 积分构成提示组件
function PointsBreakdownTooltip({ item }: { item: TotalRankingItem }) {
  const [isOpen, setIsOpen] = useState(false)

  // 检查是否有积分构成数据
  const breakdown = (item as any).pointsBreakdown as Array<{
    competition: string
    location: string
    points: number
    rank: number
  }> | undefined

  if (!breakdown || breakdown.length === 0) {
    return (
      <span className={`inline-flex px-3 py-1 rounded-lg text-sm font-bold ${
        item.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
        item.rank === 2 ? 'bg-gray-300 text-gray-800' :
        item.rank === 3 ? 'bg-orange-300 text-orange-900' :
        'bg-blue-100 text-blue-700'
      }`}>
        {item.totalPoints}
      </span>
    )
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className={`inline-flex px-3 py-1 rounded-lg text-sm font-bold cursor-help transition-transform ${
        item.rank === 1 ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500' :
        item.rank === 2 ? 'bg-gray-300 text-gray-800 hover:bg-gray-400' :
        item.rank === 3 ? 'bg-orange-300 text-orange-900 hover:bg-orange-400' :
        'bg-blue-100 text-blue-700 hover:bg-blue-200'
      } ${isOpen ? 'scale-105' : ''}`}>
        {item.totalPoints}
      </span>

      {/* 工具提示 */}
      {isOpen && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 min-w-[240px]">
          <div className="bg-gray-900 text-white rounded-lg shadow-xl p-3 text-left">
            <div className="text-xs font-medium text-gray-400 mb-2">积分构成明细</div>
            <div className="space-y-1.5">
              {breakdown.map((b, i) => (
                <div key={i} className="flex items-center justify-between gap-3 text-sm">
                  <div className="flex-1 min-w-0">
                    <div className="truncate text-gray-200" title={b.competition}>
                      {b.location || b.competition}
                    </div>
                    <div className="text-xs text-gray-500">第{b.rank}名</div>
                  </div>
                  <div className="font-bold text-yellow-400 whitespace-nowrap">
                    +{b.points}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-700 flex justify-between text-sm">
              <span className="text-gray-400">总计</span>
              <span className="font-bold text-white">{item.totalPoints}分</span>
            </div>
            {/* 箭头 */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function PointsRankingsPage() {
  // 视图模式：'competition' 按比赛查看，'total' 总积分排行
  const [viewMode, setViewMode] = useState<'competition' | 'total'>('total')

  const [selectedSportType, setSelectedSportType] = useState('all')
  const [selectedTotalSportType, setSelectedTotalSportType] = useState('alpine') // 总积分视图的项目筛选，默认高山滑雪
  const [selectedDiscipline, setSelectedDiscipline] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isExporting, setIsExporting] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  // 每个项目的分页状态
  const [sportPages, setSportPages] = useState<Record<string, number>>({})
  const sportPageSize = 20 // 每页显示20条
  // 展开的小子项（用于紧凑模式）
  const [expandedSubEvents, setExpandedSubEvents] = useState<Set<string>>(new Set())
  // 按比赛视图展开的组
  const [expandedCompetitionGroups, setExpandedCompetitionGroups] = useState<Set<string>>(new Set())
  // 按比赛视图：每个比赛当前选中的小项索引
  const [selectedCompetitionGroupIndex, setSelectedCompetitionGroupIndex] = useState<Record<string, number>>({})
  const { showToast } = useToast()

  // 切换小子项展开/收起
  const toggleSubEvent = (key: string) => {
    setExpandedSubEvents(prev => {
      const newSet = new Set(prev)
      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }
      return newSet
    })
  }

  // 全部展开/收起 (总积分视图)
  const expandAll = () => {
    const allKeys = filteredSportRankings.flatMap(sr =>
      (sr.subEventRankings || []).map(se => `${sr.sportType}-${se.subEventName}`)
    )
    setExpandedSubEvents(new Set(allKeys))
  }

  const collapseAll = () => {
    setExpandedSubEvents(new Set())
  }

  // 当切换项目Tab时，自动展开第一个小子项
  const expandFirstSubEvent = (sportType: string) => {
    const sportRanking = totalRankingsData.sportRankings.find(sr => sr.sportType === sportType)
    if (sportRanking && sportRanking.subEventRankings && sportRanking.subEventRankings.length > 0) {
      const firstSubEvent = sportRanking.subEventRankings[0]
      const key = `${sportType}-${firstSubEvent.subEventName}`
      setExpandedSubEvents(new Set([key]))
    } else {
      setExpandedSubEvents(new Set())
    }
  }

  // 页面初次加载时，展开默认项目的第一个小子项
  useEffect(() => {
    expandFirstSubEvent(selectedTotalSportType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 切换按比赛视图的组展开/收起
  const toggleCompetitionGroup = (key: string) => {
    setExpandedCompetitionGroups(prev => {
      const newSet = new Set(prev)
      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }
      return newSet
    })
  }

  // 全部展开/收起 (按比赛视图)
  const expandAllCompetitionGroups = () => {
    const allKeys = filteredGroups.map((g, i) => `${g.competition}-${g.discipline}-${g.ageGroup}-${g.gender}`)
    setExpandedCompetitionGroups(new Set(allKeys))
  }

  const collapseAllCompetitionGroups = () => {
    setExpandedCompetitionGroups(new Set())
  }

  const filterOptions = useMemo(() => extractFilterOptions(), [])

  // 获取当前筛选条件下的排名组（按比赛视图）
  const rankingGroups = useMemo(() => {
    return getRankingGroups(selectedSportType, selectedDiscipline, selectedAgeGroup, selectedGender)
  }, [selectedSportType, selectedDiscipline, selectedAgeGroup, selectedGender])

  // 搜索过滤（按比赛视图）
  const filteredGroups = useMemo(() => {
    if (!searchTerm) return rankingGroups
    const term = searchTerm.toLowerCase()
    return rankingGroups.map(group => ({
      ...group,
      athletes: group.athletes.filter(a =>
        a.name.toLowerCase().includes(term) ||
        a.team.toLowerCase().includes(term)
      )
    })).filter(group => group.athletes.length > 0)
  }, [rankingGroups, searchTerm])

  // 按比赛分组的数据（用于紧凑视图）
  const groupedByCompetition = useMemo(() => {
    const grouped: Map<string, {
      competition: string
      sportType: string
      date: string
      location: string
      groups: RankingGroup[]
    }> = new Map()

    for (const group of filteredGroups) {
      const key = group.competition
      if (!grouped.has(key)) {
        grouped.set(key, {
          competition: group.competition,
          sportType: group.sportType,
          date: group.date,
          location: group.location,
          groups: []
        })
      }
      grouped.get(key)!.groups.push(group)
    }

    return Array.from(grouped.values())
  }, [filteredGroups])

  // 按项目和小子项分组的总积分排名筛选
  const filteredSportRankings = useMemo(() => {
    // 获取要显示的项目列表（按选中的项目筛选）
    const sportRankings = totalRankingsData.sportRankings.filter(sr => sr.sportType === selectedTotalSportType)

    // 对每个项目的每个小子项应用年龄组、性别、搜索筛选
    return sportRankings.map(sr => {
      // 使用 subEventRankings（小子项）代替 disciplineRankings
      const filteredSubEventRankings = (sr.subEventRankings || []).filter(se => {
        // 按年龄组筛选（小子项已经包含具体的年龄组）
        if (selectedAgeGroup !== 'all' && se.ageGroup !== selectedAgeGroup) {
          return false
        }
        // 按性别筛选（小子项已经包含具体的性别）
        if (selectedGender !== 'all' && se.gender !== selectedGender) {
          return false
        }
        return true
      }).map(se => {
        let rankings = se.rankings

        // 搜索筛选
        if (searchTerm) {
          const term = searchTerm.toLowerCase()
          rankings = rankings.filter(r =>
            r.athleteName.toLowerCase().includes(term) ||
            r.team.toLowerCase().includes(term)
          )
        }

        // 重新计算排名
        return {
          ...se,
          rankings: rankings.map((item, index) => ({
            ...item,
            rank: index + 1
          })),
          total: rankings.length
        }
      }).filter(se => se.rankings.length > 0) // 过滤掉没有数据的小子项

      return {
        ...sr,
        subEventRankings: filteredSubEventRankings,
        total: filteredSubEventRankings.reduce((sum, se) => sum + se.total, 0)
      }
    }).filter(sr => sr.subEventRankings && sr.subEventRankings.length > 0) // 过滤掉没有数据的项目
  }, [selectedTotalSportType, selectedAgeGroup, selectedGender, searchTerm])

  // 总积分排名筛选（兼容旧格式，用于导出等）
  const filteredTotalRankings = useMemo(() => {
    // 合并所有筛选后的项目和小子项排名
    return filteredSportRankings.flatMap(sr => (sr.subEventRankings || []).flatMap(se => se.rankings))
  }, [filteredSportRankings])

  // 分页计算
  const totalPages = useMemo(() => {
    return Math.ceil(filteredTotalRankings.length / pageSize)
  }, [filteredTotalRankings.length, pageSize])

  // 当前页数据
  const paginatedRankings = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return filteredTotalRankings.slice(start, end)
  }, [filteredTotalRankings, currentPage, pageSize])

  // 筛选条件变化时重置页码
  const resetPage = () => {
    setCurrentPage(1)
    setSportPages({}) // 重置所有项目的分页
  }

  // 获取某个小子项的当前页码（key: sportType-subEventName）
  const getSubEventPage = (sportType: string, subEventName: string) => sportPages[`${sportType}-${subEventName}`] || 1

  // 设置某个小子项的页码
  const setSubEventPage = (sportType: string, subEventName: string, page: number) => {
    setSportPages(prev => ({ ...prev, [`${sportType}-${subEventName}`]: page }))
  }

  // 计算某个小子项的分页数据
  const getPaginatedRankings = (rankings: any[], sportType: string, subEventName: string) => {
    const page = getSubEventPage(sportType, subEventName)
    const start = (page - 1) * sportPageSize
    const end = start + sportPageSize
    return rankings.slice(start, end)
  }

  // 计算总页数
  const getTotalPages = (totalCount: number) => Math.ceil(totalCount / sportPageSize)

  // 统计信息
  const stats = useMemo(() => {
    if (viewMode === 'total') {
      return {
        totalCompetitions: totalRankingsData.stats.competitionCount,
        totalEvents: totalRankingsData.stats.totalResults,
        uniqueAthletes: totalRankingsData.stats.athleteCount,
        totalAthletes: filteredTotalRankings.length
      }
    }

    let totalAthletes = 0
    let totalEvents = 0
    const athleteSet = new Set<string>()

    for (const group of filteredGroups) {
      totalEvents++
      for (const athlete of group.athletes) {
        athleteSet.add(`${athlete.name}-${athlete.team}`)
        totalAthletes++
      }
    }

    return {
      totalEvents,
      totalAthletes,
      uniqueAthletes: athleteSet.size,
      totalCompetitions: latestResults.competitions.length
    }
  }, [filteredGroups, filteredTotalRankings, viewMode])

  // 导出排行榜
  const handleExport = async () => {
    setIsExporting(true)
    try {
      const rows: string[][] = []

      if (viewMode === 'total') {
        if (filteredTotalRankings.length === 0) {
          showToast('没有数据可导出', 'warning')
          return
        }
        rows.push(['排名', '运动员', '单位', '年龄组', '性别', '总积分', '参赛次数', '最佳名次'])
        for (const item of filteredTotalRankings) {
          rows.push([
            String(item.rank),
            item.athleteName,
            item.team,
            item.ageGroup,
            item.gender,
            String(item.totalPoints),
            String(item.competitionCount),
            String(item.bestRank)
          ])
        }
      } else {
        if (filteredGroups.length === 0) {
          showToast('没有数据可导出', 'warning')
          return
        }
        rows.push(['比赛', '项目', '小项', '年龄组', '性别', '排名', '号码', '姓名', '单位', '成绩/得分', '积分'])
        for (const group of filteredGroups) {
          for (const athlete of group.athletes) {
            rows.push([
              group.competition,
              sportTypeLabels[group.sportType] || group.sportType,
              group.discipline,
              group.ageGroup,
              group.gender,
              String(athlete.rank),
              String(athlete.bib),
              athlete.name,
              athlete.team,
              athlete.time || (athlete.bestScore ? String(athlete.bestScore) : '-'),
              athlete.points ? String(athlete.points) : '-'
            ])
          }
        }
      }

      const csvContent = rows.map(row => row.join(',')).join('\n')
      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `积分排行榜_${viewMode === 'total' ? '总积分' : '按比赛'}_${new Date().toISOString().split('T')[0]}.csv`
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
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-orange-500" />
      default:
        return (
          <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
            {rank}
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部标题区域 - 增强设计感 */}
      <div className="relative bg-gradient-to-r from-ski-blue via-blue-600 to-indigo-600 overflow-hidden">
        {/* 装饰背景元素 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full opacity-50"></div>
        </div>
        {/* 雪花装饰 */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute top-4 right-20 w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L12 24M0 12L24 12M3.5 3.5L20.5 20.5M20.5 3.5L3.5 20.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <svg className="absolute bottom-6 left-1/4 w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L12 24M0 12L24 12M3.5 3.5L20.5 20.5M20.5 3.5L3.5 20.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <svg className="absolute top-1/3 right-1/3 w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L12 24M0 12L24 12M3.5 3.5L20.5 20.5M20.5 3.5L3.5 20.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* 左侧：返回+标题 */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-4">
                {/* 奖杯图标 - 更大更醒目 */}
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 rotate-3 hover:rotate-0 transition-transform">
                    <Trophy className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
                    积分排行榜
                  </h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2025-2026赛季
                    </span>
                    <span className="text-white/80 text-sm">全国青少年U系列</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：视图切换 */}
            <div className="inline-flex rounded-xl bg-white/20 backdrop-blur-sm p-1">
              <button
                onClick={() => setViewMode('total')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'total'
                    ? 'bg-white text-ski-blue shadow-md'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                总积分排名
              </button>
              <button
                onClick={() => setViewMode('competition')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'competition'
                    ? 'bg-white text-ski-blue shadow-md'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                单次比赛排名
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 统计卡片 - 四色标签 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-blue-700">{stats.uniqueAthletes}</div>
                <div className="text-sm text-blue-600">参赛运动员</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-green-700">{stats.totalCompetitions}</div>
                <div className="text-sm text-green-600">已完赛事</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
            <div className="flex items-center">
              <Target className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-purple-700">{totalRankingsData.sportRankings.reduce((sum, sr) => sum + (sr.subEventRankings?.length || 0), 0)}</div>
                <div className="text-sm text-purple-600">比赛小项</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-orange-700">{stats.totalAthletes}</div>
                <div className="text-sm text-orange-600">总参赛人次</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== 总积分排名视图 ========== */}
        {viewMode === 'total' && (
          <>
            {/* 第一行：四大项目Tab */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex bg-white rounded-lg shadow p-1 gap-1 flex-wrap">
                {sportTypeConfig.map((config) => {
                  const Icon = config.icon
                  const isSelected = selectedTotalSportType === config.value
                  return (
                    <button
                      key={config.value}
                      onClick={() => { setSelectedTotalSportType(config.value); resetPage(); expandFirstSubEvent(config.value); }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                        isSelected
                          ? 'bg-ski-blue text-white shadow'
                          : 'text-gray-600 hover:text-ski-blue hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {config.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 第二行：筛选器（一行排列） */}
            <div className="bg-white rounded-lg shadow p-3 mb-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* 搜索框 */}
                <div className="relative flex-1 min-w-[180px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="搜索运动员或单位..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); resetPage(); }}
                    className="pl-9 w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                  />
                </div>

                {/* 年龄组 */}
                <select
                  value={selectedAgeGroup}
                  onChange={(e) => { setSelectedAgeGroup(e.target.value); resetPage(); }}
                  className="px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue"
                >
                  <option value="all">全部年龄组</option>
                  {totalRankingsData.filters.ageGroups.map(ag => (
                    <option key={ag} value={ag}>{ag}</option>
                  ))}
                </select>

                {/* 性别 */}
                <select
                  value={selectedGender}
                  onChange={(e) => { setSelectedGender(e.target.value); resetPage(); }}
                  className="px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue"
                >
                  <option value="all">男女不限</option>
                  {totalRankingsData.filters.genders.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>

                {/* 导出按钮 */}
                <button
                  onClick={handleExport}
                  disabled={isExporting || filteredTotalRankings.length === 0}
                  className="bg-ski-blue text-white py-2 px-4 text-sm rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  导出
                </button>
              </div>
            </div>

            {/* 全部小项标签选择 */}
            {filteredSportRankings.length > 0 && filteredSportRankings[0].subEventRankings && (
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-medium text-gray-900">全部小项</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={expandAll}
                      className="text-xs text-ski-blue hover:underline"
                    >
                      全部展开
                    </button>
                    <span className="text-gray-300">|</span>
                    <button
                      onClick={collapseAll}
                      className="text-xs text-ski-blue hover:underline"
                    >
                      全部收起
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filteredSportRankings[0].subEventRankings.map((subEvent) => {
                    const subEventKey = `${filteredSportRankings[0].sportType}-${subEvent.subEventName}`
                    const isExpanded = expandedSubEvents.has(subEventKey)
                    return (
                      <button
                        key={subEventKey}
                        onClick={() => toggleSubEvent(subEventKey)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          isExpanded
                            ? 'bg-ski-blue text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {subEvent.discipline} {subEvent.ageGroup} {subEvent.gender}
                        <span className={`ml-1.5 text-xs ${isExpanded ? 'text-white/70' : 'text-gray-400'}`}>
                          ({subEvent.total})
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* 积分排行榜标题 */}
            {filteredSportRankings.length > 0 && (
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  积分排行榜
                </h2>
                <span className="text-sm text-gray-500">
                  已选择 {expandedSubEvents.size} 个小项
                </span>
              </div>
            )}

            {/* 排名数据展示区域 */}
            {filteredSportRankings.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-500">暂无符合条件的排名数据</p>
                <p className="text-sm text-gray-400 mt-1">请调整筛选条件后重试</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredSportRankings.map((sportRanking) => (
                  <div key={sportRanking.sportType}>
                    {/* 展开的小子项详情 */}
                    {(sportRanking.subEventRankings || []).map((subEvent) => {
                      const subEventKey = `${sportRanking.sportType}-${subEvent.subEventName}`
                      const isExpanded = expandedSubEvents.has(subEventKey)
                      const top3 = subEvent.rankings.slice(0, 3)
                      const hasTop3 = top3.length >= 3

                      if (!isExpanded) return null

                      return (
                        <div key={`detail-${subEventKey}`} className="bg-white rounded-lg shadow overflow-hidden mb-4">
                          {/* 小子项标题 */}
                          <div className="bg-ski-blue px-4 py-3 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Award className="h-5 w-5" />
                              <h3 className="text-base font-medium">{subEvent.subEventName}</h3>
                              <span className="text-sm bg-white/20 px-2 py-0.5 rounded-full">
                                {subEvent.total} 人
                              </span>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); toggleSubEvent(subEventKey); }}
                              className="p-1 hover:bg-white/20 rounded flex items-center gap-1 text-sm"
                            >
                              收起 <ChevronUp className="h-4 w-4" />
                            </button>
                          </div>

                          {/* 领奖台展示 - 前三名 */}
                          {hasTop3 && (
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                              <div className="flex justify-center items-end gap-4">
                                {/* 银牌 - 第2名 */}
                                <div className="text-center">
                                  <div className="w-14 h-14 mx-auto mb-2 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center shadow-lg">
                                    <Medal className="w-7 h-7 text-gray-600" />
                                  </div>
                                  <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-lg pt-2 pb-1 px-3 w-24">
                                    <div className="text-gray-800 font-bold text-sm truncate">{top3[1].athleteName}</div>
                                    <div className="text-gray-600 text-xs truncate">{top3[1].team}</div>
                                    <div className="text-gray-700 font-medium text-sm">{top3[1].totalPoints}分</div>
                                  </div>
                                  <div className="bg-gray-400 h-12 w-24 flex items-center justify-center text-2xl font-bold text-gray-700 rounded-b-sm">2</div>
                                </div>
                                {/* 金牌 - 第1名 */}
                                <div className="text-center -mt-4">
                                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-yellow-300/50">
                                    <Trophy className="w-8 h-8 text-yellow-700" />
                                  </div>
                                  <div className="bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-t-lg pt-2 pb-1 px-3 w-28">
                                    <div className="text-yellow-900 font-bold text-sm truncate">{top3[0].athleteName}</div>
                                    <div className="text-yellow-800 text-xs truncate">{top3[0].team}</div>
                                    <div className="text-yellow-900 font-medium text-sm">{top3[0].totalPoints}分</div>
                                  </div>
                                  <div className="bg-yellow-500 h-20 w-28 flex items-center justify-center text-3xl font-bold text-yellow-900 rounded-b-sm">1</div>
                                </div>
                                {/* 铜牌 - 第3名 */}
                                <div className="text-center">
                                  <div className="w-14 h-14 mx-auto mb-2 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Medal className="w-7 h-7 text-orange-700" />
                                  </div>
                                  <div className="bg-gradient-to-b from-orange-300 to-orange-400 rounded-t-lg pt-2 pb-1 px-3 w-24">
                                    <div className="text-orange-900 font-bold text-sm truncate">{top3[2].athleteName}</div>
                                    <div className="text-orange-800 text-xs truncate">{top3[2].team}</div>
                                    <div className="text-orange-900 font-medium text-sm">{top3[2].totalPoints}分</div>
                                  </div>
                                  <div className="bg-orange-500 h-8 w-24 flex items-center justify-center text-2xl font-bold text-orange-900 rounded-b-sm">3</div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 排名表格 */}
                          <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-16">名次</th>
                                  <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase w-16">变化</th>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">单位</th>
                                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-16">参赛</th>
                                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-16">最佳</th>
                                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-24">总积分</th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {getPaginatedRankings(subEvent.rankings, sportRanking.sportType, subEvent.subEventName).map((item) => (
                                  <tr
                                    key={`${sportRanking.sportType}-${subEvent.subEventName}-${item.athleteId}`}
                                    className={`hover:bg-blue-50 transition-colors ${
                                      item.rank === 1 ? 'bg-yellow-50' :
                                      item.rank === 2 ? 'bg-gray-50' :
                                      item.rank === 3 ? 'bg-orange-50' : ''
                                    }`}
                                  >
                                    <td className="px-4 py-2 whitespace-nowrap text-center">
                                      {getRankIcon(item.rank)}
                                    </td>
                                    <td className="px-3 py-2 whitespace-nowrap text-center">
                                      <RankChangeDisplay change={item.rankChange} />
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                      <span className={`text-sm font-medium ${item.rank <= 3 ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {item.athleteName}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-600" title={item.team}>
                                      {item.team}
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-center">
                                      <span className="text-sm text-gray-600">{item.competitionCount}</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-center">
                                      <span className={`text-sm font-medium ${
                                        item.bestRank === 1 ? 'text-yellow-600' :
                                        item.bestRank <= 3 ? 'text-orange-600' : 'text-gray-600'
                                      }`}>
                                        {item.bestRank}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-center">
                                      <PointsBreakdownTooltip item={item} />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* 分页控件 */}
                          {subEvent.rankings.length > sportPageSize && (
                            <div className="px-4 py-2 bg-gray-50 flex items-center justify-between text-sm">
                              <div className="text-gray-500">
                                第 {getSubEventPage(sportRanking.sportType, subEvent.subEventName)} / {getTotalPages(subEvent.rankings.length)} 页
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => setSubEventPage(sportRanking.sportType, subEvent.subEventName, getSubEventPage(sportRanking.sportType, subEvent.subEventName) - 1)}
                                  disabled={getSubEventPage(sportRanking.sportType, subEvent.subEventName) === 1}
                                  className="px-2 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <span className="px-2 text-gray-600">
                                  {getSubEventPage(sportRanking.sportType, subEvent.subEventName)}
                                </span>
                                <button
                                  onClick={() => setSubEventPage(sportRanking.sportType, subEvent.subEventName, getSubEventPage(sportRanking.sportType, subEvent.subEventName) + 1)}
                                  disabled={getSubEventPage(sportRanking.sportType, subEvent.subEventName) >= getTotalPages(subEvent.rankings.length)}
                                  className="px-2 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}

          </>
        )}

        {/* ========== 单次比赛排名视图 ========== */}
        {viewMode === 'competition' && (
          <>
            {/* 比赛选择下拉 + 筛选器 */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="flex flex-wrap items-center gap-4">
                {/* 比赛下拉选择 */}
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-xs font-medium text-amber-700 mb-1">选择比赛</label>
                  <select
                    value={selectedCompetitionGroupIndex['__selected_competition'] || groupedByCompetition[0]?.competition || ''}
                    onChange={(e) => setSelectedCompetitionGroupIndex(prev => ({
                      ...prev,
                      '__selected_competition': e.target.value
                    }))}
                    className="w-full px-3 py-2 text-sm bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    {groupedByCompetition.map((comp) => (
                      <option key={comp.competition} value={comp.competition}>
                        {comp.competition} ({comp.date})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 搜索框 */}
                <div className="relative min-w-[160px]">
                  <label className="block text-xs font-medium text-amber-700 mb-1">搜索</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-400" />
                    <input
                      type="text"
                      placeholder="运动员或单位..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 w-full px-3 py-2 text-sm bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {groupedByCompetition.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Medal className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-500">暂无比赛数据</p>
                <p className="text-sm text-gray-400 mt-1">请等待比赛成绩录入</p>
              </div>
            ) : (
              <div className="space-y-6">
                {groupedByCompetition
                  .filter(comp => !selectedCompetitionGroupIndex['__selected_competition'] || comp.competition === selectedCompetitionGroupIndex['__selected_competition'])
                  .slice(0, selectedCompetitionGroupIndex['__selected_competition'] ? 1 : groupedByCompetition.length)
                  .map((competitionData) => {
                  // 获取当前比赛选中的小项索引
                  const currentGroupIndex = selectedCompetitionGroupIndex[competitionData.competition] || 0
                  const currentGroup = competitionData.groups[currentGroupIndex]
                  const top3 = currentGroup?.athletes.slice(0, 3) || []

                  // 预先计算当前小项的列配置
                  const hasRun = currentGroup?.athletes.some(a => a.run1)
                  const hasTime = currentGroup?.athletes.some(a => a.time)
                  const hasBestScore = currentGroup?.athletes.some(a => a.bestScore !== undefined)
                  const hasPoints = currentGroup?.athletes.some(a => a.points !== undefined)

                  return (
                    <div key={competitionData.competition} className="bg-white rounded-xl shadow-lg border-2 border-amber-100 overflow-hidden">
                      {/* 比赛标题 - 橙金色主题 */}
                      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-5 py-4 text-white relative overflow-hidden">
                        {/* 装饰奖杯图案 */}
                        <div className="absolute right-0 top-0 opacity-10">
                          <Trophy className="h-24 w-24 -mr-6 -mt-6" />
                        </div>
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                              <Medal className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="text-amber-100 text-xs mb-0.5">🏆 单次比赛成绩单</div>
                              <h2 className="text-lg font-bold">{competitionData.competition}</h2>
                              <div className="text-white/80 text-sm mt-0.5 flex items-center gap-2">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{competitionData.date}</span>
                                <span>·</span>
                                <span>{competitionData.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                              {sportTypeLabels[competitionData.sportType] || competitionData.sportType}
                            </span>
                            <span className="text-amber-100 text-xs">
                              {competitionData.groups.length} 个组别
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 小项选择Tab - 突出当前选择 */}
                      <div className="bg-amber-50 px-4 py-3 border-b-2 border-amber-100">
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                          {competitionData.groups.map((group, index) => {
                            const isSelected = index === currentGroupIndex
                            return (
                              <button
                                key={`${group.discipline}-${group.ageGroup}-${group.gender}`}
                                onClick={() => setSelectedCompetitionGroupIndex(prev => ({
                                  ...prev,
                                  [competitionData.competition]: index
                                }))}
                                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                                  isSelected
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-amber-100 border border-amber-200'
                                }`}
                              >
                                <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${
                                  group.ageGroup === 'U12' ? 'bg-green-400' :
                                  group.ageGroup === 'U15' ? 'bg-yellow-400' : 'bg-purple-400'
                                } ${isSelected ? 'ring-2 ring-white/50' : ''}`} />
                                {group.ageGroup} {group.gender}
                                <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                                  isSelected ? 'bg-white/20' : 'bg-amber-100'
                                }`}>
                                  {group.athletes.length}人
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* 🏆 领奖台展示（前三名） */}
                      {currentGroup && top3.length >= 3 && (
                        <div className="bg-gradient-to-b from-amber-50 to-white px-4 py-6">
                          <div className="flex items-end justify-center gap-4 max-w-lg mx-auto">
                            {/* 银牌 - 第2名 */}
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center shadow-lg mb-2 ring-4 ring-gray-200">
                                <span className="text-2xl font-bold text-gray-700">2</span>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-gray-800 text-sm">{top3[1]?.name}</div>
                                <div className="text-xs text-gray-500 max-w-[80px] truncate">{top3[1]?.team}</div>
                                <div className="mt-1 px-2 py-0.5 bg-gray-200 rounded text-xs font-bold text-gray-700">
                                  {top3[1]?.points ?? '-'}分
                                </div>
                              </div>
                              <div className="w-20 h-16 bg-gradient-to-t from-gray-300 to-gray-200 rounded-t-lg mt-2 flex items-center justify-center">
                                <Medal className="h-6 w-6 text-gray-500" />
                              </div>
                            </div>

                            {/* 金牌 - 第1名 */}
                            <div className="flex flex-col items-center -mt-6">
                              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-xl mb-2 ring-4 ring-yellow-300">
                                <Crown className="h-8 w-8 text-yellow-800" />
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-gray-900 text-base">{top3[0]?.name}</div>
                                <div className="text-xs text-gray-600 max-w-[100px] truncate">{top3[0]?.team}</div>
                                <div className="mt-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded text-sm font-bold text-yellow-900 shadow">
                                  {top3[0]?.points ?? '-'}分
                                </div>
                              </div>
                              <div className="w-24 h-24 bg-gradient-to-t from-yellow-400 to-amber-300 rounded-t-lg mt-2 flex items-center justify-center shadow-lg">
                                <Trophy className="h-8 w-8 text-yellow-700" />
                              </div>
                            </div>

                            {/* 铜牌 - 第3名 */}
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg mb-2 ring-4 ring-orange-200">
                                <span className="text-2xl font-bold text-orange-800">3</span>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-gray-800 text-sm">{top3[2]?.name}</div>
                                <div className="text-xs text-gray-500 max-w-[80px] truncate">{top3[2]?.team}</div>
                                <div className="mt-1 px-2 py-0.5 bg-orange-200 rounded text-xs font-bold text-orange-800">
                                  {top3[2]?.points ?? '-'}分
                                </div>
                              </div>
                              <div className="w-20 h-12 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-lg mt-2 flex items-center justify-center">
                                <Award className="h-5 w-5 text-orange-700" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 完整排名表格 */}
                      {currentGroup && (
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead className="bg-amber-100">
                              <tr>
                                <th className="px-4 py-3 text-center text-xs font-bold text-amber-800 uppercase w-14">名次</th>
                                <th className="px-3 py-3 text-center text-xs font-bold text-amber-800 uppercase w-14">号码</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-amber-800 uppercase">姓名</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-amber-800 uppercase">单位</th>
                                {hasRun && (
                                  <>
                                    <th className="px-3 py-3 text-center text-xs font-bold text-amber-800 uppercase w-20">第一轮</th>
                                    <th className="px-3 py-3 text-center text-xs font-bold text-amber-800 uppercase w-20">第二轮</th>
                                  </>
                                )}
                                {(hasTime || hasBestScore) && (
                                  <th className="px-3 py-3 text-center text-xs font-bold text-amber-800 uppercase w-20">
                                    {hasTime ? '成绩' : '得分'}
                                  </th>
                                )}
                                {hasPoints && (
                                  <th className="px-3 py-3 text-center text-xs font-bold text-amber-800 uppercase w-20">积分</th>
                                )}
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-amber-100">
                              {currentGroup.athletes.map((athlete, index) => (
                                <tr
                                  key={index}
                                  className={`hover:bg-amber-50 transition-colors ${
                                    athlete.rank === 1 ? 'bg-yellow-50' :
                                    athlete.rank === 2 ? 'bg-gray-50' :
                                    athlete.rank === 3 ? 'bg-orange-50' : ''
                                  }`}
                                >
                                  <td className="px-4 py-2.5 whitespace-nowrap text-center">
                                    {athlete.rank <= 3 ? (
                                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shadow ${
                                        athlete.rank === 1 ? 'bg-gradient-to-br from-yellow-300 to-amber-500 text-yellow-900' :
                                        athlete.rank === 2 ? 'bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700' :
                                        'bg-gradient-to-br from-orange-300 to-orange-500 text-orange-900'
                                      }`}>
                                        {athlete.rank}
                                      </span>
                                    ) : (
                                      <span className="text-sm text-gray-600 font-medium">{athlete.rank}</span>
                                    )}
                                  </td>
                                  <td className="px-3 py-2.5 whitespace-nowrap text-center">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{athlete.bib}</span>
                                  </td>
                                  <td className="px-4 py-2.5 whitespace-nowrap">
                                    <span className={`text-sm font-semibold ${athlete.rank <= 3 ? 'text-gray-900' : 'text-gray-700'}`}>
                                      {athlete.name}
                                    </span>
                                  </td>
                                  <td className="px-4 py-2.5 text-sm text-gray-600 max-w-[200px] truncate" title={athlete.team}>
                                    {athlete.team}
                                  </td>
                                  {hasRun && (
                                    <>
                                      <td className="px-3 py-2.5 whitespace-nowrap text-center text-sm text-gray-600 font-mono">
                                        {athlete.run1 || '-'}
                                      </td>
                                      <td className="px-3 py-2.5 whitespace-nowrap text-center text-sm text-gray-600 font-mono">
                                        {athlete.run2 || '-'}
                                      </td>
                                    </>
                                  )}
                                  {(hasTime || hasBestScore) && (
                                    <td className="px-3 py-2.5 whitespace-nowrap text-center">
                                      <span className={`text-sm font-bold font-mono ${
                                        athlete.rank === 1 ? 'text-amber-700' :
                                        athlete.rank === 2 ? 'text-gray-700' :
                                        athlete.rank === 3 ? 'text-orange-700' : 'text-gray-900'
                                      }`}>
                                        {athlete.time || athlete.bestScore || '-'}
                                      </span>
                                    </td>
                                  )}
                                  {hasPoints && (
                                    <td className="px-3 py-2.5 whitespace-nowrap text-center">
                                      <span className={`inline-flex px-3 py-1 rounded-lg text-sm font-bold ${
                                        athlete.rank === 1 ? 'bg-gradient-to-r from-yellow-300 to-amber-400 text-yellow-900' :
                                        athlete.rank === 2 ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800' :
                                        athlete.rank === 3 ? 'bg-gradient-to-r from-orange-300 to-orange-400 text-orange-900' :
                                        'bg-amber-100 text-amber-700'
                                      }`}>
                                        {athlete.points ?? '-'}
                                      </span>
                                    </td>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}

        {/* 排行榜说明 */}
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">积分规则</h3>
          <div className="text-sm text-gray-600">
            <p>U系列统一采用360分制：第1名360分，第2名329分，第3名303分，递减至第50名1分。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
