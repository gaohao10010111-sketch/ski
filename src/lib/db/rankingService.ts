/**
 * 排名服务 - 计算和查询总积分排名
 */
import prisma from '../prisma';

// 排名查询参数
interface RankingFilters {
  season: string;
  ageGroup?: string;
  gender?: string;
  discipline?: string;
  location?: string;
  limit?: number;
  offset?: number;
}

// 排名结果项
interface RankingItem {
  rank: number;
  athleteId: string;
  athleteName: string;
  team: string;
  totalPoints: number;
  competitionCount: number;
  bestRank: number;
  avgPoints: number;
}

// 排名结果
interface RankingResult {
  rankings: RankingItem[];
  total: number;
  filters: {
    ageGroups: string[];
    genders: string[];
    disciplines: string[];
    locations: string[];
  };
}

/**
 * 获取总积分排名（支持四维度筛选）
 */
export async function getTotalRankings(filters: RankingFilters): Promise<RankingResult> {
  const { season, ageGroup, gender, discipline, location, limit = 50, offset = 0 } = filters;

  // 构建筛选条件
  const whereConditions: string[] = [];
  const params: unknown[] = [];
  let paramIndex = 1;

  // 季节筛选 - 通过比赛日期
  if (season) {
    const startYear = season.split('-')[0];
    whereConditions.push(`c.date LIKE $${paramIndex}||'%'`);
    params.push(startYear);
    paramIndex++;
  }

  // 年龄组筛选
  if (ageGroup && ageGroup !== 'all') {
    whereConditions.push(`r.ageGroup = $${paramIndex}`);
    params.push(ageGroup);
    paramIndex++;
  }

  // 性别筛选
  if (gender && gender !== 'all') {
    whereConditions.push(`r.gender = $${paramIndex}`);
    params.push(gender);
    paramIndex++;
  }

  // 子项筛选
  if (discipline && discipline !== 'all') {
    whereConditions.push(`r.discipline = $${paramIndex}`);
    params.push(discipline);
    paramIndex++;
  }

  // 站点筛选
  if (location && location !== 'all') {
    whereConditions.push(`c.location = $${paramIndex}`);
    params.push(location);
    paramIndex++;
  }

  const whereClause = whereConditions.length > 0
    ? `WHERE ${whereConditions.join(' AND ')}`
    : '';

  // 使用原生SQL进行复杂聚合查询
  const rankingsQuery = `
    SELECT
      a.id as athleteId,
      a.name as athleteName,
      a.team as team,
      SUM(r.points) as totalPoints,
      COUNT(DISTINCT r.competitionId) as competitionCount,
      MIN(r.rank) as bestRank,
      AVG(r.points) as avgPoints
    FROM Result r
    JOIN Athlete a ON r.athleteId = a.id
    JOIN Competition c ON r.competitionId = c.id
    ${whereClause}
    GROUP BY a.id, a.name, a.team
    ORDER BY totalPoints DESC
    LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
  `;

  params.push(limit, offset);

  // 获取总数
  const countQuery = `
    SELECT COUNT(DISTINCT a.id) as total
    FROM Result r
    JOIN Athlete a ON r.athleteId = a.id
    JOIN Competition c ON r.competitionId = c.id
    ${whereClause}
  `;

  // 执行查询
  const rankings = await prisma.$queryRawUnsafe<Array<{
    athleteId: string;
    athleteName: string;
    team: string;
    totalPoints: number;
    competitionCount: number;
    bestRank: number;
    avgPoints: number;
  }>>(rankingsQuery, ...params);

  const countResult = await prisma.$queryRawUnsafe<Array<{ total: number }>>(
    countQuery,
    ...params.slice(0, -2) // 去掉limit和offset参数
  );

  // 获取筛选选项
  const [ageGroups, genders, disciplines, locations] = await Promise.all([
    prisma.result.findMany({
      select: { ageGroup: true },
      distinct: ['ageGroup'],
      orderBy: { ageGroup: 'asc' }
    }),
    prisma.result.findMany({
      select: { gender: true },
      distinct: ['gender'],
      orderBy: { gender: 'asc' }
    }),
    prisma.result.findMany({
      select: { discipline: true },
      distinct: ['discipline'],
      orderBy: { discipline: 'asc' }
    }),
    prisma.competition.findMany({
      select: { location: true },
      distinct: ['location'],
      orderBy: { location: 'asc' }
    })
  ]);

  // 添加排名
  const rankedResults: RankingItem[] = rankings.map((item, index) => ({
    rank: offset + index + 1,
    athleteId: item.athleteId,
    athleteName: item.athleteName,
    team: item.team,
    totalPoints: Number(item.totalPoints),
    competitionCount: Number(item.competitionCount),
    bestRank: Number(item.bestRank),
    avgPoints: Number(item.avgPoints)
  }));

  return {
    rankings: rankedResults,
    total: Number(countResult[0]?.total || 0),
    filters: {
      ageGroups: ageGroups.map(a => a.ageGroup),
      genders: genders.map(g => g.gender),
      disciplines: disciplines.map(d => d.discipline),
      locations: locations.map(l => l.location)
    }
  };
}

/**
 * 重新计算赛季总积分（新比赛导入后调用）
 */
export async function recalculateSeasonTotals(season: string) {
  const startYear = season.split('-')[0];

  // 1. 删除该赛季的旧汇总
  await prisma.seasonTotal.deleteMany({
    where: { season }
  });

  // 2. 获取该赛季所有成绩
  const results = await prisma.result.findMany({
    where: {
      competition: {
        date: { contains: startYear }
      }
    },
    include: {
      athlete: true,
      competition: true
    }
  });

  // 3. 按运动员+年龄组+性别分组计算
  const totalsMap = new Map<string, {
    athleteId: string;
    ageGroup: string;
    gender: string;
    totalPoints: number;
    competitionCount: number;
    bestRank: number;
    competitions: Set<string>;
  }>();

  for (const result of results) {
    const key = `${result.athleteId}-${result.ageGroup}-${result.gender}`;

    if (!totalsMap.has(key)) {
      totalsMap.set(key, {
        athleteId: result.athleteId,
        ageGroup: result.ageGroup,
        gender: result.gender,
        totalPoints: 0,
        competitionCount: 0,
        bestRank: Infinity,
        competitions: new Set()
      });
    }

    const total = totalsMap.get(key)!;
    total.totalPoints += result.points;
    total.competitions.add(result.competitionId);
    total.bestRank = Math.min(total.bestRank, result.rank);
  }

  // 4. 批量插入新汇总
  const totalsData = Array.from(totalsMap.values()).map(t => ({
    athleteId: t.athleteId,
    season,
    ageGroup: t.ageGroup,
    gender: t.gender,
    totalPoints: t.totalPoints,
    competitionCount: t.competitions.size,
    avgPoints: t.totalPoints / t.competitions.size,
    bestRank: t.bestRank === Infinity ? null : t.bestRank
  }));

  // 按积分排序并设置排名
  totalsData.sort((a, b) => b.totalPoints - a.totalPoints);

  for (let i = 0; i < totalsData.length; i++) {
    await prisma.seasonTotal.create({
      data: {
        ...totalsData[i],
        rank: i + 1
      }
    });
  }

  return {
    season,
    athleteCount: totalsData.length,
    totalResults: results.length
  };
}

/**
 * 获取赛季总积分统计
 */
export async function getSeasonStats(season: string) {
  const startYear = season.split('-')[0];

  const [athleteCount, competitionCount, totalResults] = await Promise.all([
    prisma.athlete.count({
      where: {
        results: {
          some: {
            competition: {
              date: { contains: startYear }
            }
          }
        }
      }
    }),
    prisma.competition.count({
      where: {
        date: { contains: startYear }
      }
    }),
    prisma.result.count({
      where: {
        competition: {
          date: { contains: startYear }
        }
      }
    })
  ]);

  return {
    season,
    athleteCount,
    competitionCount,
    totalResults
  };
}

/**
 * 获取某运动员的赛季积分详情
 */
export async function getAthleteSeasonDetails(athleteId: string, season: string) {
  const startYear = season.split('-')[0];

  const results = await prisma.result.findMany({
    where: {
      athleteId,
      competition: {
        date: { contains: startYear }
      }
    },
    include: {
      competition: true
    },
    orderBy: [
      { competition: { date: 'asc' } },
      { discipline: 'asc' }
    ]
  });

  const totalPoints = results.reduce((sum, r) => sum + r.points, 0);
  const bestRank = results.length > 0
    ? Math.min(...results.map(r => r.rank))
    : null;

  return {
    athleteId,
    season,
    results,
    totalPoints,
    competitionCount: new Set(results.map(r => r.competitionId)).size,
    bestRank
  };
}
