import {
  PointsTier,
  Result,
  PointsCalculationResult,
  Competition
} from '../types/fourSport';
import { POINTS_ALLOCATION } from '../data/fourSportData';

/**
 * 全国单板滑雪坡面障碍技巧和大跳台积分计算器
 * 基于排名的240/360/120分档积分分配
 */
export class SnowboardSlopestyleBigAirCalculator {

  /**
   * 计算单场比赛积分
   * @param rank 最终排名
   * @param tier 积分档次 (240/360/120)
   * @returns 积分计算结果
   * @description 当次比赛成绩排名为50名以后、未完赛、因伤退出等情况，当次比赛积分为0
   */
  static calculatePoints(rank: number, tier: PointsTier): PointsCalculationResult {
    // 50名以后积分为0
    if (rank > 50) {
      return {
        basePoints: 0,
        adjustedPoints: 0,
        finalPoints: 0,
        tier
      };
    }

    const allocation = POINTS_ALLOCATION[tier];

    // 查找对应排名的积分
    const rankData = allocation.find(item => item.rank === rank);

    if (!rankData) {
      // 未找到对应排名数据，积分为0
      return {
        basePoints: 0,
        adjustedPoints: 0,
        finalPoints: 0,
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
   * 计算预赛/决赛轮次最佳成绩
   * @param scores 各轮次评分
   * @param isQualification 是否为预赛阶段
   * @returns 最佳成绩信息
   */
  static calculateBestScore(
    scores: { round: number; score: number; rank: number }[],
    isQualification: boolean = false
  ): { bestScore: number; bestRound: number; finalRank: number } {

    if (isQualification) {
      // 预赛：两轮取最好成绩
      const qualificationRounds = scores.filter(s => s.round <= 2);
      const bestQualification = qualificationRounds.reduce((best, current) =>
        current.score > best.score ? current : best
      );

      return {
        bestScore: bestQualification.score,
        bestRound: bestQualification.round,
        finalRank: bestQualification.rank
      };
    } else {
      // 决赛：三轮取两轮不同动作最好成绩相加（单板坡障）或最好单轮成绩（大跳台）
      const finalRounds = scores.filter(s => s.round >= 3 || scores.length <= 3);

      if (finalRounds.length === 1) {
        // 只有一轮决赛
        return {
          bestScore: finalRounds[0].score,
          bestRound: finalRounds[0].round,
          finalRank: finalRounds[0].rank
        };
      }

      // 取最好成绩
      const bestFinal = finalRounds.reduce((best, current) =>
        current.score > best.score ? current : best
      );

      return {
        bestScore: bestFinal.score,
        bestRound: bestFinal.round,
        finalRank: bestFinal.rank
      };
    }
  }

  /**
   * 验证比赛格式和轮次
   * @param competition 比赛信息
   * @param scores 成绩数据
   * @returns 验证结果
   */
  static validateCompetitionFormat(
    competition: Competition,
    scores: { round: number; score: number; rank: number }[]
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // 检查积分档次
    if (!competition.tier) {
      errors.push('比赛缺少积分档次设置');
    }

    // 检查轮次数量
    if (scores.length < 2) {
      errors.push('单板坡障/大跳台比赛至少需要2轮成绩');
    }

    if (scores.length > 5) {
      errors.push('轮次数量超出正常范围');
    }

    // 检查评分范围
    const invalidScores = scores.filter(s => s.score < 0 || s.score > 100);
    if (invalidScores.length > 0) {
      errors.push('存在无效评分（评分应在0-100分之间）');
    }

    // 检查排名连续性
    const ranks = scores.map(s => s.rank).sort((a, b) => a - b);
    for (let i = 0; i < ranks.length - 1; i++) {
      if (ranks[i] === ranks[i + 1]) {
        errors.push('存在重复排名');
        break;
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * 处理特殊情况成绩
   * @param status 成绩状态
   * @param tier 积分档次
   * @returns 特殊情况积分
   */
  static handleSpecialStatus(
    status: 'DNS' | 'DNF' | 'DQ',
    tier: PointsTier
  ): PointsCalculationResult {
    return {
      basePoints: 0,
      adjustedPoints: 0,
      finalPoints: 0,
      tier
    };
  }

  /**
   * 计算赛季最佳积分
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
   * 生成积分计算报告
   * @param result 比赛结果
   * @param calculation 积分计算结果
   * @returns 详细报告
   */
  static generateCalculationReport(
    result: Result,
    calculation: PointsCalculationResult
  ): string {
    const lines: string[] = [];

    lines.push('=== 全国单板滑雪坡面障碍技巧和大跳台积分计算报告 ===');
    lines.push('');
    lines.push(`最终排名: 第${result.finalRank}名`);
    lines.push(`积分档次: ${calculation.tier}分档`);
    lines.push(`基础积分: ${calculation.basePoints}分`);
    lines.push(`最终积分: ${calculation.finalPoints}分`);
    lines.push('');

    if (result.scores && result.scores.length > 0) {
      lines.push('各轮次成绩:');
      result.scores.forEach(score => {
        lines.push(`  第${score.round}轮: ${score.score}分 (排名: 第${score.rank}名)`);
      });
      lines.push('');
    }

    lines.push('积分计算方式: 基于最终排名的分档积分分配');
    lines.push(`积分分配规则: ${calculation.tier}分档积分表`);

    return lines.join('\n');
  }

  /**
   * 获取积分档次信息
   * @param tier 积分档次
   * @returns 档次详细信息
   */
  static getTierInfo(tier: PointsTier): {
    name: string;
    description: string;
    maxPoints: number;
    minPoints: number;
  } {
    const allocation = POINTS_ALLOCATION[tier];

    return {
      name: `${tier}分档`,
      description: tier === PointsTier.TIER_360 ? '一类赛事' :
                  tier === PointsTier.TIER_240 ? '二类赛事' : '三类赛事',
      maxPoints: allocation[0].points,
      minPoints: allocation[allocation.length - 1].points
    };
  }
}