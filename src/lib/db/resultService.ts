/**
 * 成绩服务 - 管理比赛成绩数据的CRUD操作
 */
import prisma from '../prisma';
import type { Result } from '../prisma';

// 查询参数类型
interface ResultFilters {
  competitionId?: string;
  athleteId?: string;
  ageGroup?: string;
  gender?: string;
  discipline?: string;
  location?: string;
  limit?: number;
  offset?: number;
}

// 创建成绩参数
interface CreateResultData {
  athleteId: string;
  competitionId: string;
  discipline: string;
  ageGroup: string;
  gender: string;
  rank: number;
  bib: number;
  run1?: string;
  run2?: string;
  time?: string;
  diff?: string;
  bestScore?: number;
  points: number;
}

/**
 * 查询成绩列表（支持多维度筛选）
 */
export async function getResults(filters: ResultFilters = {}) {
  const { competitionId, athleteId, ageGroup, gender, discipline, location, limit = 100, offset = 0 } = filters;

  // 构建查询条件
  const where: Record<string, unknown> = {};

  if (competitionId) {
    where.competitionId = competitionId;
  }
  if (athleteId) {
    where.athleteId = athleteId;
  }
  if (ageGroup && ageGroup !== 'all') {
    where.ageGroup = ageGroup;
  }
  if (gender && gender !== 'all') {
    where.gender = gender;
  }
  if (discipline && discipline !== 'all') {
    where.discipline = discipline;
  }
  if (location && location !== 'all') {
    where.competition = { location };
  }

  const [results, total] = await Promise.all([
    prisma.result.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: [
        { ageGroup: 'asc' },
        { gender: 'asc' },
        { rank: 'asc' }
      ],
      include: {
        athlete: true,
        competition: true
      }
    }),
    prisma.result.count({ where })
  ]);

  return { results, total };
}

/**
 * 获取某运动员的所有参赛成绩
 */
export async function getAthleteResults(athleteId: string) {
  return prisma.result.findMany({
    where: { athleteId },
    include: {
      competition: true
    },
    orderBy: [
      { competition: { date: 'desc' } },
      { discipline: 'asc' }
    ]
  });
}

/**
 * 获取某场比赛的所有成绩
 */
export async function getCompetitionResults(competitionId: string) {
  return prisma.result.findMany({
    where: { competitionId },
    include: {
      athlete: true
    },
    orderBy: [
      { ageGroup: 'asc' },
      { gender: 'asc' },
      { discipline: 'asc' },
      { rank: 'asc' }
    ]
  });
}

/**
 * 创建成绩记录
 */
export async function createResult(data: CreateResultData): Promise<Result> {
  return prisma.result.create({
    data: {
      athleteId: data.athleteId,
      competitionId: data.competitionId,
      discipline: data.discipline,
      ageGroup: data.ageGroup,
      gender: data.gender,
      rank: data.rank,
      bib: data.bib,
      run1: data.run1,
      run2: data.run2,
      time: data.time,
      diff: data.diff,
      bestScore: data.bestScore,
      points: data.points,
    }
  });
}

/**
 * 批量创建成绩记录
 */
export async function createManyResults(dataList: CreateResultData[]): Promise<number> {
  const result = await prisma.result.createMany({
    data: dataList,
    skipDuplicates: true
  });
  return result.count;
}

/**
 * 更新成绩记录
 */
export async function updateResult(id: string, data: Partial<CreateResultData>) {
  return prisma.result.update({
    where: { id },
    data
  });
}

/**
 * 删除成绩记录
 */
export async function deleteResult(id: string) {
  return prisma.result.delete({
    where: { id }
  });
}

/**
 * 获取所有子项列表（用于筛选下拉框）
 */
export async function getDisciplines(): Promise<string[]> {
  const results = await prisma.result.findMany({
    select: { discipline: true },
    distinct: ['discipline'],
    orderBy: { discipline: 'asc' }
  });

  return results.map(r => r.discipline);
}

/**
 * 获取所有年龄组列表
 */
export async function getAgeGroups(): Promise<string[]> {
  const results = await prisma.result.findMany({
    select: { ageGroup: true },
    distinct: ['ageGroup'],
    orderBy: { ageGroup: 'asc' }
  });

  return results.map(r => r.ageGroup);
}

/**
 * 获取成绩统计信息
 */
export async function getResultStats() {
  const [totalResults, ageGroupStats, disciplineStats] = await Promise.all([
    prisma.result.count(),
    prisma.result.groupBy({
      by: ['ageGroup', 'gender'],
      _count: { id: true }
    }),
    prisma.result.groupBy({
      by: ['discipline'],
      _count: { id: true }
    })
  ]);

  return {
    totalResults,
    ageGroupStats: ageGroupStats.map(s => ({
      ageGroup: s.ageGroup,
      gender: s.gender,
      count: s._count.id
    })),
    disciplineStats: disciplineStats.map(s => ({
      discipline: s.discipline,
      count: s._count.id
    }))
  };
}

/**
 * 检查成绩是否已存在
 */
export async function resultExists(
  athleteId: string,
  competitionId: string,
  discipline: string,
  ageGroup: string,
  gender: string
): Promise<boolean> {
  const result = await prisma.result.findUnique({
    where: {
      athleteId_competitionId_discipline_ageGroup_gender: {
        athleteId,
        competitionId,
        discipline,
        ageGroup,
        gender
      }
    }
  });
  return !!result;
}
