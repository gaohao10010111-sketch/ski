'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Star,
  MapPin,
  Award,
  Clock,
  ChevronRight,
  Search,
  BadgeCheck,
  GraduationCap,
  Users
} from 'lucide-react'
import { recommendedCoaches, type Coach } from '@/data/recommendations'

export default function CoachesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')

  const locations = Array.from(new Set(recommendedCoaches.map(c => c.location)))
  const specialties = Array.from(new Set(recommendedCoaches.flatMap(c => c.specialties)))

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
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] py-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">优秀教练</h1>
              <p className="text-sm text-gray-500">
                精选 {recommendedCoaches.length} 位认证滑雪教练，覆盖高山、单板、自由式等专项
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] py-3">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-[180px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索教练姓名、专项..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">全部地区</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">全部专项</option>
              {specialties.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Coach List */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] py-6">
        <div className="mb-4">
          <span className="text-sm text-gray-500">
            共 <span className="font-semibold text-gray-900">{filteredCoaches.length}</span> 位教练
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredCoaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>

        {filteredCoaches.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">没有找到符合条件的教练</p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] pb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">想要入驻平台？</h2>
          <p className="text-sm text-gray-500 mb-4">
            如果您是认证滑雪教练，欢迎申请入驻我们的推荐平台
          </p>
          <Link
            href="/cooperation"
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            申请入驻
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-bold text-blue-600">{coach.name.charAt(0)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-gray-900">{coach.name}</h3>
              <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
            </div>
            <p className="text-xs text-gray-500">{coach.title}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-medium">{coach.rating}</span>
              <span className="text-gray-400 text-xs">· {coach.students}名学员</span>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1 mb-3">
          {coach.specialties.map((spec, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-3">
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
            <Award className="w-3 h-3" />
            <span>资质认证</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {coach.certifications.slice(0, 3).map((cert, idx) => (
              <span key={idx} className="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {coach.location}
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {coach.experience}年经验
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {coach.description}
        </p>

        {/* Price + Action */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-[11px] text-gray-400">课时费</span>
            <p className="text-sm text-blue-600 font-medium">{coach.price}</p>
          </div>
          <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors">
            预约咨询
          </button>
        </div>
      </div>
    </div>
  )
}
