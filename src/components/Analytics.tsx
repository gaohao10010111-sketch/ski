'use client'

/**
 * 访问统计埋点组件 - 用户不可见
 * 自动记录页面访问、设备信息、停留时间等
 *
 * 注意：此功能仅在有服务器支持时工作（如云服务器部署）
 * GitHub Pages等静态站点会自动跳过统计
 */

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const SESSION_KEY = 'ski_session_id'
const VISIT_ID_KEY = 'ski_visit_id'

// 检测是否是静态站点（GitHub Pages等）
// 静态站点没有API路由支持，所以跳过统计
function isStaticSite(): boolean {
  if (typeof window === 'undefined') return true
  // GitHub Pages 域名
  if (window.location.hostname.includes('github.io')) return true
  return false
}

export default function Analytics() {
  const pathname = usePathname()
  const visitIdRef = useRef<string | null>(null)
  const startTimeRef = useRef<number>(Date.now())
  const apiAvailableRef = useRef<boolean | null>(null)

  useEffect(() => {
    // 静态站点跳过统计
    if (isStaticSite()) return

    // 获取或创建sessionId
    let sessionId = localStorage.getItem(SESSION_KEY)
    if (!sessionId) {
      sessionId = null // 让服务端生成
    }

    // 记录访问
    const recordVisit = async () => {
      // 如果已知API不可用，跳过
      if (apiAvailableRef.current === false) return

      try {
        const basePath = window.location.pathname.startsWith('/ski') ? '/ski' : ''
        const response = await fetch(`${basePath}/api/analytics`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: pathname,
            referrer: document.referrer || null,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            sessionId,
          }),
        })

        // 检查响应是否是JSON（API可用）还是HTML（静态站点404页面）
        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
          apiAvailableRef.current = false
          return
        }

        const data = await response.json()
        if (data.success && data.sessionId) {
          apiAvailableRef.current = true
          localStorage.setItem(SESSION_KEY, data.sessionId)
          visitIdRef.current = data.id
          sessionStorage.setItem(VISIT_ID_KEY, data.id)
        }
      } catch {
        // API不可用，标记并静默失败
        apiAvailableRef.current = false
      }
    }

    // 更新停留时间
    const updateDuration = async () => {
      // 如果API不可用，跳过
      if (apiAvailableRef.current === false) return

      const visitId = visitIdRef.current || sessionStorage.getItem(VISIT_ID_KEY)
      if (!visitId) return

      const duration = Math.round((Date.now() - startTimeRef.current) / 1000)
      if (duration < 1) return

      try {
        const basePath = window.location.pathname.startsWith('/ski') ? '/ski' : ''
        await fetch(`${basePath}/api/analytics`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: visitId, duration }),
          keepalive: true, // 确保页面关闭时请求也能发送
        })
      } catch {
        // 静默失败
      }
    }

    // 记录访问
    startTimeRef.current = Date.now()
    recordVisit()

    // 页面可见性变化时更新停留时间
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        updateDuration()
      }
    }

    // 页面卸载时更新停留时间
    const handleBeforeUnload = () => {
      updateDuration()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      updateDuration()
    }
  }, [pathname])

  // 不渲染任何可见内容
  return null
}
