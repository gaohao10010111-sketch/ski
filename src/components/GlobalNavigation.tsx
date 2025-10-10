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
  FileText
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DisciplineSwitcher from '@/components/DisciplineSwitcher';

export default function GlobalNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
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

  // 全局菜单项（跨项目功能）
  const globalMenuItems = [
    {
      name: t.navigation?.my || '我的',
      href: '/my',
      icon: User,
      children: [
        { name: '个人中心', href: '/my' },
        { name: '我的积分', href: '/my/points' },
        { name: '我的报名', href: '/my/registrations' },
        { name: '运动员资料', href: '/my/athlete' },
        { name: '成绩历史', href: '/my/history' }
      ]
    },
    {
      name: t.navigation?.docs || '文档',
      href: '/docs',
      icon: FileText,
      children: [
        { name: '系统介绍', href: '/docs/guide' },
        { name: '积分规则', href: '/docs/points-rules' },
        { name: '竞赛规则', href: '/docs/competition-rules' },
        { name: '场地标准', href: '/docs/venue-standards' }
      ]
    }
  ];

  return (
    <>
      {/* 顶部导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Mountain className="h-8 w-8 text-ski-blue" />
                <span className="text-lg lg:text-xl font-bold text-ski-navy">
                  <span className="hidden xl:inline">
                    {language === 'zh' ? t.navigation?.title : t.navigation?.titleShort}
                  </span>
                  <span className="xl:hidden">
                    {language === 'zh'
                      ? (t.navigation?.title?.length > 12 ? t.navigation.title.substring(0, 12) + '...' : t.navigation?.title)
                      : t.navigation?.titleShort
                    }
                  </span>
                </span>
              </Link>
            </div>

            {/* Desktop Global Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {globalMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname?.startsWith(item.href);

                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3" />
                    </Link>

                    {/* 下拉菜单 */}
                    {item.children && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
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
                    )}
                  </div>
                );
              })}
            </div>

            {/* Auth & Language */}
            <div className="hidden md:flex items-center space-x-4 whitespace-nowrap">
              <LanguageSwitcher />
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
                    className="flex items-center space-x-1 text-gray-700 hover:text-ski-blue px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>{t.common?.login || '登录'}</span>
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center space-x-1 bg-ski-blue text-white hover:bg-ski-blue/90 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                  >
                    <User className="h-4 w-4" />
                    <span>{t.common?.register || '注册'}</span>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-ski-blue p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 项目切换器 */}
      <DisciplineSwitcher />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 fixed top-16 left-0 right-0 z-40 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {globalMenuItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
                {item.children && (
                  <div className="ml-6 space-y-1">
                    {item.children.map((child) => (
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
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5" />
                    <span>{t.common?.login || '登录'}</span>
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium bg-ski-blue text-white hover:bg-ski-blue/90 mt-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    <span>{t.common?.register || '注册'}</span>
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
