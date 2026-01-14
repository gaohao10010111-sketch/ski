/**
 * 总积分排名静态数据（按项目和子项分类）
 * 自动生成，请勿手动修改
 * 生成时间: 2026-01-14T11:56:33.478Z
 */

export interface PointsBreakdownItem {
  competition: string;
  location: string;
  points: number;
  rank: number;
}

export interface TotalRankingItem {
  rank: number;
  athleteId: string;
  athleteName: string;
  team: string;
  totalPoints: number;
  competitionCount: number;
  bestRank: number;
  avgPoints: number;
  ageGroup: string;
  gender: string;
  rankChange: number | null;  // 排名变化：正数=上升，负数=下降，0=持平，null=新进榜
  pointsBreakdown: PointsBreakdownItem[];
}

export interface SubEventRankings {
  discipline: string;
  ageGroup: string;
  gender: string;
  subEventName: string;
  rankings: TotalRankingItem[];
  total: number;
}

export interface SportRankings {
  sportType: string;
  sportName: string;
  subEventRankings: SubEventRankings[];
  total: number;
}

export interface TotalRankingsData {
  sportRankings: SportRankings[];
  rankings: TotalRankingItem[];  // 兼容旧格式
  total: number;
  filters: {
    ageGroups: string[];
    genders: string[];
    disciplines: string[];
    locations: string[];
    sportTypes: { value: string; label: string }[];
  };
  stats: {
    athleteCount: number;
    competitionCount: number;
    totalResults: number;
  };
  generatedAt: string;
}

export const totalRankingsData: TotalRankingsData = {
  "sportRankings": [
    {
      "sportType": "alpine",
      "sportName": "高山滑雪",
      "subEventRankings": [
        {
          "discipline": "回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "回转 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkqp00kcbfho4at9jl9k",
              "athleteName": "赵酌",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkqs00kfbfhoekaf7a8k",
              "athleteName": "竹禹丞",
              "team": "成都热雪奇迹",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkqv00kibfhosfplepf9",
              "athleteName": "苏一豪",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkqy00klbfho0qckaxmt",
              "athleteName": "于镇赫",
              "team": "成都热雪奇迹",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            }
          ],
          "total": 4
        },
        {
          "discipline": "回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "回转 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkq000jrbfhovq39ke3q",
              "athleteName": "李若瑜",
              "team": "中关村一小",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkq400jubfhoejwo7naf",
              "athleteName": "罗暄晴",
              "team": "成都热雪奇迹",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkq700jxbfhog679cr7g",
              "athleteName": "吴凌萱",
              "team": "华发冰雪热雪奇迹",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkqb00k0bfhow3hoof01",
              "athleteName": "蔡沛琳",
              "team": "成都热雪奇迹",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkqe00k3bfhoo18nnq3z",
              "athleteName": "李昊汐",
              "team": "西安热雪奇迹",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkqi00k6bfhotz0ghplg",
              "athleteName": "吴玟颐",
              "team": "华发冰雪热雪奇迹",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkql00k9bfhodvj2cshf",
              "athleteName": "卢彦伊",
              "team": "成都热雪奇迹",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            }
          ],
          "total": 7
        },
        {
          "discipline": "回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "回转 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkri00l3bfhogfhne4tr",
              "athleteName": "肖瑞林",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkrm00l6bfho179zhn19",
              "athleteName": "刘彦钧凯",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkrp00l9bfhoebj1petm",
              "athleteName": "黄子歌",
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkrt00lcbfhofvlcdm8r",
              "athleteName": "王梓丞",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkrw00lfbfhonz2a0d3b",
              "athleteName": "吕浩源",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdks000libfhouk369qbh",
              "athleteName": "林朗",
              "team": "哈尔滨热雪奇迹",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            }
          ],
          "total": 6
        },
        {
          "discipline": "回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "回转 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkr100kobfhorssp9cun",
              "athleteName": "张雨馨",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkr500krbfhoaxpqfzp4",
              "athleteName": "杨子骞",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkr800kubfho15rzjdm7",
              "athleteName": "罗梓瑜",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkrb00kxbfhoqtbsgmzj",
              "athleteName": "张雅琪",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkrf00l0bfhoi24xpm3k",
              "athleteName": "陈奕霏",
              "team": "个人",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            }
          ],
          "total": 5
        },
        {
          "discipline": "回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "回转 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkp000ixbfhoom4nz6ao",
              "athleteName": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkp300j0bfhohn94zbb3",
              "athleteName": "艾思铭",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkp700j3bfhoni6zgejk",
              "athleteName": "高琦硕",
              "team": "高峰",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkpa00j6bfholp1nby8r",
              "athleteName": "郭一远",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkpd00j9bfho5ceqs1fb",
              "athleteName": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkph00jcbfho8tsz6f9a",
              "athleteName": "左子正",
              "team": "左子正",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkpk00jfbfhoiy6rykkw",
              "athleteName": "常冠廷",
              "team": "吉林市丰满区滑雪协会",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkpp00jibfho6rmhufv0",
              "athleteName": "王冠霖",
              "team": "吉林坤伦滑雪俱乐部",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkpt00jlbfho1kgjxby2",
              "athleteName": "王宏轩",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkpw00jobfho96ief0p6",
              "athleteName": "马健剀",
              "team": "吉林坤伦滑雪俱乐部",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            }
          ],
          "total": 10
        },
        {
          "discipline": "回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "回转 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkop00iobfhokthvam34",
              "athleteName": "李金润",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkot00irbfhoyhtlvzya",
              "athleteName": "杨蓝戈",
              "team": "个人",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkow00iubfhojkdi817d",
              "athleteName": "庞予涵",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            }
          ],
          "total": 3
        },
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "大回转 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkqp00kcbfho4at9jl9k",
              "athleteName": "赵酌",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkqv00kibfhosfplepf9",
              "athleteName": "苏一豪",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkto00n5bfho4j8lt3fl",
              "athleteName": "郑捷铭",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkqs00kfbfhoekaf7a8k",
              "athleteName": "竹禹丞",
              "team": "成都热雪奇迹",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdktv00nabfhomuj9q4hs",
              "athleteName": "杨宗葆",
              "team": "个人",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkqy00klbfho0qckaxmt",
              "athleteName": "于镇赫",
              "team": "成都热雪奇迹",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdku000nfbfhod6ac8ew5",
              "athleteName": "冯一晗",
              "team": "成都热雪奇迹",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdku400nibfholr4qu1hr",
              "athleteName": "顾羽宸",
              "team": "成都热雪奇迹",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            }
          ],
          "total": 8
        },
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "大回转 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkq000jrbfhovq39ke3q",
              "athleteName": "李若瑜",
              "team": "中关村一小",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkqb00k0bfhow3hoof01",
              "athleteName": "蔡沛琳",
              "team": "成都热雪奇迹",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkq700jxbfhog679cr7g",
              "athleteName": "吴凌萱",
              "team": "华发冰雪热雪奇迹",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkqe00k3bfhoo18nnq3z",
              "athleteName": "李昊汐",
              "team": "西安热雪奇迹",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkq400jubfhoejwo7naf",
              "athleteName": "罗暄晴",
              "team": "成都热雪奇迹",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkqi00k6bfhotz0ghplg",
              "athleteName": "吴玟颐",
              "team": "华发冰雪热雪奇迹",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkql00k9bfhodvj2cshf",
              "athleteName": "卢彦伊",
              "team": "成都热雪奇迹",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            }
          ],
          "total": 7
        },
        {
          "discipline": "大回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "大回转 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkrp00l9bfhoebj1petm",
              "athleteName": "黄子歌",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkul00nybfhosbxa0gbd",
              "athleteName": "张芝豪",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkrm00l6bfho179zhn19",
              "athleteName": "刘彦钧凯",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkri00l3bfhogfhne4tr",
              "athleteName": "肖瑞林",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkrw00lfbfhonz2a0d3b",
              "athleteName": "吕浩源",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdks000libfhouk369qbh",
              "athleteName": "林朗",
              "team": "哈尔滨热雪奇迹",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkrt00lcbfhofvlcdm8r",
              "athleteName": "王梓丞",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkuz00obbfho0os6d2tq",
              "athleteName": "肖辰俊熙",
              "team": "成都热雪奇迹",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkv200oebfhojl3ujfok",
              "athleteName": "何心远",
              "team": "成都热雪奇迹",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            }
          ],
          "total": 9
        },
        {
          "discipline": "大回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "大回转 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkr100kobfhorssp9cun",
              "athleteName": "张雨馨",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkr800kubfho15rzjdm7",
              "athleteName": "罗梓瑜",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkr500krbfhoaxpqfzp4",
              "athleteName": "杨子骞",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkue00nrbfhoad1f9vqw",
              "athleteName": "叶涵汐",
              "team": "成都热雪奇迹",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkrb00kxbfhoqtbsgmzj",
              "athleteName": "张雅琪",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            }
          ],
          "total": 5
        },
        {
          "discipline": "大回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "大回转 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkpd00j9bfho5ceqs1fb",
              "athleteName": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkp700j3bfhoni6zgejk",
              "athleteName": "高琦硕",
              "team": "高峰",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkpa00j6bfholp1nby8r",
              "athleteName": "郭一远",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkp000ixbfhoom4nz6ao",
              "athleteName": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdksr00m8bfhorh0gxvtl",
              "athleteName": "李彦博",
              "team": "四川体育职业学院",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkp300j0bfhohn94zbb3",
              "athleteName": "艾思铭",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkph00jcbfho8tsz6f9a",
              "athleteName": "左子正",
              "team": "左子正",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkpk00jfbfhoiy6rykkw",
              "athleteName": "常冠廷",
              "team": "吉林市丰满区滑雪协会",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdksz00mhbfhojzwb0bac",
              "athleteName": "李京和",
              "team": "个人",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkt300mkbfhogytw8qz1",
              "athleteName": "熊泽瑞",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            }
          ],
          "total": 10
        },
        {
          "discipline": "大回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "大回转 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkop00iobfhokthvam34",
              "athleteName": "李金润",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkow00iubfhojkdi817d",
              "athleteName": "庞予涵",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkot00irbfhoyhtlvzya",
              "athleteName": "杨蓝戈",
              "team": "个人",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdks900lrbfho41ykduoi",
              "athleteName": "周昱含",
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdksc00lubfho18uchde6",
              "athleteName": "杨睿怡",
              "team": "华发冰雪热雪奇迹",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdksg00lxbfhopa5j9xjd",
              "athleteName": "刘子歌",
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            }
          ],
          "total": 6
        }
      ],
      "total": 80
    },
    {
      "sportType": "snowboard-slopestyle-bigair",
      "sportName": "单板坡面障碍技巧/大跳台",
      "subEventRankings": [
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkm300gibfhob9a22der",
              "athleteName": "刘翰泽",
              "team": "个人",
              "totalPoints": 720,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "athlete-刘沐泽-个人",
              "athleteName": "刘沐泽",
              "team": "个人",
              "totalPoints": 583,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 291.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkm700glbfhoigv6cvu9",
              "athleteName": "王祖安",
              "team": "河南省体育局",
              "totalPoints": 555,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 277.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "athlete-王瞾霖-河南省体育局",
              "athleteName": "王瞾霖",
              "team": "河南省体育局",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "athlete-闵家蕴-个人",
              "athleteName": "闵家蕴",
              "team": "个人",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdl5y00xbbfhos8fn9jes",
              "athleteName": "戴宸熠",
              "team": "个人",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdl6100xebfhoyxhqpnwq",
              "athleteName": "范家睿",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkme00grbfhokxgnro49",
              "athleteName": "范天成",
              "team": "个人",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdl6400xhbfhoxutlhyxn",
              "athleteName": "赵一翔",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "athlete-宋知敏-个人",
              "athleteName": "宋知敏",
              "team": "个人",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdl6700xkbfhog299ru7s",
              "athleteName": "王梓铭",
              "team": "个人",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdl6b00xnbfhodbirxnv7",
              "athleteName": "翁晨皓",
              "team": "个人",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkmk00gxbfho34o28xv8",
              "athleteName": "赵严诺",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdl6e00xqbfhoshn2l5ll",
              "athleteName": "侯胤翔",
              "team": "四川体育职业学院",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-方柏尧-个人",
              "athleteName": "方柏尧",
              "team": "个人",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdl6h00xtbfhod637cmn5",
              "athleteName": "周珈禾",
              "team": "黑龙江冰雪体育职业学院",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-王睿文-Criss-Crew",
              "athleteName": "王睿文",
              "team": "Criss Crew",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdl6l00xwbfhowjl65bn5",
              "athleteName": "林佳易",
              "team": "哈尔滨市冬季运动与水上运动中心",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdkly00gfbfhof1a75ldx",
              "athleteName": "陈宇垚",
              "team": "四川体育职业学院",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdl6o00xzbfhoj6u9bsim",
              "athleteName": "王泊文",
              "team": "个人",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "athlete-曾云泽-New-team",
              "athleteName": "曾云泽",
              "team": "New team",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdl6r00y2bfhojet9qq4z",
              "athleteName": "杨翔宇",
              "team": "个人",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 23,
              "athleteId": "athlete-刘桐朔-石家庄市冰雪与足球运动中心",
              "athleteName": "刘桐朔",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 24,
              "athleteId": "cmjzpdl6v00y5bfhoikyoooch",
              "athleteName": "刘泽琛",
              "team": "哈尔滨市冬季运动与水上运动中心",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 25,
              "athleteId": "athlete-监柏霖-个人",
              "athleteName": "监柏霖",
              "team": "个人",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 26,
              "athleteId": "cmjzpdl6y00y8bfho0nmikypo",
              "athleteName": "蒲彦西",
              "team": "个人",
              "totalPoints": 142,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 142,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 142,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 27,
              "athleteId": "athlete-王霖逸-个人",
              "athleteName": "王霖逸",
              "team": "个人",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 28,
              "athleteId": "cmjzpdl7100ybbfhoo3p1hnvm",
              "athleteName": "王梓伊",
              "team": "个人",
              "totalPoints": 135,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 135,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 135,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 29,
              "athleteId": "cmjzpdkmo00h0bfho8q8f5myc",
              "athleteName": "魏子博",
              "team": "河南省体育局",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 30,
              "athleteId": "cmjzpdl7500yebfhon5cb75ux",
              "athleteName": "冯翊瀚",
              "team": "个人",
              "totalPoints": 129,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 129,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 129,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 31,
              "athleteId": "athlete-褚天羿-Star单板队",
              "athleteName": "褚天羿",
              "team": "Star单板队",
              "totalPoints": 127,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 127,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 32,
              "athleteId": "athlete-蒋桨-个人",
              "athleteName": "蒋桨",
              "team": "个人",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 33,
              "athleteId": "athlete-陶志伟-山西省冰雪运动中心",
              "athleteName": "陶志伟",
              "team": "山西省冰雪运动中心",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            },
            {
              "rank": 34,
              "athleteId": "cmjzpdlbz0121bfhoofrhg803",
              "athleteName": "曾星越",
              "team": "个人",
              "totalPoints": 110,
              "competitionCount": 1,
              "bestRank": 20,
              "avgPoints": 110,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 110,
                  "rank": 20
                }
              ]
            },
            {
              "rank": 35,
              "athleteId": "athlete-孙翎皓-Criss-Crew",
              "athleteName": "孙翎皓",
              "team": "Criss Crew",
              "totalPoints": 105,
              "competitionCount": 1,
              "bestRank": 21,
              "avgPoints": 105,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 105,
                  "rank": 21
                }
              ]
            },
            {
              "rank": 36,
              "athleteId": "cmjzpdkmr00h3bfhom6eectsq",
              "athleteName": "石昊桐",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 100,
              "competitionCount": 1,
              "bestRank": 22,
              "avgPoints": 100,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 100,
                  "rank": 22
                }
              ]
            },
            {
              "rank": 37,
              "athleteId": "cmjzpdlcg012dbfho7kz6iwv3",
              "athleteName": "林芮锋",
              "team": "四川体育职业学院",
              "totalPoints": 95,
              "competitionCount": 1,
              "bestRank": 23,
              "avgPoints": 95,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 95,
                  "rank": 23
                }
              ]
            },
            {
              "rank": 38,
              "athleteId": "athlete-刘音里-个人",
              "athleteName": "刘音里",
              "team": "个人",
              "totalPoints": 91,
              "competitionCount": 1,
              "bestRank": 24,
              "avgPoints": 91,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 91,
                  "rank": 24
                }
              ]
            },
            {
              "rank": 39,
              "athleteId": "athlete-马铂淙-个人",
              "athleteName": "马铂淙",
              "team": "个人",
              "totalPoints": 87,
              "competitionCount": 1,
              "bestRank": 25,
              "avgPoints": 87,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 87,
                  "rank": 25
                }
              ]
            },
            {
              "rank": 40,
              "athleteId": "athlete-张哲朗-个人",
              "athleteName": "张哲朗",
              "team": "个人",
              "totalPoints": 83,
              "competitionCount": 1,
              "bestRank": 26,
              "avgPoints": 83,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 83,
                  "rank": 26
                }
              ]
            }
          ],
          "total": 40
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkjq00f0bfho7lddp0tk",
              "athleteName": "牛安芷芸",
              "team": "个人",
              "totalPoints": 663,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 331.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkjm00exbfhon8q764e7",
              "athleteName": "孙嘉怡",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 609,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 304.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkkf00ffbfhovtl6y82z",
              "athleteName": "翟姝涵",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 437,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 218.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "athlete-杨舒雅-个人",
              "athleteName": "杨舒雅",
              "team": "个人",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "athlete-陈松妤-个人",
              "athleteName": "陈松妤",
              "team": "个人",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdl3v00vnbfhosnyeji4m",
              "athleteName": "姜子悦",
              "team": "个人",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdl3y00vqbfho1jpzm9my",
              "athleteName": "王迎紫",
              "team": "四川体育职业学院",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-周子钰-山西省冰雪运动中心",
              "athleteName": "周子钰",
              "team": "山西省冰雪运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdl4100vtbfhodt352vf0",
              "athleteName": "傅诗宸",
              "team": "个人",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "athlete-宋佳诺-Criss-Crew",
              "athleteName": "宋佳诺",
              "team": "Criss Crew",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdl4500vwbfhof9h7fpmt",
              "athleteName": "郭涵钰",
              "team": "个人",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdkk000f6bfho8me6szz1",
              "athleteName": "张诗涵",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdl4900vzbfhonmuyxvkn",
              "athleteName": "张曦彤",
              "team": "个人",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdkjw00f3bfhoswtiqk6b",
              "athleteName": "周斯言",
              "team": "个人",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdl4c00w2bfhokl4nmyi0",
              "athleteName": "张瑾苒",
              "team": "内蒙古体育职业学院",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "athlete-颜嘉懿-个人",
              "athleteName": "颜嘉懿",
              "team": "个人",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-郭芮溪-个人",
              "athleteName": "郭芮溪",
              "team": "个人",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdkkk00fibfhornkfaegp",
              "athleteName": "蒋柠萱",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "athlete-张迦淳-个人",
              "athleteName": "张迦淳",
              "team": "个人",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "athlete-周若慈-个人",
              "athleteName": "周若慈",
              "team": "个人",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "athlete-马珞恩-个人",
              "athleteName": "马珞恩",
              "team": "个人",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "athlete-杨茗然-个人",
              "athleteName": "杨茗然",
              "team": "个人",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            }
          ],
          "total": 22
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "athlete-谭凯元-个人",
              "athleteName": "谭凯元",
              "team": "个人",
              "totalPoints": 663,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 331.5,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkmy00h9bfho81478919",
              "athleteName": "王恒宇",
              "team": "个人",
              "totalPoints": 658,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkn100hcbfho2br834hq",
              "athleteName": "袁梓程",
              "team": "四川体育职业学院",
              "totalPoints": 602,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 301,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "athlete-郭展麟-黑龙江省雪上训练中心",
              "athleteName": "郭展麟",
              "team": "黑龙江省雪上训练中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdl7j00yqbfho51mw9qqo",
              "athleteName": "李奕泽",
              "team": "个人",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkn800hibfho8h61j0ao",
              "athleteName": "刘子俊",
              "team": "四川体育职业学院",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdl7n00ytbfhovb95z3d0",
              "athleteName": "吴昊隆",
              "team": "哈尔滨市冬季运动与水上运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-王浩臣-Star单板队",
              "athleteName": "王浩臣",
              "team": "Star单板队",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdl7q00ywbfhorj0y439x",
              "athleteName": "王小虎",
              "team": "哈尔滨市冬季运动与水上运动中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdl7t00yzbfho1iuq4hpl",
              "athleteName": "张子骁",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-孙晨曦-河北省体育局冬季运动中心",
              "athleteName": "孙晨曦",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdl7x00z2bfhoq20wf501",
              "athleteName": "申桐",
              "team": "沈阳体育学院",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "athlete-郭彧铭-个人",
              "athleteName": "郭彧铭",
              "team": "个人",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdl8000z5bfhof416yoli",
              "athleteName": "霍圣康",
              "team": "个人",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdknb00hlbfhoeja6849z",
              "athleteName": "张家睿",
              "team": "四川体育职业学院",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdl8300z8bfhoclhueadd",
              "athleteName": "曾国强",
              "team": "个人",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-张钊宁-重庆市冬季运动管理中心",
              "athleteName": "张钊宁",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdl8700zbbfhohn1861h0",
              "athleteName": "孙琪翔",
              "team": "哈尔滨市冬季运动与水上运动中心",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdknf00hobfho0vnutqs9",
              "athleteName": "高翊博",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdl8b00zebfhoaawem8yw",
              "athleteName": "李星翰",
              "team": "沈阳体育学院",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "cmjzpdknm00hubfho7bvsgi98",
              "athleteName": "梁嘉俊",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdl8f00zhbfho8fu1sd6q",
              "athleteName": "刘济豪",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 23,
              "athleteId": "athlete-梁明峰-山西省冰雪运动中心",
              "athleteName": "梁明峰",
              "team": "山西省冰雪运动中心",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 24,
              "athleteId": "cmjzpdl8j00zkbfhohoc9ab91",
              "athleteName": "贺天佑",
              "team": "四川体育职业学院",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 25,
              "athleteId": "athlete-冯思源-个人",
              "athleteName": "冯思源",
              "team": "个人",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 26,
              "athleteId": "cmjzpdl8n00znbfhovc4w60l6",
              "athleteName": "陈宥呈",
              "team": "个人",
              "totalPoints": 142,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 142,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 142,
                  "rank": 15
                }
              ]
            }
          ],
          "total": 26
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkkt00fobfhovt7it0m5",
              "athleteName": "鱼嘉怡",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 720,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdklb00g0bfhoygeoy8ua",
              "athleteName": "赖文悦",
              "team": "四川体育职业学院",
              "totalPoints": 456,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 228,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "athlete-张诗蕊-四川体育职业学院",
              "athleteName": "张诗蕊",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkkx00frbfhonb81p7bu",
              "athleteName": "叶欣瑞",
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "athlete-曾梓萱-四川体育职业学院",
              "athleteName": "曾梓萱",
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdl4r00webfho0i331lns",
              "athleteName": "鲁淼",
              "team": "个人",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "athlete-张依冉-山西省冰雪运动中心",
              "athleteName": "张依冉",
              "team": "山西省冰雪运动中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdl4v00whbfhoqb4c47yx",
              "athleteName": "刘心雅",
              "team": "个人",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "athlete-杜雨欣-四川体育职业学院",
              "athleteName": "杜雨欣",
              "team": "四川体育职业学院",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdl5000wkbfhocx121wgy",
              "athleteName": "王雪宸",
              "team": "长春市冬季运动管理中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-郭婉诗-山西省冰雪运动中心",
              "athleteName": "郭婉诗",
              "team": "山西省冰雪运动中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdl5400wnbfhonij1rfxe",
              "athleteName": "何芷昕",
              "team": "个人",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "athlete-贺舒玉-重庆市冬季运动管理中心",
              "athleteName": "贺舒玉",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdl5700wqbfhokaor4wmd",
              "athleteName": "包雨彤",
              "team": "沈阳体育学院",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-张潇然-山西省冰雪运动中心",
              "athleteName": "张潇然",
              "team": "山西省冰雪运动中心",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdl5b00wtbfhok8xo24ek",
              "athleteName": "栾智媛",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-刘霓霏-个人",
              "athleteName": "刘霓霏",
              "team": "个人",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdl5f00wwbfhoxyrpjrpk",
              "athleteName": "刘宣成",
              "team": "个人",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "athlete-张淑雅-山西省冰雪运动中心",
              "athleteName": "张淑雅",
              "team": "山西省冰雪运动中心",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdl5j00wzbfho4iy8wvyi",
              "athleteName": "王籽童",
              "team": "辽宁省体育事业发展中心",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "athlete-张益嘉-河南省体育局",
              "athleteName": "张益嘉",
              "team": "河南省体育局",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdklg00g3bfhopeqe1sgz",
              "athleteName": "周雨辰",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 23,
              "athleteId": "cmjzpdkl100fubfho8tg9xa1r",
              "athleteName": "杨可轩",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 24,
              "athleteId": "cmjzpdklq00g9bfhoyym4yvox",
              "athleteName": "周雨欣",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 25,
              "athleteId": "athlete-高艺轩-个人",
              "athleteName": "高艺轩",
              "team": "个人",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 26,
              "athleteId": "cmjzpdklu00gcbfhoyosgjvcs",
              "athleteName": "苏常格",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 27,
              "athleteId": "athlete-王若西-重庆市冬季运动管理中心",
              "athleteName": "王若西",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 28,
              "athleteId": "athlete-王玮怡-个人",
              "athleteName": "王玮怡",
              "team": "个人",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            }
          ],
          "total": 28
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdko000i6bfho6pikfiix",
              "athleteName": "李俊辛",
              "team": "四川体育职业学院",
              "totalPoints": 720,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "athlete-封树渝-重庆市冬季运动管理中心",
              "athleteName": "封树渝",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 632,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 316,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdko400i9bfhoakuixeat",
              "athleteName": "米馥豪",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 502,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 251,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "athlete-陈珉在-四川体育职业学院",
              "athleteName": "陈珉在",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdl9100zzbfhoe6g8bjfo",
              "athleteName": "李俣辛",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-袁嘉伟-湖北省武术和冬季运动管理中心",
              "athleteName": "袁嘉伟",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdl950102bfho492pljcc",
              "athleteName": "冯晨峰",
              "team": "沈阳体育学院",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkoc00ifbfhogzsxfk2n",
              "athleteName": "黄子剑",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdl980105bfhowaz22rhr",
              "athleteName": "耿浩然",
              "team": "长春市冬季运动管理中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkog00iibfhotxzpqno2",
              "athleteName": "倪文凯",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdl9c0108bfhobi5x26qe",
              "athleteName": "李汶轩",
              "team": "长春市冬季运动管理中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "athlete-吴海鑫-湖北省武术和冬季运动管理中心",
              "athleteName": "吴海鑫",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkzy00s8bfhoiv0z32ls",
              "athleteName": "田嘉译",
              "team": "沈阳体育学院",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-何鲲鹏-湖北省武术和冬季运动管理中心",
              "athleteName": "何鲲鹏",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-赵开元-湖北省武术和冬季运动管理中心",
              "athleteName": "赵开元",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "athlete-杨峻溪-个人",
              "athleteName": "杨峻溪",
              "team": "个人",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-李智贤-湖北省武术和冬季运动管理中心",
              "athleteName": "李智贤",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            }
          ],
          "total": 17
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "大跳台 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkm300gibfhob9a22der",
              "athleteName": "刘翰泽",
              "team": "个人",
              "totalPoints": 689,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 344.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkm700glbfhoigv6cvu9",
              "athleteName": "王祖安",
              "team": "河南省体育局",
              "totalPoints": 606,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkme00grbfhokxgnro49",
              "athleteName": "范天成",
              "team": "个人",
              "totalPoints": 589,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 294.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkly00gfbfhof1a75ldx",
              "athleteName": "陈宇垚",
              "team": "四川体育职业学院",
              "totalPoints": 465,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 232.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 105,
                  "rank": 21
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkmo00h0bfho8q8f5myc",
              "athleteName": "魏子博",
              "team": "河南省体育局",
              "totalPoints": 454,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 227,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkmr00h3bfhom6eectsq",
              "athleteName": "石昊桐",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 386,
              "competitionCount": 2,
              "bestRank": 9,
              "avgPoints": 193,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkmk00gxbfho34o28xv8",
              "athleteName": "赵严诺",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 383,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 191.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-刘沐泽-个人",
              "athleteName": "刘沐泽",
              "team": "个人",
              "totalPoints": 337,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 168.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 95,
                  "rank": 23
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdlbz0121bfhoofrhg803",
              "athleteName": "曾星越",
              "team": "个人",
              "totalPoints": 317,
              "competitionCount": 2,
              "bestRank": 11,
              "avgPoints": 158.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 176,
                  "rank": 11
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkma00gobfhoa7jwls5r",
              "athleteName": "王曌霖",
              "team": "河南省体育局",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-曾云泽-New-team",
              "athleteName": "曾云泽",
              "team": "New team",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "athlete-方柏尧-个人",
              "athleteName": "方柏尧",
              "team": "个人",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdlcg012dbfho7kz6iwv3",
              "athleteName": "林芮锋",
              "team": "四川体育职业学院",
              "totalPoints": 241,
              "competitionCount": 2,
              "bestRank": 15,
              "avgPoints": 120.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 141,
                  "rank": 15
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 100,
                  "rank": 22
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-蒋桨-个人",
              "athleteName": "蒋桨",
              "team": "个人",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-褚天羿-Star单板队",
              "athleteName": "褚天羿",
              "team": "Star单板队",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "athlete-王瞾霖-河南省体育局",
              "athleteName": "王瞾霖",
              "team": "河南省体育局",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdkmu00h6bfhoz183j346",
              "athleteName": "宁浩然",
              "team": "成都热雪奇迹",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "athlete-监柏霖-个人",
              "athleteName": "监柏霖",
              "team": "个人",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdlc30124bfho0cnhg41y",
              "athleteName": "马泰铭",
              "team": "成都热雪奇迹",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "athlete-陶志伟-山西省冰雪运动中心",
              "athleteName": "陶志伟",
              "team": "山西省冰雪运动中心",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "cmjzpdlc90127bfho5v74jhb5",
              "athleteName": "程锦辰",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdlcc012abfhogtiodmxg",
              "athleteName": "朱秋霖",
              "team": "个人",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 23,
              "athleteId": "athlete-张哲朗-个人",
              "athleteName": "张哲朗",
              "team": "个人",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 24,
              "athleteId": "athlete-马铂淙-个人",
              "athleteName": "马铂淙",
              "team": "个人",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 25,
              "athleteId": "athlete-刘桐朔-石家庄市冰雪与足球运动中心",
              "athleteName": "刘桐朔",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 127,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 127,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 26,
              "athleteId": "athlete-刘音里-个人",
              "athleteName": "刘音里",
              "team": "个人",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 27,
              "athleteId": "athlete-王睿文-Criss-Crew",
              "athleteName": "王睿文",
              "team": "Criss Crew",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            },
            {
              "rank": 28,
              "athleteId": "athlete-孙翎皓-Criss-Crew",
              "athleteName": "孙翎皓",
              "team": "Criss Crew",
              "totalPoints": 110,
              "competitionCount": 1,
              "bestRank": 20,
              "avgPoints": 110,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 110,
                  "rank": 20
                }
              ]
            }
          ],
          "total": 28
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "大跳台 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkjm00exbfhon8q764e7",
              "athleteName": "孙嘉怡",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 620,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 310,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkjq00f0bfho7lddp0tk",
              "athleteName": "牛安芷芸",
              "team": "个人",
              "totalPoints": 571,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 285.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkjw00f3bfhoswtiqk6b",
              "athleteName": "周斯言",
              "team": "个人",
              "totalPoints": 490,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 245,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkk000f6bfho8me6szz1",
              "athleteName": "张诗涵",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 479,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 239.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkkk00fibfhornkfaegp",
              "athleteName": "蒋柠萱",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 424,
              "competitionCount": 2,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkkf00ffbfhovtl6y82z",
              "athleteName": "翟姝涵",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 383,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 191.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "athlete-杨茗然-个人",
              "athleteName": "杨茗然",
              "team": "个人",
              "totalPoints": 376,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 188,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-陈松妤-个人",
              "athleteName": "陈松妤",
              "team": "个人",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "athlete-杨舒雅-个人",
              "athleteName": "杨舒雅",
              "team": "个人",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "athlete-宋佳诺-Criss-Crew",
              "athleteName": "宋佳诺",
              "team": "Criss Crew",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-颜嘉懿-个人",
              "athleteName": "颜嘉懿",
              "team": "个人",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdkk700f9bfhoa69ugr1p",
              "athleteName": "姚予希",
              "team": "成都热雪奇迹",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "athlete-周子钰-山西省冰雪运动中心",
              "athleteName": "周子钰",
              "team": "山西省冰雪运动中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdkkp00flbfho4fw9ataz",
              "athleteName": "冷昕莲",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-周若慈-个人",
              "athleteName": "周若慈",
              "team": "个人",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "athlete-张迦淳-个人",
              "athleteName": "张迦淳",
              "team": "个人",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-郭芮溪-个人",
              "athleteName": "郭芮溪",
              "team": "个人",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "athlete-马珞恩-个人",
              "athleteName": "马珞恩",
              "team": "个人",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            }
          ],
          "total": 18
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "大跳台 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkmy00h9bfho81478919",
              "athleteName": "王恒宇",
              "team": "个人",
              "totalPoints": 720,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkn100hcbfho2br834hq",
              "athleteName": "袁梓程",
              "team": "四川体育职业学院",
              "totalPoints": 632,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 316,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "athlete-谭凯元-个人",
              "athleteName": "谭凯元",
              "team": "个人",
              "totalPoints": 583,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 291.5,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdknb00hlbfhoeja6849z",
              "athleteName": "张家睿",
              "team": "四川体育职业学院",
              "totalPoints": 502,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 251,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkn800hibfho8h61j0ao",
              "athleteName": "刘子俊",
              "team": "四川体育职业学院",
              "totalPoints": 479,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 239.5,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-郭彧铭-个人",
              "athleteName": "郭彧铭",
              "team": "个人",
              "totalPoints": 438,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 219,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdknm00hubfho7bvsgi98",
              "athleteName": "梁嘉俊",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 438,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 219,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdknf00hobfho0vnutqs9",
              "athleteName": "高翊博",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 429,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 214.5,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "athlete-张钊宁-重庆市冬季运动管理中心",
              "athleteName": "张钊宁",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 333,
              "competitionCount": 2,
              "bestRank": 11,
              "avgPoints": 166.5,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 157,
                  "rank": 13
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "athlete-王浩臣-Star单板队",
              "athleteName": "王浩臣",
              "team": "Star单板队",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-孙晨曦-河北省体育局冬季运动中心",
              "athleteName": "孙晨曦",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdknp00hxbfho2se1dzm8",
              "athleteName": "麦冠航",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdld4012zbfhoeg1jphpu",
              "athleteName": "于瀚",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdld80132bfhoadlpmpwp",
              "athleteName": "邓与骜",
              "team": "成都热雪奇迹",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdldb0135bfhoenavjvdu",
              "athleteName": "罗知腾",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "athlete-郭展麟-黑龙江省雪上训练中心",
              "athleteName": "郭展麟",
              "team": "黑龙江省雪上训练中心",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdldi013bbfhoor5kxh26",
              "athleteName": "王天磊",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            }
          ],
          "total": 17
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "大跳台 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkkt00fobfhovt7it0m5",
              "athleteName": "鱼嘉怡",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 720,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkl100fubfho8tg9xa1r",
              "athleteName": "杨可轩",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 606,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "athlete-贺舒玉-重庆市冬季运动管理中心",
              "athleteName": "贺舒玉",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 479,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 239.5,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdklb00g0bfhoygeoy8ua",
              "athleteName": "赖文悦",
              "team": "四川体育职业学院",
              "totalPoints": 472,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 236,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdklg00g3bfhopeqe1sgz",
              "athleteName": "周雨辰",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 391,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 195.5,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-王若西-重庆市冬季运动管理中心",
              "athleteName": "王若西",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 367,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 183.5,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdklq00g9bfhoyym4yvox",
              "athleteName": "周雨欣",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 346,
              "competitionCount": 2,
              "bestRank": 8,
              "avgPoints": 173,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkkx00frbfhonb81p7bu",
              "athleteName": "叶欣瑞",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "athlete-张潇然-山西省冰雪运动中心",
              "athleteName": "张潇然",
              "team": "山西省冰雪运动中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdklu00gcbfhoyosgjvcs",
              "athleteName": "苏常格",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 326,
              "competitionCount": 2,
              "bestRank": 9,
              "avgPoints": 163,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-张淑雅-山西省冰雪运动中心",
              "athleteName": "张淑雅",
              "team": "山西省冰雪运动中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "athlete-张依冉-山西省冰雪运动中心",
              "athleteName": "张依冉",
              "team": "山西省冰雪运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "athlete-郭婉诗-山西省冰雪运动中心",
              "athleteName": "郭婉诗",
              "team": "山西省冰雪运动中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-刘霓霏-个人",
              "athleteName": "刘霓霏",
              "team": "个人",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-杜雨欣-四川体育职业学院",
              "athleteName": "杜雨欣",
              "team": "四川体育职业学院",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "athlete-曾梓萱-四川体育职业学院",
              "athleteName": "曾梓萱",
              "team": "四川体育职业学院",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-张益嘉-河南省体育局",
              "athleteName": "张益嘉",
              "team": "河南省体育局",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "athlete-张诗蕊-四川体育职业学院",
              "athleteName": "张诗蕊",
              "team": "四川体育职业学院",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            }
          ],
          "total": 18
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "大跳台 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "athlete-封树渝-重庆市冬季运动管理中心",
              "athleteName": "封树渝",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 720,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdko400i9bfhoakuixeat",
              "athleteName": "米馥豪",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 606,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdko000i6bfho6pikfiix",
              "athleteName": "李俊辛",
              "team": "四川体育职业学院",
              "totalPoints": 571,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 285.5,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkoc00ifbfhogzsxfk2n",
              "athleteName": "黄子剑",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 436,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 218,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkog00iibfhotxzpqno2",
              "athleteName": "倪文凯",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 429,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 214.5,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-陈珉在-四川体育职业学院",
              "athleteName": "陈珉在",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdko800icbfho0ujbn9cl",
              "athleteName": "罗皓桉",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-李智贤-湖北省武术和冬季运动管理中心",
              "athleteName": "李智贤",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "athlete-何鲲鹏-湖北省武术和冬季运动管理中心",
              "athleteName": "何鲲鹏",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdle0013sbfho3jgfbpad",
              "athleteName": "雷涵文",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-袁嘉伟-湖北省武术和冬季运动管理中心",
              "athleteName": "袁嘉伟",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "athlete-杨峻溪-个人",
              "athleteName": "杨峻溪",
              "team": "个人",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "athlete-吴海鑫-湖北省武术和冬季运动管理中心",
              "athleteName": "吴海鑫",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-赵开元-湖北省武术和冬季运动管理中心",
              "athleteName": "赵开元",
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            }
          ],
          "total": 14
        }
      ],
      "total": 228
    },
    {
      "sportType": "snowboard-parallel",
      "sportName": "单板平行项目",
      "subEventRankings": [
        {
          "discipline": "平行大回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "平行大回转 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdk3v001ubfhorz5wf7hs",
              "athleteName": "王一臣",
              "team": "MAYA TEAM",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdk3y001xbfhocfpqhm9n",
              "athleteName": "周翎",
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdk420020bfhodtt3x27o",
              "athleteName": "韩赫洺",
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdk450023bfhoh5itp0hi",
              "athleteName": "李承桓",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdk4a0026bfhow0uq57v3",
              "athleteName": "陈鼎钧",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdk4d0029bfhowuueorwu",
              "athleteName": "聂榕辰",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdk4h002cbfho72bud3ju",
              "athleteName": "罗晓野",
              "team": "个人",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdk4k002fbfhoetv2avcp",
              "athleteName": "薛景尧",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdk4o002ibfhom3xfw7t5",
              "athleteName": "马昊文",
              "team": "MAYA TEAM",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdk4r002lbfhoazgg5gnu",
              "athleteName": "周天朗",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdk4v002obfho9tmsoz86",
              "athleteName": "马昊迪",
              "team": "MAYA TEAM",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdk4y002rbfho4iulm870",
              "athleteName": "蒋文栋",
              "team": "MAYA TEAM",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdk52002ubfho239nfqzd",
              "athleteName": "高宇承",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdk55002xbfhookyfbfz5",
              "athleteName": "刘昱辰",
              "team": "MAYA TEAM",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdk590030bfho0px3f8sf",
              "athleteName": "张朔源",
              "team": "个人",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdk5d0033bfhoh5d8fwx8",
              "athleteName": "张睦然",
              "team": "MAYA TEAM",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdk5g0036bfhojj36lkyb",
              "athleteName": "白雨奇",
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 127,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 127,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdk5j0039bfho0a2ww5j0",
              "athleteName": "王子溪",
              "team": "KingProTeam",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdk5m003cbfhosvizw7ep",
              "athleteName": "黄益航",
              "team": "四川体育职业学院",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdk5q003fbfho5e0w98bk",
              "athleteName": "夏誉领",
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 110,
              "competitionCount": 1,
              "bestRank": 20,
              "avgPoints": 110,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 110,
                  "rank": 20
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "cmjzpdk5t003ibfhocx6w9f2u",
              "athleteName": "周豫",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 105,
              "competitionCount": 1,
              "bestRank": 21,
              "avgPoints": 105,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 105,
                  "rank": 21
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdk5w003lbfho6honytan",
              "athleteName": "张柏轩",
              "team": "MAYA TEAM",
              "totalPoints": 100,
              "competitionCount": 1,
              "bestRank": 22,
              "avgPoints": 100,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 100,
                  "rank": 22
                }
              ]
            },
            {
              "rank": 23,
              "athleteId": "cmjzpdk5z003obfhomuy5i56z",
              "athleteName": "朱朗灿",
              "team": "个人",
              "totalPoints": 95,
              "competitionCount": 1,
              "bestRank": 23,
              "avgPoints": 95,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 95,
                  "rank": 23
                }
              ]
            },
            {
              "rank": 24,
              "athleteId": "cmjzpdk62003rbfho276bqrn6",
              "athleteName": "程子航",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 91,
              "competitionCount": 1,
              "bestRank": 24,
              "avgPoints": 91,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 91,
                  "rank": 24
                }
              ]
            },
            {
              "rank": 25,
              "athleteId": "cmjzpdk65003ubfhov0tbtt6p",
              "athleteName": "聂铭熙",
              "team": "MAYA TEAM",
              "totalPoints": 87,
              "competitionCount": 1,
              "bestRank": 25,
              "avgPoints": 87,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 87,
                  "rank": 25
                }
              ]
            },
            {
              "rank": 26,
              "athleteId": "cmjzpdk69003xbfhomaabax6c",
              "athleteName": "金子彦",
              "team": "个人",
              "totalPoints": 83,
              "competitionCount": 1,
              "bestRank": 26,
              "avgPoints": 83,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 83,
                  "rank": 26
                }
              ]
            },
            {
              "rank": 27,
              "athleteId": "cmjzpdk6c0040bfhor621ft1n",
              "athleteName": "陈鑫艺",
              "team": "四川体育职业学院",
              "totalPoints": 79,
              "competitionCount": 1,
              "bestRank": 27,
              "avgPoints": 79,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 79,
                  "rank": 27
                }
              ]
            },
            {
              "rank": 28,
              "athleteId": "cmjzpdk6f0043bfhotms7f5yw",
              "athleteName": "孙奥荣",
              "team": "四川体育职业学院",
              "totalPoints": 75,
              "competitionCount": 1,
              "bestRank": 28,
              "avgPoints": 75,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 75,
                  "rank": 28
                }
              ]
            },
            {
              "rank": 29,
              "athleteId": "cmjzpdk6j0046bfhov1sarue5",
              "athleteName": "赵梓聿",
              "team": "MAYA TEAM",
              "totalPoints": 71,
              "competitionCount": 1,
              "bestRank": 29,
              "avgPoints": 71,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 71,
                  "rank": 29
                }
              ]
            },
            {
              "rank": 30,
              "athleteId": "cmjzpdk6m0049bfho5dxuehct",
              "athleteName": "闫慕垚",
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 67,
              "competitionCount": 1,
              "bestRank": 30,
              "avgPoints": 67,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 67,
                  "rank": 30
                }
              ]
            },
            {
              "rank": 31,
              "athleteId": "cmjzpdk6q004cbfhod35sxrf6",
              "athleteName": "杨滨睿",
              "team": "MAYA TEAM",
              "totalPoints": 63,
              "competitionCount": 1,
              "bestRank": 31,
              "avgPoints": 63,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 63,
                  "rank": 31
                }
              ]
            },
            {
              "rank": 32,
              "athleteId": "cmjzpdk6t004fbfhoynftnzxa",
              "athleteName": "景子融",
              "team": "中麟体育",
              "totalPoints": 59,
              "competitionCount": 1,
              "bestRank": 32,
              "avgPoints": 59,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 59,
                  "rank": 32
                }
              ]
            },
            {
              "rank": 33,
              "athleteId": "cmjzpdk6w004ibfhowp9zh349",
              "athleteName": "祖与辰",
              "team": "秦皇岛狂雪滑雪俱乐部",
              "totalPoints": 55,
              "competitionCount": 1,
              "bestRank": 33,
              "avgPoints": 55,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 55,
                  "rank": 33
                }
              ]
            },
            {
              "rank": 34,
              "athleteId": "cmjzpdk70004lbfhoemd7yndw",
              "athleteName": "吕毅",
              "team": "太原市第二少年体育学校",
              "totalPoints": 51,
              "competitionCount": 1,
              "bestRank": 34,
              "avgPoints": 51,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 51,
                  "rank": 34
                }
              ]
            },
            {
              "rank": 35,
              "athleteId": "cmjzpdk74004obfhof6076pvg",
              "athleteName": "王博晨昊",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 47,
              "competitionCount": 1,
              "bestRank": 35,
              "avgPoints": 47,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 47,
                  "rank": 35
                }
              ]
            }
          ],
          "total": 35
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "平行大回转 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdk120000bfhogt7ct1il",
              "athleteName": "李禹潭",
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdk190003bfhodyfd3ttw",
              "athleteName": "于忱汐",
              "team": "太原市第二少年体育学校",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdk1d0006bfhokdvat4q3",
              "athleteName": "肖金茂",
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdk1g0009bfhohs29gxqf",
              "athleteName": "须星漫",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdk1r000cbfho49uldr41",
              "athleteName": "古庭钰",
              "team": "中麟体育",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdk1u000fbfhou88cqxsm",
              "athleteName": "周子翕",
              "team": "成都热雪奇迹",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdk21000ibfhojbpxew23",
              "athleteName": "ALBEESU",
              "team": "张家口市足球和冰雪运动学校",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdk28000lbfhofq439jkr",
              "athleteName": "焦阳云朵",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdk2d000obfhodusp02c8",
              "athleteName": "李汶瑾",
              "team": "MAYA TEAM",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdk2g000rbfhodm7jwa0h",
              "athleteName": "朱安然",
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdk2l000ubfhoux0a5q2h",
              "athleteName": "李宛凝",
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdk2r000xbfho3kcj25v9",
              "athleteName": "刘和一",
              "team": "北京天高云淡体育有限公司",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdk2v0010bfhoaewhfwuy",
              "athleteName": "李子纯",
              "team": "个人",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdk2z0013bfho4korkuwl",
              "athleteName": "李获稻",
              "team": "成都热雪奇迹",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdk320016bfhoxp3pgkx8",
              "athleteName": "武子蓉",
              "team": "太原市第二少年体育学校",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdk360019bfho7kcuehdp",
              "athleteName": "张语珊",
              "team": "个人",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdk3a001cbfhosbj1b2bo",
              "athleteName": "李墨涵",
              "team": "中麟体育",
              "totalPoints": 127,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 127,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdk3e001fbfho3hhippx7",
              "athleteName": "李雨萱",
              "team": "个人",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdk3h001ibfho4lvkrl73",
              "athleteName": "马音霓",
              "team": "爱上雪体育产业发展（北京）有限公司",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdk3k001lbfho3ro7vqgl",
              "athleteName": "张兆檬",
              "team": "KingProTeam",
              "totalPoints": 110,
              "competitionCount": 1,
              "bestRank": 20,
              "avgPoints": 110,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 110,
                  "rank": 20
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "cmjzpdk3o001obfhodbkhcpfl",
              "athleteName": "高怡雯",
              "team": "北京天高云淡体育有限公司",
              "totalPoints": 105,
              "competitionCount": 1,
              "bestRank": 21,
              "avgPoints": 105,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 105,
                  "rank": 21
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdk3s001rbfhonoy1krhm",
              "athleteName": "周芸溪",
              "team": "MAYA TEAM",
              "totalPoints": 100,
              "competitionCount": 1,
              "bestRank": 22,
              "avgPoints": 100,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 100,
                  "rank": 22
                }
              ]
            }
          ],
          "total": 22
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "平行大回转 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkad007fbfho5yptlw6j",
              "athleteName": "高佳钇",
              "team": "速森体育",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkah007ibfhoakn9j359",
              "athleteName": "陈清桦",
              "team": "MAYA TEAM",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkak007lbfho9nwb723l",
              "athleteName": "张雨曈",
              "team": "MAYA TEAM",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkan007obfhov8p3d9ke",
              "athleteName": "贾子一南",
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkar007rbfhoke7nk1ap",
              "athleteName": "李天圆",
              "team": "MAYA TEAM",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkav007ubfho0ossatdk",
              "athleteName": "王子兮",
              "team": "四川体育职业学院",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkay007xbfhogkqgc8hp",
              "athleteName": "阿琪勒图",
              "team": "内蒙古嘉灏体育",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkb20080bfhokp36urcp",
              "athleteName": "叶庆安",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkb50083bfhoc0bflgh2",
              "athleteName": "高琢皓",
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkb80086bfhocqooy0qe",
              "athleteName": "马赛",
              "team": "四川体育职业学院",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdkbc0089bfhow3t9kyiy",
              "athleteName": "徐承昊",
              "team": "上海市静安区滑雪协会",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdkbg008cbfhoy1byx6zt",
              "athleteName": "刘宸卓",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkbi008fbfhogpqphcae",
              "athleteName": "吉淏辰",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdkbm008ibfhod1hwvi59",
              "athleteName": "邢子瀚",
              "team": "纳西亚",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdkbq008lbfhoegwsywal",
              "athleteName": "于谨赫",
              "team": "速森体育",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdkbu008obfhondaq2opk",
              "athleteName": "刘哲鸣",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdkbx008rbfho8v83oc7a",
              "athleteName": "孙屹卓",
              "team": "MAYA TEAM",
              "totalPoints": 127,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 127,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdkc1008ubfho003mc70z",
              "athleteName": "嘎日玛盖",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdkc4008xbfhoyml7rqhz",
              "athleteName": "崔承泽",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdkc80090bfhouqhl68vg",
              "athleteName": "王子嘉",
              "team": "内蒙古嘉灏体育",
              "totalPoints": 110,
              "competitionCount": 1,
              "bestRank": 20,
              "avgPoints": 110,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 110,
                  "rank": 20
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "cmjzpdkcb0093bfho0ocki2j0",
              "athleteName": "江显晨",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 105,
              "competitionCount": 1,
              "bestRank": 21,
              "avgPoints": 105,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 105,
                  "rank": 21
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdkce0096bfho9w4cv43j",
              "athleteName": "孟裕皓",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 100,
              "competitionCount": 1,
              "bestRank": 22,
              "avgPoints": 100,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 100,
                  "rank": 22
                }
              ]
            },
            {
              "rank": 23,
              "athleteId": "cmjzpdkci0099bfhoj2fomk7j",
              "athleteName": "李柏翔",
              "team": "MAYA TEAM",
              "totalPoints": 95,
              "competitionCount": 1,
              "bestRank": 23,
              "avgPoints": 95,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 95,
                  "rank": 23
                }
              ]
            },
            {
              "rank": 24,
              "athleteId": "cmjzpdkcm009cbfhotv2stqaf",
              "athleteName": "陶勃遇",
              "team": "锐冠青少年竞技滑雪队",
              "totalPoints": 91,
              "competitionCount": 1,
              "bestRank": 24,
              "avgPoints": 91,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 91,
                  "rank": 24
                }
              ]
            },
            {
              "rank": 25,
              "athleteId": "cmjzpdkcq009fbfhoxa5ipl1g",
              "athleteName": "仲作成",
              "team": "MAYA TEAM",
              "totalPoints": 87,
              "competitionCount": 1,
              "bestRank": 25,
              "avgPoints": 87,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 87,
                  "rank": 25
                }
              ]
            },
            {
              "rank": 26,
              "athleteId": "cmjzpdkct009ibfhoibkwcoe4",
              "athleteName": "郭天泽",
              "team": "MAYA TEAM",
              "totalPoints": 83,
              "competitionCount": 1,
              "bestRank": 26,
              "avgPoints": 83,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 83,
                  "rank": 26
                }
              ]
            },
            {
              "rank": 27,
              "athleteId": "cmjzpdkcx009lbfhovbf8c77r",
              "athleteName": "袁子宸",
              "team": "重庆巴蜀科学城中学校",
              "totalPoints": 79,
              "competitionCount": 1,
              "bestRank": 27,
              "avgPoints": 79,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 79,
                  "rank": 27
                }
              ]
            },
            {
              "rank": 28,
              "athleteId": "cmjzpdkd0009obfhoo2lnifjm",
              "athleteName": "张亚琨",
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 75,
              "competitionCount": 1,
              "bestRank": 28,
              "avgPoints": 75,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 75,
                  "rank": 28
                }
              ]
            },
            {
              "rank": 29,
              "athleteId": "cmjzpdkd4009rbfhoi14egzfo",
              "athleteName": "贾博翔",
              "team": "锐冠青少年竞技滑雪队",
              "totalPoints": 71,
              "competitionCount": 1,
              "bestRank": 29,
              "avgPoints": 71,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 71,
                  "rank": 29
                }
              ]
            },
            {
              "rank": 30,
              "athleteId": "cmjzpdkd8009ubfhotio8k1cy",
              "athleteName": "井诚",
              "team": "中麟体育",
              "totalPoints": 67,
              "competitionCount": 1,
              "bestRank": 30,
              "avgPoints": 67,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 67,
                  "rank": 30
                }
              ]
            },
            {
              "rank": 31,
              "athleteId": "cmjzpdkdc009xbfhoo2klfjap",
              "athleteName": "洪戬",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 63,
              "competitionCount": 1,
              "bestRank": 31,
              "avgPoints": 63,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 63,
                  "rank": 31
                }
              ]
            },
            {
              "rank": 32,
              "athleteId": "cmjzpdkdh00a0bfho4wxoxzvt",
              "athleteName": "张晧泽",
              "team": "太原市第二少年体育学校",
              "totalPoints": 59,
              "competitionCount": 1,
              "bestRank": 32,
              "avgPoints": 59,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 59,
                  "rank": 32
                }
              ]
            },
            {
              "rank": 33,
              "athleteId": "cmjzpdkdl00a3bfhobgcrmoxf",
              "athleteName": "郭芮名",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 55,
              "competitionCount": 1,
              "bestRank": 33,
              "avgPoints": 55,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 55,
                  "rank": 33
                }
              ]
            },
            {
              "rank": 34,
              "athleteId": "cmjzpdkdq00a6bfhooeygbvcg",
              "athleteName": "李钊羽",
              "team": "个人",
              "totalPoints": 51,
              "competitionCount": 1,
              "bestRank": 34,
              "avgPoints": 51,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 51,
                  "rank": 34
                }
              ]
            },
            {
              "rank": 35,
              "athleteId": "cmjzpdkdu00a9bfhoglttsdpp",
              "athleteName": "谢书敖",
              "team": "零站单板滑雪俱乐部",
              "totalPoints": 47,
              "competitionCount": 1,
              "bestRank": 35,
              "avgPoints": 47,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 47,
                  "rank": 35
                }
              ]
            },
            {
              "rank": 36,
              "athleteId": "cmjzpdkdy00acbfhof8j22w6u",
              "athleteName": "王浩然",
              "team": "中麟体育",
              "totalPoints": 43,
              "competitionCount": 1,
              "bestRank": 36,
              "avgPoints": 43,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 43,
                  "rank": 36
                }
              ]
            },
            {
              "rank": 37,
              "athleteId": "cmjzpdke200afbfho46pb1bph",
              "athleteName": "陈浩铭",
              "team": "四川体育职业学院",
              "totalPoints": 39,
              "competitionCount": 1,
              "bestRank": 37,
              "avgPoints": 39,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 39,
                  "rank": 37
                }
              ]
            },
            {
              "rank": 38,
              "athleteId": "cmjzpdke600aibfhorlv0ah7f",
              "athleteName": "徐悦宾",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 35,
              "competitionCount": 1,
              "bestRank": 38,
              "avgPoints": 35,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 35,
                  "rank": 38
                }
              ]
            },
            {
              "rank": 39,
              "athleteId": "cmjzpdke900albfhoigjeyd76",
              "athleteName": "暴城睿",
              "team": "辽宁极限体育发展有限公司",
              "totalPoints": 31,
              "competitionCount": 1,
              "bestRank": 39,
              "avgPoints": 31,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 31,
                  "rank": 39
                }
              ]
            },
            {
              "rank": 40,
              "athleteId": "cmjzpdked00aobfhobpgyq4nt",
              "athleteName": "靳淏宬",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 27,
              "competitionCount": 1,
              "bestRank": 40,
              "avgPoints": 27,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 27,
                  "rank": 40
                }
              ]
            },
            {
              "rank": 41,
              "athleteId": "cmjzpdkeg00arbfhofvp5x8xt",
              "athleteName": "熊品超",
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 24,
              "competitionCount": 1,
              "bestRank": 41,
              "avgPoints": 24,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 24,
                  "rank": 41
                }
              ]
            },
            {
              "rank": 42,
              "athleteId": "cmjzpdkek00aubfhonxqvxggw",
              "athleteName": "孙裕恒",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 21,
              "competitionCount": 1,
              "bestRank": 42,
              "avgPoints": 21,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 21,
                  "rank": 42
                }
              ]
            },
            {
              "rank": 43,
              "athleteId": "cmjzpdken00axbfhox6zhp4mo",
              "athleteName": "陈羿同",
              "team": "零站体育",
              "totalPoints": 18,
              "competitionCount": 1,
              "bestRank": 43,
              "avgPoints": 18,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 18,
                  "rank": 43
                }
              ]
            },
            {
              "rank": 44,
              "athleteId": "cmjzpdker00b0bfhocrpgfxmf",
              "athleteName": "陈宥廷",
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 15,
              "competitionCount": 1,
              "bestRank": 44,
              "avgPoints": 15,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 15,
                  "rank": 44
                }
              ]
            },
            {
              "rank": 45,
              "athleteId": "cmjzpdkeu00b3bfhoz7xisfn9",
              "athleteName": "杨昊泽",
              "team": "速森体育",
              "totalPoints": 12,
              "competitionCount": 1,
              "bestRank": 45,
              "avgPoints": 12,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 12,
                  "rank": 45
                }
              ]
            }
          ],
          "total": 45
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "平行大回转 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdk79004rbfhooqi32wqr",
              "athleteName": "邱嘉晴",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdk7c004ubfhoayny1i0x",
              "athleteName": "沈凌羽",
              "team": "MAYA TEAM",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdk7g004xbfhordq0746d",
              "athleteName": "韦苗茵",
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdk7k0050bfhof32r335m",
              "athleteName": "刘妍梦",
              "team": "中麟体育",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdk7o0053bfhopj22d7t9",
              "athleteName": "赵南茜",
              "team": "太原市第二少年体育学校",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdk7s0056bfhouamezkf4",
              "athleteName": "刘沛怡",
              "team": "MAYA TEAM",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdk7w0059bfhoqf1tul7a",
              "athleteName": "邰淼",
              "team": "内蒙古嘉灏体育",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdk80005cbfhoxp1aexei",
              "athleteName": "张诺笒",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdk84005fbfhocwqzec0v",
              "athleteName": "高宇宣",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdk87005ibfhohu5zegc3",
              "athleteName": "汪昱诺",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdk8b005lbfho4c97oyke",
              "athleteName": "杨卓尔",
              "team": "中麟体育",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdk8f005obfhos0k3gyvq",
              "athleteName": "黄卫瑄",
              "team": "吉林省阔展体育服务有限公司",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdk8i005rbfho2oo4b7sh",
              "athleteName": "赵浛西",
              "team": "爱上雪体育产业发展（北京）有限公司",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdk8m005ubfhou7sh1nue",
              "athleteName": "邹齐",
              "team": "个人",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdk8q005xbfhoxswwnnkl",
              "athleteName": "刘姝廷",
              "team": "中麟体育",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdk8u0060bfho1vg3hn2i",
              "athleteName": "周焕熙",
              "team": "爱上雪体育产业发展（北京）有限公司",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdk8x0063bfhobic6c948",
              "athleteName": "闫艺宸",
              "team": "个人",
              "totalPoints": 127,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 127,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdk900066bfho8yqnek9e",
              "athleteName": "徐紫馨",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdk930069bfho54mrsdcb",
              "athleteName": "王艺潼",
              "team": "个人",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdk96006cbfho14znv0uq",
              "athleteName": "徐艺玮",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 110,
              "competitionCount": 1,
              "bestRank": 20,
              "avgPoints": 110,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 110,
                  "rank": 20
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "cmjzpdk99006fbfhowh2pew1l",
              "athleteName": "史怀竺",
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 105,
              "competitionCount": 1,
              "bestRank": 21,
              "avgPoints": 105,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 105,
                  "rank": 21
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdk9d006ibfho62rtb6mv",
              "athleteName": "叶丽扎·别克苏力坦",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 100,
              "competitionCount": 1,
              "bestRank": 22,
              "avgPoints": 100,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 100,
                  "rank": 22
                }
              ]
            },
            {
              "rank": 23,
              "athleteId": "cmjzpdk9g006lbfhonossoltj",
              "athleteName": "刘于靖璇",
              "team": "丝绸之路青少年俱乐部",
              "totalPoints": 95,
              "competitionCount": 1,
              "bestRank": 23,
              "avgPoints": 95,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 95,
                  "rank": 23
                }
              ]
            },
            {
              "rank": 24,
              "athleteId": "cmjzpdk9j006obfhor1vkbpvi",
              "athleteName": "王羽佳",
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 91,
              "competitionCount": 1,
              "bestRank": 24,
              "avgPoints": 91,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 91,
                  "rank": 24
                }
              ]
            },
            {
              "rank": 25,
              "athleteId": "cmjzpdk9n006rbfhoom69d3b4",
              "athleteName": "黎若水",
              "team": "个人",
              "totalPoints": 87,
              "competitionCount": 1,
              "bestRank": 25,
              "avgPoints": 87,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 87,
                  "rank": 25
                }
              ]
            },
            {
              "rank": 26,
              "athleteId": "cmjzpdk9q006ubfhol25rw40e",
              "athleteName": "刘芊焱",
              "team": "个人",
              "totalPoints": 83,
              "competitionCount": 1,
              "bestRank": 26,
              "avgPoints": 83,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 83,
                  "rank": 26
                }
              ]
            },
            {
              "rank": 27,
              "athleteId": "cmjzpdk9t006xbfhobc0rcef9",
              "athleteName": "吴宛霖",
              "team": "北京天高云淡体育有限公司",
              "totalPoints": 79,
              "competitionCount": 1,
              "bestRank": 27,
              "avgPoints": 79,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 79,
                  "rank": 27
                }
              ]
            },
            {
              "rank": 28,
              "athleteId": "cmjzpdk9w0070bfhojofn6m13",
              "athleteName": "赵天冉",
              "team": "KingProTeam",
              "totalPoints": 75,
              "competitionCount": 1,
              "bestRank": 28,
              "avgPoints": 75,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 75,
                  "rank": 28
                }
              ]
            },
            {
              "rank": 29,
              "athleteId": "cmjzpdka00073bfhovx3noqyi",
              "athleteName": "周琪",
              "team": "锐冠青少年竞技滑雪队",
              "totalPoints": 71,
              "competitionCount": 1,
              "bestRank": 29,
              "avgPoints": 71,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 71,
                  "rank": 29
                }
              ]
            },
            {
              "rank": 30,
              "athleteId": "cmjzpdka40076bfhorgd2m8ou",
              "athleteName": "亢正熙",
              "team": "四川体育职业学院",
              "totalPoints": 67,
              "competitionCount": 1,
              "bestRank": 30,
              "avgPoints": 67,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 67,
                  "rank": 30
                }
              ]
            },
            {
              "rank": 31,
              "athleteId": "cmjzpdka70079bfho3f7ql9v4",
              "athleteName": "王奕棽",
              "team": "速森体育",
              "totalPoints": 63,
              "competitionCount": 1,
              "bestRank": 31,
              "avgPoints": 63,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 63,
                  "rank": 31
                }
              ]
            },
            {
              "rank": 32,
              "athleteId": "cmjzpdkaa007cbfho0t5qqqm9",
              "athleteName": "陈卓",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 59,
              "competitionCount": 1,
              "bestRank": 32,
              "avgPoints": 59,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 59,
                  "rank": 32
                }
              ]
            }
          ],
          "total": 32
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "平行大回转 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkgv00cxbfhohvvnjx3w",
              "athleteName": "窦羿",
              "team": "MAYA TEAM",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkgy00d0bfho9vble00l",
              "athleteName": "张鑫泽",
              "team": "速森体育",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkh100d3bfhojzgo7pr4",
              "athleteName": "李嘉祺",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkh500d6bfhogif50da9",
              "athleteName": "马凯涛",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkh800d9bfho23y46y7o",
              "athleteName": "尚久智",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkhb00dcbfho0ww5obv1",
              "athleteName": "吴凯",
              "team": "中麟体育",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkhf00dfbfhoxmumwieq",
              "athleteName": "杨武胜俊",
              "team": "四川体育职业学院",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkhi00dibfhokox5yuvz",
              "athleteName": "付壡喆",
              "team": "四川体育职业学院",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkhm00dlbfhoh1eef7a9",
              "athleteName": "廉钰洁",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkhq00dobfhogqrw3gj7",
              "athleteName": "苗誉镨",
              "team": "速森体育",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdkht00drbfhoo183z471",
              "athleteName": "王嘉崎",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdkhx00dubfhogq1rb5ct",
              "athleteName": "杨伯伦",
              "team": "个人",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdki100dxbfhozwyr4wjz",
              "athleteName": "常一鸣",
              "team": "锐冠青少年竞技滑雪队",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdki500e0bfho3yo046wx",
              "athleteName": "杨一丁",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdki900e3bfho6qc9ewhq",
              "athleteName": "郑研伟",
              "team": "个人",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdkid00e6bfho99rqbw7s",
              "athleteName": "樊冠序",
              "team": "吉林省阔展体育服务有限公司",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdkih00e9bfholi22uh9o",
              "athleteName": "曲星铭",
              "team": "个人",
              "totalPoints": 127,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 127,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdkik00ecbfho4luzmtsp",
              "athleteName": "付若洵",
              "team": "KingProTeam",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdkio00efbfho8e577j04",
              "athleteName": "吴保江",
              "team": "零站单板滑雪俱乐部",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdkiv00eibfhomj9j7tlk",
              "athleteName": "辛博",
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 110,
              "competitionCount": 1,
              "bestRank": 20,
              "avgPoints": 110,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 110,
                  "rank": 20
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "cmjzpdkiz00elbfhowy5fi3bf",
              "athleteName": "黄铸轩",
              "team": "个人",
              "totalPoints": 105,
              "competitionCount": 1,
              "bestRank": 21,
              "avgPoints": 105,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 105,
                  "rank": 21
                }
              ]
            },
            {
              "rank": 22,
              "athleteId": "cmjzpdkj200eobfhou82m9qil",
              "athleteName": "唐鸿博",
              "team": "KingProTeam",
              "totalPoints": 100,
              "competitionCount": 1,
              "bestRank": 22,
              "avgPoints": 100,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 100,
                  "rank": 22
                }
              ]
            },
            {
              "rank": 23,
              "athleteId": "cmjzpdkj600erbfhoagwamkpg",
              "athleteName": "杜鑫",
              "team": "张家口市足球和冰雪运动学校",
              "totalPoints": 95,
              "competitionCount": 1,
              "bestRank": 23,
              "avgPoints": 95,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 95,
                  "rank": 23
                }
              ]
            },
            {
              "rank": 24,
              "athleteId": "cmjzpdkja00eubfho4y4pipqd",
              "athleteName": "刘馨泽",
              "team": "吉林省阔展体育服务有限公司",
              "totalPoints": 91,
              "competitionCount": 1,
              "bestRank": 24,
              "avgPoints": 91,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 91,
                  "rank": 24
                }
              ]
            }
          ],
          "total": 24
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "平行大回转 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkex00b6bfho71gr5qj3",
              "athleteName": "李妙涵",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkf000b9bfho3gs0l1zy",
              "athleteName": "臧怡然",
              "team": "个人",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkf300bcbfhoptyf96dp",
              "athleteName": "丁小苏",
              "team": "MAYA TEAM",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkf700bfbfhosv5aak4b",
              "athleteName": "王子怡",
              "team": "个人",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkfa00bibfho2rfh2opo",
              "athleteName": "张芊凝",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkfd00blbfho7svp8try",
              "athleteName": "李雨濛",
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkff00bobfhoseh0eifz",
              "athleteName": "张允童",
              "team": "个人",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkfj00brbfhoma9b5hn6",
              "athleteName": "袁丽文",
              "team": "上海市静安区滑雪协会",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkfm00bubfhoxikrrhxg",
              "athleteName": "王婧霏",
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkfq00bxbfho3nqtwyo2",
              "athleteName": "邵菲梵",
              "team": "北京天高云淡体育有限公司",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdkft00c0bfhofpnn2mnq",
              "athleteName": "贾釉茜",
              "team": "吉林省阔展体育服务有限公司",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdkfw00c3bfhocx32ry78",
              "athleteName": "叶香菲",
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkg000c6bfhoihmgqo4f",
              "athleteName": "刘墨晗",
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdkg300c9bfhov8mzyq6r",
              "athleteName": "朱珈仪",
              "team": "吉林市冬季运动管理中心",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdkg700ccbfhossdgz9de",
              "athleteName": "韩非桐",
              "team": "速森体育",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdkga00cfbfhoyfzzm0hh",
              "athleteName": "杨笑语",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdkge00cibfhoiniuvbof",
              "athleteName": "房洢伊",
              "team": "个人",
              "totalPoints": 127,
              "competitionCount": 1,
              "bestRank": 17,
              "avgPoints": 127,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "cmjzpdkgh00clbfhozrtx7frf",
              "athleteName": "白默函",
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 121,
              "competitionCount": 1,
              "bestRank": 18,
              "avgPoints": 121,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 121,
                  "rank": 18
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "cmjzpdkgl00cobfhobsdhpr93",
              "athleteName": "刘怡廷",
              "team": "张家口市足球和冰雪运动学校",
              "totalPoints": 115,
              "competitionCount": 1,
              "bestRank": 19,
              "avgPoints": 115,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 115,
                  "rank": 19
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdkgo00crbfhoj3jtd3nu",
              "athleteName": "范芮希",
              "team": "个人",
              "totalPoints": 110,
              "competitionCount": 1,
              "bestRank": 20,
              "avgPoints": 110,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 110,
                  "rank": 20
                }
              ]
            },
            {
              "rank": 21,
              "athleteId": "cmjzpdkgs00cubfho86ndwawc",
              "athleteName": "杜美佳妮",
              "team": "北京佩士体育有限公司",
              "totalPoints": 105,
              "competitionCount": 1,
              "bestRank": 21,
              "avgPoints": 105,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
                  "location": "雪如意滑雪场",
                  "points": 105,
                  "rank": 21
                }
              ]
            }
          ],
          "total": 21
        }
      ],
      "total": 179
    },
    {
      "sportType": "freestyle-slopestyle-bigair",
      "sportName": "自由式坡面障碍技巧/大跳台",
      "subEventRankings": [
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkwu00pqbfhojhnxffpm",
              "athleteName": "常嘉林",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 689,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 344.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkwz00ptbfho9l5fo4g2",
              "athleteName": "张墨凡",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 632,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 316,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkx200pwbfhonl48w33h",
              "athleteName": "赵铠轩",
              "team": "河南省体育局",
              "totalPoints": 583,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 291.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkx700pzbfholzzypp6c",
              "athleteName": "张梓童",
              "team": "河南省体育局",
              "totalPoints": 540,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 270,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkxa00q2bfhoqpmx31h0",
              "athleteName": "王俊熙",
              "team": "河南省体育局",
              "totalPoints": 502,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 251,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-吴雨桐-个人",
              "athleteName": "吴雨桐",
              "team": "个人",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkxe00q5bfho8r60z791",
              "athleteName": "崔芃森",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkxh00q8bfho5kg4losu",
              "athleteName": "卢彦词",
              "team": "四川体育职业学院",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkxl00qbbfhowxx5v1fm",
              "athleteName": "赵子钰",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkxo00qebfhomrlq3drg",
              "athleteName": "李雪聪",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            }
          ],
          "total": 10
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkv900ohbfhojesum95s",
              "athleteName": "赵紫琪",
              "team": "四川体育职业学院",
              "totalPoints": 720,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkvn00otbfho8ze6lnnz",
              "athleteName": "李诗沫",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 563,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 281.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkvk00oqbfhotqaedvcn",
              "athleteName": "武温暖",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 560,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkvz00p2bfhobxqhq2ex",
              "athleteName": "甄芝漫",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 541,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 270.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkvg00onbfhog8ooajnb",
              "athleteName": "任可心",
              "team": "四川体育职业学院",
              "totalPoints": 515,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 257.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkvc00okbfhoitspibck",
              "athleteName": "王淑哲",
              "team": "河南省体育局",
              "totalPoints": 495,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 247.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkvv00ozbfho9q5gtmko",
              "athleteName": "闫妍",
              "team": "个人",
              "totalPoints": 486,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 243,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkwi00phbfho8f0ltvne",
              "athleteName": "陈科羽",
              "team": "四川体育职业学院",
              "totalPoints": 399,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 199.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 157,
                  "rank": 13
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkw600p8bfhouhcl0616",
              "athleteName": "袁芮涵",
              "team": "河南省体育局",
              "totalPoints": 374,
              "competitionCount": 2,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkwf00pebfhoy6f0kq3d",
              "athleteName": "欧子娴",
              "team": "成都热雪奇迹",
              "totalPoints": 365,
              "competitionCount": 2,
              "bestRank": 9,
              "avgPoints": 182.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 166,
                  "rank": 12
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-孙焕轲-河南省体育局",
              "athleteName": "孙焕轲",
              "team": "河南省体育局",
              "totalPoints": 352,
              "competitionCount": 2,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 176,
                  "rank": 11
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdkwq00pnbfhozuu1pwmh",
              "athleteName": "孙婉迪",
              "team": "个人",
              "totalPoints": 268,
              "competitionCount": 2,
              "bestRank": 15,
              "avgPoints": 134,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 141,
                  "rank": 15
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkvr00owbfhobsujiv88",
              "athleteName": "孙焕轶",
              "team": "个人",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-王玗希-个人",
              "athleteName": "王玗希",
              "team": "个人",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdkw300p5bfhodr0bg1op",
              "athleteName": "韩小贝",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "athlete-梁宝云-广西射击射箭运动发展中心",
              "athleteName": "梁宝云",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdkwn00pkbfhoanaefh2j",
              "athleteName": "万洛辰",
              "team": "个人",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "athlete-周钰芯-四川体育职业学院",
              "athleteName": "周钰芯",
              "team": "四川体育职业学院",
              "totalPoints": 149,
              "competitionCount": 1,
              "bestRank": 14,
              "avgPoints": 149,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "athlete-左均怡-个人",
              "athleteName": "左均怡",
              "team": "个人",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            },
            {
              "rank": 20,
              "athleteId": "cmjzpdl1f00tcbfhowslhbsqq",
              "athleteName": "李佳馨",
              "team": "个人",
              "totalPoints": 134,
              "competitionCount": 1,
              "bestRank": 16,
              "avgPoints": 134,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            }
          ],
          "total": 20
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkyk00r5bfhoikmy4e16",
              "athleteName": "周英杰",
              "team": "四川体育职业学院",
              "totalPoints": 586,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 293,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "athlete-刘栩辰-重庆市冬季运动管理中心",
              "athleteName": "刘栩辰",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 418,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 209,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkzf00rtbfhou6ca98ui",
              "athleteName": "程楚阳",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 398,
              "competitionCount": 2,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkzb00rqbfhozbj66j9r",
              "athleteName": "王冬杰",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 378,
              "competitionCount": 2,
              "bestRank": 8,
              "avgPoints": 189,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkzj00rwbfhoyoxomh3h",
              "athleteName": "梁跃飞",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 374,
              "competitionCount": 2,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-徐锦添-四川体育职业学院",
              "athleteName": "徐锦添",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkyn00r8bfho5hxp5a6u",
              "athleteName": "张乔淳佑",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-黄志豪-四川体育职业学院",
              "athleteName": "黄志豪",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkyr00rbbfhon1ylf1wi",
              "athleteName": "欧阳聚勇",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "athlete-王凯文-黑龙江省雪上训练中心",
              "athleteName": "王凯文",
              "team": "黑龙江省雪上训练中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdkyu00rebfhoup8aq1ld",
              "athleteName": "王翊宁",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "athlete-邓明涛-四川体育职业学院",
              "athleteName": "邓明涛",
              "team": "四川体育职业学院",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkyy00rhbfhomuo5xnnw",
              "athleteName": "宇威琦",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-璩恩慧-河南省体育局",
              "athleteName": "璩恩慧",
              "team": "河南省体育局",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-王培旭-四川体育职业学院",
              "athleteName": "王培旭",
              "team": "四川体育职业学院",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdkz700rnbfhorz1h81nt",
              "athleteName": "李霁开",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-程曦辉-个人",
              "athleteName": "程曦辉",
              "team": "个人",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            }
          ],
          "total": 17
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkxs00qhbfhoqhlhgnkz",
              "athleteName": "周绮润",
              "team": "个人",
              "totalPoints": 720,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdky200qqbfhojspykxzi",
              "athleteName": "王珠彤",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 506,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 253,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkxv00qkbfhogyt55uun",
              "athleteName": "王珈绮",
              "team": "四川体育职业学院",
              "totalPoints": 495,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 247.5,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkyc00qzbfhoa03c1g4b",
              "athleteName": "杨芷妍",
              "team": "四川体育职业学院",
              "totalPoints": 438,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 219,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdky900qwbfhouv7qekds",
              "athleteName": "李明灿",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 418,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 209,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-马世馨-四川体育职业学院",
              "athleteName": "马世馨",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkxy00qnbfhoi0fohlcs",
              "athleteName": "叶欣悦",
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-罗优璇-河南省体育局",
              "athleteName": "罗优璇",
              "team": "河南省体育局",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "athlete-殷玉宣-河南省体育局",
              "athleteName": "殷玉宣",
              "team": "河南省体育局",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdky600qtbfhoiwp2kmsc",
              "athleteName": "平梓涵",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-韩萨仁其木格-小崔运动",
              "athleteName": "韩萨仁其木格",
              "team": "小崔运动",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "athlete-吴思琪-四川体育职业学院",
              "athleteName": "吴思琪",
              "team": "四川体育职业学院",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkyg00r2bfhonpfve5v0",
              "athleteName": "李雅馨",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-周紫君-四川体育职业学院",
              "athleteName": "周紫君",
              "team": "四川体育职业学院",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-陈奕歌-河南省体育局",
              "athleteName": "陈奕歌",
              "team": "河南省体育局",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            }
          ],
          "total": 15
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkzy00s8bfhoiv0z32ls",
              "athleteName": "田嘉译",
              "team": "沈阳体育学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdl0200sbbfho4oyc84yi",
              "athleteName": "孙金隆",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdl0900sebfhochiz1nog",
              "athleteName": "张天迈",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdl0e00shbfhoc5njd0lb",
              "athleteName": "王晨",
              "team": "个人",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            }
          ],
          "total": 4
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkzu00s5bfhojnktcfby",
              "athleteName": "高梓曦",
              "team": "个人",
              "totalPoints": 663,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 331.5,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkzn00rzbfhozmvs8hx9",
              "athleteName": "夏可馨",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkzr00s2bfhoszo6feyy",
              "athleteName": "余思源",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "athlete-陈露凝-个人",
              "athleteName": "陈露凝",
              "team": "个人",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "athlete-齐馨-A+自由式滑雪队",
              "athleteName": "齐馨",
              "team": "A+自由式滑雪队",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            }
          ],
          "total": 5
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "大跳台 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkwu00pqbfhojhnxffpm",
              "athleteName": "常嘉林",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 689,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 344.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkwz00ptbfho9l5fo4g2",
              "athleteName": "张墨凡",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 663,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 331.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkx200pwbfhonl48w33h",
              "athleteName": "赵铠轩",
              "team": "河南省体育局",
              "totalPoints": 571,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 285.5,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkx700pzbfholzzypp6c",
              "athleteName": "张梓童",
              "team": "河南省体育局",
              "totalPoints": 560,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkxa00q2bfhoqpmx31h0",
              "athleteName": "王俊熙",
              "team": "河南省体育局",
              "totalPoints": 502,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 251,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-吴雨桐-个人",
              "athleteName": "吴雨桐",
              "team": "个人",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkxe00q5bfho8r60z791",
              "athleteName": "崔芃森",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkxl00qbbfhowxx5v1fm",
              "athleteName": "赵子钰",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 226,
              "competitionCount": 1,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkxh00q8bfho5kg4losu",
              "athleteName": "卢彦词",
              "team": "四川体育职业学院",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkxo00qebfhomrlq3drg",
              "athleteName": "李雪聪",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            }
          ],
          "total": 10
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "大跳台 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkvn00otbfho8ze6lnnz",
              "athleteName": "李诗沫",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 640,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 320,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkvc00okbfhoitspibck",
              "athleteName": "王淑哲",
              "team": "河南省体育局",
              "totalPoints": 571,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 285.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkv900ohbfhojesum95s",
              "athleteName": "赵紫琪",
              "team": "四川体育职业学院",
              "totalPoints": 559,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 279.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkwi00phbfho8f0ltvne",
              "athleteName": "陈科羽",
              "team": "四川体育职业学院",
              "totalPoints": 505,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 252.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 176,
                  "rank": 11
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkvk00oqbfhotqaedvcn",
              "athleteName": "武温暖",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 479,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 239.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdkvv00ozbfho9q5gtmko",
              "athleteName": "闫妍",
              "team": "个人",
              "totalPoints": 447,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 223.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkvg00onbfhog8ooajnb",
              "athleteName": "任可心",
              "team": "四川体育职业学院",
              "totalPoints": 438,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 219,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-孙焕轲-河南省体育局",
              "athleteName": "孙焕轲",
              "team": "河南省体育局",
              "totalPoints": 438,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 219,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkvz00p2bfhobxqhq2ex",
              "athleteName": "甄芝漫",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 437,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 218.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 157,
                  "rank": 13
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "cmjzpdkw600p8bfhouhcl0616",
              "athleteName": "袁芮涵",
              "team": "河南省体育局",
              "totalPoints": 426,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 213,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 166,
                  "rank": 12
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdkwf00pebfhoy6f0kq3d",
              "athleteName": "欧子娴",
              "team": "成都热雪奇迹",
              "totalPoints": 336,
              "competitionCount": 2,
              "bestRank": 10,
              "avgPoints": 168,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 149,
                  "rank": 14
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "athlete-王玗希-个人",
              "athleteName": "王玗希",
              "team": "个人",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkwq00pnbfhozuu1pwmh",
              "athleteName": "孙婉迪",
              "team": "个人",
              "totalPoints": 276,
              "competitionCount": 2,
              "bestRank": 14,
              "avgPoints": 138,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 149,
                  "rank": 14
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 127,
                  "rank": 17
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "cmjzpdl1f00tcbfhowslhbsqq",
              "athleteName": "李佳馨",
              "team": "个人",
              "totalPoints": 275,
              "competitionCount": 2,
              "bestRank": 15,
              "avgPoints": 137.5,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 141,
                  "rank": 15
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 134,
                  "rank": 16
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "cmjzpdkvr00owbfhobsujiv88",
              "athleteName": "孙焕轶",
              "team": "个人",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdkw300p5bfhodr0bg1op",
              "athleteName": "韩小贝",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "competitionCount": 1,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "athlete-周钰芯-四川体育职业学院",
              "athleteName": "周钰芯",
              "team": "四川体育职业学院",
              "totalPoints": 166,
              "competitionCount": 1,
              "bestRank": 12,
              "avgPoints": 166,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 166,
                  "rank": 12
                }
              ]
            },
            {
              "rank": 18,
              "athleteId": "athlete-梁宝云-广西射击射箭运动发展中心",
              "athleteName": "梁宝云",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 157,
              "competitionCount": 1,
              "bestRank": 13,
              "avgPoints": 157,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 157,
                  "rank": 13
                }
              ]
            },
            {
              "rank": 19,
              "athleteId": "athlete-左均怡-个人",
              "athleteName": "左均怡",
              "team": "个人",
              "totalPoints": 141,
              "competitionCount": 1,
              "bestRank": 15,
              "avgPoints": 141,
              "ageGroup": "U11",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 141,
                  "rank": 15
                }
              ]
            }
          ],
          "total": 19
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "大跳台 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkyk00r5bfhoikmy4e16",
              "athleteName": "周英杰",
              "team": "四川体育职业学院",
              "totalPoints": 586,
              "competitionCount": 2,
              "bestRank": 1,
              "avgPoints": 293,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "athlete-刘栩辰-重庆市冬季运动管理中心",
              "athleteName": "刘栩辰",
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 454,
              "competitionCount": 2,
              "bestRank": 6,
              "avgPoints": 227,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkzj00rwbfhoyoxomh3h",
              "athleteName": "梁跃飞",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 413,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 206.5,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkzf00rtbfhou6ca98ui",
              "athleteName": "程楚阳",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 398,
              "competitionCount": 2,
              "bestRank": 9,
              "avgPoints": 199,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 199,
                  "rank": 9
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdkzb00rqbfhozbj66j9r",
              "athleteName": "王冬杰",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 388,
              "competitionCount": 2,
              "bestRank": 8,
              "avgPoints": 194,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "athlete-徐锦添-四川体育职业学院",
              "athleteName": "徐锦添",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "cmjzpdkyr00rbbfhon1ylf1wi",
              "athleteName": "欧阳聚勇",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "athlete-黄志豪-四川体育职业学院",
              "athleteName": "黄志豪",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "cmjzpdkyn00r8bfho5hxp5a6u",
              "athleteName": "张乔淳佑",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "athlete-王凯文-黑龙江省雪上训练中心",
              "athleteName": "王凯文",
              "team": "黑龙江省雪上训练中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "cmjzpdkyu00rebfhoup8aq1ld",
              "athleteName": "王翊宁",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "athlete-邓明涛-四川体育职业学院",
              "athleteName": "邓明涛",
              "team": "四川体育职业学院",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "cmjzpdkyy00rhbfhomuo5xnnw",
              "athleteName": "宇威琦",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-璩恩慧-河南省体育局",
              "athleteName": "璩恩慧",
              "team": "河南省体育局",
              "totalPoints": 260,
              "competitionCount": 1,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 15,
              "athleteId": "athlete-王培旭-四川体育职业学院",
              "athleteName": "王培旭",
              "team": "四川体育职业学院",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 16,
              "athleteId": "cmjzpdl3200uvbfho4hlumf98",
              "athleteName": "徐思远",
              "team": "沈阳体育学院",
              "totalPoints": 187,
              "competitionCount": 1,
              "bestRank": 10,
              "avgPoints": 187,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 17,
              "athleteId": "cmjzpdkz700rnbfhorz1h81nt",
              "athleteName": "李霁开",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 176,
              "competitionCount": 1,
              "bestRank": 11,
              "avgPoints": 176,
              "ageGroup": "U15",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            }
          ],
          "total": 17
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "大跳台 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdky900qwbfhouv7qekds",
              "athleteName": "李明灿",
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 520,
              "competitionCount": 2,
              "bestRank": 5,
              "avgPoints": 260,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 260,
                  "rank": 5
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 260,
                  "rank": 5
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkxv00qkbfhogyt55uun",
              "athleteName": "王珈绮",
              "team": "四川体育职业学院",
              "totalPoints": 502,
              "competitionCount": 2,
              "bestRank": 3,
              "avgPoints": 251,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 199,
                  "rank": 9
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdkyc00qzbfhoa03c1g4b",
              "athleteName": "杨芷妍",
              "team": "四川体育职业学院",
              "totalPoints": 467,
              "competitionCount": 2,
              "bestRank": 4,
              "avgPoints": 233.5,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 187,
                  "rank": 10
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkxs00qhbfhoqhlhgnkz",
              "athleteName": "周绮润",
              "team": "个人",
              "totalPoints": 452,
              "competitionCount": 2,
              "bestRank": 7,
              "avgPoints": 226,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 226,
                  "rank": 7
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 226,
                  "rank": 7
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "cmjzpdky200qqbfhojspykxzi",
              "athleteName": "王珠彤",
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 388,
              "competitionCount": 2,
              "bestRank": 8,
              "avgPoints": 194,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 212,
                  "rank": 8
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 176,
                  "rank": 11
                }
              ]
            },
            {
              "rank": 6,
              "athleteId": "cmjzpdky600qtbfhoiwp2kmsc",
              "athleteName": "平梓涵",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 7,
              "athleteId": "athlete-马世馨-四川体育职业学院",
              "athleteName": "马世馨",
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 8,
              "athleteId": "cmjzpdkxy00qnbfhoi0fohlcs",
              "athleteName": "叶欣悦",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 9,
              "athleteId": "athlete-罗优璇-河南省体育局",
              "athleteName": "罗优璇",
              "team": "河南省体育局",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 10,
              "athleteId": "athlete-吴思琪-四川体育职业学院",
              "athleteName": "吴思琪",
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 11,
              "athleteId": "athlete-周紫君-四川体育职业学院",
              "athleteName": "周紫君",
              "team": "四川体育职业学院",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            },
            {
              "rank": 12,
              "athleteId": "cmjzpdkyg00r2bfhonpfve5v0",
              "athleteName": "李雅馨",
              "team": "北京市冬季运动管理中心",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 13,
              "athleteId": "athlete-陈奕歌-河南省体育局",
              "athleteName": "陈奕歌",
              "team": "河南省体育局",
              "totalPoints": 242,
              "competitionCount": 1,
              "bestRank": 6,
              "avgPoints": 242,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 242,
                  "rank": 6
                }
              ]
            },
            {
              "rank": 14,
              "athleteId": "athlete-殷玉宣-河南省体育局",
              "athleteName": "殷玉宣",
              "team": "河南省体育局",
              "totalPoints": 212,
              "competitionCount": 1,
              "bestRank": 8,
              "avgPoints": 212,
              "ageGroup": "U15",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 212,
                  "rank": 8
                }
              ]
            }
          ],
          "total": 14
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "大跳台 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkzy00s8bfhoiv0z32ls",
              "athleteName": "田嘉译",
              "team": "沈阳体育学院",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdl0900sebfhochiz1nog",
              "athleteName": "张天迈",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "cmjzpdl0200sbbfho4oyc84yi",
              "athleteName": "孙金隆",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdl0e00shbfhoc5njd0lb",
              "athleteName": "王晨",
              "team": "个人",
              "totalPoints": 280,
              "competitionCount": 1,
              "bestRank": 4,
              "avgPoints": 280,
              "ageGroup": "U18",
              "gender": "男子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 280,
                  "rank": 4
                }
              ]
            }
          ],
          "total": 4
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "大跳台 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "athleteId": "cmjzpdkzu00s5bfhojnktcfby",
              "athleteName": "高梓曦",
              "team": "个人",
              "totalPoints": 632,
              "competitionCount": 2,
              "bestRank": 2,
              "avgPoints": 316,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 303,
                  "rank": 3
                },
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 2,
              "athleteId": "cmjzpdkzn00rzbfhozmvs8hx9",
              "athleteName": "夏可馨",
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 3,
              "athleteId": "athlete-陈露凝-个人",
              "athleteName": "陈露凝",
              "team": "个人",
              "totalPoints": 360,
              "competitionCount": 1,
              "bestRank": 1,
              "avgPoints": 360,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 360,
                  "rank": 1
                }
              ]
            },
            {
              "rank": 4,
              "athleteId": "cmjzpdkzr00s2bfhoszo6feyy",
              "athleteName": "余思源",
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "competitionCount": 1,
              "bestRank": 2,
              "avgPoints": 329,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
                  "location": "成都热雪奇迹室内滑雪场",
                  "points": 329,
                  "rank": 2
                }
              ]
            },
            {
              "rank": 5,
              "athleteId": "athlete-齐馨-A+自由式滑雪队",
              "athleteName": "齐馨",
              "team": "A+自由式滑雪队",
              "totalPoints": 303,
              "competitionCount": 1,
              "bestRank": 3,
              "avgPoints": 303,
              "ageGroup": "U18",
              "gender": "女子组",
              "rankChange": null,
              "pointsBreakdown": [
                {
                  "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
                  "location": "张家口富龙滑雪场",
                  "points": 303,
                  "rank": 3
                }
              ]
            }
          ],
          "total": 5
        }
      ],
      "total": 140
    }
  ],
  "rankings": [
    {
      "rank": 1,
      "athleteId": "cmjzpdkm300gibfhob9a22der",
      "athleteName": "刘翰泽",
      "team": "个人",
      "totalPoints": 720,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 2,
      "athleteId": "cmjzpdkkt00fobfhovt7it0m5",
      "athleteName": "鱼嘉怡",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 720,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 3,
      "athleteId": "cmjzpdko000i6bfho6pikfiix",
      "athleteName": "李俊辛",
      "team": "四川体育职业学院",
      "totalPoints": 720,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 4,
      "athleteId": "cmjzpdkmy00h9bfho81478919",
      "athleteName": "王恒宇",
      "team": "个人",
      "totalPoints": 720,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 5,
      "athleteId": "cmjzpdkkt00fobfhovt7it0m5",
      "athleteName": "鱼嘉怡",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 720,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 6,
      "athleteId": "athlete-封树渝-重庆市冬季运动管理中心",
      "athleteName": "封树渝",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 720,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 7,
      "athleteId": "cmjzpdkv900ohbfhojesum95s",
      "athleteName": "赵紫琪",
      "team": "四川体育职业学院",
      "totalPoints": 720,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 8,
      "athleteId": "cmjzpdkxs00qhbfhoqhlhgnkz",
      "athleteName": "周绮润",
      "team": "个人",
      "totalPoints": 720,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 9,
      "athleteId": "cmjzpdkm300gibfhob9a22der",
      "athleteName": "刘翰泽",
      "team": "个人",
      "totalPoints": 689,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 344.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 10,
      "athleteId": "cmjzpdkwu00pqbfhojhnxffpm",
      "athleteName": "常嘉林",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 689,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 344.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 11,
      "athleteId": "cmjzpdkwu00pqbfhojhnxffpm",
      "athleteName": "常嘉林",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 689,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 344.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 12,
      "athleteId": "cmjzpdkjq00f0bfho7lddp0tk",
      "athleteName": "牛安芷芸",
      "team": "个人",
      "totalPoints": 663,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 331.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 13,
      "athleteId": "athlete-谭凯元-个人",
      "athleteName": "谭凯元",
      "team": "个人",
      "totalPoints": 663,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 331.5,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 14,
      "athleteId": "cmjzpdkzu00s5bfhojnktcfby",
      "athleteName": "高梓曦",
      "team": "个人",
      "totalPoints": 663,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 331.5,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 15,
      "athleteId": "cmjzpdkwz00ptbfho9l5fo4g2",
      "athleteName": "张墨凡",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 663,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 331.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 16,
      "athleteId": "cmjzpdkmy00h9bfho81478919",
      "athleteName": "王恒宇",
      "team": "个人",
      "totalPoints": 658,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 17,
      "athleteId": "cmjzpdkvn00otbfho8ze6lnnz",
      "athleteName": "李诗沫",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 640,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 320,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 18,
      "athleteId": "athlete-封树渝-重庆市冬季运动管理中心",
      "athleteName": "封树渝",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 632,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 316,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 19,
      "athleteId": "cmjzpdkn100hcbfho2br834hq",
      "athleteName": "袁梓程",
      "team": "四川体育职业学院",
      "totalPoints": 632,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 316,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 20,
      "athleteId": "cmjzpdkwz00ptbfho9l5fo4g2",
      "athleteName": "张墨凡",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 632,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 316,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 21,
      "athleteId": "cmjzpdkzu00s5bfhojnktcfby",
      "athleteName": "高梓曦",
      "team": "个人",
      "totalPoints": 632,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 316,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 22,
      "athleteId": "cmjzpdkjm00exbfhon8q764e7",
      "athleteName": "孙嘉怡",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 620,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 310,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 23,
      "athleteId": "cmjzpdkjm00exbfhon8q764e7",
      "athleteName": "孙嘉怡",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 609,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 304.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 24,
      "athleteId": "cmjzpdkm700glbfhoigv6cvu9",
      "athleteName": "王祖安",
      "team": "河南省体育局",
      "totalPoints": 606,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 25,
      "athleteId": "cmjzpdkl100fubfho8tg9xa1r",
      "athleteName": "杨可轩",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 606,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 26,
      "athleteId": "cmjzpdko400i9bfhoakuixeat",
      "athleteName": "米馥豪",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 606,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 27,
      "athleteId": "cmjzpdkn100hcbfho2br834hq",
      "athleteName": "袁梓程",
      "team": "四川体育职业学院",
      "totalPoints": 602,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 301,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 28,
      "athleteId": "cmjzpdkme00grbfhokxgnro49",
      "athleteName": "范天成",
      "team": "个人",
      "totalPoints": 589,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 294.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 29,
      "athleteId": "cmjzpdkyk00r5bfhoikmy4e16",
      "athleteName": "周英杰",
      "team": "四川体育职业学院",
      "totalPoints": 586,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 293,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 30,
      "athleteId": "cmjzpdkyk00r5bfhoikmy4e16",
      "athleteName": "周英杰",
      "team": "四川体育职业学院",
      "totalPoints": 586,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 293,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 31,
      "athleteId": "athlete-刘沐泽-个人",
      "athleteName": "刘沐泽",
      "team": "个人",
      "totalPoints": 583,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 291.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 32,
      "athleteId": "athlete-谭凯元-个人",
      "athleteName": "谭凯元",
      "team": "个人",
      "totalPoints": 583,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 291.5,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 33,
      "athleteId": "cmjzpdkx200pwbfhonl48w33h",
      "athleteName": "赵铠轩",
      "team": "河南省体育局",
      "totalPoints": 583,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 291.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 34,
      "athleteId": "cmjzpdkjq00f0bfho7lddp0tk",
      "athleteName": "牛安芷芸",
      "team": "个人",
      "totalPoints": 571,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 285.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 35,
      "athleteId": "cmjzpdko000i6bfho6pikfiix",
      "athleteName": "李俊辛",
      "team": "四川体育职业学院",
      "totalPoints": 571,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 285.5,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 36,
      "athleteId": "cmjzpdkx200pwbfhonl48w33h",
      "athleteName": "赵铠轩",
      "team": "河南省体育局",
      "totalPoints": 571,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 285.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 37,
      "athleteId": "cmjzpdkvc00okbfhoitspibck",
      "athleteName": "王淑哲",
      "team": "河南省体育局",
      "totalPoints": 571,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 285.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 38,
      "athleteId": "cmjzpdkvn00otbfho8ze6lnnz",
      "athleteName": "李诗沫",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 563,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 281.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 39,
      "athleteId": "cmjzpdkvk00oqbfhotqaedvcn",
      "athleteName": "武温暖",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 560,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 40,
      "athleteId": "cmjzpdkx700pzbfholzzypp6c",
      "athleteName": "张梓童",
      "team": "河南省体育局",
      "totalPoints": 560,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 41,
      "athleteId": "cmjzpdkv900ohbfhojesum95s",
      "athleteName": "赵紫琪",
      "team": "四川体育职业学院",
      "totalPoints": 559,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 279.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 42,
      "athleteId": "cmjzpdkm700glbfhoigv6cvu9",
      "athleteName": "王祖安",
      "team": "河南省体育局",
      "totalPoints": 555,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 277.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 43,
      "athleteId": "cmjzpdkvz00p2bfhobxqhq2ex",
      "athleteName": "甄芝漫",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 541,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 270.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 44,
      "athleteId": "cmjzpdkx700pzbfholzzypp6c",
      "athleteName": "张梓童",
      "team": "河南省体育局",
      "totalPoints": 540,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 270,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 45,
      "athleteId": "cmjzpdky900qwbfhouv7qekds",
      "athleteName": "李明灿",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 520,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 46,
      "athleteId": "cmjzpdkvg00onbfhog8ooajnb",
      "athleteName": "任可心",
      "team": "四川体育职业学院",
      "totalPoints": 515,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 257.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 47,
      "athleteId": "cmjzpdky200qqbfhojspykxzi",
      "athleteName": "王珠彤",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 506,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 253,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 48,
      "athleteId": "cmjzpdkwi00phbfho8f0ltvne",
      "athleteName": "陈科羽",
      "team": "四川体育职业学院",
      "totalPoints": 505,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 252.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 176,
          "rank": 11
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 49,
      "athleteId": "cmjzpdko400i9bfhoakuixeat",
      "athleteName": "米馥豪",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 502,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 251,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 50,
      "athleteId": "cmjzpdknb00hlbfhoeja6849z",
      "athleteName": "张家睿",
      "team": "四川体育职业学院",
      "totalPoints": 502,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 251,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 51,
      "athleteId": "cmjzpdkxa00q2bfhoqpmx31h0",
      "athleteName": "王俊熙",
      "team": "河南省体育局",
      "totalPoints": 502,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 251,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 52,
      "athleteId": "cmjzpdkxa00q2bfhoqpmx31h0",
      "athleteName": "王俊熙",
      "team": "河南省体育局",
      "totalPoints": 502,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 251,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 53,
      "athleteId": "cmjzpdkxv00qkbfhogyt55uun",
      "athleteName": "王珈绮",
      "team": "四川体育职业学院",
      "totalPoints": 502,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 251,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 54,
      "athleteId": "cmjzpdkvc00okbfhoitspibck",
      "athleteName": "王淑哲",
      "team": "河南省体育局",
      "totalPoints": 495,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 247.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 55,
      "athleteId": "cmjzpdkxv00qkbfhogyt55uun",
      "athleteName": "王珈绮",
      "team": "四川体育职业学院",
      "totalPoints": 495,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 247.5,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 56,
      "athleteId": "cmjzpdkjw00f3bfhoswtiqk6b",
      "athleteName": "周斯言",
      "team": "个人",
      "totalPoints": 490,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 245,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 57,
      "athleteId": "cmjzpdkvv00ozbfho9q5gtmko",
      "athleteName": "闫妍",
      "team": "个人",
      "totalPoints": 486,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 243,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 58,
      "athleteId": "cmjzpdkk000f6bfho8me6szz1",
      "athleteName": "张诗涵",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 479,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 239.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 59,
      "athleteId": "cmjzpdkn800hibfho8h61j0ao",
      "athleteName": "刘子俊",
      "team": "四川体育职业学院",
      "totalPoints": 479,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 239.5,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 60,
      "athleteId": "athlete-贺舒玉-重庆市冬季运动管理中心",
      "athleteName": "贺舒玉",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 479,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 239.5,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 61,
      "athleteId": "cmjzpdkvk00oqbfhotqaedvcn",
      "athleteName": "武温暖",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 479,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 239.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 62,
      "athleteId": "cmjzpdklb00g0bfhoygeoy8ua",
      "athleteName": "赖文悦",
      "team": "四川体育职业学院",
      "totalPoints": 472,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 236,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 63,
      "athleteId": "cmjzpdkyc00qzbfhoa03c1g4b",
      "athleteName": "杨芷妍",
      "team": "四川体育职业学院",
      "totalPoints": 467,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 233.5,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 64,
      "athleteId": "cmjzpdkly00gfbfhof1a75ldx",
      "athleteName": "陈宇垚",
      "team": "四川体育职业学院",
      "totalPoints": 465,
      "competitionCount": 2,
      "bestRank": 1,
      "avgPoints": 232.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 105,
          "rank": 21
        }
      ]
    },
    {
      "rank": 65,
      "athleteId": "cmjzpdklb00g0bfhoygeoy8ua",
      "athleteName": "赖文悦",
      "team": "四川体育职业学院",
      "totalPoints": 456,
      "competitionCount": 2,
      "bestRank": 2,
      "avgPoints": 228,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 66,
      "athleteId": "cmjzpdkmo00h0bfho8q8f5myc",
      "athleteName": "魏子博",
      "team": "河南省体育局",
      "totalPoints": 454,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 227,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 67,
      "athleteId": "athlete-刘栩辰-重庆市冬季运动管理中心",
      "athleteName": "刘栩辰",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 454,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 227,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 68,
      "athleteId": "cmjzpdkxs00qhbfhoqhlhgnkz",
      "athleteName": "周绮润",
      "team": "个人",
      "totalPoints": 452,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 69,
      "athleteId": "cmjzpdkvv00ozbfho9q5gtmko",
      "athleteName": "闫妍",
      "team": "个人",
      "totalPoints": 447,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 223.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 70,
      "athleteId": "athlete-郭彧铭-个人",
      "athleteName": "郭彧铭",
      "team": "个人",
      "totalPoints": 438,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 219,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 71,
      "athleteId": "cmjzpdknm00hubfho7bvsgi98",
      "athleteName": "梁嘉俊",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 438,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 219,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 72,
      "athleteId": "cmjzpdkyc00qzbfhoa03c1g4b",
      "athleteName": "杨芷妍",
      "team": "四川体育职业学院",
      "totalPoints": 438,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 219,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 73,
      "athleteId": "cmjzpdkvg00onbfhog8ooajnb",
      "athleteName": "任可心",
      "team": "四川体育职业学院",
      "totalPoints": 438,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 219,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 74,
      "athleteId": "athlete-孙焕轲-河南省体育局",
      "athleteName": "孙焕轲",
      "team": "河南省体育局",
      "totalPoints": 438,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 219,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 75,
      "athleteId": "cmjzpdkkf00ffbfhovtl6y82z",
      "athleteName": "翟姝涵",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 437,
      "competitionCount": 2,
      "bestRank": 3,
      "avgPoints": 218.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        },
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 76,
      "athleteId": "cmjzpdkvz00p2bfhobxqhq2ex",
      "athleteName": "甄芝漫",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 437,
      "competitionCount": 2,
      "bestRank": 4,
      "avgPoints": 218.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 157,
          "rank": 13
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 77,
      "athleteId": "cmjzpdkoc00ifbfhogzsxfk2n",
      "athleteName": "黄子剑",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 436,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 218,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 78,
      "athleteId": "cmjzpdknf00hobfho0vnutqs9",
      "athleteName": "高翊博",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 429,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 214.5,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 79,
      "athleteId": "cmjzpdkog00iibfhotxzpqno2",
      "athleteName": "倪文凯",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 429,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 214.5,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 80,
      "athleteId": "cmjzpdkw600p8bfhouhcl0616",
      "athleteName": "袁芮涵",
      "team": "河南省体育局",
      "totalPoints": 426,
      "competitionCount": 2,
      "bestRank": 5,
      "avgPoints": 213,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 166,
          "rank": 12
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 81,
      "athleteId": "cmjzpdkkk00fibfhornkfaegp",
      "athleteName": "蒋柠萱",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 424,
      "competitionCount": 2,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 82,
      "athleteId": "athlete-刘栩辰-重庆市冬季运动管理中心",
      "athleteName": "刘栩辰",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 418,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 209,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 83,
      "athleteId": "cmjzpdky900qwbfhouv7qekds",
      "athleteName": "李明灿",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 418,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 209,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 84,
      "athleteId": "cmjzpdkzj00rwbfhoyoxomh3h",
      "athleteName": "梁跃飞",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 413,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 206.5,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 85,
      "athleteId": "cmjzpdkwi00phbfho8f0ltvne",
      "athleteName": "陈科羽",
      "team": "四川体育职业学院",
      "totalPoints": 399,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 199.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 157,
          "rank": 13
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 86,
      "athleteId": "cmjzpdkzf00rtbfhou6ca98ui",
      "athleteName": "程楚阳",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 398,
      "competitionCount": 2,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 87,
      "athleteId": "cmjzpdkzf00rtbfhou6ca98ui",
      "athleteName": "程楚阳",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 398,
      "competitionCount": 2,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 88,
      "athleteId": "cmjzpdklg00g3bfhopeqe1sgz",
      "athleteName": "周雨辰",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 391,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 195.5,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 89,
      "athleteId": "cmjzpdkzb00rqbfhozbj66j9r",
      "athleteName": "王冬杰",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 388,
      "competitionCount": 2,
      "bestRank": 8,
      "avgPoints": 194,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 90,
      "athleteId": "cmjzpdky200qqbfhojspykxzi",
      "athleteName": "王珠彤",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 388,
      "competitionCount": 2,
      "bestRank": 8,
      "avgPoints": 194,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 91,
      "athleteId": "cmjzpdkmr00h3bfhom6eectsq",
      "athleteName": "石昊桐",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 386,
      "competitionCount": 2,
      "bestRank": 9,
      "avgPoints": 193,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 92,
      "athleteId": "cmjzpdkmk00gxbfho34o28xv8",
      "athleteName": "赵严诺",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 383,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 191.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 93,
      "athleteId": "cmjzpdkkf00ffbfhovtl6y82z",
      "athleteName": "翟姝涵",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 383,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 191.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 94,
      "athleteId": "cmjzpdkzb00rqbfhozbj66j9r",
      "athleteName": "王冬杰",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 378,
      "competitionCount": 2,
      "bestRank": 8,
      "avgPoints": 189,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 95,
      "athleteId": "athlete-杨茗然-个人",
      "athleteName": "杨茗然",
      "team": "个人",
      "totalPoints": 376,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 188,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 96,
      "athleteId": "cmjzpdkw600p8bfhouhcl0616",
      "athleteName": "袁芮涵",
      "team": "河南省体育局",
      "totalPoints": 374,
      "competitionCount": 2,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 97,
      "athleteId": "cmjzpdkzj00rwbfhoyoxomh3h",
      "athleteName": "梁跃飞",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 374,
      "competitionCount": 2,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 98,
      "athleteId": "athlete-王若西-重庆市冬季运动管理中心",
      "athleteName": "王若西",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 367,
      "competitionCount": 2,
      "bestRank": 7,
      "avgPoints": 183.5,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 99,
      "athleteId": "cmjzpdkwf00pebfhoy6f0kq3d",
      "athleteName": "欧子娴",
      "team": "成都热雪奇迹",
      "totalPoints": 365,
      "competitionCount": 2,
      "bestRank": 9,
      "avgPoints": 182.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 166,
          "rank": 12
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 100,
      "athleteId": "cmjzpdkqp00kcbfho4at9jl9k",
      "athleteName": "赵酌",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 101,
      "athleteId": "cmjzpdkq000jrbfhovq39ke3q",
      "athleteName": "李若瑜",
      "team": "中关村一小",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 102,
      "athleteId": "cmjzpdkri00l3bfhogfhne4tr",
      "athleteName": "肖瑞林",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 103,
      "athleteId": "cmjzpdkr100kobfhorssp9cun",
      "athleteName": "张雨馨",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 104,
      "athleteId": "cmjzpdkp000ixbfhoom4nz6ao",
      "athleteName": "王阳明",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 105,
      "athleteId": "cmjzpdkop00iobfhokthvam34",
      "athleteName": "李金润",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 106,
      "athleteId": "cmjzpdkqp00kcbfho4at9jl9k",
      "athleteName": "赵酌",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 107,
      "athleteId": "cmjzpdkq000jrbfhovq39ke3q",
      "athleteName": "李若瑜",
      "team": "中关村一小",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 108,
      "athleteId": "cmjzpdkrp00l9bfhoebj1petm",
      "athleteName": "黄子歌",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 109,
      "athleteId": "cmjzpdkr100kobfhorssp9cun",
      "athleteName": "张雨馨",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 110,
      "athleteId": "cmjzpdkpd00j9bfho5ceqs1fb",
      "athleteName": "王润钰",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 111,
      "athleteId": "cmjzpdkop00iobfhokthvam34",
      "athleteName": "李金润",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 112,
      "athleteId": "athlete-杨舒雅-个人",
      "athleteName": "杨舒雅",
      "team": "个人",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 113,
      "athleteId": "athlete-陈松妤-个人",
      "athleteName": "陈松妤",
      "team": "个人",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 114,
      "athleteId": "cmjzpdk3v001ubfhorz5wf7hs",
      "athleteName": "王一臣",
      "team": "MAYA TEAM",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 115,
      "athleteId": "cmjzpdk120000bfhogt7ct1il",
      "athleteName": "李禹潭",
      "team": "重庆埃尔派体育文化传播有限公司",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 116,
      "athleteId": "cmjzpdkad007fbfho5yptlw6j",
      "athleteName": "高佳钇",
      "team": "速森体育",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 117,
      "athleteId": "cmjzpdk79004rbfhooqi32wqr",
      "athleteName": "邱嘉晴",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 118,
      "athleteId": "cmjzpdkgv00cxbfhohvvnjx3w",
      "athleteName": "窦羿",
      "team": "MAYA TEAM",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 119,
      "athleteId": "cmjzpdkex00b6bfho71gr5qj3",
      "athleteName": "李妙涵",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 120,
      "athleteId": "athlete-吴雨桐-个人",
      "athleteName": "吴雨桐",
      "team": "个人",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 121,
      "athleteId": "athlete-徐锦添-四川体育职业学院",
      "athleteName": "徐锦添",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 122,
      "athleteId": "cmjzpdkzy00s8bfhoiv0z32ls",
      "athleteName": "田嘉译",
      "team": "沈阳体育学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 123,
      "athleteId": "cmjzpdkzn00rzbfhozmvs8hx9",
      "athleteName": "夏可馨",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 124,
      "athleteId": "athlete-徐锦添-四川体育职业学院",
      "athleteName": "徐锦添",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 125,
      "athleteId": "cmjzpdky600qtbfhoiwp2kmsc",
      "athleteName": "平梓涵",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 126,
      "athleteId": "athlete-马世馨-四川体育职业学院",
      "athleteName": "马世馨",
      "team": "四川体育职业学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 127,
      "athleteId": "cmjzpdkzy00s8bfhoiv0z32ls",
      "athleteName": "田嘉译",
      "team": "沈阳体育学院",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 128,
      "athleteId": "cmjzpdkzn00rzbfhozmvs8hx9",
      "athleteName": "夏可馨",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 129,
      "athleteId": "athlete-陈露凝-个人",
      "athleteName": "陈露凝",
      "team": "个人",
      "totalPoints": 360,
      "competitionCount": 1,
      "bestRank": 1,
      "avgPoints": 360,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 360,
          "rank": 1
        }
      ]
    },
    {
      "rank": 130,
      "athleteId": "athlete-孙焕轲-河南省体育局",
      "athleteName": "孙焕轲",
      "team": "河南省体育局",
      "totalPoints": 352,
      "competitionCount": 2,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 176,
          "rank": 11
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 131,
      "athleteId": "cmjzpdklq00g9bfhoyym4yvox",
      "athleteName": "周雨欣",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 346,
      "competitionCount": 2,
      "bestRank": 8,
      "avgPoints": 173,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 132,
      "athleteId": "athlete-刘沐泽-个人",
      "athleteName": "刘沐泽",
      "team": "个人",
      "totalPoints": 337,
      "competitionCount": 2,
      "bestRank": 6,
      "avgPoints": 168.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 95,
          "rank": 23
        }
      ]
    },
    {
      "rank": 133,
      "athleteId": "cmjzpdkwf00pebfhoy6f0kq3d",
      "athleteName": "欧子娴",
      "team": "成都热雪奇迹",
      "totalPoints": 336,
      "competitionCount": 2,
      "bestRank": 10,
      "avgPoints": 168,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 134,
      "athleteId": "athlete-张钊宁-重庆市冬季运动管理中心",
      "athleteName": "张钊宁",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 333,
      "competitionCount": 2,
      "bestRank": 11,
      "avgPoints": 166.5,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 157,
          "rank": 13
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 135,
      "athleteId": "cmjzpdkqs00kfbfhoekaf7a8k",
      "athleteName": "竹禹丞",
      "team": "成都热雪奇迹",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 136,
      "athleteId": "cmjzpdkq400jubfhoejwo7naf",
      "athleteName": "罗暄晴",
      "team": "成都热雪奇迹",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 137,
      "athleteId": "cmjzpdkrm00l6bfho179zhn19",
      "athleteName": "刘彦钧凯",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 138,
      "athleteId": "cmjzpdkr500krbfhoaxpqfzp4",
      "athleteName": "杨子骞",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 139,
      "athleteId": "cmjzpdkp300j0bfhohn94zbb3",
      "athleteName": "艾思铭",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 140,
      "athleteId": "cmjzpdkot00irbfhoyhtlvzya",
      "athleteName": "杨蓝戈",
      "team": "个人",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 141,
      "athleteId": "cmjzpdkqv00kibfhosfplepf9",
      "athleteName": "苏一豪",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 142,
      "athleteId": "cmjzpdkqb00k0bfhow3hoof01",
      "athleteName": "蔡沛琳",
      "team": "成都热雪奇迹",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 143,
      "athleteId": "cmjzpdkul00nybfhosbxa0gbd",
      "athleteName": "张芝豪",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 144,
      "athleteId": "cmjzpdkr800kubfho15rzjdm7",
      "athleteName": "罗梓瑜",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 145,
      "athleteId": "cmjzpdkp700j3bfhoni6zgejk",
      "athleteName": "高琦硕",
      "team": "高峰",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 146,
      "athleteId": "cmjzpdkow00iubfhojkdi817d",
      "athleteName": "庞予涵",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 147,
      "athleteId": "athlete-王瞾霖-河南省体育局",
      "athleteName": "王瞾霖",
      "team": "河南省体育局",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 148,
      "athleteId": "athlete-陈松妤-个人",
      "athleteName": "陈松妤",
      "team": "个人",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 149,
      "athleteId": "athlete-张诗蕊-四川体育职业学院",
      "athleteName": "张诗蕊",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 150,
      "athleteId": "athlete-陈珉在-四川体育职业学院",
      "athleteName": "陈珉在",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 151,
      "athleteId": "athlete-杨舒雅-个人",
      "athleteName": "杨舒雅",
      "team": "个人",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 152,
      "athleteId": "athlete-王浩臣-Star单板队",
      "athleteName": "王浩臣",
      "team": "Star单板队",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 153,
      "athleteId": "cmjzpdkkx00frbfhonb81p7bu",
      "athleteName": "叶欣瑞",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 154,
      "athleteId": "athlete-张潇然-山西省冰雪运动中心",
      "athleteName": "张潇然",
      "team": "山西省冰雪运动中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 155,
      "athleteId": "athlete-陈珉在-四川体育职业学院",
      "athleteName": "陈珉在",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 156,
      "athleteId": "cmjzpdk3y001xbfhocfpqhm9n",
      "athleteName": "周翎",
      "team": "重庆埃尔派体育文化传播有限公司",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 157,
      "athleteId": "cmjzpdk190003bfhodyfd3ttw",
      "athleteName": "于忱汐",
      "team": "太原市第二少年体育学校",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 158,
      "athleteId": "cmjzpdkah007ibfhoakn9j359",
      "athleteName": "陈清桦",
      "team": "MAYA TEAM",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 159,
      "athleteId": "cmjzpdk7c004ubfhoayny1i0x",
      "athleteName": "沈凌羽",
      "team": "MAYA TEAM",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 160,
      "athleteId": "cmjzpdkgy00d0bfho9vble00l",
      "athleteName": "张鑫泽",
      "team": "速森体育",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 161,
      "athleteId": "cmjzpdkf000b9bfho3gs0l1zy",
      "athleteName": "臧怡然",
      "team": "个人",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 162,
      "athleteId": "cmjzpdkyn00r8bfho5hxp5a6u",
      "athleteName": "张乔淳佑",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 163,
      "athleteId": "athlete-黄志豪-四川体育职业学院",
      "athleteName": "黄志豪",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 164,
      "athleteId": "athlete-马世馨-四川体育职业学院",
      "athleteName": "马世馨",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 165,
      "athleteId": "cmjzpdl0200sbbfho4oyc84yi",
      "athleteName": "孙金隆",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 166,
      "athleteId": "cmjzpdkzr00s2bfhoszo6feyy",
      "athleteName": "余思源",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 167,
      "athleteId": "athlete-陈露凝-个人",
      "athleteName": "陈露凝",
      "team": "个人",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 168,
      "athleteId": "cmjzpdkyr00rbbfhon1ylf1wi",
      "athleteName": "欧阳聚勇",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 169,
      "athleteId": "athlete-黄志豪-四川体育职业学院",
      "athleteName": "黄志豪",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 170,
      "athleteId": "cmjzpdkxy00qnbfhoi0fohlcs",
      "athleteName": "叶欣悦",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 171,
      "athleteId": "athlete-罗优璇-河南省体育局",
      "athleteName": "罗优璇",
      "team": "河南省体育局",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 172,
      "athleteId": "cmjzpdl0900sebfhochiz1nog",
      "athleteName": "张天迈",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 173,
      "athleteId": "cmjzpdkzr00s2bfhoszo6feyy",
      "athleteName": "余思源",
      "team": "四川体育职业学院",
      "totalPoints": 329,
      "competitionCount": 1,
      "bestRank": 2,
      "avgPoints": 329,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 329,
          "rank": 2
        }
      ]
    },
    {
      "rank": 174,
      "athleteId": "cmjzpdklu00gcbfhoyosgjvcs",
      "athleteName": "苏常格",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 326,
      "competitionCount": 2,
      "bestRank": 9,
      "avgPoints": 163,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 175,
      "athleteId": "cmjzpdlbz0121bfhoofrhg803",
      "athleteName": "曾星越",
      "team": "个人",
      "totalPoints": 317,
      "competitionCount": 2,
      "bestRank": 11,
      "avgPoints": 158.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 176,
          "rank": 11
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 176,
      "athleteId": "cmjzpdkqv00kibfhosfplepf9",
      "athleteName": "苏一豪",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 177,
      "athleteId": "cmjzpdkq700jxbfhog679cr7g",
      "athleteName": "吴凌萱",
      "team": "华发冰雪热雪奇迹",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 178,
      "athleteId": "cmjzpdkrp00l9bfhoebj1petm",
      "athleteName": "黄子歌",
      "team": "四川体育职业学院",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 179,
      "athleteId": "cmjzpdkr800kubfho15rzjdm7",
      "athleteName": "罗梓瑜",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 180,
      "athleteId": "cmjzpdkp700j3bfhoni6zgejk",
      "athleteName": "高琦硕",
      "team": "高峰",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 181,
      "athleteId": "cmjzpdkow00iubfhojkdi817d",
      "athleteName": "庞予涵",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 182,
      "athleteId": "cmjzpdkto00n5bfho4j8lt3fl",
      "athleteName": "郑捷铭",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 183,
      "athleteId": "cmjzpdkq700jxbfhog679cr7g",
      "athleteName": "吴凌萱",
      "team": "华发冰雪热雪奇迹",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 184,
      "athleteId": "cmjzpdkrm00l6bfho179zhn19",
      "athleteName": "刘彦钧凯",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 185,
      "athleteId": "cmjzpdkr500krbfhoaxpqfzp4",
      "athleteName": "杨子骞",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 186,
      "athleteId": "cmjzpdkpa00j6bfholp1nby8r",
      "athleteName": "郭一远",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 187,
      "athleteId": "cmjzpdkot00irbfhoyhtlvzya",
      "athleteName": "杨蓝戈",
      "team": "个人",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 188,
      "athleteId": "athlete-闵家蕴-个人",
      "athleteName": "闵家蕴",
      "team": "个人",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 189,
      "athleteId": "athlete-郭展麟-黑龙江省雪上训练中心",
      "athleteName": "郭展麟",
      "team": "黑龙江省雪上训练中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 190,
      "athleteId": "cmjzpdkkx00frbfhonb81p7bu",
      "athleteName": "叶欣瑞",
      "team": "四川体育职业学院",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 191,
      "athleteId": "athlete-曾梓萱-四川体育职业学院",
      "athleteName": "曾梓萱",
      "team": "四川体育职业学院",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 192,
      "athleteId": "athlete-宋佳诺-Criss-Crew",
      "athleteName": "宋佳诺",
      "team": "Criss Crew",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 193,
      "athleteId": "cmjzpdk420020bfhodtt3x27o",
      "athleteName": "韩赫洺",
      "team": "四川体育职业学院",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 194,
      "athleteId": "cmjzpdk1d0006bfhokdvat4q3",
      "athleteName": "肖金茂",
      "team": "四川体育职业学院",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 195,
      "athleteId": "cmjzpdkak007lbfho9nwb723l",
      "athleteName": "张雨曈",
      "team": "MAYA TEAM",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 196,
      "athleteId": "cmjzpdk7g004xbfhordq0746d",
      "athleteName": "韦苗茵",
      "team": "大连雨彤体育赛事俱乐部",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 197,
      "athleteId": "cmjzpdkh100d3bfhojzgo7pr4",
      "athleteName": "李嘉祺",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 198,
      "athleteId": "cmjzpdkf300bcbfhoptyf96dp",
      "athleteName": "丁小苏",
      "team": "MAYA TEAM",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 199,
      "athleteId": "cmjzpdkyr00rbbfhon1ylf1wi",
      "athleteName": "欧阳聚勇",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 200,
      "athleteId": "athlete-王凯文-黑龙江省雪上训练中心",
      "athleteName": "王凯文",
      "team": "黑龙江省雪上训练中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 201,
      "athleteId": "cmjzpdkxy00qnbfhoi0fohlcs",
      "athleteName": "叶欣悦",
      "team": "四川体育职业学院",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 202,
      "athleteId": "athlete-罗优璇-河南省体育局",
      "athleteName": "罗优璇",
      "team": "河南省体育局",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 203,
      "athleteId": "cmjzpdl0900sebfhochiz1nog",
      "athleteName": "张天迈",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 204,
      "athleteId": "athlete-齐馨-A+自由式滑雪队",
      "athleteName": "齐馨",
      "team": "A+自由式滑雪队",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 205,
      "athleteId": "athlete-吴雨桐-个人",
      "athleteName": "吴雨桐",
      "team": "个人",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 206,
      "athleteId": "athlete-王玗希-个人",
      "athleteName": "王玗希",
      "team": "个人",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 207,
      "athleteId": "cmjzpdkyn00r8bfho5hxp5a6u",
      "athleteName": "张乔淳佑",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 208,
      "athleteId": "athlete-王凯文-黑龙江省雪上训练中心",
      "athleteName": "王凯文",
      "team": "黑龙江省雪上训练中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 209,
      "athleteId": "athlete-吴思琪-四川体育职业学院",
      "athleteName": "吴思琪",
      "team": "四川体育职业学院",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 210,
      "athleteId": "cmjzpdl0200sbbfho4oyc84yi",
      "athleteName": "孙金隆",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 211,
      "athleteId": "athlete-齐馨-A+自由式滑雪队",
      "athleteName": "齐馨",
      "team": "A+自由式滑雪队",
      "totalPoints": 303,
      "competitionCount": 1,
      "bestRank": 3,
      "avgPoints": 303,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 303,
          "rank": 3
        }
      ]
    },
    {
      "rank": 212,
      "athleteId": "cmjzpdkqy00klbfho0qckaxmt",
      "athleteName": "于镇赫",
      "team": "成都热雪奇迹",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 213,
      "athleteId": "cmjzpdkqb00k0bfhow3hoof01",
      "athleteName": "蔡沛琳",
      "team": "成都热雪奇迹",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 214,
      "athleteId": "cmjzpdkrt00lcbfhofvlcdm8r",
      "athleteName": "王梓丞",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 215,
      "athleteId": "cmjzpdkrb00kxbfhoqtbsgmzj",
      "athleteName": "张雅琪",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 216,
      "athleteId": "cmjzpdkpa00j6bfholp1nby8r",
      "athleteName": "郭一远",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 217,
      "athleteId": "cmjzpdkqs00kfbfhoekaf7a8k",
      "athleteName": "竹禹丞",
      "team": "成都热雪奇迹",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 218,
      "athleteId": "cmjzpdkqe00k3bfhoo18nnq3z",
      "athleteName": "李昊汐",
      "team": "西安热雪奇迹",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 219,
      "athleteId": "cmjzpdkri00l3bfhogfhne4tr",
      "athleteName": "肖瑞林",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 220,
      "athleteId": "cmjzpdkue00nrbfhoad1f9vqw",
      "athleteName": "叶涵汐",
      "team": "成都热雪奇迹",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 221,
      "athleteId": "cmjzpdkp000ixbfhoom4nz6ao",
      "athleteName": "王阳明",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 222,
      "athleteId": "cmjzpdks900lrbfho41ykduoi",
      "athleteName": "周昱含",
      "team": "沈阳王伟滑雪管理咨询服务有限公司",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 223,
      "athleteId": "cmjzpdl5y00xbbfhos8fn9jes",
      "athleteName": "戴宸熠",
      "team": "个人",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 224,
      "athleteId": "cmjzpdl3v00vnbfhosnyeji4m",
      "athleteName": "姜子悦",
      "team": "个人",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 225,
      "athleteId": "cmjzpdl7j00yqbfho51mw9qqo",
      "athleteName": "李奕泽",
      "team": "个人",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 226,
      "athleteId": "cmjzpdkn800hibfho8h61j0ao",
      "athleteName": "刘子俊",
      "team": "四川体育职业学院",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 227,
      "athleteId": "cmjzpdl4r00webfho0i331lns",
      "athleteName": "鲁淼",
      "team": "个人",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 228,
      "athleteId": "athlete-张依冉-山西省冰雪运动中心",
      "athleteName": "张依冉",
      "team": "山西省冰雪运动中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 229,
      "athleteId": "cmjzpdl9100zzbfhoe6g8bjfo",
      "athleteName": "李俣辛",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 230,
      "athleteId": "athlete-袁嘉伟-湖北省武术和冬季运动管理中心",
      "athleteName": "袁嘉伟",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 231,
      "athleteId": "cmjzpdkma00gobfhoa7jwls5r",
      "athleteName": "王曌霖",
      "team": "河南省体育局",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 232,
      "athleteId": "athlete-曾云泽-New-team",
      "athleteName": "曾云泽",
      "team": "New team",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 233,
      "athleteId": "athlete-颜嘉懿-个人",
      "athleteName": "颜嘉懿",
      "team": "个人",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 234,
      "athleteId": "athlete-张淑雅-山西省冰雪运动中心",
      "athleteName": "张淑雅",
      "team": "山西省冰雪运动中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 235,
      "athleteId": "cmjzpdko800icbfho0ujbn9cl",
      "athleteName": "罗皓桉",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 236,
      "athleteId": "athlete-李智贤-湖北省武术和冬季运动管理中心",
      "athleteName": "李智贤",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 237,
      "athleteId": "cmjzpdk450023bfhoh5itp0hi",
      "athleteName": "李承桓",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 238,
      "athleteId": "cmjzpdk1g0009bfhohs29gxqf",
      "athleteName": "须星漫",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 239,
      "athleteId": "cmjzpdkan007obfhov8p3d9ke",
      "athleteName": "贾子一南",
      "team": "重庆埃尔派体育文化传播有限公司",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 240,
      "athleteId": "cmjzpdk7k0050bfhof32r335m",
      "athleteName": "刘妍梦",
      "team": "中麟体育",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 241,
      "athleteId": "cmjzpdkh500d6bfhogif50da9",
      "athleteName": "马凯涛",
      "team": "新疆维吾尔自治区冬季运动训练中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 242,
      "athleteId": "cmjzpdkf700bfbfhosv5aak4b",
      "athleteName": "王子怡",
      "team": "个人",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 243,
      "athleteId": "cmjzpdkyu00rebfhoup8aq1ld",
      "athleteName": "王翊宁",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 244,
      "athleteId": "athlete-邓明涛-四川体育职业学院",
      "athleteName": "邓明涛",
      "team": "四川体育职业学院",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 245,
      "athleteId": "athlete-殷玉宣-河南省体育局",
      "athleteName": "殷玉宣",
      "team": "河南省体育局",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 246,
      "athleteId": "cmjzpdl0e00shbfhoc5njd0lb",
      "athleteName": "王晨",
      "team": "个人",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 247,
      "athleteId": "cmjzpdkyu00rebfhoup8aq1ld",
      "athleteName": "王翊宁",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 248,
      "athleteId": "athlete-邓明涛-四川体育职业学院",
      "athleteName": "邓明涛",
      "team": "四川体育职业学院",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 249,
      "athleteId": "athlete-周紫君-四川体育职业学院",
      "athleteName": "周紫君",
      "team": "四川体育职业学院",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 250,
      "athleteId": "cmjzpdl0e00shbfhoc5njd0lb",
      "athleteName": "王晨",
      "team": "个人",
      "totalPoints": 280,
      "competitionCount": 1,
      "bestRank": 4,
      "avgPoints": 280,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 280,
          "rank": 4
        }
      ]
    },
    {
      "rank": 251,
      "athleteId": "cmjzpdkwq00pnbfhozuu1pwmh",
      "athleteName": "孙婉迪",
      "team": "个人",
      "totalPoints": 276,
      "competitionCount": 2,
      "bestRank": 14,
      "avgPoints": 138,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 149,
          "rank": 14
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 252,
      "athleteId": "cmjzpdl1f00tcbfhowslhbsqq",
      "athleteName": "李佳馨",
      "team": "个人",
      "totalPoints": 275,
      "competitionCount": 2,
      "bestRank": 15,
      "avgPoints": 137.5,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 141,
          "rank": 15
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 253,
      "athleteId": "cmjzpdkwq00pnbfhozuu1pwmh",
      "athleteName": "孙婉迪",
      "team": "个人",
      "totalPoints": 268,
      "competitionCount": 2,
      "bestRank": 15,
      "avgPoints": 134,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 141,
          "rank": 15
        },
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 254,
      "athleteId": "cmjzpdkqe00k3bfhoo18nnq3z",
      "athleteName": "李昊汐",
      "team": "西安热雪奇迹",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 255,
      "athleteId": "cmjzpdkrw00lfbfhonz2a0d3b",
      "athleteName": "吕浩源",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 256,
      "athleteId": "cmjzpdkrf00l0bfhoi24xpm3k",
      "athleteName": "陈奕霏",
      "team": "个人",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 257,
      "athleteId": "cmjzpdkpd00j9bfho5ceqs1fb",
      "athleteName": "王润钰",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 258,
      "athleteId": "cmjzpdktv00nabfhomuj9q4hs",
      "athleteName": "杨宗葆",
      "team": "个人",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 259,
      "athleteId": "cmjzpdkq400jubfhoejwo7naf",
      "athleteName": "罗暄晴",
      "team": "成都热雪奇迹",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 260,
      "athleteId": "cmjzpdkrw00lfbfhonz2a0d3b",
      "athleteName": "吕浩源",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 261,
      "athleteId": "cmjzpdkrb00kxbfhoqtbsgmzj",
      "athleteName": "张雅琪",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 262,
      "athleteId": "cmjzpdksr00m8bfhorh0gxvtl",
      "athleteName": "李彦博",
      "team": "四川体育职业学院",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 263,
      "athleteId": "cmjzpdksc00lubfho18uchde6",
      "athleteName": "杨睿怡",
      "team": "华发冰雪热雪奇迹",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 264,
      "athleteId": "cmjzpdl6100xebfhoyxhqpnwq",
      "athleteName": "范家睿",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 265,
      "athleteId": "cmjzpdkme00grbfhokxgnro49",
      "athleteName": "范天成",
      "team": "个人",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 266,
      "athleteId": "cmjzpdl3y00vqbfho1jpzm9my",
      "athleteName": "王迎紫",
      "team": "四川体育职业学院",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 267,
      "athleteId": "athlete-周子钰-山西省冰雪运动中心",
      "athleteName": "周子钰",
      "team": "山西省冰雪运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 268,
      "athleteId": "cmjzpdl7n00ytbfhovb95z3d0",
      "athleteName": "吴昊隆",
      "team": "哈尔滨市冬季运动与水上运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 269,
      "athleteId": "athlete-王浩臣-Star单板队",
      "athleteName": "王浩臣",
      "team": "Star单板队",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 270,
      "athleteId": "cmjzpdl4v00whbfhoqb4c47yx",
      "athleteName": "刘心雅",
      "team": "个人",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 271,
      "athleteId": "athlete-杜雨欣-四川体育职业学院",
      "athleteName": "杜雨欣",
      "team": "四川体育职业学院",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 272,
      "athleteId": "cmjzpdl950102bfho492pljcc",
      "athleteName": "冯晨峰",
      "team": "沈阳体育学院",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 273,
      "athleteId": "cmjzpdkoc00ifbfhogzsxfk2n",
      "athleteName": "黄子剑",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 274,
      "athleteId": "athlete-方柏尧-个人",
      "athleteName": "方柏尧",
      "team": "个人",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 275,
      "athleteId": "cmjzpdkk700f9bfhoa69ugr1p",
      "athleteName": "姚予希",
      "team": "成都热雪奇迹",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 276,
      "athleteId": "athlete-孙晨曦-河北省体育局冬季运动中心",
      "athleteName": "孙晨曦",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 277,
      "athleteId": "athlete-张依冉-山西省冰雪运动中心",
      "athleteName": "张依冉",
      "team": "山西省冰雪运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 278,
      "athleteId": "athlete-何鲲鹏-湖北省武术和冬季运动管理中心",
      "athleteName": "何鲲鹏",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 279,
      "athleteId": "cmjzpdk4a0026bfhow0uq57v3",
      "athleteName": "陈鼎钧",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 280,
      "athleteId": "cmjzpdk1r000cbfho49uldr41",
      "athleteName": "古庭钰",
      "team": "中麟体育",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 281,
      "athleteId": "cmjzpdkar007rbfhoke7nk1ap",
      "athleteName": "李天圆",
      "team": "MAYA TEAM",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 282,
      "athleteId": "cmjzpdk7o0053bfhopj22d7t9",
      "athleteName": "赵南茜",
      "team": "太原市第二少年体育学校",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 283,
      "athleteId": "cmjzpdkh800d9bfho23y46y7o",
      "athleteName": "尚久智",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 284,
      "athleteId": "cmjzpdkfa00bibfho2rfh2opo",
      "athleteName": "张芊凝",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 285,
      "athleteId": "cmjzpdkyy00rhbfhomuo5xnnw",
      "athleteName": "宇威琦",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 286,
      "athleteId": "athlete-璩恩慧-河南省体育局",
      "athleteName": "璩恩慧",
      "team": "河南省体育局",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 287,
      "athleteId": "cmjzpdky600qtbfhoiwp2kmsc",
      "athleteName": "平梓涵",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 288,
      "athleteId": "athlete-韩萨仁其木格-小崔运动",
      "athleteName": "韩萨仁其木格",
      "team": "小崔运动",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 289,
      "athleteId": "cmjzpdkxe00q5bfho8r60z791",
      "athleteName": "崔芃森",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 290,
      "athleteId": "cmjzpdkyy00rhbfhomuo5xnnw",
      "athleteName": "宇威琦",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 291,
      "athleteId": "athlete-璩恩慧-河南省体育局",
      "athleteName": "璩恩慧",
      "team": "河南省体育局",
      "totalPoints": 260,
      "competitionCount": 1,
      "bestRank": 5,
      "avgPoints": 260,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 260,
          "rank": 5
        }
      ]
    },
    {
      "rank": 292,
      "athleteId": "cmjzpdkqi00k6bfhotz0ghplg",
      "athleteName": "吴玟颐",
      "team": "华发冰雪热雪奇迹",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 293,
      "athleteId": "cmjzpdks000libfhouk369qbh",
      "athleteName": "林朗",
      "team": "哈尔滨热雪奇迹",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 294,
      "athleteId": "cmjzpdkph00jcbfho8tsz6f9a",
      "athleteName": "左子正",
      "team": "左子正",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 295,
      "athleteId": "cmjzpdkqy00klbfho0qckaxmt",
      "athleteName": "于镇赫",
      "team": "成都热雪奇迹",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 296,
      "athleteId": "cmjzpdkqi00k6bfhotz0ghplg",
      "athleteName": "吴玟颐",
      "team": "华发冰雪热雪奇迹",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 297,
      "athleteId": "cmjzpdks000libfhouk369qbh",
      "athleteName": "林朗",
      "team": "哈尔滨热雪奇迹",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 298,
      "athleteId": "cmjzpdkp300j0bfhohn94zbb3",
      "athleteName": "艾思铭",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 299,
      "athleteId": "cmjzpdksg00lxbfhopa5j9xjd",
      "athleteName": "刘子歌",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 300,
      "athleteId": "cmjzpdl6400xhbfhoxutlhyxn",
      "athleteName": "赵一翔",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 301,
      "athleteId": "athlete-宋知敏-个人",
      "athleteName": "宋知敏",
      "team": "个人",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 302,
      "athleteId": "cmjzpdl4100vtbfhodt352vf0",
      "athleteName": "傅诗宸",
      "team": "个人",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 303,
      "athleteId": "athlete-宋佳诺-Criss-Crew",
      "athleteName": "宋佳诺",
      "team": "Criss Crew",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 304,
      "athleteId": "cmjzpdl7q00ywbfhorj0y439x",
      "athleteName": "王小虎",
      "team": "哈尔滨市冬季运动与水上运动中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 305,
      "athleteId": "cmjzpdl5000wkbfhocx121wgy",
      "athleteName": "王雪宸",
      "team": "长春市冬季运动管理中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 306,
      "athleteId": "athlete-郭婉诗-山西省冰雪运动中心",
      "athleteName": "郭婉诗",
      "team": "山西省冰雪运动中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 307,
      "athleteId": "cmjzpdl980105bfhowaz22rhr",
      "athleteName": "耿浩然",
      "team": "长春市冬季运动管理中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 308,
      "athleteId": "cmjzpdkog00iibfhotxzpqno2",
      "athleteName": "倪文凯",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 309,
      "athleteId": "athlete-郭婉诗-山西省冰雪运动中心",
      "athleteName": "郭婉诗",
      "team": "山西省冰雪运动中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 310,
      "athleteId": "cmjzpdk4d0029bfhowuueorwu",
      "athleteName": "聂榕辰",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 311,
      "athleteId": "cmjzpdk1u000fbfhou88cqxsm",
      "athleteName": "周子翕",
      "team": "成都热雪奇迹",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 312,
      "athleteId": "cmjzpdkav007ubfho0ossatdk",
      "athleteName": "王子兮",
      "team": "四川体育职业学院",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 313,
      "athleteId": "cmjzpdk7s0056bfhouamezkf4",
      "athleteName": "刘沛怡",
      "team": "MAYA TEAM",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 314,
      "athleteId": "cmjzpdkhb00dcbfho0ww5obv1",
      "athleteName": "吴凯",
      "team": "中麟体育",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 315,
      "athleteId": "cmjzpdkfd00blbfho7svp8try",
      "athleteName": "李雨濛",
      "team": "大连雨彤体育赛事俱乐部",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 316,
      "athleteId": "cmjzpdkxe00q5bfho8r60z791",
      "athleteName": "崔芃森",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 317,
      "athleteId": "cmjzpdkvr00owbfhobsujiv88",
      "athleteName": "孙焕轶",
      "team": "个人",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 318,
      "athleteId": "athlete-王培旭-四川体育职业学院",
      "athleteName": "王培旭",
      "team": "四川体育职业学院",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 319,
      "athleteId": "athlete-吴思琪-四川体育职业学院",
      "athleteName": "吴思琪",
      "team": "四川体育职业学院",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 320,
      "athleteId": "cmjzpdkvr00owbfhobsujiv88",
      "athleteName": "孙焕轶",
      "team": "个人",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 321,
      "athleteId": "athlete-王培旭-四川体育职业学院",
      "athleteName": "王培旭",
      "team": "四川体育职业学院",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 322,
      "athleteId": "cmjzpdkyg00r2bfhonpfve5v0",
      "athleteName": "李雅馨",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 323,
      "athleteId": "athlete-陈奕歌-河南省体育局",
      "athleteName": "陈奕歌",
      "team": "河南省体育局",
      "totalPoints": 242,
      "competitionCount": 1,
      "bestRank": 6,
      "avgPoints": 242,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 242,
          "rank": 6
        }
      ]
    },
    {
      "rank": 324,
      "athleteId": "cmjzpdlcg012dbfho7kz6iwv3",
      "athleteName": "林芮锋",
      "team": "四川体育职业学院",
      "totalPoints": 241,
      "competitionCount": 2,
      "bestRank": 15,
      "avgPoints": 120.5,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 141,
          "rank": 15
        },
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 100,
          "rank": 22
        }
      ]
    },
    {
      "rank": 325,
      "athleteId": "cmjzpdkql00k9bfhodvj2cshf",
      "athleteName": "卢彦伊",
      "team": "成都热雪奇迹",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 326,
      "athleteId": "cmjzpdkpk00jfbfhoiy6rykkw",
      "athleteName": "常冠廷",
      "team": "吉林市丰满区滑雪协会",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 327,
      "athleteId": "cmjzpdku000nfbfhod6ac8ew5",
      "athleteName": "冯一晗",
      "team": "成都热雪奇迹",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 328,
      "athleteId": "cmjzpdkql00k9bfhodvj2cshf",
      "athleteName": "卢彦伊",
      "team": "成都热雪奇迹",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 329,
      "athleteId": "cmjzpdkrt00lcbfhofvlcdm8r",
      "athleteName": "王梓丞",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 330,
      "athleteId": "cmjzpdkph00jcbfho8tsz6f9a",
      "athleteName": "左子正",
      "team": "左子正",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 331,
      "athleteId": "cmjzpdl6700xkbfhog299ru7s",
      "athleteName": "王梓铭",
      "team": "个人",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 332,
      "athleteId": "cmjzpdl4500vwbfhof9h7fpmt",
      "athleteName": "郭涵钰",
      "team": "个人",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 333,
      "athleteId": "cmjzpdkk000f6bfho8me6szz1",
      "athleteName": "张诗涵",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 334,
      "athleteId": "cmjzpdl7t00yzbfho1iuq4hpl",
      "athleteName": "张子骁",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 335,
      "athleteId": "athlete-孙晨曦-河北省体育局冬季运动中心",
      "athleteName": "孙晨曦",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 336,
      "athleteId": "cmjzpdl5400wnbfhonij1rfxe",
      "athleteName": "何芷昕",
      "team": "个人",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 337,
      "athleteId": "athlete-贺舒玉-重庆市冬季运动管理中心",
      "athleteName": "贺舒玉",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 338,
      "athleteId": "cmjzpdl9c0108bfhobi5x26qe",
      "athleteName": "李汶轩",
      "team": "长春市冬季运动管理中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 339,
      "athleteId": "athlete-吴海鑫-湖北省武术和冬季运动管理中心",
      "athleteName": "吴海鑫",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 340,
      "athleteId": "athlete-蒋桨-个人",
      "athleteName": "蒋桨",
      "team": "个人",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 341,
      "athleteId": "athlete-周子钰-山西省冰雪运动中心",
      "athleteName": "周子钰",
      "team": "山西省冰雪运动中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 342,
      "athleteId": "athlete-刘霓霏-个人",
      "athleteName": "刘霓霏",
      "team": "个人",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 343,
      "athleteId": "cmjzpdle0013sbfho3jgfbpad",
      "athleteName": "雷涵文",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 344,
      "athleteId": "athlete-袁嘉伟-湖北省武术和冬季运动管理中心",
      "athleteName": "袁嘉伟",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 345,
      "athleteId": "cmjzpdk4h002cbfho72bud3ju",
      "athleteName": "罗晓野",
      "team": "个人",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 346,
      "athleteId": "cmjzpdk21000ibfhojbpxew23",
      "athleteName": "ALBEESU",
      "team": "张家口市足球和冰雪运动学校",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 347,
      "athleteId": "cmjzpdkay007xbfhogkqgc8hp",
      "athleteName": "阿琪勒图",
      "team": "内蒙古嘉灏体育",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 348,
      "athleteId": "cmjzpdk7w0059bfhoqf1tul7a",
      "athleteName": "邰淼",
      "team": "内蒙古嘉灏体育",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 349,
      "athleteId": "cmjzpdkhf00dfbfhoxmumwieq",
      "athleteName": "杨武胜俊",
      "team": "四川体育职业学院",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 350,
      "athleteId": "cmjzpdkff00bobfhoseh0eifz",
      "athleteName": "张允童",
      "team": "个人",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 351,
      "athleteId": "cmjzpdkxh00q8bfho5kg4losu",
      "athleteName": "卢彦词",
      "team": "四川体育职业学院",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 352,
      "athleteId": "athlete-王玗希-个人",
      "athleteName": "王玗希",
      "team": "个人",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 353,
      "athleteId": "cmjzpdkz700rnbfhorz1h81nt",
      "athleteName": "李霁开",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 354,
      "athleteId": "cmjzpdkxl00qbbfhowxx5v1fm",
      "athleteName": "赵子钰",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 226,
      "competitionCount": 1,
      "bestRank": 7,
      "avgPoints": 226,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 226,
          "rank": 7
        }
      ]
    },
    {
      "rank": 355,
      "athleteId": "cmjzpdkpp00jibfho6rmhufv0",
      "athleteName": "王冠霖",
      "team": "吉林坤伦滑雪俱乐部",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 356,
      "athleteId": "cmjzpdku400nibfholr4qu1hr",
      "athleteName": "顾羽宸",
      "team": "成都热雪奇迹",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 357,
      "athleteId": "cmjzpdkuz00obbfho0os6d2tq",
      "athleteName": "肖辰俊熙",
      "team": "成都热雪奇迹",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 358,
      "athleteId": "cmjzpdkpk00jfbfhoiy6rykkw",
      "athleteName": "常冠廷",
      "team": "吉林市丰满区滑雪协会",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 359,
      "athleteId": "cmjzpdl6b00xnbfhodbirxnv7",
      "athleteName": "翁晨皓",
      "team": "个人",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 360,
      "athleteId": "cmjzpdkmk00gxbfho34o28xv8",
      "athleteName": "赵严诺",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 361,
      "athleteId": "cmjzpdl4900vzbfhonmuyxvkn",
      "athleteName": "张曦彤",
      "team": "个人",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 362,
      "athleteId": "cmjzpdkjw00f3bfhoswtiqk6b",
      "athleteName": "周斯言",
      "team": "个人",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 363,
      "athleteId": "cmjzpdl7x00z2bfhoq20wf501",
      "athleteName": "申桐",
      "team": "沈阳体育学院",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 364,
      "athleteId": "athlete-郭彧铭-个人",
      "athleteName": "郭彧铭",
      "team": "个人",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 365,
      "athleteId": "cmjzpdl5700wqbfhokaor4wmd",
      "athleteName": "包雨彤",
      "team": "沈阳体育学院",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 366,
      "athleteId": "athlete-张潇然-山西省冰雪运动中心",
      "athleteName": "张潇然",
      "team": "山西省冰雪运动中心",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 367,
      "athleteId": "cmjzpdkzy00s8bfhoiv0z32ls",
      "athleteName": "田嘉译",
      "team": "沈阳体育学院",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 368,
      "athleteId": "athlete-何鲲鹏-湖北省武术和冬季运动管理中心",
      "athleteName": "何鲲鹏",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 369,
      "athleteId": "athlete-褚天羿-Star单板队",
      "athleteName": "褚天羿",
      "team": "Star单板队",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 370,
      "athleteId": "athlete-杨峻溪-个人",
      "athleteName": "杨峻溪",
      "team": "个人",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 371,
      "athleteId": "cmjzpdk4k002fbfhoetv2avcp",
      "athleteName": "薛景尧",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 372,
      "athleteId": "cmjzpdk28000lbfhofq439jkr",
      "athleteName": "焦阳云朵",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 373,
      "athleteId": "cmjzpdkb20080bfhokp36urcp",
      "athleteName": "叶庆安",
      "team": "新疆维吾尔自治区冬季运动训练中心",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 374,
      "athleteId": "cmjzpdk80005cbfhoxp1aexei",
      "athleteName": "张诺笒",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 375,
      "athleteId": "cmjzpdkhi00dibfhokox5yuvz",
      "athleteName": "付壡喆",
      "team": "四川体育职业学院",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 376,
      "athleteId": "cmjzpdkfj00brbfhoma9b5hn6",
      "athleteName": "袁丽文",
      "team": "上海市静安区滑雪协会",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 377,
      "athleteId": "cmjzpdkxl00qbbfhowxx5v1fm",
      "athleteName": "赵子钰",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 378,
      "athleteId": "athlete-程曦辉-个人",
      "athleteName": "程曦辉",
      "team": "个人",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 379,
      "athleteId": "cmjzpdkyg00r2bfhonpfve5v0",
      "athleteName": "李雅馨",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 380,
      "athleteId": "cmjzpdkxh00q8bfho5kg4losu",
      "athleteName": "卢彦词",
      "team": "四川体育职业学院",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 381,
      "athleteId": "athlete-殷玉宣-河南省体育局",
      "athleteName": "殷玉宣",
      "team": "河南省体育局",
      "totalPoints": 212,
      "competitionCount": 1,
      "bestRank": 8,
      "avgPoints": 212,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 212,
          "rank": 8
        }
      ]
    },
    {
      "rank": 382,
      "athleteId": "cmjzpdkpt00jlbfho1kgjxby2",
      "athleteName": "王宏轩",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 383,
      "athleteId": "cmjzpdkv200oebfhojl3ujfok",
      "athleteName": "何心远",
      "team": "成都热雪奇迹",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 384,
      "athleteId": "cmjzpdksz00mhbfhojzwb0bac",
      "athleteName": "李京和",
      "team": "个人",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 385,
      "athleteId": "cmjzpdl6e00xqbfhoshn2l5ll",
      "athleteName": "侯胤翔",
      "team": "四川体育职业学院",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 386,
      "athleteId": "athlete-方柏尧-个人",
      "athleteName": "方柏尧",
      "team": "个人",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 387,
      "athleteId": "cmjzpdl4c00w2bfhokl4nmyi0",
      "athleteName": "张瑾苒",
      "team": "内蒙古体育职业学院",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 388,
      "athleteId": "athlete-颜嘉懿-个人",
      "athleteName": "颜嘉懿",
      "team": "个人",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 389,
      "athleteId": "cmjzpdl8000z5bfhof416yoli",
      "athleteName": "霍圣康",
      "team": "个人",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 390,
      "athleteId": "cmjzpdknb00hlbfhoeja6849z",
      "athleteName": "张家睿",
      "team": "四川体育职业学院",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 391,
      "athleteId": "cmjzpdl5b00wtbfhok8xo24ek",
      "athleteName": "栾智媛",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 392,
      "athleteId": "athlete-刘霓霏-个人",
      "athleteName": "刘霓霏",
      "team": "个人",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 393,
      "athleteId": "athlete-王瞾霖-河南省体育局",
      "athleteName": "王瞾霖",
      "team": "河南省体育局",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 394,
      "athleteId": "cmjzpdkkp00flbfho4fw9ataz",
      "athleteName": "冷昕莲",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 395,
      "athleteId": "cmjzpdknp00hxbfho2se1dzm8",
      "athleteName": "麦冠航",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 396,
      "athleteId": "athlete-吴海鑫-湖北省武术和冬季运动管理中心",
      "athleteName": "吴海鑫",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 397,
      "athleteId": "cmjzpdk4o002ibfhom3xfw7t5",
      "athleteName": "马昊文",
      "team": "MAYA TEAM",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 398,
      "athleteId": "cmjzpdk2d000obfhodusp02c8",
      "athleteName": "李汶瑾",
      "team": "MAYA TEAM",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 399,
      "athleteId": "cmjzpdkb50083bfhoc0bflgh2",
      "athleteName": "高琢皓",
      "team": "重庆埃尔派体育文化传播有限公司",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 400,
      "athleteId": "cmjzpdk84005fbfhocwqzec0v",
      "athleteName": "高宇宣",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 401,
      "athleteId": "cmjzpdkhm00dlbfhoh1eef7a9",
      "athleteName": "廉钰洁",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 402,
      "athleteId": "cmjzpdkfm00bubfhoxikrrhxg",
      "athleteName": "王婧霏",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 403,
      "athleteId": "cmjzpdkxo00qebfhomrlq3drg",
      "athleteName": "李雪聪",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 404,
      "athleteId": "cmjzpdkw300p5bfhodr0bg1op",
      "athleteName": "韩小贝",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 405,
      "athleteId": "athlete-周紫君-四川体育职业学院",
      "athleteName": "周紫君",
      "team": "四川体育职业学院",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 406,
      "athleteId": "cmjzpdkxo00qebfhomrlq3drg",
      "athleteName": "李雪聪",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 407,
      "athleteId": "cmjzpdkw300p5bfhodr0bg1op",
      "athleteName": "韩小贝",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 199,
      "competitionCount": 1,
      "bestRank": 9,
      "avgPoints": 199,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 199,
          "rank": 9
        }
      ]
    },
    {
      "rank": 408,
      "athleteId": "cmjzpdkpw00jobfho96ief0p6",
      "athleteName": "马健剀",
      "team": "吉林坤伦滑雪俱乐部",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 409,
      "athleteId": "cmjzpdkt300mkbfhogytw8qz1",
      "athleteName": "熊泽瑞",
      "team": "张家口乔与杨体育服务有限公司",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 410,
      "athleteId": "cmjzpdl6h00xtbfhod637cmn5",
      "athleteName": "周珈禾",
      "team": "黑龙江冰雪体育职业学院",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 411,
      "athleteId": "athlete-王睿文-Criss-Crew",
      "athleteName": "王睿文",
      "team": "Criss Crew",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 412,
      "athleteId": "athlete-郭芮溪-个人",
      "athleteName": "郭芮溪",
      "team": "个人",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 413,
      "athleteId": "cmjzpdl8300z8bfhoclhueadd",
      "athleteName": "曾国强",
      "team": "个人",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 414,
      "athleteId": "athlete-张钊宁-重庆市冬季运动管理中心",
      "athleteName": "张钊宁",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 415,
      "athleteId": "cmjzpdl5f00wwbfhoxyrpjrpk",
      "athleteName": "刘宣成",
      "team": "个人",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 416,
      "athleteId": "athlete-张淑雅-山西省冰雪运动中心",
      "athleteName": "张淑雅",
      "team": "山西省冰雪运动中心",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 417,
      "athleteId": "athlete-赵开元-湖北省武术和冬季运动管理中心",
      "athleteName": "赵开元",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 418,
      "athleteId": "cmjzpdkmu00h6bfhoz183j346",
      "athleteName": "宁浩然",
      "team": "成都热雪奇迹",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 419,
      "athleteId": "cmjzpdld4012zbfhoeg1jphpu",
      "athleteName": "于瀚",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 420,
      "athleteId": "athlete-杜雨欣-四川体育职业学院",
      "athleteName": "杜雨欣",
      "team": "四川体育职业学院",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 421,
      "athleteId": "cmjzpdk4r002lbfhoazgg5gnu",
      "athleteName": "周天朗",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 422,
      "athleteId": "cmjzpdk2g000rbfhodm7jwa0h",
      "athleteName": "朱安然",
      "team": "上海雪酷滑雪竞技队",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 423,
      "athleteId": "cmjzpdkb80086bfhocqooy0qe",
      "athleteName": "马赛",
      "team": "四川体育职业学院",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 424,
      "athleteId": "cmjzpdk87005ibfhohu5zegc3",
      "athleteName": "汪昱诺",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 425,
      "athleteId": "cmjzpdkhq00dobfhogqrw3gj7",
      "athleteName": "苗誉镨",
      "team": "速森体育",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 426,
      "athleteId": "cmjzpdkfq00bxbfho3nqtwyo2",
      "athleteName": "邵菲梵",
      "team": "北京天高云淡体育有限公司",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 427,
      "athleteId": "athlete-陈奕歌-河南省体育局",
      "athleteName": "陈奕歌",
      "team": "河南省体育局",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 428,
      "athleteId": "cmjzpdl3200uvbfho4hlumf98",
      "athleteName": "徐思远",
      "team": "沈阳体育学院",
      "totalPoints": 187,
      "competitionCount": 1,
      "bestRank": 10,
      "avgPoints": 187,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 187,
          "rank": 10
        }
      ]
    },
    {
      "rank": 429,
      "athleteId": "cmjzpdl6l00xwbfhowjl65bn5",
      "athleteName": "林佳易",
      "team": "哈尔滨市冬季运动与水上运动中心",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 430,
      "athleteId": "cmjzpdkly00gfbfhof1a75ldx",
      "athleteName": "陈宇垚",
      "team": "四川体育职业学院",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 431,
      "athleteId": "cmjzpdkkk00fibfhornkfaegp",
      "athleteName": "蒋柠萱",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 432,
      "athleteId": "cmjzpdl8700zbbfhohn1861h0",
      "athleteName": "孙琪翔",
      "team": "哈尔滨市冬季运动与水上运动中心",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 433,
      "athleteId": "cmjzpdknf00hobfho0vnutqs9",
      "athleteName": "高翊博",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 434,
      "athleteId": "cmjzpdl5j00wzbfho4iy8wvyi",
      "athleteName": "王籽童",
      "team": "辽宁省体育事业发展中心",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 435,
      "athleteId": "athlete-张益嘉-河南省体育局",
      "athleteName": "张益嘉",
      "team": "河南省体育局",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 436,
      "athleteId": "athlete-杨峻溪-个人",
      "athleteName": "杨峻溪",
      "team": "个人",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 437,
      "athleteId": "athlete-监柏霖-个人",
      "athleteName": "监柏霖",
      "team": "个人",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 438,
      "athleteId": "athlete-周若慈-个人",
      "athleteName": "周若慈",
      "team": "个人",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 439,
      "athleteId": "cmjzpdld80132bfhoadlpmpwp",
      "athleteName": "邓与骜",
      "team": "成都热雪奇迹",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 440,
      "athleteId": "athlete-曾梓萱-四川体育职业学院",
      "athleteName": "曾梓萱",
      "team": "四川体育职业学院",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 441,
      "athleteId": "cmjzpdk4v002obfho9tmsoz86",
      "athleteName": "马昊迪",
      "team": "MAYA TEAM",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 442,
      "athleteId": "cmjzpdk2l000ubfhoux0a5q2h",
      "athleteName": "李宛凝",
      "team": "大连雨彤体育赛事俱乐部",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 443,
      "athleteId": "cmjzpdkbc0089bfhow3t9kyiy",
      "athleteName": "徐承昊",
      "team": "上海市静安区滑雪协会",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 444,
      "athleteId": "cmjzpdk8b005lbfho4c97oyke",
      "athleteName": "杨卓尔",
      "team": "中麟体育",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 445,
      "athleteId": "cmjzpdkht00drbfhoo183z471",
      "athleteName": "王嘉崎",
      "team": "新疆维吾尔自治区冬季运动训练中心",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 446,
      "athleteId": "cmjzpdkft00c0bfhofpnn2mnq",
      "athleteName": "贾釉茜",
      "team": "吉林省阔展体育服务有限公司",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 447,
      "athleteId": "cmjzpdkz700rnbfhorz1h81nt",
      "athleteName": "李霁开",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 176,
      "competitionCount": 1,
      "bestRank": 11,
      "avgPoints": 176,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 176,
          "rank": 11
        }
      ]
    },
    {
      "rank": 448,
      "athleteId": "cmjzpdl6o00xzbfhoj6u9bsim",
      "athleteName": "王泊文",
      "team": "个人",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 449,
      "athleteId": "athlete-曾云泽-New-team",
      "athleteName": "曾云泽",
      "team": "New team",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 450,
      "athleteId": "athlete-张迦淳-个人",
      "athleteName": "张迦淳",
      "team": "个人",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 451,
      "athleteId": "cmjzpdl8b00zebfhoaawem8yw",
      "athleteName": "李星翰",
      "team": "沈阳体育学院",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 452,
      "athleteId": "cmjzpdknm00hubfho7bvsgi98",
      "athleteName": "梁嘉俊",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 453,
      "athleteId": "cmjzpdklg00g3bfhopeqe1sgz",
      "athleteName": "周雨辰",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 454,
      "athleteId": "athlete-李智贤-湖北省武术和冬季运动管理中心",
      "athleteName": "李智贤",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 455,
      "athleteId": "cmjzpdlc30124bfho0cnhg41y",
      "athleteName": "马泰铭",
      "team": "成都热雪奇迹",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 456,
      "athleteId": "athlete-陶志伟-山西省冰雪运动中心",
      "athleteName": "陶志伟",
      "team": "山西省冰雪运动中心",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 457,
      "athleteId": "athlete-张迦淳-个人",
      "athleteName": "张迦淳",
      "team": "个人",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 458,
      "athleteId": "cmjzpdldb0135bfhoenavjvdu",
      "athleteName": "罗知腾",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 459,
      "athleteId": "athlete-郭展麟-黑龙江省雪上训练中心",
      "athleteName": "郭展麟",
      "team": "黑龙江省雪上训练中心",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 460,
      "athleteId": "athlete-张益嘉-河南省体育局",
      "athleteName": "张益嘉",
      "team": "河南省体育局",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 461,
      "athleteId": "athlete-赵开元-湖北省武术和冬季运动管理中心",
      "athleteName": "赵开元",
      "team": "湖北省武术和冬季运动管理中心",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 462,
      "athleteId": "cmjzpdk4y002rbfho4iulm870",
      "athleteName": "蒋文栋",
      "team": "MAYA TEAM",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 463,
      "athleteId": "cmjzpdk2r000xbfho3kcj25v9",
      "athleteName": "刘和一",
      "team": "北京天高云淡体育有限公司",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 464,
      "athleteId": "cmjzpdkbg008cbfhoy1byx6zt",
      "athleteName": "刘宸卓",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 465,
      "athleteId": "cmjzpdk8f005obfhos0k3gyvq",
      "athleteName": "黄卫瑄",
      "team": "吉林省阔展体育服务有限公司",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 466,
      "athleteId": "cmjzpdkhx00dubfhogq1rb5ct",
      "athleteName": "杨伯伦",
      "team": "个人",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 467,
      "athleteId": "cmjzpdkfw00c3bfhocx32ry78",
      "athleteName": "叶香菲",
      "team": "大连雨彤体育赛事俱乐部",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 468,
      "athleteId": "athlete-周钰芯-四川体育职业学院",
      "athleteName": "周钰芯",
      "team": "四川体育职业学院",
      "totalPoints": 166,
      "competitionCount": 1,
      "bestRank": 12,
      "avgPoints": 166,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 166,
          "rank": 12
        }
      ]
    },
    {
      "rank": 469,
      "athleteId": "cmjzpdl6r00y2bfhojet9qq4z",
      "athleteName": "杨翔宇",
      "team": "个人",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 470,
      "athleteId": "athlete-刘桐朔-石家庄市冰雪与足球运动中心",
      "athleteName": "刘桐朔",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 471,
      "athleteId": "athlete-周若慈-个人",
      "athleteName": "周若慈",
      "team": "个人",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 472,
      "athleteId": "cmjzpdl8f00zhbfho8fu1sd6q",
      "athleteName": "刘济豪",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 473,
      "athleteId": "athlete-梁明峰-山西省冰雪运动中心",
      "athleteName": "梁明峰",
      "team": "山西省冰雪运动中心",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 474,
      "athleteId": "cmjzpdkl100fubfho8tg9xa1r",
      "athleteName": "杨可轩",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 475,
      "athleteId": "cmjzpdlc90127bfho5v74jhb5",
      "athleteName": "程锦辰",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 476,
      "athleteId": "athlete-张诗蕊-四川体育职业学院",
      "athleteName": "张诗蕊",
      "team": "四川体育职业学院",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 477,
      "athleteId": "cmjzpdk52002ubfho239nfqzd",
      "athleteName": "高宇承",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 478,
      "athleteId": "cmjzpdk2v0010bfhoaewhfwuy",
      "athleteName": "李子纯",
      "team": "个人",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 479,
      "athleteId": "cmjzpdkbi008fbfhogpqphcae",
      "athleteName": "吉淏辰",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 480,
      "athleteId": "cmjzpdk8i005rbfho2oo4b7sh",
      "athleteName": "赵浛西",
      "team": "爱上雪体育产业发展（北京）有限公司",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 481,
      "athleteId": "cmjzpdki100dxbfhozwyr4wjz",
      "athleteName": "常一鸣",
      "team": "锐冠青少年竞技滑雪队",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 482,
      "athleteId": "cmjzpdkg000c6bfhoihmgqo4f",
      "athleteName": "刘墨晗",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 483,
      "athleteId": "athlete-梁宝云-广西射击射箭运动发展中心",
      "athleteName": "梁宝云",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 484,
      "athleteId": "athlete-梁宝云-广西射击射箭运动发展中心",
      "athleteName": "梁宝云",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 157,
      "competitionCount": 1,
      "bestRank": 13,
      "avgPoints": 157,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 157,
          "rank": 13
        }
      ]
    },
    {
      "rank": 485,
      "athleteId": "cmjzpdl6v00y5bfhoikyoooch",
      "athleteName": "刘泽琛",
      "team": "哈尔滨市冬季运动与水上运动中心",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 486,
      "athleteId": "athlete-监柏霖-个人",
      "athleteName": "监柏霖",
      "team": "个人",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 487,
      "athleteId": "athlete-马珞恩-个人",
      "athleteName": "马珞恩",
      "team": "个人",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 488,
      "athleteId": "cmjzpdl8j00zkbfhohoc9ab91",
      "athleteName": "贺天佑",
      "team": "四川体育职业学院",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 489,
      "athleteId": "athlete-冯思源-个人",
      "athleteName": "冯思源",
      "team": "个人",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 490,
      "athleteId": "cmjzpdklq00g9bfhoyym4yvox",
      "athleteName": "周雨欣",
      "team": "广西射击射箭运动发展中心",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 491,
      "athleteId": "cmjzpdlcc012abfhogtiodmxg",
      "athleteName": "朱秋霖",
      "team": "个人",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 492,
      "athleteId": "athlete-张哲朗-个人",
      "athleteName": "张哲朗",
      "team": "个人",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 493,
      "athleteId": "athlete-郭芮溪-个人",
      "athleteName": "郭芮溪",
      "team": "个人",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 494,
      "athleteId": "cmjzpdldi013bbfhoor5kxh26",
      "athleteName": "王天磊",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 495,
      "athleteId": "cmjzpdk55002xbfhookyfbfz5",
      "athleteName": "刘昱辰",
      "team": "MAYA TEAM",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 496,
      "athleteId": "cmjzpdk2z0013bfho4korkuwl",
      "athleteName": "李获稻",
      "team": "成都热雪奇迹",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 497,
      "athleteId": "cmjzpdkbm008ibfhod1hwvi59",
      "athleteName": "邢子瀚",
      "team": "纳西亚",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 498,
      "athleteId": "cmjzpdk8m005ubfhou7sh1nue",
      "athleteName": "邹齐",
      "team": "个人",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 499,
      "athleteId": "cmjzpdki500e0bfho3yo046wx",
      "athleteName": "杨一丁",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 500,
      "athleteId": "cmjzpdkg300c9bfhov8mzyq6r",
      "athleteName": "朱珈仪",
      "team": "吉林市冬季运动管理中心",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 501,
      "athleteId": "cmjzpdkwn00pkbfhoanaefh2j",
      "athleteName": "万洛辰",
      "team": "个人",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 502,
      "athleteId": "athlete-周钰芯-四川体育职业学院",
      "athleteName": "周钰芯",
      "team": "四川体育职业学院",
      "totalPoints": 149,
      "competitionCount": 1,
      "bestRank": 14,
      "avgPoints": 149,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 149,
          "rank": 14
        }
      ]
    },
    {
      "rank": 503,
      "athleteId": "cmjzpdl6y00y8bfho0nmikypo",
      "athleteName": "蒲彦西",
      "team": "个人",
      "totalPoints": 142,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 142,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 142,
          "rank": 15
        }
      ]
    },
    {
      "rank": 504,
      "athleteId": "cmjzpdl8n00znbfhovc4w60l6",
      "athleteName": "陈宥呈",
      "team": "个人",
      "totalPoints": 142,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 142,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 142,
          "rank": 15
        }
      ]
    },
    {
      "rank": 505,
      "athleteId": "athlete-王霖逸-个人",
      "athleteName": "王霖逸",
      "team": "个人",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 506,
      "athleteId": "athlete-杨茗然-个人",
      "athleteName": "杨茗然",
      "team": "个人",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 507,
      "athleteId": "athlete-高艺轩-个人",
      "athleteName": "高艺轩",
      "team": "个人",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 508,
      "athleteId": "athlete-马珞恩-个人",
      "athleteName": "马珞恩",
      "team": "个人",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 509,
      "athleteId": "cmjzpdk590030bfho0px3f8sf",
      "athleteName": "张朔源",
      "team": "个人",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 510,
      "athleteId": "cmjzpdk320016bfhoxp3pgkx8",
      "athleteName": "武子蓉",
      "team": "太原市第二少年体育学校",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 511,
      "athleteId": "cmjzpdkbq008lbfhoegwsywal",
      "athleteName": "于谨赫",
      "team": "速森体育",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 512,
      "athleteId": "cmjzpdk8q005xbfhoxswwnnkl",
      "athleteName": "刘姝廷",
      "team": "中麟体育",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 513,
      "athleteId": "cmjzpdki900e3bfho6qc9ewhq",
      "athleteName": "郑研伟",
      "team": "个人",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 514,
      "athleteId": "cmjzpdkg700ccbfhossdgz9de",
      "athleteName": "韩非桐",
      "team": "速森体育",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 515,
      "athleteId": "athlete-左均怡-个人",
      "athleteName": "左均怡",
      "team": "个人",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 516,
      "athleteId": "athlete-左均怡-个人",
      "athleteName": "左均怡",
      "team": "个人",
      "totalPoints": 141,
      "competitionCount": 1,
      "bestRank": 15,
      "avgPoints": 141,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 141,
          "rank": 15
        }
      ]
    },
    {
      "rank": 517,
      "athleteId": "cmjzpdl7100ybbfhoo3p1hnvm",
      "athleteName": "王梓伊",
      "team": "个人",
      "totalPoints": 135,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 135,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 135,
          "rank": 16
        }
      ]
    },
    {
      "rank": 518,
      "athleteId": "cmjzpdkmo00h0bfho8q8f5myc",
      "athleteName": "魏子博",
      "team": "河南省体育局",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 519,
      "athleteId": "cmjzpdklu00gcbfhoyosgjvcs",
      "athleteName": "苏常格",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 520,
      "athleteId": "athlete-马铂淙-个人",
      "athleteName": "马铂淙",
      "team": "个人",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 521,
      "athleteId": "cmjzpdk5d0033bfhoh5d8fwx8",
      "athleteName": "张睦然",
      "team": "MAYA TEAM",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 522,
      "athleteId": "cmjzpdk360019bfho7kcuehdp",
      "athleteName": "张语珊",
      "team": "个人",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 523,
      "athleteId": "cmjzpdkbu008obfhondaq2opk",
      "athleteName": "刘哲鸣",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 524,
      "athleteId": "cmjzpdk8u0060bfho1vg3hn2i",
      "athleteName": "周焕熙",
      "team": "爱上雪体育产业发展（北京）有限公司",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 525,
      "athleteId": "cmjzpdkid00e6bfho99rqbw7s",
      "athleteName": "樊冠序",
      "team": "吉林省阔展体育服务有限公司",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 526,
      "athleteId": "cmjzpdkga00cfbfhoyfzzm0hh",
      "athleteName": "杨笑语",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 527,
      "athleteId": "cmjzpdl1f00tcbfhowslhbsqq",
      "athleteName": "李佳馨",
      "team": "个人",
      "totalPoints": 134,
      "competitionCount": 1,
      "bestRank": 16,
      "avgPoints": 134,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 134,
          "rank": 16
        }
      ]
    },
    {
      "rank": 528,
      "athleteId": "cmjzpdl7500yebfhon5cb75ux",
      "athleteName": "冯翊瀚",
      "team": "个人",
      "totalPoints": 129,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 129,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
          "location": "成都热雪奇迹室内滑雪场",
          "points": 129,
          "rank": 17
        }
      ]
    },
    {
      "rank": 529,
      "athleteId": "athlete-褚天羿-Star单板队",
      "athleteName": "褚天羿",
      "team": "Star单板队",
      "totalPoints": 127,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 127,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 530,
      "athleteId": "athlete-刘桐朔-石家庄市冰雪与足球运动中心",
      "athleteName": "刘桐朔",
      "team": "石家庄市冰雪与足球运动中心",
      "totalPoints": 127,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 127,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 531,
      "athleteId": "cmjzpdk5g0036bfhojj36lkyb",
      "athleteName": "白雨奇",
      "team": "大连雨彤体育赛事俱乐部",
      "totalPoints": 127,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 127,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 532,
      "athleteId": "cmjzpdk3a001cbfhosbj1b2bo",
      "athleteName": "李墨涵",
      "team": "中麟体育",
      "totalPoints": 127,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 127,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 533,
      "athleteId": "cmjzpdkbx008rbfho8v83oc7a",
      "athleteName": "孙屹卓",
      "team": "MAYA TEAM",
      "totalPoints": 127,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 127,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 534,
      "athleteId": "cmjzpdk8x0063bfhobic6c948",
      "athleteName": "闫艺宸",
      "team": "个人",
      "totalPoints": 127,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 127,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 535,
      "athleteId": "cmjzpdkih00e9bfholi22uh9o",
      "athleteName": "曲星铭",
      "team": "个人",
      "totalPoints": 127,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 127,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 536,
      "athleteId": "cmjzpdkge00cibfhoiniuvbof",
      "athleteName": "房洢伊",
      "team": "个人",
      "totalPoints": 127,
      "competitionCount": 1,
      "bestRank": 17,
      "avgPoints": 127,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 127,
          "rank": 17
        }
      ]
    },
    {
      "rank": 537,
      "athleteId": "athlete-蒋桨-个人",
      "athleteName": "蒋桨",
      "team": "个人",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 538,
      "athleteId": "athlete-王若西-重庆市冬季运动管理中心",
      "athleteName": "王若西",
      "team": "重庆市冬季运动管理中心",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 539,
      "athleteId": "athlete-刘音里-个人",
      "athleteName": "刘音里",
      "team": "个人",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 540,
      "athleteId": "cmjzpdk5j0039bfho0a2ww5j0",
      "athleteName": "王子溪",
      "team": "KingProTeam",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 541,
      "athleteId": "cmjzpdk3e001fbfho3hhippx7",
      "athleteName": "李雨萱",
      "team": "个人",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 542,
      "athleteId": "cmjzpdkc1008ubfho003mc70z",
      "athleteName": "嘎日玛盖",
      "team": "新疆维吾尔自治区冬季运动训练中心",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 543,
      "athleteId": "cmjzpdk900066bfho8yqnek9e",
      "athleteName": "徐紫馨",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 544,
      "athleteId": "cmjzpdkik00ecbfho4luzmtsp",
      "athleteName": "付若洵",
      "team": "KingProTeam",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 545,
      "athleteId": "cmjzpdkgh00clbfhozrtx7frf",
      "athleteName": "白默函",
      "team": "重庆埃尔派体育文化传播有限公司",
      "totalPoints": 121,
      "competitionCount": 1,
      "bestRank": 18,
      "avgPoints": 121,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 121,
          "rank": 18
        }
      ]
    },
    {
      "rank": 546,
      "athleteId": "athlete-陶志伟-山西省冰雪运动中心",
      "athleteName": "陶志伟",
      "team": "山西省冰雪运动中心",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 547,
      "athleteId": "athlete-王玮怡-个人",
      "athleteName": "王玮怡",
      "team": "个人",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 548,
      "athleteId": "athlete-王睿文-Criss-Crew",
      "athleteName": "王睿文",
      "team": "Criss Crew",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 549,
      "athleteId": "cmjzpdk5m003cbfhosvizw7ep",
      "athleteName": "黄益航",
      "team": "四川体育职业学院",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 550,
      "athleteId": "cmjzpdk3h001ibfho4lvkrl73",
      "athleteName": "马音霓",
      "team": "爱上雪体育产业发展（北京）有限公司",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 551,
      "athleteId": "cmjzpdkc4008xbfhoyml7rqhz",
      "athleteName": "崔承泽",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 552,
      "athleteId": "cmjzpdk930069bfho54mrsdcb",
      "athleteName": "王艺潼",
      "team": "个人",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 553,
      "athleteId": "cmjzpdkio00efbfho8e577j04",
      "athleteName": "吴保江",
      "team": "零站单板滑雪俱乐部",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 554,
      "athleteId": "cmjzpdkgl00cobfhobsdhpr93",
      "athleteName": "刘怡廷",
      "team": "张家口市足球和冰雪运动学校",
      "totalPoints": 115,
      "competitionCount": 1,
      "bestRank": 19,
      "avgPoints": 115,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 115,
          "rank": 19
        }
      ]
    },
    {
      "rank": 555,
      "athleteId": "cmjzpdlbz0121bfhoofrhg803",
      "athleteName": "曾星越",
      "team": "个人",
      "totalPoints": 110,
      "competitionCount": 1,
      "bestRank": 20,
      "avgPoints": 110,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 110,
          "rank": 20
        }
      ]
    },
    {
      "rank": 556,
      "athleteId": "athlete-孙翎皓-Criss-Crew",
      "athleteName": "孙翎皓",
      "team": "Criss Crew",
      "totalPoints": 110,
      "competitionCount": 1,
      "bestRank": 20,
      "avgPoints": 110,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 110,
          "rank": 20
        }
      ]
    },
    {
      "rank": 557,
      "athleteId": "cmjzpdk5q003fbfho5e0w98bk",
      "athleteName": "夏誉领",
      "team": "上海雪酷滑雪竞技队",
      "totalPoints": 110,
      "competitionCount": 1,
      "bestRank": 20,
      "avgPoints": 110,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 110,
          "rank": 20
        }
      ]
    },
    {
      "rank": 558,
      "athleteId": "cmjzpdk3k001lbfho3ro7vqgl",
      "athleteName": "张兆檬",
      "team": "KingProTeam",
      "totalPoints": 110,
      "competitionCount": 1,
      "bestRank": 20,
      "avgPoints": 110,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 110,
          "rank": 20
        }
      ]
    },
    {
      "rank": 559,
      "athleteId": "cmjzpdkc80090bfhouqhl68vg",
      "athleteName": "王子嘉",
      "team": "内蒙古嘉灏体育",
      "totalPoints": 110,
      "competitionCount": 1,
      "bestRank": 20,
      "avgPoints": 110,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 110,
          "rank": 20
        }
      ]
    },
    {
      "rank": 560,
      "athleteId": "cmjzpdk96006cbfho14znv0uq",
      "athleteName": "徐艺玮",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 110,
      "competitionCount": 1,
      "bestRank": 20,
      "avgPoints": 110,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 110,
          "rank": 20
        }
      ]
    },
    {
      "rank": 561,
      "athleteId": "cmjzpdkiv00eibfhomj9j7tlk",
      "athleteName": "辛博",
      "team": "重庆埃尔派体育文化传播有限公司",
      "totalPoints": 110,
      "competitionCount": 1,
      "bestRank": 20,
      "avgPoints": 110,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 110,
          "rank": 20
        }
      ]
    },
    {
      "rank": 562,
      "athleteId": "cmjzpdkgo00crbfhoj3jtd3nu",
      "athleteName": "范芮希",
      "team": "个人",
      "totalPoints": 110,
      "competitionCount": 1,
      "bestRank": 20,
      "avgPoints": 110,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 110,
          "rank": 20
        }
      ]
    },
    {
      "rank": 563,
      "athleteId": "athlete-孙翎皓-Criss-Crew",
      "athleteName": "孙翎皓",
      "team": "Criss Crew",
      "totalPoints": 105,
      "competitionCount": 1,
      "bestRank": 21,
      "avgPoints": 105,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 105,
          "rank": 21
        }
      ]
    },
    {
      "rank": 564,
      "athleteId": "cmjzpdk5t003ibfhocx6w9f2u",
      "athleteName": "周豫",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 105,
      "competitionCount": 1,
      "bestRank": 21,
      "avgPoints": 105,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 105,
          "rank": 21
        }
      ]
    },
    {
      "rank": 565,
      "athleteId": "cmjzpdk3o001obfhodbkhcpfl",
      "athleteName": "高怡雯",
      "team": "北京天高云淡体育有限公司",
      "totalPoints": 105,
      "competitionCount": 1,
      "bestRank": 21,
      "avgPoints": 105,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 105,
          "rank": 21
        }
      ]
    },
    {
      "rank": 566,
      "athleteId": "cmjzpdkcb0093bfho0ocki2j0",
      "athleteName": "江显晨",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 105,
      "competitionCount": 1,
      "bestRank": 21,
      "avgPoints": 105,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 105,
          "rank": 21
        }
      ]
    },
    {
      "rank": 567,
      "athleteId": "cmjzpdk99006fbfhowh2pew1l",
      "athleteName": "史怀竺",
      "team": "大连雨彤体育赛事俱乐部",
      "totalPoints": 105,
      "competitionCount": 1,
      "bestRank": 21,
      "avgPoints": 105,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 105,
          "rank": 21
        }
      ]
    },
    {
      "rank": 568,
      "athleteId": "cmjzpdkiz00elbfhowy5fi3bf",
      "athleteName": "黄铸轩",
      "team": "个人",
      "totalPoints": 105,
      "competitionCount": 1,
      "bestRank": 21,
      "avgPoints": 105,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 105,
          "rank": 21
        }
      ]
    },
    {
      "rank": 569,
      "athleteId": "cmjzpdkgs00cubfho86ndwawc",
      "athleteName": "杜美佳妮",
      "team": "北京佩士体育有限公司",
      "totalPoints": 105,
      "competitionCount": 1,
      "bestRank": 21,
      "avgPoints": 105,
      "ageGroup": "U18",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 105,
          "rank": 21
        }
      ]
    },
    {
      "rank": 570,
      "athleteId": "cmjzpdkmr00h3bfhom6eectsq",
      "athleteName": "石昊桐",
      "team": "北京市冬季运动管理中心",
      "totalPoints": 100,
      "competitionCount": 1,
      "bestRank": 22,
      "avgPoints": 100,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 100,
          "rank": 22
        }
      ]
    },
    {
      "rank": 571,
      "athleteId": "cmjzpdk5w003lbfho6honytan",
      "athleteName": "张柏轩",
      "team": "MAYA TEAM",
      "totalPoints": 100,
      "competitionCount": 1,
      "bestRank": 22,
      "avgPoints": 100,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 100,
          "rank": 22
        }
      ]
    },
    {
      "rank": 572,
      "athleteId": "cmjzpdk3s001rbfhonoy1krhm",
      "athleteName": "周芸溪",
      "team": "MAYA TEAM",
      "totalPoints": 100,
      "competitionCount": 1,
      "bestRank": 22,
      "avgPoints": 100,
      "ageGroup": "U11",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 100,
          "rank": 22
        }
      ]
    },
    {
      "rank": 573,
      "athleteId": "cmjzpdkce0096bfho9w4cv43j",
      "athleteName": "孟裕皓",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 100,
      "competitionCount": 1,
      "bestRank": 22,
      "avgPoints": 100,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 100,
          "rank": 22
        }
      ]
    },
    {
      "rank": 574,
      "athleteId": "cmjzpdk9d006ibfho62rtb6mv",
      "athleteName": "叶丽扎·别克苏力坦",
      "team": "新疆维吾尔自治区冬季运动训练中心",
      "totalPoints": 100,
      "competitionCount": 1,
      "bestRank": 22,
      "avgPoints": 100,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 100,
          "rank": 22
        }
      ]
    },
    {
      "rank": 575,
      "athleteId": "cmjzpdkj200eobfhou82m9qil",
      "athleteName": "唐鸿博",
      "team": "KingProTeam",
      "totalPoints": 100,
      "competitionCount": 1,
      "bestRank": 22,
      "avgPoints": 100,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 100,
          "rank": 22
        }
      ]
    },
    {
      "rank": 576,
      "athleteId": "cmjzpdlcg012dbfho7kz6iwv3",
      "athleteName": "林芮锋",
      "team": "四川体育职业学院",
      "totalPoints": 95,
      "competitionCount": 1,
      "bestRank": 23,
      "avgPoints": 95,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 95,
          "rank": 23
        }
      ]
    },
    {
      "rank": 577,
      "athleteId": "cmjzpdk5z003obfhomuy5i56z",
      "athleteName": "朱朗灿",
      "team": "个人",
      "totalPoints": 95,
      "competitionCount": 1,
      "bestRank": 23,
      "avgPoints": 95,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 95,
          "rank": 23
        }
      ]
    },
    {
      "rank": 578,
      "athleteId": "cmjzpdkci0099bfhoj2fomk7j",
      "athleteName": "李柏翔",
      "team": "MAYA TEAM",
      "totalPoints": 95,
      "competitionCount": 1,
      "bestRank": 23,
      "avgPoints": 95,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 95,
          "rank": 23
        }
      ]
    },
    {
      "rank": 579,
      "athleteId": "cmjzpdk9g006lbfhonossoltj",
      "athleteName": "刘于靖璇",
      "team": "丝绸之路青少年俱乐部",
      "totalPoints": 95,
      "competitionCount": 1,
      "bestRank": 23,
      "avgPoints": 95,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 95,
          "rank": 23
        }
      ]
    },
    {
      "rank": 580,
      "athleteId": "cmjzpdkj600erbfhoagwamkpg",
      "athleteName": "杜鑫",
      "team": "张家口市足球和冰雪运动学校",
      "totalPoints": 95,
      "competitionCount": 1,
      "bestRank": 23,
      "avgPoints": 95,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 95,
          "rank": 23
        }
      ]
    },
    {
      "rank": 581,
      "athleteId": "athlete-刘音里-个人",
      "athleteName": "刘音里",
      "team": "个人",
      "totalPoints": 91,
      "competitionCount": 1,
      "bestRank": 24,
      "avgPoints": 91,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 91,
          "rank": 24
        }
      ]
    },
    {
      "rank": 582,
      "athleteId": "cmjzpdk62003rbfho276bqrn6",
      "athleteName": "程子航",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 91,
      "competitionCount": 1,
      "bestRank": 24,
      "avgPoints": 91,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 91,
          "rank": 24
        }
      ]
    },
    {
      "rank": 583,
      "athleteId": "cmjzpdkcm009cbfhotv2stqaf",
      "athleteName": "陶勃遇",
      "team": "锐冠青少年竞技滑雪队",
      "totalPoints": 91,
      "competitionCount": 1,
      "bestRank": 24,
      "avgPoints": 91,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 91,
          "rank": 24
        }
      ]
    },
    {
      "rank": 584,
      "athleteId": "cmjzpdk9j006obfhor1vkbpvi",
      "athleteName": "王羽佳",
      "team": "重庆埃尔派体育文化传播有限公司",
      "totalPoints": 91,
      "competitionCount": 1,
      "bestRank": 24,
      "avgPoints": 91,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 91,
          "rank": 24
        }
      ]
    },
    {
      "rank": 585,
      "athleteId": "cmjzpdkja00eubfho4y4pipqd",
      "athleteName": "刘馨泽",
      "team": "吉林省阔展体育服务有限公司",
      "totalPoints": 91,
      "competitionCount": 1,
      "bestRank": 24,
      "avgPoints": 91,
      "ageGroup": "U18",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 91,
          "rank": 24
        }
      ]
    },
    {
      "rank": 586,
      "athleteId": "athlete-马铂淙-个人",
      "athleteName": "马铂淙",
      "team": "个人",
      "totalPoints": 87,
      "competitionCount": 1,
      "bestRank": 25,
      "avgPoints": 87,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 87,
          "rank": 25
        }
      ]
    },
    {
      "rank": 587,
      "athleteId": "cmjzpdk65003ubfhov0tbtt6p",
      "athleteName": "聂铭熙",
      "team": "MAYA TEAM",
      "totalPoints": 87,
      "competitionCount": 1,
      "bestRank": 25,
      "avgPoints": 87,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 87,
          "rank": 25
        }
      ]
    },
    {
      "rank": 588,
      "athleteId": "cmjzpdkcq009fbfhoxa5ipl1g",
      "athleteName": "仲作成",
      "team": "MAYA TEAM",
      "totalPoints": 87,
      "competitionCount": 1,
      "bestRank": 25,
      "avgPoints": 87,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 87,
          "rank": 25
        }
      ]
    },
    {
      "rank": 589,
      "athleteId": "cmjzpdk9n006rbfhoom69d3b4",
      "athleteName": "黎若水",
      "team": "个人",
      "totalPoints": 87,
      "competitionCount": 1,
      "bestRank": 25,
      "avgPoints": 87,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 87,
          "rank": 25
        }
      ]
    },
    {
      "rank": 590,
      "athleteId": "athlete-张哲朗-个人",
      "athleteName": "张哲朗",
      "team": "个人",
      "totalPoints": 83,
      "competitionCount": 1,
      "bestRank": 26,
      "avgPoints": 83,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
          "location": "张家口富龙滑雪场",
          "points": 83,
          "rank": 26
        }
      ]
    },
    {
      "rank": 591,
      "athleteId": "cmjzpdk69003xbfhomaabax6c",
      "athleteName": "金子彦",
      "team": "个人",
      "totalPoints": 83,
      "competitionCount": 1,
      "bestRank": 26,
      "avgPoints": 83,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 83,
          "rank": 26
        }
      ]
    },
    {
      "rank": 592,
      "athleteId": "cmjzpdkct009ibfhoibkwcoe4",
      "athleteName": "郭天泽",
      "team": "MAYA TEAM",
      "totalPoints": 83,
      "competitionCount": 1,
      "bestRank": 26,
      "avgPoints": 83,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 83,
          "rank": 26
        }
      ]
    },
    {
      "rank": 593,
      "athleteId": "cmjzpdk9q006ubfhol25rw40e",
      "athleteName": "刘芊焱",
      "team": "个人",
      "totalPoints": 83,
      "competitionCount": 1,
      "bestRank": 26,
      "avgPoints": 83,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 83,
          "rank": 26
        }
      ]
    },
    {
      "rank": 594,
      "athleteId": "cmjzpdk6c0040bfhor621ft1n",
      "athleteName": "陈鑫艺",
      "team": "四川体育职业学院",
      "totalPoints": 79,
      "competitionCount": 1,
      "bestRank": 27,
      "avgPoints": 79,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 79,
          "rank": 27
        }
      ]
    },
    {
      "rank": 595,
      "athleteId": "cmjzpdkcx009lbfhovbf8c77r",
      "athleteName": "袁子宸",
      "team": "重庆巴蜀科学城中学校",
      "totalPoints": 79,
      "competitionCount": 1,
      "bestRank": 27,
      "avgPoints": 79,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 79,
          "rank": 27
        }
      ]
    },
    {
      "rank": 596,
      "athleteId": "cmjzpdk9t006xbfhobc0rcef9",
      "athleteName": "吴宛霖",
      "team": "北京天高云淡体育有限公司",
      "totalPoints": 79,
      "competitionCount": 1,
      "bestRank": 27,
      "avgPoints": 79,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 79,
          "rank": 27
        }
      ]
    },
    {
      "rank": 597,
      "athleteId": "cmjzpdk6f0043bfhotms7f5yw",
      "athleteName": "孙奥荣",
      "team": "四川体育职业学院",
      "totalPoints": 75,
      "competitionCount": 1,
      "bestRank": 28,
      "avgPoints": 75,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 75,
          "rank": 28
        }
      ]
    },
    {
      "rank": 598,
      "athleteId": "cmjzpdkd0009obfhoo2lnifjm",
      "athleteName": "张亚琨",
      "team": "大连雨彤体育赛事俱乐部",
      "totalPoints": 75,
      "competitionCount": 1,
      "bestRank": 28,
      "avgPoints": 75,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 75,
          "rank": 28
        }
      ]
    },
    {
      "rank": 599,
      "athleteId": "cmjzpdk9w0070bfhojofn6m13",
      "athleteName": "赵天冉",
      "team": "KingProTeam",
      "totalPoints": 75,
      "competitionCount": 1,
      "bestRank": 28,
      "avgPoints": 75,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 75,
          "rank": 28
        }
      ]
    },
    {
      "rank": 600,
      "athleteId": "cmjzpdk6j0046bfhov1sarue5",
      "athleteName": "赵梓聿",
      "team": "MAYA TEAM",
      "totalPoints": 71,
      "competitionCount": 1,
      "bestRank": 29,
      "avgPoints": 71,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 71,
          "rank": 29
        }
      ]
    },
    {
      "rank": 601,
      "athleteId": "cmjzpdkd4009rbfhoi14egzfo",
      "athleteName": "贾博翔",
      "team": "锐冠青少年竞技滑雪队",
      "totalPoints": 71,
      "competitionCount": 1,
      "bestRank": 29,
      "avgPoints": 71,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 71,
          "rank": 29
        }
      ]
    },
    {
      "rank": 602,
      "athleteId": "cmjzpdka00073bfhovx3noqyi",
      "athleteName": "周琪",
      "team": "锐冠青少年竞技滑雪队",
      "totalPoints": 71,
      "competitionCount": 1,
      "bestRank": 29,
      "avgPoints": 71,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 71,
          "rank": 29
        }
      ]
    },
    {
      "rank": 603,
      "athleteId": "cmjzpdk6m0049bfho5dxuehct",
      "athleteName": "闫慕垚",
      "team": "大连雨彤体育赛事俱乐部",
      "totalPoints": 67,
      "competitionCount": 1,
      "bestRank": 30,
      "avgPoints": 67,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 67,
          "rank": 30
        }
      ]
    },
    {
      "rank": 604,
      "athleteId": "cmjzpdkd8009ubfhotio8k1cy",
      "athleteName": "井诚",
      "team": "中麟体育",
      "totalPoints": 67,
      "competitionCount": 1,
      "bestRank": 30,
      "avgPoints": 67,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 67,
          "rank": 30
        }
      ]
    },
    {
      "rank": 605,
      "athleteId": "cmjzpdka40076bfhorgd2m8ou",
      "athleteName": "亢正熙",
      "team": "四川体育职业学院",
      "totalPoints": 67,
      "competitionCount": 1,
      "bestRank": 30,
      "avgPoints": 67,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 67,
          "rank": 30
        }
      ]
    },
    {
      "rank": 606,
      "athleteId": "cmjzpdk6q004cbfhod35sxrf6",
      "athleteName": "杨滨睿",
      "team": "MAYA TEAM",
      "totalPoints": 63,
      "competitionCount": 1,
      "bestRank": 31,
      "avgPoints": 63,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 63,
          "rank": 31
        }
      ]
    },
    {
      "rank": 607,
      "athleteId": "cmjzpdkdc009xbfhoo2klfjap",
      "athleteName": "洪戬",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 63,
      "competitionCount": 1,
      "bestRank": 31,
      "avgPoints": 63,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 63,
          "rank": 31
        }
      ]
    },
    {
      "rank": 608,
      "athleteId": "cmjzpdka70079bfho3f7ql9v4",
      "athleteName": "王奕棽",
      "team": "速森体育",
      "totalPoints": 63,
      "competitionCount": 1,
      "bestRank": 31,
      "avgPoints": 63,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 63,
          "rank": 31
        }
      ]
    },
    {
      "rank": 609,
      "athleteId": "cmjzpdk6t004fbfhoynftnzxa",
      "athleteName": "景子融",
      "team": "中麟体育",
      "totalPoints": 59,
      "competitionCount": 1,
      "bestRank": 32,
      "avgPoints": 59,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 59,
          "rank": 32
        }
      ]
    },
    {
      "rank": 610,
      "athleteId": "cmjzpdkdh00a0bfho4wxoxzvt",
      "athleteName": "张晧泽",
      "team": "太原市第二少年体育学校",
      "totalPoints": 59,
      "competitionCount": 1,
      "bestRank": 32,
      "avgPoints": 59,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 59,
          "rank": 32
        }
      ]
    },
    {
      "rank": 611,
      "athleteId": "cmjzpdkaa007cbfho0t5qqqm9",
      "athleteName": "陈卓",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 59,
      "competitionCount": 1,
      "bestRank": 32,
      "avgPoints": 59,
      "ageGroup": "U15",
      "gender": "女子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 59,
          "rank": 32
        }
      ]
    },
    {
      "rank": 612,
      "athleteId": "cmjzpdk6w004ibfhowp9zh349",
      "athleteName": "祖与辰",
      "team": "秦皇岛狂雪滑雪俱乐部",
      "totalPoints": 55,
      "competitionCount": 1,
      "bestRank": 33,
      "avgPoints": 55,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 55,
          "rank": 33
        }
      ]
    },
    {
      "rank": 613,
      "athleteId": "cmjzpdkdl00a3bfhobgcrmoxf",
      "athleteName": "郭芮名",
      "team": "河北省体育局冬季运动中心",
      "totalPoints": 55,
      "competitionCount": 1,
      "bestRank": 33,
      "avgPoints": 55,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 55,
          "rank": 33
        }
      ]
    },
    {
      "rank": 614,
      "athleteId": "cmjzpdk70004lbfhoemd7yndw",
      "athleteName": "吕毅",
      "team": "太原市第二少年体育学校",
      "totalPoints": 51,
      "competitionCount": 1,
      "bestRank": 34,
      "avgPoints": 51,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 51,
          "rank": 34
        }
      ]
    },
    {
      "rank": 615,
      "athleteId": "cmjzpdkdq00a6bfhooeygbvcg",
      "athleteName": "李钊羽",
      "team": "个人",
      "totalPoints": 51,
      "competitionCount": 1,
      "bestRank": 34,
      "avgPoints": 51,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 51,
          "rank": 34
        }
      ]
    },
    {
      "rank": 616,
      "athleteId": "cmjzpdk74004obfhof6076pvg",
      "athleteName": "王博晨昊",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 47,
      "competitionCount": 1,
      "bestRank": 35,
      "avgPoints": 47,
      "ageGroup": "U11",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 47,
          "rank": 35
        }
      ]
    },
    {
      "rank": 617,
      "athleteId": "cmjzpdkdu00a9bfhoglttsdpp",
      "athleteName": "谢书敖",
      "team": "零站单板滑雪俱乐部",
      "totalPoints": 47,
      "competitionCount": 1,
      "bestRank": 35,
      "avgPoints": 47,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 47,
          "rank": 35
        }
      ]
    },
    {
      "rank": 618,
      "athleteId": "cmjzpdkdy00acbfhof8j22w6u",
      "athleteName": "王浩然",
      "team": "中麟体育",
      "totalPoints": 43,
      "competitionCount": 1,
      "bestRank": 36,
      "avgPoints": 43,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 43,
          "rank": 36
        }
      ]
    },
    {
      "rank": 619,
      "athleteId": "cmjzpdke200afbfho46pb1bph",
      "athleteName": "陈浩铭",
      "team": "四川体育职业学院",
      "totalPoints": 39,
      "competitionCount": 1,
      "bestRank": 37,
      "avgPoints": 39,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 39,
          "rank": 37
        }
      ]
    },
    {
      "rank": 620,
      "athleteId": "cmjzpdke600aibfhorlv0ah7f",
      "athleteName": "徐悦宾",
      "team": "北京虎村竞技体育有限公司",
      "totalPoints": 35,
      "competitionCount": 1,
      "bestRank": 38,
      "avgPoints": 35,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 35,
          "rank": 38
        }
      ]
    },
    {
      "rank": 621,
      "athleteId": "cmjzpdke900albfhoigjeyd76",
      "athleteName": "暴城睿",
      "team": "辽宁极限体育发展有限公司",
      "totalPoints": 31,
      "competitionCount": 1,
      "bestRank": 39,
      "avgPoints": 31,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 31,
          "rank": 39
        }
      ]
    },
    {
      "rank": 622,
      "athleteId": "cmjzpdked00aobfhobpgyq4nt",
      "athleteName": "靳淏宬",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 27,
      "competitionCount": 1,
      "bestRank": 40,
      "avgPoints": 27,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 27,
          "rank": 40
        }
      ]
    },
    {
      "rank": 623,
      "athleteId": "cmjzpdkeg00arbfhofvp5x8xt",
      "athleteName": "熊品超",
      "team": "重庆埃尔派体育文化传播有限公司",
      "totalPoints": 24,
      "competitionCount": 1,
      "bestRank": 41,
      "avgPoints": 24,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 24,
          "rank": 41
        }
      ]
    },
    {
      "rank": 624,
      "athleteId": "cmjzpdkek00aubfhonxqvxggw",
      "athleteName": "孙裕恒",
      "team": "北京市朝阳区第三少儿业余体校",
      "totalPoints": 21,
      "competitionCount": 1,
      "bestRank": 42,
      "avgPoints": 21,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 21,
          "rank": 42
        }
      ]
    },
    {
      "rank": 625,
      "athleteId": "cmjzpdken00axbfhox6zhp4mo",
      "athleteName": "陈羿同",
      "team": "零站体育",
      "totalPoints": 18,
      "competitionCount": 1,
      "bestRank": 43,
      "avgPoints": 18,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 18,
          "rank": 43
        }
      ]
    },
    {
      "rank": 626,
      "athleteId": "cmjzpdker00b0bfhocrpgfxmf",
      "athleteName": "陈宥廷",
      "team": "上海雪酷滑雪竞技队",
      "totalPoints": 15,
      "competitionCount": 1,
      "bestRank": 44,
      "avgPoints": 15,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 15,
          "rank": 44
        }
      ]
    },
    {
      "rank": 627,
      "athleteId": "cmjzpdkeu00b3bfhoz7xisfn9",
      "athleteName": "杨昊泽",
      "team": "速森体育",
      "totalPoints": 12,
      "competitionCount": 1,
      "bestRank": 45,
      "avgPoints": 12,
      "ageGroup": "U15",
      "gender": "男子组",
      "rankChange": null,
      "pointsBreakdown": [
        {
          "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
          "location": "雪如意滑雪场",
          "points": 12,
          "rank": 45
        }
      ]
    }
  ],
  "total": 627,
  "filters": {
    "ageGroups": [
      "U11",
      "U15",
      "U18"
    ],
    "genders": [
      "女子组",
      "男子组"
    ],
    "disciplines": [
      "回转",
      "坡面障碍技巧",
      "大回转",
      "大跳台",
      "平行大回转"
    ],
    "locations": [
      "张家口富龙滑雪场",
      "成都热雪奇迹室内滑雪场",
      "雪如意滑雪场"
    ],
    "sportTypes": [
      {
        "value": "alpine",
        "label": "高山滑雪"
      },
      {
        "value": "snowboard-slopestyle-bigair",
        "label": "单板坡面障碍技巧/大跳台"
      },
      {
        "value": "snowboard-parallel",
        "label": "单板平行项目"
      },
      {
        "value": "freestyle-slopestyle-bigair",
        "label": "自由式坡面障碍技巧/大跳台"
      }
    ]
  },
  "stats": {
    "athleteCount": 446,
    "competitionCount": 10,
    "totalResults": 737
  },
  "generatedAt": "2026-01-14T11:56:33.477Z"
};
