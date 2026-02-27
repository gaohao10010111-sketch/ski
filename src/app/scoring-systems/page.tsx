'use client'

import Link from 'next/link'
import {
  Mountain,
  Snowflake,
  Trophy,
  Target,
  ArrowRight,
  Calculator,
  FileText,
  Award,
  TrendingUp,
  Users
} from 'lucide-react'

const scoringSystems = [
  {
    id: 'alpine',
    name: '高山滑雪积分体系',
    subtitle: 'Alpine Ski Points System v4.0',
    description: '基于时间差的积分计算，支持A/B/C三级赛事系数，包含判罚分和伤病保护机制。',
    icon: Mountain,
    color: 'blue',
    formula: 'P = F × (Tx/To - 1) × 赛事系数',
    features: ['时间基础计算', 'A/B/C级系数', '判罚分机制', '伤病保护'],
    href: '/alpine'
  },
  {
    id: 'snowboard-slopestyle',
    name: '单板坡面障碍技巧/大跳台',
    subtitle: 'Snowboard Slopestyle & Big Air',
    description: '基于排名的积分分配，采用360/240/120分档体系，评分转排名计算。',
    icon: Snowflake,
    color: 'purple',
    formula: '积分 = 分档积分表[排名]',
    features: ['排名积分制', '360/240/120分档', '评分转排名', '最佳两轮平均'],
    href: '/snowboard-slopestyle'
  },
  {
    id: 'snowboard-parallel',
    name: '单板平行项目',
    subtitle: 'Snowboard Parallel Events',
    description: '竞速时间积分结合淘汰赛制，PGS和PSL双项目独立排名。',
    icon: Snowflake,
    color: 'indigo',
    formula: '积分 = 基础分 × 轮次系数',
    features: ['时间竞速', '淘汰赛制', 'PGS/PSL分项', '独立排名'],
    href: '/snowboard-parallel'
  },
  {
    id: 'freestyle-slopestyle',
    name: '自由式坡面障碍技巧/大跳台',
    subtitle: 'Freestyle Slopestyle & Big Air',
    description: '技巧难度系数评分，采用统一360分制积分表，支持Jumps和Rails分项。',
    icon: Snowflake,
    color: 'cyan',
    formula: '积分 = 分档积分表[排名]',
    features: ['技巧评分', '难度系数', 'Jumps/Rails分项', '360分制'],
    href: '/freestyle-slopestyle'
  }
]

const commonFeatures = [
  {
    icon: TrendingUp,
    title: '积分延续机制',
    description: '上赛季积分×50%自动延续至新赛季'
  },
  {
    icon: Award,
    title: 'BL/NL双积分',
    description: '基础分(BL)与赛季滚动分(NL)双重计算'
  },
  {
    icon: Users,
    title: 'U系列年龄分组',
    description: 'U11/U15/U18自动分组，独立排名'
  },
  {
    icon: FileText,
    title: '统一规则标准',
    description: '符合中国滑雪协会官方积分规则'
  }
]

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    hover: 'hover:border-blue-400'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    hover: 'hover:border-purple-400'
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    hover: 'hover:border-indigo-400'
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
    hover: 'hover:border-cyan-400'
  }
}

export default function ScoringSystemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ski-blue to-blue-700 rounded-full mb-4 shadow-lg">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-ski-navy mb-3">积分体系总览</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          中国滑雪积分系统支持四大项目的积分计算，每个项目采用专门设计的积分规则
        </p>
      </div>

      {/* 四大积分体系 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {scoringSystems.map((system) => {
          const Icon = system.icon
          const colors = colorClasses[system.color as keyof typeof colorClasses]

          return (
            <Link
              key={system.id}
              href={system.href}
              className={`block p-6 rounded-xl border-2 ${colors.border} ${colors.bg} ${colors.hover} transition-all hover:shadow-lg group`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-ski-blue transition-colors">
                    {system.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{system.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-3">{system.description}</p>

                  {/* 计算公式 */}
                  <div className="bg-white/80 rounded-lg p-2 mb-3">
                    <code className="text-xs font-mono text-gray-700">{system.formula}</code>
                  </div>

                  {/* 特性标签 */}
                  <div className="flex flex-wrap gap-1">
                    {system.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 text-xs rounded-full ${colors.bg} ${colors.text}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </Link>
          )
        })}
      </div>

      {/* 通用机制 */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-ski-navy mb-6 text-center">通用积分机制</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commonFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white rounded-lg p-5 shadow-sm">
                <Icon className="w-8 h-8 text-ski-blue mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* 快速操作 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/points/calculator"
          className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-ski-blue hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Calculator className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-ski-blue">积分计算器</h3>
            <p className="text-sm text-gray-500">在线计算各项目积分</p>
          </div>
        </Link>

        <Link
          href="/rules/points"
          className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-ski-blue hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-ski-blue">积分规则详解</h3>
            <p className="text-sm text-gray-500">查看完整规则文档</p>
          </div>
        </Link>

        <Link
          href="/points/rankings"
          className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-ski-blue hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-ski-blue">积分排名榜</h3>
            <p className="text-sm text-gray-500">查看各项目积分排名</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
