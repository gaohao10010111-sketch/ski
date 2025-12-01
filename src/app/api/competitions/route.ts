import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  paginatedResponse,
  createdResponse,
  validationErrorResponse,
  internalErrorResponse,
} from '@/lib/api-utils';
import {
  competitionQuerySchema,
  createCompetitionSchema,
} from '@/lib/validators';
import { Prisma } from '@prisma/client';


// GET /api/competitions - 获取比赛列表
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const params = Object.fromEntries(searchParams.entries());

    // 验证查询参数
    const validationResult = competitionQuerySchema.safeParse(params);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const { page, pageSize, sportType, status, startDateFrom, startDateTo } = validationResult.data;

    // 构建查询条件
    const where: Prisma.CompetitionWhereInput = {};

    if (sportType) where.sportType = sportType;
    if (status) where.status = status;
    if (startDateFrom || startDateTo) {
      where.startDate = {};
      if (startDateFrom) where.startDate.gte = new Date(startDateFrom);
      if (startDateTo) where.startDate.lte = new Date(startDateTo);
    }

    // 查询数据
    const [competitions, total] = await Promise.all([
      prisma.competition.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { startDate: 'desc' },
        include: {
          _count: {
            select: { results: true },
          },
        },
      }),
      prisma.competition.count({ where }),
    ]);

    // 转换数据格式
    const data = competitions.map((comp) => ({
      id: comp.id,
      name: comp.name,
      sportType: comp.sportType,
      discipline: comp.discipline,
      startDate: comp.startDate.toISOString().split('T')[0],
      endDate: comp.endDate.toISOString().split('T')[0],
      location: comp.location,
      venue: comp.venue,
      raceLevel: comp.raceLevel,
      pointsTier: comp.pointsTier,
      format: comp.format,
      status: comp.status,
      organizer: comp.organizer,
      participantCount: comp._count.results,
    }));

    return paginatedResponse(data, { page, pageSize, total });
  } catch (error) {
    console.error('获取比赛列表失败:', error);
    return internalErrorResponse('获取比赛列表失败');
  }
}

// POST /api/competitions - 创建比赛
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证输入
    const validationResult = createCompetitionSchema.safeParse(body);
    if (!validationResult.success) {
      return validationErrorResponse(validationResult.error);
    }

    const data = validationResult.data;

    // 创建比赛
    const competition = await prisma.competition.create({
      data: {
        name: data.name,
        sportType: data.sportType,
        discipline: data.discipline,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        location: data.location,
        venue: data.venue,
        raceLevel: data.raceLevel,
        pointsTier: data.pointsTier,
        format: data.format,
        status: data.status,
        organizer: data.organizer,
        description: data.description,
      },
    });

    return createdResponse({
      id: competition.id,
      name: competition.name,
      sportType: competition.sportType,
      startDate: competition.startDate.toISOString().split('T')[0],
      message: '比赛创建成功',
    });
  } catch (error) {
    console.error('创建比赛失败:', error);
    return internalErrorResponse('创建比赛失败');
  }
}
