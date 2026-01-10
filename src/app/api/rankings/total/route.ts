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
 * - withChange: 是否返回排名变化 (默认true)
 */

import { NextRequest, NextResponse } from 'next/server'
import { getTotalRankings, getTotalRankingsWithChange, getRankingStats } from '@/lib/db/rankingService'

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

    const withChange = searchParams.get('withChange') !== 'false'

    const [rankingsData, stats] = await Promise.all([
      withChange ? getTotalRankingsWithChange(filters) : getTotalRankings(filters),
      getRankingStats()
    ])

    return NextResponse.json({
      success: true,
      data: {
        rankings: rankingsData.rankings,
        total: rankingsData.total,
        filters: rankingsData.filters,
        stats,
        lastUpdateTime: 'lastUpdateTime' in rankingsData ? rankingsData.lastUpdateTime : null
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
