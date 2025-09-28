import {
  SportType,
  PointsTier,
  CompetitionFormat,
  Athlete,
  Competition,
  Result,
  Ranking,
  SPORT_NAMES
} from '../types/fourSport';

// 模拟运动员数据
export const mockAthletes: Athlete[] = [
  {
    id: 'ATH001',
    name: '张雪飞',
    gender: 'male',
    birthDate: '2005-03-15',
    province: '黑龙江',
    club: '哈尔滨滑雪俱乐部',
    uSeries: 'U18',
    points: {
      [SportType.SNOWBOARD_SLOPESTYLE_BIGAIR]: 280.5,
      [SportType.FREESTYLE_SLOPESTYLE_BIGAIR]: 195.0,
      [SportType.ALPINE_SKI]: 45.20
    }
  },
  {
    id: 'ATH002',
    name: '李冰冰',
    gender: 'female',
    birthDate: '2006-08-22',
    province: '吉林',
    club: '长春冰雪学校',
    uSeries: 'U18',
    points: {
      [SportType.SNOWBOARD_PARALLEL]: 156.8,
      [SportType.ALPINE_SKI]: 38.75
    }
  },
  {
    id: 'ATH003',
    name: '王雪山',
    gender: 'male',
    birthDate: '2007-12-10',
    province: '北京',
    club: '北京雪域俱乐部',
    uSeries: 'U15',
    points: {
      [SportType.FREESTYLE_SLOPESTYLE_BIGAIR]: 240.0,
      [SportType.SNOWBOARD_SLOPESTYLE_BIGAIR]: 162.4
    }
  },
  {
    id: 'ATH004',
    name: '赵梦雪',
    gender: 'female',
    birthDate: '2004-06-18',
    province: '河北',
    club: '张家口滑雪队',
    uSeries: 'U18',
    points: {
      [SportType.ALPINE_SKI]: 52.30,
      [SportType.SNOWBOARD_PARALLEL]: 143.6
    }
  },
  {
    id: 'ATH005',
    name: '刘飞雪',
    gender: 'male',
    birthDate: '2008-09-25',
    province: '新疆',
    club: '乌鲁木齐冰雪运动中心',
    uSeries: 'U15',
    points: {
      [SportType.FREESTYLE_SLOPESTYLE_BIGAIR]: 189.6,
      [SportType.SNOWBOARD_SLOPESTYLE_BIGAIR]: 225.8
    }
  }
];

// 模拟比赛数据
export const mockCompetitions: Competition[] = [
  {
    id: 'COMP001',
    name: '2024全国单板滑雪坡面障碍技巧锦标赛',
    sport: SportType.SNOWBOARD_SLOPESTYLE_BIGAIR,
    date: '2024-01-15',
    location: '张家口云顶滑雪场',
    format: CompetitionFormat.QUALIFICATION_FINAL,
    tier: PointsTier.TIER_360,
    venueStandard: 'first'
  },
  {
    id: 'COMP002',
    name: '2024单板滑雪平行大回转青少年赛',
    sport: SportType.SNOWBOARD_PARALLEL,
    date: '2024-02-08',
    location: '长白山万达滑雪场',
    format: CompetitionFormat.ELIMINATION,
    tier: PointsTier.TIER_240,
    venueStandard: 'second'
  },
  {
    id: 'COMP003',
    name: '2024自由式滑雪大跳台全国赛',
    sport: SportType.FREESTYLE_SLOPESTYLE_BIGAIR,
    date: '2024-02-20',
    location: '北京首钢滑雪大跳台',
    format: CompetitionFormat.QUALIFICATION_FINAL,
    tier: PointsTier.TIER_360,
    venueStandard: 'first'
  },
  {
    id: 'COMP004',
    name: '2024全国高山滑雪青少年锦标赛',
    sport: SportType.ALPINE_SKI,
    date: '2024-03-05',
    location: '亚布力滑雪场',
    format: CompetitionFormat.TIME_TRIAL,
    raceLevel: 'A',
    venueStandard: 'first'
  },
  {
    id: 'COMP005',
    name: '2024自由式滑雪坡面障碍技巧省级赛',
    sport: SportType.FREESTYLE_SLOPESTYLE_BIGAIR,
    date: '2024-03-18',
    location: '崇礼太舞滑雪场',
    format: CompetitionFormat.QUALIFICATION_FINAL,
    tier: PointsTier.TIER_240,
    venueStandard: 'second'
  }
];

// 模拟比赛成绩
export const mockResults: Result[] = [
  {
    athleteId: 'ATH001',
    competitionId: 'COMP001',
    sport: SportType.SNOWBOARD_SLOPESTYLE_BIGAIR,
    finalRank: 1,
    scores: [
      { round: 1, score: 85.5, rank: 2 },
      { round: 2, score: 92.3, rank: 1 },
      { round: 3, score: 88.7, rank: 1 }
    ],
    points: 360.0
  },
  {
    athleteId: 'ATH003',
    competitionId: 'COMP001',
    sport: SportType.SNOWBOARD_SLOPESTYLE_BIGAIR,
    finalRank: 2,
    scores: [
      { round: 1, score: 88.2, rank: 1 },
      { round: 2, score: 84.6, rank: 3 },
      { round: 3, score: 87.1, rank: 2 }
    ],
    points: 288.0
  },
  {
    athleteId: 'ATH002',
    competitionId: 'COMP002',
    sport: SportType.SNOWBOARD_PARALLEL,
    finalRank: 1,
    time: 58.34,
    points: 240.0
  },
  {
    athleteId: 'ATH004',
    competitionId: 'COMP002',
    sport: SportType.SNOWBOARD_PARALLEL,
    finalRank: 3,
    time: 59.87,
    points: 144.0
  },
  {
    athleteId: 'ATH003',
    competitionId: 'COMP003',
    sport: SportType.FREESTYLE_SLOPESTYLE_BIGAIR,
    finalRank: 1,
    scores: [
      { round: 1, score: 89.4, rank: 1 },
      { round: 2, score: 91.8, rank: 1 },
      { round: 3, score: 87.2, rank: 2 }
    ],
    points: 360.0
  },
  {
    athleteId: 'ATH005',
    competitionId: 'COMP003',
    sport: SportType.FREESTYLE_SLOPESTYLE_BIGAIR,
    finalRank: 2,
    scores: [
      { round: 1, score: 86.7, rank: 2 },
      { round: 2, score: 88.9, rank: 2 },
      { round: 3, score: 90.1, rank: 1 }
    ],
    points: 288.0
  },
  {
    athleteId: 'ATH004',
    competitionId: 'COMP004',
    sport: SportType.ALPINE_SKI,
    finalRank: 1,
    time: 125.30,
    points: 0.0 // 冠军积分为0
  },
  {
    athleteId: 'ATH001',
    competitionId: 'COMP004',
    sport: SportType.ALPINE_SKI,
    finalRank: 2,
    time: 128.75,
    points: 27.76
  }
];

// 生成四大项目排名
export const generateRankings = (): { [key in SportType]: Ranking[] } => {
  const rankings: { [key in SportType]: Ranking[] } = {
    [SportType.SNOWBOARD_SLOPESTYLE_BIGAIR]: [],
    [SportType.SNOWBOARD_PARALLEL]: [],
    [SportType.FREESTYLE_SLOPESTYLE_BIGAIR]: [],
    [SportType.ALPINE_SKI]: []
  };

  // 为每个项目生成排名
  Object.values(SportType).forEach(sport => {
    const athletesWithPoints = mockAthletes
      .filter(athlete => athlete.points[sport] !== undefined)
      .map((athlete, index) => ({
        rank: index + 1,
        athleteId: athlete.id,
        athleteName: athlete.name,
        sport,
        points: athlete.points[sport]!,
        competitions: 2, // 模拟参赛次数
        province: athlete.province,
        uSeries: athlete.uSeries
      }))
      .sort((a, b) => {
        // 高山滑雪积分越低越好，其他项目积分越高越好
        if (sport === SportType.ALPINE_SKI) {
          return a.points - b.points;
        } else {
          return b.points - a.points;
        }
      })
      .map((item, index) => ({ ...item, rank: index + 1 }));

    rankings[sport] = athletesWithPoints;
  });

  return rankings;
};

// 积分分配表（240/360/120分档）
export const POINTS_ALLOCATION = {
  [PointsTier.TIER_360]: [
    { rank: 1, percentage: 100, points: 360 },
    { rank: 2, percentage: 80, points: 288 },
    { rank: 3, percentage: 60, points: 216 },
    { rank: 4, percentage: 50, points: 180 },
    { rank: 5, percentage: 45, points: 162 },
    { rank: 6, percentage: 40, points: 144 },
    { rank: 7, percentage: 36, points: 129.6 },
    { rank: 8, percentage: 32, points: 115.2 },
    { rank: 9, percentage: 29, points: 104.4 },
    { rank: 10, percentage: 26, points: 93.6 }
  ],
  [PointsTier.TIER_240]: [
    { rank: 1, percentage: 100, points: 240 },
    { rank: 2, percentage: 80, points: 192 },
    { rank: 3, percentage: 60, points: 144 },
    { rank: 4, percentage: 50, points: 120 },
    { rank: 5, percentage: 45, points: 108 },
    { rank: 6, percentage: 40, points: 96 },
    { rank: 7, percentage: 36, points: 86.4 },
    { rank: 8, percentage: 32, points: 76.8 },
    { rank: 9, percentage: 29, points: 69.6 },
    { rank: 10, percentage: 26, points: 62.4 }
  ],
  [PointsTier.TIER_120]: [
    { rank: 1, percentage: 100, points: 120 },
    { rank: 2, percentage: 80, points: 96 },
    { rank: 3, percentage: 60, points: 72 },
    { rank: 4, percentage: 50, points: 60 },
    { rank: 5, percentage: 45, points: 54 },
    { rank: 6, percentage: 40, points: 48 },
    { rank: 7, percentage: 36, points: 43.2 },
    { rank: 8, percentage: 32, points: 38.4 },
    { rank: 9, percentage: 29, points: 34.8 },
    { rank: 10, percentage: 26, points: 31.2 }
  ]
};

// 高山滑雪系数
export const ALPINE_COEFFICIENTS = {
  A: 1.0,
  B: 0.6,
  C: 0.3
} as const;

// 项目系数（高山滑雪）
export const DISCIPLINE_FACTORS = {
  DH: 1250,    // 速降
  SL: 730,     // 回转
  GS: 1010,    // 大回转
  SG: 1190,    // 超级大回转
  AC: 1360     // 全能
} as const;

// 统计数据
export const mockStatistics = {
  totalAthletes: 1247,
  activeAthletes: 563,
  totalCompetitions: 156,
  byProvince: {
    '黑龙江': 145,
    '吉林': 123,
    '北京': 98,
    '河北': 87,
    '新疆': 65,
    '内蒙古': 54,
    '其他': 675
  },
  bySport: {
    [SportType.SNOWBOARD_SLOPESTYLE_BIGAIR]: 298,
    [SportType.SNOWBOARD_PARALLEL]: 187,
    [SportType.FREESTYLE_SLOPESTYLE_BIGAIR]: 234,
    [SportType.ALPINE_SKI]: 528
  },
  byUSeries: {
    U12: 156,
    U15: 234,
    U18: 298,
    成年组: 559
  }
};

export { SPORT_NAMES };