'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Trophy, Medal, Award, Crown, Download, Search, ArrowLeft, Wind } from 'lucide-react'
import { latestResults, type AthleteResult } from '@/data/latestResults'
import { useToast } from '@/components/Toast'

// 获取自由式坡障/大跳台的排名数据
interface RankingGroup {
  competition: string
  discipline: string
  ageGroup: string
  gender: string
  date: string
  location: string
  athletes: AthleteResult[]
}

function getFreestyleSlopestyleRankings(
  discipline: string,
  ageGroup: string,
  gender: string
): RankingGroup[] {
  const groups: RankingGroup[] = []

  for (const competition of latestResults.competitions) {
    if (competition.sportType !== 'freestyle-slopestyle') continue

    for (const event of competition.events) {
      if (discipline !== 'all' && event.discipline !== discipline) continue
      if (ageGroup !== 'all' && event.ageGroup !== ageGroup) continue
      if (gender !== 'all' && event.gender !== gender) continue

      groups.push({
        competition: competition.competition,
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

// 从数据中提取筛选选项
function extractFilterOptions() {
  const disciplines = new Set<string>()
  const ageGroups = new Set<string>()
  const genders = new Set<string>()

  for (const competition of latestResults.competitions) {
    if (competition.sportType !== 'freestyle-slopestyle') continue
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
    genders: Array.from(genders).sort()
  }
}

export default function FreestyleSlopestyleRankingsPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isExporting, setIsExporting] = useState(false)
  const { showToast } = useToast()

  const filterOptions = useMemo(() => extractFilterOptions(), [])
  const rankingGroups = useMemo(
    () => getFreestyleSlopestyleRankings(selectedDiscipline, selectedAgeGroup, selectedGender),
    [selectedDiscipline, selectedAgeGroup, selectedGender]
  )

  // 搜索过滤
  const filteredGroups = useMemo(() => {
    if (!searchTerm) return rankingGroups
    const term = searchTerm.toLowerCase()
    return rankingGroups.map(group => ({
      ...group,
      athletes: group.athletes.filter(a =>
        a.name.toLowerCase().includes(term) ||
        a.organization.toLowerCase().includes(term)
      )
    })).filter(g => g.athletes.length > 0)
  }, [rankingGroups, searchTerm])

  // 统计数据
  const totalAthletes = filteredGroups.reduce((sum, g) => sum + g.athletes.length, 0)
  const totalEvents = filteredGroups.length

  const handleExport = async () => {
    setIsExporting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      showToast('排名数据已导出', 'success')
    } finally {
      setIsExporting(false)
    }
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-500" />
      case 2: return <Medal className="w-5 h-5 text-gray-400" />
      case 3: return <Award className="w-5 h-5 text-amber-600" />
      default: return <span className="w-5 h-5 flex items-center justify-center text-sm font-medium text-gray-500">{rank}</span>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回链接 */}
        <Link
          href="/freestyle-slopestyle"
          className="inline-flex items-center text-gray-600 hover:text-cyan-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回自由式坡障/大跳台
        </Link>

        {/* 页面标题 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full mb-4 shadow-lg">
            <Wind className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">自由式坡障/大跳台积分排名</h1>
          <p className="text-gray-600">Freestyle Slopestyle & Big Air Rankings</p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-cyan-100">
            <div className="text-2xl font-bold text-cyan-600">{totalEvents}</div>
            <div className="text-sm text-gray-600">比赛场次</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-cyan-100">
            <div className="text-2xl font-bold text-cyan-600">{totalAthletes}</div>
            <div className="text-sm text-gray-600">参赛人次</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-cyan-100">
            <div className="text-2xl font-bold text-cyan-600">{filterOptions.disciplines.length}</div>
            <div className="text-sm text-gray-600">项目数量</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-cyan-100">
            <div className="text-2xl font-bold text-cyan-600">{filterOptions.ageGroups.length}</div>
            <div className="text-sm text-gray-600">年龄组别</div>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">项目</label>
              <select
                value={selectedDiscipline}
                onChange={(e) => setSelectedDiscipline(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">全部项目</option>
                {filterOptions.disciplines.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">年龄组</label>
              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">全部年龄组</option>
                {filterOptions.ageGroups.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">性别</label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">全部</option>
                {filterOptions.genders.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">搜索</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="搜索运动员..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 排名列表 */}
        {filteredGroups.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">暂无符合条件的排名数据</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredGroups.map((group, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{group.competition}</h3>
                      <p className="text-cyan-200 text-sm">
                        {group.discipline} · {group.ageGroup} · {group.gender} · {group.date}
                      </p>
                    </div>
                    <button
                      onClick={handleExport}
                      disabled={isExporting}
                      className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm flex items-center gap-1 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      导出
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">排名</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">单位</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">积分</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {group.athletes.map((athlete, aIdx) => (
                        <tr key={aIdx} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {getRankIcon(athlete.rank)}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="font-medium text-gray-900">{athlete.name}</span>
                          </td>
                          <td className="px-4 py-3 text-gray-600">{athlete.organization}</td>
                          <td className="px-4 py-3 text-right">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
                              {athlete.points} 分
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 查看更多链接 */}
        <div className="mt-8 text-center">
          <Link
            href="/points/rankings"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
          >
            查看全部项目排名
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
