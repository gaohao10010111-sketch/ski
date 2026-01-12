/**
 * 修复重复运动员记录
 * 1. 统一单位名称
 * 2. 合并重复的运动员记录
 * 3. 删除孤立的运动员记录
 */

import { PrismaClient } from '@prisma/client'
import { teamNameMapping } from './team-name-mapping'

const prisma = new PrismaClient()

async function main() {
  console.log('=== 开始修复重复运动员记录 ===\n')

  // Step 1: 统一单位名称
  console.log('Step 1: 统一单位名称...')
  for (const [oldName, newName] of Object.entries(teamNameMapping)) {
    // 更新 Athlete 表
    const athleteResult = await prisma.athlete.updateMany({
      where: { team: oldName },
      data: { team: newName }
    })
    if (athleteResult.count > 0) {
      console.log(`  Athlete表: "${oldName}" -> "${newName}" (${athleteResult.count}条)`)
    }

    // 更新 Result 表中的 team 字段（如果有的话）
    // Result 表没有 team 字段，跳过
  }
  console.log('')

  // Step 2: 找出所有重复的运动员（同名同单位）
  console.log('Step 2: 查找重复运动员...')
  const duplicates = await prisma.$queryRaw<Array<{ name: string, team: string, count: number }>>`
    SELECT name, team, COUNT(*) as count
    FROM Athlete
    GROUP BY name, team
    HAVING COUNT(*) > 1
  `

  if (duplicates.length === 0) {
    console.log('  没有发现重复运动员')
  } else {
    console.log(`  发现 ${duplicates.length} 组重复运动员:`)
    for (const dup of duplicates) {
      console.log(`    - ${dup.name} (${dup.team}): ${dup.count}条记录`)
    }
  }
  console.log('')

  // Step 3: 合并重复运动员
  console.log('Step 3: 合并重复运动员...')
  for (const dup of duplicates) {
    // 获取该运动员的所有记录
    const athletes = await prisma.athlete.findMany({
      where: { name: dup.name, team: dup.team },
      orderBy: { createdAt: 'asc' }
    })

    if (athletes.length <= 1) continue

    // 保留第一条记录，将其他记录的成绩合并到第一条
    const primary = athletes[0]
    const toMerge = athletes.slice(1)

    for (const athlete of toMerge) {
      // 更新成绩记录指向主运动员
      await prisma.result.updateMany({
        where: { athleteId: athlete.id },
        data: { athleteId: primary.id }
      })

      // 更新赛季积分记录指向主运动员
      await prisma.seasonTotal.updateMany({
        where: { athleteId: athlete.id },
        data: { athleteId: primary.id }
      })

      // 删除重复的运动员记录
      await prisma.athlete.delete({
        where: { id: athlete.id }
      })

      console.log(`  合并: ${athlete.name} (${athlete.id}) -> ${primary.id}`)
    }
  }
  console.log('')

  // Step 4: 删除没有成绩的孤立运动员
  console.log('Step 4: 删除孤立运动员记录...')
  const orphanAthletes = await prisma.$queryRaw<Array<{ id: string, name: string, team: string }>>`
    SELECT id, name, team
    FROM Athlete
    WHERE id NOT IN (SELECT DISTINCT athleteId FROM Result)
  `

  if (orphanAthletes.length === 0) {
    console.log('  没有孤立运动员记录')
  } else {
    console.log(`  发现 ${orphanAthletes.length} 条孤立记录:`)
    for (const orphan of orphanAthletes) {
      console.log(`    - ${orphan.name} (${orphan.team})`)
      await prisma.athlete.delete({
        where: { id: orphan.id }
      })
    }
    console.log(`  已删除 ${orphanAthletes.length} 条孤立记录`)
  }
  console.log('')

  // Step 5: 验证结果
  console.log('Step 5: 验证结果...')
  const totalAthletes = await prisma.athlete.count()
  const athletesWithResults = await prisma.$queryRaw<[{ count: number }]>`
    SELECT COUNT(DISTINCT athleteId) as count FROM Result
  `
  const totalResults = await prisma.result.count()

  console.log(`  Athlete表总数: ${totalAthletes}`)
  console.log(`  有成绩的运动员: ${athletesWithResults[0].count}`)
  console.log(`  Result表总数: ${totalResults}`)
  console.log('')

  // 检查是否还有孤立记录
  const remainingOrphans = await prisma.$queryRaw<[{ count: number }]>`
    SELECT COUNT(*) as count
    FROM Athlete
    WHERE id NOT IN (SELECT DISTINCT athleteId FROM Result)
  `

  if (remainingOrphans[0].count === 0) {
    console.log('✅ 所有运动员都有对应成绩记录，数据一致性正常')
  } else {
    console.log(`❌ 仍有 ${remainingOrphans[0].count} 条孤立记录`)
  }

  console.log('\n=== 修复完成 ===')
}

main()
  .catch((e) => {
    console.error('错误:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
