'use client';

import Link from 'next/link';
import { Mountain, Award, BarChart3, Target, RotateCcw } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';

const getIconComponent = (iconType: string) => {
  const iconProps = { className: "w-12 h-12 text-white" };
  switch (iconType) {
    case 'alpine':
      return <Mountain {...iconProps} />;
    case 'snowboard':
      return <Mountain {...iconProps} />;
    case 'freeski':
      return <Mountain {...iconProps} />;
    default:
      return <Mountain {...iconProps} />;
  }
};

export default function DisciplinesOverview() {
  const { t } = useTranslation();
  const page = t.disciplinesPage;
  const disciplines = page?.cardsSection?.cards ?? [];
  const continuationCards = page?.continuation?.cards ?? [];
  const highlights = page?.highlights?.items ?? [];

  const accentStyles: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' }
  };

  const highlightStyles: Record<
    string,
    { Icon: typeof Award; bg: string; text: string }
  > = {
    award: { Icon: Award, bg: 'bg-yellow-100', text: 'text-yellow-600' },
    barChart: { Icon: BarChart3, bg: 'bg-blue-100', text: 'text-blue-600' },
    target: { Icon: Target, bg: 'bg-green-100', text: 'text-green-600' },
    rotateCcw: { Icon: RotateCcw, bg: 'bg-purple-100', text: 'text-purple-600' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* 头部横幅 */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 返回首页导航 */}
          <div className="flex items-center justify-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {page?.hero?.backLabel ?? t.common.back}
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {page?.hero?.title ?? t.navigation?.title ?? ''}
          </h1>
          <p className="text-xl text-center text-blue-200">
            {page?.hero?.subtitle ?? ''}
          </p>
        </div>
      </div>

      {/* 项目积分体系说明 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ski-navy mb-2">{page?.continuation?.title}</h3>
            <p className="text-gray-600">{page?.continuation?.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {continuationCards.map((card) => {
              const accent = accentStyles[card.accent ?? 'blue'] ?? accentStyles.blue;
              return (
                <div key={card.id} className="text-center bg-white rounded-lg p-6 shadow-sm">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${accent.bg}`}>
                    <span className={`text-xl font-bold ${accent.text}`}>{card.value}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 项目卡片网格 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-3xl font-bold text-ski-navy text-center mb-8">{page?.cardsSection?.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((discipline) => (
            <Link
              key={discipline.id}
              href={`/disciplines/${discipline.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-2">
                {/* 渐变头部 */}
                <div className={`bg-gradient-to-r ${discipline.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-2">{getIconComponent(discipline.icon)}</div>
                      <h2 className="text-2xl font-bold mb-1">{discipline.name}</h2>
                      <p className="text-sm opacity-90">{discipline.nameEn}</p>
                    </div>
                    <div className="text-white/50 group-hover:text-white transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 内容区域 */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{discipline.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {discipline.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    {page?.cardsSection?.ctaLabel}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 系统特点 */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {page?.highlights?.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const style = highlightStyles[item.icon ?? 'award'] ?? highlightStyles.award;
              const IconComponent = style.Icon;
              return (
                <div key={item.id} className="text-center">
                  <div className={`w-12 h-12 ${style.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <IconComponent className={`h-6 w-6 ${style.text}`} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
