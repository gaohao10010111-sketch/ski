'use client'

/**
 * 访问统计埋点组件 - 用户不可见
 * 自动记录页面访问、设备信息、停留时间等
 */

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const SESSION_KEY = 'ski_session_id'
const VISIT_ID_KEY = 'ski_visit_id'

export default function Analytics() {
  const pathname = usePathname()
  const visitIdRef = useRef<string | null>(null)
  const startTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    // 获取或创建sessionId
    let sessionId = localStorage.getItem(SESSION_KEY)
    if (!sessionId) {
      sessionId = null // 让服务端生成
    }

    // 记录访问
    const recordVisit = async () => {
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

        const data = await response.json()
        if (data.success && data.sessionId) {
          localStorage.setItem(SESSION_KEY, data.sessionId)
          visitIdRef.current = data.id
          sessionStorage.setItem(VISIT_ID_KEY, data.id)
        }
      } catch {
        // 静默失败
      }
    }

    // 更新停留时间
    const updateDuration = async () => {
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
