'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Star,
  MapPin,
  Award,
  Users,
  Clock,
  ChevronRight,
  Search,
  Filter,
  BadgeCheck,
  Briefcase
} from 'lucide-react'
import { recommendedCoaches, type Coach } from '@/data/recommendations'

export default function CoachesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')

  // 获取所有地点和专项
  const locations = Array.from(new Set(recommendedCoaches.map(c => c.location)))
  const specialties = Array.from(new Set(recommendedCoaches.flatMap(c => c.specialties)))

  // 筛选教练
  const filteredCoaches = recommendedCoaches.filter(coach => {
    const matchSearch = coach.name.includes(searchTerm) ||
                       coach.title.includes(searchTerm) ||
                       coach.specialties.some(s => s.includes(searchTerm))
    const matchLocation = !selectedLocation || coach.location === selectedLocation
    const matchSpecialty = !selectedSpecialty || coach.specialties.includes(selectedSpecialty)
    return matchSearch && matchLocation && matchSpecialty
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ski-navy via-ski-blue to-ski-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              优秀教练
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              精选国家级认证滑雪教练，助您快速提升滑雪技能
            </p>
          </div>
        </div>
      </section>

      {/* 筛选区 */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            {/* 搜索框 */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索教练姓名、专项..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
              />
            </div>

            {/* 地区筛选 */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue"
            >
              <option value="">全部地区</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            {/* 专项筛选 */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue"
            >
              <option value="">全部专项</option>
              {specialties.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* 教练列表 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              共找到 <span className="font-bold text-ski-navy">{filteredCoaches.length}</span> 位教练
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>

          {filteredCoaches.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">没有找到符合条件的教练</p>
            </div>
          )}
        </div>
      </section>

      {/* 底部提示 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ski-navy mb-4">想要入驻平台？</h2>
          <p className="text-gray-600 mb-6">
            如果您是认证滑雪教练，欢迎申请入驻我们的推荐平台
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors"
          >
            申请入驻
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-6">
        {/* 头部信息 */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-ski-blue to-ski-navy rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {coach.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-ski-navy">{coach.name}</h3>
              <BadgeCheck className="w-5 h-5 text-ski-blue" />
            </div>
            <p className="text-sm text-gray-600">{coach.title}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{coach.rating}</span>
              <span className="text-gray-400 text-sm">· {coach.students}名学员</span>
            </div>
          </div>
        </div>

        {/* 专项标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {coach.specialties.map((spec, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-ski-blue/10 text-ski-blue text-xs rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* 资质认证 */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Award className="w-4 h-4" />
            <span>资质认证</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {coach.certifications.slice(0, 3).map((cert, idx) => (
              <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* 基本信息 */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {coach.location}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {coach.experience}年经验
          </div>
        </div>

        {/* 简介 */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {coach.description}
        </p>

        {/* 价格和操作 */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <span className="text-xs text-gray-500">课时费</span>
            <p className="text-ski-blue font-semibold">{coach.price}</p>
          </div>
          <button className="px-4 py-2 bg-ski-blue text-white text-sm rounded-lg hover:bg-ski-blue/90 transition-colors">
            预约咨询
          </button>
        </div>
      </div>
    </div>
  )
}
