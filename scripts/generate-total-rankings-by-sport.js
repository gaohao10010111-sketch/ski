/**
 * 生成按项目和子项分类的总积分排名静态数据
 * 先按四大项目分组，再按子项（discipline）细分
 *
 * 运行: node scripts/generate-total-rankings-by-sport.js
 */

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

// 四大项目分类映射（将数据库的sportType映射到四大项目）
const sportTypeMergeMap = {
  'alpine': 'alpine',
  'snowboard-slopestyle': 'snowboard-slopestyle-bigair',
  'snowboard-bigair': 'snowboard-slopestyle-bigair',
  'snowboard-parallel': 'snowboard-parallel',
  'freestyle-slopestyle': 'freestyle-slopestyle-bigair',
  'freestyle-bigair': 'freestyle-slopestyle-bigair'
};

const sportTypeNames = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle-bigair': '单板坡面障碍技巧/大跳台',
  'snowboard-parallel': '单板平行项目',
  'freestyle-slopestyle-bigair': '自由式坡面障碍技巧/大跳台'
};

// 四大项目显示顺序
const sportTypeOrder = [
  'alpine',
  'snowboard-slopestyle-bigair',
  'snowboard-parallel',
  'freestyle-slopestyle-bigair'
];

function generateTotalRankingsBySport() {
  console.log('开始生成按项目和子项分类的总积分排名数据...');

  // 获取所有比赛
  const competitions = db.prepare('SELECT * FROM Competition').all();
  console.log(`找到 ${competitions.length} 场比赛`);

  // 获取所有成绩，包含运动员和比赛信息
  const results = db.prepare(`
    SELECT
      r.*,
      a.name as athleteName,
      a.team as athleteTeam,
      c.sportType
    FROM Result r
    JOIN Athlete a ON r.athleteId = a.id
    JOIN Competition c ON r.competitionId = c.id
  `).all();
  console.log(`找到 ${results.length} 条成绩记录`);

  // 按 sportType + discipline + athleteId + ageGroup + gender 分组统计
  // key: `${mergedSportType}-${discipline}-${athleteId}-${ageGroup}-${gender}`
  const athleteStatsMap = new Map();

  results.forEach(r => {
    // 将原始sportType映射到四大项目
    const mergedSportType = sportTypeMergeMap[r.sportType] || r.sportType;
    const key = `${mergedSportType}-${r.discipline}-${r.athleteId}-${r.ageGroup}-${r.gender}`;

    if (!athleteStatsMap.has(key)) {
      athleteStatsMap.set(key, {
        athleteId: r.athleteId,
        athleteName: r.athleteName,
        team: r.athleteTeam,
        sportType: mergedSportType,
        discipline: r.discipline,
        ageGroup: r.ageGroup,
        gender: r.gender,
        totalPoints: 0,
        competitionCount: 0,
        bestRank: 999,
        results: []
      });
    }

    const stats = athleteStatsMap.get(key);
    stats.totalPoints += r.points || 0;
    stats.competitionCount += 1;
    if (r.rank < stats.bestRank) {
      stats.bestRank = r.rank;
    }
    stats.results.push({ points: r.points, rank: r.rank });
  });

  // 获取所有 sportType + discipline 组合
  const sportDisciplineSet = new Set();
  Array.from(athleteStatsMap.values()).forEach(s => {
    sportDisciplineSet.add(`${s.sportType}|||${s.discipline}`);
  });
  const sportDisciplines = Array.from(sportDisciplineSet).map(sd => {
    const [sportType, discipline] = sd.split('|||');
    return { sportType, discipline };
  });

  // 按四大项目分组
  const sportRankingsList = [];

  for (const mainSportType of sportTypeOrder) {
    // 找出该大项下的所有子项
    const disciplinesForSport = sportDisciplines
      .filter(sd => sd.sportType === mainSportType)
      .map(sd => sd.discipline)
      .sort();

    if (disciplinesForSport.length === 0) continue;

    // 生成该大项下各子项的排名
    const disciplineRankings = [];

    for (const discipline of disciplinesForSport) {
      // 筛选该子项的运动员
      const athleteStats = Array.from(athleteStatsMap.values())
        .filter(s => s.sportType === mainSportType && s.discipline === discipline)
        .sort((a, b) => b.totalPoints - a.totalPoints);

      const rankings = athleteStats.map((stats, index) => ({
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

      disciplineRankings.push({
        discipline,
        rankings,
        total: rankings.length
      });

      console.log(`  ${sportTypeNames[mainSportType]} - ${discipline}: ${rankings.length} 名运动员`);
    }

    sportRankingsList.push({
      sportType: mainSportType,
      sportName: sportTypeNames[mainSportType] || mainSportType,
      disciplineRankings,
      total: disciplineRankings.reduce((sum, dr) => sum + dr.total, 0)
    });

    console.log(`${sportTypeNames[mainSportType]}: ${disciplineRankings.length} 个子项`);
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

  // 合并所有项目的排名（兼容旧格式）
  const allRankings = sportRankingsList
    .flatMap(sr => sr.disciplineRankings.flatMap(dr => dr.rankings))
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .map((r, i) => ({ ...r, rank: i + 1 }));

  // 构建完整数据
  const data = {
    sportRankings: sportRankingsList,
    rankings: allRankings,  // 兼容旧格式
    total: allRankings.length,
    filters: {
      ageGroups,
      genders,
      disciplines,
      locations,
      sportTypes: sportTypeOrder.filter(st => sportRankingsList.some(sr => sr.sportType === st))
        .map(st => ({ value: st, label: sportTypeNames[st] || st }))
    },
    stats,
    generatedAt: new Date().toISOString()
  };

  // 写入文件
  const outputPath = path.join(__dirname, '../src/data/totalRankings.ts');
  const content = `/**
 * 总积分排名静态数据（按项目和子项分类）
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

export interface DisciplineRankings {
  discipline: string;
  rankings: TotalRankingItem[];
  total: number;
}

export interface SportRankings {
  sportType: string;
  sportName: string;
  disciplineRankings: DisciplineRankings[];
  total: number;
}

export interface TotalRankingsData {
  sportRankings: SportRankings[];
  rankings: TotalRankingItem[];  // 兼容旧格式
  total: number;
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

export const totalRankingsData: TotalRankingsData = ${JSON.stringify(data, null, 2)};
`;

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`\n数据已写入: ${outputPath}`);
  console.log(`总排名记录数: ${data.total}`);
  console.log(`运动员数: ${stats.athleteCount}`);
  console.log(`比赛数: ${stats.competitionCount}`);

  // 输出每个子项前3名
  console.log('\n各子项前3名:');
  for (const sr of sportRankingsList) {
    console.log(`\n【${sr.sportName}】`);
    for (const dr of sr.disciplineRankings) {
      console.log(`  [${dr.discipline}]`);
      dr.rankings.slice(0, 3).forEach(r => {
        console.log(`    ${r.rank}. ${r.athleteName} (${r.team}) - ${r.totalPoints}分`);
      });
    }
  }

  db.close();
}

generateTotalRankingsBySport();
