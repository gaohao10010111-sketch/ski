'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Award, Calendar } from 'lucide-react'

export default function MyPointsPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login?redirect=/my/points')
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/my" className="inline-flex items-center text-ski-blue hover:text-ski-blue/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回个人中心
        </Link>

        <h1 className="text-3xl font-bold text-ski-navy mb-8">我的积分</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <Award className="h-8 w-8 mb-4" />
            <div className="text-4xl font-bold mb-2">85.2</div>
            <div className="text-blue-100">当前积分</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <TrendingUp className="h-8 w-8 mb-4" />
            <div className="text-4xl font-bold mb-2">+12.5</div>
            <div className="text-green-100">本月增长</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <Calendar className="h-8 w-8 mb-4" />
            <div className="text-4xl font-bold mb-2">15</div>
            <div className="text-purple-100">全国排名</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-ski-navy mb-4">积分详情</h2>
          <p className="text-gray-600">积分详情功能开发中...</p>
        </div>
      </div>
    </div>
  )
}