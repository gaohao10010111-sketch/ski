/**
 * 总积分排名 API
 * GET /api/rankings/total
 *
 * 查询参数：
 * - season: 赛季（如 "2025-2026"），默认当前赛季
 * - ageGroup: 年龄组筛选（U11/U15/U18/all）
 * - gender: 性别筛选（男子组/女子组/all）
 * - discipline: 子项筛选（大跳台/坡面障碍技巧/平行大回转/all）
 * - location: 站点筛选（成都融创雪世界/国家跳台滑雪中心雪如意/all）
 * - limit: 每页数量，默认50
 * - offset: 分页偏移，默认0
 */

import { NextRequest, NextResponse } from 'next/server';
import { getTotalRankings, getSeasonStats } from '@/lib/db/rankingService';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // 解析查询参数
    const season = searchParams.get('season') || '2025-2026';
    const ageGroup = searchParams.get('ageGroup') || 'all';
    const gender = searchParams.get('gender') || 'all';
    const discipline = searchParams.get('discipline') || 'all';
    const location = searchParams.get('location') || 'all';
    const limit = parseInt(searchParams.get('limit') || '50', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    // 获取排名数据
    const rankingResult = await getTotalRankings({
      season,
      ageGroup,
      gender,
      discipline,
      location,
      limit,
      offset
    });

    // 获取赛季统计
    const stats = await getSeasonStats(season);

    return NextResponse.json({
      success: true,
      data: {
        rankings: rankingResult.rankings,
        total: rankingResult.total,
        filters: rankingResult.filters,
        stats: {
          athleteCount: stats.athleteCount,
          competitionCount: stats.competitionCount,
          totalResults: stats.totalResults
        },
        pagination: {
          limit,
          offset,
          hasMore: offset + limit < rankingResult.total
        }
      }
    });
  } catch (error) {
    console.error('获取总积分排名失败:', error);
    return NextResponse.json(
      {
        success: false,
        error: '获取总积分排名失败',
        message: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    );
  }
}
