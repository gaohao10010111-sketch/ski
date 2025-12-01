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
import { updateAthleteSchema, idSchema } from '@/lib/validators';


interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/athletes/:id - 获取运动员详情
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    // 验证ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的运动员ID');
    }

    const athlete = await prisma.athlete.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, username: true, email: true },
        },
        seasonPoints: {
          orderBy: { season: 'desc' },
          take: 5,
        },
        results: {
          orderBy: { createdAt: 'desc' },
          take: 10,
          include: {
            competition: {
              select: { id: true, name: true, startDate: true, sportType: true, discipline: true },
            },
          },
        },
      },
    });

    if (!athlete) {
      return notFoundResponse('运动员不存在');
    }

    // 计算年龄
    const birthDate = new Date(athlete.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    const data = {
      id: athlete.id,
      name: athlete.name,
      gender: athlete.gender,
      birthDate: athlete.birthDate.toISOString().split('T')[0],
      age,
      idNumber: athlete.idNumber ? `${athlete.idNumber.substring(0, 6)}****${athlete.idNumber.substring(14)}` : null,
      nationality: athlete.nationality,
      province: athlete.province,
      club: athlete.club,
      fisCode: athlete.fisCode,
      sportType: athlete.sportType,
      uSeriesGroup: athlete.uSeriesGroup,
      status: athlete.status,
      createdAt: athlete.createdAt.toISOString(),
      user: athlete.user,
      seasonPoints: athlete.seasonPoints.map((sp) => ({
        season: sp.season,
        sportType: sp.sportType,
        discipline: sp.discipline,
        totalPoints: sp.totalPoints.toNumber(),
        competitionCount: sp.competitionCount,
        rank: sp.rank,
        blPoints: sp.blPoints?.toNumber(),
        nlPoints: sp.nlPoints?.toNumber(),
      })),
      recentResults: athlete.results.map((r) => ({
        id: r.id,
        competition: r.competition,
        finalRank: r.finalRank,
        finalPoints: r.finalPoints.toNumber(),
        status: r.status,
        createdAt: r.createdAt.toISOString(),
      })),
    };

    return successResponse(data);
  } catch (error) {
    console.error('获取运动员详情失败:', error);
    return internalErrorResponse('获取运动员详情失败');
  }
}

// PUT /api/athletes/:id - 更新运动员
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    // 验证ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的运动员ID');
    }

    // 验证输入
    const validationResult = updateAthleteSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const data = validationResult.data;

    // 检查运动员是否存在
    const existingAthlete = await prisma.athlete.findUnique({
      where: { id },
    });

    if (!existingAthlete) {
      return notFoundResponse('运动员不存在');
    }

    // 检查身份证号唯一性
    if (data.idNumber && data.idNumber !== existingAthlete.idNumber) {
      const duplicateIdNumber = await prisma.athlete.findFirst({
        where: { idNumber: data.idNumber, id: { not: id } },
      });
      if (duplicateIdNumber) {
        return badRequestResponse('该身份证号已被其他运动员注册');
      }
    }

    // 检查FIS代码唯一性
    if (data.fisCode && data.fisCode !== existingAthlete.fisCode) {
      const duplicateFisCode = await prisma.athlete.findFirst({
        where: { fisCode: data.fisCode, id: { not: id } },
      });
      if (duplicateFisCode) {
        return badRequestResponse('该FIS代码已被其他运动员注册');
      }
    }

    // 更新运动员
    const updateData: Record<string, unknown> = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.gender !== undefined) updateData.gender = data.gender;
    if (data.birthDate !== undefined) updateData.birthDate = new Date(data.birthDate);
    if (data.idNumber !== undefined) updateData.idNumber = data.idNumber;
    if (data.nationality !== undefined) updateData.nationality = data.nationality;
    if (data.province !== undefined) updateData.province = data.province;
    if (data.club !== undefined) updateData.club = data.club;
    if (data.fisCode !== undefined) updateData.fisCode = data.fisCode;
    if (data.sportType !== undefined) updateData.sportType = data.sportType;
    if (data.uSeriesGroup !== undefined) updateData.uSeriesGroup = data.uSeriesGroup;

    const athlete = await prisma.athlete.update({
      where: { id },
      data: updateData,
    });

    return successResponse({
      id: athlete.id,
      name: athlete.name,
      message: '运动员更新成功',
    });
  } catch (error) {
    console.error('更新运动员失败:', error);
    return internalErrorResponse('更新运动员失败');
  }
}

// DELETE /api/athletes/:id - 删除运动员
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    // 验证ID
    const idValidation = idSchema.safeParse(id);
    if (!idValidation.success) {
      return badRequestResponse('无效的运动员ID');
    }

    // 检查运动员是否存在
    const existingAthlete = await prisma.athlete.findUnique({
      where: { id },
      include: {
        results: { take: 1 },
      },
    });

    if (!existingAthlete) {
      return notFoundResponse('运动员不存在');
    }

    // 检查是否有比赛成绩
    if (existingAthlete.results.length > 0) {
      return badRequestResponse('该运动员有比赛成绩记录，无法删除。如需停用请修改状态为 RETIRED');
    }

    // 删除运动员
    await prisma.athlete.delete({
      where: { id },
    });

    return noContentResponse();
  } catch (error) {
    console.error('删除运动员失败:', error);
    return internalErrorResponse('删除运动员失败');
  }
}
