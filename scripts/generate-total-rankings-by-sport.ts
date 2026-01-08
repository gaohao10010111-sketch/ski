/**
 * 生成按项目分类的总积分排名静态数据
 * 四个大项分别独立排名
 *
 * 运行: npx tsx scripts/generate-total-rankings-by-sport.ts
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

interface SportRankings {
  sportType: string;
  sportName: string;
  rankings: RankingItem[];
  total: number;
}

const sportTypeNames: Record<string, string> = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle': '单板坡面障碍技巧/大跳台',
  'snowboard-parallel': '单板平行项目',
  'freestyle-slopestyle': '自由式坡面障碍技巧/大跳台'
};

async function generateTotalRankingsBySport() {
  console.log('开始生成按项目分类的总积分排名数据...');

  // 获取所有比赛
  const competitions = await prisma.competition.findMany();
  console.log(`找到 ${competitions.length} 场比赛`);

  // 创建比赛ID到sportType的映射
  const competitionSportMap = new Map<string, string>();
  competitions.forEach(c => {
    competitionSportMap.set(c.id, c.sportType);
  });

  // 获取所有成绩，包含比赛信息
  const results = await prisma.result.findMany({
    include: {
      athlete: true,
      competition: true
    }
  });
  console.log(`找到 ${results.length} 条成绩记录`);

  // 按项目分组统计每个运动员的积分
  // key: `${sportType}-${athleteId}-${ageGroup}-${gender}`
  const athleteStatsMap = new Map<string, {
    athleteId: string;
    athleteName: string;
    team: string;
    sportType: string;
    ageGroup: string;
    gender: string;
    totalPoints: number;
    competitionCount: number;
    bestRank: number;
    results: { points: number; rank: number }[];
  }>();

  results.forEach(r => {
    const sportType = r.competition.sportType;
    const key = `${sportType}-${r.athleteId}-${r.ageGroup}-${r.gender}`;

    if (!athleteStatsMap.has(key)) {
      athleteStatsMap.set(key, {
        athleteId: r.athleteId,
        athleteName: r.athlete.name,
        team: r.athlete.team,
        sportType,
        ageGroup: r.ageGroup,
        gender: r.gender,
        totalPoints: 0,
        competitionCount: 0,
        bestRank: 999,
        results: []
      });
    }

    const stats = athleteStatsMap.get(key)!;
    stats.totalPoints += r.points;
    stats.competitionCount += 1;
    if (r.rank < stats.bestRank) {
      stats.bestRank = r.rank;
    }
    stats.results.push({ points: r.points, rank: r.rank });
  });

  // 获取所有项目类型
  const sportTypes = [...new Set(results.map(r => r.competition.sportType))];
  console.log(`项目类型: ${sportTypes.join(', ')}`);

  // 按项目分别生成排名
  const sportRankingsList: SportRankings[] = [];

  for (const sportType of sportTypes) {
    // 筛选该项目的运动员
    const athleteStats = Array.from(athleteStatsMap.values())
      .filter(s => s.sportType === sportType)
      .sort((a, b) => b.totalPoints - a.totalPoints);

    const rankings: RankingItem[] = athleteStats.map((stats, index) => ({
      rank: index + 1,
      athleteId: stats.athleteId,
      athleteName: stats.athleteName,
      team: stats.team,
      totalPoints: stats.totalPoints,
      competitionCount: stats.competitionCount,
      bestRank: stats.bestRank === 999 ? 1 : stats.bestRank,
      avgPoints: stats.competitionCount > 0 ? Math.round(stats.totalPoints / stats.competitionCount * 100) / 100 : 0,
      ageGroup: stats.ageGroup,
      gender: stats.gender
    }));

    sportRankingsList.push({
      sportType,
      sportName: sportTypeNames[sportType] || sportType,
      rankings,
      total: rankings.length
    });

    console.log(`${sportTypeNames[sportType]}: ${rankings.length} 名运动员`);
  }

  // 获取筛选选项
  const ageGroups = [...new Set(results.map(r => r.ageGroup))].sort();
  const genders = [...new Set(results.map(r => r.gender))].sort();
  const locations = [...new Set(competitions.map(c => c.location))].sort();
  const disciplines = [...new Set(results.map(r => r.discipline))].sort();

  // 统计数据
  const stats = {
    athleteCount: new Set(results.map(r => r.athleteId)).size,
    competitionCount: competitions.length,
    totalResults: results.length
  };

  // 构建完整数据
  const data = {
    sportRankings: sportRankingsList,
    filters: {
      ageGroups,
      genders,
      disciplines,
      locations,
      sportTypes: sportTypes.map(st => ({ value: st, label: sportTypeNames[st] || st }))
    },
    stats,
    generatedAt: new Date().toISOString()
  };

  // 写入文件
  const outputPath = path.join(__dirname, '../src/data/totalRankings.ts');
  const content = `/**
 * 总积分排名静态数据（按项目分类）
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

export interface SportRankings {
  sportType: string;
  sportName: string;
  rankings: TotalRankingItem[];
  total: number;
}

export interface TotalRankingsData {
  sportRankings: SportRankings[];
  filters: {
    ageGroups: string[];
    genders: string[];
    disciplines: string[];
    locations: string[];
    sportTypes: { value: string; label: string }[];
  };
  stats: {
    athleteCount: number;
    competitionCount: number;
    totalResults: number;
  };
  generatedAt: string;
}

// 兼容旧格式的 rankings 属性（取所有项目合并）
export const totalRankingsData: TotalRankingsData & { rankings: TotalRankingItem[] } = {
  ...${JSON.stringify(data, null, 2)},
  // 兼容旧格式：合并所有项目的排名
  rankings: ${JSON.stringify(data.sportRankings.flatMap(sr => sr.rankings).sort((a, b) => b.totalPoints - a.totalPoints).map((r, i) => ({ ...r, rank: i + 1 })), null, 2)}
};
`;

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`\n数据已写入: ${outputPath}`);
  console.log(`总排名记录数: ${data.sportRankings.reduce((sum, sr) => sum + sr.total, 0)}`);
  console.log(`运动员数: ${stats.athleteCount}`);
  console.log(`比赛数: ${stats.competitionCount}`);

  // 输出每个项目前3名
  console.log('\n各项目前3名:');
  for (const sr of sportRankingsList) {
    console.log(`\n【${sr.sportName}】`);
    sr.rankings.slice(0, 3).forEach(r => {
      console.log(`  ${r.rank}. ${r.athleteName} (${r.team}) - ${r.totalPoints}分`);
    });
  }
}

generateTotalRankingsBySport()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
