/**
 * 访问统计API - 用户不可见
 * 记录访问者的设备、地理位置、访问行为等信息
 */

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prismaClient'

// 解析User-Agent获取设备信息
function parseUserAgent(ua: string | null) {
  if (!ua) return { deviceType: 'unknown', browser: 'unknown', os: 'unknown' }

  // 设备类型
  let deviceType = 'desktop'
  if (/mobile/i.test(ua)) deviceType = 'mobile'
  else if (/tablet|ipad/i.test(ua)) deviceType = 'tablet'

  // 浏览器
  let browser = 'unknown'
  if (/chrome/i.test(ua) && !/edge|edg/i.test(ua)) browser = 'Chrome'
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari'
  else if (/firefox/i.test(ua)) browser = 'Firefox'
  else if (/edge|edg/i.test(ua)) browser = 'Edge'
  else if (/msie|trident/i.test(ua)) browser = 'IE'
  else if (/opera|opr/i.test(ua)) browser = 'Opera'

  // 操作系统
  let os = 'unknown'
  if (/windows/i.test(ua)) os = 'Windows'
  else if (/macintosh|mac os x/i.test(ua)) os = 'MacOS'
  else if (/linux/i.test(ua) && !/android/i.test(ua)) os = 'Linux'
  else if (/android/i.test(ua)) os = 'Android'
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS'

  return { deviceType, browser, os }
}

// 生成会话ID
function generateSessionId() {
  return `s_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// POST - 记录访问
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path, referrer, screenWidth, screenHeight, sessionId: clientSessionId } = body

    // 获取请求头信息
    const userAgent = request.headers.get('user-agent')
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwardedFor?.split(',')[0] || realIp || 'unknown'

    // 解析设备信息
    const { deviceType, browser, os } = parseUserAgent(userAgent)

    // 检查是否是新访客（通过sessionId判断）
    const sessionId = clientSessionId || generateSessionId()
    let isNewVisitor = true
    if (clientSessionId) {
      const existingVisit = await prisma.visitorLog.findFirst({
        where: { sessionId: clientSessionId }
      })
      isNewVisitor = !existingVisit
    }

    // 创建访问记录
    const log = await prisma.visitorLog.create({
      data: {
        path: path || '/',
        referrer: referrer || null,
        userAgent: userAgent || null,
        deviceType,
        browser,
        os,
        screenWidth: screenWidth || null,
        screenHeight: screenHeight || null,
        ip,
        sessionId,
        isNewVisitor,
      }
    })

    // 返回sessionId供前端持久化
    return NextResponse.json({
      success: true,
      sessionId,
      id: log.id
    })
  } catch (error) {
    console.error('Analytics error:', error)
    // 静默失败，不影响用户体验
    return NextResponse.json({ success: false })
  }
}

// PATCH - 更新页面停留时间
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, duration } = body

    if (!id || typeof duration !== 'number') {
      return NextResponse.json({ success: false })
    }

    await prisma.visitorLog.update({
      where: { id },
      data: { duration }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics update error:', error)
    return NextResponse.json({ success: false })
  }
}
