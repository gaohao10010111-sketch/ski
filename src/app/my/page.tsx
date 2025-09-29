'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {
  User,
  Award,
  Trophy,
  Calendar,
  TrendingUp,
  FileText,
  Settings,
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react'

export default function MyPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login?redirect=/my')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ski-blue"></div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  const getRoleDisplayName = (role: string) => {
    const roleMap: { [key: string]: string } = {
      admin: '系统管理员',
      coach: '教练员',
      athlete: '运动员',
      user: '普通用户'
    }
    return roleMap[role] || '用户'
  }

  const getStatusBadge = (status: string) => {
    const statusMap: { [key: string]: { text: string, color: string } } = {
      active: { text: '正常', color: 'bg-green-100 text-green-800' },
      pending: { text: '待审核', color: 'bg-yellow-100 text-yellow-800' },
      inactive: { text: '未激活', color: 'bg-gray-100 text-gray-800' },
      suspended: { text: '已停用', color: 'bg-red-100 text-red-800' }
    }
    const badge = statusMap[status] || statusMap['inactive']
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        {badge.text}
      </span>
    )
  }

  const quickLinks = [
    {
      title: '我的积分',
      description: '查看我的积分详情和历史记录',
      icon: Award,
      href: '/my/points',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      enabled: true
    },
    {
      title: '我的报名',
      description: '管理我的赛事报名信息',
      icon: Calendar,
      href: '/my/registrations',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      enabled: true
    },
    {
      title: '运动员档案',
      description: '查看和编辑运动员档案',
      icon: User,
      href: '/my/athlete',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      enabled: user.role === 'athlete'
    },
    {
      title: '成绩历史',
      description: '查看历史比赛成绩',
      icon: TrendingUp,
      href: '/my/history',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      enabled: true
    }
  ]

  const recentActivities = [
    { type: '积分更新', content: '2024全国锦标赛成绩已录入', time: '2小时前' },
    { type: '报名成功', content: '中国杯公开赛报名已确认', time: '1天前' },
    { type: '档案更新', content: '个人资料已更新', time: '3天前' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 用户信息卡片 */}
        <div className="bg-gradient-to-r from-ski-blue to-blue-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white/30">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{user.username}</h1>
                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    <span>{getRoleDisplayName(user.role)}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    <span>{user.email}</span>
                  </div>
                </div>
                <div className="mt-2">
                  {getStatusBadge(user.status)}
                </div>
              </div>
            </div>
            <Link
              href="/profile"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Settings className="h-5 w-5" />
              <span>编辑资料</span>
            </Link>
          </div>
        </div>

        {/* 快捷功能 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-ski-navy mb-4">快捷功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.filter(link => link.enabled).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 ${link.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <link.icon className={`h-6 w-6 ${link.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* 数据统计和最近活动 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 数据统计 */}
          {user.role === 'athlete' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-ski-navy mb-4">我的数据</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-ski-blue mb-1">85.2</div>
                  <div className="text-sm text-gray-600">当前积分</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">12</div>
                  <div className="text-sm text-gray-600">参赛场次</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">获奖次数</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">全国排名</div>
                </div>
              </div>
            </div>
          )}

          {/* 最近活动 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-ski-navy mb-4">最近活动</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className="w-2 h-2 bg-ski-blue rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{activity.content}</div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                  <span className="text-xs text-ski-blue font-medium">{activity.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}