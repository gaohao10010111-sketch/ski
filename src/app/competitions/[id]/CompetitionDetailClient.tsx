'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  ArrowLeft,
  Flag,
  Star,
  Snowflake,
  Award,
  FileText,
  Share2,
  AlertCircle,
  Loader2,
  Medal,
  Target,
  Timer
} from 'lucide-react'
import { competitionsApi, type CompetitionDetail, type CompetitionResult } from '@/lib/api'

// 状态配置
const statusConfig: Record<string, { label: string; color: string; icon: React.ComponentType<{ className?: string }> }> = {
  SCHEDULED: { label: '即将开始', color: 'bg-blue-100 text-blue-800', icon: Clock },
  ONGOING: { label: '进行中', color: 'bg-green-100 text-green-800', icon: Snowflake },
  COMPLETED: { label: '已结束', color: 'bg-gray-100 text-gray-800', icon: Trophy },
  CANCELLED: { label: '已取消', color: 'bg-red-100 text-red-800', icon: AlertCircle },
  REGISTRATION: { label: '报名中', color: 'bg-yellow-100 text-yellow-800', icon: Users }
}

// 运动类型标签
const sportTypeLabels: Record<string, string> = {
  ALPINE_SKI: '高山滑雪',
  SNOWBOARD_SLOPESTYLE_BIGAIR: '单板坡障/大跳台',
  SNOWBOARD_PARALLEL: '单板平行项目',
  FREESTYLE_SLOPESTYLE_BIGAIR: '自由式坡障/大跳台'
}

// 比赛等级标签
const raceLevelLabels: Record<string, string> = {
  A: 'A级赛事',
  B: 'B级赛事',
  C: 'C级赛事',
  NATIONAL: '全国级',
  REGIONAL: '地区级',
  INTERNATIONAL: '国际级'
}

// 结果状态标签
const resultStatusLabels: Record<string, { label: string; color: string }> = {
  FINISHED: { label: '完赛', color: 'text-green-600' },
  DNS: { label: '未出发', color: 'text-gray-500' },
  DNF: { label: '未完赛', color: 'text-orange-500' },
  DQ: { label: '取消资格', color: 'text-red-500' }
}

// 格式化时间
function formatTime(milliseconds: number | null): string {
  if (!milliseconds) return '-'
  const totalSeconds = milliseconds / 1000
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = (totalSeconds % 60).toFixed(2)
  if (minutes > 0) {
    return `${minutes}:${seconds.padStart(5, '0')}`
  }
  return `${seconds}s`
}

// 格式化日期
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function CompetitionDetailClient({ id }: { id: string }) {
  const [competition, setCompetition] = useState<CompetitionDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCompetition = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await competitionsApi.get(id)
        if (response.success && response.data) {
          setCompetition(response.data)
        } else {
          setError(response.error?.message || '获取比赛详情失败')
        }
      } catch (err) {
        console.error('获取比赛详情错误:', err)
        setError('网络错误，请稍后重试')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCompetition()
  }, [id])

  // 加载状态
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/competitions"
          className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回比赛列表
        </Link>
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-ski-blue animate-spin mb-4" />
          <p className="text-gray-500">加载比赛详情中...</p>
        </div>
      </div>
    )
  }

  // 错误状态
  if (error || !competition) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/competitions"
          className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回比赛列表
        </Link>
        <div className="flex flex-col items-center justify-center py-20">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-gray-600 mb-4">{error || '比赛不存在'}</p>
          <Link
            href="/competitions"
            className="px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            返回比赛列表
          </Link>
        </div>
      </div>
    )
  }

  const statusInfo = statusConfig[competition.status] || statusConfig.SCHEDULED
  const StatusIcon = statusInfo.icon

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

      {/* 比赛头部 */}
      <div className="bg-gradient-to-r from-ski-navy to-blue-800 rounded-2xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                <StatusIcon className="w-4 h-4" />
                {statusInfo.label}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {sportTypeLabels[competition.sportType] || competition.sportType}
              </span>
              {competition.raceLevel && (
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm">
                  {raceLevelLabels[competition.raceLevel] || competition.raceLevel}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">{competition.name}</h1>
            {competition.discipline && (
              <p className="text-blue-100 text-lg">{competition.discipline}</p>
            )}
          </div>
          <div className="flex gap-3">
            {competition.status === 'COMPLETED' && (
              <Link
                href={`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${id}`}
                className="inline-flex items-center px-4 py-2 bg-yellow-500 text-yellow-900 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
              >
                <Award className="w-4 h-4 mr-2" />
                查看成绩公告
              </Link>
            )}
            {competition.status === 'REGISTRATION' && (
              <button className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors font-medium">
                <Users className="w-4 h-4 mr-2" />
                立即报名
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧主要内容 */}
        <div className="lg:col-span-2 space-y-8">
          {/* 比赛简介 */}
          {competition.description && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-ski-blue" />
                比赛简介
              </h2>
              <p className="text-gray-600 leading-relaxed">{competition.description}</p>
            </div>
          )}

          {/* 比赛统计 */}
          {competition.stats && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-ski-blue" />
                比赛统计
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-ski-blue">{competition.stats.totalParticipants}</div>
                  <div className="text-sm text-gray-600">总参赛人数</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{competition.stats.finishers}</div>
                  <div className="text-sm text-gray-600">完赛人数</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">{competition.stats.dns}</div>
                  <div className="text-sm text-gray-600">未出发</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{competition.stats.dnf}</div>
                  <div className="text-sm text-gray-600">未完赛</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{competition.stats.dq}</div>
                  <div className="text-sm text-gray-600">取消资格</div>
                </div>
              </div>
            </div>
          )}

          {/* 判罚分计算 */}
          {competition.penaltyCalculation && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
                <Flag className="w-5 h-5 text-ski-blue" />
                判罚分计算
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-700">{competition.penaltyCalculation.sumA.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">A组合计</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-700">{competition.penaltyCalculation.sumB.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">B组合计</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-700">{competition.penaltyCalculation.sumC.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">C组合计</div>
                </div>
                <div className="text-center p-3 bg-ski-blue/10 rounded-lg">
                  <div className="text-lg font-bold text-ski-blue">{competition.penaltyCalculation.penalty.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">判罚分</div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                判罚分 = (A组5人最低分之和 + B组5人最低分之和 - C组5人最低分之和) / 10
              </p>
            </div>
          )}

          {/* 比赛成绩 */}
          {competition.results && competition.results.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                比赛成绩
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">名次</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">运动员</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">省份/俱乐部</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">状态</th>
                      <th className="text-right py-3 px-2 text-sm font-semibold text-gray-600">成绩</th>
                      <th className="text-right py-3 px-2 text-sm font-semibold text-gray-600">积分</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competition.results.slice(0, 20).map((result: CompetitionResult) => {
                      const resultStatus = resultStatusLabels[result.status] || { label: result.status, color: 'text-gray-600' }
                      return (
                        <tr key={result.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">
                            {result.finalRank <= 3 ? (
                              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm ${
                                result.finalRank === 1 ? 'bg-yellow-100 text-yellow-700' :
                                result.finalRank === 2 ? 'bg-gray-100 text-gray-700' :
                                'bg-orange-100 text-orange-700'
                              }`}>
                                {result.finalRank}
                              </span>
                            ) : (
                              <span className="text-gray-600">{result.finalRank}</span>
                            )}
                          </td>
                          <td className="py-3 px-2">
                            <Link
                              href={`/athletes/${result.athlete.id}`}
                              className="text-ski-blue hover:underline font-medium"
                            >
                              {result.athlete.name}
                            </Link>
                          </td>
                          <td className="py-3 px-2 text-gray-600 text-sm">
                            {result.athlete.province || result.athlete.club || '-'}
                          </td>
                          <td className="py-3 px-2">
                            <span className={`text-sm ${resultStatus.color}`}>{resultStatus.label}</span>
                          </td>
                          <td className="py-3 px-2 text-right font-mono text-sm">
                            {formatTime(result.totalTime)}
                          </td>
                          <td className="py-3 px-2 text-right">
                            <span className="font-bold text-ski-blue">{result.finalPoints.toFixed(2)}</span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              {competition.results.length > 20 && (
                <div className="mt-4 text-center">
                  <Link
                    href={`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${id}`}
                    className="text-ski-blue hover:underline text-sm"
                  >
                    查看全部 {competition.results.length} 名选手成绩 →
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 右侧信息卡片 */}
        <div className="space-y-6">
          {/* 基本信息 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-ski-navy mb-4">比赛信息</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-ski-blue mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">比赛日期</div>
                  <div className="font-medium">
                    {formatDate(competition.startDate)}
                    {competition.startDate !== competition.endDate && (
                      <span> 至 {formatDate(competition.endDate)}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">比赛地点</div>
                  <div className="font-medium">{competition.venue || '待定'}</div>
                  <div className="text-sm text-gray-500">{competition.location}</div>
                </div>
              </div>
              {competition.stats && (
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">参赛人数</div>
                    <div className="font-medium">{competition.stats.totalParticipants} 人</div>
                  </div>
                </div>
              )}
              {competition.organizer && (
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">主办方</div>
                    <div className="font-medium">{competition.organizer}</div>
                  </div>
                </div>
              )}
              {competition.format && (
                <div className="flex items-start gap-3">
                  <Timer className="w-5 h-5 text-indigo-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">比赛形式</div>
                    <div className="font-medium">{competition.format}</div>
                  </div>
                </div>
              )}
              {competition.pointsTier && (
                <div className="flex items-start gap-3">
                  <Medal className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">积分档次</div>
                    <div className="font-medium">{competition.pointsTier} 分档</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 快速操作 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-bold text-ski-navy mb-4">快速操作</h3>
            <div className="space-y-3">
              {competition.status === 'REGISTRATION' && (
                <button className="w-full py-3 bg-ski-blue text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  立即报名
                </button>
              )}
              {competition.status === 'COMPLETED' && competition.results && competition.results.length > 0 && (
                <Link
                  href={`/results-announcement?competition=${encodeURIComponent(competition.name)}&id=${id}`}
                  className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  查看成绩公告
                </Link>
              )}
              <button className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                分享比赛
              </button>
            </div>
          </div>

          {/* 联系信息 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-ski-navy mb-3">需要帮助？</h3>
            <p className="text-gray-600 text-sm mb-4">
              如有任何问题，请联系赛事组委会
            </p>
            <div className="text-sm space-y-2">
              <div className="text-gray-600">
                邮箱：<span className="text-ski-blue">competition@ski.org.cn</span>
              </div>
              <div className="text-gray-600">
                电话：<span className="text-ski-blue">400-888-8888</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
