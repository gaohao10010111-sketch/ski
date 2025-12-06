'use client'

import { FileText, Download, Copy, CheckCircle, Book, ScrollText, Archive, Calculator, Trophy, Target } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function PointsRulesDocuments() {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(type)
      setTimeout(() => setCopiedText(''), 2000)
    } catch {
      // 复制失败时静默处理
    }
  }

  // 官方文档列表
  const officialDocuments = [
    {
      title: '中国高山滑雪赛事积分规则v4.0',
      description: '官方最新版积分计算规则，包含完整的公式、系数和计算方法',
      size: '2.3 MB',
      lastUpdated: '2024-06-15',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      title: '2025-2026赛季全国BA、SS青少年U系列比赛方案',
      description: '自由式和单板滑雪坡面障碍技巧、大跳台比赛官方方案',
      size: '1.8 MB',
      lastUpdated: '2024-07-01',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      title: '单板滑雪平行项目技术规范',
      description: '平行大回转和平行回转项目的技术标准和积分规则',
      size: '1.2 MB',
      lastUpdated: '2024-05-20',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      title: '场地技术标准手册',
      description: '三级场地标准详细规格，包含大跳台、坡面障碍技巧等',
      size: '3.1 MB',
      lastUpdated: '2024-04-10',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#'
    }
  ]

  // 技术公式库
  const technicalFormulas = [
    {
      category: '高山滑雪v4.0公式',
      formulas: [
        {
          name: '基础比赛积分',
          formula: 'P = F × (Tx/To - 1)',
          description: 'F=项目系数，Tx=运动员时间，To=获胜者时间'
        },
        {
          name: '判罚分计算',
          formula: 'Penalty = (Sum A + Sum B - Sum C) ÷ 10',
          description: 'Sum A=前10名最好5名积分和，Sum B=全体最好5名积分和，Sum C=对应基础积分和'
        },
        {
          name: '最终积分',
          formula: 'Final Points = (P + Penalty) × Race Coefficient',
          description: 'A级系数1.0，B级系数0.6，C级系数0.3'
        }
      ]
    },
    {
      category: '技巧项目积分公式',
      formulas: [
        {
          name: '分档积分分配',
          formula: 'Points = Tier Points × (Rank Percentage / 100)',
          description: '360/240/120分档，按排名百分比分配'
        },
        {
          name: '难度系数计算',
          formula: 'Multiplier = (Avg Difficulty / 10) × (Avg Execution / 10)',
          description: '自由式滑雪技巧难度系数，范围0.8-1.5'
        },
        {
          name: '赛季最佳积分',
          formula: 'Season Best = Average of Best 2 Results',
          description: '取赛季内最好两次成绩的平均值'
        }
      ]
    }
  ]

  // 统一积分表数据（四大项目通用）
  // 当次比赛成绩排名为50名以后、未完赛、因伤退出等情况，当次比赛积分为0
  const pointsAllocation = {
    tier360: [
      { rank: 1, points: 360 },
      { rank: 2, points: 329 },
      { rank: 3, points: 303 },
      { rank: 4, points: 280 },
      { rank: 5, points: 260 },
      { rank: 6, points: 242 },
      { rank: 7, points: 226 },
      { rank: 8, points: 212 },
      { rank: 9, points: 199 },
      { rank: 10, points: 187 }
    ],
    tier360Extended: [
      { rank: 11, points: 176 },
      { rank: 12, points: 166 },
      { rank: 13, points: 157 },
      { rank: 14, points: 149 },
      { rank: 15, points: 141 },
      { rank: 16, points: 134 },
      { rank: 17, points: 127 },
      { rank: 18, points: 121 },
      { rank: 19, points: 115 },
      { rank: 20, points: 110 },
      { rank: 21, points: 105 },
      { rank: 22, points: 100 },
      { rank: 23, points: 95 },
      { rank: 24, points: 91 },
      { rank: 25, points: 87 },
      { rank: 26, points: 83 },
      { rank: 27, points: 79 },
      { rank: 28, points: 75 },
      { rank: 29, points: 71 },
      { rank: 30, points: 67 },
      { rank: 31, points: 63 },
      { rank: 32, points: 59 },
      { rank: 33, points: 55 },
      { rank: 34, points: 51 },
      { rank: 35, points: 47 },
      { rank: 36, points: 43 },
      { rank: 37, points: 39 },
      { rank: 38, points: 35 },
      { rank: 39, points: 31 },
      { rank: 40, points: 27 },
      { rank: 41, points: 24 },
      { rank: 42, points: 21 },
      { rank: 43, points: 18 },
      { rank: 44, points: 15 },
      { rank: 45, points: 12 },
      { rank: 46, points: 9 },
      { rank: 47, points: 6 },
      { rank: 48, points: 3 },
      { rank: 49, points: 2 },
      { rank: 50, points: 1 }
    ]
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-ski-navy mb-4">
          积分规则技术文档
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          官方积分计算规则、技术公式、标准文档和参考资料
        </p>
      </div>

      {/* 快速导航 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Book className="h-5 w-5 mr-2 text-blue-600" />
          快速导航
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/scoring-systems" className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
            <Trophy className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">积分体系概览</span>
          </Link>
          <Link href="/points/calculator" className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
            <Calculator className="h-4 w-4 mr-2 text-green-600" />
            <span className="text-sm">积分计算器</span>
          </Link>
          <a href="#formulas" className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
            <Target className="h-4 w-4 mr-2 text-purple-600" />
            <span className="text-sm">技术公式</span>
          </a>
          <a href="#documents" className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
            <FileText className="h-4 w-4 mr-2 text-orange-600" />
            <span className="text-sm">官方文档</span>
          </a>
        </div>
      </div>

      {/* 官方文档下载 */}
      <div id="documents" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Archive className="h-6 w-6 mr-2 text-blue-600" />
          官方规则文档
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officialDocuments.map((doc, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <doc.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{doc.type}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{doc.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>大小: {doc.size}</span>
                <span>更新: {doc.lastUpdated}</span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  <Download className="h-4 w-4 mr-2" />
                  下载PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  预览
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 技术公式库 */}
      <div id="formulas" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calculator className="h-6 w-6 mr-2 text-green-600" />
          技术公式库
        </h2>

        {technicalFormulas.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.category}</h3>

            <div className="space-y-4">
              {category.formulas.map((formula, formulaIndex) => (
                <div key={formulaIndex} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{formula.name}</h4>
                    <button
                      onClick={() => copyToClipboard(formula.formula, `${categoryIndex}-${formulaIndex}`)}
                      className="flex items-center px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                    >
                      {copiedText === `${categoryIndex}-${formulaIndex}` ? (
                        <CheckCircle className="h-4 w-4 mr-1" />
                      ) : (
                        <Copy className="h-4 w-4 mr-1" />
                      )}
                      {copiedText === `${categoryIndex}-${formulaIndex}` ? '已复制' : '复制'}
                    </button>
                  </div>

                  <div className="bg-white rounded border p-3 mb-2">
                    <code className="text-lg font-mono text-blue-600">{formula.formula}</code>
                  </div>

                  <p className="text-sm text-gray-600">{formula.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 统一积分分配表 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Trophy className="h-6 w-6 mr-2 text-orange-600" />
          统一积分分配表（四大项目通用）
        </h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            <strong>重要说明：</strong>当次比赛成绩排名为50名以后、未完赛、因伤退出等情况，当次比赛积分为0。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 前10名 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">第1-10名</h3>
            <div className="space-y-2">
              {pointsAllocation.tier360.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="font-medium">第{item.rank}名</span>
                  <span className="font-semibold text-blue-600">{item.points}分</span>
                </div>
              ))}
            </div>
          </div>

          {/* 11-25名 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-600">第11-25名</h3>
            <div className="space-y-2">
              {pointsAllocation.tier360Extended.slice(0, 15).map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="font-medium">第{item.rank}名</span>
                  <span className="font-semibold text-green-600">{item.points}分</span>
                </div>
              ))}
            </div>
          </div>

          {/* 26-38名 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-600">第26-38名</h3>
            <div className="space-y-2">
              {pointsAllocation.tier360Extended.slice(15, 28).map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="font-medium">第{item.rank}名</span>
                  <span className="font-semibold text-orange-600">{item.points}分</span>
                </div>
              ))}
            </div>
          </div>

          {/* 39-50名 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">第39-50名</h3>
            <div className="space-y-2">
              {pointsAllocation.tier360Extended.slice(28).map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="font-medium">第{item.rank}名</span>
                  <span className="font-semibold text-gray-600">{item.points}分</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 text-red-500">
                <span className="font-medium">&gt;50名</span>
                <span className="font-semibold">0分</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 版本历史 */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <ScrollText className="h-5 w-5 mr-2 text-gray-600" />
          规则版本历史
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <div>
              <span className="font-semibold">v4.0</span>
              <span className="text-sm text-gray-600 ml-2">当前版本</span>
            </div>
            <div className="text-sm text-gray-500">2024-06-15</div>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <div>
              <span className="font-semibold">v3.0</span>
              <span className="text-sm text-gray-600 ml-2">简化版本</span>
            </div>
            <div className="text-sm text-gray-500">2023-08-20</div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="font-semibold">v2.1</span>
              <span className="text-sm text-gray-600 ml-2">基础版本</span>
            </div>
            <div className="text-sm text-gray-500">2022-12-10</div>
          </div>
        </div>
      </div>
    </div>
  )
}