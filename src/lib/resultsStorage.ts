/**
 * 成绩数据本地存储服务
 * 用于在浏览器localStorage中存储和检索导入的成绩数据
 */

// 存储键名
const STORAGE_KEYS = {
  COMPETITIONS: 'ski-competitions',
  RESULTS: 'ski-results',
  LAST_IMPORT: 'ski-last-import',
}

// 比赛信息接口
export interface CompetitionInfo {
  id: string
  name: string
  date: string
  location: string
  discipline: string
  sportType: string
  participants: number
  finishers: number
  dns: number
  dnf: number
  dsq: number
  importedAt: string
}

// 成绩记录接口
export interface ResultRecord {
  competitionId: string
  rank: number
  bibNumber: string
  name: string
  team: string
  birthYear?: string
  gender: 'male' | 'female'
  run1Time?: string
  run2Time?: string
  totalTime: string
  points: number
  status: 'finished' | 'dns' | 'dnf' | 'dsq'
}

// 存储的成绩数据结构
export interface StoredResults {
  competition: CompetitionInfo
  results: {
    male: ResultRecord[]
    female: ResultRecord[]
  }
}

/**
 * 保存比赛成绩到localStorage
 */
export function saveResults(data: StoredResults): boolean {
  try {
    // 获取现有比赛列表
    const competitions = getCompetitions()
    const existingIndex = competitions.findIndex(c => c.id === data.competition.id)

    if (existingIndex >= 0) {
      competitions[existingIndex] = data.competition
    } else {
      competitions.unshift(data.competition)
    }

    // 保存比赛列表
    localStorage.setItem(STORAGE_KEYS.COMPETITIONS, JSON.stringify(competitions))

    // 保存成绩数据
    const allResults = getAllResults()
    allResults[data.competition.id] = data.results
    localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(allResults))

    // 更新最后导入时间
    localStorage.setItem(STORAGE_KEYS.LAST_IMPORT, new Date().toISOString())

    return true
  } catch (error) {
    return false
  }
}

/**
 * 获取所有比赛列表
 */
export function getCompetitions(): CompetitionInfo[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.COMPETITIONS)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

/**
 * 获取所有成绩数据
 */
export function getAllResults(): Record<string, { male: ResultRecord[], female: ResultRecord[] }> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.RESULTS)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

/**
 * 获取指定比赛的成绩
 */
export function getResultsByCompetitionId(competitionId: string): { male: ResultRecord[], female: ResultRecord[] } | null {
  try {
    const allResults = getAllResults()
    return allResults[competitionId] || null
  } catch {
    return null
  }
}

/**
 * 获取指定比赛信息
 */
export function getCompetitionById(competitionId: string): CompetitionInfo | null {
  const competitions = getCompetitions()
  return competitions.find(c => c.id === competitionId) || null
}

/**
 * 获取最新导入的比赛成绩
 */
export function getLatestResults(): StoredResults | null {
  const competitions = getCompetitions()
  if (competitions.length === 0) return null

  const latest = competitions[0]
  const results = getResultsByCompetitionId(latest.id)

  if (!results) return null

  return {
    competition: latest,
    results
  }
}

/**
 * 删除指定比赛的成绩
 */
export function deleteResults(competitionId: string): boolean {
  try {
    // 从比赛列表中移除
    const competitions = getCompetitions().filter(c => c.id !== competitionId)
    localStorage.setItem(STORAGE_KEYS.COMPETITIONS, JSON.stringify(competitions))

    // 从成绩数据中移除
    const allResults = getAllResults()
    delete allResults[competitionId]
    localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(allResults))

    return true
  } catch {
    return false
  }
}

/**
 * 清空所有成绩数据
 */
export function clearAllResults(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEYS.COMPETITIONS)
    localStorage.removeItem(STORAGE_KEYS.RESULTS)
    localStorage.removeItem(STORAGE_KEYS.LAST_IMPORT)
    return true
  } catch {
    return false
  }
}

/**
 * 获取最后导入时间
 */
export function getLastImportTime(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.LAST_IMPORT)
  } catch {
    return null
  }
}

/**
 * 获取积分排行榜（跨比赛汇总）
 */
export function getPointsRanking(sportType?: string, gender?: 'male' | 'female'): Array<{
  name: string
  team: string
  totalPoints: number
  competitionCount: number
  bestRank: number
}> {
  const allResults = getAllResults()
  const competitions = getCompetitions()

  // 按运动员汇总积分
  const athleteStats: Record<string, {
    name: string
    team: string
    totalPoints: number
    competitionCount: number
    bestRank: number
  }> = {}

  for (const competition of competitions) {
    // 如果指定了项目类型，过滤
    if (sportType && competition.sportType !== sportType) continue

    const results = allResults[competition.id]
    if (!results) continue

    const genders: Array<'male' | 'female'> = gender ? [gender] : ['male', 'female']

    for (const g of genders) {
      for (const result of results[g]) {
        if (result.status !== 'finished') continue

        const key = `${result.name}-${result.team}`
        if (!athleteStats[key]) {
          athleteStats[key] = {
            name: result.name,
            team: result.team,
            totalPoints: 0,
            competitionCount: 0,
            bestRank: Infinity
          }
        }

        athleteStats[key].totalPoints += result.points
        athleteStats[key].competitionCount++
        athleteStats[key].bestRank = Math.min(athleteStats[key].bestRank, result.rank)
      }
    }
  }

  // 转换为数组并排序
  return Object.values(athleteStats)
    .map(a => ({
      ...a,
      bestRank: a.bestRank === Infinity ? 0 : a.bestRank
    }))
    .sort((a, b) => b.totalPoints - a.totalPoints)
}

/**
 * 获取统计概览
 */
export function getStatsOverview(): {
  totalCompetitions: number
  totalAthletes: number
  totalResults: number
  sportTypes: string[]
  lastImport: string | null
} {
  const competitions = getCompetitions()
  const allResults = getAllResults()

  const athleteSet = new Set<string>()
  let totalResults = 0
  const sportTypes = new Set<string>()

  for (const competition of competitions) {
    sportTypes.add(competition.sportType)
    const results = allResults[competition.id]
    if (results) {
      for (const result of [...results.male, ...results.female]) {
        athleteSet.add(`${result.name}-${result.team}`)
        totalResults++
      }
    }
  }

  return {
    totalCompetitions: competitions.length,
    totalAthletes: athleteSet.size,
    totalResults,
    sportTypes: Array.from(sportTypes),
    lastImport: getLastImportTime()
  }
}
