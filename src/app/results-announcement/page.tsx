'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  Trophy,
  Medal,
  Download,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Award,
  Share2,
  Printer,
  FileUp,
  AlertCircle
} from 'lucide-react'
import { useToast } from '@/components/Toast'
import {
  getCompetitions,
  getResultsByCompetitionId,
  getCompetitionById,
  getLatestResults,
  type CompetitionInfo,
  type ResultRecord
} from '@/lib/resultsStorage'

const medalConfig = {
  gold: { color: 'text-yellow-500', bg: 'bg-yellow-50', label: '金牌' },
  silver: { color: 'text-gray-400', bg: 'bg-gray-50', label: '银牌' },
  bronze: { color: 'text-orange-600', bg: 'bg-orange-50', label: '铜牌' },
}

function ResultsContent() {
  const searchParams = useSearchParams()
  const competitionId = searchParams?.get('id')
  const { showToast } = useToast()
  const [activeTab, setActiveTab] = useState<'male' | 'female'>('male')
  const [competitions, setCompetitions] = useState<CompetitionInfo[]>([])
  const [selectedCompetition, setSelectedCompetition] = useState<CompetitionInfo | null>(null)
  const [results, setResults] = useState<{ male: ResultRecord[], female: ResultRecord[] } | null>(null)
  const [loading, setLoading] = useState(true)

  // 加载数据
  useEffect(() => {
    const loadData = () => {
      const allCompetitions = getCompetitions()
      setCompetitions(allCompetitions)

      if (competitionId) {
        // 加载指定比赛
        const competition = getCompetitionById(competitionId)
        const competitionResults = getResultsByCompetitionId(competitionId)
        setSelectedCompetition(competition)
        setResults(competitionResults)
      } else if (allCompetitions.length > 0) {
        // 加载最新比赛
        const latest = getLatestResults()
        if (latest) {
          setSelectedCompetition(latest.competition)
          setResults(latest.results)
        }
      }

      setLoading(false)
    }

    loadData()
  }, [competitionId])

  // 切换比赛
  const handleCompetitionChange = (id: string) => {
    const competition = getCompetitionById(id)
    const competitionResults = getResultsByCompetitionId(id)
    setSelectedCompetition(competition)
    setResults(competitionResults)
  }

  // 获取当前显示的成绩
  const currentResults = results ? results[activeTab] : []

  // 获取奖牌信息
  const getMedal = (rank: number) => {
    if (rank === 1) return 'gold'
    if (rank === 2) return 'silver'
    if (rank === 3) return 'bronze'
    return null
  }

  const handleExport = () => {
    if (!currentResults.length || !selectedCompetition) {
      showToast('没有可导出的数据', 'error')
      return
    }

    const headers = ['名次', '号码', '姓名', '代表队', '总成绩', '积分', '状态']
    const rows = currentResults.map(r => [
      r.rank,
      r.bibNumber,
      r.name,
      r.team,
      r.totalTime,
      r.points,
      r.status === 'finished' ? '完赛' : r.status.toUpperCase()
    ])
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${selectedCompetition.name}_${activeTab === 'male' ? '男子' : '女子'}_成绩表.csv`
    link.click()
    URL.revokeObjectURL(url)

    showToast('成绩表已导出', 'success')
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${selectedCompetition?.name || '比赛'} - 成绩公告`,
          text: `查看${selectedCompetition?.name || '比赛'}的比赛成绩`,
          url: window.location.href,
        })
      } catch {
        showToast('分享已取消', 'info')
      }
    } else {
      await navigator.clipboard.writeText(window.location.href)
      showToast('链接已复制到剪贴板', 'success')
    }
  }

  const handlePrint = () => {
    window.print()
  }

  // 加载中状态
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  // 没有数据时显示提示
  if (competitions.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/competitions"
          className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回比赛列表
        </Link>

        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <AlertCircle className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">暂无成绩数据</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            还没有导入任何比赛成绩。请先通过成绩导入功能上传比赛成绩PDF或XML文件。
          </p>
          <Link
            href="/results-import"
            className="inline-flex items-center px-6 py-3 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <FileUp className="w-5 h-5 mr-2" />
            去导入成绩
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 返回按钮 */}
      <Link
        href="/competitions"
        className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回比赛列表
      </Link>

      {/* 页面标题 */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-lg">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-ski-navy mb-2">成绩公告</h1>

        {/* 比赛选择器 */}
        {competitions.length > 1 && (
          <div className="mt-4">
            <select
              value={selectedCompetition?.id || ''}
              onChange={(e) => handleCompetitionChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-ski-blue"
            >
              {competitions.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        )}

        {selectedCompetition && (
          <p className="text-xl text-gray-600 mt-2">{selectedCompetition.name}</p>
        )}
      </div>

      {/* 比赛信息卡片 */}
      {selectedCompetition && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-ski-blue" />
              <div>
                <div className="text-sm text-gray-500">比赛日期</div>
                <div className="font-medium">{selectedCompetition.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm text-gray-500">比赛地点</div>
                <div className="font-medium">{selectedCompetition.location || '未知'}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-purple-600" />
              <div>
                <div className="text-sm text-gray-500">比赛项目</div>
                <div className="font-medium">{selectedCompetition.discipline}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-sm text-gray-500">参赛人数</div>
                <div className="font-medium">{selectedCompetition.participants} 人</div>
              </div>
            </div>
          </div>

          {/* 完赛统计 */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full">
                完赛: {selectedCompetition.finishers} 人
              </span>
              {selectedCompetition.dns > 0 && (
                <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full">
                  DNS: {selectedCompetition.dns} 人
                </span>
              )}
              {selectedCompetition.dnf > 0 && (
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full">
                  DNF: {selectedCompetition.dnf} 人
                </span>
              )}
              {selectedCompetition.dsq > 0 && (
                <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full">
                  DSQ: {selectedCompetition.dsq} 人
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 操作按钮 */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={handleExport}
          className="inline-flex items-center px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          导出成绩表
        </button>
        <button
          onClick={handleShare}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Share2 className="w-4 h-4 mr-2" />
          分享
        </button>
        <button
          onClick={handlePrint}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors print:hidden"
        >
          <Printer className="w-4 h-4 mr-2" />
          打印
        </button>
        <Link
          href="/results-import"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors print:hidden"
        >
          <FileUp className="w-4 h-4 mr-2" />
          导入更多
        </Link>
      </div>

      {/* 性别切换 */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('male')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'male'
              ? 'bg-ski-blue text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          男子组 ({results?.male.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('female')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'female'
              ? 'bg-ski-blue text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          女子组 ({results?.female.length || 0})
        </button>
      </div>

      {/* 领奖台 - 只有当有3名及以上完赛选手时显示 */}
      {currentResults.filter(r => r.status === 'finished').length >= 3 && (
        <div className="bg-gradient-to-br from-ski-navy to-blue-900 rounded-xl p-8 mb-8 text-white">
          <h2 className="text-xl font-bold text-center mb-8">领奖台</h2>
          <div className="flex justify-center items-end gap-4">
            {/* 银牌 - 第二名 */}
            {currentResults[1] && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
                  <Medal className="w-10 h-10 text-gray-600" />
                </div>
                <div className="bg-gray-300 rounded-t-lg pt-4 pb-2 px-4 w-28">
                  <div className="text-gray-800 font-bold">{currentResults[1].name}</div>
                  <div className="text-gray-600 text-sm">{currentResults[1].team}</div>
                  <div className="text-gray-700 text-xs mt-1">{currentResults[1].totalTime}</div>
                </div>
                <div className="bg-gray-400 h-16 w-28 flex items-center justify-center text-2xl font-bold text-gray-700">
                  2
                </div>
              </div>
            )}

            {/* 金牌 - 第一名 */}
            {currentResults[0] && (
              <div className="text-center -mt-4">
                <div className="w-24 h-24 mx-auto mb-3 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Trophy className="w-12 h-12 text-yellow-800" />
                </div>
                <div className="bg-yellow-400 rounded-t-lg pt-4 pb-2 px-4 w-32">
                  <div className="text-yellow-900 font-bold text-lg">{currentResults[0].name}</div>
                  <div className="text-yellow-800 text-sm">{currentResults[0].team}</div>
                  <div className="text-yellow-900 text-xs mt-1">{currentResults[0].totalTime}</div>
                </div>
                <div className="bg-yellow-500 h-24 w-32 flex items-center justify-center text-3xl font-bold text-yellow-900">
                  1
                </div>
              </div>
            )}

            {/* 铜牌 - 第三名 */}
            {currentResults[2] && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Medal className="w-10 h-10 text-orange-800" />
                </div>
                <div className="bg-orange-400 rounded-t-lg pt-4 pb-2 px-4 w-28">
                  <div className="text-orange-900 font-bold">{currentResults[2].name}</div>
                  <div className="text-orange-800 text-sm">{currentResults[2].team}</div>
                  <div className="text-orange-900 text-xs mt-1">{currentResults[2].totalTime}</div>
                </div>
                <div className="bg-orange-500 h-12 w-28 flex items-center justify-center text-2xl font-bold text-orange-900">
                  3
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 成绩表格 */}
      {currentResults.length > 0 ? (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">名次</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">号码</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">姓名</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">代表队</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">总成绩</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">积分</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentResults.map((result, idx) => {
                  const medal = getMedal(result.rank)
                  const medalStyle = medal ? medalConfig[medal] : null
                  return (
                    <tr
                      key={`${result.name}-${idx}`}
                      className={`hover:bg-gray-50 transition-colors ${medalStyle?.bg || ''}`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {medalStyle ? (
                            <span className={`font-bold ${medalStyle.color}`}>
                              {result.rank}
                            </span>
                          ) : (
                            <span className="text-gray-600">{result.rank}</span>
                          )}
                          {medalStyle && (
                            <Medal className={`w-4 h-4 ${medalStyle.color}`} />
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{result.bibNumber}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{result.name}</td>
                      <td className="px-4 py-3 text-gray-600">{result.team}</td>
                      <td className="px-4 py-3 text-center font-mono font-semibold text-gray-900">
                        {result.totalTime}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex items-center px-2 py-1 bg-ski-blue/10 text-ski-blue rounded font-medium">
                          {result.points}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {result.status === 'finished' ? (
                          <span className="text-green-600">完赛</span>
                        ) : (
                          <span className="text-red-500 font-medium">{result.status.toUpperCase()}</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <p className="text-gray-500">该组别暂无成绩数据</p>
        </div>
      )}

      {/* 备注 */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <p className="font-medium mb-2">说明：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>DNS (Did Not Start): 未出发</li>
          <li>DNF (Did Not Finish): 未完赛</li>
          <li>DSQ (Disqualified): 被取消资格</li>
          <li>积分按照中国滑雪协会积分规则计算</li>
        </ul>
      </div>
    </div>
  )
}

export default function ResultsAnnouncementPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}
