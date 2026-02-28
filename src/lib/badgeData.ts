/**
 * Badge data adapter layer
 * Unified interface for searching athletes and fetching badge data
 * from both season totals and individual race results
 */

import { totalRankingsData, type TotalRankingItem, type PointsBreakdownItem } from '@/data/totalRankings'
import { latestResults, type AthleteResult } from '@/data/latestResults'

export type { PointsBreakdownItem }

export interface BadgeCardData {
  athleteName: string
  team: string
  rank: number
  points: number
  ageGroup: string
  gender: string
  discipline: string
  season: string
  dataType: 'season' | 'race'
  sportType: string
  sportName: string
  // season total fields
  competitionCount?: number
  bestRank?: number
  avgPoints?: number
  pointsBreakdown?: PointsBreakdownItem[]
  // race fields
  competitionName?: string
  location?: string
  date?: string
  bib?: number
  bestScore?: number
}

export interface SearchResultItem {
  athleteName: string
  team: string
  rank: number
  points: number
  ageGroup: string
  gender: string
  discipline: string
  sportType: string
  sportName: string
  dataType: 'season' | 'race'
  // extra identifiers for fetching full data
  competitionName?: string
  location?: string
  date?: string
}

// Sport type display name mapping
const SPORT_TYPE_NAMES: Record<string, string> = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle': '单板坡面障碍技巧',
  'snowboard-bigair': '单板大跳台',
  'snowboard-parallel': '单板平行项目',
  'freestyle-slopestyle': '自由式坡面障碍技巧',
  'freestyle-bigair': '自由式大跳台',
}

function getSportName(sportType: string, fallback?: string): string {
  return SPORT_TYPE_NAMES[sportType] || fallback || sportType
}

/**
 * Search athletes across both data sources
 */
export function searchAthletes(
  query: string,
  dataType: 'season' | 'race' | 'all' = 'all'
): SearchResultItem[] {
  if (!query || query.trim().length === 0) return []

  const q = query.trim().toLowerCase()
  const results: SearchResultItem[] = []
  const seen = new Set<string>()

  // Search season totals
  if (dataType === 'season' || dataType === 'all') {
    for (const sport of totalRankingsData.sportRankings) {
      for (const sub of sport.subEventRankings) {
        for (const r of sub.rankings) {
          if (r.athleteName.toLowerCase().includes(q)) {
            const key = `season-${r.athleteName}-${r.team}-${sub.discipline}-${sub.ageGroup}-${sub.gender}`
            if (!seen.has(key)) {
              seen.add(key)
              results.push({
                athleteName: r.athleteName,
                team: r.team,
                rank: r.rank,
                points: r.totalPoints,
                ageGroup: sub.ageGroup,
                gender: sub.gender,
                discipline: sub.discipline,
                sportType: sport.sportType,
                sportName: sport.sportName,
                dataType: 'season',
              })
            }
          }
          if (results.length >= 20) break
        }
        if (results.length >= 20) break
      }
      if (results.length >= 20) break
    }
  }

  // Search race results
  if (dataType === 'race' || dataType === 'all') {
    for (const comp of latestResults.competitions) {
      for (const event of comp.events) {
        for (const athlete of event.athletes) {
          if (athlete.name.toLowerCase().includes(q)) {
            const key = `race-${athlete.name}-${comp.competition}-${event.discipline}-${event.ageGroup}-${event.gender}`
            if (!seen.has(key)) {
              seen.add(key)
              results.push({
                athleteName: athlete.name,
                team: athlete.team,
                rank: athlete.rank,
                points: athlete.points || 0,
                ageGroup: event.ageGroup,
                gender: event.gender,
                discipline: event.discipline,
                sportType: comp.sportType,
                sportName: getSportName(comp.sportType, comp.sport),
                dataType: 'race',
                competitionName: comp.competition,
                location: comp.location,
                date: comp.date,
              })
            }
          }
          if (results.length >= 40) break
        }
        if (results.length >= 40) break
      }
      if (results.length >= 40) break
    }
  }

  // Sort: higher points first
  return results.sort((a, b) => b.points - a.points).slice(0, 20)
}

/**
 * Get full badge data for a season total record
 */
export function getSeasonBadgeData(
  athleteName: string,
  sportType: string,
  discipline: string,
  ageGroup: string,
  gender: string
): BadgeCardData | null {
  for (const sport of totalRankingsData.sportRankings) {
    if (sport.sportType !== sportType) continue
    for (const sub of sport.subEventRankings) {
      if (sub.discipline !== discipline || sub.ageGroup !== ageGroup || sub.gender !== gender) continue
      const r = sub.rankings.find(r => r.athleteName === athleteName)
      if (r) {
        return {
          athleteName: r.athleteName,
          team: r.team,
          rank: r.rank,
          points: r.totalPoints,
          ageGroup: sub.ageGroup,
          gender: sub.gender,
          discipline: sub.discipline,
          season: '2025-2026',
          dataType: 'season',
          sportType: sport.sportType,
          sportName: sport.sportName,
          competitionCount: r.competitionCount,
          bestRank: r.bestRank,
          avgPoints: r.avgPoints,
          pointsBreakdown: r.pointsBreakdown,
        }
      }
    }
  }
  return null
}

/**
 * Get full badge data for a single race result
 */
export function getRaceBadgeData(
  athleteName: string,
  competitionName: string,
  discipline: string,
  ageGroup: string,
  gender: string
): BadgeCardData | null {
  for (const comp of latestResults.competitions) {
    if (comp.competition !== competitionName) continue
    for (const event of comp.events) {
      if (event.discipline !== discipline || event.ageGroup !== ageGroup || event.gender !== gender) continue
      const athlete = event.athletes.find((a: AthleteResult) => a.name === athleteName)
      if (athlete) {
        return {
          athleteName: athlete.name,
          team: athlete.team,
          rank: athlete.rank,
          points: athlete.points || 0,
          ageGroup: event.ageGroup,
          gender: event.gender,
          discipline: event.discipline,
          season: '2025-2026',
          dataType: 'race',
          sportType: comp.sportType,
          sportName: getSportName(comp.sportType, comp.sport),
          competitionName: comp.competition,
          location: comp.location,
          date: comp.date,
          bib: athlete.bib,
          bestScore: athlete.bestScore,
        }
      }
    }
  }
  return null
}

/**
 * Get badge data from a search result item (convenience function)
 */
export function getBadgeDataFromSearch(item: SearchResultItem): BadgeCardData | null {
  if (item.dataType === 'season') {
    return getSeasonBadgeData(item.athleteName, item.sportType, item.discipline, item.ageGroup, item.gender)
  } else {
    return getRaceBadgeData(item.athleteName, item.competitionName!, item.discipline, item.ageGroup, item.gender)
  }
}
