'use client'

import Link from 'next/link'
import { FileText, BookOpen, Award, Globe, HelpCircle, ArrowRight } from 'lucide-react'

export default function DocsPage() {
  const docCategories = [
    {
      title: '积分规则文档',
      description: '中国滑雪积分计算规则详解',
      icon: Award,
      href: '/docs/points-rules',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      topics: ['积分计算公式', '赛事分级系数', '判罚分机制', 'BL/NL积分表']
    },
    {
      title: '竞赛技术规则',
      description: '滑雪竞赛技术规则和裁判标准',
      icon: BookOpen,
      href: '/docs/competition-rules',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      topics: ['比赛流程', '裁判规则', '计时系统', '申诉机制']
    },
    {
      title: '场地技术标准',
      description: '赛事场地设施和技术要求',
      icon: FileText,
      href: '/docs/venue-standards',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      topics: ['场地标准', '设施要求', '安全规范', '认证流程']
    },
    {
      title: 'FIS国际规则',
      description: '国际滑雪联合会竞赛规则',
      icon: Globe,
      href: '/docs/fis-rules',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      topics: ['FIS积分规则', 'ICR竞赛规则', '国际标准', '中英对照']
    },
    {
      title: '平台使用指南',
      description: '系统功能使用说明和常见问题',
      icon: HelpCircle,
      href: '/docs/guide',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      topics: ['注册流程', '报名指南', '积分查询', '常见问题']
    }
  ]

  const popularDocs = [
    { title: '中国高山滑雪积分规则v4.0', category: '积分规则', views: 1520 },
    { title: '2024-2025赛季赛事分级标准', category: '竞赛规则', views: 980 },
    { title: 'U系列青少年赛事管理办法', category: '竞赛规则', views: 756 },
    { title: 'FIS积分计算方法详解', category: 'FIS规则', views: 645 }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ski-navy mb-2">知识库</h1>
          <p className="text-gray-600">滑雪竞赛规则、技术标准、平台使用指南</p>
        </div>

        {/* 文档分类 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {docCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className={`h-6 w-6 ${category.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>
              <div className="space-y-1">
                {category.topics.map((topic, i) => (
                  <div key={i} className="flex items-center text-xs text-gray-500">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center text-ski-blue text-sm font-medium">
                查看文档
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* 热门文档 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-ski-navy mb-4">热门文档</h2>
          <div className="space-y-3">
            {popularDocs.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">{doc.title}</div>
                    <div className="text-xs text-gray-500">{doc.category}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{doc.views} 次查看</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}