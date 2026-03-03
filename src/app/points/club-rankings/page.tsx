'use client'

import { useState, useMemo } from 'react'
import { Trophy, Crown, Medal, Award, Search, Download, Users, Calendar, Target, Mountain, Sparkles, ArrowLeftRight, Wind, Star } from 'lucide-react'
import { clubRankingsData } from '@/data/clubRankings'
import { useToast } from '@/components/Toast'

const sportTypeConfig = [
  { value: 'all', label: '全部项目', shortLabel: '全部', icon: Star },
  { value: 'alpine', label: '高山滑雪', shortLabel: '高山', icon: Mountain },
  { value: 'snowboard-slopestyle-bigair', label: '单板坡障/大跳台', shortLabel: '单板坡障', icon: Sparkles },
  { value: 'snowboard-parallel', label: '单板平行项目', shortLabel: '单板平行', icon: ArrowLeftRight },
  { value: 'freestyle-slopestyle-bigair', label: '自由式坡障/大跳台', shortLabel: '自由式', icon: Wind },
]

export default function ClubRankingsPage() {
  const [selectedSportType, setSelectedSportType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isExporting, setIsExporting] = useState(false)
  const { showToast } = useToast()

  // Get rankings for selected sport type, with search filter
  const currentRankings = useMemo(() => {
    const sport = clubRankingsData.sportRankings.find(sr => sr.sportType === selectedSportType)
    if (!sport) return []
    if (!searchTerm) return sport.rankings
    const term = searchTerm.toLowerCase()
    return sport.rankings.filter(r => r.team.toLowerCase().includes(term))
  }, [selectedSportType, searchTerm])

  const currentSportName = sportTypeConfig.find(c => c.value === selectedSportType)?.label || ''

  const handleExport = async () => {
    setIsExporting(true)
    try {
      if (currentRankings.length === 0) {
        showToast('没有数据可导出', 'warning')
        return
      }
      const rows: string[][] = [['排名', '俱乐部', '运动员人数', '参赛场次', '参加小项', '金牌', '银牌', '铜牌', '总积分']]
      for (const item of currentRankings) {
        rows.push([String(item.rank), item.team, String(item.athleteCount), String(item.competitionCount), String(item.disciplineCount), String(item.goldCount), String(item.silverCount), String(item.bronzeCount), String(item.totalPoints)])
      }
      const csvContent = rows.map(row => row.join(',')).join('\n')
      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `俱乐部积分排行_${currentSportName}_${new Date().toISOString().split('T')[0]}.csv`
      link.click()
      URL.revokeObjectURL(url)
      showToast(`成功导出 ${rows.length - 1} 条数据`, 'success')
    } catch {
      showToast('导出失败，请重试', 'error')
    } finally {
      setIsExporting(false)
    }
  }

  const getRankDisplay = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-orange-500" />
      default:
        return (
          <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
            {rank}
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <div className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-ski-blue via-blue-500 to-indigo-600"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-10 md:pt-16 md:pb-14">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-bold bg-ski-blue text-white uppercase tracking-wider shadow-sm">
                Official
              </span>
              <span className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border border-amber-200">
                2025-2026 赛季
              </span>
              <span className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200">
                U系列赛事
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6">
              俱乐部积分排行
            </h1>

            <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
              全国滑雪青少年U系列赛事俱乐部积分排名<br className="hidden sm:block" />
              俱乐部积分 = 旗下运动员在各站赛事积分之和
            </p>
          </div>
        </div>

        <div className="border-b border-gray-200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-2.5 sm:p-4">
            <div className="flex items-center">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-lg sm:text-2xl font-bold text-blue-700">{clubRankingsData.stats.totalClubs}</div>
                <div className="text-xs sm:text-sm text-blue-600">参赛俱乐部</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-2.5 sm:p-4">
            <div className="flex items-center">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-lg sm:text-2xl font-bold text-green-700">{clubRankingsData.stats.totalAthletes}</div>
                <div className="text-xs sm:text-sm text-green-600">俱乐部运动员</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-2.5 sm:p-4">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-lg sm:text-2xl font-bold text-purple-700">{clubRankingsData.stats.totalCompetitions}</div>
                <div className="text-xs sm:text-sm text-purple-600">已完赛事</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sport type tabs */}
        <div className="mb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex justify-center overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <div className="inline-flex bg-white rounded-lg shadow p-1 gap-0.5 sm:gap-1">
              {sportTypeConfig.map((config) => {
                const Icon = config.icon
                const isSelected = selectedSportType === config.value
                return (
                  <button
                    key={config.value}
                    onClick={() => { setSelectedSportType(config.value); setSearchTerm(''); }}
                    className={`flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      isSelected
                        ? 'bg-ski-blue text-white shadow'
                        : 'text-gray-600 hover:text-ski-blue hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="sm:hidden">{config.shortLabel}</span>
                    <span className="hidden sm:inline">{config.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Search + Export */}
        <div className="bg-white rounded-lg shadow p-3 mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索俱乐部名称..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ski-blue focus:border-transparent"
              />
            </div>
            <button
              onClick={handleExport}
              disabled={isExporting || currentRankings.length === 0}
              className="bg-ski-blue text-white py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              导出
            </button>
          </div>
        </div>

        {/* Podium - top 3 */}
        {!searchTerm && currentRankings.length >= 3 && (
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow overflow-hidden mb-4 px-1 sm:px-4 py-3 sm:py-6">
            <div className="flex items-end justify-center gap-1 sm:gap-4 max-w-lg mx-auto">
              {/* Silver - 2nd */}
              <div className="flex flex-col items-center w-[100px] sm:w-auto">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center shadow-lg mb-1 sm:mb-2 ring-2 sm:ring-4 ring-gray-200">
                  <span className="text-base sm:text-2xl font-bold text-gray-700">2</span>
                </div>
                <div className="text-center w-full">
                  <div className="font-bold text-gray-800 text-[11px] sm:text-sm truncate">{currentRankings[1]?.team}</div>
                  <div className="text-[9px] sm:text-xs text-gray-500">{currentRankings[1]?.athleteCount}人</div>
                  <div className="mt-0.5 sm:mt-1 px-1 sm:px-2 py-0.5 bg-gray-200 rounded text-[10px] sm:text-xs font-bold text-gray-700 inline-block">
                    {currentRankings[1]?.totalPoints}分
                  </div>
                </div>
                <div className="w-14 sm:w-20 h-10 sm:h-16 bg-gradient-to-t from-gray-300 to-gray-200 rounded-t-lg mt-1 sm:mt-2 flex items-center justify-center">
                  <Medal className="h-4 w-4 sm:h-6 sm:w-6 text-gray-500" />
                </div>
              </div>

              {/* Gold - 1st */}
              <div className="flex flex-col items-center -mt-4 sm:-mt-6 w-[110px] sm:w-auto">
                <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-xl mb-1 sm:mb-2 ring-2 sm:ring-4 ring-yellow-300">
                  <Crown className="h-5 w-5 sm:h-8 sm:w-8 text-yellow-800" />
                </div>
                <div className="text-center w-full">
                  <div className="font-bold text-gray-900 text-xs sm:text-base truncate">{currentRankings[0]?.team}</div>
                  <div className="text-[9px] sm:text-xs text-gray-600">{currentRankings[0]?.athleteCount}人</div>
                  <div className="mt-0.5 sm:mt-1 px-1.5 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded text-[10px] sm:text-sm font-bold text-yellow-900 shadow inline-block">
                    {currentRankings[0]?.totalPoints}分
                  </div>
                </div>
                <div className="w-16 sm:w-24 h-14 sm:h-24 bg-gradient-to-t from-yellow-400 to-amber-300 rounded-t-lg mt-1 sm:mt-2 flex items-center justify-center shadow-lg">
                  <Trophy className="h-5 w-5 sm:h-8 sm:w-8 text-yellow-700" />
                </div>
              </div>

              {/* Bronze - 3rd */}
              <div className="flex flex-col items-center w-[100px] sm:w-auto">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg mb-1 sm:mb-2 ring-2 sm:ring-4 ring-orange-200">
                  <span className="text-base sm:text-2xl font-bold text-orange-800">3</span>
                </div>
                <div className="text-center w-full">
                  <div className="font-bold text-gray-800 text-[11px] sm:text-sm truncate">{currentRankings[2]?.team}</div>
                  <div className="text-[9px] sm:text-xs text-gray-500">{currentRankings[2]?.athleteCount}人</div>
                  <div className="mt-0.5 sm:mt-1 px-1 sm:px-2 py-0.5 bg-orange-200 rounded text-[10px] sm:text-xs font-bold text-orange-800 inline-block">
                    {currentRankings[2]?.totalPoints}分
                  </div>
                </div>
                <div className="w-14 sm:w-20 h-8 sm:h-12 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-lg mt-1 sm:mt-2 flex items-center justify-center">
                  <Award className="h-3 w-3 sm:h-5 sm:w-5 text-orange-700" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rankings table */}
        {currentRankings.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-ski-blue" />
              <span className="font-medium text-gray-900 text-sm sm:text-base">{currentSportName}</span>
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{currentRankings.length} 个俱乐部</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <th className="px-2 sm:px-3 py-2.5 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider w-12">排名</th>
                    <th className="px-2 sm:px-3 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">俱乐部</th>
                    <th className="px-2 sm:px-3 py-2.5 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider w-14">人数</th>
                    <th className="hidden sm:table-cell px-2 py-2.5 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider w-14">场次</th>
                    <th className="hidden md:table-cell px-2 py-2.5 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider w-14">小项</th>
                    <th className="px-1 sm:px-2 py-2.5 text-center text-xs font-semibold text-yellow-600 tracking-wider w-10 sm:w-12">&#x1F947;</th>
                    <th className="px-1 sm:px-2 py-2.5 text-center text-xs font-semibold text-gray-400 tracking-wider w-10 sm:w-12">&#x1F948;</th>
                    <th className="px-1 sm:px-2 py-2.5 text-center text-xs font-semibold text-orange-500 tracking-wider w-10 sm:w-12">&#x1F949;</th>
                    <th className="px-2 sm:px-3 py-2.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">总积分</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRankings.map((item, idx) => (
                    <tr
                      key={`${item.team}-${idx}`}
                      className={`border-b border-gray-100 transition-colors ${
                        item.rank <= 3 ? 'bg-gradient-to-r from-yellow-50/30 to-transparent' : 'hover:bg-gray-50'
                      }`}
                    >
                      <td className="px-2 sm:px-3 py-2.5">
                        <div className="flex items-center justify-center">
                          {getRankDisplay(item.rank)}
                        </div>
                      </td>
                      <td className="px-2 sm:px-3 py-2.5">
                        <span className={`font-medium text-sm ${item.rank <= 3 ? 'text-gray-900' : 'text-gray-700'}`}>
                          {item.team}
                        </span>
                      </td>
                      <td className="px-2 sm:px-3 py-2.5 text-center">
                        <span className="text-sm text-gray-600">{item.athleteCount}</span>
                      </td>
                      <td className="hidden sm:table-cell px-2 py-2.5 text-center">
                        <span className="text-sm text-gray-600">{item.competitionCount}</span>
                      </td>
                      <td className="hidden md:table-cell px-2 py-2.5 text-center">
                        <span className="text-sm text-gray-600">{item.disciplineCount}</span>
                      </td>
                      <td className="px-1 sm:px-2 py-2.5 text-center">
                        <span className={`text-sm font-semibold ${item.goldCount > 0 ? 'text-yellow-600' : 'text-gray-300'}`}>{item.goldCount}</span>
                      </td>
                      <td className="px-1 sm:px-2 py-2.5 text-center">
                        <span className={`text-sm font-semibold ${item.silverCount > 0 ? 'text-gray-500' : 'text-gray-300'}`}>{item.silverCount}</span>
                      </td>
                      <td className="px-1 sm:px-2 py-2.5 text-center">
                        <span className={`text-sm font-semibold ${item.bronzeCount > 0 ? 'text-orange-500' : 'text-gray-300'}`}>{item.bronzeCount}</span>
                      </td>
                      <td className="px-2 sm:px-3 py-2.5 text-right">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-lg text-sm font-bold ${
                          item.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                          item.rank === 2 ? 'bg-gray-300 text-gray-800' :
                          item.rank === 3 ? 'bg-orange-300 text-orange-900' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {item.totalPoints}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-8 sm:p-12 text-center">
            <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无数据</h3>
            <p className="text-sm text-gray-500">
              {searchTerm ? '未找到匹配的俱乐部，请调整搜索关键词' : '当前项目下没有俱乐部排名数据'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
