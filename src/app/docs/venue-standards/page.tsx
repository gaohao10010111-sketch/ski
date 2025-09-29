'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function VenueStandardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/docs" className="inline-flex items-center text-ski-blue hover:text-ski-blue/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回知识库
        </Link>

        <h1 className="text-3xl font-bold text-ski-navy mb-8">场地技术标准</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">赛事场地设施和技术要求</p>
          <div className="text-sm text-gray-500">此页面功能开发中，请稍后访问...</div>
        </div>
      </div>
    </div>
  )
}