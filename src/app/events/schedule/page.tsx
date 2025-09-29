'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react'

export default function EventsSchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/events" className="inline-flex items-center text-ski-blue hover:text-ski-blue/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回赛事中心
        </Link>

        <h1 className="text-3xl font-bold text-ski-navy mb-8">赛事日程</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center py-12 text-gray-500">
            <Calendar className="h-12 w-12 mr-4" />
            <div>
              <div className="text-lg font-medium mb-1">赛事日程功能</div>
              <div className="text-sm">此功能正在开发中，敬请期待...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}