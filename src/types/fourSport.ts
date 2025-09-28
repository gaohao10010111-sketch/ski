// 四大项目类型定义

// 四大项目枚举
export enum SportType {
  SNOWBOARD_SLOPESTYLE_BIGAIR = 'snowboard_slopestyle_bigair',
  SNOWBOARD_PARALLEL = 'snowboard_parallel',
  FREESTYLE_SLOPESTYLE_BIGAIR = 'freestyle_slopestyle_bigair',
  ALPINE_SKI = 'alpine_ski'
}

// 项目显示名称
export const SPORT_NAMES = {
  [SportType.SNOWBOARD_SLOPESTYLE_BIGAIR]: '全国单板滑雪坡面障碍技巧和大跳台',
  [SportType.SNOWBOARD_PARALLEL]: '单板滑雪平行项目',
  [SportType.FREESTYLE_SLOPESTYLE_BIGAIR]: '自由式滑雪坡面障碍技巧和大跳台',
  [SportType.ALPINE_SKI]: '高山滑雪'
} as const;

// 积分档次枚举
export enum PointsTier {
  TIER_360 = 360,
  TIER_240 = 240,
  TIER_120 = 120
}

// 比赛格式类型
export enum CompetitionFormat {
  QUALIFICATION_FINAL = 'qualification_final',  // 预赛+决赛
  ELIMINATION = 'elimination',                  // 淘汰赛
  TIME_TRIAL = 'time_trial'                    // 计时赛
}

// 运动员基础信息
export interface Athlete {
  id: string;
  name: string;
  gender: 'male' | 'female';
  birthDate: string;
  province: string;
  club?: string;
  uSeries?: 'U12' | 'U15' | 'U18';
  // 四大项目积分
  points: {
    [SportType.SNOWBOARD_SLOPESTYLE_BIGAIR]?: number;
    [SportType.SNOWBOARD_PARALLEL]?: number;
    [SportType.FREESTYLE_SLOPESTYLE_BIGAIR]?: number;
    [SportType.ALPINE_SKI]?: number;
  };
}

// 比赛基础信息
export interface Competition {
  id: string;
  name: string;
  sport: SportType;
  date: string;
  location: string;
  format: CompetitionFormat;
  tier?: PointsTier; // 技巧项目使用
  raceLevel?: 'A' | 'B' | 'C'; // 高山滑雪使用
  venueStandard?: 'first' | 'second' | 'third'; // 场地等级
}

// 成绩结果
export interface Result {
  athleteId: string;
  competitionId: string;
  sport: SportType;

  // 排名相关
  finalRank: number;

  // 时间相关（高山滑雪、平行项目）
  time?: number;

  // 评分相关（坡面障碍技巧、大跳台）
  scores?: {
    round: number;
    score: number;
    rank: number;
  }[];

  // 积分计算结果
  points: number;

  // 特殊标记
  status?: 'DNS' | 'DNF' | 'DQ';
}

// 积分计算结果
export interface PointsCalculationResult {
  basePoints: number;
  adjustedPoints: number;
  finalPoints: number;
  tier?: PointsTier;
  raceCoefficient?: number;
  penalty?: number;
}

// U系列年龄组验证
export interface USeriesValidation {
  isEligible: boolean;
  ageGroup?: 'U12' | 'U15' | 'U18';
  age: number;
  cutoffDate: string;
}

// 场地标准
export interface VenueStandard {
  sport: SportType;
  level: 'first' | 'second' | 'third';
  requirements: {
    [key: string]: string | number;
  };
  isCompliant: boolean;
}

// 积分历史
export interface PointsHistory {
  athleteId: string;
  sport: SportType;
  season: string;
  points: number;
  competitions: number;
  bestResults: Result[];
  carryOverPoints?: number; // 延续积分 (前赛季 × 50%)
}

// 排名信息
export interface Ranking {
  rank: number;
  athleteId: string;
  athleteName: string;
  sport: SportType;
  points: number;
  competitions: number;
  province: string;
  uSeries?: 'U12' | 'U15' | 'U18';
}

// 赛季管理
export interface Season {
  year: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

// 积分延续规则
export interface PointsContinuation {
  previousSeasonPoints: number;
  carryOverRate: number; // 通常为 0.5 (50%)
  carryOverPoints: number;
  newSeasonBasePoints: number;
}