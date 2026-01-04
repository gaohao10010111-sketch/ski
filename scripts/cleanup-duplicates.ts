/**
 * 清理重复的比赛数据
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 开始清理重复数据...\n');

  // 获取所有比赛
  const competitions = await prisma.competition.findMany({
    orderBy: { createdAt: 'asc' }
  });

  // 按名称分组，保留第一个，删除其他
  const seen = new Map<string, string>();
  const toDelete: string[] = [];

  for (const comp of competitions) {
    if (seen.has(comp.name)) {
      toDelete.push(comp.id);
      console.log(`  标记删除: ${comp.id} - ${comp.name}`);
    } else {
      seen.set(comp.name, comp.id);
      console.log(`  保留: ${comp.id} - ${comp.name}`);
    }
  }

  if (toDelete.length > 0) {
    console.log(`\n🗑️ 删除 ${toDelete.length} 个重复比赛...`);

    // 删除关联的成绩
    const deletedResults = await prisma.result.deleteMany({
      where: { competitionId: { in: toDelete } }
    });
    console.log(`  删除成绩: ${deletedResults.count} 条`);

    // 删除比赛
    const deletedCompetitions = await prisma.competition.deleteMany({
      where: { id: { in: toDelete } }
    });
    console.log(`  删除比赛: ${deletedCompetitions.count} 个`);
  } else {
    console.log('\n✅ 没有重复数据');
  }

  // 验证
  const finalCount = await prisma.competition.count();
  const resultCount = await prisma.result.count();
  console.log(`\n📊 清理后统计:`);
  console.log(`  比赛数: ${finalCount}`);
  console.log(`  成绩数: ${resultCount}`);

  await prisma.$disconnect();
}

main();
