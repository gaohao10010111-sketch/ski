/**
 * 排名服务层
 * 提供积分排名相关的数据库查询功能
 * 使用 better-sqlite3 直接查询
 */

import { getDatabase } from './prisma'

// ========== 类型定义 ==========

/** 积分构成明细项 */
export interface PointsBreakdownItem {
  competitionId: string
  competitionName: string
  location: string
  date: string
  discipline: string
  rank: number
  points: number
}

/** 运动员积分汇总 */
export interface AthletePointsSummary {
  athleteId: string
  athleteName: string
  team: string
  ageGroup: string
  gender: string
  totalPoints: number
  competitionCount: number
  bestRank: number
  avgPoints: number
  breakdown: PointsBreakdownItem[]
}

/** 总排名项 */
export interface TotalRankingItem extends AthletePointsSummary {
  rank: number
  rankChange?: number | null  // 排名变化：正数表示上升，负数表示下降，null表示新进榜
}

/** 筛选参数 */
export interface RankingFilters {
  sportType?: string
  discipline?: string
  ageGroup?: string
  gender?: string
  season?: string
  limit?: number
  offset?: number
}

// 项目类型名称映射
const sportTypeNames: Record<string, string> = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle': '单板坡面障碍技巧',
  'snowboard-bigair': '单板大跳台',
  'snowboard-parallel': '单板平行项目',
  'freestyle-slopestyle': '自由式坡面障碍技巧',
  'freestyle-bigair': '自由式大跳台'
}

// ========== 服务函数 ==========

/**
 * 获取运动员的积分构成明细
 * @param athleteId 运动员ID
 * @param filters 筛选条件（可选）
 */
export function getAthletePointsBreakdown(
  athleteId: string,
  filters?: { sportType?: string; discipline?: string; ageGroup?: string; gender?: string }
): PointsBreakdownItem[] {
  const db = getDatabase()

  let sql = `
    SELECT
      r.id,
      r.discipline,
      r.rank,
      r.points,
      c.id as competitionId,
      c.name as competitionName,
      c.location,
      c.date,
      c.sportType
    FROM Result r
    JOIN Competition c ON r.competitionId = c.id
    WHERE r.athleteId = ?
  `
  const params: (string | number)[] = [athleteId]

  if (filters?.sportType) {
    sql += ' AND c.sportType = ?'
    params.push(filters.sportType)
  }
  if (filters?.discipline) {
    sql += ' AND r.discipline = ?'
    params.push(filters.discipline)
  }
  if (filters?.ageGroup) {
    sql += ' AND r.ageGroup = ?'
    params.push(filters.ageGroup)
  }
  if (filters?.gender) {
    sql += ' AND r.gender = ?'
    params.push(filters.gender)
  }

  sql += ' ORDER BY c.date DESC, r.points DESC'

  const results = db.prepare(sql).all(...params) as Array<{
    competitionId: string
    competitionName: string
    location: string
    date: string
    discipline: string
    rank: number
    points: number
  }>

  return results.map(r => ({
    competitionId: r.competitionId,
    competitionName: r.competitionName,
    location: r.location,
    date: r.date,
    discipline: r.discipline,
    rank: r.rank,
    points: r.points
  }))
}

/**
 * 获取总积分排名列表
 * @param filters 筛选条件
 */
export function getTotalRankings(filters: RankingFilters = {}): {
  rankings: TotalRankingItem[]
  total: number
  filters: {
    sportTypes: { value: string; label: string }[]
    disciplines: string[]
    ageGroups: string[]
    genders: string[]
  }
} {
  const db = getDatabase()
  const { sportType, discipline, ageGroup, gender, limit = 100, offset = 0 } = filters

  // 构建查询
  let sql = `
    SELECT
      r.athleteId,
      a.name as athleteName,
      a.team,
      r.ageGroup,
      r.gender,
      r.discipline,
      r.rank,
      r.points,
      c.id as competitionId,
      c.name as competitionName,
      c.location,
      c.date,
      c.sportType
    FROM Result r
    JOIN Athlete a ON r.athleteId = a.id
    JOIN Competition c ON r.competitionId = c.id
    WHERE 1=1
  `
  const params: (string | number)[] = []

  if (sportType) {
    sql += ' AND c.sportType = ?'
    params.push(sportType)
  }
  if (discipline) {
    sql += ' AND r.discipline = ?'
    params.push(discipline)
  }
  if (ageGroup) {
    sql += ' AND r.ageGroup = ?'
    params.push(ageGroup)
  }
  if (gender) {
    sql += ' AND r.gender = ?'
    params.push(gender)
  }

  const results = db.prepare(sql).all(...params) as Array<{
    athleteId: string
    athleteName: string
    team: string
    ageGroup: string
    gender: string
    discipline: string
    rank: number
    points: number
    competitionId: string
    competitionName: string
    location: string
    date: string
    sportType: string
  }>

  // 按运动员 + 年龄组 + 性别分组统计
  const athleteStatsMap = new Map<string, {
    athleteId: string
    athleteName: string
    team: string
    ageGroup: string
    gender: string
    totalPoints: number
    competitionCount: number
    bestRank: number
    results: PointsBreakdownItem[]
  }>()

  results.forEach(r => {
    const key = `${r.athleteId}-${r.ageGroup}-${r.gender}`

    if (!athleteStatsMap.has(key)) {
      athleteStatsMap.set(key, {
        athleteId: r.athleteId,
        athleteName: r.athleteName,
        team: r.team,
        ageGroup: r.ageGroup,
        gender: r.gender,
        totalPoints: 0,
        competitionCount: 0,
        bestRank: 999,
        results: []
      })
    }

    const stats = athleteStatsMap.get(key)!
    stats.totalPoints += r.points
    stats.competitionCount += 1
    if (r.rank < stats.bestRank) {
      stats.bestRank = r.rank
    }
    stats.results.push({
      competitionId: r.competitionId,
      competitionName: r.competitionName,
      location: r.location,
      date: r.date,
      discipline: r.discipline,
      rank: r.rank,
      points: r.points
    })
  })

  // 转换为数组并排序
  const sortedStats = Array.from(athleteStatsMap.values())
    .sort((a, b) => b.totalPoints - a.totalPoints)

  const total = sortedStats.length

  // 分页
  const pagedStats = sortedStats.slice(offset, offset + limit)

  // 生成排名
  const rankings: TotalRankingItem[] = pagedStats.map((stats, index) => ({
    rank: offset + index + 1,
    athleteId: stats.athleteId,
    athleteName: stats.athleteName,
    team: stats.team,
    ageGroup: stats.ageGroup,
    gender: stats.gender,
    totalPoints: stats.totalPoints,
    competitionCount: stats.competitionCount,
    bestRank: stats.bestRank === 999 ? 1 : stats.bestRank,
    avgPoints: stats.competitionCount > 0
      ? Math.round(stats.totalPoints / stats.competitionCount * 100) / 100
      : 0,
    breakdown: stats.results
  }))

  // 获取筛选选项
  const allFilters = db.prepare(`
    SELECT DISTINCT
      c.sportType,
      r.discipline,
      r.ageGroup,
      r.gender
    FROM Result r
    JOIN Competition c ON r.competitionId = c.id
  `).all() as Array<{
    sportType: string
    discipline: string
    ageGroup: string
    gender: string
  }>

  const sportTypesSet = new Set<string>()
  const disciplinesSet = new Set<string>()
  const ageGroupsSet = new Set<string>()
  const gendersSet = new Set<string>()

  allFilters.forEach(r => {
    sportTypesSet.add(r.sportType)
    disciplinesSet.add(r.discipline)
    ageGroupsSet.add(r.ageGroup)
    gendersSet.add(r.gender)
  })

  const sportTypes = Array.from(sportTypesSet)
    .map(st => ({ value: st, label: sportTypeNames[st] || st }))

  const disciplines = Array.from(disciplinesSet).sort()
  const ageGroups = Array.from(ageGroupsSet).sort()
  const genders = Array.from(gendersSet).sort()

  return {
    rankings,
    total,
    filters: {
      sportTypes,
      disciplines,
      ageGroups,
      genders
    }
  }
}

/**
 * 按项目类型获取总积分排名
 * @param sportType 项目类型
 * @param filters 额外筛选条件
 */
export function getRankingsBySport(
  sportType: string,
  filters: Omit<RankingFilters, 'sportType'> = {}
): TotalRankingItem[] {
  const result = getTotalRankings({ ...filters, sportType })
  return result.rankings
}

/**
 * 获取运动员在特定小子项的排名详情
 * @param athleteId 运动员ID
 * @param discipline 小项
 * @param ageGroup 年龄组
 * @param gender 性别
 */
export function getAthleteSubEventRanking(
  athleteId: string,
  discipline: string,
  ageGroup: string,
  gender: string
): {
  rank: number
  totalPoints: number
  breakdown: PointsBreakdownItem[]
} | null {
  const db = getDatabase()

  // 获取该运动员在该小子项的所有成绩
  const athleteResults = db.prepare(`
    SELECT
      r.discipline,
      r.rank,
      r.points,
      c.id as competitionId,
      c.name as competitionName,
      c.location,
      c.date
    FROM Result r
    JOIN Competition c ON r.competitionId = c.id
    WHERE r.athleteId = ? AND r.discipline = ? AND r.ageGroup = ? AND r.gender = ?
    ORDER BY c.date DESC
  `).all(athleteId, discipline, ageGroup, gender) as Array<{
    discipline: string
    rank: number
    points: number
    competitionId: string
    competitionName: string
    location: string
    date: string
  }>

  if (athleteResults.length === 0) return null

  // 获取该小子项所有运动员的总积分
  const allTotals = db.prepare(`
    SELECT athleteId, SUM(points) as totalPoints
    FROM Result
    WHERE discipline = ? AND ageGroup = ? AND gender = ?
    GROUP BY athleteId
    ORDER BY totalPoints DESC
  `).all(discipline, ageGroup, gender) as Array<{
    athleteId: string
    totalPoints: number
  }>

  // 找到排名
  const rank = allTotals.findIndex(t => t.athleteId === athleteId) + 1
  const totalPoints = allTotals.find(t => t.athleteId === athleteId)?.totalPoints || 0

  const breakdown: PointsBreakdownItem[] = athleteResults.map(r => ({
    competitionId: r.competitionId,
    competitionName: r.competitionName,
    location: r.location,
    date: r.date,
    discipline: r.discipline,
    rank: r.rank,
    points: r.points
  }))

  return { rank, totalPoints, breakdown }
}

/**
 * 获取统计数据
 */
export function getRankingStats(): {
  athleteCount: number
  competitionCount: number
  totalResults: number
} {
  const db = getDatabase()

  const athleteCount = (db.prepare('SELECT COUNT(*) as count FROM Athlete').get() as { count: number }).count
  const competitionCount = (db.prepare('SELECT COUNT(*) as count FROM Competition').get() as { count: number }).count
  const totalResults = (db.prepare('SELECT COUNT(*) as count FROM Result').get() as { count: number }).count

  return { athleteCount, competitionCount, totalResults }
}

// ========== 排名快照相关函数 ==========

/** 排名快照项 */
export interface RankingSnapshotItem {
  id: string
  athleteId: string
  athleteName: string
  team: string
  sportType: string | null
  ageGroup: string
  gender: string
  rank: number
  totalPoints: number
  competitionCount: number
  snapshotDate: string
  triggeredBy: string | null
  season: string
}

/**
 * 保存当前排名快照
 * 在每场比赛结束后调用，记录当前排名状态
 * @param triggeredBy 触发快照的比赛ID（可选）
 * @param sportType 项目类型（可选，null表示总排名）
 */
export function saveRankingSnapshot(
  triggeredBy?: string,
  sportType?: string
): { success: boolean; count: number } {
  const db = getDatabase()
  const season = '2024-2025'

  // 获取当前排名（根据sportType筛选）
  const { rankings } = getTotalRankings({ sportType, limit: 1000 })

  if (rankings.length === 0) {
    return { success: true, count: 0 }
  }

  // 生成唯一ID的函数
  const generateId = () => {
    return 'snap_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
  }

  // 准备插入语句
  const insertStmt = db.prepare(`
    INSERT INTO RankingSnapshot (
      id, athleteId, athleteName, team, sportType, ageGroup, gender,
      rank, totalPoints, competitionCount, snapshotDate, triggeredBy, season
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), ?, ?)
  `)

  // 批量插入
  const insertMany = db.transaction((items: TotalRankingItem[]) => {
    for (const item of items) {
      insertStmt.run(
        generateId(),
        item.athleteId,
        item.athleteName,
        item.team,
        sportType || null,
        item.ageGroup,
        item.gender,
        item.rank,
        item.totalPoints,
        item.competitionCount,
        triggeredBy || null,
        season
      )
    }
  })

  insertMany(rankings)

  return { success: true, count: rankings.length }
}

/**
 * 获取上一次排名快照
 * @param sportType 项目类型（可选）
 * @param ageGroup 年龄组（可选）
 * @param gender 性别（可选）
 */
export function getLastSnapshot(
  sportType?: string,
  ageGroup?: string,
  gender?: string
): Map<string, number> {
  const db = getDatabase()

  // 构建查询条件
  let whereClause = 'WHERE 1=1'
  const params: (string | null)[] = []

  if (sportType) {
    whereClause += ' AND sportType = ?'
    params.push(sportType)
  } else {
    whereClause += ' AND sportType IS NULL'
  }

  if (ageGroup) {
    whereClause += ' AND ageGroup = ?'
    params.push(ageGroup)
  }

  if (gender) {
    whereClause += ' AND gender = ?'
    params.push(gender)
  }

  // 获取最新快照时间
  const latestSnapshot = db.prepare(`
    SELECT MAX(snapshotDate) as latestDate
    FROM RankingSnapshot
    ${whereClause}
  `).get(...params) as { latestDate: string | null }

  if (!latestSnapshot?.latestDate) {
    return new Map()
  }

  // 获取该时间点的所有排名
  const snapshots = db.prepare(`
    SELECT athleteId, ageGroup, gender, rank
    FROM RankingSnapshot
    ${whereClause} AND snapshotDate = ?
  `).all(...params, latestSnapshot.latestDate) as Array<{
    athleteId: string
    ageGroup: string
    gender: string
    rank: number
  }>

  // 构建映射：athleteId-ageGroup-gender -> rank
  const rankMap = new Map<string, number>()
  snapshots.forEach(s => {
    const key = `${s.athleteId}-${s.ageGroup}-${s.gender}`
    rankMap.set(key, s.rank)
  })

  return rankMap
}

/**
 * 获取带排名变化的总积分排名列表
 * @param filters 筛选条件
 */
export function getTotalRankingsWithChange(filters: RankingFilters = {}): {
  rankings: TotalRankingItem[]
  total: number
  filters: {
    sportTypes: { value: string; label: string }[]
    disciplines: string[]
    ageGroups: string[]
    genders: string[]
  }
  lastUpdateTime: string | null
} {
  const db = getDatabase()
  const { sportType, ageGroup, gender } = filters

  // 获取当前排名
  const result = getTotalRankings(filters)

  // 获取上一次快照的排名
  const lastRankMap = getLastSnapshot(sportType, ageGroup, gender)

  // 计算排名变化
  const rankingsWithChange: TotalRankingItem[] = result.rankings.map(item => {
    const key = `${item.athleteId}-${item.ageGroup}-${item.gender}`
    const lastRank = lastRankMap.get(key)

    let rankChange: number | null = null
    if (lastRank !== undefined) {
      // 排名变化 = 上次排名 - 当前排名（正数表示上升）
      rankChange = lastRank - item.rank
    }
    // 如果lastRank为undefined，表示新进榜，rankChange保持null

    return {
      ...item,
      rankChange
    }
  })

  // 获取最后更新时间
  let whereClause = 'WHERE 1=1'
  const params: (string | null)[] = []

  if (sportType) {
    whereClause += ' AND sportType = ?'
    params.push(sportType)
  } else {
    whereClause += ' AND sportType IS NULL'
  }

  const lastUpdate = db.prepare(`
    SELECT MAX(snapshotDate) as lastDate
    FROM RankingSnapshot
    ${whereClause}
  `).get(...params) as { lastDate: string | null }

  return {
    rankings: rankingsWithChange,
    total: result.total,
    filters: result.filters,
    lastUpdateTime: lastUpdate?.lastDate || null
  }
}

/**
 * 获取所有快照记录（用于管理界面）
 */
export function getSnapshotHistory(limit: number = 20): Array<{
  snapshotDate: string
  triggeredBy: string | null
  count: number
  sportType: string | null
}> {
  const db = getDatabase()

  const snapshots = db.prepare(`
    SELECT
      snapshotDate,
      triggeredBy,
      sportType,
      COUNT(*) as count
    FROM RankingSnapshot
    GROUP BY snapshotDate, sportType
    ORDER BY snapshotDate DESC
    LIMIT ?
  `).all(limit) as Array<{
    snapshotDate: string
    triggeredBy: string | null
    sportType: string | null
    count: number
  }>

  return snapshots
}

/**
 * 删除旧的快照记录（只保留最近N次）
 * @param keepCount 保留的快照次数
 */
export function cleanOldSnapshots(keepCount: number = 10): number {
  const db = getDatabase()

  // 获取需要保留的快照日期
  const keepDates = db.prepare(`
    SELECT DISTINCT snapshotDate
    FROM RankingSnapshot
    ORDER BY snapshotDate DESC
    LIMIT ?
  `).all(keepCount) as Array<{ snapshotDate: string }>

  if (keepDates.length < keepCount) {
    return 0 // 不需要清理
  }

  const oldestKeepDate = keepDates[keepDates.length - 1].snapshotDate

  // 删除比保留日期更旧的记录
  const result = db.prepare(`
    DELETE FROM RankingSnapshot
    WHERE snapshotDate < ?
  `).run(oldestKeepDate)

  return result.changes
}
