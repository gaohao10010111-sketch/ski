/**
 * 数据迁移脚本：将 latestResults.ts 的数据导入到 SQLite 数据库
 *
 * 运行方式: npx tsx scripts/migrate-to-sqlite.ts
 */

import { PrismaClient } from '@prisma/client';
import { latestResults } from '../src/data/latestResults';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 开始数据迁移...\n');

  // 统计信息
  let athleteCount = 0;
  let competitionCount = 0;
  let resultCount = 0;

  // 运动员缓存：name+team -> athleteId
  const athleteCache = new Map<string, string>();

  try {
    // 遍历每场比赛
    for (const comp of latestResults.competitions) {
      console.log(`📋 处理比赛: ${comp.competition}`);

      // 1. 创建比赛记录
      const competition = await prisma.competition.create({
        data: {
          name: comp.competition,
          sportType: comp.sportType,
          sport: comp.sport,
          location: comp.location,
          date: comp.date,
          endDate: comp.endDate,
          status: comp.status,
          pdfSource: `latestResults.ts`
        }
      });
      competitionCount++;
      console.log(`  ✅ 比赛创建成功: ${competition.id}`);

      // 2. 遍历每个赛事组别
      for (const event of comp.events) {
        console.log(`  📊 处理组别: ${event.discipline} ${event.ageGroup} ${event.gender} (${event.athletes.length}人)`);

        // 3. 遍历每个运动员
        for (const athlete of event.athletes) {
          const cacheKey = `${athlete.name}-${athlete.team}`;

          // 查找或创建运动员
          let athleteId = athleteCache.get(cacheKey);

          if (!athleteId) {
            // 检查数据库是否已存在
            const existing = await prisma.athlete.findUnique({
              where: {
                name_team: { name: athlete.name, team: athlete.team }
              }
            });

            if (existing) {
              athleteId = existing.id;
            } else {
              // 创建新运动员
              const gender = event.gender.includes('女') ? '女' : '男';
              const newAthlete = await prisma.athlete.create({
                data: {
                  name: athlete.name,
                  team: athlete.team,
                  gender: gender,
                  birthYear: athlete.birthYear
                }
              });
              athleteId = newAthlete.id;
              athleteCount++;
            }

            athleteCache.set(cacheKey, athleteId);
          }

          // 4. 创建成绩记录
          await prisma.result.create({
            data: {
              athleteId: athleteId,
              competitionId: competition.id,
              discipline: event.discipline,
              ageGroup: event.ageGroup,
              gender: event.gender,
              rank: athlete.rank,
              bib: athlete.bib,
              run1: athlete.run1,
              run2: athlete.run2,
              time: athlete.time,
              diff: athlete.diff,
              bestScore: athlete.bestScore,
              points: athlete.points || 0
            }
          });
          resultCount++;
        }
      }

      console.log(`  ✅ 比赛数据导入完成\n`);
    }

    console.log('='.repeat(50));
    console.log('📊 迁移统计:');
    console.log(`  - 比赛数: ${competitionCount}`);
    console.log(`  - 运动员数: ${athleteCount}`);
    console.log(`  - 成绩记录数: ${resultCount}`);
    console.log('='.repeat(50));
    console.log('\n✅ 数据迁移完成！');

  } catch (error) {
    console.error('❌ 迁移失败:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
