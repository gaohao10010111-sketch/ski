/**
 * 总积分排名 API
 * GET /api/rankings/total
 *
 * 查询参数:
 * - sportType: 项目类型 (alpine, snowboard-slopestyle, etc.)
 * - discipline: 小项
 * - ageGroup: 年龄组 (U11, U15, U18)
 * - gender: 性别 (男子组, 女子组)
 * - limit: 每页条数 (默认100)
 * - offset: 偏移量 (默认0)
 */

import { NextRequest, NextResponse } from 'next/server'
import { getTotalRankings, getRankingStats } from '@/lib/db/rankingService'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const filters = {
      sportType: searchParams.get('sportType') || undefined,
      discipline: searchParams.get('discipline') || undefined,
      ageGroup: searchParams.get('ageGroup') || undefined,
      gender: searchParams.get('gender') || undefined,
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 100,
      offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0,
    }

    const [rankingsData, stats] = await Promise.all([
      getTotalRankings(filters),
      getRankingStats()
    ])

    return NextResponse.json({
      success: true,
      data: {
        rankings: rankingsData.rankings,
        total: rankingsData.total,
        filters: rankingsData.filters,
        stats
      }
    })
  } catch (error) {
    console.error('获取总积分排名失败:', error)
    return NextResponse.json(
      {
        success: false,
        error: '获取排名数据失败',
        message: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
}
