'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  Menu,
  X,
  Mountain,
  Calculator,
  Trophy,
  Users,
  FileText,
  UserPlus,
  ChevronDown,
  LogIn,
  User,
  LogOut,
  Settings,
  Calendar,
  BarChart3,
  Award,
  TrendingUp
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { Resource, Action } from '@/types/auth'

const navigationItems = [
  {
    name: '滑雪项目',
    href: '/disciplines',
    icon: Mountain,
    active: true,
    resource: Resource.HOME,
    action: Action.READ,
    children: [
      { name: '项目总览', href: '/disciplines', active: true, resource: Resource.HOME, action: Action.READ },
      { name: '⛷️ 高山滑雪', href: '/disciplines/alpine', active: true, resource: Resource.HOME, action: Action.READ },
      { name: '🏂 单板坡面/大跳台', href: '/disciplines/snowboard-slopestyle', active: true, resource: Resource.HOME, action: Action.READ },
      { name: '🏂 单板平行项目', href: '/disciplines/snowboard-parallel', active: true, resource: Resource.HOME, action: Action.READ },
      { name: '🎿 自由式坡面/大跳台', href: '/disciplines/freeski-slopestyle', active: true, resource: Resource.HOME, action: Action.READ }
    ]
  },
  {
    name: '积分中心',
    href: '/points',
    icon: Calculator,
    active: true,
    resource: Resource.RULES_POINTS,
    action: Action.READ,
    children: [
      { name: '我的积分', href: '/my/points', active: true, resource: Resource.POINTS_QUERY, action: Action.READ },
      { name: '积分查询', href: '/points/query', active: true, resource: Resource.RULES_POINTS, action: Action.READ },
      { name: '积分计算器', href: '/points/calculator', active: true, resource: Resource.POINTS_CALCULATOR, action: Action.READ },
      { name: '积分排行榜', href: '/points/rankings', active: true, resource: Resource.POINTS_RANKING, action: Action.READ },
      { name: '积分趋势分析', href: '/points/trends', active: true, resource: Resource.POINTS_TRENDS, action: Action.READ }
    ]
  },
  {
    name: '赛事',
    href: '/events',
    icon: Trophy,
    active: true,
    resource: Resource.COMPETITIONS,
    action: Action.READ,
    children: [
      { name: '赛事日程', href: '/events/schedule', active: true, resource: Resource.COMPETITIONS_SCHEDULE, action: Action.READ },
      { name: '在线报名', href: '/events/register', active: true, resource: Resource.REGISTRATION, action: Action.WRITE },
      { name: '比赛列表', href: '/events/list', active: true, resource: Resource.COMPETITIONS, action: Action.READ },
      { name: '成绩查询', href: '/events/results', active: true, resource: Resource.RESULTS_ANNOUNCEMENT, action: Action.READ },
      { name: '数据统计', href: '/events/stats', active: true, resource: Resource.STATISTICS, action: Action.READ }
    ]
  },
  {
    name: '我的',
    href: '/my',
    icon: User,
    active: true,
    resource: Resource.POINTS_QUERY,
    action: Action.READ,
    children: [
      { name: '个人中心', href: '/my', active: true, resource: Resource.POINTS_QUERY, action: Action.READ },
      { name: '我的积分', href: '/my/points', active: true, resource: Resource.POINTS_QUERY, action: Action.READ },
      { name: '我的报名', href: '/my/registrations', active: true, resource: Resource.REGISTRATION, action: Action.READ },
      { name: '运动员档案', href: '/my/athlete', active: true, resource: Resource.USER_MANAGEMENT, action: Action.READ },
      { name: '成绩历史', href: '/my/history', active: true, resource: Resource.POINTS_QUERY, action: Action.READ }
    ]
  },
  {
    name: '知识库',
    href: '/docs',
    icon: FileText,
    active: true,
    resource: Resource.RULES_POINTS,
    action: Action.READ,
    children: [
      { name: '积分规则文档', href: '/docs/points-rules', active: true, resource: Resource.RULES_POINTS, action: Action.READ },
      { name: '竞赛技术规则', href: '/docs/competition-rules', active: true, resource: Resource.RULES_POINTS, action: Action.READ },
      { name: '场地技术标准', href: '/docs/venue-standards', active: true, resource: Resource.RULES_POINTS, action: Action.READ },
      { name: 'FIS国际规则', href: '/docs/fis-rules', active: true, resource: Resource.RULES_POINTS, action: Action.READ },
      { name: '平台使用指南', href: '/docs/guide', active: true, resource: Resource.RULES_POINTS, action: Action.READ }
    ]
  }
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout, isLoading, hasPermission, isAuthenticated } = useAuth()

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const handleLogout = () => {
    logout()
    setUserMenuOpen(false)
    router.push('/')
  }

  const getRoleDisplayName = (role: string) => {
    const roleMap: { [key: string]: string } = {
      admin: '管理员',
      coach: '教练员',
      athlete: '运动员',
      user: '用户'
    }
    return roleMap[role] || '用户'
  }

  // 显示所有导航项，但标记权限状态
  const processNavigationItems = (items: typeof navigationItems) => {
    return items.map(item => ({
      ...item,
      // 检查主菜单权限状态
      isLocked: item.resource && item.action && !hasPermission(item.resource, item.action),
      needsAuth: !isAuthenticated && item.resource && item.action,

      // 处理子菜单，显示所有项但标记权限状态
      children: item.children ? item.children.map(child => ({
        ...child,
        isLocked: child.resource && child.action && !hasPermission(child.resource, child.action),
        needsAuth: !isAuthenticated && child.resource && child.action
      })) : undefined
    }))
  }

  const processedNavigationItems = processNavigationItems(navigationItems)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-ski-blue" />
              <span className="text-xl font-bold text-ski-navy whitespace-nowrap">
                中国滑雪积分系统
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center ml-8 whitespace-nowrap">
            {processedNavigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => !item.isLocked && toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 nav-link whitespace-nowrap ${
                        pathname?.startsWith(item.href) ||
                        (item.children && item.children.some(child => pathname === child.href)) ? 'active' : ''
                      } ${item.isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={item.isLocked}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                      {item.isLocked ? (
                        <LogIn className="h-3 w-3 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-3 w-3" />
                      )}
                    </button>

                    {openDropdown === item.name && !item.isLocked && (
                      <div className="dropdown-menu">
                        {item.children.map((child) => (
                          child.isLocked ? (
                            <div
                              key={child.name}
                              className="dropdown-item text-gray-400 cursor-not-allowed"
                            >
                              <div className="flex items-center justify-between">
                                <span>{child.name}</span>
                                <LogIn className="h-3 w-3 text-gray-400" />
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`dropdown-item ${
                                child.active
                                  ? `text-gray-700 hover:text-ski-blue ${
                                      pathname === child.href ? 'bg-ski-ice text-ski-blue font-medium' : ''
                                    }`
                                  : 'text-gray-400 cursor-not-allowed'
                              }`}
                              onClick={() => child.active && setOpenDropdown(null)}
                            >
                              <div className="flex items-center justify-between">
                                <span>{child.name}</span>
                                {!child.active && (
                                  <span className="badge badge-coming-soon text-xs">即将上线</span>
                                )}
                              </div>
                            </Link>
                          )
                        ))}
                        {item.children.some(child => child.isLocked) && !isAuthenticated && (
                          <div className="border-t border-gray-100 mt-1 pt-1">
                            <Link
                              href="/login"
                              className="dropdown-item text-sky-500 hover:text-sky-600 text-sm"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center">
                                <LogIn className="h-3 w-3 mr-2" />
                                <span>登录解锁更多功能</span>
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : item.isLocked ? (
                  <div
                    className="flex items-center space-x-1 nav-link whitespace-nowrap opacity-50 cursor-not-allowed"
                    title="需要登录才能访问"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    <LogIn className="h-3 w-3 text-gray-400" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 nav-link whitespace-nowrap ${
                      pathname === item.href || pathname?.startsWith(item.href + '/') ? 'active' : ''
                    } ${!item.active ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {!item.active && (
                      <span className="badge badge-coming-soon text-xs ml-2">即将上线</span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Auth Links */}
          <div className="hidden md:flex items-center space-x-4 whitespace-nowrap">
            {isLoading ? (
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            ) : user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-ski-blue px-3 py-2 rounded-md text-sm font-medium"
                >
                  <div className="w-8 h-8 bg-ski-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <span>{user.username}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="text-sm font-medium text-gray-900">{user.username}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                      <div className="text-xs text-ski-blue">{getRoleDisplayName(user.role)}</div>
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        个人设置
                      </div>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50"
                    >
                      <div className="flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        退出登录
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center space-x-1 text-gray-700 hover:text-ski-blue px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                >
                  <LogIn className="h-4 w-4" />
                  <span>登录</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center space-x-1 bg-ski-blue text-white hover:bg-ski-blue/90 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                >
                  <User className="h-4 w-4" />
                  <span>注册</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-ski-blue p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {processedNavigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.needsAuth ? '/login' : item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    pathname?.startsWith(item.href) ||
                    (item.children && item.children.some(child => pathname === child.href))
                      ? 'text-ski-blue bg-ski-ice'
                      : 'text-gray-700 hover:text-ski-blue hover:bg-gray-50'
                  } ${!item.active || item.needsAuth ? 'opacity-75' : ''}`}
                  onClick={() => (item.active && !item.needsAuth) && setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                  {item.needsAuth && (
                    <span className="text-xs text-sky-500">需要登录</span>
                  )}
                  {!item.active && (
                    <span className="badge badge-coming-soon text-xs">即将上线</span>
                  )}
                </Link>

                {item.children && (item.active || item.needsAuth) && (
                  <div className="ml-6 space-y-1">
                    {item.children.map((child) => (
                      false ? ( // DEBUG模式: 移除"需要登录"的显示
                        <div
                          key={child.name}
                          className="block px-3 py-2 rounded-md text-sm text-gray-400 cursor-not-allowed"
                        >
                          <div className="flex items-center justify-between">
                            <span>{child.name}</span>
                            <span className="text-xs text-sky-500">需要登录</span>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block px-3 py-2 rounded-md text-sm ${
                            child.active
                              ? `text-gray-600 hover:text-ski-blue hover:bg-gray-50 ${
                                  pathname === child.href ? 'text-ski-blue bg-ski-ice font-medium' : ''
                                }`
                              : 'text-gray-400 cursor-not-allowed'
                          }`}
                          onClick={() => child.active && setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <span>{child.name}</span>
                            {!child.active && (
                              <span className="badge badge-coming-soon text-xs">即将上线</span>
                            )}
                          </div>
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Auth Links */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              {user ? (
                <>
                  <div className="px-3 py-2 mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-ski-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.username}</div>
                        <div className="text-xs text-gray-500">{getRoleDisplayName(user.role)}</div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Settings className="h-5 w-5" />
                    <span>个人设置</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 w-full text-left mt-2"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>退出登录</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5" />
                    <span>登录</span>
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium bg-ski-blue text-white hover:bg-ski-blue/90 mt-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    <span>注册</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}