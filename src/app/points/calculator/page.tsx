'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calculator,
  Mountain,
  Snowflake,
  ArrowLeft,
  RotateCcw
} from 'lucide-react'
import { useToast } from '@/components/Toast'

type SportType = 'alpine' | 'snowboard-slopestyle' | 'snowboard-parallel' | 'freestyle-slopestyle'

const sportConfigs = {
  'alpine': { name: '高山滑雪', icon: Mountain },
  'snowboard-slopestyle': { name: '单板坡障/大跳台', icon: Snowflake },
  'snowboard-parallel': { name: '单板平行项目', icon: Snowflake },
  'freestyle-slopestyle': { name: '自由式坡障/大跳台', icon: Snowflake }
}

// 360分档积分表
const pointsTable: Record<number, number> = {
  1: 360, 2: 329, 3: 303, 4: 280, 5: 260, 6: 242, 7: 226, 8: 212, 9: 199, 10: 187,
  11: 176, 12: 166, 13: 157, 14: 149, 15: 141, 16: 134, 17: 127, 18: 121, 19: 115, 20: 110,
  21: 105, 22: 100, 23: 95, 24: 91, 25: 87, 26: 83, 27: 79, 28: 75, 29: 71, 30: 67,
  31: 63, 32: 59, 33: 55, 34: 51, 35: 47, 36: 43, 37: 39, 38: 35, 39: 31, 40: 27,
  41: 24, 42: 21, 43: 18, 44: 15, 45: 12, 46: 9, 47: 6, 48: 3, 49: 2, 50: 1
}

export default function PointsCalculatorPage() {
  const [sportType, setSportType] = useState<SportType>('alpine')
  const [rank, setRank] = useState('')
  const [points, setPoints] = useState<number | null>(null)
  const { showToast } = useToast()

  const handleCalculate = () => {
    const trimmed = rank.trim()
    if (!trimmed) {
      showToast('请输入排名', 'error')
      return
    }
    const rankVal = parseInt(trimmed, 10)
    if (isNaN(rankVal) || rankVal < 1 || rankVal > 9999) {
      showToast('请输入1-9999的有效排名', 'error')
      return
    }
    // 50名以后积分为0
    setPoints(rankVal > 50 ? 0 : (pointsTable[rankVal] || 0))
  }

  const handleReset = () => {
    setRank('')
    setPoints(null)
  }

  const currentConfig = sportConfigs[sportType]
  const Icon = currentConfig.icon

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/scoring-systems"
        className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回积分体系
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-4 shadow-lg">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-ski-navy mb-2">积分计算器</h1>
        <p className="text-gray-600">输入排名，快速计算积分</p>
      </div>

      {/* 项目选择 */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">选择项目</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(Object.keys(sportConfigs) as SportType[]).map((key) => {
            const config = sportConfigs[key]
            const SportIcon = config.icon
            const isActive = sportType === key
            return (
              <button
                key={key}
                onClick={() => { setSportType(key); handleReset() }}
                className={`p-3 rounded-lg border-2 transition-all ${
                  isActive ? 'border-ski-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <SportIcon className={`w-5 h-5 mx-auto mb-1 ${isActive ? 'text-ski-blue' : 'text-gray-400'}`} />
                <span className={`text-xs font-medium ${isActive ? 'text-ski-blue' : 'text-gray-600'}`}>
                  {config.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 计算表单 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Icon className="w-5 h-5 text-ski-blue" />
          {currentConfig.name}
        </h2>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">排名</label>
            <input
              type="number"
              min="1"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
              placeholder="输入排名"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
            />
          </div>
          <div className="flex items-end gap-2">
            <button
              onClick={handleCalculate}
              className="px-6 py-2 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              计算
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 结果 */}
        {points !== null && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 text-center">
            <div className="text-sm text-gray-600 mb-1">第 {rank} 名积分</div>
            <div className="text-4xl font-bold text-green-600">{points}</div>
          </div>
        )}
      </div>
    </div>
  )
}
