'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Award, ImageIcon, Square } from 'lucide-react'
import PointsCard from '@/components/PointsCard'
import MiniBadge from '@/components/MiniBadge'
import AthleteSearch from '@/components/AthleteSearch'
import { getSeasonBadgeData, getRaceBadgeData, type BadgeCardData } from '@/lib/badgeData'

type DataType = 'season' | 'race'
type CardStyle = 'full' | 'mini'

function BadgePageContent() {
  const searchParams = useSearchParams()
  const [dataType, setDataType] = useState<DataType>('season')
  const [cardStyle, setCardStyle] = useState<CardStyle>('full')
  const [selectedData, setSelectedData] = useState<BadgeCardData | null>(null)

  // Load from URL params on mount
  useEffect(() => {
    const name = searchParams.get('name')
    const type = searchParams.get('type') as DataType | null
    const sport = searchParams.get('sport')
    const discipline = searchParams.get('discipline')
    const ageGroup = searchParams.get('ageGroup')
    const gender = searchParams.get('gender')
    const competition = searchParams.get('competition')

    if (type) setDataType(type)

    if (name && discipline && ageGroup && gender) {
      let data: BadgeCardData | null = null
      if (type === 'race' && competition) {
        data = getRaceBadgeData(name, competition, discipline, ageGroup, gender)
      } else if (sport) {
        data = getSeasonBadgeData(name, sport, discipline, ageGroup, gender)
      }
      if (data) setSelectedData(data)
    }
  }, [searchParams])

  const handleSelect = (data: BadgeCardData) => {
    setSelectedData(data)
    // Update URL for shareable link
    const params = new URLSearchParams()
    params.set('name', data.athleteName)
    params.set('type', data.dataType)
    params.set('sport', data.sportType)
    params.set('discipline', data.discipline)
    params.set('ageGroup', data.ageGroup)
    params.set('gender', data.gender)
    if (data.dataType === 'race' && data.competitionName) {
      params.set('competition', data.competitionName)
    }
    window.history.replaceState(null, '', `/badge?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Page header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Award className="h-7 w-7 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">海报分享</h1>
          </div>
          <p className="text-gray-500 text-sm">
            搜索运动员，生成精美积分海报，保存分享到朋友圈
          </p>
        </div>

        {/* Data type toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => { setDataType('season'); setSelectedData(null) }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                dataType === 'season'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              赛季总积分
            </button>
            <button
              onClick={() => { setDataType('race'); setSelectedData(null) }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                dataType === 'race'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              单场比赛
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <AthleteSearch dataType={dataType} onSelect={handleSelect} />
        </div>

        {/* Card style toggle - only show when data is selected */}
        {selectedData && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setCardStyle('full')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  cardStyle === 'full'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ImageIcon className="h-4 w-4" />
                精美大海报
              </button>
              <button
                onClick={() => setCardStyle('mini')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  cardStyle === 'mini'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Square className="h-4 w-4" />
                简洁小海报
              </button>
            </div>
          </div>
        )}

        {/* Badge preview */}
        {selectedData ? (
          <div className="flex justify-center">
            {cardStyle === 'full' ? (
              <PointsCard
                athleteName={selectedData.athleteName}
                team={selectedData.team}
                rank={selectedData.rank}
                totalPoints={selectedData.points}
                competitionCount={selectedData.competitionCount || 1}
                bestRank={selectedData.bestRank || selectedData.rank}
                ageGroup={selectedData.ageGroup}
                gender={selectedData.gender}
                discipline={selectedData.discipline}
                season={selectedData.season}
                dataType={selectedData.dataType}
                competitionName={selectedData.competitionName}
                bestScore={selectedData.bestScore}
              />
            ) : (
              <MiniBadge data={selectedData} />
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm">搜索运动员姓名，选择记录生成海报</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function BadgePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-gray-400">加载中...</div>
      </div>
    }>
      <BadgePageContent />
    </Suspense>
  )
}
