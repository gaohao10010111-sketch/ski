'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Trophy, Medal, Award, Crown, Download, Search, ChevronLeft, ChevronRight, ArrowLeft, ChevronDown, ChevronUp, Users, Sparkles, Target, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'
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
  const [selectedTotalSportType, setSelectedTotalSportType] = useState('all') // 总积分视图的项目筛选
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
    // 获取要显示的项目列表
    let sportRankings = totalRankingsData.sportRankings

    if (selectedTotalSportType !== 'all') {
      sportRankings = sportRankings.filter(sr => sr.sportType === selectedTotalSportType)
    }

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
      {/* 顶部大标题区域 - 活泼风格 */}
      <div className="bg-gradient-to-br from-ski-blue via-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-20 -left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-pink-400/15 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          {/* 返回按钮 */}
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Link>

          {/* 主标题 */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              积分排行榜
            </h1>
            <p className="text-white/80 text-lg">
              2024-2025赛季 · 全国青少年U系列赛事
            </p>
          </div>

          {/* 统计卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-yellow-900" />
              </div>
              <div className="text-2xl font-bold">{stats.uniqueAthletes}</div>
              <div className="text-white/70 text-sm">参赛运动员</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
              <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-5 h-5 text-green-900" />
              </div>
              <div className="text-2xl font-bold">{stats.totalCompetitions}</div>
              <div className="text-white/70 text-sm">已完赛事</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
              <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Target className="w-5 h-5 text-purple-900" />
              </div>
              <div className="text-2xl font-bold">{filteredSportRankings.reduce((sum, sr) => sum + (sr.subEventRankings?.length || 0), 0)}</div>
              <div className="text-white/70 text-sm">比赛小项</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
              <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-5 h-5 text-orange-900" />
              </div>
              <div className="text-2xl font-bold">{stats.totalAthletes}</div>
              <div className="text-white/70 text-sm">总参赛人次</div>
            </div>
          </div>

          {/* 视图切换 */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-xl bg-white/10 backdrop-blur-sm p-1">
              <button
                onClick={() => setViewMode('total')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'total'
                    ? 'bg-white text-ski-blue shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                🏆 总积分排名
              </button>
              <button
                onClick={() => setViewMode('competition')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'competition'
                    ? 'bg-white text-ski-blue shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                🎿 按比赛查看
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 说明提示 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-sm text-gray-700">
            {viewMode === 'total'
              ? <><span className="font-medium text-blue-700">积分规则：</span>总积分 = 同一运动员在不同比赛中获得的积分累加，点击小项卡片查看详细排名</>
              : <><span className="font-medium text-blue-700">积分规则：</span>积分排名需在相同比赛、相同小项、相同年龄组、相同性别内比较</>}
          </div>
        </div>

        {/* 筛选器 */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className={`grid grid-cols-1 gap-4 ${viewMode === 'total' ? 'md:grid-cols-5' : 'md:grid-cols-6'}`}>
            {/* 搜索框 */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索运动员或单位..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); resetPage(); }}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* 总积分视图的项目筛选 */}
            {viewMode === 'total' && (
              <div>
                <select
                  value={selectedTotalSportType}
                  onChange={(e) => { setSelectedTotalSportType(e.target.value); resetPage(); }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="all">全部项目</option>
                  {totalRankingsData.filters.sportTypes.map(st => (
                    <option key={st.value} value={st.value}>{st.label}</option>
                  ))}
                </select>
              </div>
            )}

            {/* 按比赛视图的额外筛选 */}
            {viewMode === 'competition' && (
              <>
                {/* 项目类型 */}
                <div>
                  <select
                    value={selectedSportType}
                    onChange={(e) => setSelectedSportType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="all">全部项目</option>
                    {filterOptions.sportTypes.map(st => (
                      <option key={st} value={st}>{sportTypeLabels[st] || st}</option>
                    ))}
                  </select>
                </div>

                {/* 小项 */}
                <div>
                  <select
                    value={selectedDiscipline}
                    onChange={(e) => setSelectedDiscipline(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="all">全部小项</option>
                    {filterOptions.disciplines.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* 年龄组 */}
            <div>
              <select
                value={selectedAgeGroup}
                onChange={(e) => { setSelectedAgeGroup(e.target.value); resetPage(); }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">全部年龄组</option>
                {(viewMode === 'total' ? totalRankingsData.filters.ageGroups : filterOptions.ageGroups).map(ag => (
                  <option key={ag} value={ag}>{ag}</option>
                ))}
              </select>
            </div>

            {/* 性别 */}
            <div>
              <select
                value={selectedGender}
                onChange={(e) => { setSelectedGender(e.target.value); resetPage(); }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">男女不限</option>
                {(viewMode === 'total' ? totalRankingsData.filters.genders : filterOptions.genders).map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 筛选结果和导出 */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {viewMode === 'total' ? (
                <>共 <span className="font-bold text-yellow-600">{filteredSportRankings.length}</span> 个项目，
                <span className="font-bold text-yellow-600">{filteredSportRankings.reduce((sum, sr) => sum + (sr.subEventRankings?.length || 0), 0)}</span> 个小子项，
                <span className="font-bold text-yellow-600">{filteredTotalRankings.length}</span> 名运动员</>
              ) : (
                <>共 <span className="font-bold text-purple-600">{stats.totalEvents}</span> 个小项，
                <span className="font-bold text-purple-600">{stats.totalAthletes}</span> 人次参赛</>
              )}
            </span>
            <button
              onClick={handleExport}
              disabled={isExporting || (viewMode === 'total' ? filteredTotalRankings.length === 0 : filteredGroups.length === 0)}
              className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              {isExporting ? '导出中...' : '导出CSV'}
            </button>
          </div>
        </div>

        {/* 总积分排名视图 - 紧凑模式，点击展开 */}
        {viewMode === 'total' && (
          <>
            {filteredSportRankings.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-500">暂无符合条件的排名数据</p>
                <p className="text-sm text-gray-400 mt-1">请调整筛选条件后重试</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* 全部展开/收起按钮 */}
                <div className="flex justify-end gap-2">
                  <button
                    onClick={expandAll}
                    className="text-sm text-ski-blue hover:text-primary-700 flex items-center gap-1"
                  >
                    <ChevronDown className="h-4 w-4" />
                    全部展开
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={collapseAll}
                    className="text-sm text-ski-blue hover:text-primary-700 flex items-center gap-1"
                  >
                    <ChevronUp className="h-4 w-4" />
                    全部收起
                  </button>
                </div>

                {filteredSportRankings.map((sportRanking) => (
                  <div key={sportRanking.sportType} className="bg-white rounded-lg shadow overflow-hidden">
                    {/* 大项标题 */}
                    <div className="bg-gradient-to-r from-ski-navy to-blue-800 px-4 py-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Trophy className="h-6 w-6" />
                          <h2 className="text-lg font-bold">{sportRanking.sportName}</h2>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="bg-white/20 px-3 py-1 rounded-full">
                            {sportRanking.subEventRankings?.length || 0} 个小子项
                          </span>
                          <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {sportRanking.total} 人
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 小子项网格 - 紧凑显示 */}
                    <div className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {(sportRanking.subEventRankings || []).map((subEvent) => {
                          const subEventKey = `${sportRanking.sportType}-${subEvent.subEventName}`
                          const isExpanded = expandedSubEvents.has(subEventKey)
                          const top3 = subEvent.rankings.slice(0, 3)

                          return (
                            <button
                              key={subEventKey}
                              onClick={() => toggleSubEvent(subEventKey)}
                              className={`p-3 rounded-lg text-left transition-all ${
                                isExpanded
                                  ? 'bg-ski-blue text-white shadow-md ring-2 ring-ski-blue ring-offset-2'
                                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="font-medium text-sm truncate flex-1">{subEvent.subEventName}</div>
                                {isExpanded ? (
                                  <ChevronUp className="h-4 w-4 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                                )}
                              </div>
                              <div className={`text-xs mt-1 ${isExpanded ? 'text-white/80' : 'text-gray-500'}`}>
                                {subEvent.total}人 · 冠军: {top3[0]?.athleteName || '-'}
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* 展开的小子项详情 */}
                    {(sportRanking.subEventRankings || []).map((subEvent) => {
                      const subEventKey = `${sportRanking.sportType}-${subEvent.subEventName}`
                      const isExpanded = expandedSubEvents.has(subEventKey)
                      const top3 = subEvent.rankings.slice(0, 3)
                      const hasTop3 = top3.length >= 3

                      if (!isExpanded) return null

                      return (
                        <div key={`detail-${subEventKey}`} className="border-t border-gray-200">
                          {/* 小子项标题 */}
                          <div className="bg-gradient-to-r from-ski-blue to-blue-600 px-4 py-3 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Award className="h-5 w-5" />
                              <h3 className="text-base font-medium">{subEvent.subEventName}</h3>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                                {subEvent.total} 名运动员
                              </span>
                              <button
                                onClick={(e) => { e.stopPropagation(); toggleSubEvent(subEventKey); }}
                                className="p-1 hover:bg-white/20 rounded"
                              >
                                <ChevronUp className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          {/* 领奖台展示 - 前三名（紧凑版） */}
                          {hasTop3 && (
                            <div className="bg-gradient-to-br from-ski-navy to-blue-900 p-6 text-white">
                              <div className="flex justify-center items-end gap-3">
                                {/* 银牌 */}
                                <div className="text-center">
                                  <div className="w-14 h-14 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center shadow">
                                    <Medal className="w-7 h-7 text-gray-600" />
                                  </div>
                                  <div className="bg-gray-300 rounded-t-lg pt-2 pb-1 px-2 w-20">
                                    <div className="text-gray-800 font-bold text-xs truncate">{top3[1].athleteName}</div>
                                    <div className="text-gray-600 text-xs truncate">{top3[1].team}</div>
                                    <div className="text-gray-700 text-xs">{top3[1].totalPoints}分</div>
                                  </div>
                                  <div className="bg-gray-400 h-10 w-20 flex items-center justify-center text-lg font-bold text-gray-700">2</div>
                                </div>
                                {/* 金牌 */}
                                <div className="text-center -mt-3">
                                  <div className="w-16 h-16 mx-auto mb-2 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                    <Trophy className="w-8 h-8 text-yellow-800" />
                                  </div>
                                  <div className="bg-yellow-400 rounded-t-lg pt-2 pb-1 px-2 w-24">
                                    <div className="text-yellow-900 font-bold text-sm truncate">{top3[0].athleteName}</div>
                                    <div className="text-yellow-800 text-xs truncate">{top3[0].team}</div>
                                    <div className="text-yellow-900 text-xs">{top3[0].totalPoints}分</div>
                                  </div>
                                  <div className="bg-yellow-500 h-16 w-24 flex items-center justify-center text-xl font-bold text-yellow-900">1</div>
                                </div>
                                {/* 铜牌 */}
                                <div className="text-center">
                                  <div className="w-14 h-14 mx-auto mb-2 bg-orange-400 rounded-full flex items-center justify-center shadow">
                                    <Medal className="w-7 h-7 text-orange-800" />
                                  </div>
                                  <div className="bg-orange-400 rounded-t-lg pt-2 pb-1 px-2 w-20">
                                    <div className="text-orange-900 font-bold text-xs truncate">{top3[2].athleteName}</div>
                                    <div className="text-orange-800 text-xs truncate">{top3[2].team}</div>
                                    <div className="text-orange-900 text-xs">{top3[2].totalPoints}分</div>
                                  </div>
                                  <div className="bg-orange-500 h-8 w-20 flex items-center justify-center text-lg font-bold text-orange-900">3</div>
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
                                      <RankChangeDisplay change={(item as any).rankChange} />
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

        {/* 按比赛视图 - 紧凑网格模式 */}
        {viewMode === 'competition' && (
          <>
            {groupedByCompetition.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-500">暂无符合条件的排名数据</p>
                <p className="text-sm text-gray-400 mt-1">请尝试调整筛选条件</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* 全部展开/收起按钮 */}
                <div className="flex justify-end gap-2">
                  <button
                    onClick={expandAllCompetitionGroups}
                    className="text-sm text-ski-blue hover:text-primary-700 flex items-center gap-1"
                  >
                    <ChevronDown className="h-4 w-4" />
                    全部展开
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={collapseAllCompetitionGroups}
                    className="text-sm text-ski-blue hover:text-primary-700 flex items-center gap-1"
                  >
                    <ChevronUp className="h-4 w-4" />
                    全部收起
                  </button>
                </div>

                {groupedByCompetition.map((competitionData) => (
                  <div key={competitionData.competition} className="bg-white rounded-lg shadow overflow-hidden">
                    {/* 比赛标题 */}
                    <div className="bg-gradient-to-r from-ski-navy to-blue-800 px-4 py-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Trophy className="h-6 w-6" />
                          <div>
                            <h2 className="text-lg font-bold">{competitionData.competition}</h2>
                            <div className="text-white/70 text-sm mt-1">
                              {competitionData.location} · {competitionData.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="bg-white/20 px-3 py-1 rounded-full">
                            {sportTypeLabels[competitionData.sportType] || competitionData.sportType}
                          </span>
                          <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {competitionData.groups.length} 个小项
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 小项网格 - 紧凑显示 */}
                    <div className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {competitionData.groups.map((group) => {
                          const groupKey = `${group.competition}-${group.discipline}-${group.ageGroup}-${group.gender}`
                          const isExpanded = expandedCompetitionGroups.has(groupKey)
                          const top3 = group.athletes.slice(0, 3)

                          return (
                            <button
                              key={groupKey}
                              onClick={() => toggleCompetitionGroup(groupKey)}
                              className={`p-3 rounded-lg text-left transition-all ${
                                isExpanded
                                  ? 'bg-ski-blue text-white shadow-md ring-2 ring-ski-blue ring-offset-2'
                                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="font-medium text-sm truncate flex-1">
                                  {group.discipline}
                                </div>
                                {isExpanded ? (
                                  <ChevronUp className="h-4 w-4 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                                )}
                              </div>
                              <div className={`flex items-center gap-2 mt-1 text-xs ${isExpanded ? 'text-white/80' : 'text-gray-500'}`}>
                                <span className={`px-1.5 py-0.5 rounded ${
                                  isExpanded
                                    ? 'bg-white/20'
                                    : group.ageGroup === 'U12' ? 'bg-green-100 text-green-700' :
                                      group.ageGroup === 'U15' ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-purple-100 text-purple-700'
                                }`}>
                                  {group.ageGroup}
                                </span>
                                <span className={`px-1.5 py-0.5 rounded ${
                                  isExpanded
                                    ? 'bg-white/20'
                                    : group.gender === '男子组' ? 'bg-sky-100 text-sky-700' : 'bg-pink-100 text-pink-700'
                                }`}>
                                  {group.gender}
                                </span>
                              </div>
                              <div className={`text-xs mt-1 ${isExpanded ? 'text-white/80' : 'text-gray-500'}`}>
                                {group.athletes.length}人 · 冠军: {top3[0]?.name || '-'}
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* 展开的小项详情 */}
                    {competitionData.groups.map((group) => {
                      const groupKey = `${group.competition}-${group.discipline}-${group.ageGroup}-${group.gender}`
                      const isExpanded = expandedCompetitionGroups.has(groupKey)
                      const top3 = group.athletes.slice(0, 3)
                      const hasTop3 = top3.length >= 3

                      if (!isExpanded) return null

                      // 预先计算列配置
                      const hasRun = group.athletes.some(a => a.run1)
                      const hasTime = group.athletes.some(a => a.time)
                      const hasBestScore = group.athletes.some(a => a.bestScore !== undefined)
                      const hasPoints = group.athletes.some(a => a.points !== undefined)

                      return (
                        <div key={`detail-${groupKey}`} className="border-t border-gray-200">
                          {/* 小项标题 */}
                          <div className="bg-gradient-to-r from-ski-blue to-blue-600 px-4 py-3 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Award className="h-5 w-5" />
                              <h3 className="text-base font-medium">
                                {group.discipline} · {group.ageGroup} · {group.gender}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                                {group.athletes.length} 名运动员
                              </span>
                              <button
                                onClick={(e) => { e.stopPropagation(); toggleCompetitionGroup(groupKey); }}
                                className="p-1 hover:bg-white/20 rounded"
                              >
                                <ChevronUp className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          {/* 领奖台展示 - 前三名（紧凑版） */}
                          {hasTop3 && (
                            <div className="bg-gradient-to-br from-ski-navy to-blue-900 p-6 text-white">
                              <div className="flex justify-center items-end gap-3">
                                {/* 银牌 */}
                                <div className="text-center">
                                  <div className="w-14 h-14 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center shadow">
                                    <Medal className="w-7 h-7 text-gray-600" />
                                  </div>
                                  <div className="bg-gray-300 rounded-t-lg pt-2 pb-1 px-2 w-20">
                                    <div className="text-gray-800 font-bold text-xs truncate">{top3[1].name}</div>
                                    <div className="text-gray-600 text-xs truncate">{top3[1].team}</div>
                                    <div className="text-gray-700 text-xs">{top3[1].points || top3[1].time || top3[1].bestScore}</div>
                                  </div>
                                  <div className="bg-gray-400 h-10 w-20 flex items-center justify-center text-lg font-bold text-gray-700">2</div>
                                </div>
                                {/* 金牌 */}
                                <div className="text-center -mt-3">
                                  <div className="w-16 h-16 mx-auto mb-2 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                    <Trophy className="w-8 h-8 text-yellow-800" />
                                  </div>
                                  <div className="bg-yellow-400 rounded-t-lg pt-2 pb-1 px-2 w-24">
                                    <div className="text-yellow-900 font-bold text-sm truncate">{top3[0].name}</div>
                                    <div className="text-yellow-800 text-xs truncate">{top3[0].team}</div>
                                    <div className="text-yellow-900 text-xs">{top3[0].points || top3[0].time || top3[0].bestScore}</div>
                                  </div>
                                  <div className="bg-yellow-500 h-16 w-24 flex items-center justify-center text-xl font-bold text-yellow-900">1</div>
                                </div>
                                {/* 铜牌 */}
                                <div className="text-center">
                                  <div className="w-14 h-14 mx-auto mb-2 bg-orange-400 rounded-full flex items-center justify-center shadow">
                                    <Medal className="w-7 h-7 text-orange-800" />
                                  </div>
                                  <div className="bg-orange-400 rounded-t-lg pt-2 pb-1 px-2 w-20">
                                    <div className="text-orange-900 font-bold text-xs truncate">{top3[2].name}</div>
                                    <div className="text-orange-800 text-xs truncate">{top3[2].team}</div>
                                    <div className="text-orange-900 text-xs">{top3[2].points || top3[2].time || top3[2].bestScore}</div>
                                  </div>
                                  <div className="bg-orange-500 h-8 w-20 flex items-center justify-center text-lg font-bold text-orange-900">3</div>
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
                                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-16">号码</th>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">单位</th>
                                  {hasRun && (
                                    <>
                                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">第一轮</th>
                                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">第二轮</th>
                                    </>
                                  )}
                                  {(hasTime || hasBestScore) && (
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                      {hasTime ? '成绩' : '得分'}
                                    </th>
                                  )}
                                  {hasPoints && (
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-24">积分</th>
                                  )}
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {group.athletes.map((athlete, index) => (
                                  <tr
                                    key={index}
                                    className={`hover:bg-blue-50 transition-colors ${
                                      athlete.rank === 1 ? 'bg-yellow-50' :
                                      athlete.rank === 2 ? 'bg-gray-50' :
                                      athlete.rank === 3 ? 'bg-orange-50' : ''
                                    }`}
                                  >
                                    <td className="px-4 py-2 whitespace-nowrap text-center">
                                      {getRankIcon(athlete.rank)}
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-center">
                                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-medium text-gray-600">
                                        {athlete.bib}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                      <span className={`text-sm font-medium ${athlete.rank <= 3 ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {athlete.name}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-600" title={athlete.team}>
                                      {athlete.team}
                                    </td>
                                    {hasRun && (
                                      <>
                                        <td className="px-4 py-2 whitespace-nowrap text-center">
                                          <span className="text-sm text-gray-600">{athlete.run1 || '-'}</span>
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap text-center">
                                          <span className="text-sm text-gray-600">{athlete.run2 || '-'}</span>
                                        </td>
                                      </>
                                    )}
                                    {(hasTime || hasBestScore) && (
                                      <td className="px-4 py-2 whitespace-nowrap text-center">
                                        <span className={`text-sm font-medium ${
                                          athlete.rank === 1 ? 'text-yellow-600' :
                                          athlete.rank === 2 ? 'text-gray-700' :
                                          athlete.rank === 3 ? 'text-orange-600' : 'text-gray-900'
                                        }`}>
                                          {athlete.time || athlete.bestScore || '-'}
                                        </span>
                                      </td>
                                    )}
                                    {hasPoints && (
                                      <td className="px-4 py-2 whitespace-nowrap text-center">
                                        <span className={`inline-flex px-3 py-1 rounded-lg text-sm font-bold ${
                                          athlete.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                                          athlete.rank === 2 ? 'bg-gray-300 text-gray-800' :
                                          athlete.rank === 3 ? 'bg-orange-300 text-orange-900' :
                                          'bg-blue-100 text-blue-700'
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
                        </div>
                      )
                    })}
                  </div>
                ))}
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
