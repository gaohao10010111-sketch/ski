/**
 * 生成总积分排名静态数据
 * 从数据库读取数据，生成静态JSON文件供前端使用
 *
 * 运行: npx tsx scripts/generate-total-rankings.ts
 */

import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface RankingItem {
  rank: number;
  athleteId: string;
  athleteName: string;
  team: string;
  totalPoints: number;
  competitionCount: number;
  bestRank: number;
  avgPoints: number;
  ageGroup: string;
  gender: string;
}

async function generateTotalRankings() {
  console.log('开始生成总积分排名数据...');

  // 获取所有赛季汇总数据
  const seasonTotals = await prisma.seasonTotal.findMany({
    include: {
      athlete: true
    },
    orderBy: {
      totalPoints: 'desc'
    }
  });

  console.log(`找到 ${seasonTotals.length} 条赛季汇总记录`);

  // 获取所有比赛
  const competitions = await prisma.competition.findMany();
  console.log(`找到 ${competitions.length} 场比赛`);

  // 获取所有成绩用于计算最佳名次
  const results = await prisma.result.findMany({
    select: {
      athleteId: true,
      rank: true,
      ageGroup: true,
      gender: true
    }
  });

  // 计算每个运动员的最佳名次
  const bestRankMap = new Map<string, number>();
  results.forEach(r => {
    const key = `${r.athleteId}-${r.ageGroup}-${r.gender}`;
    const current = bestRankMap.get(key) || 999;
    if (r.rank < current) {
      bestRankMap.set(key, r.rank);
    }
  });

  // 构建排名数据
  const rankings: RankingItem[] = seasonTotals.map((st, index) => {
    const key = `${st.athleteId}-${st.ageGroup}-${st.gender}`;
    return {
      rank: index + 1,
      athleteId: st.athleteId,
      athleteName: st.athlete.name,
      team: st.athlete.team,
      totalPoints: st.totalPoints,
      competitionCount: st.competitionCount,
      bestRank: bestRankMap.get(key) || st.bestRank || 1,
      avgPoints: st.avgPoints,
      ageGroup: st.ageGroup,
      gender: st.gender
    };
  });

  // 获取筛选选项
  const ageGroups = [...new Set(seasonTotals.map(st => st.ageGroup))].sort();
  const genders = [...new Set(seasonTotals.map(st => st.gender))].sort();

  // 从比赛中获取站点
  const locations = [...new Set(competitions.map(c => c.location))].sort();

  // 从成绩中获取子项
  const allResults = await prisma.result.findMany({
    select: { discipline: true }
  });
  const disciplines = [...new Set(allResults.map(r => r.discipline))].sort();

  // 统计数据
  const stats = {
    athleteCount: new Set(seasonTotals.map(st => st.athleteId)).size,
    competitionCount: competitions.length,
    totalResults: results.length
  };

  // 构建完整数据
  const data = {
    rankings,
    total: rankings.length,
    filters: {
      ageGroups,
      genders,
      disciplines,
      locations
    },
    stats,
    generatedAt: new Date().toISOString()
  };

  // 写入文件
  const outputPath = path.join(__dirname, '../src/data/totalRankings.ts');
  const content = `/**
 * 总积分排名静态数据
 * 自动生成，请勿手动修改
 * 生成时间: ${new Date().toISOString()}
 */

export interface TotalRankingItem {
  rank: number;
  athleteId: string;
  athleteName: string;
  team: string;
  totalPoints: number;
  competitionCount: number;
  bestRank: number;
  avgPoints: number;
  ageGroup: string;
  gender: string;
}

export interface TotalRankingsData {
  rankings: TotalRankingItem[];
  total: number;
  filters: {
    ageGroups: string[];
    genders: string[];
    disciplines: string[];
    locations: string[];
  };
  stats: {
    athleteCount: number;
    competitionCount: number;
    totalResults: number;
  };
  generatedAt: string;
}

export const totalRankingsData: TotalRankingsData = ${JSON.stringify(data, null, 2)};
`;

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`数据已写入: ${outputPath}`);
  console.log(`排名记录数: ${rankings.length}`);
  console.log(`运动员数: ${stats.athleteCount}`);
  console.log(`比赛数: ${stats.competitionCount}`);

  // 输出前5名
  console.log('\n前5名:');
  rankings.slice(0, 5).forEach(r => {
    console.log(`${r.rank}. ${r.athleteName} (${r.team}) - ${r.totalPoints}分`);
  });
}

generateTotalRankings()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
