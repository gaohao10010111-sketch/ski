import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  successResponse,
  createdResponse,
  notFoundResponse,
  badRequestResponse,
  validationErrorResponse,
  internalErrorResponse,
} from '@/lib/api-utils';
import { createResultSchema, idSchema } from '@/lib/validators';


interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/competitions/:id/results - 获取比赛成绩
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    // 验证ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的比赛ID');
    }

    // 检查比赛是否存在
    const competition = await prisma.competition.findUnique({
      where: { id },
      select: { id: true, name: true, sportType: true, discipline: true, status: true },
    });

    if (!competition) {
      return notFoundResponse('比赛不存在');
    }

    // 获取成绩
    const results = await prisma.competitionResult.findMany({
      where: { competitionId: id },
      orderBy: { finalRank: 'asc' },
      include: {
        athlete: {
          select: {
            id: true,
            name: true,
            gender: true,
            province: true,
            club: true,
            uSeriesGroup: true,
          },
        },
      },
    });

    const data = {
      competition: {
        id: competition.id,
        name: competition.name,
        sportType: competition.sportType,
        discipline: competition.discipline,
        status: competition.status,
      },
      totalCount: results.length,
      results: results.map((r) => ({
        id: r.id,
        athlete: r.athlete,
        finalRank: r.finalRank,
        status: r.status,
        totalTime: r.totalTime?.toNumber(),
        run1Time: r.run1Time?.toNumber(),
        run2Time: r.run2Time?.toNumber(),
        scores: r.scores,
        basePoints: r.basePoints.toNumber(),
        adjustedPoints: r.adjustedPoints?.toNumber(),
        finalPoints: r.finalPoints.toNumber(),
        raceCoefficient: r.raceCoefficient?.toNumber(),
        penalty: r.penalty?.toNumber(),
        difficultyMult: r.difficultyMult?.toNumber(),
      })),
    };

    return successResponse(data);
  } catch (error) {
    console.error('获取比赛成绩失败:', error);
    return internalErrorResponse('获取比赛成绩失败');
  }
}

// POST /api/competitions/:id/results - 录入单条成绩
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    // 验证比赛ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的比赛ID');
    }

    // 验证输入
    const validationResult = createResultSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const data = validationResult.data;

    // 检查比赛是否存在
    const competition = await prisma.competition.findUnique({
      where: { id },
    });

    if (!competition) {
      return notFoundResponse('比赛不存在');
    }

    // 检查运动员是否存在
    const athlete = await prisma.athlete.findUnique({
      where: { id: data.athleteId },
    });

    if (!athlete) {
      return badRequestResponse('运动员不存在');
    }

    // 检查是否已有该运动员的成绩
    const existingResult = await prisma.competitionResult.findUnique({
      where: {
        athleteId_competitionId: {
          athleteId: data.athleteId,
          competitionId: id,
        },
      },
    });

    if (existingResult) {
      return badRequestResponse('该运动员在此比赛中已有成绩记录');
    }

    // 计算积分（简化版，实际应调用积分计算引擎）
    let basePoints = 0;
    let finalPoints = 0;

    // 根据比赛类型计算积分
    if (competition.sportType === 'ALPINE_SKI') {
      // 高山滑雪：时间积分公式
      if (data.totalTime && competition.winnerTime) {
        const F = 1010; // GS系数，简化处理
        basePoints = F * (data.totalTime / Number(competition.winnerTime) - 1);
        basePoints = Math.max(0, basePoints);
      }
      const coefficient = competition.raceLevel === 'A' ? 1.0 : competition.raceLevel === 'B' ? 0.6 : 0.3;
      finalPoints = basePoints * coefficient;
    } else {
      // 其他项目：排名积分
      const pointsTable: Record<string, number[]> = {
        TIER_360: [360, 288, 216, 173, 138, 110, 88, 70, 56, 45, 36, 29, 23, 18, 14, 11, 9, 7, 5, 4, 3, 2, 1],
        TIER_240: [240, 192, 144, 115, 92, 74, 59, 47, 37, 30, 24, 19, 15, 12, 10, 7, 6, 5, 4, 3, 2, 1],
        TIER_120: [120, 96, 72, 58, 46, 37, 29, 23, 19, 15, 12, 10, 8, 6, 5, 4, 3, 2, 1],
      };
      const tier = competition.pointsTier || 'TIER_360';
      const table = pointsTable[tier] || pointsTable.TIER_360;
      basePoints = data.finalRank <= table.length ? table[data.finalRank - 1] : 0;
      finalPoints = basePoints;
    }

    // 创建成绩
    const result = await prisma.competitionResult.create({
      data: {
        athleteId: data.athleteId,
        competitionId: id,
        finalRank: data.finalRank,
        status: data.status,
        totalTime: data.totalTime,
        run1Time: data.run1Time,
        run2Time: data.run2Time,
        scores: data.scores ?? undefined,
        basePoints,
        finalPoints,
        raceCoefficient: competition.raceLevel === 'A' ? 1.0 : competition.raceLevel === 'B' ? 0.6 : 0.3,
      },
    });

    // 获取运动员信息
    const athleteInfo = await prisma.athlete.findUnique({
      where: { id: data.athleteId },
      select: { id: true, name: true },
    });

    return createdResponse({
      id: result.id,
      athlete: athleteInfo,
      finalRank: result.finalRank,
      finalPoints: result.finalPoints.toNumber(),
      message: '成绩录入成功',
    });
  } catch (error) {
    console.error('录入成绩失败:', error);
    return internalErrorResponse('录入成绩失败');
  }
}
