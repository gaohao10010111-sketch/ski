/**
 * 数据库连接 - 使用 better-sqlite3
 * 用于查询积分排名等数据
 */

import Database from 'better-sqlite3'
import path from 'path'

// 数据库路径
const dbPath = path.join(process.cwd(), 'prisma', 'ski.db')

// 创建数据库连接
let db: Database.Database | null = null

export function getDatabase(): Database.Database {
  if (!db) {
    db = new Database(dbPath)
    db.pragma('journal_mode = WAL')
  }
  return db
}

export default { getDatabase }
