'use client'

/**
 * 访问统计管理后台 - 隐藏页面
 * 路径: /admin/analytics
 */

import { useState, useEffect } from 'react'
import {
  Users,
  Eye,
  Clock,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  TrendingUp,
  RefreshCw,
  Calendar
} from 'lucide-react'

interface AnalyticsData {
  summary: {
    totalVisits: number
    uniqueVisitors: number
    todayVisits: number
    avgDuration: number
  }
  deviceStats: Array<{ type: string; count: number }>
  browserStats: Array<{ browser: string; count: number }>
  osStats: Array<{ os: string; count: number }>
  pageStats: Array<{ path: string; count: number }>
  dailyStats: Array<{ date: string; count: number }>
  recentVisits: Array<{
    id: string
    path: string
    deviceType: string | null
    browser: string | null
    os: string | null
    ip: string | null
    duration: number | null
    visitedAt: string
    isNewVisitor: boolean
  }>
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [days, setDays] = useState(7)

  const fetchData = async () => {
    setLoading(true)
    try {
      const basePath = window.location.pathname.startsWith('/ski') ? '/ski' : ''
      const res = await fetch(`${basePath}/api/analytics/stats?days=${days}`)
      const json = await res.json()
      setData(json)
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [days])

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Smartphone className="h-4 w-4" />
      case 'tablet': return <Tablet className="h-4 w-4" />
      default: return <Monitor className="h-4 w-4" />
    }
  }

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return '-'
    if (seconds < 60) return `${seconds}秒`
    return `${Math.floor(seconds / 60)}分${seconds % 60}秒`
  }

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-2" />
          <p className="text-gray-600">加载统计数据...</p>
        </div>
      </div>
    )
  }

  if (!data.summary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">加载数据失败，请刷新重试</p>
          <button
            onClick={fetchData}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            重试
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* 页头 */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">访问统计</h1>
            <p className="text-gray-500 text-sm mt-1">网站访问数据分析（仅管理员可见）</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="1">今天</option>
              <option value="7">最近7天</option>
              <option value="30">最近30天</option>
              <option value="90">最近90天</option>
            </select>
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              刷新
            </button>
          </div>
        </div>

        {data && (
          <>
            {/* 概览卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Eye className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">总访问量</p>
                    <p className="text-2xl font-bold text-gray-900">{data.summary.totalVisits}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">独立访客</p>
                    <p className="text-2xl font-bold text-gray-900">{data.summary.uniqueVisitors}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">今日访问</p>
                    <p className="text-2xl font-bold text-gray-900">{data.summary.todayVisits}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">日均访问</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {days > 0 ? Math.round(data.summary.totalVisits / days) : 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 图表区域 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* 设备分布 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">设备类型</h3>
                <div className="space-y-3">
                  {data.deviceStats.map((item) => (
                    <div key={item.type} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getDeviceIcon(item.type)}
                        <span className="text-sm text-gray-600 capitalize">{item.type || '未知'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(item.count / data.summary.totalVisits) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-12 text-right">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 浏览器分布 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">浏览器</h3>
                <div className="space-y-3">
                  {data.browserStats.slice(0, 5).map((item) => (
                    <div key={item.browser} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{item.browser || '未知'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(item.count / data.summary.totalVisits) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-12 text-right">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 操作系统分布 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">操作系统</h3>
                <div className="space-y-3">
                  {data.osStats.slice(0, 5).map((item) => (
                    <div key={item.os} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{item.os || '未知'}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-600 h-2 rounded-full"
                            style={{ width: `${(item.count / data.summary.totalVisits) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-12 text-right">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 热门页面 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">热门页面</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 border-b">
                      <th className="pb-3 font-medium">页面路径</th>
                      <th className="pb-3 font-medium text-right">访问量</th>
                      <th className="pb-3 font-medium text-right">占比</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.pageStats.map((page, index) => (
                      <tr key={page.path} className="border-b border-gray-50">
                        <td className="py-3">
                          <span className="text-sm text-gray-900">{page.path}</span>
                        </td>
                        <td className="py-3 text-right">
                          <span className="text-sm font-medium text-gray-900">{page.count}</span>
                        </td>
                        <td className="py-3 text-right">
                          <span className="text-sm text-gray-500">
                            {((page.count / data.summary.totalVisits) * 100).toFixed(1)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 最近访问 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">最近访问记录</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 border-b">
                      <th className="pb-3 font-medium">时间</th>
                      <th className="pb-3 font-medium">页面</th>
                      <th className="pb-3 font-medium">设备</th>
                      <th className="pb-3 font-medium">浏览器</th>
                      <th className="pb-3 font-medium">系统</th>
                      <th className="pb-3 font-medium">停留</th>
                      <th className="pb-3 font-medium">IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.recentVisits.map((visit) => (
                      <tr key={visit.id} className="border-b border-gray-50 text-sm">
                        <td className="py-2 text-gray-500">
                          {new Date(visit.visitedAt).toLocaleString('zh-CN')}
                        </td>
                        <td className="py-2 text-gray-900 max-w-[200px] truncate">{visit.path}</td>
                        <td className="py-2">
                          <span className="inline-flex items-center gap-1">
                            {getDeviceIcon(visit.deviceType || '')}
                            <span className="capitalize">{visit.deviceType || '-'}</span>
                          </span>
                        </td>
                        <td className="py-2 text-gray-600">{visit.browser || '-'}</td>
                        <td className="py-2 text-gray-600">{visit.os || '-'}</td>
                        <td className="py-2 text-gray-600">{formatDuration(visit.duration)}</td>
                        <td className="py-2 text-gray-400 font-mono text-xs">{visit.ip || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
