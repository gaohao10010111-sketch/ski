'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Calculator,
  Trophy,
  Users,
  UserPlus,
  Award,
  Database,
  Clock,
  CheckCircle,
  Lock,
  LogIn,
  Search,
  BarChart3,
  FileText,
  TrendingUp,
  ChevronRight
} from 'lucide-react'
import { getImagePath } from '@/utils/paths'
import { useAuth } from '@/contexts/AuthContext'
import { useTranslation } from '@/contexts/LanguageContext'

export default function HomePage() {
  const { isAuthenticated, user } = useAuth()
  const { t, language } = useTranslation()
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [selectedDiscipline, setSelectedDiscipline] = useState(0) // 0: 高山, 1: 单板坡障, 2: 单板平行, 3: 自由式

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

  // 四个项目的赛事成绩数据
  const disciplineResults = [
    // 0: 高山滑雪
    [
      { id: 'alpine-nc-gs', title: '2024全国高山滑雪锦标赛', subtitle: '男子大回转 · 天池滑雪场', status: 'live', time: '12月15日 · 14:30' },
      { id: 'alpine-cup-sl', title: '中国杯高山公开赛', subtitle: '女子回转 · 万龙滑雪场', status: 'completed', time: '12月14日 · 16:45' },
      { id: 'alpine-northeast', title: '东北联赛', subtitle: '混合全能 · 亚布力滑雪场', status: 'completed', time: '12月13日 · 15:20' }
    ],
    // 1: 单板坡面障碍技巧/大跳台
    [
      { id: 'sb-ss-nc', title: '2024全国单板坡面障碍技巧锦标赛', subtitle: '男子坡面障碍技巧 · 密苑云顶', status: 'live', time: '12月15日 · 13:00' },
      { id: 'sb-ba-open', title: '单板大跳台公开赛', subtitle: '女子大跳台 · 首钢滑雪大跳台', status: 'completed', time: '12月14日 · 19:30' },
      { id: 'sb-ss-youth', title: 'U18单板坡障青少年赛', subtitle: '混合坡面障碍技巧 · 万龙滑雪场', status: 'completed', time: '12月12日 · 14:00' }
    ],
    // 2: 单板平行项目
    [
      { id: 'sb-pgs-nc', title: '2024全国单板平行大回转锦标赛', subtitle: '男子平行大回转 · 太舞滑雪场', status: 'live', time: '12月15日 · 10:30' },
      { id: 'sb-psl-open', title: '单板平行回转公开赛', subtitle: '女子平行回转 · 云顶滑雪场', status: 'completed', time: '12月14日 · 15:15' },
      { id: 'sb-p-team', title: '单板平行团体赛', subtitle: '混合团体 · 万龙滑雪场', status: 'completed', time: '12月13日 · 11:00' }
    ],
    // 3: 自由式坡面障碍技巧/大跳台
    [
      { id: 'fs-ss-nc', title: '2024全国自由式坡面障碍技巧锦标赛', subtitle: '男子坡面障碍技巧 · 太舞滑雪场', status: 'live', time: '12月15日 · 12:00' },
      { id: 'fs-ba-open', title: '自由式大跳台公开赛', subtitle: '女子大跳台 · 首钢滑雪大跳台', status: 'completed', time: '12月14日 · 20:00' },
      { id: 'fs-ss-youth', title: 'U15自由式坡障青少年赛', subtitle: '混合坡面障碍技巧 · 密苑云顶', status: 'completed', time: '12月12日 · 16:30' }
    ]
  ]

  const disciplineNames = ['高山滑雪', '单板坡障/大跳台', '单板平行', '自由式坡障/大跳台']
  const disciplineIcons = ['🎿', '🏂', '🏂', '⛷️']

  const fallbackResults = [
    { id: 'nc-men-gs', title: '2024 National Championships', subtitle: 'Men Giant Slalom · Tianchi Resort', status: 'live', time: 'Dec 15 · 14:30' },
    { id: 'china-cup-sl', title: 'China Cup Alpine Open', subtitle: 'Women Slalom · Wanlong Resort', status: 'completed', time: 'Dec 14 · 16:45' },
    { id: 'northeast-league', title: 'Northeast League', subtitle: 'Mixed Alpine Combined · Yabuli Resort', status: 'completed', time: 'Dec 13 · 15:20' }
  ]

  const latestResults = disciplineResults[selectedDiscipline] || fallbackResults

  const latestResultStatusLabels: Record<string, string> = t.home?.latestResults?.statusLabels || {}
  const resultStatusStyles: Record<string, string> = {
    live: 'text-ski-blue',
    completed: 'text-green-600'
  }

  const fallbackRankingEntries = [
    { rank: 1, name: 'Wei Zhang', event: 'Men Giant Slalom', points: '0.00' },
    { rank: 2, name: 'Xue Li', event: 'Women Slalom', points: '8.45' },
    { rank: 3, name: 'Bing Wang', event: 'Women Giant Slalom', points: '12.30' },
    { rank: 4, name: 'Qiang Liu', event: 'Men Slalom', points: '15.67' }
  ]

  const rankingEntries = t.home?.rankings?.entries && t.home.rankings.entries.length > 0
    ? t.home.rankings.entries
    : fallbackRankingEntries

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
    { label: '冬运中心官方认证', color: highlightFallbackColors[1] },
    { label: 'U系列·大众赛事', color: highlightFallbackColors[2] }
  ]).map((item, index) => ({
    label: item.label,
    color: item.color || highlightFallbackColors[index % highlightFallbackColors.length]
  }))

  const statsCards = [
    {
      label: t.home?.stats?.disciplines?.label || '滑雪项目',
      value: t.home?.stats?.disciplines?.value || '15+',
      description: t.home?.stats?.disciplines?.description || '高山·自由式·单板',
      icon: Award
    },
    {
      label: t.home?.stats?.pointsRules?.label || '积分规则',
      value: t.home?.stats?.pointsRules?.value || '100%',
      description: t.home?.stats?.pointsRules?.description || '符合中国标准',
      icon: CheckCircle
    },
    {
      label: t.home?.stats?.updateCycle?.label || '积分更新',
      value: t.home?.stats?.updateCycle?.value || '7天',
      description: t.home?.stats?.updateCycle?.description || '每周更新',
      icon: Clock
    },
    {
      label: t.home?.stats?.users?.label || '注册用户',
      value: t.home?.stats?.users?.value || '1,200+',
      description: t.home?.stats?.users?.description || '运动员教练',
      icon: Database
    }
  ]

  const featureCards = [
    {
      key: 'fisPointsQuery',
      href: '/points/fis',
      icon: Search,
      title: t.home?.features?.fisPointsQuery?.title || 'FIS积分查询',
      description: t.home?.features?.fisPointsQuery?.description || '查询运动员FIS积分和排名信息',
      iconContainerClass: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      key: 'pointsCalculator',
      href: '/points/calculator',
      icon: Calculator,
      title: t.home?.features?.pointsCalculator?.title || '积分计算器',
      description: t.home?.features?.pointsCalculator?.description || '根据比赛成绩实时计算滑雪积分',
      iconContainerClass: 'bg-green-50',
      iconColor: 'text-green-600'
    },
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
      key: 'pointsRules',
      href: '/rules/points',
      icon: FileText,
      title: t.home?.features?.pointsRules?.title || '积分规则文档',
      description: t.home?.features?.pointsRules?.description || '查看详细的FIS积分计算规则',
      iconContainerClass: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      key: 'competitionManagement',
      href: '/competitions',
      icon: Trophy,
      title: t.home?.features?.competitionManagement?.title || '竞赛管理',
      description: t.home?.features?.competitionManagement?.description || '管理比赛信息、成绩录入和统计',
      iconContainerClass: 'bg-red-50',
      iconColor: 'text-red-500'
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
      key: 'onlineRegistration',
      href: '/registration',
      icon: LogIn,
      title: t.home?.features?.onlineRegistration?.title || '在线报名',
      description: t.home?.features?.onlineRegistration?.description || '便捷的赛事报名和费用管理',
      iconContainerClass: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
    {
      key: 'dataAnalysis',
      href: '/competitions/stats',
      icon: TrendingUp,
      title: t.home?.features?.dataAnalysis?.title || '数据分析',
      description: t.home?.features?.dataAnalysis?.description || '深度数据分析和可视化报表',
      iconContainerClass: 'bg-teal-50',
      iconColor: 'text-teal-600'
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
                        href="/scoring-systems"
                        className="inline-flex items-center justify-center px-6 py-3 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                        title={t.home?.hero?.exploreDisciplines || 'Explore Disciplines'}
                      >
                        <Calculator className="h-5 w-5 mr-2" />
                        {t.home?.hero?.exploreDisciplines || 'Explore Disciplines'}
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
              <div className="inline-flex bg-white rounded-lg shadow-md p-1 gap-1">
                {disciplineNames.map((name, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDiscipline(index)}
                    className={`px-4 md:px-6 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedDiscipline === index
                        ? 'bg-ski-blue text-white shadow-md transform scale-105'
                        : 'text-gray-600 hover:text-ski-blue hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-1.5">{disciplineIcons[index]}</span>
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Recent Competition Results */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-ski-navy">{t.home?.latestResults?.recentResults || '最新成绩'}</h3>
                <div className="flex items-center text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {t.home?.latestResults?.liveUpdate || '实时更新'}
                </div>
              </div>
              <div className="space-y-4">
                {latestResults.map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{result.title}</div>
                      <div className="text-sm text-gray-600">{result.subtitle}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${resultStatusStyles[result.status] || 'text-gray-600'}`}>
                        {latestResultStatusLabels[result.status] || (result.status === 'live' ? (t.home?.latestResults?.statusLabels?.live || '正在进行') : (t.home?.latestResults?.statusLabels?.completed || '已完成'))}
                      </div>
                      {result.time && <div className="text-xs text-gray-500">{result.time}</div>}
                    </div>
                  </div>
                ))}
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
                <div className="text-sm text-gray-500">{t.home?.rankings?.updatedOn || '更新于'}: 12-15</div>
              </div>
              <div className="space-y-4">
                {rankingEntries.map((entry, index) => {
                  const cardClass = rankingCardStyles[index] || defaultRankingCardClass
                  const badgeClass = rankingBadgeStyles[index] || defaultRankingBadgeClass

                  return (
                    <div key={entry.rank} className={`flex items-center p-4 rounded-lg ${cardClass}`}>
                      <div className={`w-8 h-8 ${badgeClass} rounded-full flex items-center justify-center font-bold text-sm mr-4`}>{entry.rank}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{entry.name}</div>
                        <div className="text-sm text-gray-600">{entry.event}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-ski-navy">{entry.points}</div>
                        <div className="text-xs text-gray-500">{t.home?.rankings?.points || 'FIS积分'}</div>
                      </div>
                    </div>
                  )
                })}
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
            <h2 className="text-2xl md:text-3xl font-bold text-ski-navy mb-4">{t.home?.stats?.title || 'Platform Data Overview'}</h2>
            <p className="text-gray-600 text-sm md:text-base">{t.home?.stats?.subtitle || 'Real-time system data and status'}</p>
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
                  {stat.value}
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
