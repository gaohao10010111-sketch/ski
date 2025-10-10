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

  // 全局菜单项（跨项目功能）- FIS风格简化
  const globalMenuItems = [
    {
      name: t.navigation?.my || '我的',
      href: '/my',
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
          <div className="flex justify-between h-12">
            {/* Logo - FIS风格极简设计 */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity">
                <Mountain className="h-5 w-5 text-ski-blue" />
                <span className="text-sm font-bold text-ski-navy tracking-tight">
                  {language === 'zh' ? '滑雪积分' : 'Ski Points'}
                </span>
              </Link>
            </div>

            {/* Desktop Global Menu - FIS风格文字菜单 */}
            <div className="hidden md:flex items-center space-x-0.5">
              {globalMenuItems.map((item) => {
                const isActive = pathname?.startsWith(item.href);

                return (
                  <div key={item.name} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium transition-colors ${
                        isActive
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.children && <ChevronDown className="w-3 h-3" />}
                    </button>

                    {/* 下拉菜单 - FIS风格 */}
                    {item.children && (
                      <div className="absolute left-0 mt-1 w-44 bg-white rounded shadow-lg border border-gray-200 py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-1.5 text-xs transition-colors ${
                              pathname === child.href
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
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

            {/* Auth & Language - FIS风格精简 */}
            <div className="hidden md:flex items-center space-x-1.5 whitespace-nowrap">
              <LanguageSwitcher />
              <div className="w-px h-4 bg-gray-300"></div>
              {isLoading ? (
                <div className="animate-pulse bg-gray-200 h-6 w-14 rounded"></div>
              ) : user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 px-2 py-1 text-xs font-medium"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span className="max-w-[80px] truncate">{user.username}</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg border border-gray-200 py-1 z-50">
                      <div className="px-3 py-2 border-b border-gray-100">
                        <div className="text-xs font-medium text-gray-900">{user.username}</div>
                        <div className="text-xs text-gray-500 truncate">{user.email}</div>
                        <div className="text-xs text-blue-600">{getRoleDisplayName(user.role)}</div>
                      </div>
                      <Link
                        href="/profile"
                        className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <Settings className="h-3.5 w-3.5 mr-1.5" />
                          {t.common?.profile || '个人设置'}
                        </div>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-3 py-1.5 text-xs text-left text-red-600 hover:bg-red-50"
                      >
                        <div className="flex items-center">
                          <LogOut className="h-3.5 w-3.5 mr-1.5" />
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
                    className="text-gray-600 hover:text-blue-600 px-2 py-1 text-xs font-medium whitespace-nowrap"
                  >
                    {t.common?.login || '登录'}
                  </Link>
                  <Link
                    href="/register"
                    className="bg-blue-600 text-white hover:bg-blue-700 px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap"
                  >
                    {t.common?.register || '注册'}
                  </Link>
                </>
              )}
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

      {/* 项目切换器 */}
      <DisciplineSwitcher />

      {/* Mobile Menu - FIS风格优化 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 fixed top-12 left-0 right-0 z-40 shadow-lg">
          <div className="px-3 pt-2 pb-3 space-y-0.5 max-h-[calc(100vh-3rem)] overflow-y-auto">
            {globalMenuItems.map((item) => (
              <div key={item.name}>
                <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {item.name}
                </div>
                {item.children && (
                  <div className="space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-2 py-1.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Auth Links - FIS风格 */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              {user ? (
                <>
                  <div className="px-2 py-2 mb-1">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.username}</div>
                        <div className="text-xs text-gray-500">{getRoleDisplayName(user.role)}</div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    className="flex items-center space-x-2 px-2 py-1.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4" />
                    <span>个人设置</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded w-full text-left mt-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>退出登录</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-2 py-1.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.common?.login || '登录'}
                  </Link>
                  <Link
                    href="/register"
                    className="block px-2 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded mt-1 text-center"
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
