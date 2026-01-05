'use client'

import { useState, useMemo } from 'react'
import { Trophy, Medal, Award, Crown, Download, Search, Database, Filter, Star } from 'lucide-react'
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
  const [selectedDiscipline, setSelectedDiscipline] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isExporting, setIsExporting] = useState(false)
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

  // 总积分排名筛选
  const filteredTotalRankings = useMemo(() => {
    let result = totalRankingsData.rankings

    if (selectedAgeGroup !== 'all') {
      result = result.filter(r => r.ageGroup === selectedAgeGroup)
    }

    if (selectedGender !== 'all') {
      result = result.filter(r => r.gender === selectedGender)
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(r =>
        r.athleteName.toLowerCase().includes(term) ||
        r.team.toLowerCase().includes(term)
      )
    }

    return result.map((item, index) => ({
      ...item,
      rank: index + 1
    }))
  }, [selectedAgeGroup, selectedGender, searchTerm])

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">积分排行榜</h1>
          <p className="text-xl text-gray-600">中国滑雪青少年U系列赛事积分排名 · 2025-2026赛季</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
            <Database className="h-4 w-4" />
            数据来源: 官方成绩公告
          </div>
        </div>

        {/* 视图切换 */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setViewMode('total')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'total'
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              总积分排名
            </button>
            <button
              onClick={() => setViewMode('competition')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'competition'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              按比赛查看
            </button>
          </div>
        </div>

        {/* 说明提示 */}
        <div className={`border rounded-lg p-4 mb-8 ${viewMode === 'total' ? 'bg-blue-50 border-blue-200' : 'bg-yellow-50 border-yellow-200'}`}>
          <div className="flex items-start gap-3">
            <Filter className={`h-5 w-5 mt-0.5 ${viewMode === 'total' ? 'text-blue-600' : 'text-yellow-600'}`} />
            <div>
              <h3 className={`font-semibold ${viewMode === 'total' ? 'text-blue-800' : 'text-yellow-800'}`}>
                {viewMode === 'total' ? '总积分说明' : '排名规则说明'}
              </h3>
              <p className={`text-sm mt-1 ${viewMode === 'total' ? 'text-blue-700' : 'text-yellow-700'}`}>
                {viewMode === 'total'
                  ? '总积分 = 同一运动员在不同比赛中获得的积分累加。可按年龄组、性别进行筛选查看。'
                  : '积分排名需在相同比赛、相同小项、相同年龄组、相同性别内比较。请使用下方筛选器选择具体的比赛类别查看对应排名。'}
              </p>
            </div>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className={`grid grid-cols-1 gap-4 ${viewMode === 'total' ? 'md:grid-cols-4' : 'md:grid-cols-6'}`}>
            {/* 搜索框 */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索运动员或单位..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

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
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
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
                onChange={(e) => setSelectedGender(e.target.value)}
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
                <>共 <span className="font-bold text-yellow-600">{filteredTotalRankings.length}</span> 名运动员</>
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

        {/* 统计卡片 */}
        <div className={`grid gap-4 mb-8 ${viewMode === 'total' ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-yellow-500">{stats.totalCompetitions}</div>
            <div className="text-sm text-gray-600">场比赛</div>
          </div>
          {viewMode === 'competition' && (
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-blue-500">{stats.totalEvents}</div>
              <div className="text-sm text-gray-600">个小项</div>
            </div>
          )}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-green-500">{stats.uniqueAthletes}</div>
            <div className="text-sm text-gray-600">名运动员</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-purple-500">
              {viewMode === 'total' ? totalRankingsData.stats.totalResults : stats.totalAthletes}
            </div>
            <div className="text-sm text-gray-600">人次参赛</div>
          </div>
        </div>

        {/* 总积分排名视图 */}
        {viewMode === 'total' && (
          <>
            {filteredTotalRankings.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-500">暂无符合条件的排名数据</p>
                <p className="text-sm text-gray-400 mt-1">请调整筛选条件后重试</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 text-white">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Trophy className="h-6 w-6" />
                    总积分排名
                  </h2>
                  <p className="text-yellow-100 text-sm mt-1">
                    2025-2026赛季 · 跨项目累计积分
                  </p>
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
                      {filteredTotalRankings.map((item) => (
                        <tr
                          key={`${item.athleteId}-${item.ageGroup}-${item.gender}`}
                          className={`hover:bg-gray-50 ${item.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''}`}
                        >
                          <td className="px-4 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-1">
                              {getRankIcon(item.rank)}
                              {item.rank <= 3 && (
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                                  item.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' :
                                  item.rank === 2 ? 'bg-gray-200 text-gray-600' :
                                  item.rank === 3 ? 'bg-orange-200 text-orange-700' :
                                  'bg-blue-100 text-blue-600'
                                }`}>
                                  <span className="text-sm font-bold">
                                    {item.athleteName.charAt(0)}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{item.athleteName}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600" title={item.team}>
                            {item.team}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {item.ageGroup}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-center">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.gender === '男子组' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
                            }`}>
                              {item.gender === '男子组' ? '男' : '女'}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-center">
                            <span className="text-sm text-gray-700">
                              {item.competitionCount}场
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-center">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.bestRank === 1 ? 'bg-yellow-100 text-yellow-800' :
                              item.bestRank <= 3 ? 'bg-orange-100 text-orange-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              第{item.bestRank}名
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-center">
                            <span className={`inline-flex px-4 py-2 text-sm font-bold rounded-lg ${
                              item.rank === 1
                                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md'
                                : item.rank <= 3
                                ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700'
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {item.totalPoints}分
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
                  <div key={groupIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* 组别标题 */}
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4 text-white">
                      <h2 className="text-lg font-semibold">{group.competition}</h2>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-purple-100">
                        <span className="bg-white/20 px-2 py-0.5 rounded">{sportTypeLabels[group.sportType] || group.sportType}</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded">{group.discipline}</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded">{group.ageGroup}</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded">{group.gender}</span>
                        <span className="text-purple-200">{group.date} · {group.location}</span>
                      </div>
                    </div>

                    {/* 排名表格 */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-20">名次</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-16">号码布</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">单位</th>
                            {group.athletes[0]?.run1 && (
                              <>
                                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">第一轮</th>
                                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">第二轮</th>
                              </>
                            )}
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                              {group.athletes[0]?.time ? '成绩' : '得分'}
                            </th>
                            {group.athletes[0]?.points !== undefined && (
                              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-24">积分</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {group.athletes.map((athlete, index) => (
                            <tr key={index} className={`hover:bg-gray-50 ${athlete.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''}`}>
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <div className="flex items-center justify-center gap-1">
                                  {getRankIcon(athlete.rank)}
                                  {athlete.rank <= 3 && (
                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                  )}
                                </div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                                  {athlete.bib}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-8 w-8">
                                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                      <span className="text-xs font-medium text-purple-600">
                                        {athlete.name.charAt(0)}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="ml-3">
                                    <div className="text-sm font-medium text-gray-900">{athlete.name}</div>
                                    {athlete.birthYear && (
                                      <div className="text-xs text-gray-500">{athlete.birthYear}年</div>
                                    )}
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap" title={athlete.team}>
                                {athlete.team}
                              </td>
                              {athlete.run1 && (
                                <>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">{athlete.run1}</td>
                                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center">{athlete.run2}</td>
                                </>
                              )}
                              <td className="px-4 py-3 whitespace-nowrap text-center">
                                <span className={`text-sm font-bold ${athlete.rank === 1 ? 'text-yellow-600' : athlete.rank <= 3 ? 'text-orange-600' : 'text-purple-600'}`}>
                                  {athlete.time || athlete.bestScore}
                                </span>
                              </td>
                              {athlete.points !== undefined && (
                                <td className="px-4 py-3 whitespace-nowrap text-center">
                                  <span className={`inline-flex px-3 py-1.5 text-sm font-bold rounded-lg ${
                                    athlete.rank === 1
                                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-sm'
                                      : athlete.rank <= 3
                                      ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700'
                                      : 'bg-green-100 text-green-800'
                                  }`}>
                                    {athlete.points}分
                                  </span>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* 排行榜说明 */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">积分规则说明</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">U系列统一积分体系（360分制）</h4>
              <ul className="space-y-1">
                <li>• 第1名：360分</li>
                <li>• 第2名：329分</li>
                <li>• 第3名：303分</li>
                <li>• 第4-50名：递减至1分</li>
                <li>• 50名后：计0分</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">{viewMode === 'total' ? '总积分计算规则' : '排名比较规则'}</h4>
              <ul className="space-y-1">
                {viewMode === 'total' ? (
                  <>
                    <li>• 总积分 = 所有参赛场次积分之和</li>
                    <li>• 支持按年龄组、性别筛选</li>
                    <li>• 同一运动员的不同比赛积分累加</li>
                    <li>• 跨项目（单板/自由式/高山）均计入</li>
                  </>
                ) : (
                  <>
                    <li>• 高山滑雪：按时间排名（时间越短越好）</li>
                    <li>• 单板/自由式：按得分排名（得分越高越好）</li>
                    <li>• 同一比赛、同一小项、同一年龄组、同一性别内比较</li>
                    <li>• 赛季积分 = 最佳站积分之和</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
