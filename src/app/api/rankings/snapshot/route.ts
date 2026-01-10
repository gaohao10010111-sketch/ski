/**
 * 排名快照 API
 * POST /api/rankings/snapshot - 保存当前排名快照
 * GET /api/rankings/snapshot - 获取快照历史
 *
 * POST 请求体:
 * - triggeredBy: 触发快照的比赛ID（可选）
 * - sportType: 项目类型（可选，不传则保存总排名快照）
 */

import { NextRequest, NextResponse } from 'next/server'
import { saveRankingSnapshot, getSnapshotHistory, cleanOldSnapshots } from '@/lib/db/rankingService'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const { triggeredBy, sportType, cleanOld } = body

    // 保存快照
    const result = saveRankingSnapshot(triggeredBy, sportType)

    // 如果需要清理旧快照
    let cleanedCount = 0
    if (cleanOld) {
      cleanedCount = cleanOldSnapshots(10) // 保留最近10次快照
    }

    return NextResponse.json({
      success: true,
      data: {
        savedCount: result.count,
        cleanedCount,
        message: `成功保存 ${result.count} 条排名快照记录`
      }
    })
  } catch (error) {
    console.error('保存排名快照失败:', error)
    return NextResponse.json(
      {
        success: false,
        error: '保存排名快照失败',
        message: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const history = getSnapshotHistory(20)

    return NextResponse.json({
      success: true,
      data: {
        history,
        total: history.length
      }
    })
  } catch (error) {
    console.error('获取快照历史失败:', error)
    return NextResponse.json(
      {
        success: false,
        error: '获取快照历史失败',
        message: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
}
