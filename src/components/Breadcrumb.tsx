'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ChevronRight } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

export default function Breadcrumb() {
  const pathname = usePathname()
  const { t } = useTranslation()

  // 路径映射表 - 使用翻译
  const pathNameMap: { [key: string]: string } = {
    '': t.breadcrumb.home,
    // 新项目路径
    'alpine': t.navigation?.alpine || '高山滑雪',
    'snowboard-slopestyle': t.navigation?.snowboardSlopestyle || '单板坡面障碍技巧',
    'snowboard-parallel': t.navigation?.snowboardParallel || '单板平行项目',
    'freestyle-slopestyle': t.navigation?.freestyleSlopestyle || '自由式坡面障碍技巧',
    // 旧项目路径（保留兼容）
    'disciplines': t.breadcrumb.disciplines,
    'disciplines/alpine': t.breadcrumb.alpine,
    'disciplines/snowboard-slopestyle': t.breadcrumb.snowboardSlopestyle,
    'disciplines/snowboard-parallel': t.breadcrumb.snowboardParallel,
    'disciplines/freeski-slopestyle': t.breadcrumb.freeskiSlopestyle,
    'points': t.breadcrumb.points,
    'points/query': t.navigation.submenus.pointsCalculator || '积分查询',
    'points/calculator': t.navigation.submenus.pointsCalculator,
    'points/rankings': t.navigation.submenus.pointsRankings,
    'points/trends': t.navigation.submenus.pointsTrends,
    'events': t.breadcrumb.events,
    'events/schedule': t.navigation.submenus.eventsSchedule,
    'events/register': t.navigation.submenus.eventsRegister,
    'events/list': t.navigation.submenus.eventsSchedule || '赛事列表',
    'events/results': t.navigation.submenus.eventsResults,
    'events/stats': t.navigation.submenus.eventsStats,
    'my': t.breadcrumb.my,
    'my/points': t.navigation.submenus.myPoints,
    'my/registrations': t.navigation.submenus.myRegistrations,
    'my/athlete': t.navigation.submenus.athletesProfile,
    'my/history': t.navigation.submenus.resultsAnnouncement || '历史记录',
    'docs': t.breadcrumb.docs,
    'docs/points-rules': t.navigation.submenus.docsPointsRules,
    'docs/competition-rules': t.navigation.submenus.docsCompetitionRules,
    'docs/venue-standards': t.navigation.submenus.docsVenueStandards,
    'docs/fis-rules': t.navigation.submenus.docsGuide || 'FIS规则',
    'docs/guide': t.navigation.submenus.docsGuide,
    'about': t.breadcrumb.about,
    'login': t.common.login,
    'register': t.common.register,
    'profile': t.common.profile
  }

  // 不显示面包屑的页面
  if (pathname === '/' || pathname === '/login' || pathname === '/register') {
    return null
  }

  // 生成面包屑路径
  const pathSegments = pathname?.split('/').filter(Boolean) || []
  const breadcrumbs = pathSegments.map((_, index) => {
    const path = pathSegments.slice(0, index + 1).join('/')
    return {
      name: pathNameMap[path] || path,
      href: `/${path}`
    }
  })

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-ski-blue transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-ski-navy font-medium">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-gray-500 hover:text-ski-blue transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}