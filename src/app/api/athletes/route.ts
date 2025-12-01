import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  successResponse,
  paginatedResponse,
  createdResponse,
  badRequestResponse,
  validationErrorResponse,
  internalErrorResponse,
  notFoundResponse,
} from '@/lib/api-utils';
import {
  athleteQuerySchema,
  createAthleteSchema,
} from '@/lib/validators';
import { Prisma } from '@prisma/client';


// GET /api/athletes - 获取运动员列表
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const params = Object.fromEntries(searchParams.entries());

    // 验证查询参数
    const validationResult = athleteQuerySchema.safeParse(params);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const { page, pageSize, sportType, gender, province, uSeriesGroup, status, search } = validationResult.data;

    // 构建查询条件
    const where: Prisma.AthleteWhereInput = {};

    if (sportType) where.sportType = sportType;
    if (gender) where.gender = gender;
    if (province) where.province = province;
    if (uSeriesGroup) where.uSeriesGroup = uSeriesGroup;
    if (status) where.status = status;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { fisCode: { contains: search, mode: 'insensitive' } },
        { club: { contains: search, mode: 'insensitive' } },
      ];
    }

    // 查询数据
    const [athletes, total] = await Promise.all([
      prisma.athlete.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
        include: {
          seasonPoints: {
            take: 1,
            orderBy: { season: 'desc' },
          },
        },
      }),
      prisma.athlete.count({ where }),
    ]);

    // 转换数据格式
    const data = athletes.map((athlete) => ({
      id: athlete.id,
      name: athlete.name,
      gender: athlete.gender,
      birthDate: athlete.birthDate.toISOString().split('T')[0],
      nationality: athlete.nationality,
      province: athlete.province,
      club: athlete.club,
      fisCode: athlete.fisCode,
      sportType: athlete.sportType,
      uSeriesGroup: athlete.uSeriesGroup,
      status: athlete.status,
      currentPoints: athlete.seasonPoints[0]?.totalPoints?.toNumber() ?? 0,
      currentRank: athlete.seasonPoints[0]?.rank ?? null,
    }));

    return paginatedResponse(data, { page, pageSize, total });
  } catch (error) {
    console.error('获取运动员列表失败:', error);
    return internalErrorResponse('获取运动员列表失败');
  }
}

// POST /api/athletes - 创建运动员
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证输入
    const validationResult = createAthleteSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const data = validationResult.data;

    // 检查身份证号是否已存在
    if (data.idNumber) {
      const existingByIdNumber = await prisma.athlete.findUnique({
        where: { idNumber: data.idNumber },
      });
      if (existingByIdNumber) {
        return badRequestResponse('该身份证号已被注册');
      }
    }

    // 检查FIS代码是否已存在
    if (data.fisCode) {
      const existingByFisCode = await prisma.athlete.findUnique({
        where: { fisCode: data.fisCode },
      });
      if (existingByFisCode) {
        return badRequestResponse('该FIS代码已被注册');
      }
    }

    // 创建运动员
    const athlete = await prisma.athlete.create({
      data: {
        name: data.name,
        gender: data.gender,
        birthDate: new Date(data.birthDate),
        idNumber: data.idNumber,
        nationality: data.nationality,
        province: data.province,
        club: data.club,
        fisCode: data.fisCode,
        sportType: data.sportType,
        uSeriesGroup: data.uSeriesGroup,
      },
    });

    return createdResponse({
      id: athlete.id,
      name: athlete.name,
      gender: athlete.gender,
      birthDate: athlete.birthDate.toISOString().split('T')[0],
      sportType: athlete.sportType,
      message: '运动员创建成功',
    });
  } catch (error) {
    console.error('创建运动员失败:', error);
    return internalErrorResponse('创建运动员失败');
  }
}
