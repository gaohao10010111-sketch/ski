import {
  Result,
  PointsCalculationResult,
  Competition
} from '../types/fourSport';
import { ALPINE_COEFFICIENTS, DISCIPLINE_FACTORS } from '../data/fourSportData';

/**
 * 高山滑雪v4.0积分计算器
 * 基于《中国高山滑雪赛事积分规则v4.0》
 * 支持A级(1.0)、B级(0.6)、C级(0.3)赛事系数体系
 */
export class AlpineSkiCalculatorV4 {

  /**
   * 计算高山滑雪积分 (v4.0核心公式)
   * @param winnerTime 获胜者时间
   * @param competitorTime 参赛者时间
   * @param discipline 项目类型 (DH/SL/GS/SG/AC)
   * @param raceLevel 赛事级别 (A/B/C)
   * @param penalty 判罚分
   * @returns 积分计算结果
   */
  static calculatePoints(
    winnerTime: number,
    competitorTime: number,
    discipline: keyof typeof DISCIPLINE_FACTORS,
    raceLevel: 'A' | 'B' | 'C',
    penalty: number = 0
  ): PointsCalculationResult {

    // 1. 基础比赛积分计算：P = F × (Tx/To - 1)
    const F = DISCIPLINE_FACTORS[discipline];
    const basePoints = F * (competitorTime / winnerTime - 1);

    // 2. 加入判罚分
    const adjustedPoints = basePoints + penalty;

    // 3. 应用赛事系数
    const raceCoefficient = ALPINE_COEFFICIENTS[raceLevel];
    const finalPoints = adjustedPoints * raceCoefficient;

    return {
      basePoints: Math.round(basePoints * 100) / 100,
      adjustedPoints: Math.round(adjustedPoints * 100) / 100,
      finalPoints: Math.round(finalPoints * 100) / 100,
      raceCoefficient,
      penalty
    };
  }

  /**
   * 计算判罚分 (v4.0标准)
   * @param top10ChinaPoints 前10名中最好5名选手的中国积分
   * @param allCompetitorsChinaPoints 所有参赛选手中最好5名的中国积分
   * @param top5BaseRacePoints 对应Sum B的5名选手在本场比赛的基础比赛积分
   * @returns 判罚分
   */
  static calculatePenalty(
    top10ChinaPoints: number[],
    allCompetitorsChinaPoints: number[],
    top5BaseRacePoints: number[]
  ): number {
    // Sum A：比赛前10名中最好5名选手的积分总和
    const sumA = top10ChinaPoints.slice(0, 5).reduce((sum, points) => sum + points, 0);

    // Sum B：所有参赛选手中最好5名的积分总和
    const sumB = allCompetitorsChinaPoints.slice(0, 5).reduce((sum, points) => sum + points, 0);

    // Sum C：对应Sum B的5名选手在本场比赛的基础比赛积分总和
    const sumC = top5BaseRacePoints.reduce((sum, points) => sum + points, 0);

    // 判罚分 = (Sum A + Sum B - Sum C) ÷ 10
    const penalty = (sumA + sumB - sumC) / 10;

    return Math.round(penalty * 100) / 100;
  }

  /**
   * 验证高山滑雪比赛数据
   * @param competition 比赛信息
   * @param results 成绩数据
   * @returns 验证结果
   */
  static validateAlpineRace(
    competition: Competition,
    results: Result[]
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // 检查赛事级别
    if (!competition.raceLevel || !['A', 'B', 'C'].includes(competition.raceLevel)) {
      errors.push('缺少有效的赛事级别设置 (A/B/C)');
    }

    // 检查参赛人数
    if (results.length < 5) {
      errors.push('参赛人数不足5人，无法计算有效判罚分');
    }

    // 检查时间有效性
    const invalidTimes = results.filter(r => r.time && r.time <= 0);
    if (invalidTimes.length > 0) {
      errors.push('存在无效的比赛时间');
    }

    // 检查获胜者时间
    const validResults = results.filter(r => r.time && r.time > 0);
    if (validResults.length > 0) {
      const winnerTime = Math.min(...validResults.map(r => r.time!));
      if (winnerTime <= 0) {
        errors.push('获胜者时间无效');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * 处理高山滑雪特殊情况 (v4.0新增)
   * @param status 成绩状态
   * @param raceLevel 赛事级别
   * @returns 特殊情况积分
   */
  static handleSpecialStatus(
    status: 'DNS' | 'DNF' | 'DQ',
    raceLevel: 'A' | 'B' | 'C'
  ): PointsCalculationResult {
    return {
      basePoints: 0,
      adjustedPoints: 0,
      finalPoints: 0,
      raceCoefficient: ALPINE_COEFFICIENTS[raceLevel]
    };
  }

  /**
   * 计算BL基础积分表积分 (v4.0标准)
   * @param results 上赛季成绩
   * @param isNewAthlete 是否为新注册运动员
   * @returns BL积分和标记
   */
  static calculateBLPoints(
    results: Result[],
    isNewAthlete: boolean = false
  ): { blPoints: number; marker: string } {
    const validResults = results.filter(r =>
      r.status !== 'DNS' && r.status !== 'DNF' && r.status !== 'DQ'
    );

    if (isNewAthlete) {
      if (validResults.length === 0) {
        // 新注册运动员无成绩，给予70%分位数积分
        return { blPoints: 100, marker: 'N' }; // 假设70%分位数为100分
      } else {
        // 首次比赛成绩 × 1.30
        const firstResult = validResults[0];
        return { blPoints: firstResult.points * 1.30, marker: 'N' };
      }
    }

    if (validResults.length === 0) {
      // 无成绩，在前BL基础上增加50%
      return { blPoints: 0, marker: '>' }; // 需要前一年BL积分
    } else if (validResults.length === 1) {
      // 单一成绩 × 1.20
      return { blPoints: validResults[0].points * 1.20, marker: '+' };
    } else {
      // 2次及以上成绩：取最好和次好成绩的平均值
      const sortedResults = validResults.sort((a, b) => a.points - b.points);
      const bestTwo = sortedResults.slice(0, 2);
      const blPoints = bestTwo.reduce((sum, result) => sum + result.points, 0) / 2;
      return { blPoints, marker: '' };
    }
  }

  /**
   * 计算NL常规积分表积分 (v4.0标准)
   * @param currentSeasonResults 当前赛季成绩
   * @param blPoints BL积分
   * @returns NL积分
   */
  static calculateNLPoints(
    currentSeasonResults: Result[],
    blPoints: number
  ): number {
    const validResults = currentSeasonResults.filter(r =>
      r.status !== 'DNS' && r.status !== 'DNF' && r.status !== 'DQ'
    );

    if (validResults.length === 0) {
      // 本赛季无参赛，保持BL积分
      return blPoints;
    }

    // 取当前赛季最好2次成绩的平均值
    const sortedResults = validResults.sort((a, b) => a.points - b.points);
    const bestResults = sortedResults.slice(0, Math.min(2, sortedResults.length));
    const nlPoints = bestResults.reduce((sum, result) => sum + result.points, 0) / bestResults.length;

    // 若当前NL积分优于BL积分，则更新为NL积分
    return Math.min(nlPoints, blPoints);
  }

  /**
   * 检查伤病保护资格 (v4.0完善)
   * @param injuryDate 受伤日期
   * @param applicationDate 申请日期
   * @param medicalCertificate 医疗证明
   * @returns 保护资格
   */
  static checkInjuryProtection(
    injuryDate: Date,
    applicationDate: Date,
    medicalCertificate: {
      hospitalLevel: string;
      injuryType: string;
      severity: string;
      recoveryTime: number; // 月
    }
  ): { eligible: boolean; protectionRate: number; errors: string[] } {
    const errors: string[] = [];

    // 检查申请时限（30天内）
    const daysDiff = (applicationDate.getTime() - injuryDate.getTime()) / (1000 * 60 * 60 * 24);
    if (daysDiff > 30) {
      errors.push('超过申请时限（伤病发生后30天内）');
    }

    // 检查医院级别
    if (!medicalCertificate.hospitalLevel.includes('县级以上')) {
      errors.push('医疗证明必须来自县级以上医院');
    }

    // 检查伤病严重程度
    if (medicalCertificate.recoveryTime < 3) {
      errors.push('伤病影响时间不足3个月，不符合保护条件');
    }

    const eligible = errors.length === 0;
    const protectionRate = eligible ? 1.10 : 1.0; // 10%积分保护

    return { eligible, protectionRate, errors };
  }

  /**
   * 计算积分延续 (v4.0通用机制)
   * @param previousSeasonPoints 上赛季积分
   * @param carryOverRate 延续比例（默认50%）
   * @returns 延续积分
   */
  static calculatePointsContinuation(
    previousSeasonPoints: number,
    carryOverRate: number = 0.5
  ): number {
    return previousSeasonPoints * carryOverRate;
  }

  /**
   * 生成高山滑雪积分计算报告 (v4.0完整版)
   * @param result 比赛结果
   * @param calculation 积分计算结果
   * @param additionalInfo 附加信息
   * @returns 详细报告
   */
  static generateCalculationReport(
    result: Result,
    calculation: PointsCalculationResult,
    additionalInfo?: {
      winnerTime?: number;
      discipline?: string;
      penaltyDetails?: {
        sumA: number;
        sumB: number;
        sumC: number;
      };
    }
  ): string {
    const lines: string[] = [];

    lines.push('=== 高山滑雪v4.0积分计算报告 ===');
    lines.push('');
    lines.push(`项目: ${additionalInfo?.discipline || '未知项目'}`);
    lines.push(`最终排名: 第${result.finalRank}名`);

    if (result.time && additionalInfo?.winnerTime) {
      lines.push(`比赛时间: ${result.time}秒`);
      lines.push(`获胜者时间: ${additionalInfo.winnerTime}秒`);
      lines.push(`时间差: ${(result.time - additionalInfo.winnerTime).toFixed(2)}秒`);
    }

    lines.push('');
    lines.push('=== 积分计算详情 ===');
    lines.push(`基础比赛积分: ${calculation.basePoints}分`);

    if (calculation.penalty !== undefined && calculation.penalty !== 0) {
      lines.push(`判罚分: ${calculation.penalty > 0 ? '+' : ''}${calculation.penalty}分`);

      if (additionalInfo?.penaltyDetails) {
        lines.push('  判罚分计算详情:');
        lines.push(`    Sum A (前10名中最好5名): ${additionalInfo.penaltyDetails.sumA}分`);
        lines.push(`    Sum B (所有参赛者中最好5名): ${additionalInfo.penaltyDetails.sumB}分`);
        lines.push(`    Sum C (对应Base Race Points): ${additionalInfo.penaltyDetails.sumC}分`);
        lines.push(`    判罚分 = (${additionalInfo.penaltyDetails.sumA} + ${additionalInfo.penaltyDetails.sumB} - ${additionalInfo.penaltyDetails.sumC}) ÷ 10`);
      }

      lines.push(`调整后积分: ${calculation.adjustedPoints}分`);
    }

    lines.push(`赛事系数: ${calculation.raceCoefficient}`);
    lines.push(`最终积分: ${calculation.finalPoints}分`);
    lines.push('');

    lines.push('=== 计算公式 ===');
    lines.push('1. 基础积分: P = F × (Tx/To - 1)');
    lines.push('2. 调整积分: P + 判罚分');
    lines.push('3. 最终积分: (基础积分 + 判罚分) × 赛事系数');
    lines.push('');
    lines.push('积分规则版本: v4.0');

    return lines.join('\n');
  }

  /**
   * 获取项目最大积分值 (v4.0标准)
   * @param discipline 项目类型
   * @returns 最大积分值
   */
  static getMaxPoints(discipline: keyof typeof DISCIPLINE_FACTORS): number {
    const maxPoints = {
      DH: 330,    // 滑降
      SG: 270,    // 超级大回转
      GS: 220,    // 大回转
      SL: 165,    // 回转
      AC: 270     // 全能
    };

    return maxPoints[discipline];
  }

  /**
   * 获取赛事信息
   * @param raceLevel 赛事级别
   * @returns 赛事详细信息
   */
  static getRaceInfo(raceLevel: 'A' | 'B' | 'C'): {
    name: string;
    coefficient: number;
    description: string;
    examples: string[];
  } {
    const raceInfo = {
      A: {
        name: 'A级赛事',
        coefficient: 1.0,
        description: '全国级重要赛事',
        examples: ['全国锦标赛', '冬运会', '青年冠军赛']
      },
      B: {
        name: 'B级赛事',
        coefficient: 0.6,
        description: '省级及区域性重要赛事',
        examples: ['省级锦标赛', '区域性比赛', 'U系列全国赛']
      },
      C: {
        name: 'C级赛事',
        coefficient: 0.3,
        description: '地市级赛事',
        examples: ['地市级比赛', '俱乐部赛事', '青少年培训赛']
      }
    };

    return raceInfo[raceLevel];
  }
}