'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mountain, Snowflake } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';

// 四个项目配置
const disciplines = [
  {
    id: 'alpine',
    icon: Mountain,
    key: 'alpine',
    path: '/alpine',
    color: 'text-blue-600'
  },
  {
    id: 'snowboard-slopestyle',
    icon: Snowflake,
    key: 'snowboardSlopestyle',
    path: '/snowboard-slopestyle',
    color: 'text-purple-600'
  },
  {
    id: 'snowboard-parallel',
    icon: Snowflake,
    key: 'snowboardParallel',
    path: '/snowboard-parallel',
    color: 'text-indigo-600'
  },
  {
    id: 'freestyle-slopestyle',
    icon: Snowflake,
    key: 'freestyleSlopestyle',
    path: '/freestyle-slopestyle',
    color: 'text-cyan-600'
  }
];

export default function DisciplineSwitcher() {
  const pathname = usePathname();
  const { t } = useTranslation();

  // 判断当前激活的项目
  const getCurrentDiscipline = () => {
    for (const discipline of disciplines) {
      if (pathname?.startsWith(discipline.path)) {
        return discipline.id;
      }
    }
    return null;
  };

  const currentDiscipline = getCurrentDiscipline();

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto py-1.5 scrollbar-hide">
          {disciplines.map((discipline) => {
            const isActive = currentDiscipline === discipline.id;
            const Icon = discipline.icon;

            return (
              <Link
                key={discipline.id}
                href={discipline.path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? `${discipline.color} bg-white font-semibold shadow-sm`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="text-sm">
                  {t.navigation?.[discipline.key] || discipline.key}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
