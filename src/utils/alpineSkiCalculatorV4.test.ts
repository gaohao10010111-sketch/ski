import { describe, it, expect } from 'vitest'
import { AlpineSkiCalculatorV4 } from './alpineSkiCalculatorV4'

describe('AlpineSkiCalculatorV4', () => {
  describe('calculatePoints', () => {
    it('should calculate correct points for A-level race', () => {
      // 获胜者时间60秒，参赛者时间62秒，大回转项目，A级赛事
      const result = AlpineSkiCalculatorV4.calculatePoints(60, 62, 'GS', 'A', 0)

      // P = F × (Tx/To - 1) = 1010 × (62/60 - 1) = 1010 × 0.0333 = 33.67
      expect(result.basePoints).toBeCloseTo(33.67, 1)
      expect(result.raceCoefficient).toBe(1.0)
      expect(result.finalPoints).toBeCloseTo(33.67, 1)
    })

    it('should calculate correct points for B-level race with coefficient 0.6', () => {
      const result = AlpineSkiCalculatorV4.calculatePoints(60, 62, 'GS', 'B', 0)

      // 基础积分约33.67，B级系数0.6，最终约20.2
      expect(result.basePoints).toBeCloseTo(33.67, 1)
      expect(result.raceCoefficient).toBe(0.6)
      expect(result.finalPoints).toBeCloseTo(20.2, 1)
    })

    it('should calculate correct points for C-level race with coefficient 0.3', () => {
      const result = AlpineSkiCalculatorV4.calculatePoints(60, 62, 'GS', 'C', 0)

      expect(result.raceCoefficient).toBe(0.3)
      expect(result.finalPoints).toBeCloseTo(10.1, 1)
    })

    it('should apply penalty correctly', () => {
      const result = AlpineSkiCalculatorV4.calculatePoints(60, 62, 'GS', 'A', 5)

      // 基础积分约33.67 + 判罚分5 = 38.67
      expect(result.adjustedPoints).toBeCloseTo(38.67, 1)
      expect(result.penalty).toBe(5)
    })

    it('should return 0 points for winner (same time)', () => {
      const result = AlpineSkiCalculatorV4.calculatePoints(60, 60, 'GS', 'A', 0)

      expect(result.basePoints).toBe(0)
      expect(result.finalPoints).toBe(0)
    })

    it('should use correct discipline factor for each discipline', () => {
      const disciplines = ['DH', 'SL', 'GS', 'SG', 'AC'] as const
      const factors = { DH: 1250, SL: 730, GS: 1010, SG: 1190, AC: 1360 }

      disciplines.forEach(discipline => {
        const result = AlpineSkiCalculatorV4.calculatePoints(100, 101, discipline, 'A', 0)
        const expectedBase = factors[discipline] * 0.01 // (101/100 - 1) = 0.01
        expect(result.basePoints).toBeCloseTo(expectedBase, 1)
      })
    })
  })

  describe('calculatePenalty', () => {
    it('should calculate penalty correctly', () => {
      const top10ChinaPoints = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
      const allCompetitorsChinaPoints = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
      const top5BaseRacePoints = [2, 3, 4, 5, 6]

      const penalty = AlpineSkiCalculatorV4.calculatePenalty(
        top10ChinaPoints,
        allCompetitorsChinaPoints,
        top5BaseRacePoints
      )

      // Sum A = 10+15+20+25+30 = 100
      // Sum B = 5+10+15+20+25 = 75
      // Sum C = 2+3+4+5+6 = 20
      // Penalty = (100 + 75 - 20) / 10 = 15.5
      expect(penalty).toBe(15.5)
    })

    it('should handle empty arrays', () => {
      const penalty = AlpineSkiCalculatorV4.calculatePenalty([], [], [])
      expect(penalty).toBe(0)
    })
  })

  describe('calculateBLPoints', () => {
    it('should return N marker for new athlete without results', () => {
      const result = AlpineSkiCalculatorV4.calculateBLPoints([], true)

      expect(result.marker).toBe('N')
      expect(result.blPoints).toBe(100) // 70%分位数假设值
    })

    it('should apply 1.30 multiplier for new athlete first result', () => {
      const results = [{ points: 50, status: 'OK' }] as any[]
      const result = AlpineSkiCalculatorV4.calculateBLPoints(results, true)

      expect(result.marker).toBe('N')
      expect(result.blPoints).toBe(65) // 50 × 1.30
    })

    it('should apply 1.20 multiplier for single result', () => {
      const results = [{ points: 50, status: 'OK' }] as any[]
      const result = AlpineSkiCalculatorV4.calculateBLPoints(results, false)

      expect(result.marker).toBe('+')
      expect(result.blPoints).toBe(60) // 50 × 1.20
    })

    it('should calculate average of best two results', () => {
      const results = [
        { points: 30, status: 'OK' },
        { points: 40, status: 'OK' },
        { points: 50, status: 'OK' }
      ] as any[]
      const result = AlpineSkiCalculatorV4.calculateBLPoints(results, false)

      expect(result.marker).toBe('')
      expect(result.blPoints).toBe(35) // (30 + 40) / 2
    })

    it('should exclude DNS/DNF/DQ results', () => {
      const results = [
        { points: 30, status: 'OK' },
        { points: 20, status: 'DNF' },
        { points: 40, status: 'OK' }
      ] as any[]
      const result = AlpineSkiCalculatorV4.calculateBLPoints(results, false)

      expect(result.blPoints).toBe(35) // (30 + 40) / 2
    })
  })

  describe('calculateNLPoints', () => {
    it('should return BL points when no current season results', () => {
      const nlPoints = AlpineSkiCalculatorV4.calculateNLPoints([], 50)
      expect(nlPoints).toBe(50)
    })

    it('should calculate average of best 2 results', () => {
      const results = [
        { points: 20, status: 'OK' },
        { points: 30, status: 'OK' },
        { points: 40, status: 'OK' }
      ] as any[]
      const nlPoints = AlpineSkiCalculatorV4.calculateNLPoints(results, 50)

      // 最好两次: 20, 30，平均25，优于BL的50
      expect(nlPoints).toBe(25)
    })

    it('should return BL if NL is worse', () => {
      const results = [
        { points: 60, status: 'OK' },
        { points: 70, status: 'OK' }
      ] as any[]
      const nlPoints = AlpineSkiCalculatorV4.calculateNLPoints(results, 50)

      // NL平均65，BL是50，返回较小值50
      expect(nlPoints).toBe(50)
    })
  })

  describe('handleSpecialStatus', () => {
    it('should return 0 points for DNS', () => {
      const result = AlpineSkiCalculatorV4.handleSpecialStatus('DNS', 'A')
      expect(result.finalPoints).toBe(0)
      expect(result.raceCoefficient).toBe(1.0)
    })

    it('should return 0 points for DNF', () => {
      const result = AlpineSkiCalculatorV4.handleSpecialStatus('DNF', 'B')
      expect(result.finalPoints).toBe(0)
      expect(result.raceCoefficient).toBe(0.6)
    })

    it('should return 0 points for DQ', () => {
      const result = AlpineSkiCalculatorV4.handleSpecialStatus('DQ', 'C')
      expect(result.finalPoints).toBe(0)
      expect(result.raceCoefficient).toBe(0.3)
    })
  })

  describe('calculatePointsContinuation', () => {
    it('should apply 50% carry over by default', () => {
      const continuation = AlpineSkiCalculatorV4.calculatePointsContinuation(100)
      expect(continuation).toBe(50)
    })

    it('should apply custom carry over rate', () => {
      const continuation = AlpineSkiCalculatorV4.calculatePointsContinuation(100, 0.7)
      expect(continuation).toBe(70)
    })
  })

  describe('getMaxPoints', () => {
    it('should return correct max points for each discipline', () => {
      expect(AlpineSkiCalculatorV4.getMaxPoints('DH')).toBe(330)
      expect(AlpineSkiCalculatorV4.getMaxPoints('SG')).toBe(270)
      expect(AlpineSkiCalculatorV4.getMaxPoints('GS')).toBe(220)
      expect(AlpineSkiCalculatorV4.getMaxPoints('SL')).toBe(165)
      expect(AlpineSkiCalculatorV4.getMaxPoints('AC')).toBe(270)
    })
  })

  describe('getRaceInfo', () => {
    it('should return correct info for A-level race', () => {
      const info = AlpineSkiCalculatorV4.getRaceInfo('A')
      expect(info.name).toBe('A级赛事')
      expect(info.coefficient).toBe(1.0)
      expect(info.examples).toContain('全国锦标赛')
    })

    it('should return correct info for B-level race', () => {
      const info = AlpineSkiCalculatorV4.getRaceInfo('B')
      expect(info.coefficient).toBe(0.6)
    })

    it('should return correct info for C-level race', () => {
      const info = AlpineSkiCalculatorV4.getRaceInfo('C')
      expect(info.coefficient).toBe(0.3)
    })
  })

  describe('checkInjuryProtection', () => {
    it('should approve valid injury protection application', () => {
      const injuryDate = new Date('2024-01-01')
      const applicationDate = new Date('2024-01-15')
      const certificate = {
        hospitalLevel: '县级以上三甲医院',
        injuryType: '韧带撕裂',
        severity: '重度',
        recoveryTime: 6
      }

      const result = AlpineSkiCalculatorV4.checkInjuryProtection(
        injuryDate,
        applicationDate,
        certificate
      )

      expect(result.eligible).toBe(true)
      expect(result.protectionRate).toBe(1.10)
      expect(result.errors).toHaveLength(0)
    })

    it('should reject application after 30 days', () => {
      const injuryDate = new Date('2024-01-01')
      const applicationDate = new Date('2024-02-15')
      const certificate = {
        hospitalLevel: '县级以上医院',
        injuryType: '骨折',
        severity: '中度',
        recoveryTime: 4
      }

      const result = AlpineSkiCalculatorV4.checkInjuryProtection(
        injuryDate,
        applicationDate,
        certificate
      )

      expect(result.eligible).toBe(false)
      expect(result.errors).toContain('超过申请时限（伤病发生后30天内）')
    })

    it('should reject if recovery time is less than 3 months', () => {
      const injuryDate = new Date('2024-01-01')
      const applicationDate = new Date('2024-01-10')
      const certificate = {
        hospitalLevel: '县级以上医院',
        injuryType: '扭伤',
        severity: '轻度',
        recoveryTime: 2
      }

      const result = AlpineSkiCalculatorV4.checkInjuryProtection(
        injuryDate,
        applicationDate,
        certificate
      )

      expect(result.eligible).toBe(false)
      expect(result.errors).toContain('伤病影响时间不足3个月，不符合保护条件')
    })
  })
})
