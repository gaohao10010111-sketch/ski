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
  Mountain,
  ArrowLeftRight,
  Wind,
  Sparkles,
  Loader2
} from 'lucide-react'
import { getImagePath } from '@/utils/paths'
import { useAuth } from '@/contexts/AuthContext'
import { useTranslation } from '@/contexts/LanguageContext'
import { statsApi, competitionsApi, rankingsApi, type StatsOverview, type Competition, type RankingItem } from '@/lib/api'

// 运动类型映射
const sportTypeMapping: Record<string, number> = {
  ALPINE_SKI: 0,
  SNOWBOARD_SLOPESTYLE_BIGAIR: 1,
  SNOWBOARD_PARALLEL: 2,
  FREESTYLE_SLOPESTYLE_BIGAIR: 3
}

const sportTypeKeys = ['ALPINE_SKI', 'SNOWBOARD_SLOPESTYLE_BIGAIR', 'SNOWBOARD_PARALLEL', 'FREESTYLE_SLOPESTYLE_BIGAIR']

// 状态标签
const statusLabels: Record<string, string> = {
  SCHEDULED: '即将开始',
  ONGOING: '进行中',
  COMPLETED: '已完成',
  CANCELLED: '已取消'
}

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
      console.error('获取首页数据错误:', error)
    } finally {
      setIsLoadingStats(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const fallbackNewsItems = [
    { id: 'nc-men-gs', title: '2024 National Championships', subtitle: 'Giant Slalom · Live Now', status: 'live', pinned: true },
    { id: 'points-refresh', title: 'Points Rankings Refreshed', subtitle: '14-Day Cycle · Published', status: 'updated', pinned: false },
    { id: 'rules-update', title: 'New Season Regulations', subtitle: 'Technical Committee · Released', status: 'updated', pinned: false },
    { id: 'registration-open', title: 'Athlete Registration Open', subtitle: '2024-25 Season · Open Enrollment', status: 'upcoming', pinned: false },
    { id: 'camp', title: 'Training Camp Notice', subtitle: 'Winter Program · Starting Soon', status: 'upcoming', pinned: false }
  ]

  const newsItems = t.home?.news?.items && t.home.news.items.length > 0 ? t.home.news.items : fallbackNewsItems

  const newsStatusColors: Record<string, string> = {
    live: 'bg-red-400 animate-pulse',
    updated: 'bg-green-400',
    upcoming: 'bg-yellow-400',
    default: 'bg-gray-300'
  }

  const newsStatusLabels: Record<string, string> = t.home?.news?.statuses || {}

  const disciplineNames = ['高山滑雪', '单板坡障/大跳台', '单板平行', '自由式坡障/大跳台']
  const disciplineIcons = [Mountain, Sparkles, ArrowLeftRight, Wind]

  // 根据选中的项目筛选比赛
  const filteredCompetitions = competitions.filter(
    comp => sportTypeMapping[comp.sportType] === selectedDiscipline
  ).slice(0, 3)

  // 获取当前项目的排名
  const currentSportType = sportTypeKeys[selectedDiscipline]
  const currentRankings = rankings[currentSportType] || []

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

  // 从API数据生成统计卡片
  const statsCards = [
    {
      label: t.home?.stats?.disciplines?.label || '注册运动员',
      value: statsData?.overview?.totalAthletes?.toLocaleString() || '0',
      description: `活跃 ${statsData?.overview?.activeAthletes || 0} 人`,
      icon: Users
    },
    {
      label: t.home?.stats?.pointsRules?.label || '赛事总数',
      value: statsData?.overview?.totalCompetitions?.toString() || '0',
      description: `已完成 ${statsData?.overview?.completedCompetitions || 0} 场`,
      icon: Trophy
    },
    {
      label: t.home?.stats?.updateCycle?.label || '即将举办',
      value: statsData?.overview?.upcomingCompetitions?.toString() || '0',
      description: '场赛事',
      icon: Clock
    },
    {
      label: t.home?.stats?.users?.label || '当前赛季',
      value: statsData?.overview?.currentSeason || '2024-25',
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
    {
      key: 'athleteProfiles',
      href: '/athletes',
      icon: Users,
      title: t.home?.features?.athleteProfiles?.title || '运动员档案',
      description: t.home?.features?.athleteProfiles?.description || '运动员信息管理和积分历史',
      iconContainerClass: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
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
    {
      key: 'pointsRules',
      href: '/rules/points',
      icon: FileText,
      title: t.home?.features?.pointsRules?.title || '积分规则',
      description: t.home?.features?.pointsRules?.description || '查看详细的积分计算规则',
      iconContainerClass: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
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

                {/* 平台介绍引导 */}
                {isClient && !isAuthenticated && (
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
                      <Link
                        href="/register"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-ski-navy transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                        title={t.home?.hero?.freeRegister || 'Free Registration'}
                      >
                        <UserPlus className="h-5 w-5 mr-2" />
                        {t.home?.hero?.freeRegister || 'Free Registration'}
                      </Link>
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
                    <div className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20">
                      <div className="flex-1">
                        <div className="text-white font-semibold">{currentNews.title}</div>
                        <div className="text-gray-300 text-sm">{currentNews.subtitle}</div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${newsStatusColors[currentNews.status] || newsStatusColors.default}`}></div>
                    </div>

                    {newsItems
                      .map((item, index) => ({ item, index }))
                      .filter(({ index }) => index !== currentNewsIndex)
                      .slice(0, 3)
                      .map(({ item, index }) => (
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

      {/* Latest Competition Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ski-navy mb-4">
              {t.home?.latestResults?.title || '最新赛事成绩'}
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              {t.home?.latestResults?.subtitle || '实时更新的竞赛结果和积分排名'}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Recent Competition Results */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-ski-navy">{t.home?.latestResults?.recentResults || '最新比赛'}</h3>
                <div className="flex items-center text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {t.home?.latestResults?.liveUpdate || '实时更新'}
                </div>
              </div>
              <div className="space-y-4">
                {isLoadingStats ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 text-ski-blue animate-spin" />
                  </div>
                ) : filteredCompetitions.length > 0 ? (
                  filteredCompetitions.map((comp) => (
                    <Link
                      key={comp.id}
                      href={`/competitions/${comp.id}`}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-gray-900">{comp.name}</div>
                        <div className="text-sm text-gray-600">{comp.discipline || comp.location}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${resultStatusStyles[comp.status] || 'text-gray-600'}`}>
                          {latestResultStatusLabels[comp.status] || statusLabels[comp.status] || comp.status}
                        </div>
                        <div className="text-xs text-gray-500">{formatDate(comp.startDate)}</div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    暂无该项目的比赛数据
                  </div>
                )}
              </div>
              <div className="mt-6 text-center">
                <Link href="/competitions" className="text-ski-blue hover:text-ski-blue/80 font-medium">
                  {t.home?.latestResults?.viewMore || '查看更多赛事 →'}
                </Link>
              </div>
            </div>

            {/* Top Athletes Rankings */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-ski-navy">{t.home?.rankings?.title || '积分排行榜'}</h3>
                <div className="text-sm text-gray-500">
                  {statsData?.overview?.currentSeason || '2024-25'} 赛季
                </div>
              </div>
              <div className="space-y-4">
                {isLoadingStats ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 text-ski-blue animate-spin" />
                  </div>
                ) : currentRankings.length > 0 ? (
                  currentRankings.map((entry, index) => {
                    const cardClass = rankingCardStyles[index] || defaultRankingCardClass
                    const badgeClass = rankingBadgeStyles[index] || defaultRankingBadgeClass

                    return (
                      <Link
                        key={entry.athleteId}
                        href={`/athletes/${entry.athleteId}`}
                        className={`flex items-center p-4 rounded-lg hover:shadow-md transition-shadow ${cardClass}`}
                      >
                        <div className={`w-8 h-8 ${badgeClass} rounded-full flex items-center justify-center font-bold text-sm mr-4`}>
                          {entry.rank}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{entry.athleteName}</div>
                          <div className="text-sm text-gray-600">
                            {entry.province || entry.club || entry.discipline || '-'}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-ski-navy">{entry.totalPoints.toFixed(2)}</div>
                          <div className="text-xs text-gray-500">{t.home?.rankings?.points || '积分'}</div>
                        </div>
                      </Link>
                    )
                  })
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    暂无该项目的排名数据
                  </div>
                )}
              </div>
              <div className="mt-6 text-center">
                <Link href="/points/rankings" className="text-ski-blue hover:text-ski-blue/80 font-medium">
                  {t.home?.rankings?.viewFullRankings || '查看完整排名 →'}
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

      {/* Stats Section */}
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
