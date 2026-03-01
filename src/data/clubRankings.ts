/**
 * 俱乐部积分排名静态数据
 * 自动生成，请勿手动修改
 * 生成时间: 2026-03-01T16:58:29.708837
 */

export interface ClubRankingItem {
  rank: number;
  team: string;
  totalPoints: number;
  athleteCount: number;
}

export interface ClubSubEventRankings {
  discipline: string;
  ageGroup: string;
  gender: string;
  subEventName: string;
  rankings: ClubRankingItem[];
}

export interface ClubSportRankings {
  sportType: string;
  sportName: string;
  subEventRankings: ClubSubEventRankings[];
}

export interface ClubRankingsData {
  sportRankings: ClubSportRankings[];
  filters: {
    ageGroups: string[];
    genders: string[];
    sportTypes: { value: string; label: string }[];
  };
  stats: {
    totalClubs: number;
    totalAthletes: number;
    totalCompetitions: number;
  };
  generatedAt: string;
}

export const clubRankingsData: ClubRankingsData = {
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
              "team": "四川体育职业学院",
              "totalPoints": 720,
              "athleteCount": 1
            },
            {
              "rank": 2,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 689,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "成都热雪奇迹",
              "totalPoints": 609,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "大连奥萨",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "西安热雪奇迹竞技队",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "山域竞技体育工作室二队",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "延庆区体育局",
              "totalPoints": 260,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 260,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "回转 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "中关村一小",
              "totalPoints": 862,
              "athleteCount": 1
            },
            {
              "rank": 2,
              "team": "成都热雪奇迹",
              "totalPoints": 835,
              "athleteCount": 3
            },
            {
              "rank": 3,
              "team": "张家口辰鹏体育发展有限公司",
              "totalPoints": 720,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "延庆区体育局",
              "totalPoints": 583,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "华发冰雪热雪奇迹",
              "totalPoints": 545,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "西安热雪奇迹",
              "totalPoints": 520,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "西安热雪奇迹竞技队",
              "totalPoints": 411,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "上海市静安区滑雪协会",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "泾源县国有资本投资运营集团有限公司",
              "totalPoints": 242,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "totalPoints": 226,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "个人（零度竞技）",
              "totalPoints": 212,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "回转 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 774,
              "athleteCount": 2
            },
            {
              "rank": 2,
              "team": "四川体育职业学院",
              "totalPoints": 663,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 589,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "张家口辰鹏体育发展有限公司",
              "totalPoints": 588,
              "athleteCount": 3
            },
            {
              "rank": 5,
              "team": "延庆区体育局",
              "totalPoints": 572,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "兰州碧桂园学校",
              "totalPoints": 424,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "totalPoints": 413,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "大连奥萨竞技",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "西安热雪奇迹竞技队",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "竞禹体育",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "泾源县国有资本投资运营集团有限公司",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "哈尔滨热雪奇迹",
              "totalPoints": 242,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "山域竞技体育工作室",
              "totalPoints": 242,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "个人（零度竞技）",
              "totalPoints": 226,
              "athleteCount": 1
            },
            {
              "rank": 15,
              "team": "东北师范大学附属实验学校（经开）",
              "totalPoints": 199,
              "athleteCount": 1
            },
            {
              "rank": 16,
              "team": "广州热雪奇迹文化体育发展有限公司",
              "totalPoints": 166,
              "athleteCount": 1
            },
            {
              "rank": 17,
              "team": "重庆市冬季运动管理中心1队",
              "totalPoints": 157,
              "athleteCount": 1
            },
            {
              "rank": 18,
              "team": "长春市朝阳区山域竞技体育工作室",
              "totalPoints": 121,
              "athleteCount": 1
            },
            {
              "rank": 19,
              "team": "大连奥萨体育文化有限公司",
              "totalPoints": 105,
              "athleteCount": 1
            },
            {
              "rank": 20,
              "team": "RSKI竞技滑雪队队",
              "totalPoints": 100,
              "athleteCount": 1
            },
            {
              "rank": 21,
              "team": "广州雪迹文化体育发展有限公司",
              "totalPoints": 91,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "回转 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 912,
              "athleteCount": 3
            },
            {
              "rank": 2,
              "team": "四川体育职业学院",
              "totalPoints": 663,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "西安高新一中沣东中学初中校区",
              "totalPoints": 620,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "济南市皇亭竞技体育学校",
              "totalPoints": 583,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "张家口辰鹏体育发展有限公司",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "个人（零度竞技）",
              "totalPoints": 280,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "回转 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 3015,
              "athleteCount": 5
            },
            {
              "rank": 2,
              "team": "吉林坤伦滑雪俱乐部",
              "totalPoints": 901,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "高峰",
              "totalPoints": 632,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 479,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "张家口辰鹏体育发展有限公司",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "吉林市丰满区滑雪协会",
              "totalPoints": 226,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "济南市皇亭竞技体育学校",
              "totalPoints": 226,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "个人（高峰）",
              "totalPoints": 187,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "回转 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "葫小芦（北京）体育有限公司",
              "totalPoints": 1080,
              "athleteCount": 2
            },
            {
              "rank": 2,
              "team": "延庆区体育局",
              "totalPoints": 720,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "totalPoints": 658,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "重庆市冬季运动管理中心1队",
              "totalPoints": 303,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "大回转 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "成都热雪奇迹",
              "totalPoints": 1289,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "四川体育职业学院",
              "totalPoints": 1080,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "泾源县国有资本投资运营集团有限公司",
              "totalPoints": 637,
              "athleteCount": 3
            },
            {
              "rank": 4,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 632,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 589,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "RSKI竞技滑雪队队",
              "totalPoints": 486,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "济南市皇亭竞技体育学校",
              "totalPoints": 469,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "西安热雪奇迹竞技队",
              "totalPoints": 429,
              "athleteCount": 2
            },
            {
              "rank": 9,
              "team": "兰州碧桂园学校",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "吉林坤伦滑雪俱乐部",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "延庆区体育局",
              "totalPoints": 187,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "大回转 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "成都热雪奇迹",
              "totalPoints": 815,
              "athleteCount": 3
            },
            {
              "rank": 2,
              "team": "张家口辰鹏体育发展有限公司",
              "totalPoints": 720,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "华发冰雪热雪奇迹",
              "totalPoints": 545,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "延庆区体育局",
              "totalPoints": 545,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "山域竞技体育工作室",
              "totalPoints": 438,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "中关村一小",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "西安热雪奇迹竞技队",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "西安热雪奇迹",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "上海市静安区滑雪协会",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "totalPoints": 260,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "竞禹体育",
              "totalPoints": 199,
              "athleteCount": 1
            },
            {
              "rank": 13,
              "team": "本溪全明星滑雪学校",
              "totalPoints": 187,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "大回转 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "张家口辰鹏体育发展有限公司",
              "totalPoints": 1126,
              "athleteCount": 3
            },
            {
              "rank": 2,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 892,
              "athleteCount": 3
            },
            {
              "rank": 3,
              "team": "四川体育职业学院",
              "totalPoints": 720,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 672,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "延庆区体育局",
              "totalPoints": 632,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "远东东（重庆）体育文化发展有限公司",
              "totalPoints": 502,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 479,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "西安热雪奇迹竞技队",
              "totalPoints": 413,
              "athleteCount": 2
            },
            {
              "rank": 9,
              "team": "成都热雪奇迹",
              "totalPoints": 411,
              "athleteCount": 2
            },
            {
              "rank": 10,
              "team": "兰州碧桂园学校",
              "totalPoints": 391,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "泾源县国有资本投资运营集团有限公司",
              "totalPoints": 388,
              "athleteCount": 2
            },
            {
              "rank": 12,
              "team": "山域竞技体育工作室",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 13,
              "team": "竞禹体育",
              "totalPoints": 260,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "哈尔滨热雪奇迹",
              "totalPoints": 242,
              "athleteCount": 1
            },
            {
              "rank": 15,
              "team": "长春市朝阳区山域竞技体育工作室",
              "totalPoints": 226,
              "athleteCount": 1
            },
            {
              "rank": 16,
              "team": "重庆市冬季运动管理中心1队",
              "totalPoints": 212,
              "athleteCount": 1
            },
            {
              "rank": 17,
              "team": "大连奥萨体育文化有限公司",
              "totalPoints": 199,
              "athleteCount": 1
            },
            {
              "rank": 18,
              "team": "广州热雪奇迹文化体育发展有限公司",
              "totalPoints": 187,
              "athleteCount": 1
            },
            {
              "rank": 18,
              "team": "广州热雪奇迹",
              "totalPoints": 187,
              "athleteCount": 1
            },
            {
              "rank": 20,
              "team": "福建省冰雪运动协会",
              "totalPoints": 134,
              "athleteCount": 1
            },
            {
              "rank": 21,
              "team": "广州雪迹文化体育发展有限公司",
              "totalPoints": 127,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "大回转 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 892,
              "athleteCount": 3
            },
            {
              "rank": 2,
              "team": "四川体育职业学院",
              "totalPoints": 663,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "济南市皇亭竞技体育学校",
              "totalPoints": 583,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "张家口辰鹏体育发展有限公司",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "西安高新一中沣东中学初中校区",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "吉林坤伦滑雪俱乐部",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "成都热雪奇迹",
              "totalPoints": 280,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "大回转 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 3218,
              "athleteCount": 5
            },
            {
              "rank": 2,
              "team": "四川体育职业学院",
              "totalPoints": 823,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 479,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "吉林市丰满区滑雪协会",
              "totalPoints": 424,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "高峰",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "吉林坤伦滑雪俱乐部",
              "totalPoints": 323,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "张家口辰鹏体育发展有限公司",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "济南市皇亭竞技体育学校",
              "totalPoints": 242,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "个人（高峰）",
              "totalPoints": 199,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "大回转 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "totalPoints": 943,
              "athleteCount": 1
            },
            {
              "rank": 2,
              "team": "葫小芦（北京）体育有限公司",
              "totalPoints": 912,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "延庆区体育局",
              "totalPoints": 689,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "重庆市冬季运动管理中心1队",
              "totalPoints": 540,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "张家口乔与杨体育服务有限公司",
              "totalPoints": 329,
              "athleteCount": 1
            }
          ]
        }
      ]
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
              "team": "河南省体育局",
              "totalPoints": 3065,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 1379,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "四川体育职业学院",
              "totalPoints": 1356,
              "athleteCount": 4
            },
            {
              "rank": 4,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 976,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 686,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "New team",
              "totalPoints": 650,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "成都热雪奇迹",
              "totalPoints": 342,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "Star单板队",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "山西省冰雪运动中心",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "Criss Crew",
              "totalPoints": 292,
              "athleteCount": 2
            },
            {
              "rank": 11,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 210,
              "athleteCount": 2
            },
            {
              "rank": 12,
              "team": "四平市冬季运动管理中心",
              "totalPoints": 95,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 1583,
              "athleteCount": 2
            },
            {
              "rank": 2,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 1250,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 808,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 703,
              "athleteCount": 4
            },
            {
              "rank": 5,
              "team": "山西省冰雪运动中心",
              "totalPoints": 696,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "河南省体育局",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "Criss Crew",
              "totalPoints": 242,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "成都热雪奇迹",
              "totalPoints": 212,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 3022,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 1051,
              "athleteCount": 3
            },
            {
              "rank": 3,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 755,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 730,
              "athleteCount": 3
            },
            {
              "rank": 5,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 592,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "Star单板队",
              "totalPoints": 540,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 497,
              "athleteCount": 3
            },
            {
              "rank": 8,
              "team": "山西省冰雪运动中心",
              "totalPoints": 306,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "黑龙江省雪上训练中心",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "成都热雪奇迹",
              "totalPoints": 176,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "自由地带pop滑雪俱乐部",
              "totalPoints": 176,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "山西省冰雪运动中心",
              "totalPoints": 2837,
              "athleteCount": 5
            },
            {
              "rank": 2,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 1773,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "四川体育职业学院",
              "totalPoints": 1651,
              "athleteCount": 5
            },
            {
              "rank": 4,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 1152,
              "athleteCount": 3
            },
            {
              "rank": 5,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 814,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "河南省体育局",
              "totalPoints": 479,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "四平市冬季运动管理中心",
              "totalPoints": 212,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 5555,
              "athleteCount": 11
            },
            {
              "rank": 2,
              "team": "四川体育职业学院",
              "totalPoints": 1769,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 858,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 714,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "大跳台 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "河南省体育局",
              "totalPoints": 2914,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 1197,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "四川体育职业学院",
              "totalPoints": 1066,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 926,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 872,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "New team",
              "totalPoints": 739,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "山西省冰雪运动中心",
              "totalPoints": 427,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 360,
              "athleteCount": 2
            },
            {
              "rank": 9,
              "team": "成都热雪奇迹",
              "totalPoints": 353,
              "athleteCount": 2
            },
            {
              "rank": 10,
              "team": "Star单板队",
              "totalPoints": 299,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "Criss Crew",
              "totalPoints": 225,
              "athleteCount": 2
            },
            {
              "rank": 12,
              "team": "四平市冬季运动管理中心",
              "totalPoints": 105,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "大跳台 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 1745,
              "athleteCount": 2
            },
            {
              "rank": 2,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 933,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 819,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "山西省冰雪运动中心",
              "totalPoints": 643,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 632,
              "athleteCount": 4
            },
            {
              "rank": 6,
              "team": "河南省体育局",
              "totalPoints": 452,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "Criss Crew",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "成都热雪奇迹",
              "totalPoints": 260,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "大跳台 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 3064,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 1033,
              "athleteCount": 3
            },
            {
              "rank": 3,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 828,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 686,
              "athleteCount": 3
            },
            {
              "rank": 5,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 625,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "Star单板队",
              "totalPoints": 555,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "成都热雪奇迹",
              "totalPoints": 176,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "自由地带pop滑雪俱乐部",
              "totalPoints": 176,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "黑龙江省雪上训练中心",
              "totalPoints": 166,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 166,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "大跳台 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "山西省冰雪运动中心",
              "totalPoints": 2535,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 1766,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 1343,
              "athleteCount": 3
            },
            {
              "rank": 4,
              "team": "四川体育职业学院",
              "totalPoints": 1321,
              "athleteCount": 5
            },
            {
              "rank": 5,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 1088,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "河南省体育局",
              "totalPoints": 469,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "四平市冬季运动管理中心",
              "totalPoints": 212,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "大跳台 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "湖北省武术和冬季运动管理中心",
              "totalPoints": 5784,
              "athleteCount": 11
            },
            {
              "rank": 2,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 1384,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "四川体育职业学院",
              "totalPoints": 900,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 848,
              "athleteCount": 1
            }
          ]
        }
      ]
    },
    {
      "sportType": "snowboard-parallel",
      "sportName": "单板平行项目",
      "subEventRankings": [
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "大回转 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "MAYA TEAM",
              "totalPoints": 1185,
              "athleteCount": 5
            },
            {
              "rank": 2,
              "team": "沈抚改革创新示范区体育联合会",
              "totalPoints": 999,
              "athleteCount": 11
            },
            {
              "rank": 3,
              "team": "四川体育职业学院",
              "totalPoints": 907,
              "athleteCount": 5
            },
            {
              "rank": 4,
              "team": "上海市静安区滑雪协会",
              "totalPoints": 317,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "长春市冬季运动管理中心",
              "totalPoints": 232,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "King Pro Team",
              "totalPoints": 187,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "张家口市足球和冰雪运动学校",
              "totalPoints": 157,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "成都热雪奇迹",
              "totalPoints": 141,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "吉林峰尚青教体育文化产业有限公司",
              "totalPoints": 134,
              "athleteCount": 2
            },
            {
              "rank": 10,
              "team": "延吉雪范",
              "totalPoints": 110,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "长春市极刃体育发展有限公司",
              "totalPoints": 67,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "大回转 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 839,
              "athleteCount": 3
            },
            {
              "rank": 2,
              "team": "长春市冬季运动管理中心",
              "totalPoints": 429,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "8848俱乐部",
              "totalPoints": 387,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "成都热雪奇迹",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 176,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "张家口冰雪运动学校",
              "totalPoints": 157,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "MAYA TEAM",
              "totalPoints": 141,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "长春市极刃体育发展有限公司",
              "totalPoints": 121,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "沈抚改革创新示范区体育联合会",
              "totalPoints": 115,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "King Pro Team",
              "totalPoints": 110,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "吉林峰尚青教体育文化产业有限公司",
              "totalPoints": 105,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "大回转 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "MAYA TEAM",
              "totalPoints": 1272,
              "athleteCount": 5
            },
            {
              "rank": 2,
              "team": "速森体育",
              "totalPoints": 517,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "沈抚改革创新示范区体育联合会",
              "totalPoints": 440,
              "athleteCount": 5
            },
            {
              "rank": 4,
              "team": "四川体育职业学院",
              "totalPoints": 360,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 256,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "上海市静安区滑雪协会",
              "totalPoints": 224,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "长春市冬季运动管理中心",
              "totalPoints": 215,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "吉林省体育局雪上运动管理中心",
              "totalPoints": 212,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "辽宁极限体育",
              "totalPoints": 176,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "吉林峰尚青教体育文化产业有限公司",
              "totalPoints": 127,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "King Pro Team",
              "totalPoints": 79,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "长春市极刃体育发展有限公司",
              "totalPoints": 71,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "大回转 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 733,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "吉林省体育局雪上运动管理中心",
              "totalPoints": 720,
              "athleteCount": 4
            },
            {
              "rank": 3,
              "team": "MAYA TEAM",
              "totalPoints": 632,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "8848俱乐部",
              "totalPoints": 486,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 443,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "沈抚改革创新示范区体育联合会",
              "totalPoints": 226,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "上海市静安区滑雪协会",
              "totalPoints": 209,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "King Pro Team",
              "totalPoints": 201,
              "athleteCount": 2
            },
            {
              "rank": 9,
              "team": "ACE竞技滑雪队",
              "totalPoints": 187,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 127,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 115,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "吉林峰尚青教体育文化产业有限公司",
              "totalPoints": 95,
              "athleteCount": 1
            },
            {
              "rank": 13,
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 87,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "延吉雪范",
              "totalPoints": 79,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "平行大回转 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "MAYA TEAM",
              "totalPoints": 1505,
              "athleteCount": 10
            },
            {
              "rank": 2,
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 800,
              "athleteCount": 5
            },
            {
              "rank": 3,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 781,
              "athleteCount": 4
            },
            {
              "rank": 4,
              "team": "四川体育职业学院",
              "totalPoints": 572,
              "athleteCount": 4
            },
            {
              "rank": 5,
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 194,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "张家口市足球和冰雪运动学校",
              "totalPoints": 141,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "King Pro Team",
              "totalPoints": 121,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 110,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "中麟体育",
              "totalPoints": 59,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "秦皇岛狂雪滑雪俱乐部",
              "totalPoints": 55,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "太原市第二少年体育学校",
              "totalPoints": 51,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "平行大回转 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 492,
              "athleteCount": 2
            },
            {
              "rank": 2,
              "team": "太原市第二少年体育学校",
              "totalPoints": 470,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "成都热雪奇迹",
              "totalPoints": 391,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "四川体育职业学院",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "MAYA TEAM",
              "totalPoints": 299,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "北京天高云淡体育有限公司",
              "totalPoints": 271,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "8848俱乐部",
              "totalPoints": 260,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "张家口市足球和冰雪运动学校",
              "totalPoints": 226,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 187,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 176,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "中麟体育",
              "totalPoints": 127,
              "athleteCount": 1
            },
            {
              "rank": 13,
              "team": "爱上雪体育产业发展（北京）有限公司",
              "totalPoints": 115,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "King Pro Team",
              "totalPoints": 110,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "平行大回转 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "MAYA TEAM",
              "totalPoints": 1284,
              "athleteCount": 7
            },
            {
              "rank": 2,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 731,
              "athleteCount": 8
            },
            {
              "rank": 3,
              "team": "速森体育",
              "totalPoints": 513,
              "athleteCount": 3
            },
            {
              "rank": 4,
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 503,
              "athleteCount": 3
            },
            {
              "rank": 5,
              "team": "四川体育职业学院",
              "totalPoints": 468,
              "athleteCount": 3
            },
            {
              "rank": 6,
              "team": "内蒙古嘉灏体育",
              "totalPoints": 336,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 333,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 192,
              "athleteCount": 2
            },
            {
              "rank": 9,
              "team": "上海市静安区滑雪协会",
              "totalPoints": 176,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "锐冠青少年竞技滑雪队",
              "totalPoints": 162,
              "athleteCount": 2
            },
            {
              "rank": 11,
              "team": "纳西亚",
              "totalPoints": 149,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "中麟体育",
              "totalPoints": 110,
              "athleteCount": 2
            },
            {
              "rank": 13,
              "team": "重庆巴蜀科学城中学校",
              "totalPoints": 79,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 75,
              "athleteCount": 1
            },
            {
              "rank": 15,
              "team": "太原市第二少年体育学校",
              "totalPoints": 59,
              "athleteCount": 1
            },
            {
              "rank": 16,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 55,
              "athleteCount": 1
            },
            {
              "rank": 17,
              "team": "零站单板滑雪俱乐部",
              "totalPoints": 47,
              "athleteCount": 1
            },
            {
              "rank": 18,
              "team": "辽宁极限体育",
              "totalPoints": 31,
              "athleteCount": 1
            },
            {
              "rank": 19,
              "team": "零站体育",
              "totalPoints": 18,
              "athleteCount": 1
            },
            {
              "rank": 20,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 15,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "平行大回转 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 579,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "MAYA TEAM",
              "totalPoints": 571,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 559,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "8848俱乐部",
              "totalPoints": 421,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 408,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "爱上雪体育产业发展（北京）有限公司",
              "totalPoints": 291,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "太原市第二少年体育学校",
              "totalPoints": 260,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "内蒙古嘉灏体育",
              "totalPoints": 226,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "中麟体育",
              "totalPoints": 176,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "ACE竞技滑雪队",
              "totalPoints": 166,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 110,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 100,
              "athleteCount": 1
            },
            {
              "rank": 13,
              "team": "丝绸之路青少年俱乐部",
              "totalPoints": 95,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 91,
              "athleteCount": 1
            },
            {
              "rank": 15,
              "team": "北京天高云淡体育有限公司",
              "totalPoints": 79,
              "athleteCount": 1
            },
            {
              "rank": 16,
              "team": "King Pro Team",
              "totalPoints": 75,
              "athleteCount": 1
            },
            {
              "rank": 17,
              "team": "锐冠青少年竞技滑雪队",
              "totalPoints": 71,
              "athleteCount": 1
            },
            {
              "rank": 18,
              "team": "四川体育职业学院",
              "totalPoints": 67,
              "athleteCount": 1
            },
            {
              "rank": 19,
              "team": "速森体育",
              "totalPoints": 63,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "平行大回转 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 1236,
              "athleteCount": 3
            },
            {
              "rank": 2,
              "team": "速森体育",
              "totalPoints": 1063,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "四川体育职业学院",
              "totalPoints": 1052,
              "athleteCount": 3
            },
            {
              "rank": 4,
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "totalPoints": 759,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "MAYA TEAM",
              "totalPoints": 602,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "长春市冬季运动管理中心",
              "totalPoints": 479,
              "athleteCount": 2
            },
            {
              "rank": 7,
              "team": "ACE竞技滑雪队",
              "totalPoints": 373,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "吉林省体育局雪上运动管理中心",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "沈抚改革创新示范区体育联合会",
              "totalPoints": 266,
              "athleteCount": 2
            },
            {
              "rank": 10,
              "team": "中麟体育",
              "totalPoints": 242,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "零站单板滑雪俱乐部",
              "totalPoints": 242,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "KingProTeam",
              "totalPoints": 221,
              "athleteCount": 2
            },
            {
              "rank": 13,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 199,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "锐冠青少年竞技滑雪队",
              "totalPoints": 157,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "上海市静安区滑雪协会",
              "totalPoints": 157,
              "athleteCount": 1
            },
            {
              "rank": 16,
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 110,
              "athleteCount": 1
            },
            {
              "rank": 16,
              "team": "五家渠市金科实验",
              "totalPoints": 110,
              "athleteCount": 1
            },
            {
              "rank": 18,
              "team": "张家口市足球和冰雪运动学校",
              "totalPoints": 95,
              "athleteCount": 1
            },
            {
              "rank": 19,
              "team": "吉林峰尚青教体育文化产业有限公司",
              "totalPoints": 91,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "平行大回转 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "北京市朝阳区第三少儿业余体校",
              "totalPoints": 1424,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "大连雨彤体育赛事俱乐部",
              "totalPoints": 634,
              "athleteCount": 2
            },
            {
              "rank": 3,
              "team": "MAYA TEAM",
              "totalPoints": 583,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "四川体育职业学院",
              "totalPoints": 559,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "重庆埃尔派体育文化传播有限公司",
              "totalPoints": 504,
              "athleteCount": 2
            },
            {
              "rank": 6,
              "team": "上海市静安区滑雪协会",
              "totalPoints": 472,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "北京天高云淡体育文化有限公司",
              "totalPoints": 363,
              "athleteCount": 1
            },
            {
              "rank": 8,
              "team": "ACE竞技滑雪队",
              "totalPoints": 333,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "长春市冬季运动管理中心",
              "totalPoints": 187,
              "athleteCount": 1
            },
            {
              "rank": 10,
              "team": "北京虎村竞技体育有限公司",
              "totalPoints": 157,
              "athleteCount": 1
            },
            {
              "rank": 11,
              "team": "吉林市冬季运动管理中心",
              "totalPoints": 149,
              "athleteCount": 1
            },
            {
              "rank": 12,
              "team": "速森体育",
              "totalPoints": 141,
              "athleteCount": 1
            },
            {
              "rank": 13,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 134,
              "athleteCount": 1
            },
            {
              "rank": 14,
              "team": "张家口市足球和冰雪运动学校",
              "totalPoints": 115,
              "athleteCount": 1
            },
            {
              "rank": 15,
              "team": "北京佩士体育有限公司",
              "totalPoints": 105,
              "athleteCount": 1
            }
          ]
        }
      ]
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
              "team": "河南省体育局",
              "totalPoints": 1625,
              "athleteCount": 3
            },
            {
              "rank": 2,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 689,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 653,
              "athleteCount": 3
            },
            {
              "rank": 4,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 632,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "四川体育职业学院",
              "totalPoints": 226,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 1783,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "河南省体育局",
              "totalPoints": 1221,
              "athleteCount": 3
            },
            {
              "rank": 3,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 1123,
              "athleteCount": 2
            },
            {
              "rank": 4,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 740,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "成都热雪奇迹",
              "totalPoints": 365,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 157,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 1797,
              "athleteCount": 5
            },
            {
              "rank": 2,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 1453,
              "athleteCount": 4
            },
            {
              "rank": 3,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 815,
              "athleteCount": 3
            },
            {
              "rank": 4,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 418,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "黑龙江省雪上训练中心",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 280,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "河南省体育局",
              "totalPoints": 260,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 2006,
              "athleteCount": 6
            },
            {
              "rank": 2,
              "team": "河南省体育局",
              "totalPoints": 770,
              "athleteCount": 3
            },
            {
              "rank": 3,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 506,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 418,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 260,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "小崔运动",
              "totalPoints": 260,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 212,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "坡面障碍技巧 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 632,
              "athleteCount": 2
            },
            {
              "rank": 2,
              "team": "沈阳体育学院",
              "totalPoints": 360,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "坡面障碍技巧 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 360,
              "athleteCount": 1
            },
            {
              "rank": 2,
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "A+自由式滑雪队",
              "totalPoints": 303,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "男子组",
          "subEventName": "大跳台 U11 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "河南省体育局",
              "totalPoints": 2442,
              "athleteCount": 3
            },
            {
              "rank": 2,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 1114,
              "athleteCount": 3
            },
            {
              "rank": 3,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 1023,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 1018,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "四川体育职业学院",
              "totalPoints": 388,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 212,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "纳西亚",
              "totalPoints": 199,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "subEventName": "大跳台 U11 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 2362,
              "athleteCount": 4
            },
            {
              "rank": 2,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 1940,
              "athleteCount": 3
            },
            {
              "rank": 3,
              "team": "河南省体育局",
              "totalPoints": 1798,
              "athleteCount": 3
            },
            {
              "rank": 4,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 1028,
              "athleteCount": 2
            },
            {
              "rank": 5,
              "team": "成都热雪奇迹",
              "totalPoints": 477,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 157,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "男子组",
          "subEventName": "大跳台 U15 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 2709,
              "athleteCount": 5
            },
            {
              "rank": 2,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 1528,
              "athleteCount": 4
            },
            {
              "rank": 3,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 999,
              "athleteCount": 3
            },
            {
              "rank": 4,
              "team": "重庆市冬季运动管理中心",
              "totalPoints": 641,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "河南省体育局",
              "totalPoints": 620,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 522,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "上海雪酷滑雪竞技队",
              "totalPoints": 425,
              "athleteCount": 2
            },
            {
              "rank": 8,
              "team": "黑龙江省雪上训练中心",
              "totalPoints": 303,
              "athleteCount": 1
            },
            {
              "rank": 9,
              "team": "沈阳体育学院",
              "totalPoints": 187,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "女子组",
          "subEventName": "大跳台 U15 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "四川体育职业学院",
              "totalPoints": 3367,
              "athleteCount": 6
            },
            {
              "rank": 2,
              "team": "河南省体育局",
              "totalPoints": 1511,
              "athleteCount": 4
            },
            {
              "rank": 3,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 663,
              "athleteCount": 1
            },
            {
              "rank": 4,
              "team": "广西射击射箭运动发展中心",
              "totalPoints": 520,
              "athleteCount": 1
            },
            {
              "rank": 5,
              "team": "北京市冬季运动管理中心",
              "totalPoints": 484,
              "athleteCount": 1
            },
            {
              "rank": 6,
              "team": "石家庄市冰雪与足球运动中心",
              "totalPoints": 388,
              "athleteCount": 1
            },
            {
              "rank": 7,
              "team": "小崔运动",
              "totalPoints": 199,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "男子组",
          "subEventName": "大跳台 U18 男子组",
          "rankings": [
            {
              "rank": 1,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 632,
              "athleteCount": 2
            },
            {
              "rank": 2,
              "team": "沈阳体育学院",
              "totalPoints": 360,
              "athleteCount": 1
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "女子组",
          "subEventName": "大跳台 U18 女子组",
          "rankings": [
            {
              "rank": 1,
              "team": "河北省体育局冬季运动中心",
              "totalPoints": 720,
              "athleteCount": 1
            },
            {
              "rank": 2,
              "team": "A+自由式滑雪队",
              "totalPoints": 583,
              "athleteCount": 1
            },
            {
              "rank": 3,
              "team": "四川体育职业学院",
              "totalPoints": 329,
              "athleteCount": 1
            }
          ]
        }
      ]
    }
  ],
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
    "totalClubs": 93,
    "totalAthletes": 504,
    "totalCompetitions": 18
  },
  "generatedAt": "2026-03-01T16:58:29.708825"
};
