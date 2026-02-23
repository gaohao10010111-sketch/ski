'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import {
  Trophy,
  Users,
  UserPlus,
  Award,
  Database,
  Clock,
  CheckCircle,
  Search,
  BarChart3,
  FileText,
  ChevronRight,
  ChevronLeft,
  Mountain,
  ArrowLeftRight,
  Wind,
  Sparkles,
  Loader2,
  Medal,
  Calendar,
  MapPin,
  ExternalLink,
  GraduationCap,
  Building2,
  Shield
} from 'lucide-react'
import { getImagePath } from '@/utils/paths'
import { useAuth } from '@/contexts/AuthContext'
import { useTranslation } from '@/contexts/LanguageContext'
import { statsApi, competitionsApi, rankingsApi, type StatsOverview, type Competition, type RankingItem } from '@/lib/api'
import { latestResults } from '@/data/latestResults'
import { recommendationStats, recommendedCoaches, recommendedVenues, recommendedClubs } from '@/data/recommendations'

// 运动类型映射
const sportTypeMapping: Record<string, number> = {
  ALPINE_SKI: 0,
  SNOWBOARD_SLOPESTYLE_BIGAIR: 1,
  SNOWBOARD_PARALLEL: 2,
  FREESTYLE_SLOPESTYLE_BIGAIR: 3
}

const sportTypeKeys = ['ALPINE_SKI', 'SNOWBOARD_SLOPESTYLE_BIGAIR', 'SNOWBOARD_PARALLEL', 'FREESTYLE_SLOPESTYLE_BIGAIR']

// latestResults sportType 映射到首页 tab 索引
const latestResultsSportTypeMap: Record<string, number> = {
  'alpine': 0,
  'snowboard-slopestyle': 1,
  'snowboard-parallel': 2,
  'freestyle-slopestyle': 3
}

// 从 latestResults 中获取所有事件列表
function getEventsFromResults(sportTypeIndex: number): Array<{
  eventName: string
  discipline: string
  ageGroup: string
  gender: string
  athletes: Array<{
    athleteId: string
    athleteName: string
    rank: number
    totalPoints: number
    province?: string
    score?: string
  }>
}> {
  const sportTypeMapping: Record<number, string> = {
    0: 'alpine',
    1: 'snowboard-slopestyle',
    2: 'snowboard-parallel',
    3: 'freestyle-slopestyle'
  }

  const targetSportType = sportTypeMapping[sportTypeIndex]
  const competition = latestResults.competitions.find(c => c.sportType === targetSportType)

  if (!competition) return []

  return competition.events.map(event => ({
    eventName: `${event.discipline} ${event.ageGroup} ${event.gender}`,
    discipline: event.discipline,
    ageGroup: event.ageGroup,
    gender: event.gender,
    athletes: event.athletes.slice(0, 5).map(a => ({
      athleteId: `${a.name}-${a.team}`,
      athleteName: a.name,
      rank: a.rank,
      totalPoints: a.points || 0,
      province: a.team,
      score: a.time || (a.bestScore ? `${a.bestScore}分` : '')
    }))
  }))
}

// 兼容旧接口 - 从 latestResults 中提取各项目排行榜
function getTopAthletesFromResults(sportTypeIndex: number): Array<{
  athleteId: string
  athleteName: string
  rank: number
  totalPoints: number
  province?: string
  discipline?: string
}> {
  const events = getEventsFromResults(sportTypeIndex)
  if (events.length === 0) return []

  // 取第一个事件的前4名
  return events[0].athletes.slice(0, 4).map(a => ({
    ...a,
    discipline: events[0].eventName
  }))
}

// 状态标签 - 移到组件内使用翻译

// 格式化日期
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return `${date.getMonth() + 1}月${date.getDate()}日`
}

export default function HomePage() {
  const { isAuthenticated } = useAuth()
  const { t, language } = useTranslation()
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [selectedDiscipline, setSelectedDiscipline] = useState(0) // 0: 高山, 1: 单板坡障, 2: 单板平行, 3: 自由式
  const [currentEventIndex, setCurrentEventIndex] = useState(0) // 当前显示的事件索引

  // API数据状态
  const [statsData, setStatsData] = useState<StatsOverview | null>(null)
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [rankings, setRankings] = useState<Record<string, RankingItem[]>>({})
  const [isLoadingStats, setIsLoadingStats] = useState(true)

  // 获取统计数据
  const fetchData = useCallback(async () => {
    setIsLoadingStats(true)
    try {
      // 并行获取数据
      const [statsResponse, competitionsResponse] = await Promise.all([
        statsApi.overview(),
        competitionsApi.list({ pageSize: 12 })
      ])

      if (statsResponse.success && statsResponse.data) {
        setStatsData(statsResponse.data)
      }

      if (competitionsResponse.success && competitionsResponse.data) {
        setCompetitions(competitionsResponse.data)
      }

      // 获取各项目的排名数据
      const rankingPromises = sportTypeKeys.map(sportType =>
        rankingsApi.list({ sportType, pageSize: 4 })
      )
      const rankingResponses = await Promise.all(rankingPromises)

      const newRankings: Record<string, RankingItem[]> = {}
      sportTypeKeys.forEach((sportType, index) => {
        const response = rankingResponses[index]
        if (response.success && response.data) {
          newRankings[sportType] = response.data
        }
      })
      setRankings(newRankings)
    } catch (error) {
    } finally {
      setIsLoadingStats(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // 动态生成新闻条目，包含最新比赛成绩
  const dynamicNewsFromResults = latestResults.competitions.slice(0, 4).map((comp, index) => ({
    id: `result-${index}`,
    title: comp.competition,
    subtitle: `${comp.sport} · ${comp.events.length}个项目 · 已完赛`,
    status: 'updated' as const,
    pinned: index === 0,
    href: `/results-announcement?sport=${comp.sportType}`
  }))

  const fallbackNewsItems = [
    ...dynamicNewsFromResults,
    { id: 'schedule-2025', title: '2025-2026赛季赛程发布', subtitle: '119场比赛 · 已上线', status: 'updated', pinned: false, href: '/competitions/schedule' },
    { id: 'points-refresh', title: '积分排名更新', subtitle: '四大项目 · 实时计算', status: 'live', pinned: false, href: '/points/rankings' },
    { id: 'registration-open', title: '运动员注册开放', subtitle: '2025-26赛季 · 可报名', status: 'upcoming', pinned: false, href: '/register' }
  ]

  const newsItems = t.home?.news?.items && t.home.news.items.length > 0 ? t.home.news.items : fallbackNewsItems

  const newsStatusColors: Record<string, string> = {
    live: 'bg-red-400 animate-pulse',
    updated: 'bg-green-400',
    upcoming: 'bg-yellow-400',
    default: 'bg-gray-300'
  }

  const newsStatusLabels: Record<string, string> = t.home?.news?.statuses || {}

  // 项目名称从翻译中获取
  const disciplineNames = [
    t.navigation?.alpine || 'Alpine Skiing',
    t.navigation?.snowboardSlopestyle || 'Snowboard Slopestyle',
    t.navigation?.snowboardParallel || 'Snowboard Parallel',
    t.navigation?.freestyleSlopestyle || 'Freestyle Slopestyle'
  ]
  const disciplineIcons = [Mountain, Sparkles, ArrowLeftRight, Wind]

  // 状态标签从翻译中获取
  const statusLabels: Record<string, string> = {
    SCHEDULED: t.home?.latestResults?.statusLabels?.upcoming || 'Upcoming',
    ONGOING: t.home?.latestResults?.statusLabels?.live || 'Live',
    COMPLETED: t.home?.latestResults?.statusLabels?.completed || 'Completed',
    CANCELLED: t.common?.cancelled || 'Cancelled'
  }

  // 根据选中的项目筛选比赛
  const filteredCompetitions = competitions.filter(
    comp => sportTypeMapping[comp.sportType] === selectedDiscipline
  ).slice(0, 3)

  // 获取当前项目的排名
  const currentSportType = sportTypeKeys[selectedDiscipline]
  // 优先使用 API 数据，若为空则使用 latestResults 中的真实数据
  const apiRankings = rankings[currentSportType] || []
  const currentEvents = getEventsFromResults(selectedDiscipline)
  const currentRankings = apiRankings.length > 0 ? apiRankings : getTopAthletesFromResults(selectedDiscipline)

  // 当前显示的事件
  const safeEventIndex = Math.min(currentEventIndex, Math.max(0, currentEvents.length - 1))
  const currentEvent = currentEvents[safeEventIndex]

  // 切换项目时重置事件索引
  useEffect(() => {
    setCurrentEventIndex(0)
  }, [selectedDiscipline])

  const latestResultStatusLabels: Record<string, string> = t.home?.latestResults?.statusLabels || {}
  const resultStatusStyles: Record<string, string> = {
    ONGOING: 'text-ski-blue',
    SCHEDULED: 'text-yellow-600',
    COMPLETED: 'text-green-600'
  }

  const rankingCardStyles = [
    'bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200',
    'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200',
    'bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200'
  ]

  const rankingBadgeStyles = [
    'bg-yellow-500 text-white',
    'bg-gray-400 text-white',
    'bg-orange-500 text-white'
  ]

  const defaultRankingCardClass = 'bg-gray-50 border border-gray-200'
  const defaultRankingBadgeClass = 'bg-gray-300 text-gray-600'

  const highlightFallbackColors = ['bg-ski-blue', 'bg-green-400', 'bg-yellow-400']
  const heroHighlights = (t.home?.hero?.highlights ?? [
    { label: '四大积分系统', color: highlightFallbackColors[0] },
    { label: '官方标准认证', color: highlightFallbackColors[1] },
    { label: 'U系列·大众赛事', color: highlightFallbackColors[2] }
  ]).map((item, index) => ({
    label: item.label,
    color: item.color || highlightFallbackColors[index % highlightFallbackColors.length]
  }))

  // 从本地数据计算统计信息（作为API数据的fallback）
  const localTotalAthletes = (() => {
    const athleteSet = new Set<string>()
    latestResults.competitions.forEach(comp => {
      comp.events.forEach(event => {
        event.athletes.forEach(a => athleteSet.add(a.name))
      })
    })
    return athleteSet.size
  })()

  const localTotalCompetitions = latestResults.competitions.length
  const localCompletedCompetitions = latestResults.competitions.filter(c => c.status === 'completed').length

  // 从API数据生成统计卡片，使用本地数据作为fallback
  const statsCards = [
    {
      label: t.home?.stats?.disciplines?.label || '参赛运动员',
      value: statsData?.overview?.totalAthletes?.toLocaleString() || localTotalAthletes.toString(),
      description: `来自 ${recommendationStats.totalClubs} 个俱乐部`,
      icon: Users
    },
    {
      label: t.home?.stats?.pointsRules?.label || '赛事总数',
      value: statsData?.overview?.totalCompetitions?.toString() || localTotalCompetitions.toString(),
      description: `已完成 ${statsData?.overview?.completedCompetitions || localCompletedCompetitions} 场`,
      icon: Trophy
    },
    {
      label: t.home?.stats?.updateCycle?.label || '认证教练',
      value: statsData?.overview?.upcomingCompetitions?.toString() || recommendationStats.totalCoaches.toString(),
      description: `累计学员 ${recommendationStats.totalStudents}+`,
      icon: GraduationCap
    },
    {
      label: t.home?.stats?.users?.label || '当前赛季',
      value: statsData?.overview?.currentSeason || '2025-26',
      description: '赛季进行中',
      icon: Award
    }
  ]

  const featureCards = [
    {
      key: 'pointsRankings',
      href: '/points/rankings',
      icon: BarChart3,
      title: t.home?.features?.pointsRankings?.title || '积分排行榜',
      description: t.home?.features?.pointsRankings?.description || '实时更新的运动员积分排名',
      iconContainerClass: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    // 运动员档案暂时隐藏，待数据完善后上线
    // {
    //   key: 'athleteProfiles',
    //   href: '/athletes',
    //   icon: Users,
    //   title: t.home?.features?.athleteProfiles?.title || '运动员档案',
    //   description: t.home?.features?.athleteProfiles?.description || '运动员信息管理和积分历史',
    //   iconContainerClass: 'bg-indigo-50',
    //   iconColor: 'text-indigo-600'
    // },
    {
      key: 'competitionManagement',
      href: '/competitions',
      icon: Trophy,
      title: t.home?.features?.competitionManagement?.title || '赛事成绩',
      description: t.home?.features?.competitionManagement?.description || '查看比赛信息和赛事成绩',
      iconContainerClass: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      key: 'schedule',
      href: '/competitions/schedule',
      icon: Clock,
      title: '赛程日历',
      description: '查看即将举行的赛事安排',
      iconContainerClass: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    // 积分规则暂时隐藏，待规则确定后上线
    // {
    //   key: 'pointsRules',
    //   href: '/rules/points',
    //   icon: FileText,
    //   title: t.home?.features?.pointsRules?.title || '积分规则',
    //   description: t.home?.features?.pointsRules?.description || '查看详细的积分计算规则',
    //   iconContainerClass: 'bg-purple-50',
    //   iconColor: 'text-purple-600'
    // },
    {
      key: 'about',
      href: '/about',
      icon: Search,
      title: '关于平台',
      description: '了解中国滑雪青少年积分排名官方平台',
      iconContainerClass: 'bg-blue-50',
      iconColor: 'text-blue-600'
    }
  ]

  // 确保只在客户端渲染权限相关内容
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 自动轮播功能
  useEffect(() => {
    if (!isPaused && newsItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length)
      }, 4000) // 每4秒切换

      return () => clearInterval(interval)
    }
  }, [isPaused, newsItems.length])

  useEffect(() => {
    setCurrentNewsIndex(0)
  }, [language, newsItems.length])

  const handlePauseToggle = () => {
    setIsPaused(!isPaused)
  }

  const getCurrentNews = () => newsItems[currentNewsIndex % newsItems.length] || newsItems[0]

  const goToNews = (index: number) => {
    setCurrentNewsIndex(index)
    setIsPaused(true)
    // 3秒后自动恢复轮播
    setTimeout(() => setIsPaused(false), 3000)
  }

  const currentNews = getCurrentNews()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${getImagePath('/images/ski-bg.jpg')}')`
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-bold mb-8 leading-tight">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
                  <span className="text-gradient bg-gradient-ski">{t.home?.hero?.title || 'China Ski Points System'}</span>
                </div>
                {language === 'en' && (
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                    {t.home?.hero?.titleEn || 'China Skiing Points System'}
                  </div>
                )}
              </h1>
              <div className="mb-8">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed font-medium">
                  {t.home?.hero?.subtitle || 'Authoritative · Professional · Accurate ski points platform'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-sm md:text-base lg:text-lg">
                  {heroHighlights.map((item, index) => (
                    <div
                      key={`${item.label}-${index}`}
                      className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
                    >
                      <div className={`w-3 h-3 ${item.color} rounded-full mr-3 flex-shrink-0`} />
                      <span className="text-white font-medium whitespace-nowrap text-xs sm:text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* 平台介绍引导 - 注册按钮暂时隐藏 */}
                {isClient && (
                  <div className="mt-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/points/rankings"
                        className="inline-flex items-center justify-center px-6 py-3 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                        title={t.home?.hero?.exploreDisciplines || '查看积分排名'}
                      >
                        <BarChart3 className="h-5 w-5 mr-2" />
                        {t.home?.hero?.exploreDisciplines || '查看积分排名'}
                      </Link>
                      {/* 注册按钮暂时隐藏 */}
                      {/*
                      <Link
                        href="/register"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-ski-navy transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                        title={t.home?.hero?.freeRegister || 'Free Registration'}
                      >
                        <UserPlus className="h-5 w-5 mr-2" />
                        {t.home?.hero?.freeRegister || 'Free Registration'}
                      </Link>
                      */}
                    </div>

                    <p className="text-gray-300 text-sm mt-4">
                      {t.home?.hero?.platformIntro || 'Preferred platform for athletes, coaches, and organisers • Certified by the General Administration of Sport'}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-white/20 mt-8 lg:mt-0">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{t.home?.news?.title || 'Latest Updates'}</h3>
                    <button
                      onClick={handlePauseToggle}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      title={isPaused ? (t.home?.news?.continueCarousel || 'Continue Carousel') : (t.home?.news?.pauseCarousel || 'Pause Carousel')}
                    >
                      {isPaused ? (
                        <Clock className="h-4 w-4 text-orange-400" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      )}
                    </button>
                  </div>
                  <div className="space-y-4">
                    {(currentNews as typeof fallbackNewsItems[0]).href ? (
                      (currentNews as typeof fallbackNewsItems[0]).href?.startsWith('http') ? (
                        <a
                          href={(currentNews as typeof fallbackNewsItems[0]).href || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="text-white font-semibold">{currentNews.title}</div>
                            <div className="text-gray-300 text-sm">{currentNews.subtitle}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${newsStatusColors[currentNews.status] || newsStatusColors.default}`}></div>
                            <ChevronRight className="w-4 h-4 text-white/60" />
                          </div>
                        </a>
                      ) : (
                        <Link
                          href={(currentNews as typeof fallbackNewsItems[0]).href || '#'}
                          className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="text-white font-semibold">{currentNews.title}</div>
                            <div className="text-gray-300 text-sm">{currentNews.subtitle}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${newsStatusColors[currentNews.status] || newsStatusColors.default}`}></div>
                            <ChevronRight className="w-4 h-4 text-white/60" />
                          </div>
                        </Link>
                      )
                    ) : (
                      <div className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20">
                        <div className="flex-1">
                          <div className="text-white font-semibold">{currentNews.title}</div>
                          <div className="text-gray-300 text-sm">{currentNews.subtitle}</div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${newsStatusColors[currentNews.status] || newsStatusColors.default}`}></div>
                      </div>
                    )}

                    {newsItems
                      .map((item, index) => ({ item, index }))
                      .filter(({ index }) => index !== currentNewsIndex)
                      .slice(0, 3)
                      .map(({ item, index }) => (
                        (item as typeof fallbackNewsItems[0]).href ? (
                          (item as typeof fallbackNewsItems[0]).href?.startsWith('http') ? (
                            <a
                              key={item.id}
                              href={(item as typeof fallbackNewsItems[0]).href || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center w-full p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                            >
                              <div className="flex-1 text-left">
                                <div className="text-white/80 font-medium text-sm">{item.title}</div>
                                <div className="text-gray-400 text-xs">{item.subtitle}</div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className={`inline-block w-2 h-2 rounded-full ${newsStatusColors[item.status] || newsStatusColors.default}`} />
                                <ChevronRight className="w-4 h-4 text-white/40" />
                              </div>
                            </a>
                          ) : (
                            <Link
                              key={item.id}
                              href={(item as typeof fallbackNewsItems[0]).href || '#'}
                              className="flex items-center w-full p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                            >
                              <div className="flex-1 text-left">
                                <div className="text-white/80 font-medium text-sm">{item.title}</div>
                                <div className="text-gray-400 text-xs">{item.subtitle}</div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className={`inline-block w-2 h-2 rounded-full ${newsStatusColors[item.status] || newsStatusColors.default}`} />
                                <ChevronRight className="w-4 h-4 text-white/40" />
                              </div>
                            </Link>
                          )
                        ) : (
                          <button
                            key={item.id}
                            type="button"
                            className="flex items-center w-full p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                            onClick={() => goToNews(index)}
                          >
                            <div className="flex-1 text-left">
                              <div className="text-white/80 font-medium text-sm">{item.title}</div>
                              <div className="text-gray-400 text-xs">{item.subtitle}</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className={`inline-block w-2 h-2 rounded-full ${newsStatusColors[item.status] || newsStatusColors.default}`} />
                              <span className="text-xs text-gray-400">
                                {newsStatusLabels[item.status] ||
                                  (item.status === 'live'
                                    ? (t.home?.news?.statuses?.live || 'Live')
                                    : (t.home?.news?.statuses?.updated || 'Updated'))}
                              </span>
                            </div>
                          </button>
                        )
                      ))}
                  </div>

                  {/* 指示器 */}
                  <div className="mt-6 flex justify-center space-x-2">
                    {newsItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToNews(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentNewsIndex ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </section>

      {/* 最新成绩 - 最高优先级展示区 */}
      {latestResults.competitions.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-yellow-500 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-ski-navy">赛事速递</h2>
                <span className="ml-3 px-2 py-0.5 bg-green-100 text-green-600 text-xs font-medium rounded-full border border-green-200">
                  最新完赛
                </span>
              </div>
              <Link
                href="/results-announcement"
                className="flex items-center text-gray-500 hover:text-ski-blue text-sm font-medium transition-colors"
              >
                查看全部
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {latestResults.competitions.slice(0, 4).map((comp, compIndex) => (
                <div key={compIndex} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-md border border-slate-700 hover:border-ski-blue hover:shadow-lg transition-all flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0 mr-3">
                      <h3 className="text-base font-bold text-white mb-1 line-clamp-2 min-h-[2.75rem]">{comp.competition}</h3>
                      <div className="flex items-center text-gray-300 text-sm space-x-4">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {comp.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {comp.date} ~ {comp.endDate}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full whitespace-nowrap shrink-0">
                      已完赛
                    </span>
                  </div>

                  {/* 项目分组展示 - 固定显示3个项目组 */}
                  <div className="flex-1 flex flex-col">
                    <div className="space-y-3">
                      {comp.events.slice(0, 3).map((event, eventIndex) => (
                        <div key={eventIndex} className="bg-slate-700/50 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-200 font-medium text-sm truncate">
                              {event.discipline} · {event.ageGroup} · {event.gender}
                            </span>
                            <span className="text-gray-400 text-xs whitespace-nowrap ml-2">
                              共{event.athletes.length}人
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {event.athletes.slice(0, 3).map((athlete, athleteIndex) => (
                              <div key={athleteIndex} className="flex items-center">
                                <div className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-xs font-bold mr-1.5 ${
                                  athleteIndex === 0 ? 'bg-yellow-400 text-yellow-900' :
                                  athleteIndex === 1 ? 'bg-gray-300 text-gray-700' :
                                  'bg-orange-400 text-orange-900'
                                }`}>
                                  {athleteIndex + 1}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-white text-sm font-medium truncate">{athlete.name}</div>
                                  <div className="text-gray-400 text-xs truncate">
                                    {athlete.time || (athlete.bestScore ? `${athlete.bestScore}分` : '')}
                                    {athlete.points ? ` · ${athlete.points}积分` : ''}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* 固定位置的"还有X个项目"提示 */}
                    <div className="text-center py-2 mt-auto">
                      {comp.events.length > 3 ? (
                        <span className="text-gray-400 text-sm">
                          还有 {comp.events.length - 3} 个项目...
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm invisible">占位</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-600 flex justify-between items-center">
                    <span className="text-gray-400 text-xs">
                      数据更新: {latestResults.lastUpdated}
                    </span>
                    <Link
                      href={`/results-announcement?sport=${comp.sportType}`}
                      className="text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center"
                    >
                      查看完整成绩
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Competition Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ski-navy mb-4">
              项目数据
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              各项目比赛成绩与积分排行
            </p>

            {/* 项目切换 Tab */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white rounded-lg shadow-md p-1 gap-1 flex-wrap">
                {disciplineNames.map((name, index) => {
                  const Icon = disciplineIcons[index]
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDiscipline(index)}
                      className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                        selectedDiscipline === index
                          ? 'bg-ski-blue text-white shadow-md transform scale-105'
                          : 'text-gray-600 hover:text-ski-blue hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {name}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Recent Competition Results - 使用实际比赛数据 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-ski-navy">比赛成绩</h3>
                <div className="flex items-center text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  已更新
                </div>
              </div>
              <div className="space-y-4 flex-1">
                {(() => {
                  // 根据选中的项目筛选比赛
                  const sportTypeMap: Record<number, string> = {
                    0: 'alpine',
                    1: 'snowboard-slopestyle',
                    2: 'snowboard-parallel',
                    3: 'freestyle-slopestyle'
                  }
                  const selectedSportType = sportTypeMap[selectedDiscipline]
                  const matchedCompetition = latestResults.competitions.find(c => c.sportType === selectedSportType)

                  if (matchedCompetition) {
                    return (
                      <>
                        <div className="p-4 bg-gradient-to-r from-ski-blue/5 to-ski-blue/10 rounded-lg border border-ski-blue/20">
                          <div className="font-semibold text-gray-900 mb-1">{matchedCompetition.competition}</div>
                          <div className="text-sm text-gray-600 mb-2">{matchedCompetition.location}</div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{matchedCompetition.date} ~ {matchedCompetition.endDate}</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">已完赛</span>
                          </div>
                        </div>
                        {matchedCompetition.events.slice(0, 3).map((event, idx) => (
                          <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-800 text-sm">
                                {event.discipline} {event.ageGroup} {event.gender}
                              </span>
                              <span className="text-xs text-gray-500">{event.athletes.length}人参赛</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              {event.athletes.slice(0, 3).map((athlete, aIdx) => (
                                <div key={aIdx} className="flex items-center">
                                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-1 ${
                                    aIdx === 0 ? 'bg-yellow-400 text-yellow-900' :
                                    aIdx === 1 ? 'bg-gray-300 text-gray-700' :
                                    'bg-orange-400 text-orange-900'
                                  }`}>{aIdx + 1}</span>
                                  <span className="text-gray-700">{athlete.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </>
                    )
                  }

                  return (
                    <div className="text-center py-8 text-gray-500">
                      该项目暂无比赛数据
                    </div>
                  )
                })()}
              </div>
              <div className="mt-auto pt-4 text-center">
                <Link href="/results-announcement" className="text-ski-blue hover:text-ski-blue/80 font-medium text-sm">
                  查看更多 →
                </Link>
              </div>
            </div>

            {/* Top Athletes Rankings - 按小项分页 */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-ski-navy">{t.home?.rankings?.title || '积分排行榜'}</h3>
                <div className="text-sm text-gray-500">
                  {currentEvents.length > 0 ? `${safeEventIndex + 1}/${currentEvents.length}` : '0/0'}
                </div>
              </div>

              {/* 事件选择器/翻页 */}
              {currentEvents.length > 0 && currentEvent && (
                <div className="flex items-center justify-between mb-4 p-3 bg-ski-blue/5 rounded-lg border border-ski-blue/20">
                  <button
                    onClick={() => setCurrentEventIndex(Math.max(0, safeEventIndex - 1))}
                    disabled={safeEventIndex === 0}
                    className="p-1.5 rounded-full hover:bg-ski-blue/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-ski-blue" />
                  </button>
                  <div className="text-center flex-1 px-2">
                    <div className="font-semibold text-ski-navy text-sm">
                      {currentEvent.eventName}
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentEventIndex(Math.min(currentEvents.length - 1, safeEventIndex + 1))}
                    disabled={safeEventIndex >= currentEvents.length - 1}
                    className="p-1.5 rounded-full hover:bg-ski-blue/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-ski-blue" />
                  </button>
                </div>
              )}

              {/* 列表样式排行榜 */}
              <div className="flex-1">
                {isLoadingStats ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 text-ski-blue animate-spin" />
                  </div>
                ) : currentEvent && currentEvent.athletes.length > 0 ? (
                  <div className="space-y-3">
                    {currentEvent.athletes.map((athlete, index) => {
                      const cardClass = rankingCardStyles[index] || defaultRankingCardClass
                      const badgeClass = rankingBadgeStyles[index] || defaultRankingBadgeClass
                      return (
                        <div key={athlete.athleteId} className={`flex items-center p-3 rounded-lg ${cardClass}`}>
                          <div className={`w-7 h-7 ${badgeClass} rounded-full flex items-center justify-center font-bold text-xs mr-3`}>
                            {athlete.rank}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 text-sm">{athlete.athleteName}</div>
                            <div className="text-xs text-gray-500 truncate">{athlete.province}</div>
                          </div>
                          <div className="text-right ml-2">
                            {athlete.score && <div className="text-xs text-gray-600">{athlete.score}</div>}
                            <div className="font-bold text-ski-blue text-sm">{athlete.totalPoints > 0 ? `${athlete.totalPoints}分` : '-'}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    {t.home?.rankings?.noData || '该项目暂无排名数据'}
                  </div>
                )}
              </div>
              <div className="mt-auto pt-4 text-center">
                <Link href="/points/rankings" className="text-ski-blue hover:text-ski-blue/80 font-medium text-sm">
                  查看更多 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ski-navy mb-6">
              {t.home?.features?.title || '平台核心功能'}
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              {t.home?.features?.description || '基于FIS国际雪联标准的完整滑雪竞赛管理解决方案，从积分计算、运动员管理到赛事组织，覆盖高山滑雪运动的所有核心环节'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card) => (
              <Link
                key={card.key}
                href={card.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${card.iconContainerClass}`}>
                    <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {t.home?.features?.online || '已上线'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ski-navy mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.description}</p>
                  <div className="flex items-center text-ski-blue text-sm font-medium group-hover:gap-2 transition-all">
                    <span>{t.home?.features?.useNow || '立即使用'}</span>
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 推荐模块：教练、场馆、俱乐部 - 暂时隐藏，待平台稳定后上线 */}
      {/*
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        ... 教练、场馆、俱乐部模块已隐藏 ...
      </section>
      */}

      {/* Stats Section - 暂时隐藏，数据待准确后上线 */}
      {/*
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ski-navy mb-4">{t.home?.stats?.title || '平台数据概览'}</h2>
            <p className="text-gray-600 text-sm md:text-base">{t.home?.stats?.subtitle || '实时系统数据和状态'}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {statsCards.map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className={`p-2 md:p-3 rounded-full ${
                    index % 4 === 0 ? 'bg-blue-100' :
                    index % 4 === 1 ? 'bg-green-100' :
                    index % 4 === 2 ? 'bg-yellow-100' :
                    'bg-purple-100'
                  }`}>
                    <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${
                      index % 4 === 0 ? 'text-blue-600' :
                      index % 4 === 1 ? 'text-green-600' :
                      index % 4 === 2 ? 'text-yellow-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-ski-navy mb-2">
                  {isLoadingStats ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-900 mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-gray-500">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Features Section */}

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-ski-blue/10 to-blue-200/10 rounded-xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-green-100/20 to-ski-blue/10 rounded-xl opacity-25"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="section-title">{t.home?.about?.title || 'About the Platform'}</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  {t.home?.about?.description1 || 'China Ski Points System is built on Winter Sports Management Center standards, covering alpine, freestyle, and snowboard disciplines with multi-tier scoring aligned to national regulations.'}
                </p>
                <p>
                  {t.home?.about?.description2 || 'We are committed to advancing the digital and standardised development of Chinese skiing, offering modern tools for data management, scoring, and results across big air, slopestyle, parallel events, and more.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div className="border-l-4 border-ski-blue pl-4">
                    <div className="font-semibold text-ski-navy">{t.home?.about?.multiTierPoints?.title || 'Multi-tier Points System'}</div>
                    <div className="text-sm">{t.home?.about?.multiTierPoints?.description || '360/240/120 point tiers'}</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold text-ski-navy">{t.home?.about?.uSeries?.title || 'U-Series Events'}</div>
                    <div className="text-sm">{t.home?.about?.uSeries?.description || 'U12/U15/U18 coverage'}</div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-semibold text-ski-navy">{t.home?.about?.officialCertification?.title || 'Official Certification'}</div>
                    <div className="text-sm">{t.home?.about?.officialCertification?.description || 'Winter Sports Center standards'}</div>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="font-semibold text-ski-navy">{t.home?.about?.allDisciplines?.title || 'All Disciplines Supported'}</div>
                    <div className="text-sm">{t.home?.about?.allDisciplines?.description || 'Alpine · Freestyle · Snowboard'}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="bg-gradient-to-br from-ski-blue to-primary-700 rounded-lg p-8 text-white relative overflow-hidden">
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-2xl opacity-30"></div>
                <h3 className="text-2xl font-bold mb-6">{t.home?.systemFeatures?.title || 'System Highlights'}</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>{t.home?.systemFeatures?.feature1 || 'China alpine skiing points rule standard'}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>{t.home?.systemFeatures?.feature2 || 'Freestyle/Snowboard 360/240/120 scoring tiers'}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>{t.home?.systemFeatures?.feature3 || 'Comprehensive coverage for big air, slopestyle, and parallel events'}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>{t.home?.systemFeatures?.feature4 || 'Youth series management for U12/U15/U18'}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>{t.home?.systemFeatures?.feature5 || 'Certified by the Winter Sports Management Center'}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>{t.home?.systemFeatures?.feature6 || 'Multi-discipline rankings and data visualisation'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
