/**
 * 比赛服务 - 管理比赛数据的CRUD操作
 */
import prisma from '../prisma';
import type { Competition } from '../prisma';

// 查询参数类型
interface CompetitionFilters {
  sportType?: string;
  sport?: string;
  location?: string;
  status?: string;
  season?: string;
  limit?: number;
  offset?: number;
}

// 创建比赛参数
interface CreateCompetitionData {
  name: string;
  sportType: string;
  sport: string;
  location: string;
  date: string;
  endDate: string;
  status?: string;
  pdfSource?: string;
}

/**
 * 查询比赛列表
 */
export async function getCompetitions(filters: CompetitionFilters = {}) {
  const { sportType, sport, location, status, season, limit = 50, offset = 0 } = filters;

  const where: Record<string, unknown> = {};

  if (sportType) {
    where.sportType = sportType;
  }
  if (sport) {
    where.sport = { contains: sport };
  }
  if (location) {
    where.location = { contains: location };
  }
  if (status) {
    where.status = status;
  }
  if (season) {
    // 例如 "2024-2025" 赛季，比赛日期在这个范围内
    where.date = { contains: season.split('-')[0] };
  }

  const [competitions, total] = await Promise.all([
    prisma.competition.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: { date: 'desc' },
      include: {
        _count: {
          select: { results: true }
        }
      }
    }),
    prisma.competition.count({ where })
  ]);

  return { competitions, total };
}

/**
 * 获取单场比赛详情（含所有成绩）
 */
export async function getCompetitionById(id: string) {
  const competition = await prisma.competition.findUnique({
    where: { id },
    include: {
      results: {
        include: {
          athlete: true
        },
        orderBy: [
          { ageGroup: 'asc' },
          { gender: 'asc' },
          { rank: 'asc' }
        ]
      }
    }
  });

  return competition;
}

/**
 * 根据名称查找比赛
 */
export async function findCompetitionByName(name: string) {
  return prisma.competition.findFirst({
    where: { name }
  });
}

/**
 * 根据PDF来源查找比赛
 */
export async function findCompetitionByPdfSource(pdfSource: string) {
  return prisma.competition.findFirst({
    where: { pdfSource }
  });
}

/**
 * 创建比赛
 */
export async function createCompetition(data: CreateCompetitionData): Promise<Competition> {
  return prisma.competition.create({
    data: {
      name: data.name,
      sportType: data.sportType,
      sport: data.sport,
      location: data.location,
      date: data.date,
      endDate: data.endDate,
      status: data.status || 'completed',
      pdfSource: data.pdfSource,
    }
  });
}

/**
 * 更新比赛信息
 */
export async function updateCompetition(id: string, data: Partial<CreateCompetitionData>) {
  return prisma.competition.update({
    where: { id },
    data
  });
}

/**
 * 删除比赛（及其所有成绩）
 */
export async function deleteCompetition(id: string) {
  return prisma.competition.delete({
    where: { id }
  });
}

/**
 * 获取所有站点列表（用于筛选下拉框）
 */
export async function getLocations(): Promise<string[]> {
  const results = await prisma.competition.findMany({
    select: { location: true },
    distinct: ['location'],
    orderBy: { location: 'asc' }
  });

  return results.map(r => r.location);
}

/**
 * 获取所有项目类型列表
 */
export async function getSportTypes(): Promise<string[]> {
  const results = await prisma.competition.findMany({
    select: { sportType: true },
    distinct: ['sportType'],
    orderBy: { sportType: 'asc' }
  });

  return results.map(r => r.sportType);
}

/**
 * 获取所有中文项目名列表
 */
export async function getSports(): Promise<string[]> {
  const results = await prisma.competition.findMany({
    select: { sport: true },
    distinct: ['sport'],
    orderBy: { sport: 'asc' }
  });

  return results.map(r => r.sport);
}

/**
 * 获取比赛统计信息
 */
export async function getCompetitionStats() {
  const [totalCompetitions, totalResults, locationStats] = await Promise.all([
    prisma.competition.count(),
    prisma.result.count(),
    prisma.competition.groupBy({
      by: ['location'],
      _count: { id: true }
    })
  ]);

  return {
    totalCompetitions,
    totalResults,
    locationStats: locationStats.map(s => ({
      location: s.location,
      count: s._count.id
    }))
  };
}
