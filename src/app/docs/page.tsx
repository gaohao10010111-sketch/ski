'use client'

import Link from 'next/link'
import { FileText, BookOpen, Award, Globe, HelpCircle, ArrowRight } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

const categoryConfigs = [
  {
    key: 'pointsRules',
    icon: Award,
    href: '/docs/points-rules',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    key: 'competitionRules',
    icon: BookOpen,
    href: '/docs/competition-rules',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    key: 'venueStandards',
    icon: FileText,
    href: '/docs/venue-standards',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    key: 'fisRules',
    icon: Globe,
    href: '/docs/fis-rules',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    key: 'guide',
    icon: HelpCircle,
    href: '/docs/guide',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
]

const popularDocConfigs = [
  { key: 'alpineRulesV4', views: 1520 },
  { key: 'seasonGrading', views: 980 },
  { key: 'youthSeries', views: 756 },
  { key: 'fisPointsGuide', views: 645 }
]

export default function DocsPage() {
  const { t } = useTranslation()
  const i18n = t.docsPage || {}

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ski-navy mb-2">{i18n.hero?.title || 'Knowledge Base'}</h1>
          <p className="text-gray-600">{i18n.hero?.description || 'Competition rules, technical standards, and platform user guides'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryConfigs.map((category) => {
            const categories = i18n.categories as Record<string, Record<string, unknown>> | undefined
            const translation = categories?.[category.key] || {}
            const topics = (translation.topics || []) as string[]

            return (
              <Link
                key={category.key}
                href={category.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{String(translation.title || 'Docs Category')}</h3>
                <p className="text-sm text-gray-600 mb-4">{String(translation.description || '')}</p>
                <div className="space-y-1">
                  {topics.map((topic: string, index: number) => (
                    <div key={index} className="flex items-center text-xs text-gray-500">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-ski-blue text-sm font-medium">
                  {i18n.viewDocLabel || 'View document'}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-ski-navy mb-4">{i18n.popular?.title || 'Popular Documents'}</h2>
          <div className="space-y-3">
            {popularDocConfigs.map((doc) => {
              const popularItems = i18n.popular?.items as Record<string, Record<string, string>> | undefined
              const item = popularItems?.[doc.key] || {}
              return (
                <div key={doc.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">{item.title || 'Document title'}</div>
                      <div className="text-xs text-gray-500">{item.category || ''}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{doc.views} {i18n.popular?.viewsLabel || 'views'}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
