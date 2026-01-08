'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Trophy, Medal, Award, Crown, Download, Search, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import { latestResults, type AthleteResult } from '@/data/latestResults'
import { useToast } from '@/components/Toast'
import { totalRankingsData } from '@/data/totalRankings'

// 项目类型映射
const sportTypeLabels: Record<string, string> = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle': '单板坡障/大跳台',
  'snowboard-parallel': '单板平行项目',
  'freestyle-slopestyle': '自由式坡障/大跳台',
}

// 从数据中提取所有可用的筛选选项
function extractFilterOptions() {
  const disciplines = new Set<string>()
  const ageGroups = new Set<string>()
  const genders = new Set<string>()
  const sportTypes = new Set<string>()

  for (const competition of latestResults.competitions) {
    sportTypes.add(competition.sportType)
    for (const event of competition.events) {
      disciplines.add(event.discipline)
      ageGroups.add(event.ageGroup)
      genders.add(event.gender)
    }
  }

  return {
    disciplines: Array.from(disciplines).sort(),
    ageGroups: Array.from(ageGroups).sort((a, b) => {
      const numA = parseInt(a.replace('U', ''))
      const numB = parseInt(b.replace('U', ''))
      return numA - numB
    }),
    genders: Array.from(genders).sort(),
    sportTypes: Array.from(sportTypes)
  }
}

// 获取匹配筛选条件的赛事组合
interface RankingGroup {
  competition: string
  sportType: string
  discipline: string
  ageGroup: string
  gender: string
  date: string
  location: string
  athletes: AthleteResult[]
}

function getRankingGroups(
  sportType: string,
  discipline: string,
  ageGroup: string,
  gender: string
): RankingGroup[] {
  const groups: RankingGroup[] = []

  for (const competition of latestResults.competitions) {
    if (sportType !== 'all' && competition.sportType !== sportType) continue

    for (const event of competition.events) {
      if (discipline !== 'all' && event.discipline !== discipline) continue
      if (ageGroup !== 'all' && event.ageGroup !== ageGroup) continue
      if (gender !== 'all' && event.gender !== gender) continue

      groups.push({
        competition: competition.competition,
        sportType: competition.sportType,
        discipline: event.discipline,
        ageGroup: event.ageGroup,
        gender: event.gender,
        date: competition.date,
        location: competition.location,
        athletes: event.athletes
      })
    }
  }

  return groups
}

export default function PointsRankingsPage() {
  // 视图模式：'competition' 按比赛查看，'total' 总积分排行
  const [viewMode, setViewMode] = useState<'competition' | 'total'>('total')

  const [selectedSportType, setSelectedSportType] = useState('all')
  const [selectedTotalSportType, setSelectedTotalSportType] = useState('all') // 总积分视图的项目筛选
  const [selectedDiscipline, setSelectedDiscipline] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isExporting, setIsExporting] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  // 每个项目的分页状态
  const [sportPages, setSportPages] = useState<Record<string, number>>({})
  const sportPageSize = 20 // 每页显示20条
  const { showToast } = useToast()

  const filterOptions = useMemo(() => extractFilterOptions(), [])

  // 获取当前筛选条件下的排名组（按比赛视图）
  const rankingGroups = useMemo(() => {
    return getRankingGroups(selectedSportType, selectedDiscipline, selectedAgeGroup, selectedGender)
  }, [selectedSportType, selectedDiscipline, selectedAgeGroup, selectedGender])

  // 搜索过滤（按比赛视图）
  const filteredGroups = useMemo(() => {
    if (!searchTerm) return rankingGroups
    const term = searchTerm.toLowerCase()
    return rankingGroups.map(group => ({
      ...group,
      athletes: group.athletes.filter(a =>
        a.name.toLowerCase().includes(term) ||
        a.team.toLowerCase().includes(term)
      )
    })).filter(group => group.athletes.length > 0)
  }, [rankingGroups, searchTerm])

  // 按项目分组的总积分排名筛选
  const filteredSportRankings = useMemo(() => {
    // 获取要显示的项目列表
    let sportRankings = totalRankingsData.sportRankings

    if (selectedTotalSportType !== 'all') {
      sportRankings = sportRankings.filter(sr => sr.sportType === selectedTotalSportType)
    }

    // 对每个项目应用年龄组、性别、搜索筛选
    return sportRankings.map(sr => {
      let rankings = sr.rankings

      if (selectedAgeGroup !== 'all') {
        rankings = rankings.filter(r => r.ageGroup === selectedAgeGroup)
      }

      if (selectedGender !== 'all') {
        rankings = rankings.filter(r => r.gender === selectedGender)
      }

      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        rankings = rankings.filter(r =>
          r.athleteName.toLowerCase().includes(term) ||
          r.team.toLowerCase().includes(term)
        )
      }

      // 重新计算排名
      return {
        ...sr,
        rankings: rankings.map((item, index) => ({
          ...item,
          rank: index + 1
        })),
        total: rankings.length
      }
    }).filter(sr => sr.rankings.length > 0) // 过滤掉没有数据的项目
  }, [selectedTotalSportType, selectedAgeGroup, selectedGender, searchTerm])

  // 总积分排名筛选（兼容旧格式，用于导出等）
  const filteredTotalRankings = useMemo(() => {
    // 合并所有筛选后的项目排名
    return filteredSportRankings.flatMap(sr => sr.rankings)
  }, [filteredSportRankings])

  // 分页计算
  const totalPages = useMemo(() => {
    return Math.ceil(filteredTotalRankings.length / pageSize)
  }, [filteredTotalRankings.length, pageSize])

  // 当前页数据
  const paginatedRankings = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return filteredTotalRankings.slice(start, end)
  }, [filteredTotalRankings, currentPage, pageSize])

  // 筛选条件变化时重置页码
  const resetPage = () => {
    setCurrentPage(1)
    setSportPages({}) // 重置所有项目的分页
  }

  // 获取某个项目的当前页码
  const getSportPage = (sportType: string) => sportPages[sportType] || 1

  // 设置某个项目的页码
  const setSportPage = (sportType: string, page: number) => {
    setSportPages(prev => ({ ...prev, [sportType]: page }))
  }

  // 计算某个项目的分页数据
  const getPaginatedRankings = (rankings: typeof filteredSportRankings[0]['rankings'], sportType: string) => {
    const page = getSportPage(sportType)
    const start = (page - 1) * sportPageSize
    const end = start + sportPageSize
    return rankings.slice(start, end)
  }

  // 计算某个项目的总页数
  const getTotalPages = (totalCount: number) => Math.ceil(totalCount / sportPageSize)

  // 统计信息
  const stats = useMemo(() => {
    if (viewMode === 'total') {
      return {
        totalCompetitions: totalRankingsData.stats.competitionCount,
        totalEvents: totalRankingsData.stats.totalResults,
        uniqueAthletes: totalRankingsData.stats.athleteCount,
        totalAthletes: filteredTotalRankings.length
      }
    }

    let totalAthletes = 0
    let totalEvents = 0
    const athleteSet = new Set<string>()

    for (const group of filteredGroups) {
      totalEvents++
      for (const athlete of group.athletes) {
        athleteSet.add(`${athlete.name}-${athlete.team}`)
        totalAthletes++
      }
    }

    return {
      totalEvents,
      totalAthletes,
      uniqueAthletes: athleteSet.size,
      totalCompetitions: latestResults.competitions.length
    }
  }, [filteredGroups, filteredTotalRankings, viewMode])

  // 导出排行榜
  const handleExport = async () => {
    setIsExporting(true)
    try {
      const rows: string[][] = []

      if (viewMode === 'total') {
        if (filteredTotalRankings.length === 0) {
          showToast('没有数据可导出', 'warning')
          return
        }
        rows.push(['排名', '运动员', '单位', '年龄组', '性别', '总积分', '参赛次数', '最佳名次'])
        for (const item of filteredTotalRankings) {
          rows.push([
            String(item.rank),
            item.athleteName,
            item.team,
            item.ageGroup,
            item.gender,
            String(item.totalPoints),
            String(item.competitionCount),
            String(item.bestRank)
          ])
        }
      } else {
        if (filteredGroups.length === 0) {
          showToast('没有数据可导出', 'warning')
          return
        }
        rows.push(['比赛', '项目', '小项', '年龄组', '性别', '排名', '号码', '姓名', '单位', '成绩/得分', '积分'])
        for (const group of filteredGroups) {
          for (const athlete of group.athletes) {
            rows.push([
              group.competition,
              sportTypeLabels[group.sportType] || group.sportType,
              group.discipline,
              group.ageGroup,
              group.gender,
              String(athlete.rank),
              String(athlete.bib),
              athlete.name,
              athlete.team,
              athlete.time || (athlete.bestScore ? String(athlete.bestScore) : '-'),
              athlete.points ? String(athlete.points) : '-'
            ])
          }
        }
      }

      const csvContent = rows.map(row => row.join(',')).join('\n')
      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `积分排行榜_${viewMode === 'total' ? '总积分' : '按比赛'}_${new Date().toISOString().split('T')[0]}.csv`
      link.click()
      URL.revokeObjectURL(url)

      showToast(`成功导出 ${rows.length - 1} 条数据`, 'success')
    } catch {
      showToast('导出失败，请重试', 'error')
    } finally {
      setIsExporting(false)
    }
  }

  const getRankIcon = (rank: number) => {
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按钮 */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-ski-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回首页
        </Link>

        {/* 视图切换 */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setViewMode('total')}
              className={`px-5 py-2 rounded-md text-sm font-medium ${
                viewMode === 'total'
                  ? 'bg-ski-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              总积分排名
            </button>
            <button
              onClick={() => setViewMode('competition')}
              className={`px-5 py-2 rounded-md text-sm font-medium ${
                viewMode === 'competition'
                  ? 'bg-ski-blue text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              按比赛查看
            </button>
          </div>
        </div>

        {/* 说明提示 */}
        <div className="bg-gray-100 rounded-lg p-3 mb-6 text-sm text-gray-600">
          {viewMode === 'total'
            ? '总积分 = 同一运动员在不同比赛中获得的积分累加'
            : '积分排名需在相同比赛、相同小项、相同年龄组、相同性别内比较'}
        </div>

        {/* 筛选器 */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className={`grid grid-cols-1 gap-4 ${viewMode === 'total' ? 'md:grid-cols-5' : 'md:grid-cols-6'}`}>
            {/* 搜索框 */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索运动员或单位..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); resetPage(); }}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* 总积分视图的项目筛选 */}
            {viewMode === 'total' && (
              <div>
                <select
                  value={selectedTotalSportType}
                  onChange={(e) => { setSelectedTotalSportType(e.target.value); resetPage(); }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="all">全部项目</option>
                  {totalRankingsData.filters.sportTypes.map(st => (
                    <option key={st.value} value={st.value}>{st.label}</option>
                  ))}
                </select>
              </div>
            )}

            {/* 按比赛视图的额外筛选 */}
            {viewMode === 'competition' && (
              <>
                {/* 项目类型 */}
                <div>
                  <select
                    value={selectedSportType}
                    onChange={(e) => setSelectedSportType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="all">全部项目</option>
                    {filterOptions.sportTypes.map(st => (
                      <option key={st} value={st}>{sportTypeLabels[st] || st}</option>
                    ))}
                  </select>
                </div>

                {/* 小项 */}
                <div>
                  <select
                    value={selectedDiscipline}
                    onChange={(e) => setSelectedDiscipline(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="all">全部小项</option>
                    {filterOptions.disciplines.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* 年龄组 */}
            <div>
              <select
                value={selectedAgeGroup}
                onChange={(e) => { setSelectedAgeGroup(e.target.value); resetPage(); }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">全部年龄组</option>
                {(viewMode === 'total' ? totalRankingsData.filters.ageGroups : filterOptions.ageGroups).map(ag => (
                  <option key={ag} value={ag}>{ag}</option>
                ))}
              </select>
            </div>

            {/* 性别 */}
            <div>
              <select
                value={selectedGender}
                onChange={(e) => { setSelectedGender(e.target.value); resetPage(); }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">男女不限</option>
                {(viewMode === 'total' ? totalRankingsData.filters.genders : filterOptions.genders).map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 筛选结果和导出 */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {viewMode === 'total' ? (
                <>共 <span className="font-bold text-yellow-600">{filteredSportRankings.length}</span> 个项目，
                <span className="font-bold text-yellow-600">{filteredTotalRankings.length}</span> 名运动员</>
              ) : (
                <>共 <span className="font-bold text-purple-600">{stats.totalEvents}</span> 个小项，
                <span className="font-bold text-purple-600">{stats.totalAthletes}</span> 人次参赛</>
              )}
            </span>
            <button
              onClick={handleExport}
              disabled={isExporting || (viewMode === 'total' ? filteredTotalRankings.length === 0 : filteredGroups.length === 0)}
              className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              {isExporting ? '导出中...' : '导出CSV'}
            </button>
          </div>
        </div>

        {/* 总积分排名视图 - 按项目分别显示 */}
        {viewMode === 'total' && (
          <>
            {filteredSportRankings.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-500">暂无符合条件的排名数据</p>
                <p className="text-sm text-gray-400 mt-1">请调整筛选条件后重试</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredSportRankings.map((sportRanking) => (
                  <div key={sportRanking.sportType} className="bg-white rounded-lg shadow overflow-hidden">
                    {/* 项目标题 */}
                    <div className="bg-ski-blue px-4 py-3 text-white flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Trophy className="h-5 w-5" />
                        <h2 className="text-lg font-medium">{sportRanking.sportName}</h2>
                      </div>
                      <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">
                        {sportRanking.total} 名运动员
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-20">名次</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">单位</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">组别</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">性别</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">参赛</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">最佳</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-28">总积分</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {getPaginatedRankings(sportRanking.rankings, sportRanking.sportType).map((item) => (
                            <tr
                              key={`${sportRanking.sportType}-${item.athleteId}-${item.ageGroup}-${item.gender}`}
                              className={`hover:bg-blue-50 transition-colors ${
                                item.rank === 1 ? 'bg-yellow-50' :
                                item.rank === 2 ? 'bg-gray-50' :
                                item.rank === 3 ? 'bg-orange-50' : ''
                              }`}
                            >
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                {getRankIcon(item.rank)}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className={`text-sm font-medium ${item.rank <= 3 ? 'text-gray-900' : 'text-gray-700'}`}>
                                  {item.athleteName}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-600" title={item.team}>
                                {item.team}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                                  item.ageGroup === 'U12' ? 'bg-green-100 text-green-700' :
                                  item.ageGroup === 'U15' ? 'bg-blue-100 text-blue-700' :
                                  'bg-purple-100 text-purple-700'
                                }`}>
                                  {item.ageGroup}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <span className={`text-sm ${item.gender === '男子组' ? 'text-blue-600' : 'text-pink-600'}`}>
                                  {item.gender === '男子组' ? '男' : '女'}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <span className="text-sm text-gray-600">{item.competitionCount}</span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <span className={`text-sm font-medium ${
                                  item.bestRank === 1 ? 'text-yellow-600' :
                                  item.bestRank <= 3 ? 'text-orange-600' : 'text-gray-600'
                                }`}>
                                  {item.bestRank}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <span className={`inline-flex px-3 py-1 rounded-lg text-sm font-bold ${
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

                    {/* 分页控件 */}
                    {sportRanking.rankings.length > sportPageSize && (
                      <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          第 {getSportPage(sportRanking.sportType)} / {getTotalPages(sportRanking.rankings.length)} 页，
                          共 {sportRanking.rankings.length} 名运动员
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSportPage(sportRanking.sportType, getSportPage(sportRanking.sportType) - 1)}
                            disabled={getSportPage(sportRanking.sportType) === 1}
                            className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                          >
                            <ChevronLeft className="h-4 w-4" />
                            上一页
                          </button>
                          {/* 页码按钮 */}
                          <div className="flex items-center gap-1">
                            {(() => {
                              const totalPages = getTotalPages(sportRanking.rankings.length)
                              const currentPage = getSportPage(sportRanking.sportType)
                              const pages: (number | string)[] = []

                              if (totalPages <= 7) {
                                // 少于7页，全部显示
                                for (let i = 1; i <= totalPages; i++) pages.push(i)
                              } else {
                                // 多于7页，显示省略
                                if (currentPage <= 4) {
                                  pages.push(1, 2, 3, 4, 5, '...', totalPages)
                                } else if (currentPage >= totalPages - 3) {
                                  pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
                                } else {
                                  pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
                                }
                              }

                              return pages.map((page, idx) => (
                                page === '...' ? (
                                  <span key={`ellipsis-${idx}`} className="px-2 text-gray-400">...</span>
                                ) : (
                                  <button
                                    key={page}
                                    onClick={() => setSportPage(sportRanking.sportType, page as number)}
                                    className={`w-8 h-8 rounded text-sm ${
                                      currentPage === page
                                        ? 'bg-ski-blue text-white'
                                        : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                                    }`}
                                  >
                                    {page}
                                  </button>
                                )
                              ))
                            })()}
                          </div>
                          <button
                            onClick={() => setSportPage(sportRanking.sportType, getSportPage(sportRanking.sportType) + 1)}
                            disabled={getSportPage(sportRanking.sportType) >= getTotalPages(sportRanking.rankings.length)}
                            className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                          >
                            下一页
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* 按比赛视图 */}
        {viewMode === 'competition' && (
          <>
            {filteredGroups.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-500">暂无符合条件的排名数据</p>
                <p className="text-sm text-gray-400 mt-1">请尝试调整筛选条件</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="bg-white rounded-lg shadow overflow-hidden">
                    {/* 组别标题 */}
                    <div className="bg-ski-blue px-4 py-3 text-white">
                      <h2 className="text-base font-medium">{group.competition}</h2>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex px-2 py-0.5 rounded bg-blue-500 text-xs">
                          {sportTypeLabels[group.sportType] || group.sportType}
                        </span>
                        <span className="inline-flex px-2 py-0.5 rounded bg-blue-500 text-xs">
                          {group.discipline}
                        </span>
                        <span className={`inline-flex px-2 py-0.5 rounded text-xs ${
                          group.ageGroup === 'U12' ? 'bg-green-500' :
                          group.ageGroup === 'U15' ? 'bg-yellow-500 text-yellow-900' :
                          'bg-purple-500'
                        }`}>
                          {group.ageGroup}
                        </span>
                        <span className={`inline-flex px-2 py-0.5 rounded text-xs ${
                          group.gender === '男子组' ? 'bg-sky-400' : 'bg-pink-400'
                        }`}>
                          {group.gender}
                        </span>
                      </div>
                    </div>

                    {/* 排名表格 */}
                    <div className="overflow-x-auto">
                      {(() => {
                        // 预先计算列配置，确保表头和数据行一致
                        const hasRun = group.athletes.some(a => a.run1)
                        const hasTime = group.athletes.some(a => a.time)
                        const hasBestScore = group.athletes.some(a => a.bestScore !== undefined)
                        const hasPoints = group.athletes.some(a => a.points !== undefined)

                        return (
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-20">名次</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-16">号码布</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">单位</th>
                            {hasRun && (
                              <>
                                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">第一轮</th>
                                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">第二轮</th>
                              </>
                            )}
                            {(hasTime || hasBestScore) && (
                              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                {hasTime ? '成绩' : '得分'}
                              </th>
                            )}
                            {hasPoints && (
                              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-24">积分</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {group.athletes.map((athlete, index) => (
                            <tr
                              key={index}
                              className={`hover:bg-blue-50 transition-colors ${
                                athlete.rank === 1 ? 'bg-yellow-50' :
                                athlete.rank === 2 ? 'bg-gray-50' :
                                athlete.rank === 3 ? 'bg-orange-50' : ''
                              }`}
                            >
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                {getRankIcon(athlete.rank)}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-medium text-gray-600">
                                  {athlete.bib}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span className={`text-sm font-medium ${athlete.rank <= 3 ? 'text-gray-900' : 'text-gray-700'}`}>
                                  {athlete.name}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap" title={athlete.team}>
                                {athlete.team}
                              </td>
                              {hasRun && (
                                <>
                                  <td className="px-4 py-3 whitespace-nowrap text-center">
                                    <span className="text-sm text-gray-600">{athlete.run1 || '-'}</span>
                                  </td>
                                  <td className="px-4 py-3 whitespace-nowrap text-center">
                                    <span className="text-sm text-gray-600">{athlete.run2 || '-'}</span>
                                  </td>
                                </>
                              )}
                              {(hasTime || hasBestScore) && (
                                <td className="px-4 py-3 whitespace-nowrap text-center">
                                  <span className={`text-sm font-medium ${
                                    athlete.rank === 1 ? 'text-yellow-600' :
                                    athlete.rank === 2 ? 'text-gray-700' :
                                    athlete.rank === 3 ? 'text-orange-600' : 'text-gray-900'
                                  }`}>
                                    {athlete.time || athlete.bestScore || '-'}
                                  </span>
                                </td>
                              )}
                              {hasPoints && (
                                <td className="px-4 py-3 whitespace-nowrap text-center">
                                  <span className={`inline-flex px-3 py-1 rounded-lg text-sm font-bold ${
                                    athlete.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                                    athlete.rank === 2 ? 'bg-gray-300 text-gray-800' :
                                    athlete.rank === 3 ? 'bg-orange-300 text-orange-900' :
                                    'bg-blue-100 text-blue-700'
                                  }`}>
                                    {athlete.points ?? '-'}
                                  </span>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                        )
                      })()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* 排行榜说明 */}
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">积分规则</h3>
          <div className="text-sm text-gray-600">
            <p>U系列统一采用360分制：第1名360分，第2名329分，第3名303分，递减至第50名1分。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
