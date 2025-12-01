import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  paginatedResponse,
  validationErrorResponse,
  internalErrorResponse,
} from '@/lib/api-utils';
import { rankingsQuerySchema } from '@/lib/validators';
import { getCurrentSeason } from '@/lib/api-utils';
import { Prisma } from '@prisma/client';

export const dynamic = 'force-dynamic';

// GET /api/rankings - 获取积分排名
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const params = Object.fromEntries(searchParams.entries());

    // 验证查询参数
    const validationResult = rankingsQuerySchema.safeParse(params);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const { page, pageSize, sportType, gender, uSeriesGroup, season, discipline } = validationResult.data;
    const currentSeason = season || getCurrentSeason();

    // 构建查询条件
    const athleteWhere: Prisma.AthleteWhereInput = { status: 'ACTIVE' };
    if (sportType) athleteWhere.sportType = sportType;
    if (gender) athleteWhere.gender = gender;
    if (uSeriesGroup) athleteWhere.uSeriesGroup = uSeriesGroup;

    const seasonPointsWhere: Prisma.AthleteSeasonPointsWhereInput = {
      season: currentSeason,
    };
    if (sportType) seasonPointsWhere.sportType = sportType;
    if (discipline) seasonPointsWhere.discipline = discipline;

    // 获取赛季积分排名
    const [rankings, total] = await Promise.all([
      prisma.athleteSeasonPoints.findMany({
        where: {
          ...seasonPointsWhere,
          athlete: athleteWhere,
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { totalPoints: 'desc' },
        include: {
          athlete: {
            select: {
              id: true,
              name: true,
              gender: true,
              province: true,
              club: true,
              sportType: true,
              uSeriesGroup: true,
            },
          },
        },
      }),
      prisma.athleteSeasonPoints.count({
        where: {
          ...seasonPointsWhere,
          athlete: athleteWhere,
        },
      }),
    ]);

    // 计算排名并转换数据
    const startRank = (page - 1) * pageSize + 1;
    const data = rankings.map((sp, index) => ({
      rank: startRank + index,
      athleteId: sp.athlete.id,
      athleteName: sp.athlete.name,
      gender: sp.athlete.gender,
      province: sp.athlete.province,
      club: sp.athlete.club,
      sportType: sp.sportType,
      discipline: sp.discipline,
      uSeriesGroup: sp.athlete.uSeriesGroup,
      season: sp.season,
      totalPoints: sp.totalPoints.toNumber(),
      competitionCount: sp.competitionCount,
      blPoints: sp.blPoints?.toNumber(),
      nlPoints: sp.nlPoints?.toNumber(),
    }));

    return paginatedResponse(data, { page, pageSize, total });
  } catch (error) {
    console.error('获取积分排名失败:', error);
    return internalErrorResponse('获取积分排名失败');
  }
}
