'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Menu,
  X,
  Mountain,
  ChevronDown,
  LogIn,
  User,
  LogOut,
  Settings,
  FileText,
  Trophy,
  Users,
  Info,
  Calendar,
  Home,
  TrendingUp,
  BarChart3,
  Search
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function GlobalNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isLoading } = useAuth();
  const { t, language } = useTranslation();

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    router.push('/');
  };

  const getRoleDisplayName = (role: string) => {
    const roleMap: { [key: string]: string } = {
      admin: '管理员',
      coach: '教练员',
      athlete: '运动员',
      user: '用户'
    };
    return roleMap[role] || '用户';
  };

  // 判断当前在哪个项目页面
  const currentDiscipline = pathname?.startsWith('/alpine') ? 'alpine'
    : pathname?.startsWith('/snowboard-slopestyle') ? 'snowboard-slopestyle'
    : pathname?.startsWith('/snowboard-parallel') ? 'snowboard-parallel'
    : pathname?.startsWith('/freestyle-slopestyle') ? 'freestyle-slopestyle'
    : null;

  // 🎯 第一层 - 平台级服务 (Platform Services - 参考FIS架构)
  // 纯平台级功能，不涉及具体业务内容，无下拉菜单保持简洁
  const globalMenuItems = [
    {
      name: '系统介绍',
      href: '/about',
      icon: Info
    },
    {
      name: '规则文档',
      href: '/rules',
      icon: FileText
    },
    {
      name: '个人中心',
      href: '/profile',
      icon: User
    }
  ];

  // 🎯 第二层 - 内容功能导航 (Content/Functional Navigation - 参考FIS架构)
  // 固定不变，不随页面变化，项目切换优先，高频功能直接显示，中低频功能收入More
  const secondaryMenuItems = [
    // 🌟 项目切换下拉 - 首位最重要！（学习FIS的"All Disciplines▼"）
    {
      name: '项目',
      href: '#',
      icon: Mountain,
      highlighted: true,  // 视觉突出
      children: [
        { name: '高山滑雪', href: '/alpine' },
        { name: '单板坡面障碍技巧', href: '/snowboard-slopestyle' },
        { name: '单板平行项目', href: '/snowboard-parallel' },
        { name: '自由式坡面障碍技巧', href: '/freestyle-slopestyle' }
      ]
    },
    // 高频核心功能 - 直接显示 (4项)
    { name: '首页', href: '/', icon: Home },
    { name: '赛事日历', href: '/competitions/schedule', icon: Calendar },
    { name: '实时成绩', href: '/competitions', icon: Trophy },
    { name: '运动员', href: '/athletes', icon: Users },
    // More下拉 - 中低频功能 (8项)
    {
      name: '更多功能',
      href: '#',
      icon: Menu,
      children: [
        { name: '积分排名', href: '/points/rankings' },
        { name: '积分计算', href: '/points/calculator' },
        { name: '积分趋势', href: '/points/trends' },
        { name: '成绩查询', href: '/results-query' },
        { name: '赛事报名', href: '/registration/online' },
        { name: '数据统计', href: '/competitions/stats' },
        { name: '成绩录入', href: '/results-import' },
        { name: '成绩发布', href: '/results-announcement' }
      ]
    }
  ];

  return (
    <>
      {/* 第一行 - 全局导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px]">
          <div className="flex justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
                <Mountain className="h-6 w-6 text-ski-blue" />
                <span className="text-base lg:text-lg font-bold text-ski-navy">
                  {language === 'zh' ? '中国滑雪积分系统' : 'China Ski Points'}
                </span>
              </Link>
            </div>

            {/* 右侧区域：导航菜单 + Auth & Language */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Desktop Global Menu */}
              <div className="flex items-center space-x-2">
                {globalMenuItems.map((item) => {
                  const isActive = pathname?.startsWith(item.href) && item.href !== '#';
                  const isHighlighted = (item as any).highlighted;
                  const Icon = (item as any).icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded text-sm font-medium transition-colors ${
                        isHighlighted
                          ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                          : isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Auth & Language */}
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <LanguageSwitcher />
                {isLoading ? (
                  <div className="animate-pulse bg-gray-200 h-7 w-16 rounded"></div>
                ) : user ? (
                  <div className="relative">
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center space-x-1.5 text-gray-700 hover:text-ski-blue px-2.5 py-1.5 rounded text-sm font-medium"
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm max-w-[100px] truncate">{user.username}</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>

                    {userMenuOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <div className="text-sm font-medium text-gray-900">{user.username}</div>
                          <div className="text-xs text-gray-500 truncate">{user.email}</div>
                          <div className="text-xs text-ski-blue">{getRoleDisplayName(user.role)}</div>
                        </div>
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Settings className="h-4 w-4 mr-2" />
                            {t.common?.profile || '个人设置'}
                          </div>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50"
                        >
                          <div className="flex items-center">
                            <LogOut className="h-4 w-4 mr-2" />
                            {t.common?.logout || '退出登录'}
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-gray-700 hover:text-ski-blue px-2.5 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors"
                    >
                      {t.common?.login || '登录'}
                    </Link>
                    <Link
                      href="/register"
                      className="bg-ski-blue text-white hover:bg-ski-blue/90 px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors"
                    >
                      {t.common?.register || '注册'}
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-1.5">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-ski-blue p-1.5"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 第二行 - 功能导航栏 */}
      <nav className="bg-gray-50 border-b border-gray-200 sticky top-14 z-40">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px]">
          <div className="hidden md:flex items-center justify-end space-x-2 h-10">
            {secondaryMenuItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '#' && pathname?.startsWith(item.href));
              const isOpen = activeDropdown === `secondary-${item.name}`;
              const hasChildren = item.children && item.children.length > 0;
              const isHighlighted = (item as any).highlighted;  // 检查是否突出显示
              const Icon = (item as any).icon;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveDropdown(`secondary-${item.name}`)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  {hasChildren ? (
                    // 有子菜单的按钮
                    <>
                      <button
                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                          isHighlighted
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                            : isActive
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                      >
                        {Icon && <Icon className="w-3 h-3" />}
                        <span>{item.name}</span>
                        <ChevronDown className="w-2.5 h-2.5" />
                      </button>

                      {/* 下拉菜单 */}
                      {isOpen && (
                        <div className="absolute left-0 top-full pt-2 z-50">
                          <div className="w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  pathname === child.href
                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    // 直接链接
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      }`}
                    >
                      {Icon && <Icon className="w-3 h-3" />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              );
            })}

            {/* 搜索按钮 - 学习FIS */}
            <button
              className="flex items-center justify-center p-1.5 rounded text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label="搜索"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 fixed top-14 left-0 right-0 z-40 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-3rem)] overflow-y-auto">
            {/* 第一层菜单 */}
            <div className="border-b border-gray-200 pb-2 mb-2">
              {globalMenuItems.map((item) => {
                const Icon = (item as any).icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* 第二层菜单 */}
            {secondaryMenuItems.map((item) => {
              const Icon = (item as any).icon;
              const hasChildren = item.children && item.children.length > 0;

              if (hasChildren) {
                return (
                  <div key={item.name}>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {item.name}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child: any) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-ski-blue hover:bg-gray-50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.name}
                </Link>
              );
            })}

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
                      handleLogout();
                      setIsMobileMenuOpen(false);
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
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.common?.login || '登录'}
                  </Link>
                  <Link
                    href="/register"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-ski-blue text-white hover:bg-ski-blue/90 mt-2 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.common?.register || '注册'}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
