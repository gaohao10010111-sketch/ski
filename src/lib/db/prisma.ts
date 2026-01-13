/**
 * 数据库连接 - 使用 better-sqlite3 和 Prisma Client
 * 用于查询积分排名等数据
 */

import Database from 'better-sqlite3'
import path from 'path'
import { PrismaClient } from '@prisma/client'

// ========== Better-SQLite3 连接（用于原有数据查询）==========
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

// ========== Prisma Client（用于访问统计等功能）==========
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default { getDatabase, prisma }
