'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Star,
  MapPin,
  Mountain,
  Clock,
  ChevronRight,
  Search,
  Snowflake,
  Building,
  Trees,
  ExternalLink,
  Trophy
} from 'lucide-react'
import { recommendedVenues, type Venue } from '@/data/recommendations'

const venueTypeLabels: Record<string, string> = {
  indoor: '室内雪场',
  outdoor: '户外雪场',
  resort: '滑雪度假区'
}

const venueTypeIcons: Record<string, typeof Building> = {
  indoor: Building,
  outdoor: Trees,
  resort: Mountain
}

export default function VenuesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [onlyCompetition, setOnlyCompetition] = useState(false)

  const locations = Array.from(new Set(recommendedVenues.map(v => v.location)))

  const filteredVenues = recommendedVenues.filter(venue => {
    const matchSearch = venue.name.includes(searchTerm) ||
                       venue.location.includes(searchTerm) ||
                       venue.features.some(f => f.includes(searchTerm))
    const matchType = !selectedType || venue.type === selectedType
    const matchLocation = !selectedLocation || venue.location === selectedLocation
    const matchCompetition = !onlyCompetition || venue.isCompetitionVenue
    return matchSearch && matchType && matchLocation && matchCompetition
  })

  const competitionCount = recommendedVenues.filter(v => v.isCompetitionVenue).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] py-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <Snowflake className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">优质雪场</h1>
              <p className="text-sm text-gray-500">
                精选全国 {recommendedVenues.length} 个优质滑雪场馆，其中 {competitionCount} 个为U系列赛事举办地
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
                placeholder="搜索场馆名称、地区..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">全部类型</option>
              <option value="indoor">室内雪场</option>
              <option value="outdoor">户外雪场</option>
              <option value="resort">滑雪度假区</option>
            </select>

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

            <label className="flex items-center gap-1.5 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={onlyCompetition}
                onChange={(e) => setOnlyCompetition(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-gray-600">仅赛事举办地</span>
            </label>
          </div>
        </div>
      </div>

      {/* Venue List */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] py-6">
        <div className="mb-4">
          <span className="text-sm text-gray-500">
            共 <span className="font-semibold text-gray-900">{filteredVenues.length}</span> 个场馆
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

        {filteredVenues.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg">
            <Snowflake className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">没有找到符合条件的场馆</p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 xl:px-[120px] pb-12">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">想要入驻平台？</h2>
          <p className="text-sm text-gray-500 mb-4">
            如果您是滑雪场馆运营方，欢迎申请入驻我们的推荐平台
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

function VenueCard({ venue }: { venue: Venue }) {
  const TypeIcon = venueTypeIcons[venue.type]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row">
        {/* Left: Visual */}
        <div className={`sm:w-48 h-36 sm:h-auto relative flex-shrink-0 ${
          venue.isCompetitionVenue
            ? 'bg-gradient-to-br from-sky-500 to-indigo-600'
            : venue.type === 'indoor'
            ? 'bg-gradient-to-br from-purple-400 to-indigo-500'
            : 'bg-gradient-to-br from-cyan-400 to-blue-500'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Snowflake className="w-16 h-16 text-white/15" />
          </div>
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/90 ${
              venue.type === 'indoor' ? 'text-purple-700' :
              venue.type === 'outdoor' ? 'text-green-700' :
              'text-blue-700'
            }`}>
              <TypeIcon className="w-3 h-3 mr-1" />
              {venueTypeLabels[venue.type]}
            </span>
            {venue.isCompetitionVenue && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700">
                <Trophy className="w-3 h-3 mr-1" />
                赛事举办地
              </span>
            )}
          </div>
          {/* Rating */}
          <div className="absolute bottom-3 right-3 flex items-center bg-white/90 rounded px-1.5 py-0.5">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-medium ml-0.5">{venue.rating}</span>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1 p-4">
          <div className="mb-2">
            <h3 className="text-base font-bold text-gray-900">{venue.name}</h3>
            <div className="flex items-center text-xs text-gray-500 mt-0.5">
              <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
              {venue.location} · {venue.address}
            </div>
          </div>

          {/* Slopes */}
          <div className="flex items-center gap-3 mb-2 text-xs">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              <span className="text-gray-600">初级 {venue.slopes.beginner}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
              <span className="text-gray-600">中级 {venue.slopes.intermediate}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-gray-800 mr-1"></span>
              <span className="text-gray-600">高级 {venue.slopes.advanced}</span>
            </div>
            {venue.elevation && (
              <div className="flex items-center text-gray-500">
                <Mountain className="w-3 h-3 mr-1" />
                落差 {venue.elevation.summit - venue.elevation.base}m
              </div>
            )}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-2">
            {venue.features.slice(0, 4).map((feature, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 bg-gray-50 text-gray-500 text-[11px] rounded border border-gray-100"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Price + Season + Actions */}
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {venue.openSeason}
              </div>
              <div className="font-medium text-blue-600">{venue.price}</div>
            </div>
            <div className="flex items-center gap-2">
              {venue.website && (
                <span className="flex items-center text-xs text-gray-400 cursor-default">
                  <ExternalLink className="w-3 h-3 mr-0.5" />
                  官网
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
