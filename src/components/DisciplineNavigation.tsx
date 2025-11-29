'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calculator, Trophy, Users, FileText, Mountain } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';

interface DisciplineNavigationProps {
  discipline: string; // 'alpine' | 'snowboard-slopestyle' | 'snowboard-parallel' | 'freestyle-slopestyle'
}

export default function DisciplineNavigation({ discipline }: DisciplineNavigationProps) {
  const pathname = usePathname();
  const { t } = useTranslation();

  // 项目名称映射
  const disciplineNames: { [key: string]: string } = {
    'alpine': t.navigation?.alpine || '高山滑雪',
    'snowboard-slopestyle': t.navigation?.snowboardSlopestyle || '单板坡面障碍技巧',
    'snowboard-parallel': t.navigation?.snowboardParallel || '单板平行项目',
    'freestyle-slopestyle': t.navigation?.freestyleSlopestyle || '自由式坡面障碍技巧'
  };

  const disciplineName = disciplineNames[discipline] || discipline;

  // 每个项目的二级菜单结构（统一模板）- 链接到现有页面
  const navigationItems = [
    {
      name: t.navigation?.points || '积分管理',
      href: `/points/rankings?discipline=${discipline}`,
      icon: Calculator,
      children: [
        { name: t.navigation?.submenus?.pointsRankings || '积分排名', href: `/${discipline}/points/rankings` },
        { name: t.navigation?.submenus?.pointsTrends || '积分趋势', href: `/points/trends?discipline=${discipline}` }
      ]
    },
    {
      name: t.navigation?.events || '赛事管理',
      href: '/competitions',
      icon: Trophy,
      children: [
        { name: t.navigation?.submenus?.eventsSchedule || '赛程日历', href: '/competitions/schedule' },
        { name: t.navigation?.submenus?.eventsResults || '比赛成绩', href: '/competitions' },
        { name: t.navigation?.submenus?.eventsStats || '赛事统计', href: '/competitions/stats' }
      ]
    },
    {
      name: t.navigation?.athletes || '运动员',
      href: '/athletes',
      icon: Users,
      children: [
        { name: t.navigation?.submenus?.athletesList || '运动员查询', href: '/athletes' },
        { name: t.navigation?.submenus?.athletesRankings || '积分排名', href: `/points/rankings?discipline=${discipline}` }
      ]
    },
    {
      name: t.navigation?.docs || '规则文档',
      href: '/rules',
      icon: FileText,
      children: [
        { name: t.navigation?.submenus?.pointsRules || '积分规则', href: '/rules/points' },
        { name: t.navigation?.submenus?.competitionRules || '竞赛规则', href: '/rules' },
        { name: t.navigation?.submenus?.documents || '文档中心', href: '/docs' }
      ]
    }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-6 overflow-x-auto scrollbar-hide py-2">
          {/* 当前项目名称（面包屑样式） */}
          <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 whitespace-nowrap border-r border-gray-300 pr-6">
            <Mountain className="w-3.5 h-3.5 text-blue-600" />
            <span>{disciplineName}</span>
          </div>

          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname?.startsWith(item.href);

            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
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
