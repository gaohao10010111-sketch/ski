/**
 * 运动员积分构成明细 API
 * GET /api/rankings/breakdown
 *
 * 查询参数:
 * - athleteId: 运动员ID (必填)
 * - sportType: 项目类型 (可选)
 * - discipline: 小项 (可选)
 * - ageGroup: 年龄组 (可选)
 * - gender: 性别 (可选)
 */

import { NextRequest, NextResponse } from 'next/server'
import { getAthletePointsBreakdown } from '@/lib/db/rankingService'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const athleteId = searchParams.get('athleteId')

    if (!athleteId) {
      return NextResponse.json(
        {
          success: false,
          error: '缺少必填参数',
          message: 'athleteId 是必填参数'
        },
        { status: 400 }
      )
    }

    const filters = {
      sportType: searchParams.get('sportType') || undefined,
      discipline: searchParams.get('discipline') || undefined,
      ageGroup: searchParams.get('ageGroup') || undefined,
      gender: searchParams.get('gender') || undefined,
    }

    const breakdown = await getAthletePointsBreakdown(athleteId, filters)

    // Best-of-3: sort by points desc, take top 3 for total
    const MAX_COUNTING = 3
    const sorted = [...breakdown].sort((a, b) => b.points - a.points)
    const totalPoints = sorted.slice(0, MAX_COUNTING).reduce((sum, item) => sum + item.points, 0)

    return NextResponse.json({
      success: true,
      data: {
        athleteId,
        totalPoints,
        competitionCount: breakdown.length,
        breakdown
      }
    })
  } catch (error) {
    console.error('获取积分构成明细失败:', error)
    return NextResponse.json(
      {
        success: false,
        error: '获取积分构成明细失败',
        message: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
}
