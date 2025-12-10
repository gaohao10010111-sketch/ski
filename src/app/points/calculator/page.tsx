'use client'

import { useState, useEffect } from 'react'
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
  ChevronDown,
  Database,
  Users
} from 'lucide-react'
import { useToast } from '@/components/Toast'
import { getLatestResults, getCompetitions, type StoredResults, type CompetitionInfo } from '@/lib/resultsStorage'

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

// 统一积分分配表 (四大项目通用)
// 当次比赛成绩排名为50名以后、未完赛、因伤退出等情况，当次比赛积分为0
const pointsAllocation: Record<number, Record<number, number>> = {
  360: {
    1: 360, 2: 329, 3: 303, 4: 280, 5: 260, 6: 242, 7: 226, 8: 212, 9: 199, 10: 187,
    11: 176, 12: 166, 13: 157, 14: 149, 15: 141, 16: 134, 17: 127, 18: 121, 19: 115, 20: 110,
    21: 105, 22: 100, 23: 95, 24: 91, 25: 87, 26: 83, 27: 79, 28: 75, 29: 71, 30: 67,
    31: 63, 32: 59, 33: 55, 34: 51, 35: 47, 36: 43, 37: 39, 38: 35, 39: 31, 40: 27,
    41: 24, 42: 21, 43: 18, 44: 15, 45: 12, 46: 9, 47: 6, 48: 3, 49: 2, 50: 1
  },
  240: {
    1: 240, 2: 219, 3: 202, 4: 187, 5: 173, 6: 161, 7: 151, 8: 141, 9: 133, 10: 125,
    11: 117, 12: 111, 13: 105, 14: 99, 15: 94, 16: 89, 17: 85, 18: 81, 19: 77, 20: 73,
    21: 70, 22: 67, 23: 63, 24: 61, 25: 58, 26: 55, 27: 53, 28: 50, 29: 47, 30: 45,
    31: 42, 32: 39, 33: 37, 34: 34, 35: 31, 36: 29, 37: 26, 38: 23, 39: 21, 40: 18,
    41: 16, 42: 14, 43: 12, 44: 10, 45: 8, 46: 6, 47: 4, 48: 2, 49: 1, 50: 1
  },
  120: {
    1: 120, 2: 110, 3: 101, 4: 93, 5: 87, 6: 81, 7: 75, 8: 71, 9: 66, 10: 62,
    11: 59, 12: 55, 13: 52, 14: 50, 15: 47, 16: 45, 17: 42, 18: 40, 19: 38, 20: 37,
    21: 35, 22: 33, 23: 32, 24: 30, 25: 29, 26: 28, 27: 26, 28: 25, 29: 24, 30: 22,
    31: 21, 32: 20, 33: 18, 34: 17, 35: 16, 36: 14, 37: 13, 38: 12, 39: 10, 40: 9,
    41: 8, 42: 7, 43: 6, 44: 5, 45: 4, 46: 3, 47: 2, 48: 1, 49: 1, 50: 1
  }
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

  // 导入的成绩数据
  const [importedData, setImportedData] = useState<StoredResults | null>(null)
  const [allCompetitions, setAllCompetitions] = useState<CompetitionInfo[]>([])
  const [showImportedResults, setShowImportedResults] = useState(false)

  // 加载导入的成绩
  useEffect(() => {
    if (typeof window === 'undefined') return
    const latest = getLatestResults()
    const competitions = getCompetitions()
    setImportedData(latest)
    setAllCompetitions(competitions)
  }, [])

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
    // 50名以后、未完赛、因伤退出等情况，积分为0
    const points = rankVal > 50 ? 0 : (allocation[rankVal] || 0)

    setResult({
      basePoints: points,
      adjustedPoints: points,
      finalPoints: points,
      formula: rankVal > 50
        ? `第${rankVal}名 > 50名，积分为0分`
        : `${tier}分档积分表[第${rankVal}名] = ${points}分`
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

      {/* 已导入的成绩数据 */}
      {importedData && (
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <button
            onClick={() => setShowImportedResults(!showImportedResults)}
            className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Database className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">已导入的比赛成绩</h3>
                <p className="text-sm text-gray-500">
                  {importedData.competition.name} - {importedData.competition.date}
                </p>
              </div>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showImportedResults ? 'rotate-180' : ''}`} />
          </button>

          {showImportedResults && (
            <div className="p-6 border-t border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-900">{importedData.competition.participants}</div>
                  <div className="text-xs text-gray-500">参赛人数</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{importedData.competition.finishers}</div>
                  <div className="text-xs text-gray-500">完赛人数</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{importedData.results.male.length}</div>
                  <div className="text-xs text-gray-500">男子选手</div>
                </div>
                <div className="bg-pink-50 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-600">{importedData.results.female.length}</div>
                  <div className="text-xs text-gray-500">女子选手</div>
                </div>
              </div>

              {/* 男子成绩 */}
              {importedData.results.male.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    男子组成绩 (前10名)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">排名</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">姓名</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">代表队</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">成绩/得分</th>
                          <th className="px-3 py-2 text-right text-xs font-medium text-gray-500">积分</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {importedData.results.male.slice(0, 10).map((r) => (
                          <tr key={`m-${r.rank}`} className="hover:bg-gray-50">
                            <td className="px-3 py-2 font-medium">{r.rank}</td>
                            <td className="px-3 py-2">{r.name}</td>
                            <td className="px-3 py-2 text-gray-500">{r.team}</td>
                            <td className="px-3 py-2 text-gray-500">{r.totalTime}</td>
                            <td className="px-3 py-2 text-right font-bold text-green-600">{r.points.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 女子成绩 */}
              {importedData.results.female.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    女子组成绩 (前10名)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">排名</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">姓名</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">代表队</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">成绩/得分</th>
                          <th className="px-3 py-2 text-right text-xs font-medium text-gray-500">积分</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {importedData.results.female.slice(0, 10).map((r) => (
                          <tr key={`f-${r.rank}`} className="hover:bg-gray-50">
                            <td className="px-3 py-2 font-medium">{r.rank}</td>
                            <td className="px-3 py-2">{r.name}</td>
                            <td className="px-3 py-2 text-gray-500">{r.team}</td>
                            <td className="px-3 py-2 text-gray-500">{r.totalTime}</td>
                            <td className="px-3 py-2 text-right font-bold text-pink-600">{r.points.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {allCompetitions.length > 1 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    共导入 {allCompetitions.length} 场比赛的成绩数据。
                    <Link href="/results-announcement" className="text-ski-blue hover:underline ml-1">
                      查看全部成绩
                    </Link>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
