'use client'

import { useState } from 'react'
import PointsCard from '@/components/PointsCard'
import { latestResults } from '@/data/latestResults'

// 从数据中提取几个示例运动员
function getSampleAthletes() {
  const samples: Array<{
    name: string
    team: string
    rank: number
    points: number
    ageGroup: string
    gender: string
    discipline: string
  }> = []

  for (const competition of latestResults.competitions) {
    for (const event of competition.events) {
      // 取前3名作为示例
      for (let i = 0; i < Math.min(3, event.athletes.length); i++) {
        const athlete = event.athletes[i]
        if (samples.length < 6) {
          samples.push({
            name: athlete.name,
            team: athlete.team,
            rank: athlete.rank,
            points: athlete.points || 0,
            ageGroup: event.ageGroup,
            gender: event.gender,
            discipline: event.discipline,
          })
        }
      }
    }
  }

  return samples
}

export default function CardPreviewPage() {
  const samples = getSampleAthletes()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = samples[selectedIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">积分卡片预览</h1>
          <p className="text-gray-400">精美的个人积分卡片，支持下载和分享</p>
        </div>

        {/* 运动员选择 */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-300 mb-3">选择运动员预览：</h2>
          <div className="flex flex-wrap gap-2">
            {samples.map((athlete, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedIndex === index
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {athlete.name} ({athlete.ageGroup})
              </button>
            ))}
          </div>
        </div>

        {/* 卡片展示 */}
        <div className="flex justify-center mb-10">
          <PointsCard
            athleteName={selected.name}
            team={selected.team}
            rank={selected.rank}
            totalPoints={selected.points}
            competitionCount={1}
            bestRank={selected.rank}
            ageGroup={selected.ageGroup}
            gender={selected.gender}
            discipline={selected.discipline}
            season="2025-2026"
          />
        </div>

        {/* 使用说明 */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-gray-300">
          <h3 className="text-lg font-medium text-white mb-4">功能说明</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>保存图片</strong>：将卡片保存为高清PNG图片，方便发送朋友圈或微信群</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>分享功能</strong>：支持系统原生分享（微信、QQ等），或复制链接分享</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>二维码</strong>：扫描卡片底部二维码可直接访问积分排名网站</span>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10">
            <h4 className="text-white font-medium mb-2">后续规划</h4>
            <p className="text-sm text-gray-400">
              待用户系统上线后，运动员可登录绑定个人信息，一键生成专属积分卡片进行分享，
              提升赛事影响力和用户粘性。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
