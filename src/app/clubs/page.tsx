'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Star,
  MapPin,
  Users,
  Trophy,
  Calendar,
  ChevronRight,
  Search,
  Shield,
  GraduationCap,
  Building2,
  Heart,
  Award,
  ExternalLink
} from 'lucide-react'
import { recommendedClubs, type Club } from '@/data/recommendations'

const clubTypeLabels = {
  professional: '专业队',
  amateur: '业余俱乐部',
  youth: '青少年培训',
  school: '体校'
}

const clubTypeColors = {
  professional: 'bg-red-100 text-red-700',
  amateur: 'bg-blue-100 text-blue-700',
  youth: 'bg-green-100 text-green-700',
  school: 'bg-purple-100 text-purple-700'
}

export default function ClubsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  // 获取所有地点
  const locations = Array.from(new Set(recommendedClubs.map(c => c.location)))

  // 筛选俱乐部
  const filteredClubs = recommendedClubs.filter(club => {
    const matchSearch = club.name.includes(searchTerm) ||
                       club.location.includes(searchTerm) ||
                       club.disciplines.some(d => d.includes(searchTerm))
    const matchType = !selectedType || club.type === selectedType
    const matchLocation = !selectedLocation || club.location === selectedLocation
    return matchSearch && matchType && matchLocation
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              推荐俱乐部
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              精选全国优质滑雪俱乐部，为您的滑雪之旅找到最佳伙伴
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
                placeholder="搜索俱乐部名称、项目..."
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
              <option value="professional">专业队</option>
              <option value="amateur">业余俱乐部</option>
              <option value="youth">青少年培训</option>
              <option value="school">体校</option>
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

      {/* 俱乐部列表 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              共找到 <span className="font-bold text-ski-navy">{filteredClubs.length}</span> 个俱乐部
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredClubs.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>

          {filteredClubs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">没有找到符合条件的俱乐部</p>
            </div>
          )}
        </div>
      </section>

      {/* 底部提示 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ski-navy mb-4">想要入驻平台？</h2>
          <p className="text-gray-600 mb-6">
            如果您是滑雪俱乐部或培训机构，欢迎申请入驻我们的推荐平台
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

function ClubCard({ club }: { club: Club }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-6">
        {/* 头部信息 */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
            <Shield className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-ski-navy">{club.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${clubTypeColors[club.type]}`}>
                    {clubTypeLabels[club.type]}
                  </span>
                  <span className="text-sm text-gray-500">
                    成立于 {club.founded}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 项目标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {club.disciplines.map((disc, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-ski-blue/10 text-ski-blue text-xs rounded-full"
            >
              {disc}
            </span>
          ))}
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Users className="w-4 h-4 mx-auto text-gray-400 mb-1" />
            <div className="text-lg font-bold text-ski-navy">{club.members}</div>
            <div className="text-xs text-gray-500">会员</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <GraduationCap className="w-4 h-4 mx-auto text-gray-400 mb-1" />
            <div className="text-lg font-bold text-ski-navy">{club.coaches}</div>
            <div className="text-xs text-gray-500">教练</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Calendar className="w-4 h-4 mx-auto text-gray-400 mb-1" />
            <div className="text-lg font-bold text-ski-navy">{2025 - club.founded}</div>
            <div className="text-xs text-gray-500">年历史</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <MapPin className="w-4 h-4 mx-auto text-gray-400 mb-1" />
            <div className="text-sm font-bold text-ski-navy truncate">{club.location}</div>
            <div className="text-xs text-gray-500">地区</div>
          </div>
        </div>

        {/* 年龄组 */}
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">招生年龄组</div>
          <div className="flex flex-wrap gap-1">
            {club.ageGroups.map((age, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded">
                {age}
              </span>
            ))}
          </div>
        </div>

        {/* 成就 */}
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2 flex items-center">
            <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
            主要成就
          </div>
          <ul className="space-y-1">
            {club.achievements.slice(0, 2).map((achievement, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <Award className="w-3 h-3 mr-1 mt-1 text-yellow-500 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* 简介 */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {club.description}
        </p>

        {/* 费用和操作 */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <span className="text-xs text-gray-500">费用参考</span>
            <p className="text-sm text-ski-navy font-medium">{club.fee}</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-ski-blue text-ski-blue text-sm rounded-lg hover:bg-ski-blue/5 transition-colors">
              了解详情
            </button>
            <button className="px-4 py-2 bg-ski-blue text-white text-sm rounded-lg hover:bg-ski-blue/90 transition-colors">
              申请加入
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
