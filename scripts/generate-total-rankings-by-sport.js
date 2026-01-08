/**
 * 生成按项目和小子项分类的总积分排名静态数据
 * 先按四大项目分组，再按小子项（discipline + ageGroup + gender）细分
 * 每个小子项只包含一个年龄组和一个性别的运动员排名
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

// 年龄组排序顺序
const ageGroupOrder = ['U11', 'U12', 'U15', 'U18'];

// 性别排序顺序
const genderOrder = ['男子组', '女子组'];

function generateTotalRankingsBySport() {
  console.log('开始生成按项目和小子项分类的总积分排名数据...');

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

  // 按 sportType + discipline + ageGroup + gender + athleteId 分组统计
  // key: `${mergedSportType}-${discipline}-${ageGroup}-${gender}-${athleteId}`
  const athleteStatsMap = new Map();

  results.forEach(r => {
    // 将原始sportType映射到四大项目
    const mergedSportType = sportTypeMergeMap[r.sportType] || r.sportType;
    const key = `${mergedSportType}-${r.discipline}-${r.ageGroup}-${r.gender}-${r.athleteId}`;

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

  // 获取所有 sportType + discipline + ageGroup + gender 组合（小子项）
  const subEventSet = new Set();
  Array.from(athleteStatsMap.values()).forEach(s => {
    subEventSet.add(`${s.sportType}|||${s.discipline}|||${s.ageGroup}|||${s.gender}`);
  });
  const subEvents = Array.from(subEventSet).map(se => {
    const [sportType, discipline, ageGroup, gender] = se.split('|||');
    return { sportType, discipline, ageGroup, gender };
  });

  // 按四大项目分组
  const sportRankingsList = [];

  for (const mainSportType of sportTypeOrder) {
    // 找出该大项下的所有小子项，按 discipline -> ageGroup -> gender 排序
    const subEventsForSport = subEvents
      .filter(se => se.sportType === mainSportType)
      .sort((a, b) => {
        // 先按 discipline 排序
        if (a.discipline !== b.discipline) return a.discipline.localeCompare(b.discipline);
        // 再按 ageGroup 排序
        const aAgeIdx = ageGroupOrder.indexOf(a.ageGroup);
        const bAgeIdx = ageGroupOrder.indexOf(b.ageGroup);
        if (aAgeIdx !== bAgeIdx) return aAgeIdx - bAgeIdx;
        // 最后按 gender 排序
        const aGenderIdx = genderOrder.indexOf(a.gender);
        const bGenderIdx = genderOrder.indexOf(b.gender);
        return aGenderIdx - bGenderIdx;
      });

    if (subEventsForSport.length === 0) continue;

    // 生成该大项下各小子项的排名
    const subEventRankings = [];

    for (const subEvent of subEventsForSport) {
      // 筛选该小子项的运动员（同一 discipline + ageGroup + gender）
      const athleteStats = Array.from(athleteStatsMap.values())
        .filter(s =>
          s.sportType === mainSportType &&
          s.discipline === subEvent.discipline &&
          s.ageGroup === subEvent.ageGroup &&
          s.gender === subEvent.gender
        )
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

      // 小子项名称：如 "回转 U11 男子组"
      const subEventName = `${subEvent.discipline} ${subEvent.ageGroup} ${subEvent.gender}`;

      subEventRankings.push({
        discipline: subEvent.discipline,
        ageGroup: subEvent.ageGroup,
        gender: subEvent.gender,
        subEventName,
        rankings,
        total: rankings.length
      });

      console.log(`  ${sportTypeNames[mainSportType]} - ${subEventName}: ${rankings.length} 名运动员`);
    }

    sportRankingsList.push({
      sportType: mainSportType,
      sportName: sportTypeNames[mainSportType] || mainSportType,
      subEventRankings,
      total: subEventRankings.reduce((sum, se) => sum + se.total, 0)
    });

    console.log(`${sportTypeNames[mainSportType]}: ${subEventRankings.length} 个小子项`);
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
    .flatMap(sr => sr.subEventRankings.flatMap(se => se.rankings))
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

export interface SubEventRankings {
  discipline: string;
  ageGroup: string;
  gender: string;
  subEventName: string;
  rankings: TotalRankingItem[];
  total: number;
}

export interface SportRankings {
  sportType: string;
  sportName: string;
  subEventRankings: SubEventRankings[];
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
  console.log('\n各小子项前3名:');
  for (const sr of sportRankingsList) {
    console.log(`\n【${sr.sportName}】`);
    for (const se of sr.subEventRankings) {
      console.log(`  [${se.subEventName}]`);
      se.rankings.slice(0, 3).forEach(r => {
        console.log(`    ${r.rank}. ${r.athleteName} (${r.team}) - ${r.totalPoints}分`);
      });
    }
  }

  db.close();
}

generateTotalRankingsBySport();
