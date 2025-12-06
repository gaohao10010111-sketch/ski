import {
  PointsTier,
  Result,
  PointsCalculationResult,
  Competition
} from '../types/fourSport';
import { POINTS_ALLOCATION } from '../data/fourSportData';

// 技巧信息接口
interface TrickInfo {
  name: string;
  difficulty?: number;
  score?: number;
  execution?: number;
}

/**
 * 自由式滑雪坡面障碍技巧和大跳台积分计算器
 * 基于排名的240/360/120分档积分分配
 * 支持技巧难度系数评分机制
 */
export class FreestyleSlopestyleBigAirCalculator {

  /**
   * 计算自由式滑雪积分
   * @param rank 最终排名
   * @param tier 积分档次 (240/360/120)
   * @param difficultyMultiplier 难度系数（可选）
   * @returns 积分计算结果
   * @description 当次比赛成绩排名为50名以后、未完赛、因伤退出等情况，当次比赛积分为0
   */
  static calculatePoints(
    rank: number,
    tier: PointsTier,
    difficultyMultiplier?: number
  ): PointsCalculationResult {
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

    let finalPoints = rankData.points;

    // 应用难度系数（如果提供）
    if (difficultyMultiplier && difficultyMultiplier > 1.0) {
      finalPoints = finalPoints * Math.min(difficultyMultiplier, 1.5); // 最高1.5倍系数
    }

    return {
      basePoints: rankData.points,
      adjustedPoints: finalPoints,
      finalPoints: Math.round(finalPoints * 100) / 100,
      tier
    };
  }

  /**
   * 计算技巧难度系数
   * @param tricks 动作列表
   * @returns 难度系数
   */
  static calculateDifficultyMultiplier(tricks: {
    name: string;
    difficulty: number;
    execution: number;
  }[]): number {
    if (tricks.length === 0) return 1.0;

    // 基础难度系数计算
    const avgDifficulty = tricks.reduce((sum, trick) => sum + trick.difficulty, 0) / tricks.length;
    const avgExecution = tricks.reduce((sum, trick) => sum + trick.execution, 0) / tricks.length;

    // 难度系数 = 平均难度 × 平均完成度
    const multiplier = (avgDifficulty / 10) * (avgExecution / 10);

    // 限制在0.8-1.5之间
    return Math.max(0.8, Math.min(1.5, multiplier));
  }

  /**
   * 计算多轮次最佳成绩
   * @param scores 各轮次评分
   * @param competitionType 比赛类型
   * @returns 最佳成绩信息
   */
  static calculateBestScore(
    scores: { round: number; score: number; rank: number; tricks?: TrickInfo[] }[],
    competitionType: 'slopestyle' | 'bigair' = 'slopestyle'
  ): { bestScore: number; bestRound: number; finalRank: number; totalScore?: number } {

    if (competitionType === 'slopestyle') {
      // 坡面障碍技巧：预赛两轮取最好成绩，决赛三轮取最好成绩
      const bestRound = scores.reduce((best, current) =>
        current.score > best.score ? current : best
      );

      return {
        bestScore: bestRound.score,
        bestRound: bestRound.round,
        finalRank: bestRound.rank
      };
    } else {
      // 大跳台：预赛两轮取最好成绩，决赛三轮取两轮不同动作最好成绩
      if (scores.length >= 2) {
        const sortedScores = [...scores].sort((a, b) => b.score - a.score);
        const bestTwoScores = sortedScores.slice(0, 2);
        const totalScore = bestTwoScores.reduce((sum, score) => sum + score.score, 0);

        return {
          bestScore: bestTwoScores[0].score,
          bestRound: bestTwoScores[0].round,
          finalRank: Math.min(...bestTwoScores.map(s => s.rank)),
          totalScore
        };
      } else {
        const bestRound = scores[0];
        return {
          bestScore: bestRound.score,
          bestRound: bestRound.round,
          finalRank: bestRound.rank
        };
      }
    }
  }

  /**
   * 验证自由式滑雪比赛格式
   * @param competition 比赛信息
   * @param scores 成绩数据
   * @returns 验证结果
   */
  static validateFreestyleFormat(
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
      errors.push('自由式滑雪比赛至少需要2轮成绩');
    }

    if (scores.length > 5) {
      errors.push('轮次数量超出正常范围');
    }

    // 检查评分范围
    const invalidScores = scores.filter(s => s.score < 0 || s.score > 100);
    if (invalidScores.length > 0) {
      errors.push('存在无效评分（评分应在0-100分之间）');
    }

    // 检查评分精度（自由式通常要求较高精度）
    const lowPrecisionScores = scores.filter(s => s.score % 0.1 !== 0);
    if (lowPrecisionScores.length > 0) {
      errors.push('评分精度不足（建议精确到0.1分）');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * 评估动作完成质量
   * @param score 评分
   * @param maxScore 满分
   * @returns 完成质量评估
   */
  static evaluateExecutionQuality(score: number, maxScore: number = 100): {
    quality: 'excellent' | 'good' | 'average' | 'poor';
    percentage: number;
    description: string;
  } {
    const percentage = (score / maxScore) * 100;

    if (percentage >= 90) {
      return {
        quality: 'excellent',
        percentage,
        description: '优秀完成，动作干净利落'
      };
    } else if (percentage >= 75) {
      return {
        quality: 'good',
        percentage,
        description: '良好完成，有小幅瑕疵'
      };
    } else if (percentage >= 60) {
      return {
        quality: 'average',
        percentage,
        description: '一般完成，有明显不足'
      };
    } else {
      return {
        quality: 'poor',
        percentage,
        description: '完成度较低，需要改进'
      };
    }
  }

  /**
   * 处理自由式滑雪特殊情况
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
   * 生成自由式滑雪积分计算报告
   * @param result 比赛结果
   * @param calculation 积分计算结果
   * @param additionalInfo 附加信息
   * @returns 详细报告
   */
  static generateCalculationReport(
    result: Result,
    calculation: PointsCalculationResult,
    additionalInfo?: {
      competitionType?: 'slopestyle' | 'bigair';
      difficultyMultiplier?: number;
      tricks?: TrickInfo[];
    }
  ): string {
    const lines: string[] = [];

    lines.push('=== 自由式滑雪坡面障碍技巧和大跳台积分计算报告 ===');
    lines.push('');
    lines.push(`最终排名: 第${result.finalRank}名`);
    lines.push(`积分档次: ${calculation.tier}分档`);
    lines.push(`基础积分: ${calculation.basePoints}分`);

    if (additionalInfo?.difficultyMultiplier && additionalInfo.difficultyMultiplier !== 1.0) {
      lines.push(`难度系数: ${additionalInfo.difficultyMultiplier.toFixed(2)}`);
      lines.push(`调整积分: ${calculation.adjustedPoints}分`);
    }

    lines.push(`最终积分: ${calculation.finalPoints}分`);
    lines.push('');

    if (result.scores && result.scores.length > 0) {
      lines.push('各轮次成绩:');
      result.scores.forEach(score => {
        const quality = this.evaluateExecutionQuality(score.score);
        lines.push(`  第${score.round}轮: ${score.score}分 (排名: 第${score.rank}名, ${quality.description})`);
      });
      lines.push('');
    }

    if (additionalInfo?.tricks && additionalInfo.tricks.length > 0) {
      lines.push('技巧动作详情:');
      additionalInfo.tricks.forEach((trick, index) => {
        lines.push(`  动作${index + 1}: ${trick.name} (难度: ${trick.difficulty}, 完成度: ${trick.execution})`);
      });
      lines.push('');
    }

    lines.push('积分计算方式: 基于最终排名的分档积分分配');
    lines.push(`项目特点: ${additionalInfo?.competitionType === 'bigair' ? '大跳台项目' : '坡面障碍技巧项目'}`);
    if (additionalInfo?.difficultyMultiplier) {
      lines.push('特色功能: 技巧难度系数自动计算');
    }

    return lines.join('\n');
  }

  /**
   * 获取技巧动作库
   * @param discipline 项目类型
   * @returns 技巧动作信息
   */
  static getTrickLibrary(discipline: 'slopestyle' | 'bigair'): {
    [category: string]: {
      name: string;
      difficulty: number;
      description: string;
    }[];
  } {
    if (discipline === 'slopestyle') {
      return {
        rails: [
          { name: '50-50', difficulty: 3, description: '基础滑轨动作' },
          { name: 'Boardslide', difficulty: 5, description: '侧滑轨道' },
          { name: 'Lipslide', difficulty: 7, description: '唇滑动作' },
          { name: 'Bluntslide', difficulty: 8, description: '钝滑动作' }
        ],
        jumps: [
          { name: 'Straight Air', difficulty: 2, description: '直体腾空' },
          { name: '360', difficulty: 5, description: '360度旋转' },
          { name: '540', difficulty: 7, description: '540度旋转' },
          { name: '720', difficulty: 9, description: '720度旋转' }
        ],
        grabs: [
          { name: 'Indy', difficulty: 3, description: '内侧抓板' },
          { name: 'Method', difficulty: 6, description: '侧身抓板' },
          { name: 'Stalefish', difficulty: 7, description: '背身抓板' }
        ]
      };
    } else {
      return {
        spins: [
          { name: '360', difficulty: 4, description: '360度旋转' },
          { name: '540', difficulty: 6, description: '540度旋转' },
          { name: '720', difficulty: 8, description: '720度旋转' },
          { name: '900', difficulty: 9, description: '900度旋转' },
          { name: '1080', difficulty: 10, description: '1080度旋转' }
        ],
        flips: [
          { name: 'Backflip', difficulty: 7, description: '后空翻' },
          { name: 'Frontflip', difficulty: 8, description: '前空翻' },
          { name: 'Double Cork', difficulty: 10, description: '双轴翻转' }
        ],
        grabs: [
          { name: 'Indy', difficulty: 3, description: '内侧抓板' },
          { name: 'Method', difficulty: 5, description: '侧身抓板' },
          { name: 'Japan', difficulty: 6, description: '日式抓板' },
          { name: 'Melon', difficulty: 5, description: '甜瓜抓板' }
        ]
      };
    }
  }
}