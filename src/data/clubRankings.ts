/**
 * 俱乐部积分排名静态数据（按大项汇总）
 * 自动生成，请勿手动修改
 * 生成时间: 2026-03-08T14:45:15.529812
 */

export interface ClubRankingItem {
  rank: number;
  team: string;
  totalPoints: number;
  athleteCount: number;
  competitionCount: number;
  disciplineCount: number;
  goldCount: number;
  silverCount: number;
  bronzeCount: number;
}

export interface ClubSportRankings {
  sportType: string;
  sportName: string;
  rankings: ClubRankingItem[];
}

export interface ClubRankingsData {
  sportRankings: ClubSportRankings[];
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
      "sportType": "all",
      "sportName": "全部项目",
      "rankings": [
        {
          "rank": 1,
          "team": "四川体育职业学院",
          "totalPoints": 41961,
          "athleteCount": 55,
          "competitionCount": 19,
          "disciplineCount": 5,
          "goldCount": 34,
          "silverCount": 19,
          "bronzeCount": 18
        },
        {
          "rank": 2,
          "team": "河北省体育局冬季运动中心",
          "totalPoints": 23653,
          "athleteCount": 33,
          "competitionCount": 16,
          "disciplineCount": 5,
          "goldCount": 15,
          "silverCount": 9,
          "bronzeCount": 10
        },
        {
          "rank": 3,
          "team": "河南省体育局",
          "totalPoints": 19595,
          "athleteCount": 18,
          "competitionCount": 14,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 10,
          "bronzeCount": 7
        },
        {
          "rank": 4,
          "team": "石家庄市冰雪与足球运动中心",
          "totalPoints": 11993,
          "athleteCount": 10,
          "competitionCount": 14,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 2,
          "bronzeCount": 8
        },
        {
          "rank": 5,
          "team": "湖北省武术和冬季运动管理中心",
          "totalPoints": 10937,
          "athleteCount": 11,
          "competitionCount": 8,
          "disciplineCount": 2,
          "goldCount": 1,
          "silverCount": 3,
          "bronzeCount": 3
        },
        {
          "rank": 6,
          "team": "重庆市冬季运动管理中心",
          "totalPoints": 9857,
          "athleteCount": 13,
          "competitionCount": 14,
          "disciplineCount": 4,
          "goldCount": 3,
          "silverCount": 4,
          "bronzeCount": 3
        },
        {
          "rank": 7,
          "team": "北京市冬季运动管理中心",
          "totalPoints": 9202,
          "athleteCount": 8,
          "competitionCount": 14,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 2,
          "bronzeCount": 3
        },
        {
          "rank": 8,
          "team": "广西射击射箭运动发展中心",
          "totalPoints": 8795,
          "athleteCount": 10,
          "competitionCount": 10,
          "disciplineCount": 2,
          "goldCount": 3,
          "silverCount": 4,
          "bronzeCount": 3
        },
        {
          "rank": 9,
          "team": "MAYA TEAM",
          "totalPoints": 8074,
          "athleteCount": 23,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 3,
          "bronzeCount": 5
        },
        {
          "rank": 10,
          "team": "山西省冰雪运动中心",
          "totalPoints": 7747,
          "athleteCount": 8,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 4,
          "bronzeCount": 1
        },
        {
          "rank": 11,
          "team": "成都热雪奇迹",
          "totalPoints": 7687,
          "athleteCount": 18,
          "competitionCount": 12,
          "disciplineCount": 5,
          "goldCount": 0,
          "silverCount": 5,
          "bronzeCount": 0
        },
        {
          "rank": 12,
          "team": "张家口乔与杨体育服务有限公司",
          "totalPoints": 7405,
          "athleteCount": 7,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 6,
          "silverCount": 5,
          "bronzeCount": 3
        },
        {
          "rank": 13,
          "team": "北京市朝阳区第三少儿业余体校",
          "totalPoints": 7117,
          "athleteCount": 28,
          "competitionCount": 3,
          "disciplineCount": 3,
          "goldCount": 2,
          "silverCount": 4,
          "bronzeCount": 1
        },
        {
          "rank": 14,
          "team": "上海雪酷滑雪竞技队",
          "totalPoints": 4462,
          "athleteCount": 16,
          "competitionCount": 6,
          "disciplineCount": 4,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 15,
          "team": "张家口辰鹏体育发展有限公司",
          "totalPoints": 4434,
          "athleteCount": 6,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 7,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 16,
          "team": "延庆区体育局",
          "totalPoints": 4188,
          "athleteCount": 6,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 4,
          "silverCount": 2,
          "bronzeCount": 3
        },
        {
          "rank": 17,
          "team": "北京虎村竞技体育有限公司",
          "totalPoints": 3482,
          "athleteCount": 14,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 3,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 18,
          "team": "速森体育",
          "totalPoints": 2297,
          "athleteCount": 7,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 3,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 19,
          "team": "上海市静安区滑雪协会",
          "totalPoints": 2164,
          "athleteCount": 9,
          "competitionCount": 3,
          "disciplineCount": 3,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 20,
          "team": "西安热雪奇迹竞技队",
          "totalPoints": 2162,
          "athleteCount": 6,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 3
        },
        {
          "rank": 21,
          "team": "济南市皇亭竞技体育学校",
          "totalPoints": 2103,
          "athleteCount": 5,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 3
        },
        {
          "rank": 22,
          "team": "沈抚改革创新示范区体育联合会",
          "totalPoints": 2046,
          "athleteCount": 21,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 23,
          "team": "葫小芦（北京）体育有限公司",
          "totalPoints": 1992,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 24,
          "team": "重庆埃尔派体育文化传播有限公司",
          "totalPoints": 1984,
          "athleteCount": 10,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 1,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 25,
          "team": "吉林坤伦滑雪俱乐部",
          "totalPoints": 1833,
          "athleteCount": 4,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 26,
          "team": "Star单板队",
          "totalPoints": 1697,
          "athleteCount": 2,
          "competitionCount": 4,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 27,
          "team": "沈阳王伟滑雪管理咨询服务有限公司",
          "totalPoints": 1601,
          "athleteCount": 1,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 1,
          "silverCount": 2,
          "bronzeCount": 1
        },
        {
          "rank": 28,
          "team": "新疆维吾尔自治区冬季运动训练中心",
          "totalPoints": 1575,
          "athleteCount": 5,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 29,
          "team": "8848俱乐部",
          "totalPoints": 1554,
          "athleteCount": 4,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 30,
          "team": "泾源县国有资本投资运营集团有限公司",
          "totalPoints": 1547,
          "athleteCount": 6,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 31,
          "team": "长春市冬季运动管理中心",
          "totalPoints": 1542,
          "athleteCount": 9,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 32,
          "team": "大连雨彤体育赛事俱乐部",
          "totalPoints": 1487,
          "athleteCount": 8,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 33,
          "team": "New team",
          "totalPoints": 1389,
          "athleteCount": 1,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 34,
          "team": "吉林省体育局雪上运动管理中心",
          "totalPoints": 1261,
          "athleteCount": 6,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 35,
          "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
          "totalPoints": 1228,
          "athleteCount": 4,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 36,
          "team": "中关村一小",
          "totalPoints": 1222,
          "athleteCount": 1,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 37,
          "team": "重庆市冬季运动管理中心1队",
          "totalPoints": 1212,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 38,
          "team": "A+自由式滑雪队",
          "totalPoints": 1166,
          "athleteCount": 1,
          "competitionCount": 4,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 2
        },
        {
          "rank": 39,
          "team": "兰州碧桂园学校",
          "totalPoints": 1118,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 40,
          "team": "华发冰雪热雪奇迹",
          "totalPoints": 1090,
          "athleteCount": 2,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 2
        },
        {
          "rank": 41,
          "team": "黑龙江省雪上训练中心",
          "totalPoints": 1075,
          "athleteCount": 2,
          "competitionCount": 4,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 3
        },
        {
          "rank": 42,
          "team": "Criss Crew",
          "totalPoints": 1062,
          "athleteCount": 3,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 43,
          "team": "ACE竞技滑雪队",
          "totalPoints": 1059,
          "athleteCount": 4,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 44,
          "team": "山域竞技体育工作室",
          "totalPoints": 983,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 45,
          "team": "西安高新一中沣东中学初中校区",
          "totalPoints": 980,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 46,
          "team": "高峰",
          "totalPoints": 961,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 2,
          "bronzeCount": 1
        },
        {
          "rank": 47,
          "team": "沈阳体育学院",
          "totalPoints": 907,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 48,
          "team": "King Pro Team",
          "totalPoints": 883,
          "athleteCount": 5,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 49,
          "team": "太原市第二少年体育学校",
          "totalPoints": 840,
          "athleteCount": 5,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 50,
          "team": "西安热雪奇迹",
          "totalPoints": 800,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 51,
          "team": "小崔运动",
          "totalPoints": 788,
          "athleteCount": 1,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 52,
          "team": "竞禹体育",
          "totalPoints": 739,
          "athleteCount": 2,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 53,
          "team": "个人（零度竞技）",
          "totalPoints": 718,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 54,
          "team": "中麟体育",
          "totalPoints": 714,
          "athleteCount": 6,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 55,
          "team": "吉林市丰满区滑雪协会",
          "totalPoints": 650,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 56,
          "team": "四平市冬季运动管理中心",
          "totalPoints": 624,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 57,
          "team": "RSKI竞技滑雪队队",
          "totalPoints": 586,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 58,
          "team": "内蒙古嘉灏体育",
          "totalPoints": 562,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 59,
          "team": "吉林峰尚青教体育文化产业有限公司",
          "totalPoints": 552,
          "athleteCount": 5,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 60,
          "team": "纳西亚",
          "totalPoints": 547,
          "athleteCount": 2,
          "competitionCount": 3,
          "disciplineCount": 3,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 61,
          "team": "张家口市足球和冰雪运动学校",
          "totalPoints": 508,
          "athleteCount": 3,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 62,
          "team": "远东东（重庆）体育文化发展有限公司",
          "totalPoints": 502,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 63,
          "team": "哈尔滨热雪奇迹",
          "totalPoints": 484,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 64,
          "team": "爱上雪体育产业发展（北京）有限公司",
          "totalPoints": 406,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 65,
          "team": "锐冠青少年竞技滑雪队",
          "totalPoints": 390,
          "athleteCount": 4,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 66,
          "team": "个人（高峰）",
          "totalPoints": 386,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 67,
          "team": "张家口冰雪运动学校",
          "totalPoints": 383,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 68,
          "team": "北京天高云淡体育文化有限公司",
          "totalPoints": 363,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 69,
          "team": "广州热雪奇迹文化体育发展有限公司",
          "totalPoints": 353,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 70,
          "team": "自由地带pop滑雪俱乐部",
          "totalPoints": 352,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 71,
          "team": "北京天高云淡体育有限公司",
          "totalPoints": 350,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 72,
          "team": "长春市朝阳区山域竞技体育工作室",
          "totalPoints": 347,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 73,
          "team": "大连奥萨竞技",
          "totalPoints": 329,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 73,
          "team": "大连奥萨",
          "totalPoints": 329,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 75,
          "team": "大连奥萨体育文化有限公司",
          "totalPoints": 304,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 76,
          "team": "零站单板滑雪俱乐部",
          "totalPoints": 289,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 77,
          "team": "山域竞技体育工作室二队",
          "totalPoints": 280,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 78,
          "team": "长春市极刃体育发展有限公司",
          "totalPoints": 259,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 79,
          "team": "KingProTeam",
          "totalPoints": 221,
          "athleteCount": 2,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 80,
          "team": "广州雪迹文化体育发展有限公司",
          "totalPoints": 218,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 81,
          "team": "辽宁极限体育",
          "totalPoints": 207,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 82,
          "team": "东北师范大学附属实验学校（经开）",
          "totalPoints": 199,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 83,
          "team": "延吉雪范",
          "totalPoints": 189,
          "athleteCount": 2,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 84,
          "team": "广州热雪奇迹",
          "totalPoints": 187,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 84,
          "team": "本溪全明星滑雪学校",
          "totalPoints": 187,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 86,
          "team": "吉林市冬季运动管理中心",
          "totalPoints": 149,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 87,
          "team": "福建省冰雪运动协会",
          "totalPoints": 134,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 88,
          "team": "五家渠市金科实验",
          "totalPoints": 110,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 89,
          "team": "北京佩士体育有限公司",
          "totalPoints": 105,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 90,
          "team": "丝绸之路青少年俱乐部",
          "totalPoints": 95,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 91,
          "team": "重庆巴蜀科学城中学校",
          "totalPoints": 79,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 92,
          "team": "秦皇岛狂雪滑雪俱乐部",
          "totalPoints": 55,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 93,
          "team": "零站体育",
          "totalPoints": 18,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        }
      ]
    },
    {
      "sportType": "alpine",
      "sportName": "高山滑雪",
      "rankings": [
        {
          "rank": 1,
          "team": "张家口乔与杨体育服务有限公司",
          "totalPoints": 7405,
          "athleteCount": 7,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 6,
          "silverCount": 5,
          "bronzeCount": 3
        },
        {
          "rank": 2,
          "team": "四川体育职业学院",
          "totalPoints": 6052,
          "athleteCount": 6,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 12,
          "silverCount": 0,
          "bronzeCount": 4
        },
        {
          "rank": 3,
          "team": "张家口辰鹏体育发展有限公司",
          "totalPoints": 4434,
          "athleteCount": 6,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 7,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 4,
          "team": "河北省体育局冬季运动中心",
          "totalPoints": 4243,
          "athleteCount": 8,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 4,
          "bronzeCount": 4
        },
        {
          "rank": 5,
          "team": "成都热雪奇迹",
          "totalPoints": 4239,
          "athleteCount": 10,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 4,
          "bronzeCount": 0
        },
        {
          "rank": 6,
          "team": "延庆区体育局",
          "totalPoints": 4188,
          "athleteCount": 6,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 4,
          "silverCount": 2,
          "bronzeCount": 3
        },
        {
          "rank": 7,
          "team": "重庆市冬季运动管理中心",
          "totalPoints": 3039,
          "athleteCount": 5,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 1,
          "silverCount": 3,
          "bronzeCount": 2
        },
        {
          "rank": 8,
          "team": "北京市朝阳区第三少儿业余体校",
          "totalPoints": 2366,
          "athleteCount": 5,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 1,
          "silverCount": 3,
          "bronzeCount": 0
        },
        {
          "rank": 9,
          "team": "西安热雪奇迹竞技队",
          "totalPoints": 2162,
          "athleteCount": 6,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 3
        },
        {
          "rank": 10,
          "team": "济南市皇亭竞技体育学校",
          "totalPoints": 2103,
          "athleteCount": 5,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 3
        },
        {
          "rank": 11,
          "team": "葫小芦（北京）体育有限公司",
          "totalPoints": 1992,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 12,
          "team": "吉林坤伦滑雪俱乐部",
          "totalPoints": 1833,
          "athleteCount": 4,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 13,
          "team": "沈阳王伟滑雪管理咨询服务有限公司",
          "totalPoints": 1601,
          "athleteCount": 1,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 1,
          "silverCount": 2,
          "bronzeCount": 1
        },
        {
          "rank": 14,
          "team": "泾源县国有资本投资运营集团有限公司",
          "totalPoints": 1547,
          "athleteCount": 6,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 15,
          "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
          "totalPoints": 1228,
          "athleteCount": 4,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 16,
          "team": "中关村一小",
          "totalPoints": 1222,
          "athleteCount": 1,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 17,
          "team": "重庆市冬季运动管理中心1队",
          "totalPoints": 1212,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 18,
          "team": "兰州碧桂园学校",
          "totalPoints": 1118,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 19,
          "team": "华发冰雪热雪奇迹",
          "totalPoints": 1090,
          "athleteCount": 2,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 2
        },
        {
          "rank": 20,
          "team": "山域竞技体育工作室",
          "totalPoints": 983,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 21,
          "team": "西安高新一中沣东中学初中校区",
          "totalPoints": 980,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 22,
          "team": "高峰",
          "totalPoints": 961,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 2,
          "bronzeCount": 1
        },
        {
          "rank": 23,
          "team": "西安热雪奇迹",
          "totalPoints": 800,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 24,
          "team": "竞禹体育",
          "totalPoints": 739,
          "athleteCount": 2,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 25,
          "team": "个人（零度竞技）",
          "totalPoints": 718,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 26,
          "team": "吉林市丰满区滑雪协会",
          "totalPoints": 650,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 27,
          "team": "上海市静安区滑雪协会",
          "totalPoints": 609,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 28,
          "team": "RSKI竞技滑雪队队",
          "totalPoints": 586,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 29,
          "team": "远东东（重庆）体育文化发展有限公司",
          "totalPoints": 502,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 30,
          "team": "哈尔滨热雪奇迹",
          "totalPoints": 484,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 31,
          "team": "个人（高峰）",
          "totalPoints": 386,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 32,
          "team": "广州热雪奇迹文化体育发展有限公司",
          "totalPoints": 353,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 33,
          "team": "长春市朝阳区山域竞技体育工作室",
          "totalPoints": 347,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 34,
          "team": "大连奥萨竞技",
          "totalPoints": 329,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 34,
          "team": "大连奥萨",
          "totalPoints": 329,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 36,
          "team": "大连奥萨体育文化有限公司",
          "totalPoints": 304,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 37,
          "team": "山域竞技体育工作室二队",
          "totalPoints": 280,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 38,
          "team": "广州雪迹文化体育发展有限公司",
          "totalPoints": 218,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 39,
          "team": "东北师范大学附属实验学校（经开）",
          "totalPoints": 199,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 40,
          "team": "广州热雪奇迹",
          "totalPoints": 187,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 40,
          "team": "本溪全明星滑雪学校",
          "totalPoints": 187,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 42,
          "team": "福建省冰雪运动协会",
          "totalPoints": 134,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        }
      ]
    },
    {
      "sportType": "snowboard-slopestyle-bigair",
      "sportName": "单板坡面障碍技巧/大跳台",
      "rankings": [
        {
          "rank": 1,
          "team": "四川体育职业学院",
          "totalPoints": 12879,
          "athleteCount": 15,
          "competitionCount": 8,
          "disciplineCount": 2,
          "goldCount": 10,
          "silverCount": 9,
          "bronzeCount": 5
        },
        {
          "rank": 2,
          "team": "湖北省武术和冬季运动管理中心",
          "totalPoints": 10937,
          "athleteCount": 11,
          "competitionCount": 8,
          "disciplineCount": 2,
          "goldCount": 1,
          "silverCount": 3,
          "bronzeCount": 3
        },
        {
          "rank": 3,
          "team": "河北省体育局冬季运动中心",
          "totalPoints": 8076,
          "athleteCount": 9,
          "competitionCount": 8,
          "disciplineCount": 2,
          "goldCount": 9,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 4,
          "team": "山西省冰雪运动中心",
          "totalPoints": 7747,
          "athleteCount": 8,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 4,
          "bronzeCount": 1
        },
        {
          "rank": 5,
          "team": "河南省体育局",
          "totalPoints": 6999,
          "athleteCount": 6,
          "competitionCount": 8,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 5,
          "bronzeCount": 4
        },
        {
          "rank": 6,
          "team": "石家庄市冰雪与足球运动中心",
          "totalPoints": 6891,
          "athleteCount": 6,
          "competitionCount": 8,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 6
        },
        {
          "rank": 7,
          "team": "重庆市冬季运动管理中心",
          "totalPoints": 5560,
          "athleteCount": 7,
          "competitionCount": 5,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 8,
          "team": "北京市冬季运动管理中心",
          "totalPoints": 5234,
          "athleteCount": 5,
          "competitionCount": 8,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 9,
          "team": "上海雪酷滑雪竞技队",
          "totalPoints": 2568,
          "athleteCount": 9,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 10,
          "team": "广西射击射箭运动发展中心",
          "totalPoints": 2495,
          "athleteCount": 3,
          "competitionCount": 4,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 2
        },
        {
          "rank": 11,
          "team": "Star单板队",
          "totalPoints": 1697,
          "athleteCount": 2,
          "competitionCount": 4,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 12,
          "team": "成都热雪奇迹",
          "totalPoints": 1519,
          "athleteCount": 4,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 13,
          "team": "New team",
          "totalPoints": 1389,
          "athleteCount": 1,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 14,
          "team": "Criss Crew",
          "totalPoints": 1062,
          "athleteCount": 3,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 15,
          "team": "四平市冬季运动管理中心",
          "totalPoints": 624,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 16,
          "team": "黑龙江省雪上训练中心",
          "totalPoints": 469,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 17,
          "team": "自由地带pop滑雪俱乐部",
          "totalPoints": 352,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        }
      ]
    },
    {
      "sportType": "snowboard-parallel",
      "sportName": "单板平行项目",
      "rankings": [
        {
          "rank": 1,
          "team": "MAYA TEAM",
          "totalPoints": 8074,
          "athleteCount": 23,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 3,
          "bronzeCount": 5
        },
        {
          "rank": 2,
          "team": "四川体育职业学院",
          "totalPoints": 5324,
          "athleteCount": 18,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 0,
          "bronzeCount": 3
        },
        {
          "rank": 3,
          "team": "北京市朝阳区第三少儿业余体校",
          "totalPoints": 4751,
          "athleteCount": 23,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 1,
          "silverCount": 1,
          "bronzeCount": 1
        },
        {
          "rank": 4,
          "team": "北京虎村竞技体育有限公司",
          "totalPoints": 3482,
          "athleteCount": 14,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 3,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 5,
          "team": "速森体育",
          "totalPoints": 2297,
          "athleteCount": 7,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 3,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 6,
          "team": "沈抚改革创新示范区体育联合会",
          "totalPoints": 2046,
          "athleteCount": 21,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 7,
          "team": "重庆埃尔派体育文化传播有限公司",
          "totalPoints": 1984,
          "athleteCount": 10,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 1,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 8,
          "team": "新疆维吾尔自治区冬季运动训练中心",
          "totalPoints": 1575,
          "athleteCount": 5,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 9,
          "team": "上海市静安区滑雪协会",
          "totalPoints": 1555,
          "athleteCount": 8,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 10,
          "team": "8848俱乐部",
          "totalPoints": 1554,
          "athleteCount": 4,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 11,
          "team": "长春市冬季运动管理中心",
          "totalPoints": 1542,
          "athleteCount": 9,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 12,
          "team": "大连雨彤体育赛事俱乐部",
          "totalPoints": 1487,
          "athleteCount": 8,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 1
        },
        {
          "rank": 13,
          "team": "吉林省体育局雪上运动管理中心",
          "totalPoints": 1261,
          "athleteCount": 6,
          "competitionCount": 1,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 14,
          "team": "ACE竞技滑雪队",
          "totalPoints": 1059,
          "athleteCount": 4,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 15,
          "team": "King Pro Team",
          "totalPoints": 883,
          "athleteCount": 5,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 16,
          "team": "成都热雪奇迹",
          "totalPoints": 861,
          "athleteCount": 3,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 17,
          "team": "太原市第二少年体育学校",
          "totalPoints": 840,
          "athleteCount": 5,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 18,
          "team": "中麟体育",
          "totalPoints": 714,
          "athleteCount": 6,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 19,
          "team": "上海雪酷滑雪竞技队",
          "totalPoints": 603,
          "athleteCount": 4,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 20,
          "team": "内蒙古嘉灏体育",
          "totalPoints": 562,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 21,
          "team": "吉林峰尚青教体育文化产业有限公司",
          "totalPoints": 552,
          "athleteCount": 5,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 22,
          "team": "张家口市足球和冰雪运动学校",
          "totalPoints": 508,
          "athleteCount": 3,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 23,
          "team": "河北省体育局冬季运动中心",
          "totalPoints": 498,
          "athleteCount": 4,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 24,
          "team": "爱上雪体育产业发展（北京）有限公司",
          "totalPoints": 406,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 25,
          "team": "锐冠青少年竞技滑雪队",
          "totalPoints": 390,
          "athleteCount": 4,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 26,
          "team": "张家口冰雪运动学校",
          "totalPoints": 383,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 27,
          "team": "北京天高云淡体育文化有限公司",
          "totalPoints": 363,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 28,
          "team": "北京天高云淡体育有限公司",
          "totalPoints": 350,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 29,
          "team": "零站单板滑雪俱乐部",
          "totalPoints": 289,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 30,
          "team": "长春市极刃体育发展有限公司",
          "totalPoints": 259,
          "athleteCount": 3,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 31,
          "team": "KingProTeam",
          "totalPoints": 221,
          "athleteCount": 2,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 32,
          "team": "辽宁极限体育",
          "totalPoints": 207,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 33,
          "team": "延吉雪范",
          "totalPoints": 189,
          "athleteCount": 2,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 34,
          "team": "纳西亚",
          "totalPoints": 149,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 34,
          "team": "吉林市冬季运动管理中心",
          "totalPoints": 149,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 36,
          "team": "五家渠市金科实验",
          "totalPoints": 110,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 37,
          "team": "北京佩士体育有限公司",
          "totalPoints": 105,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 38,
          "team": "丝绸之路青少年俱乐部",
          "totalPoints": 95,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 39,
          "team": "重庆巴蜀科学城中学校",
          "totalPoints": 79,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 40,
          "team": "秦皇岛狂雪滑雪俱乐部",
          "totalPoints": 55,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 41,
          "team": "零站体育",
          "totalPoints": 18,
          "athleteCount": 1,
          "competitionCount": 1,
          "disciplineCount": 1,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        }
      ]
    },
    {
      "sportType": "freestyle-slopestyle-bigair",
      "sportName": "自由式坡面障碍技巧/大跳台",
      "rankings": [
        {
          "rank": 1,
          "team": "四川体育职业学院",
          "totalPoints": 17706,
          "athleteCount": 17,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 10,
          "silverCount": 10,
          "bronzeCount": 6
        },
        {
          "rank": 2,
          "team": "河南省体育局",
          "totalPoints": 12596,
          "athleteCount": 12,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 5,
          "bronzeCount": 3
        },
        {
          "rank": 3,
          "team": "河北省体育局冬季运动中心",
          "totalPoints": 10836,
          "athleteCount": 12,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 6,
          "silverCount": 4,
          "bronzeCount": 6
        },
        {
          "rank": 4,
          "team": "广西射击射箭运动发展中心",
          "totalPoints": 6300,
          "athleteCount": 7,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 3,
          "silverCount": 4,
          "bronzeCount": 1
        },
        {
          "rank": 5,
          "team": "石家庄市冰雪与足球运动中心",
          "totalPoints": 5102,
          "athleteCount": 4,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 2,
          "bronzeCount": 2
        },
        {
          "rank": 6,
          "team": "北京市冬季运动管理中心",
          "totalPoints": 3968,
          "athleteCount": 3,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 2,
          "bronzeCount": 2
        },
        {
          "rank": 7,
          "team": "上海雪酷滑雪竞技队",
          "totalPoints": 1291,
          "athleteCount": 3,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 8,
          "team": "重庆市冬季运动管理中心",
          "totalPoints": 1258,
          "athleteCount": 1,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 9,
          "team": "A+自由式滑雪队",
          "totalPoints": 1166,
          "athleteCount": 1,
          "competitionCount": 4,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 2
        },
        {
          "rank": 10,
          "team": "成都热雪奇迹",
          "totalPoints": 1068,
          "athleteCount": 1,
          "competitionCount": 6,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 11,
          "team": "沈阳体育学院",
          "totalPoints": 907,
          "athleteCount": 2,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 2,
          "silverCount": 0,
          "bronzeCount": 0
        },
        {
          "rank": 12,
          "team": "小崔运动",
          "totalPoints": 788,
          "athleteCount": 1,
          "competitionCount": 3,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 1,
          "bronzeCount": 0
        },
        {
          "rank": 13,
          "team": "黑龙江省雪上训练中心",
          "totalPoints": 606,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 2
        },
        {
          "rank": 14,
          "team": "纳西亚",
          "totalPoints": 398,
          "athleteCount": 1,
          "competitionCount": 2,
          "disciplineCount": 2,
          "goldCount": 0,
          "silverCount": 0,
          "bronzeCount": 0
        }
      ]
    }
  ],
  "stats": {
    "totalClubs": 93,
    "totalAthletes": 504,
    "totalCompetitions": 19
  },
  "generatedAt": "2026-03-08T14:45:15.529801"
};
