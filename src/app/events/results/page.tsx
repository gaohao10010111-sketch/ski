'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function EventsResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/events" className="inline-flex items-center text-ski-blue hover:text-ski-blue/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回赛事中心
        </Link>

        <h1 className="text-3xl font-bold text-ski-navy mb-8">成绩查询</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">成绩查询功能开发中...</p>
        </div>
      </div>
    </div>
  )
}