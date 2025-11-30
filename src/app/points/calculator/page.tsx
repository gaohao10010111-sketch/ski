'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calculator,
  Mountain,
  Snowflake,
  ArrowLeft,
  RotateCcw,
  Copy,
  Check,
  Info,
  ChevronDown
} from 'lucide-react'
import { useToast } from '@/components/Toast'

type SportType = 'alpine' | 'snowboard-slopestyle' | 'snowboard-parallel' | 'freestyle-slopestyle'

const sportConfigs = {
  'alpine': {
    name: '高山滑雪',
    icon: Mountain,
    color: 'blue',
    disciplines: ['SL', 'GS', 'SG', 'DH', 'AC'],
    disciplineNames: {
      SL: '回转',
      GS: '大回转',
      SG: '超级大回转',
      DH: '滑降',
      AC: '全能'
    },
    factors: { DH: 1250, SL: 730, GS: 1010, SG: 1190, AC: 1360 },
    levels: [
      { value: 'A', label: 'A级 (系数 1.0)', coefficient: 1.0 },
      { value: 'B', label: 'B级 (系数 0.6)', coefficient: 0.6 },
      { value: 'C', label: 'C级 (系数 0.3)', coefficient: 0.3 }
    ]
  },
  'snowboard-slopestyle': {
    name: '单板坡障/大跳台',
    icon: Snowflake,
    color: 'purple',
    tiers: [
      { value: 360, label: '360分档 (一类赛事)' },
      { value: 240, label: '240分档 (二类赛事)' },
      { value: 120, label: '120分档 (三类赛事)' }
    ]
  },
  'snowboard-parallel': {
    name: '单板平行项目',
    icon: Snowflake,
    color: 'indigo',
    disciplines: ['PGS', 'PSL'],
    disciplineNames: { PGS: '平行大回转', PSL: '平行回转' }
  },
  'freestyle-slopestyle': {
    name: '自由式坡障/大跳台',
    icon: Snowflake,
    color: 'cyan',
    tiers: [
      { value: 360, label: '360分档 (一类赛事)' },
      { value: 240, label: '240分档 (二类赛事)' },
      { value: 120, label: '120分档 (三类赛事)' }
    ]
  }
}

// 积分分配表 (简化版)
const pointsAllocation: Record<number, Record<number, number>> = {
  360: { 1: 360, 2: 288, 3: 216, 4: 180, 5: 162, 6: 144, 7: 130, 8: 115, 9: 104, 10: 94 },
  240: { 1: 240, 2: 192, 3: 144, 4: 120, 5: 108, 6: 96, 7: 86, 8: 77, 9: 70, 10: 62 },
  120: { 1: 120, 2: 96, 3: 72, 4: 60, 5: 54, 6: 48, 7: 43, 8: 38, 9: 35, 10: 31 }
}

export default function PointsCalculatorPage() {
  const [sportType, setSportType] = useState<SportType>('alpine')
  const [copied, setCopied] = useState(false)
  const { showToast } = useToast()

  // 高山滑雪状态
  const [winnerTime, setWinnerTime] = useState('')
  const [competitorTime, setCompetitorTime] = useState('')
  const [discipline, setDiscipline] = useState('GS')
  const [raceLevel, setRaceLevel] = useState('A')
  const [penalty, setPenalty] = useState('')

  // 排名积分状态
  const [rank, setRank] = useState('')
  const [tier, setTier] = useState(360)

  // 计算结果
  const [result, setResult] = useState<{
    basePoints: number
    adjustedPoints: number
    finalPoints: number
    formula: string
  } | null>(null)

  const calculateAlpinePoints = () => {
    const winner = parseFloat(winnerTime)
    const competitor = parseFloat(competitorTime)
    const penaltyVal = parseFloat(penalty) || 0

    if (!winner || !competitor || competitor < winner) {
      showToast('请输入有效的时间数据', 'error')
      return
    }

    const config = sportConfigs['alpine']
    const F = config.factors[discipline as keyof typeof config.factors]
    const coef = config.levels.find(l => l.value === raceLevel)?.coefficient || 1.0

    const basePoints = F * (competitor / winner - 1)
    const adjustedPoints = basePoints + penaltyVal
    const finalPoints = adjustedPoints * coef

    setResult({
      basePoints: Math.round(basePoints * 100) / 100,
      adjustedPoints: Math.round(adjustedPoints * 100) / 100,
      finalPoints: Math.round(finalPoints * 100) / 100,
      formula: `${F} × (${competitor}/${winner} - 1) × ${coef} = ${Math.round(finalPoints * 100) / 100}`
    })
  }

  const calculateRankPoints = () => {
    const rankVal = parseInt(rank)
    if (!rankVal || rankVal < 1) {
      showToast('请输入有效的排名', 'error')
      return
    }

    const allocation = pointsAllocation[tier]
    const points = allocation[rankVal] || (rankVal <= 50 ? Math.max(1, 51 - rankVal) : 0)

    setResult({
      basePoints: points,
      adjustedPoints: points,
      finalPoints: points,
      formula: `${tier}分档积分表[第${rankVal}名] = ${points}分`
    })
  }

  const handleCalculate = () => {
    if (sportType === 'alpine' || sportType === 'snowboard-parallel') {
      calculateAlpinePoints()
    } else {
      calculateRankPoints()
    }
  }

  const handleReset = () => {
    setWinnerTime('')
    setCompetitorTime('')
    setPenalty('')
    setRank('')
    setResult(null)
  }

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(`最终积分: ${result.finalPoints}分\n计算公式: ${result.formula}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      showToast('计算结果已复制', 'success')
    }
  }

  const currentConfig = sportConfigs[sportType]
  const Icon = currentConfig.icon

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 返回链接 */}
      <Link
        href="/scoring-systems"
        className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回积分体系
      </Link>

      {/* 页面标题 */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-4 shadow-lg">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-ski-navy mb-2">积分计算器</h1>
        <p className="text-gray-600">选择项目类型，输入数据，快速计算积分</p>
      </div>

      {/* 项目选择 */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">选择项目类型</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(Object.keys(sportConfigs) as SportType[]).map((key) => {
            const config = sportConfigs[key]
            const SportIcon = config.icon
            const isActive = sportType === key

            return (
              <button
                key={key}
                onClick={() => {
                  setSportType(key)
                  handleReset()
                }}
                className={`p-3 rounded-lg border-2 transition-all ${
                  isActive
                    ? 'border-ski-blue bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
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
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Icon className="w-5 h-5 text-ski-blue" />
          {currentConfig.name}积分计算
        </h2>

        {/* 高山滑雪/单板平行项目表单 */}
        {(sportType === 'alpine' || sportType === 'snowboard-parallel') && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">获胜者时间 (秒)</label>
                <input
                  type="number"
                  step="0.01"
                  value={winnerTime}
                  onChange={(e) => setWinnerTime(e.target.value)}
                  placeholder="例如: 60.00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">参赛者时间 (秒)</label>
                <input
                  type="number"
                  step="0.01"
                  value={competitorTime}
                  onChange={(e) => setCompetitorTime(e.target.value)}
                  placeholder="例如: 62.50"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                />
              </div>
            </div>

            {sportType === 'alpine' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">项目类型</label>
                    <select
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue"
                    >
                      {sportConfigs.alpine.disciplines.map((d) => (
                        <option key={d} value={d}>
                          {sportConfigs.alpine.disciplineNames[d as keyof typeof sportConfigs.alpine.disciplineNames]} ({d})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">赛事级别</label>
                    <select
                      value={raceLevel}
                      onChange={(e) => setRaceLevel(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue"
                    >
                      {sportConfigs.alpine.levels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">判罚分 (可选)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={penalty}
                    onChange={(e) => setPenalty(e.target.value)}
                    placeholder="默认为0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                  />
                </div>
              </>
            )}
          </div>
        )}

        {/* 排名积分表单 */}
        {(sportType === 'snowboard-slopestyle' || sportType === 'freestyle-slopestyle') && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">最终排名</label>
                <input
                  type="number"
                  min="1"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  placeholder="例如: 1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">积分档次</label>
                <select
                  value={tier}
                  onChange={(e) => setTier(parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue"
                >
                  {sportConfigs[sportType].tiers?.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* 操作按钮 */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleCalculate}
            className="flex-1 py-3 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            计算积分
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 计算结果 */}
      {result && (
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">计算结果</h3>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? '已复制' : '复制'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">基础积分</div>
              <div className="text-2xl font-bold text-gray-900">{result.basePoints}</div>
            </div>
            {result.adjustedPoints !== result.basePoints && (
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-sm text-gray-500 mb-1">调整后积分</div>
                <div className="text-2xl font-bold text-gray-900">{result.adjustedPoints}</div>
              </div>
            )}
            <div className="bg-white rounded-lg p-4 text-center border-2 border-green-400">
              <div className="text-sm text-green-600 mb-1">最终积分</div>
              <div className="text-3xl font-bold text-green-600">{result.finalPoints}</div>
            </div>
          </div>

          <div className="bg-white/80 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">计算公式</div>
                <code className="text-sm font-mono text-gray-700">{result.formula}</code>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 说明 */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
          <Info className="w-4 h-4" />
          计算说明
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• 高山滑雪: P = F × (Tx/To - 1) × 赛事系数，F为项目系数</li>
          <li>• 单板/自由式: 基于最终排名查询对应分档积分表</li>
          <li>• 积分越低越好（高山滑雪），排名积分越高越好</li>
          <li>• 本计算器仅供参考，最终积分以官方公布为准</li>
        </ul>
      </div>
    </div>
  )
}
