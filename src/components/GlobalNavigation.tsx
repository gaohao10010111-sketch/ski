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
  Search
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface NavigationItem {
  key: string;
  name: string;
  href: string;
  icon?: LucideIcon;
  highlighted?: boolean;
  children?: Array<{ key: string; name: string; href: string }>;
}

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
    const roleMap: Record<string, string> = {
      admin: t.auth?.roles?.admin || 'Administrator',
      coach: t.auth?.roles?.coach || 'Coach',
      athlete: t.auth?.roles?.athlete || 'Athlete',
      user: t.auth?.roles?.user || 'User'
    };

    return roleMap[role] || roleMap.user;
  };

  const currentDiscipline = pathname?.startsWith('/alpine')
    ? 'alpine'
    : pathname?.startsWith('/snowboard-slopestyle')
    ? 'snowboard-slopestyle'
    : pathname?.startsWith('/snowboard-parallel')
    ? 'snowboard-parallel'
    : pathname?.startsWith('/freestyle-slopestyle')
    ? 'freestyle-slopestyle'
    : null;

  const getCurrentDisciplineName = () => {
    switch (currentDiscipline) {
      case 'alpine':
        return t.navigation?.alpine || 'Alpine Skiing';
      case 'snowboard-slopestyle':
        return t.navigation?.snowboardSlopestyle || 'Snowboard Slopestyle';
      case 'snowboard-parallel':
        return t.navigation?.snowboardParallel || 'Snowboard Parallel';
      case 'freestyle-slopestyle':
        return t.navigation?.freestyleSlopestyle || 'Freestyle Slopestyle';
      default:
        return t.navigation?.disciplines || 'Disciplines';
    }
  };

  const globalMenuItems: NavigationItem[] = [
    {
      key: 'about',
      name: t.navigation?.about || 'About',
      href: '/about',
      icon: Info
    },
    {
      key: 'docs',
      name: t.navigation?.docs || 'Docs',
      href: '/rules',
      icon: FileText
    },
    {
      key: 'profile',
      name: t.navigation?.submenus?.myProfile || t.common?.profile || 'Profile',
      href: '/profile',
      icon: User
    }
  ];

  const secondaryMenuItems: NavigationItem[] = [
    {
      key: 'disciplines',
      name: t.navigation?.disciplines || 'Disciplines',
      href: '#',
      icon: Mountain,
      highlighted: true,
      children: [
        { key: 'alpine', name: t.navigation?.alpine || 'Alpine Skiing', href: '/alpine' },
        { key: 'snowboard-slopestyle', name: t.navigation?.snowboardSlopestyle || 'Snowboard Slopestyle', href: '/snowboard-slopestyle' },
        { key: 'snowboard-parallel', name: t.navigation?.snowboardParallel || 'Snowboard Parallel', href: '/snowboard-parallel' },
        { key: 'freestyle-slopestyle', name: t.navigation?.freestyleSlopestyle || 'Freestyle Slopestyle', href: '/freestyle-slopestyle' }
      ]
    },
    { key: 'home', name: t.common?.home || 'Home', href: '/', icon: Home },
    { key: 'schedule', name: t.navigation?.submenus?.eventsSchedule || 'Schedule', href: '/competitions/schedule', icon: Calendar },
    { key: 'live-results', name: t.navigation?.submenus?.resultsLive || 'Live Results', href: '/competitions', icon: Trophy },
    { key: 'athletes', name: t.navigation?.athletes || 'Athletes', href: '/athletes', icon: Users },
    {
      key: 'more',
      name: t.navigation?.submenus?.moreFeatures || 'More',
      href: '#',
      icon: Menu,
      children: [
        { key: 'points-rankings', name: t.navigation?.submenus?.pointsRankings || 'Rankings', href: '/points/rankings' },
        { key: 'points-calculator', name: t.navigation?.submenus?.pointsCalculator || 'Calculator', href: '/points/calculator' },
        { key: 'points-trends', name: t.navigation?.submenus?.pointsTrends || 'Trends', href: '/points/trends' },
        { key: 'results-query', name: t.navigation?.submenus?.eventsResults || 'Results', href: '/results-query' },
        { key: 'events-register', name: t.navigation?.submenus?.eventsRegister || 'Register', href: '/registration/online' },
        { key: 'events-stats', name: t.navigation?.submenus?.eventsStats || 'Statistics', href: '/competitions/stats' },
        { key: 'results-import', name: t.navigation?.submenus?.resultsImport || 'Import Results', href: '/results-import' },
        { key: 'results-announcement', name: t.navigation?.submenus?.resultsAnnouncement || 'Results Announcement', href: '/results-announcement' }
      ]
    }
  ];

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px]">
          <div className="flex justify-between h-14">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
                <Mountain className="h-6 w-6 text-ski-blue" />
                <span className="text-base lg:text-lg font-bold text-ski-navy">
                  {language === 'zh'
                    ? t.navigation?.title || '中国滑雪积分系统'
                    : t.navigation?.titleShort || 'China Ski Points'}
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                {globalMenuItems.map((item) => {
                  const isActive = pathname?.startsWith(item.href) && item.href !== '#';
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded text-sm font-medium transition-colors ${
                        item.highlighted
                          ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                          : isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center space-x-2 whitespace-nowrap">
                <LanguageSwitcher />
                {isLoading ? (
                  <div className="animate-pulse bg-gray-200 h-7 w-16 rounded" />
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
                            {t.common?.profile || 'Profile'}
                          </div>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50"
                        >
                          <div className="flex items-center">
                            <LogOut className="h-4 w-4 mr-2" />
                            {t.common?.logout || 'Logout'}
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
                      {t.common?.login || 'Login'}
                    </Link>
                    <Link
                      href="/register"
                      className="bg-ski-blue text-white hover:bg-ski-blue/90 px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors"
                    >
                      {t.common?.register || 'Register'}
                    </Link>
                  </>
                )}
              </div>
            </div>

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

      <nav className="bg-gray-50 border-b border-gray-200 sticky top-14 z-40">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px]">
          <div className="hidden md:flex items-center justify-end space-x-2 h-10">
            {secondaryMenuItems.map((item) => {
              const isActive = item.href !== '#' && (pathname === item.href || pathname?.startsWith(item.href));
              const hasChildren = Boolean(item.children?.length);
              const Icon = item.icon;
              const isDisciplineMenu = item.key === 'disciplines';
              const dropdownKey = `secondary-${item.key}`;

              return (
                <div
                  key={item.key}
                  className={`relative ${item.highlighted && isDisciplineMenu ? 'pr-2 mr-2 border-r border-gray-300' : ''}`}
                  onMouseEnter={() => hasChildren && setActiveDropdown(dropdownKey)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  {hasChildren ? (
                    <>
                      <button
                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                          item.highlighted
                            ? 'bg-ski-blue text-white hover:bg-ski-blue/90 shadow-sm'
                            : isActive
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                      >
                        {Icon && <Icon className="w-3 h-3" />}
                        <span>{isDisciplineMenu ? getCurrentDisciplineName() : item.name}</span>
                        <ChevronDown className="w-2.5 h-2.5" />
                      </button>

                      {activeDropdown === dropdownKey && (
                        <div className="absolute left-0 top-full pt-2 z-50">
                          <div className="w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.key}
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

            <button
              className="flex items-center justify-center p-1.5 rounded text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label={t.common?.search || 'Search'}
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 fixed top-14 left-0 right-0 z-40 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-3rem)] overflow-y-auto">
            <div className="border-b border-gray-200 pb-2 mb-2">
              {globalMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.key}
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

            {secondaryMenuItems.map((item) => {
              const Icon = item.icon;
              const hasChildren = Boolean(item.children?.length);

              if (hasChildren) {
                return (
                  <div key={item.key}>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {item.name}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.children?.map((child) => (
                        <Link
                          key={child.key}
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
                  key={item.key}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.name}
                </Link>
              );
            })}

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
                    <span>{t.common?.profile || 'Profile'}</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 w-full text-left mt-2"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>{t.common?.logout || 'Logout'}</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ski-blue hover:bg-gray-50 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.common?.login || 'Login'}
                  </Link>
                  <Link
                    href="/register"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-ski-blue text-white hover:bg-ski-blue/90 mt-2 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.common?.register || 'Register'}
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
