'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calculator, Trophy, Users, FileText } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';

interface DisciplineNavigationProps {
  discipline: string; // 'alpine' | 'snowboard-slopestyle' | 'snowboard-parallel' | 'freestyle-slopestyle'
}

export default function DisciplineNavigation({ discipline }: DisciplineNavigationProps) {
  const pathname = usePathname();
  const { t } = useTranslation();

  // 每个项目的二级菜单结构（统一模板）
  const navigationItems = [
    {
      name: t.navigation?.points || '积分管理',
      href: `/${discipline}/points`,
      icon: Calculator,
      children: [
        { name: t.navigation?.submenus?.pointsCalculator || '积分计算器', href: `/${discipline}/points/calculator` },
        { name: t.navigation?.submenus?.pointsRankings || '积分排名', href: `/${discipline}/points/rankings` },
        { name: t.navigation?.submenus?.pointsTrends || '积分趋势', href: `/${discipline}/points/trends` }
      ]
    },
    {
      name: t.navigation?.events || '赛事管理',
      href: `/${discipline}/events`,
      icon: Trophy,
      children: [
        { name: t.navigation?.submenus?.eventsSchedule || '赛程日历', href: `/${discipline}/events/schedule` },
        { name: t.navigation?.submenus?.eventsRegister || '在线报名', href: `/${discipline}/events/register` },
        { name: t.navigation?.submenus?.eventsResults || '实时成绩', href: `/${discipline}/events/results` },
        { name: t.navigation?.submenus?.eventsStats || '赛事统计', href: `/${discipline}/events/stats` }
      ]
    },
    {
      name: t.navigation?.athletes || '运动员',
      href: `/${discipline}/athletes`,
      icon: Users,
      children: [
        { name: '运动员名录', href: `/${discipline}/athletes/list` },
        { name: '运动员排名', href: `/${discipline}/athletes/rankings` },
        { name: '运动员统计', href: `/${discipline}/athletes/stats` }
      ]
    },
    {
      name: t.navigation?.docs || '规则文档',
      href: `/${discipline}/docs`,
      icon: FileText,
      children: [
        { name: '积分规则', href: `/${discipline}/docs/points-rules` },
        { name: '竞赛规则', href: `/${discipline}/docs/competition-rules` },
        { name: '场地标准', href: `/${discipline}/docs/venue-standards` }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8 overflow-x-auto scrollbar-hide py-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname?.startsWith(item.href);

            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>

                {/* 子菜单悬浮显示 */}
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
        </nav>
      </div>
    </div>
  );
}
