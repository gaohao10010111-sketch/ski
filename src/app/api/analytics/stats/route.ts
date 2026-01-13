/**
 * 访问统计数据API - 仅管理员可访问
 */

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prismaClient'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '7')

    // 计算日期范围
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    startDate.setHours(0, 0, 0, 0)

    // 获取总统计
    const [totalVisits, uniqueVisitors, todayVisits] = await Promise.all([
      // 总访问量
      prisma.visitorLog.count({
        where: { visitedAt: { gte: startDate } }
      }),
      // 独立访客（基于sessionId）
      prisma.visitorLog.groupBy({
        by: ['sessionId'],
        where: { visitedAt: { gte: startDate }, sessionId: { not: null } },
      }).then(groups => groups.length),
      // 今日访问量
      prisma.visitorLog.count({
        where: {
          visitedAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        }
      }),
    ])

    // 设备类型分布
    const deviceStats = await prisma.visitorLog.groupBy({
      by: ['deviceType'],
      where: { visitedAt: { gte: startDate } },
      _count: { _all: true }
    })

    // 浏览器分布
    const browserStats = await prisma.visitorLog.groupBy({
      by: ['browser'],
      where: { visitedAt: { gte: startDate } },
      _count: { _all: true }
    })

    // 操作系统分布
    const osStats = await prisma.visitorLog.groupBy({
      by: ['os'],
      where: { visitedAt: { gte: startDate } },
      _count: { _all: true }
    })

    // 热门页面
    const pageStats = await prisma.visitorLog.groupBy({
      by: ['path'],
      where: { visitedAt: { gte: startDate } },
      _count: { _all: true },
      orderBy: { _count: { path: 'desc' } },
      take: 10
    })

    // 最近访问记录
    const recentVisits = await prisma.visitorLog.findMany({
      where: { visitedAt: { gte: startDate } },
      orderBy: { visitedAt: 'desc' },
      take: 50,
      select: {
        id: true,
        path: true,
        deviceType: true,
        browser: true,
        os: true,
        ip: true,
        duration: true,
        visitedAt: true,
        isNewVisitor: true,
      }
    })

    // 每日访问趋势 - 使用简单查询避免SQLite兼容问题
    const dailyStats: Array<{ date: string; count: number }> = []

    return NextResponse.json({
      summary: {
        totalVisits,
        uniqueVisitors,
        todayVisits,
        avgDuration: 0,
      },
      deviceStats: deviceStats.map(d => ({ type: d.deviceType || 'unknown', count: d._count._all })),
      browserStats: browserStats.map(b => ({ browser: b.browser || 'unknown', count: b._count._all })),
      osStats: osStats.map(o => ({ os: o.os || 'unknown', count: o._count._all })),
      pageStats: pageStats.map(p => ({ path: p.path, count: p._count._all })),
      dailyStats,
      recentVisits,
    })
  } catch (error) {
    console.error('Analytics stats error:', error)
    // 返回更详细的错误信息用于调试
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Failed to fetch stats', details: errorMessage }, { status: 500 })
  }
}
