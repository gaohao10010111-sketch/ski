'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  User,
  Trophy,
  Medal,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Loader2,
  AlertCircle,
  RefreshCw,
  ChevronRight
} from 'lucide-react'
import { athletesApi, type AthleteDetail, type SeasonPoints, type CompetitionResultSummary } from '@/lib/api'

// 项目类型映射
const sportTypeLabels: Record<string, string> = {
  ALPINE_SKI: '高山滑雪',
  SNOWBOARD_SLOPESTYLE_BIGAIR: '单板坡障/大跳台',
  SNOWBOARD_PARALLEL: '单板平行项目',
  FREESTYLE_SLOPESTYLE_BIGAIR: '自由式坡障/大跳台',
}

// 状态映射
const statusLabels: Record<string, string> = {
  ACTIVE: '活跃',
  INJURED: '伤病',
  RETIRED: '退役',
}

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-green-100 text-green-800',
  INJURED: 'bg-yellow-100 text-yellow-800',
  RETIRED: 'bg-gray-100 text-gray-800',
}

// U系列分组映射
const uSeriesLabels: Record<string, string> = {
  U12: 'U12组',
  U15: 'U15组',
  U18: 'U18组',
}

export default function AthleteDetailClient({ id }: { id: string }) {
  const [athlete, setAthlete] = useState<AthleteDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 获取运动员详情
  const fetchAthlete = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await athletesApi.get(id)
      if (response.success && response.data) {
        setAthlete(response.data)
      } else {
        setError(response.error?.message || '获取运动员信息失败')
      }
    } catch (err) {
      console.error('获取运动员详情失败:', err)
      setError('网络错误，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchAthlete()
  }, [fetchAthlete])

  // 计算年龄
  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate)
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const m = today.getMonth() - birth.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center">
          <Loader2 className="h-8 w-8 animate-spin text-ski-blue" />
          <span className="ml-2 text-gray-600">加载中...</span>
        </div>
      </div>
    )
  }

  if (error || !athlete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/athletes"
            className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回运动员列表
          </Link>
          <div className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-gray-600 mb-4">{error || '运动员不存在'}</p>
            <button
              onClick={fetchAthlete}
              className="bg-ski-blue text-white px-4 py-2 rounded-md hover:bg-ski-blue/90"
            >
              重试
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按钮 */}
        <Link
          href="/athletes"
          className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回运动员列表
        </Link>

        {/* 运动员头部信息 */}
        <div className="bg-gradient-to-r from-ski-navy to-blue-800 rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* 头像 */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
            </div>

            {/* 基本信息 */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{athlete.name}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[athlete.status]}`}>
                  {statusLabels[athlete.status] || athlete.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-blue-100">
                <span>{athlete.gender === 'MALE' ? '男' : '女'}</span>
                <span>·</span>
                <span>{calculateAge(athlete.birthDate)}岁</span>
                <span>·</span>
                <span>{sportTypeLabels[athlete.sportType] || athlete.sportType}</span>
                {athlete.uSeriesGroup && (
                  <>
                    <span>·</span>
                    <span className="px-2 py-0.5 bg-white/20 rounded text-sm">
                      {uSeriesLabels[athlete.uSeriesGroup] || athlete.uSeriesGroup}
                    </span>
                  </>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-blue-200">
                {athlete.province && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {athlete.province}
                  </div>
                )}
                {athlete.club && (
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    {athlete.club}
                  </div>
                )}
                {athlete.fisCode && (
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    FIS: {athlete.fisCode}
                  </div>
                )}
              </div>
            </div>

            {/* 刷新按钮 */}
            <button
              onClick={fetchAthlete}
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              title="刷新数据"
            >
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧主要内容 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 赛季积分 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-ski-blue" />
                赛季积分
              </h2>
              {athlete.seasonPoints && athlete.seasonPoints.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          赛季
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          项目
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          总积分
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          BL/NL
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          参赛次数
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          排名
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {athlete.seasonPoints.map((sp: SeasonPoints, index: number) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            {sp.season}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {sportTypeLabels[sp.sportType] || sp.sportType}
                            {sp.discipline && <span className="text-gray-400"> · {sp.discipline}</span>}
                          </td>
                          <td className="px-4 py-3 text-sm font-bold text-ski-blue">
                            {sp.totalPoints.toFixed(2)}
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-500">
                            {sp.blPoints !== undefined && <div>BL: {sp.blPoints.toFixed(2)}</div>}
                            {sp.nlPoints !== undefined && <div>NL: {sp.nlPoints.toFixed(2)}</div>}
                            {sp.blPoints === undefined && sp.nlPoints === undefined && '-'}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {sp.competitionCount}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {sp.rank ? (
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                sp.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                                sp.rank === 2 ? 'bg-gray-100 text-gray-800' :
                                sp.rank === 3 ? 'bg-orange-100 text-orange-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                第{sp.rank}名
                              </span>
                            ) : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <TrendingUp className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                  暂无赛季积分数据
                </div>
              )}
            </div>

            {/* 近期比赛成绩 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-ski-navy mb-4 flex items-center gap-2">
                <Medal className="w-5 h-5 text-ski-blue" />
                近期比赛成绩
              </h2>
              {athlete.recentResults && athlete.recentResults.length > 0 ? (
                <div className="space-y-4">
                  {athlete.recentResults.map((result: CompetitionResultSummary) => (
                    <Link
                      key={result.id}
                      href={`/competitions/${result.competition.id}`}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            {result.competition.name}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4" />
                            {result.competition.startDate}
                            <span className="text-gray-300">·</span>
                            {sportTypeLabels[result.competition.sportType] || result.competition.sportType}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className={`text-lg font-bold ${
                              result.finalRank === 1 ? 'text-yellow-600' :
                              result.finalRank === 2 ? 'text-gray-600' :
                              result.finalRank === 3 ? 'text-orange-600' :
                              'text-blue-600'
                            }`}>
                              第{result.finalRank}名
                            </div>
                            <div className="text-sm text-gray-500">
                              {result.finalPoints.toFixed(2)}分
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Medal className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                  暂无比赛成绩记录
                </div>
              )}
            </div>
          </div>

          {/* 右侧信息卡片 */}
          <div className="space-y-6">
            {/* 当前积分 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-ski-navy mb-4">当前积分</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-ski-blue mb-2">
                  {athlete.currentPoints?.toFixed(2) || '-'}
                </div>
                <div className="text-gray-500">
                  {athlete.currentRank ? (
                    <span className="inline-flex items-center gap-1">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      当前排名第 {athlete.currentRank} 名
                    </span>
                  ) : (
                    '暂无排名'
                  )}
                </div>
              </div>
            </div>

            {/* 基本信息 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-ski-navy mb-4">基本信息</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">出生日期</span>
                  <span className="font-medium">{athlete.birthDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">国籍</span>
                  <span className="font-medium">{athlete.nationality}</span>
                </div>
                {athlete.province && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">省份</span>
                    <span className="font-medium">{athlete.province}</span>
                  </div>
                )}
                {athlete.club && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">俱乐部</span>
                    <span className="font-medium">{athlete.club}</span>
                  </div>
                )}
                {athlete.fisCode && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">FIS代码</span>
                    <span className="font-medium">{athlete.fisCode}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">注册时间</span>
                  <span className="font-medium">{athlete.createdAt?.split('T')[0] || '-'}</span>
                </div>
              </div>
            </div>

            {/* 快速操作 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-ski-navy mb-4">相关链接</h3>
              <div className="space-y-3">
                <Link
                  href={`/points/rankings?sportType=${athlete.sportType}`}
                  className="block w-full py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm font-medium"
                >
                  查看项目排名
                </Link>
                <Link
                  href="/competitions"
                  className="block w-full py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm font-medium"
                >
                  浏览比赛列表
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
