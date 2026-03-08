/**
 * 生成按项目分类的总积分排名静态数据
 * 四个大项分别独立排名
 * Best-of-3: 取最好3场积分之和
 *
 * 运行: npx tsx scripts/generate-total-rankings-by-sport.ts
 */

import Database from 'better-sqlite3';
import * as fs from 'fs';
import * as path from 'path';

const DB_PATH = path.join(__dirname, '../prisma/ski.db');

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

// Best-of-3: take top 3 competition scores
const MAX_COUNTING_RESULTS = 3;

function generateTotalRankingsBySport() {
  console.log('开始生成按项目分类的总积分排名数据...');

  const db = new Database(DB_PATH);

  // Get competitions
  const competitions = db.prepare('SELECT * FROM Competition').all() as Array<{
    id: string; name: string; sportType: string; location: string; date: string;
  }>;
  console.log(`找到 ${competitions.length} 场比赛`);

  // Get all results with athlete and competition info
  const results = db.prepare(`
    SELECT r.athleteId, a.name as athleteName, a.team,
           r.ageGroup, r.gender, r.discipline, r.rank, r.points,
           c.id as competitionId, c.sportType, c.location
    FROM Result r
    JOIN Athlete a ON r.athleteId = a.id
    JOIN Competition c ON r.competitionId = c.id
  `).all() as Array<{
    athleteId: string; athleteName: string; team: string;
    ageGroup: string; gender: string; discipline: string;
    rank: number; points: number;
    competitionId: string; sportType: string; location: string;
  }>;
  console.log(`找到 ${results.length} 条成绩记录`);

  // Group by sportType -> athlete+ageGroup+gender
  const athleteStatsMap = new Map<string, {
    athleteId: string; athleteName: string; team: string;
    sportType: string; ageGroup: string; gender: string;
    totalPoints: number; competitionCount: number; bestRank: number;
    pointsList: number[];
  }>();

  results.forEach(r => {
    const key = `${r.sportType}-${r.athleteId}-${r.ageGroup}-${r.gender}`;

    if (!athleteStatsMap.has(key)) {
      athleteStatsMap.set(key, {
        athleteId: r.athleteId, athleteName: r.athleteName, team: r.team,
        sportType: r.sportType, ageGroup: r.ageGroup, gender: r.gender,
        totalPoints: 0, competitionCount: 0, bestRank: 999, pointsList: []
      });
    }

    const stats = athleteStatsMap.get(key)!;
    stats.competitionCount += 1;
    if (r.rank < stats.bestRank) stats.bestRank = r.rank;
    stats.pointsList.push(r.points);
  });

  // Apply best-of-3 rule
  athleteStatsMap.forEach(stats => {
    const sorted = [...stats.pointsList].sort((a, b) => b - a);
    stats.totalPoints = sorted.slice(0, MAX_COUNTING_RESULTS).reduce((sum, p) => sum + p, 0);
  });

  // Get unique sport types
  const sportTypes = [...new Set(results.map(r => r.sportType))];
  console.log(`项目类型: ${sportTypes.join(', ')}`);

  // Generate rankings per sport
  const sportRankingsList: SportRankings[] = [];

  for (const sportType of sportTypes) {
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

    console.log(`${sportTypeNames[sportType] || sportType}: ${rankings.length} 名运动员`);
  }

  // Get filter options
  const ageGroups = [...new Set(results.map(r => r.ageGroup))].sort();
  const genders = [...new Set(results.map(r => r.gender))].sort();
  const locations = [...new Set(competitions.map(c => c.location))].sort();
  const disciplines = [...new Set(results.map(r => r.discipline))].sort();

  // Stats
  const stats = {
    athleteCount: new Set(results.map(r => r.athleteId)).size,
    competitionCount: competitions.length,
    totalResults: results.length
  };

  // Build full data
  const data = {
    sportRankings: sportRankingsList,
    filters: {
      ageGroups, genders, disciplines, locations,
      sportTypes: sportTypes.map(st => ({ value: st, label: sportTypeNames[st] || st }))
    },
    stats,
    generatedAt: new Date().toISOString()
  };

  // Write output file
  const outputPath = path.join(__dirname, '../src/data/totalRankings.ts');
  const allRankings = data.sportRankings.flatMap(sr => sr.rankings)
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .map((r, i) => ({ ...r, rank: i + 1 }));

  const content = `/**
 * 总积分排名静态数据（按项目分类）
 * 自动生成，请勿手动修改
 * 生成时间: ${new Date().toISOString()}
 * 积分规则: 取最好${MAX_COUNTING_RESULTS}场积分之和
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
  rankings: ${JSON.stringify(allRankings, null, 2)}
};
`;

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`\n数据已写入: ${outputPath}`);
  console.log(`总排名记录数: ${data.sportRankings.reduce((sum, sr) => sum + sr.total, 0)}`);
  console.log(`运动员数: ${stats.athleteCount}`);
  console.log(`比赛数: ${stats.competitionCount}`);

  // Print top 3 per sport
  console.log('\n各项目前3名:');
  for (const sr of sportRankingsList) {
    console.log(`\n【${sr.sportName}】`);
    sr.rankings.slice(0, 3).forEach(r => {
      console.log(`  ${r.rank}. ${r.athleteName} (${r.team}) - ${r.totalPoints}分`);
    });
  }

  db.close();
}

generateTotalRankingsBySport();
