'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function MyHistoryPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login?redirect=/my/history')
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

        <h1 className="text-3xl font-bold text-ski-navy mb-8">成绩历史</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">成绩历史功能开发中...</p>
        </div>
      </div>
    </div>
  )
}