import {
  PointsTier,
  Result,
  PointsCalculationResult,
  Competition
} from '../types/fourSport';
import { POINTS_ALLOCATION } from '../data/fourSportData';

/**
 * 单板滑雪平行项目积分计算器
 * 支持平行大回转(PGS)和平行回转(PSL)
 * 基于淘汰赛制的积分分配体系
 */
export class SnowboardParallelCalculator {

  /**
   * 计算平行项目积分
   * @param rank 最终排名
   * @param tier 积分档次 (240/360/120)
   * @param eliminationStage 淘汰阶段信息
   * @returns 积分计算结果
   */
  static calculatePoints(
    rank: number,
    tier: PointsTier,
    eliminationStage?: {
      qualificationTime?: number;
      eliminatedInStage?: 'qualification' | 'round16' | 'round8' | 'quarterfinal' | 'semifinal' | 'final';
    }
  ): PointsCalculationResult {
    const allocation = POINTS_ALLOCATION[tier];

    // 查找对应排名的积分
    const rankData = allocation.find(item => item.rank === rank);

    if (!rankData) {
      // 超出积分表范围，根据淘汰阶段给分
      const basePoints = this.calculateEliminationPoints(rank, tier, eliminationStage?.eliminatedInStage);
      return {
        basePoints,
        adjustedPoints: basePoints,
        finalPoints: basePoints,
        tier
      };
    }

    return {
      basePoints: rankData.points,
      adjustedPoints: rankData.points,
      finalPoints: rankData.points,
      tier
    };
  }

  /**
   * 根据淘汰阶段计算积分
   * @param rank 最终排名
   * @param tier 积分档次
   * @param eliminatedInStage 淘汰阶段
   * @returns 淘汰阶段积分
   */
  private static calculateEliminationPoints(
    rank: number,
    tier: PointsTier,
    eliminatedInStage?: string
  ): number {
    const maxPoints = tier;
    const minPoints = tier * 0.1; // 最低10%积分

    // 根据淘汰阶段分配积分
    const stageMultipliers = {
      'qualification': 0.1,   // 预赛淘汰：10%
      'round16': 0.2,         // 16强淘汰：20%
      'round8': 0.3,          // 8强淘汰：30%
      'quarterfinal': 0.4,    // 四分之一决赛：40%
      'semifinal': 0.6,       // 半决赛：60%
      'final': 0.8            // 决赛：80%
    };

    const multiplier = eliminatedInStage ?
      stageMultipliers[eliminatedInStage as keyof typeof stageMultipliers] || 0.1 :
      Math.max(0.1, 1 - (rank - 10) * 0.05); // 排名越靠后积分越少

    return Math.round(maxPoints * multiplier * 100) / 100;
  }

  /**
   * 计算对决时间差积分调整
   * @param winnerTime 获胜者时间
   * @param loserTime 失败者时间
   * @param basePoints 基础积分
   * @returns 调整后积分
   */
  static calculateTimeDifferenceAdjustment(
    winnerTime: number,
    loserTime: number,
    basePoints: number
  ): number {
    const timeDifference = loserTime - winnerTime;
    const timePercentage = timeDifference / winnerTime;

    // 时间差越大，积分调整越小（表示实力差距较大）
    if (timePercentage > 0.05) {
      // 时间差超过5%，积分打9折
      return basePoints * 0.9;
    } else if (timePercentage > 0.03) {
      // 时间差3-5%，积分打95折
      return basePoints * 0.95;
    }

    // 时间差小于3%，积分不调整
    return basePoints;
  }

  /**
   * 验证平行项目比赛格式
   * @param competition 比赛信息
   * @param result 比赛结果
   * @returns 验证结果
   */
  static validateParallelFormat(
    competition: Competition,
    result: Result
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // 检查积分档次
    if (!competition.tier) {
      errors.push('比赛缺少积分档次设置');
    }

    // 检查时间有效性
    if (result.time && result.time <= 0) {
      errors.push('比赛时间无效');
    }

    // 检查排名合理性
    if (result.finalRank <= 0) {
      errors.push('排名无效');
    }

    // 检查项目类型
    const validParallelEvents = ['PGS', 'PSL'];
    // 这里可以扩展检查具体的平行项目类型

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * 处理平行项目特殊情况
   * @param status 成绩状态
   * @param tier 积分档次
   * @param stage 淘汰阶段
   * @returns 特殊情况积分
   */
  static handleSpecialStatus(
    status: 'DNS' | 'DNF' | 'DQ',
    tier: PointsTier,
    stage?: string
  ): PointsCalculationResult {
    let points = 0;

    if (status === 'DNF' && stage && stage !== 'qualification') {
      // 在正赛中未完成，给予参与积分
      points = tier * 0.05; // 5%参与积分
    }

    return {
      basePoints: points,
      adjustedPoints: points,
      finalPoints: points,
      tier
    };
  }

  /**
   * 计算赛季最佳积分（平行项目）
   * @param results 赛季内所有成绩
   * @returns 最佳两次成绩平均值
   */
  static calculateSeasonBest(results: Result[]): number {
    if (results.length === 0) return 0;

    // 按积分排序（降序）
    const sortedResults = results
      .filter(r => r.status !== 'DNS' && r.status !== 'DNF' && r.status !== 'DQ')
      .sort((a, b) => b.points - a.points);

    if (sortedResults.length === 1) {
      // 只有一次成绩，乘以1.2倍系数
      return sortedResults[0].points * 1.2;
    }

    // 取最好两次成绩的平均值
    const best = sortedResults.slice(0, 2);
    return best.reduce((sum, result) => sum + result.points, 0) / best.length;
  }

  /**
   * 生成对决配对
   * @param qualificationResults 预赛结果
   * @param eliminationRound 淘汰赛轮次
   * @returns 对决配对
   */
  static generateMatchups(
    qualificationResults: Result[],
    eliminationRound: 'round16' | 'round8' | 'quarterfinal' | 'semifinal'
  ): Array<{ athlete1: Result; athlete2: Result; matchNumber: number }> {
    const sortedResults = qualificationResults
      .filter(r => r.status !== 'DNS' && r.status !== 'DNF' && r.status !== 'DQ')
      .sort((a, b) => a.finalRank - b.finalRank);

    const matchups: Array<{ athlete1: Result; athlete2: Result; matchNumber: number }> = [];

    const roundSizes = {
      'round16': 16,
      'round8': 8,
      'quarterfinal': 4,
      'semifinal': 2
    };

    const participants = sortedResults.slice(0, roundSizes[eliminationRound]);

    // 生成对决：1 vs 最后，2 vs 倒数第二，以此类推
    for (let i = 0; i < participants.length / 2; i++) {
      matchups.push({
        athlete1: participants[i],
        athlete2: participants[participants.length - 1 - i],
        matchNumber: i + 1
      });
    }

    return matchups;
  }

  /**
   * 计算积分延续（50%延续机制）
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
   * 生成平行项目积分计算报告
   * @param result 比赛结果
   * @param calculation 积分计算结果
   * @param eliminationDetails 淘汰赛详情
   * @returns 详细报告
   */
  static generateCalculationReport(
    result: Result,
    calculation: PointsCalculationResult,
    eliminationDetails?: {
      qualificationTime?: number;
      eliminationStage?: string;
      opponent?: string;
      timeDifference?: number;
    }
  ): string {
    const lines: string[] = [];

    lines.push('=== 单板滑雪平行项目积分计算报告 ===');
    lines.push('');
    lines.push(`最终排名: 第${result.finalRank}名`);
    lines.push(`积分档次: ${calculation.tier}分档`);

    if (result.time) {
      lines.push(`比赛时间: ${result.time}秒`);
    }

    lines.push(`基础积分: ${calculation.basePoints}分`);
    lines.push(`最终积分: ${calculation.finalPoints}分`);
    lines.push('');

    if (eliminationDetails) {
      lines.push('淘汰赛详情:');
      if (eliminationDetails.qualificationTime) {
        lines.push(`  预赛时间: ${eliminationDetails.qualificationTime}秒`);
      }
      if (eliminationDetails.eliminationStage) {
        lines.push(`  淘汰阶段: ${eliminationDetails.eliminationStage}`);
      }
      if (eliminationDetails.opponent) {
        lines.push(`  对战选手: ${eliminationDetails.opponent}`);
      }
      if (eliminationDetails.timeDifference) {
        lines.push(`  时间差: ${eliminationDetails.timeDifference}秒`);
      }
      lines.push('');
    }

    lines.push('积分计算方式: 基于淘汰赛制的排名积分分配');
    lines.push('赛制特点: 一对一对决，淘汰赛制');

    return lines.join('\n');
  }

  /**
   * 获取平行项目信息
   * @param eventType 项目类型
   * @returns 项目详细信息
   */
  static getParallelEventInfo(eventType: 'PGS' | 'PSL'): {
    name: string;
    fullName: string;
    description: string;
    characteristics: string[];
  } {
    const eventInfo = {
      PGS: {
        name: 'PGS',
        fullName: '平行大回转',
        description: '单板滑雪平行大回转项目',
        characteristics: [
          '门设置较宽',
          '速度相对较快',
          '技术要求偏向滑行技术',
          '比赛距离较长'
        ]
      },
      PSL: {
        name: 'PSL',
        fullName: '平行回转',
        description: '单板滑雪平行回转项目',
        characteristics: [
          '门设置较密',
          '技术要求较高',
          '转弯频率更快',
          '比赛距离相对较短'
        ]
      }
    };

    return eventInfo[eventType];
  }
}