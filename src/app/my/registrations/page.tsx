'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react'

export default function MyRegistrationsPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login?redirect=/my/registrations')
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

  const registrations = [
    {
      id: 1,
      event: '2024全国锦标赛',
      project: '男子大回转',
      venue: '天池雪场',
      date: '2024-12-20',
      status: 'confirmed'
    },
    {
      id: 2,
      event: '中国杯高山滑雪公开赛',
      project: '男子回转',
      venue: '万龙雪场',
      date: '2025-01-15',
      status: 'pending'
    }
  ]

  const getStatusBadge = (status: string) => {
    if (status === 'confirmed') {
      return (
        <span className="flex items-center text-green-600 text-sm">
          <CheckCircle className="h-4 w-4 mr-1" />
          已确认
        </span>
      )
    }
    return (
      <span className="flex items-center text-yellow-600 text-sm">
        <Clock className="h-4 w-4 mr-1" />
        待审核
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/my" className="inline-flex items-center text-ski-blue hover:text-ski-blue/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回个人中心
        </Link>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-ski-navy">我的报名</h1>
          <Link
            href="/events/register"
            className="px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors"
          >
            新增报名
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {registrations.map((reg) => (
            <div key={reg.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{reg.event}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">项目:</span>
                      <span>{reg.project}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{reg.venue}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{reg.date}</span>
                    </div>
                  </div>
                </div>
                <div>
                  {getStatusBadge(reg.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}