import { prisma } from '@/lib/prisma';
import {
  successResponse,
  internalErrorResponse,
} from '@/lib/api-utils';
import { getCurrentSeason } from '@/lib/api-utils';

export const dynamic = 'force-dynamic';

// GET /api/stats/overview - 获取平台统计概览
export async function GET() {
  try {
    const currentSeason = getCurrentSeason();

    // 并行获取各项统计数据
    const [
      totalAthletes,
      activeAthletes,
      totalCompetitions,
      completedCompetitions,
      upcomingCompetitions,
      athletesBySport,
      recentCompetitions,
    ] = await Promise.all([
      // 总运动员数
      prisma.athlete.count(),

      // 活跃运动员数
      prisma.athlete.count({ where: { status: 'ACTIVE' } }),

      // 总比赛数
      prisma.competition.count(),

      // 已完成比赛数
      prisma.competition.count({ where: { status: 'COMPLETED' } }),

      // 即将开始的比赛数
      prisma.competition.count({ where: { status: 'UPCOMING' } }),

      // 按项目统计运动员
      prisma.athlete.groupBy({
        by: ['sportType'],
        _count: true,
      }),

      // 最近比赛
      prisma.competition.findMany({
        take: 5,
        orderBy: { startDate: 'desc' },
        select: {
          id: true,
          name: true,
          sportType: true,
          startDate: true,
          status: true,
          _count: { select: { results: true } },
        },
      }),
    ]);

    // 获取各项目排名第一的运动员
    const topAthletes = await prisma.athleteSeasonPoints.findMany({
      where: {
        season: currentSeason,
        rank: 1,
      },
      include: {
        athlete: {
          select: { id: true, name: true, gender: true, province: true },
        },
      },
    });

    const data = {
      overview: {
        totalAthletes,
        activeAthletes,
        totalCompetitions,
        completedCompetitions,
        upcomingCompetitions,
        currentSeason,
      },
      athletesBySport: athletesBySport.map((item) => ({
        sportType: item.sportType,
        count: item._count,
      })),
      recentCompetitions: recentCompetitions.map((comp) => ({
        id: comp.id,
        name: comp.name,
        sportType: comp.sportType,
        date: comp.startDate.toISOString().split('T')[0],
        status: comp.status,
        participantCount: comp._count.results,
      })),
      topAthletes: topAthletes.map((sp) => ({
        sportType: sp.sportType,
        discipline: sp.discipline,
        athlete: sp.athlete,
        totalPoints: sp.totalPoints.toNumber(),
      })),
    };

    return successResponse(data);
  } catch (error) {
    console.error('获取统计数据失败:', error);
    return internalErrorResponse('获取统计数据失败');
  }
}
