import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  successResponse,
  notFoundResponse,
  badRequestResponse,
  internalErrorResponse,
} from '@/lib/api-utils';
import { idSchema } from '@/lib/validators';

export const dynamic = 'force-dynamic';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/athletes/:id/points - 获取运动员积分历史
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    // 验证ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的运动员ID');
    }

    // 检查运动员是否存在
    const athlete = await prisma.athlete.findUnique({
      where: { id },
      select: { id: true, name: true, sportType: true },
    });

    if (!athlete) {
      return notFoundResponse('运动员不存在');
    }

    // 获取赛季积分汇总
    const seasonPoints = await prisma.athleteSeasonPoints.findMany({
      where: { athleteId: id },
      orderBy: [{ season: 'desc' }, { discipline: 'asc' }],
    });

    // 获取积分变化历史
    const pointsHistory = await prisma.pointsHistory.findMany({
      where: { athleteId: id },
      orderBy: { date: 'desc' },
      take: 50,
    });

    // 获取比赛成绩
    const results = await prisma.competitionResult.findMany({
      where: { athleteId: id },
      orderBy: { createdAt: 'desc' },
      include: {
        competition: {
          select: {
            id: true,
            name: true,
            sportType: true,
            discipline: true,
            startDate: true,
            raceLevel: true,
            pointsTier: true,
          },
        },
      },
    });

    const data = {
      athlete: {
        id: athlete.id,
        name: athlete.name,
        sportType: athlete.sportType,
      },
      seasonSummary: seasonPoints.map((sp) => ({
        season: sp.season,
        sportType: sp.sportType,
        discipline: sp.discipline,
        totalPoints: sp.totalPoints.toNumber(),
        competitionCount: sp.competitionCount,
        rank: sp.rank,
        blPoints: sp.blPoints?.toNumber(),
        nlPoints: sp.nlPoints?.toNumber(),
        carryoverPoints: sp.carryoverPoints?.toNumber(),
      })),
      history: pointsHistory.map((ph) => ({
        id: ph.id,
        date: ph.date.toISOString().split('T')[0],
        sportType: ph.sportType,
        discipline: ph.discipline,
        previousPoints: ph.previousPoints.toNumber(),
        newPoints: ph.newPoints.toNumber(),
        change: ph.change.toNumber(),
        reason: ph.reason,
        competitionId: ph.competitionId,
      })),
      competitionResults: results.map((r) => ({
        id: r.id,
        competition: {
          id: r.competition.id,
          name: r.competition.name,
          sportType: r.competition.sportType,
          discipline: r.competition.discipline,
          date: r.competition.startDate.toISOString().split('T')[0],
          raceLevel: r.competition.raceLevel,
          pointsTier: r.competition.pointsTier,
        },
        finalRank: r.finalRank,
        status: r.status,
        totalTime: r.totalTime?.toNumber(),
        basePoints: r.basePoints.toNumber(),
        adjustedPoints: r.adjustedPoints?.toNumber(),
        finalPoints: r.finalPoints.toNumber(),
        raceCoefficient: r.raceCoefficient?.toNumber(),
        penalty: r.penalty?.toNumber(),
      })),
    };

    return successResponse(data);
  } catch (error) {
    console.error('获取运动员积分历史失败:', error);
    return internalErrorResponse('获取运动员积分历史失败');
  }
}
