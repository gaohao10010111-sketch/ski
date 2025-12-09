'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Star,
  MapPin,
  Mountain,
  Thermometer,
  Clock,
  ChevronRight,
  Search,
  Snowflake,
  Building,
  Trees,
  ExternalLink,
  MessageCircle
} from 'lucide-react'
import { recommendedVenues, type Venue } from '@/data/recommendations'

const venueTypeLabels = {
  indoor: '室内雪场',
  outdoor: '户外雪场',
  resort: '滑雪度假区'
}

const venueTypeIcons = {
  indoor: Building,
  outdoor: Trees,
  resort: Mountain
}

export default function VenuesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  // 获取所有地点
  const locations = Array.from(new Set(recommendedVenues.map(v => v.location)))

  // 筛选场馆
  const filteredVenues = recommendedVenues.filter(venue => {
    const matchSearch = venue.name.includes(searchTerm) ||
                       venue.location.includes(searchTerm) ||
                       venue.features.some(f => f.includes(searchTerm))
    const matchType = !selectedType || venue.type === selectedType
    const matchLocation = !selectedLocation || venue.location === selectedLocation
    return matchSearch && matchType && matchLocation
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              推荐场馆
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              精选全国优质滑雪场馆，为您提供最佳滑雪体验
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
                placeholder="搜索场馆名称、地区..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
              />
            </div>

            {/* 类型筛选 */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue"
            >
              <option value="">全部类型</option>
              <option value="indoor">室内雪场</option>
              <option value="outdoor">户外雪场</option>
              <option value="resort">滑雪度假区</option>
            </select>

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
          </div>
        </div>
      </section>

      {/* 场馆列表 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              共找到 <span className="font-bold text-ski-navy">{filteredVenues.length}</span> 个场馆
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>

          {filteredVenues.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">没有找到符合条件的场馆</p>
            </div>
          )}
        </div>
      </section>

      {/* 底部提示 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ski-navy mb-4">想要入驻平台？</h2>
          <p className="text-gray-600 mb-6">
            如果您是滑雪场馆运营方，欢迎申请入驻我们的推荐平台
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

function VenueCard({ venue }: { venue: Venue }) {
  const TypeIcon = venueTypeIcons[venue.type]

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      {/* 顶部图片区 */}
      <div className="h-48 bg-gradient-to-br from-cyan-400 to-blue-600 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Snowflake className="w-24 h-24 text-white/20" />
        </div>
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            venue.type === 'indoor' ? 'bg-purple-100 text-purple-700' :
            venue.type === 'outdoor' ? 'bg-green-100 text-green-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            <TypeIcon className="w-4 h-4 mr-1" />
            {venueTypeLabels[venue.type]}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex items-center bg-white/90 rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium ml-1">{venue.rating}</span>
          <span className="text-xs text-gray-500 ml-1">({venue.reviews})</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{venue.name}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {venue.location} · {venue.address}
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* 雪道信息 */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
            <span className="text-gray-600">初级 {venue.slopes.beginner}</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
            <span className="text-gray-600">中级 {venue.slopes.intermediate}</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-black mr-1"></span>
            <span className="text-gray-600">高级 {venue.slopes.advanced}</span>
          </div>
        </div>

        {/* 海拔信息 */}
        {venue.elevation && (
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mountain className="w-4 h-4 mr-1" />
              海拔 {venue.elevation.base}-{venue.elevation.summit}m
            </div>
            <div>
              落差 {venue.elevation.summit - venue.elevation.base}m
            </div>
          </div>
        )}

        {/* 特色标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {venue.features.slice(0, 4).map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 开放时间和价格 */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {venue.openSeason}
          </div>
          <div className="text-ski-blue font-semibold">
            {venue.price}
          </div>
        </div>

        {/* 简介 */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {venue.description}
        </p>

        {/* 操作按钮 */}
        <div className="flex gap-3">
          {venue.website && (
            <a
              href={`https://${venue.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2 border border-ski-blue text-ski-blue rounded-lg hover:bg-ski-blue/5 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              官网
            </a>
          )}
          <button className="flex-1 flex items-center justify-center px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors text-sm">
            <MessageCircle className="w-4 h-4 mr-1" />
            咨询预订
          </button>
        </div>
      </div>
    </div>
  )
}
