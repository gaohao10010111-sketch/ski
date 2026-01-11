/**
 * 排名快照保存脚本
 *
 * 使用方法:
 * node scripts/save-ranking-snapshot.js [--competition=比赛ID] [--clean]
 *
 * 参数说明:
 * --competition=xxx  可选，指定触发快照的比赛ID
 * --clean           可选，清理旧快照（只保留最近10次）
 *
 * 示例:
 * node scripts/save-ranking-snapshot.js                          # 保存总排名快照
 * node scripts/save-ranking-snapshot.js --competition=comp123    # 保存快照并关联比赛
 * node scripts/save-ranking-snapshot.js --clean                  # 保存快照并清理旧记录
 */

const Database = require('better-sqlite3')
const path = require('path')

// 数据库路径
const DB_PATH = path.join(__dirname, '../prisma/ski.db')

// 项目类型名称映射
const sportTypeNames = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle': '单板坡面障碍技巧',
  'snowboard-bigair': '单板大跳台',
  'snowboard-parallel': '单板平行项目',
  'freestyle-slopestyle': '自由式坡面障碍技巧',
  'freestyle-bigair': '自由式大跳台'
}

// 生成唯一ID
function generateId() {
  return 'snap_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
}

// 获取当前排名
function getTotalRankings(db, sportType = null) {
  let sql = `
    SELECT
      r.athleteId,
      a.name as athleteName,
      a.team,
      r.ageGroup,
      r.gender,
      SUM(r.points) as totalPoints,
      COUNT(*) as competitionCount,
      MIN(r.rank) as bestRank
    FROM Result r
    JOIN Athlete a ON r.athleteId = a.id
    JOIN Competition c ON r.competitionId = c.id
    WHERE 1=1
  `
  const params = []

  if (sportType) {
    sql += ' AND c.sportType = ?'
    params.push(sportType)
  }

  sql += ' GROUP BY r.athleteId, r.ageGroup, r.gender ORDER BY totalPoints DESC'

  const results = db.prepare(sql).all(...params)

  // 添加排名
  return results.map((item, index) => ({
    ...item,
    rank: index + 1
  }))
}

// 保存快照
function saveSnapshot(db, triggeredBy = null, sportType = null, season = '2025-2026') {
  const rankings = getTotalRankings(db, sportType)

  if (rankings.length === 0) {
    console.log(`[${sportType || '总排名'}] 没有排名数据`)
    return 0
  }

  const insertStmt = db.prepare(`
    INSERT INTO RankingSnapshot (
      id, athleteId, athleteName, team, sportType, ageGroup, gender,
      rank, totalPoints, competitionCount, snapshotDate, triggeredBy, season
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), ?, ?)
  `)

  const insertMany = db.transaction((items) => {
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
  return rankings.length
}

// 清理旧快照
function cleanOldSnapshots(db, keepCount = 10) {
  const keepDates = db.prepare(`
    SELECT DISTINCT snapshotDate
    FROM RankingSnapshot
    ORDER BY snapshotDate DESC
    LIMIT ?
  `).all(keepCount)

  if (keepDates.length < keepCount) {
    return 0
  }

  const oldestKeepDate = keepDates[keepDates.length - 1].snapshotDate

  const result = db.prepare(`
    DELETE FROM RankingSnapshot
    WHERE snapshotDate < ?
  `).run(oldestKeepDate)

  return result.changes
}

// 主函数
function main() {
  const args = process.argv.slice(2)

  // 解析参数
  let competitionId = null
  let shouldClean = false

  for (const arg of args) {
    if (arg.startsWith('--competition=')) {
      competitionId = arg.split('=')[1]
    } else if (arg === '--clean') {
      shouldClean = true
    }
  }

  console.log('='.repeat(60))
  console.log('排名快照保存工具')
  console.log('='.repeat(60))
  console.log('')

  // 打开数据库
  const db = new Database(DB_PATH)
  console.log(`数据库: ${DB_PATH}`)
  console.log('')

  try {
    // 1. 保存总排名快照
    console.log('正在保存总排名快照...')
    const totalCount = saveSnapshot(db, competitionId, null)
    console.log(`  ✓ 保存了 ${totalCount} 条总排名记录`)

    // 2. 保存各项目排名快照
    const sportTypes = Object.keys(sportTypeNames)
    let sportTotalCount = 0

    for (const sportType of sportTypes) {
      const count = saveSnapshot(db, competitionId, sportType)
      if (count > 0) {
        console.log(`  ✓ ${sportTypeNames[sportType]}: ${count} 条记录`)
        sportTotalCount += count
      }
    }

    console.log('')
    console.log(`总计保存 ${totalCount + sportTotalCount} 条快照记录`)

    // 3. 清理旧快照（如果指定）
    if (shouldClean) {
      console.log('')
      console.log('正在清理旧快照...')
      const cleaned = cleanOldSnapshots(db, 10)
      console.log(`  ✓ 清理了 ${cleaned} 条过期记录`)
    }

    console.log('')
    console.log('快照保存完成!')
    console.log('')
    console.log('提示: 排名变化将在下次查看排名时显示')
    console.log('='.repeat(60))

  } catch (error) {
    console.error('保存快照时发生错误:', error)
    process.exit(1)
  } finally {
    db.close()
  }
}

main()
