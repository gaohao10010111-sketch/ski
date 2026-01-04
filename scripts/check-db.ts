/**
 * 检查数据库数据
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📊 数据库统计:\n');

  const athleteCount = await prisma.athlete.count();
  const competitionCount = await prisma.competition.count();
  const resultCount = await prisma.result.count();

  console.log(`运动员总数: ${athleteCount}`);
  console.log(`比赛总数: ${competitionCount}`);
  console.log(`成绩记录数: ${resultCount}`);

  // 查看一些比赛
  console.log('\n📋 比赛列表:');
  const competitions = await prisma.competition.findMany({
    include: {
      _count: { select: { results: true } }
    }
  });
  for (const c of competitions) {
    console.log(`  - ${c.name} (${c._count.results}条成绩)`);
  }

  // 查看前5名运动员
  console.log('\n👥 部分运动员:');
  const athletes = await prisma.athlete.findMany({
    take: 5,
    include: {
      _count: { select: { results: true } }
    }
  });
  for (const a of athletes) {
    console.log(`  - ${a.name} (${a.team}) - ${a._count.results}次参赛`);
  }

  // 按积分排名前10
  console.log('\n🏆 积分排名前10:');
  const rankings = await prisma.$queryRaw<Array<{name: string, team: string, total: number}>>`
    SELECT a.name, a.team, SUM(r.points) as total
    FROM Result r
    JOIN Athlete a ON r.athleteId = a.id
    GROUP BY a.id, a.name, a.team
    ORDER BY total DESC
    LIMIT 10
  `;
  let rank = 1;
  for (const r of rankings) {
    console.log(`  ${rank}. ${r.name} (${r.team}) - ${r.total}分`);
    rank++;
  }

  await prisma.$disconnect();
}

main();
