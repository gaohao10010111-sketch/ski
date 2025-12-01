import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  successResponse,
  notFoundResponse,
  badRequestResponse,
  validationErrorResponse,
  internalErrorResponse,
  noContentResponse,
} from '@/lib/api-utils';
import { updateCompetitionSchema, idSchema } from '@/lib/validators';

export const dynamic = 'force-dynamic';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/competitions/:id - 获取比赛详情
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    // 验证ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的比赛ID');
    }

    const competition = await prisma.competition.findUnique({
      where: { id },
      include: {
        results: {
          orderBy: { finalRank: 'asc' },
          include: {
            athlete: {
              select: { id: true, name: true, gender: true, province: true, club: true },
            },
          },
        },
        penaltyCalc: true,
        _count: {
          select: { results: true },
        },
      },
    });

    if (!competition) {
      return notFoundResponse('比赛不存在');
    }

    // 统计数据
    const stats = {
      totalParticipants: competition._count.results,
      finishers: competition.results.filter((r) => r.status === 'OK').length,
      dns: competition.results.filter((r) => r.status === 'DNS').length,
      dnf: competition.results.filter((r) => r.status === 'DNF').length,
      dq: competition.results.filter((r) => r.status === 'DQ').length,
    };

    const data = {
      id: competition.id,
      name: competition.name,
      sportType: competition.sportType,
      discipline: competition.discipline,
      startDate: competition.startDate.toISOString().split('T')[0],
      endDate: competition.endDate.toISOString().split('T')[0],
      location: competition.location,
      venue: competition.venue,
      raceLevel: competition.raceLevel,
      pointsTier: competition.pointsTier,
      format: competition.format,
      status: competition.status,
      organizer: competition.organizer,
      description: competition.description,
      winnerTime: competition.winnerTime?.toNumber(),
      createdAt: competition.createdAt.toISOString(),
      stats,
      penaltyCalculation: competition.penaltyCalc
        ? {
            sumA: competition.penaltyCalc.sumA.toNumber(),
            sumB: competition.penaltyCalc.sumB.toNumber(),
            sumC: competition.penaltyCalc.sumC.toNumber(),
            penalty: competition.penaltyCalc.penalty.toNumber(),
          }
        : null,
      results: competition.results.map((r) => ({
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
      })),
    };

    return successResponse(data);
  } catch (error) {
    console.error('获取比赛详情失败:', error);
    return internalErrorResponse('获取比赛详情失败');
  }
}

// PUT /api/competitions/:id - 更新比赛
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    // 验证ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的比赛ID');
    }

    // 验证输入
    const validationResult = updateCompetitionSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const data = validationResult.data;

    // 检查比赛是否存在
    const existingCompetition = await prisma.competition.findUnique({
      where: { id },
    });

    if (!existingCompetition) {
      return notFoundResponse('比赛不存在');
    }

    // 更新比赛
    const updateData: Record<string, unknown> = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.sportType !== undefined) updateData.sportType = data.sportType;
    if (data.discipline !== undefined) updateData.discipline = data.discipline;
    if (data.startDate !== undefined) updateData.startDate = new Date(data.startDate);
    if (data.endDate !== undefined) updateData.endDate = new Date(data.endDate);
    if (data.location !== undefined) updateData.location = data.location;
    if (data.venue !== undefined) updateData.venue = data.venue;
    if (data.raceLevel !== undefined) updateData.raceLevel = data.raceLevel;
    if (data.pointsTier !== undefined) updateData.pointsTier = data.pointsTier;
    if (data.format !== undefined) updateData.format = data.format;
    if (data.status !== undefined) updateData.status = data.status;
    if (data.organizer !== undefined) updateData.organizer = data.organizer;
    if (data.description !== undefined) updateData.description = data.description;

    const competition = await prisma.competition.update({
      where: { id },
      data: updateData,
    });

    return successResponse({
      id: competition.id,
      name: competition.name,
      message: '比赛更新成功',
    });
  } catch (error) {
    console.error('更新比赛失败:', error);
    return internalErrorResponse('更新比赛失败');
  }
}

// DELETE /api/competitions/:id - 删除比赛
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    // 验证ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的比赛ID');
    }

    // 检查比赛是否存在
    const existingCompetition = await prisma.competition.findUnique({
      where: { id },
      include: {
        results: { take: 1 },
      },
    });

    if (!existingCompetition) {
      return notFoundResponse('比赛不存在');
    }

    // 如果比赛已完成且有成绩，不允许删除
    if (existingCompetition.status === 'COMPLETED' && existingCompetition.results.length > 0) {
      return badRequestResponse('已完成的比赛有成绩记录，无法删除。请先删除相关成绩或修改比赛状态');
    }

    // 删除比赛（级联删除成绩）
    await prisma.competition.delete({
      where: { id },
    });

    return noContentResponse();
  } catch (error) {
    console.error('删除比赛失败:', error);
    return internalErrorResponse('删除比赛失败');
  }
}
