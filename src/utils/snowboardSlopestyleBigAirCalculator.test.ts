import { describe, it, expect } from 'vitest'
import { SnowboardSlopestyleBigAirCalculator } from './snowboardSlopestyleBigAirCalculator'
import { PointsTier } from '../types/fourSport'

describe('SnowboardSlopestyleBigAirCalculator', () => {
  describe('calculatePoints', () => {
    it('should return correct points for rank 1 in TIER_360', () => {
      const result = SnowboardSlopestyleBigAirCalculator.calculatePoints(1, PointsTier.TIER_360)

      expect(result.basePoints).toBe(360)
      expect(result.finalPoints).toBe(360)
      expect(result.tier).toBe(PointsTier.TIER_360)
    })

    it('should return correct points for rank 2 in TIER_360', () => {
      const result = SnowboardSlopestyleBigAirCalculator.calculatePoints(2, PointsTier.TIER_360)

      expect(result.basePoints).toBe(329) // 第2名329分
      expect(result.finalPoints).toBe(329)
    })

    it('should return correct points for rank 3 in TIER_360', () => {
      const result = SnowboardSlopestyleBigAirCalculator.calculatePoints(3, PointsTier.TIER_360)

      expect(result.basePoints).toBe(303) // 第3名303分
    })

    it('should return correct points for rank 1 in TIER_240', () => {
      const result = SnowboardSlopestyleBigAirCalculator.calculatePoints(1, PointsTier.TIER_240)

      expect(result.basePoints).toBe(240)
      expect(result.tier).toBe(PointsTier.TIER_240)
    })

    it('should return correct points for rank 1 in TIER_120', () => {
      const result = SnowboardSlopestyleBigAirCalculator.calculatePoints(1, PointsTier.TIER_120)

      expect(result.basePoints).toBe(120)
      expect(result.tier).toBe(PointsTier.TIER_120)
    })

    it('should return 1 point for rank 50 in TIER_360', () => {
      const result = SnowboardSlopestyleBigAirCalculator.calculatePoints(50, PointsTier.TIER_360)

      expect(result.finalPoints).toBe(1) // 第50名1分
    })

    it('should return 0 points for ranks beyond 50', () => {
      // 50名以后积分为0
      const result = SnowboardSlopestyleBigAirCalculator.calculatePoints(51, PointsTier.TIER_360)

      expect(result.finalPoints).toBe(0)
    })
  })

  describe('calculateBestScore', () => {
    it('should return best score from qualification rounds', () => {
      const scores = [
        { round: 1, score: 75, rank: 3 },
        { round: 2, score: 82, rank: 1 }
      ]

      const result = SnowboardSlopestyleBigAirCalculator.calculateBestScore(scores, true)

      expect(result.bestScore).toBe(82)
      expect(result.bestRound).toBe(2)
      expect(result.finalRank).toBe(1)
    })

    it('should return best score from final rounds', () => {
      const scores = [
        { round: 3, score: 88, rank: 2 },
        { round: 4, score: 91, rank: 1 },
        { round: 5, score: 85, rank: 3 }
      ]

      const result = SnowboardSlopestyleBigAirCalculator.calculateBestScore(scores, false)

      expect(result.bestScore).toBe(91)
      expect(result.bestRound).toBe(4)
    })

    it('should handle single round correctly', () => {
      const scores = [{ round: 1, score: 78, rank: 2 }]

      const result = SnowboardSlopestyleBigAirCalculator.calculateBestScore(scores, false)

      expect(result.bestScore).toBe(78)
      expect(result.finalRank).toBe(2)
    })
  })

  describe('validateCompetitionFormat', () => {
    it('should pass validation for valid competition', () => {
      const competition = { tier: PointsTier.TIER_360 } as any
      const scores = [
        { round: 1, score: 75, rank: 2 },
        { round: 2, score: 80, rank: 1 }
      ]

      const result = SnowboardSlopestyleBigAirCalculator.validateCompetitionFormat(competition, scores)

      expect(result.isValid).toBe(true)
      expect(result.errors).toHaveLength(0)
    })

    it('should fail if tier is missing', () => {
      const competition = {} as any
      const scores = [
        { round: 1, score: 75, rank: 1 },
        { round: 2, score: 80, rank: 2 }
      ]

      const result = SnowboardSlopestyleBigAirCalculator.validateCompetitionFormat(competition, scores)

      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('比赛缺少积分档次设置')
    })

    it('should fail if less than 2 rounds', () => {
      const competition = { tier: PointsTier.TIER_360 } as any
      const scores = [{ round: 1, score: 75, rank: 1 }]

      const result = SnowboardSlopestyleBigAirCalculator.validateCompetitionFormat(competition, scores)

      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('单板坡障/大跳台比赛至少需要2轮成绩')
    })

    it('should fail for invalid scores', () => {
      const competition = { tier: PointsTier.TIER_360 } as any
      const scores = [
        { round: 1, score: 105, rank: 1 }, // 超过100
        { round: 2, score: 80, rank: 2 }
      ]

      const result = SnowboardSlopestyleBigAirCalculator.validateCompetitionFormat(competition, scores)

      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('存在无效评分（评分应在0-100分之间）')
    })

    it('should fail for duplicate ranks', () => {
      const competition = { tier: PointsTier.TIER_360 } as any
      const scores = [
        { round: 1, score: 75, rank: 1 },
        { round: 2, score: 80, rank: 1 } // 重复排名
      ]

      const result = SnowboardSlopestyleBigAirCalculator.validateCompetitionFormat(competition, scores)

      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('存在重复排名')
    })
  })

  describe('handleSpecialStatus', () => {
    it('should return 0 points for DNS', () => {
      const result = SnowboardSlopestyleBigAirCalculator.handleSpecialStatus('DNS', PointsTier.TIER_360)

      expect(result.finalPoints).toBe(0)
      expect(result.tier).toBe(PointsTier.TIER_360)
    })

    it('should return 0 points for DNF', () => {
      const result = SnowboardSlopestyleBigAirCalculator.handleSpecialStatus('DNF', PointsTier.TIER_240)

      expect(result.finalPoints).toBe(0)
    })

    it('should return 0 points for DQ', () => {
      const result = SnowboardSlopestyleBigAirCalculator.handleSpecialStatus('DQ', PointsTier.TIER_120)

      expect(result.finalPoints).toBe(0)
    })
  })

  describe('calculateSeasonBest', () => {
    it('should return 0 for empty results', () => {
      const seasonBest = SnowboardSlopestyleBigAirCalculator.calculateSeasonBest([])
      expect(seasonBest).toBe(0)
    })

    it('should apply 1.2x multiplier for single result', () => {
      const results = [{ points: 100, status: 'OK' }] as any[]
      const seasonBest = SnowboardSlopestyleBigAirCalculator.calculateSeasonBest(results)

      expect(seasonBest).toBe(120) // 100 × 1.2
    })

    it('should calculate average of best two results', () => {
      const results = [
        { points: 100, status: 'OK' },
        { points: 80, status: 'OK' },
        { points: 60, status: 'OK' }
      ] as any[]

      const seasonBest = SnowboardSlopestyleBigAirCalculator.calculateSeasonBest(results)

      expect(seasonBest).toBe(90) // (100 + 80) / 2
    })

    it('should exclude DNS/DNF/DQ from calculation', () => {
      const results = [
        { points: 100, status: 'OK' },
        { points: 200, status: 'DNF' },
        { points: 80, status: 'OK' }
      ] as any[]

      const seasonBest = SnowboardSlopestyleBigAirCalculator.calculateSeasonBest(results)

      expect(seasonBest).toBe(90) // (100 + 80) / 2, 忽略DNF
    })
  })

  describe('calculatePointsContinuation', () => {
    it('should apply 50% carry over by default', () => {
      const continuation = SnowboardSlopestyleBigAirCalculator.calculatePointsContinuation(200)
      expect(continuation).toBe(100)
    })

    it('should apply custom carry over rate', () => {
      const continuation = SnowboardSlopestyleBigAirCalculator.calculatePointsContinuation(200, 0.6)
      expect(continuation).toBe(120)
    })
  })

  describe('getTierInfo', () => {
    it('should return correct info for TIER_360', () => {
      const info = SnowboardSlopestyleBigAirCalculator.getTierInfo(PointsTier.TIER_360)

      expect(info.name).toBe('360分档')
      expect(info.description).toBe('一类赛事')
      expect(info.maxPoints).toBe(360)
    })

    it('should return correct info for TIER_240', () => {
      const info = SnowboardSlopestyleBigAirCalculator.getTierInfo(PointsTier.TIER_240)

      expect(info.name).toBe('240分档')
      expect(info.description).toBe('二类赛事')
      expect(info.maxPoints).toBe(240)
    })

    it('should return correct info for TIER_120', () => {
      const info = SnowboardSlopestyleBigAirCalculator.getTierInfo(PointsTier.TIER_120)

      expect(info.name).toBe('120分档')
      expect(info.description).toBe('三类赛事')
      expect(info.maxPoints).toBe(120)
    })
  })
})
