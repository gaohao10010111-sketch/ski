'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Calculator,
  Trophy,
  Users,
  FileText,
  UserPlus,
  Award,
  Database,
  ChevronRight,
  Clock,
  CheckCircle,
  Lock,
  LogIn
} from 'lucide-react'
import { getImagePath } from '@/utils/paths'
import { useAuth } from '@/contexts/AuthContext'
import { useTranslation } from '@/contexts/LanguageContext'
import { Resource, Action } from '@/types/auth'

export default function HomePage() {
  const { hasPermission, isAuthenticated, user } = useAuth()
  const { t, language } = useTranslation()
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isClient, setIsClient] = useState(false)

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

  const fallbackResults = [
    { id: 'nc-men-gs', title: '2024 National Championships', subtitle: 'Men Giant Slalom · Tianchi Resort', status: 'live', time: 'Dec 15 · 14:30' },
    { id: 'china-cup-sl', title: 'China Cup Alpine Open', subtitle: 'Women Slalom · Wanlong Resort', status: 'completed', time: 'Dec 14 · 16:45' },
    { id: 'northeast-league', title: 'Northeast League', subtitle: 'Mixed Alpine Combined · Yabuli Resort', status: 'completed', time: 'Dec 13 · 15:20' }
  ]

  const latestResults = t.home?.latestResults?.results && t.home.latestResults.results.length > 0
    ? t.home.latestResults.results
    : fallbackResults

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

  const disciplineCards = [
    {
      key: 'alpine',
      href: '/alpine',
      accentClass: 'bg-ski-blue',
      gradientClass: 'hover:bg-gradient-to-r hover:from-blue-500/80 hover:to-cyan-500/80',
      label: t.navigation?.alpine || 'Alpine Skiing'
    },
    {
      key: 'snowboard-slopestyle',
      href: '/snowboard-slopestyle',
      accentClass: 'bg-purple-400',
      gradientClass: 'hover:bg-gradient-to-r hover:from-purple-500/80 hover:to-pink-500/80',
      label: t.navigation?.snowboardSlopestyle || 'Snowboard Slopestyle'
    },
    {
      key: 'snowboard-parallel',
      href: '/snowboard-parallel',
      accentClass: 'bg-indigo-400',
      gradientClass: 'hover:bg-gradient-to-r hover:from-indigo-500/80 hover:to-blue-500/80',
      label: t.navigation?.snowboardParallel || 'Snowboard Parallel'
    },
    {
      key: 'freestyle-slopestyle',
      href: '/freestyle-slopestyle',
      accentClass: 'bg-cyan-400',
      gradientClass: 'hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-teal-500/80',
      label: t.navigation?.freestyleSlopestyle || 'Freestyle Slopestyle'
    }
  ]

  const stats = [
    {
      label: t.home?.stats?.disciplines?.label || 'Ski Disciplines',
      value: t.home?.stats?.disciplines?.value || '15+',
      description: t.home?.stats?.disciplines?.description || 'Alpine·Freestyle·Snowboard',
      icon: Award
    },
    {
      label: t.home?.stats?.pointsRules?.label || 'Points Rules',
      value: t.home?.stats?.pointsRules?.value || '100%',
      description: t.home?.stats?.pointsRules?.description || 'Compliant with China Standards',
      icon: CheckCircle
    },
    {
      label: t.home?.stats?.updateCycle?.label || 'Points Update',
      value: t.home?.stats?.updateCycle?.value || '7 Days',
      description: t.home?.stats?.updateCycle?.description || 'Weekly Updates',
      icon: Clock
    },
    {
      label: t.home?.stats?.users?.label || 'Registered Users',
      value: t.home?.stats?.users?.value || '1,200+',
      description: t.home?.stats?.users?.description || 'Athletes & Coaches',
      icon: Database
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
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                  {t.home?.hero?.titleEn || 'China Skiing Points System'}
                </div>
              </h1>
              <div className="mb-8">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed font-medium">
                  {t.home?.hero?.subtitle || 'Authoritative · Professional · Accurate ski points platform'}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 text-sm md:text-base lg:text-lg">
                  {disciplineCards.map((card) => (
                    <Link
                      key={card.key}
                      href={card.href}
                      className={`flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 transition-all duration-300 group transform hover:scale-105 ${card.gradientClass}`}
                    >
                      <div className={`w-3 h-3 ${card.accentClass} rounded-full mb-2 flex-shrink-0`} />
                      <span className="text-white font-medium whitespace-nowrap text-xs">{card.label}</span>
                    </Link>
                  ))}
                </div>

                {/* 平台介绍引导 */}
                {isClient && !isAuthenticated && (
                  <div className="mt-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/alpine"
                        className="inline-flex items-center justify-center px-6 py-3 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                        title={t.home?.hero?.exploreDisciplines || 'Explore Disciplines'}
                      >
                        <Trophy className="h-5 w-5 mr-2" />
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ski-navy mb-4">{t.home?.stats?.title || 'Platform Data Overview'}</h2>
            <p className="text-gray-600 text-sm md:text-base">{t.home?.stats?.subtitle || 'Real-time system data and status'}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
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

      {/* Live Competition Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ski-navy mb-4">
              {isClient && isAuthenticated ? (t.home?.latestResults?.title || 'Latest Competition Results') : (t.home?.features?.title || 'Core Platform Features')}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {isClient && isAuthenticated
                ? (t.home?.latestResults?.subtitle || 'Real-time competition results and points standings')
                : (t.home?.memberValue?.registerToUnlock || 'Register to unlock all professional features')
              }
            </p>
          </div>

          {isClient && isAuthenticated ? (
            <div>
              {/* 会员个人化欢迎 */}
              <div className="bg-gradient-to-r from-ski-blue to-blue-600 rounded-lg p-6 mb-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t.home?.memberWelcome?.welcomeBack || 'Welcome Back'}, {user?.username || 'Member'}！
                    </h3>
                    <p className="text-blue-100">
                      {user?.role === 'admin' ? (t.auth?.roles?.admin || 'Administrator') :
                       user?.role === 'coach' ? (t.auth?.roles?.coach || 'Coach') : (t.auth?.roles?.athlete || 'Athlete')} ·
                      {user?.status === 'active' ? (t.home?.memberWelcome?.accountStatus || 'Account Active') : (t.home?.memberWelcome?.pendingReview || 'Pending Review')}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      {user?.role === 'athlete' ? '85.2' : '--'}
                    </div>
                    <div className="text-blue-100 text-sm">
                      {user?.role === 'athlete' ? (t.home?.memberWelcome?.currentPoints || 'Current Points') : (t.home?.memberWelcome?.systemPermissions || 'System Permissions')}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-4">
                  <Link
                    href="/my"
                    className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                  >
                    {t.home?.memberWelcome?.personalCenter || 'Personal Center'}
                  </Link>
                  {user?.role === 'athlete' && (
                    <Link
                      href="/my/points"
                      className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                    >
                      {t.home?.memberWelcome?.myPoints || 'My Points'}
                    </Link>
                  )}
                  {user?.role === 'admin' && (
                    <Link
                      href="/admin"
                      className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                    >
                      {t.home?.memberWelcome?.adminPanel || 'Admin Panel'}
                    </Link>
                  )}
                </div>
              </div>

              {/* 会员专享内容 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Recent Competition Results */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-ski-navy">{t.home?.latestResults?.recentResults || 'Recent Results'}</h3>
                <div className="flex items-center text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {t.home?.latestResults?.liveUpdate || 'Live Update'}
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
                        {latestResultStatusLabels[result.status] || (result.status === 'live' ? (t.home?.latestResults?.statusLabels?.live || 'Live') : (t.home?.latestResults?.statusLabels?.completed || 'Completed'))}
                      </div>
                      {result.time && <div className="text-xs text-gray-500">{result.time}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/events" className="text-ski-blue hover:text-ski-blue/80 font-medium">
                  {t.home?.latestResults?.viewMore || 'View More Events →'}
                </Link>
              </div>
            </div>

            {/* Top Athletes Rankings */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-ski-navy">{t.home?.rankings?.title || 'Points Leaderboard'}</h3>
                <div className="text-sm text-gray-500">{t.home?.rankings?.updatedOn || 'Updated on'}: 12-15</div>
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
                        <div className="text-xs text-gray-500">{t.home?.rankings?.points || 'Points'}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 text-center">
                <Link href="/points/rankings" className="text-ski-blue hover:text-ski-blue/80 font-medium">
                  {t.home?.rankings?.viewFullRankings || 'View Full Rankings →'}
                </Link>
              </div>
            </div>
            </div>
            </div>
          ) : (
            // 未登录用户看到的会员价值展示
            <div>
              {/* 会员价值提醒条 */}
              <div className="bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mr-4">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-900 mb-1">
                        {t.home?.memberValue?.unlockFeatures || 'Unlock All Professional Features'}
                      </h3>
                      <p className="text-sky-700 text-sm">
                        {t.home?.memberValue?.registerToUnlock || 'Register to access full points and event services'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/login"
                      className="px-4 py-2 border border-sky-300 text-sky-700 rounded-lg hover:bg-sky-50 transition-colors text-sm font-medium"
                    >
                      {t.common?.login || 'Login'}
                    </Link>
                    <Link
                      href="/register"
                      className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium"
                    >
                      {t.home?.hero?.freeRegister || 'Free Registration'}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 积分系统 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-ski-blue/50 transition-colors relative">
                <div className="absolute top-4 right-4">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ski-navy mb-3 text-center">{t.home?.memberValue?.pointsSystem?.title || 'Points System'}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• {t.home?.memberValue?.pointsSystem?.features?.[0] || 'Personal points history tracking'}</li>
                  <li>• {t.home?.memberValue?.pointsSystem?.features?.[1] || 'Real-time points leaderboard'}</li>
                  <li>• {t.home?.memberValue?.pointsSystem?.features?.[2] || 'Points calculator tool'}</li>
                  <li>• {t.home?.memberValue?.pointsSystem?.features?.[3] || 'Points trend analysis'}</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link
                    href="/register"
                    className="inline-flex items-center px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    {t.home?.memberValue?.registerUnlock || 'Register to Unlock'}
                  </Link>
                </div>
              </div>

              {/* 赛事管理 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-ski-blue/50 transition-colors relative">
                <div className="absolute top-4 right-4">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Trophy className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ski-navy mb-3 text-center">{t.home?.memberValue?.eventManagement?.title || 'Event Management'}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• {t.home?.memberValue?.eventManagement?.features?.[0] || 'View competition list and schedule'}</li>
                  <li>• {t.home?.memberValue?.eventManagement?.features?.[1] || 'Register online for events'}</li>
                  <li>• {t.home?.memberValue?.eventManagement?.features?.[2] || 'View live results'}</li>
                  <li>• {t.home?.memberValue?.eventManagement?.features?.[3] || 'Event results notifications'}</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link
                    href="/register"
                    className="inline-flex items-center px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    {t.home?.memberValue?.registerUnlock || 'Register to Unlock'}
                  </Link>
                </div>
              </div>

              {/* 专业功能 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-ski-blue/50 transition-colors relative">
                <div className="absolute top-4 right-4">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ski-navy mb-3 text-center">{t.home?.memberValue?.professionalFeatures?.title || 'Professional Features'}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• {t.home?.memberValue?.professionalFeatures?.features?.[0] || 'Athlete profile management'}</li>
                  <li>• {t.home?.memberValue?.professionalFeatures?.features?.[1] || 'Detailed points rules'}</li>
                  <li>• {t.home?.memberValue?.professionalFeatures?.features?.[2] || 'Data statistics and analysis'}</li>
                  <li>• {t.home?.memberValue?.professionalFeatures?.features?.[3] || 'Technical support service'}</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link
                    href="/register"
                    className="inline-flex items-center px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    {t.home?.memberValue?.registerUnlock || 'Register to Unlock'}
                  </Link>
                </div>
              </div>
            </div>
            </div>
          )}

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
