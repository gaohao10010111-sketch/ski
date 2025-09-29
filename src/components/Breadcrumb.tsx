'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ChevronRight } from 'lucide-react'

export default function Breadcrumb() {
  const pathname = usePathname()

  // 路径映射表
  const pathNameMap: { [key: string]: string } = {
    '': '首页',
    'disciplines': '滑雪项目',
    'disciplines/alpine': '高山滑雪',
    'disciplines/snowboard-slopestyle': '单板坡面/大跳台',
    'disciplines/snowboard-parallel': '单板平行项目',
    'disciplines/freeski-slopestyle': '自由式坡面/大跳台',
    'points': '积分中心',
    'points/query': '积分查询',
    'points/calculator': '积分计算器',
    'points/rankings': '积分排行榜',
    'points/trends': '积分趋势分析',
    'events': '赛事',
    'events/schedule': '赛事日程',
    'events/register': '在线报名',
    'events/list': '比赛列表',
    'events/results': '成绩查询',
    'events/stats': '数据统计',
    'my': '我的',
    'my/points': '我的积分',
    'my/registrations': '我的报名',
    'my/athlete': '运动员档案',
    'my/history': '成绩历史',
    'docs': '知识库',
    'docs/points-rules': '积分规则文档',
    'docs/competition-rules': '竞赛技术规则',
    'docs/venue-standards': '场地技术标准',
    'docs/fis-rules': 'FIS国际规则',
    'docs/guide': '平台使用指南',
    'about': '关于系统',
    'login': '登录',
    'register': '注册',
    'profile': '个人设置'
  }

  // 不显示面包屑的页面
  if (pathname === '/' || pathname === '/login' || pathname === '/register') {
    return null
  }

  // 生成面包屑路径
  const pathSegments = pathname.split('/').filter(Boolean)
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