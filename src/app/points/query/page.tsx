'use client'

import Link from 'next/link'
import { Search, Award } from 'lucide-react'

export default function PointsQueryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ski-navy mb-2">积分查询</h1>
          <p className="text-gray-600">查询运动员积分信息和历史记录</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                输入运动员姓名或编号
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="请输入姓名或运动员编号"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                />
                <button className="absolute right-2 top-2 px-4 py-1.5 bg-ski-blue text-white rounded-md hover:bg-ski-blue/90 flex items-center">
                  <Search className="h-4 w-4 mr-1" />
                  搜索
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center py-12 text-gray-400">
              <Award className="h-16 w-16 mr-4" />
              <div>
                <div className="text-lg font-medium mb-1">输入信息开始查询</div>
                <div className="text-sm">支持按姓名或运动员编号查询积分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}