// 最新比赛成绩数据
// 数据来源: 官方成绩公告PDF
// 生成时间: 2025-12-09

export interface AthleteResult {
  rank: number
  bib: number
  name: string
  team: string
  birthYear?: string
  run1?: string
  run2?: string
  time?: string
  diff?: string
  bestScore?: number
  points?: number
}

export interface EventResult {
  discipline: string
  ageGroup: string
  gender: string
  athletes: AthleteResult[]
}

export interface CompetitionResult {
  competition: string
  sport: string
  sportType: string
  location: string
  date: string
  endDate: string
  status: 'completed' | 'ongoing' | 'upcoming'
  events: EventResult[]
}

export interface ResultsData {
  lastUpdated: string
  competitions: CompetitionResult[]
}

export const latestResults: ResultsData = {
  "lastUpdated": "2025-12-09",
  "competitions": [
    {
      "competition": "2025-2026赛季单板滑雪大跳台U系列比赛（成都站）",
      "sport": "单板滑雪大跳台",
      "sportType": "snowboard-slopestyle",
      "location": "成都热雪奇迹室内滑雪场",
      "date": "2025-11-22",
      "endDate": "2025-11-25",
      "status": "completed",
      "events": [
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 4,
              "name": "孙嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 150.4,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 11,
              "name": "牛安芷芸",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 139.2,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "周斯言",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 127.4,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 13,
              "name": "张诗涵",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2017",
              "bestScore": 108.2,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 20,
              "name": "姚予希",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "bestScore": 94.8,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "杨茗然",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 87.8,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 2,
              "name": "翟姝涵",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 73.4,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 1,
              "name": "蒋柠萱",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2015",
              "bestScore": 50.4,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 7,
              "name": "冷昕莲",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 1,
              "points": 199
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 8,
              "name": "鱼嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 168.2,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 14,
              "name": "叶欣瑞",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 132.4,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 18,
              "name": "杨可轩",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2010",
              "bestScore": 122,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 9,
              "name": "贺舒玉",
              "team": "重庆市沙坪坝区体育运动中心",
              "birthYear": "2011",
              "bestScore": 108.4,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 15,
              "name": "赖文悦",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 104.8,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 17,
              "name": "周雨辰",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 94.4,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 10,
              "name": "王若西",
              "team": "重庆市沙坪坝区体育运动中心",
              "birthYear": "2013",
              "bestScore": 79.6,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 16,
              "name": "周雨欣",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 67.4,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 5,
              "name": "苏常格",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "bestScore": 43.2,
              "points": 199
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 26,
              "name": "陈宇垚",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 154,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 18,
              "name": "刘翰泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 148,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 24,
              "name": "王祖安",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 137.6,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 25,
              "name": "王曌霖",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 129.8,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 2,
              "name": "范天成",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 126.2,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 3,
              "name": "刘沐泽",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 119.4,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 9,
              "name": "赵严诺",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 115.2,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 23,
              "name": "魏子博",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 105,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 5,
              "name": "石昊桐",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 92.6,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 39,
              "name": "宁浩然",
              "team": "成都热雪奇迹",
              "birthYear": "2015",
              "bestScore": 68.4,
              "points": 187
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 1,
              "name": "王恒宇",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 190.6,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 27,
              "name": "袁梓程",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 187,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 35,
              "name": "谭凯元",
              "team": "谭凯元",
              "birthYear": "2012",
              "bestScore": 164.8,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 29,
              "name": "刘子俊",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 163.2,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 19,
              "name": "张家睿",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 121.6,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 4,
              "name": "高翊博",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 120.4,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 30,
              "name": "郭彧铭",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 120,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 22,
              "name": "梁嘉俊",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2013",
              "bestScore": 112,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 7,
              "name": "麦冠航",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 110.4,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 15,
              "name": "于瀚",
              "team": "重庆市沙坪坝区体育运动中心",
              "birthYear": "2012",
              "bestScore": 73,
              "points": 187
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 13,
              "name": "封树渝",
              "team": "重庆市沙坪坝区体育运动中心",
              "birthYear": "2008",
              "bestScore": 152.6,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 28,
              "name": "李俊辛",
              "team": "四川体育职业学院",
              "birthYear": "2008",
              "bestScore": 150.2,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 21,
              "name": "米馥豪",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2009",
              "bestScore": 128.4,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 10,
              "name": "罗皓桉",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2007",
              "bestScore": 86.8,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 11,
              "name": "黄子剑",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 82.6,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 12,
              "name": "倪文凯",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 78.6,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 17,
              "name": "雷涵文",
              "team": "重庆市沙坪坝区体育运动中心",
              "birthYear": "2009",
              "bestScore": 40.6,
              "points": 226
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国高山滑雪U系列比赛（成都站）",
      "sport": "高山滑雪",
      "sportType": "alpine",
      "location": "成都热雪奇迹室内滑雪场",
      "date": "2025-11-24",
      "endDate": "2025-11-28",
      "status": "completed",
      "events": [
        {
          "discipline": "回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 39,
              "name": "李金润",
              "team": "四川体育职业学院",
              "run1": "29.56",
              "run2": "29.88",
              "time": "59.44",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 7,
              "name": "杨蓝戈",
              "team": "个人",
              "run1": "30.70",
              "run2": "30.74",
              "time": "1:01.44",
              "diff": "2.00"
            },
            {
              "rank": 3,
              "bib": 34,
              "name": "庞予涵",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "30.95",
              "run2": "31.51",
              "time": "1:02.46",
              "diff": "3.02"
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 29,
              "name": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "27.82",
              "run2": "28.28",
              "time": "56.10",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 33,
              "name": "艾思铭",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "28.53",
              "run2": "28.41",
              "time": "56.94",
              "diff": "0.84"
            },
            {
              "rank": 3,
              "bib": 6,
              "name": "高琦硕",
              "team": "高峰",
              "run1": "28.67",
              "run2": "28.43",
              "time": "57.10",
              "diff": "1.00"
            },
            {
              "rank": 4,
              "bib": 15,
              "name": "郭一远",
              "team": "河北省体育局冬季运动中心",
              "run1": "28.61",
              "run2": "28.65",
              "time": "57.26",
              "diff": "1.16"
            },
            {
              "rank": 5,
              "bib": 31,
              "name": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "28.64",
              "run2": "28.67",
              "time": "57.31",
              "diff": "1.21"
            },
            {
              "rank": 6,
              "bib": 10,
              "name": "左子正",
              "team": "左子正",
              "run1": "28.70",
              "run2": "28.63",
              "time": "57.33",
              "diff": "1.23"
            },
            {
              "rank": 7,
              "bib": 3,
              "name": "常冠廷",
              "team": "吉林市丰满区滑雪协会",
              "run1": "29.16",
              "run2": "28.60",
              "time": "57.76",
              "diff": "1.66"
            },
            {
              "rank": 8,
              "bib": 1,
              "name": "王冠霖",
              "team": "吉林坤伦滑雪俱乐部",
              "run1": "29.04",
              "run2": "29.55",
              "time": "58.59",
              "diff": "2.49"
            },
            {
              "rank": 9,
              "bib": 14,
              "name": "王宏轩",
              "team": "河北省体育局冬季运动中心",
              "run1": "30.32",
              "run2": "30.41",
              "time": "1:00.73",
              "diff": "4.63"
            },
            {
              "rank": 10,
              "bib": 2,
              "name": "马健剀",
              "team": "吉林坤伦滑雪俱乐部",
              "run1": "33.39",
              "run2": "31.61",
              "time": "1:05.00",
              "diff": "8.90"
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 13,
              "name": "李若瑜",
              "team": "中关村一小",
              "run1": "35.56",
              "run2": "35.40",
              "time": "1:10.96",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 43,
              "name": "罗暄晴",
              "team": "成都热雪奇迹",
              "run1": "36.12",
              "run2": "36.89",
              "time": "1:13.01",
              "diff": "2.05"
            },
            {
              "rank": 3,
              "bib": 51,
              "name": "吴凌萱",
              "team": "华发冰雪热雪奇迹",
              "run1": "38.06",
              "run2": "39.94",
              "time": "1:18.00",
              "diff": "7.04"
            },
            {
              "rank": 4,
              "bib": 45,
              "name": "蔡沛琳",
              "team": "成都热雪奇迹",
              "run1": "39.03",
              "run2": "39.44",
              "time": "1:18.47",
              "diff": "7.51"
            },
            {
              "rank": 5,
              "bib": 12,
              "name": "李昊汐",
              "team": "西安热雪奇迹",
              "run1": "39.72",
              "run2": "39.15",
              "time": "1:18.87",
              "diff": "7.91"
            },
            {
              "rank": 6,
              "bib": 52,
              "name": "吴玟颐",
              "team": "华发冰雪热雪奇迹",
              "run1": "40.10",
              "run2": "39.71",
              "time": "1:19.81",
              "diff": "8.85"
            },
            {
              "rank": 7,
              "bib": 48,
              "name": "卢彦伊",
              "team": "成都热雪奇迹",
              "run1": "46.10",
              "run2": "41.73",
              "time": "1:27.83",
              "diff": "16.87"
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 36,
              "name": "赵酌",
              "team": "四川体育职业学院",
              "run1": "30.80",
              "run2": "31.05",
              "time": "1:01.85",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 46,
              "name": "竹禹丞",
              "team": "成都热雪奇迹",
              "run1": "33.93",
              "run2": "33.82",
              "time": "1:07.75",
              "diff": "5.90"
            },
            {
              "rank": 3,
              "bib": 27,
              "name": "苏一豪",
              "team": "重庆市冬季运动管理中心",
              "run1": "34.56",
              "run2": "33.24",
              "time": "1:07.80",
              "diff": "5.95"
            },
            {
              "rank": 4,
              "bib": 49,
              "name": "于镇赫",
              "team": "成都热雪奇迹",
              "run1": "40.62",
              "run2": "37.16",
              "time": "1:17.78",
              "diff": "15.93"
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 37,
              "name": "张雨馨",
              "team": "四川体育职业学院",
              "run1": "31.05",
              "run2": "30.75",
              "time": "1:01.80",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 18,
              "name": "杨子骞",
              "team": "河北省体育局冬季运动中心",
              "run1": "31.23",
              "run2": "30.92",
              "time": "1:02.15",
              "diff": "0.35"
            },
            {
              "rank": 3,
              "bib": 21,
              "name": "罗梓瑜",
              "team": "河北省体育局冬季运动中心",
              "run1": "35.31",
              "run2": "34.83",
              "time": "1:10.14",
              "diff": "8.34"
            },
            {
              "rank": 4,
              "bib": 19,
              "name": "张雅琪",
              "team": "河北省体育局冬季运动中心",
              "run1": "39.42",
              "run2": "36.93",
              "time": "1:16.35",
              "diff": "14.55"
            },
            {
              "rank": 5,
              "bib": 55,
              "name": "陈奕霏",
              "team": "个人",
              "run1": "41.97",
              "run2": "43.99",
              "time": "1:25.96",
              "diff": "24.16"
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 23,
              "name": "肖瑞林",
              "team": "重庆市冬季运动管理中心",
              "run1": "31.47",
              "run2": "31.39",
              "time": "1:02.86",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 16,
              "name": "刘彦钧凯",
              "team": "河北省体育局冬季运动中心",
              "run1": "31.78",
              "run2": "32.19",
              "time": "1:03.97",
              "diff": "1.11"
            },
            {
              "rank": 3,
              "bib": 53,
              "name": "黄子歌",
              "team": "四川体育职业学院",
              "run1": "32.89",
              "run2": "31.82",
              "time": "1:04.71",
              "diff": "1.85"
            },
            {
              "rank": 4,
              "bib": 24,
              "name": "王梓丞",
              "team": "重庆市冬季运动管理中心",
              "run1": "34.42",
              "run2": "34.13",
              "time": "1:08.55",
              "diff": "5.69"
            },
            {
              "rank": 5,
              "bib": 17,
              "name": "吕浩源",
              "team": "河北省体育局冬季运动中心",
              "run1": "35.24",
              "run2": "35.46",
              "time": "1:10.70",
              "diff": "7.84"
            },
            {
              "rank": 6,
              "bib": 22,
              "name": "林朗",
              "team": "哈尔滨热雪奇迹",
              "run1": "37.09",
              "run2": "36.82",
              "time": "1:13.91",
              "diff": "11.05"
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 39,
              "name": "李金润",
              "team": "四川体育职业学院",
              "run1": "21.90",
              "run2": "21.95",
              "time": "43.85",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 34,
              "name": "庞予涵",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "22.46",
              "run2": "22.12",
              "time": "44.58",
              "diff": "0.73"
            },
            {
              "rank": 3,
              "bib": 7,
              "name": "杨蓝戈",
              "team": "个人",
              "run1": "22.43",
              "run2": "22.45",
              "time": "44.88",
              "diff": "1.03"
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "周昱含",
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "run1": "22.87",
              "run2": "22.79",
              "time": "45.66",
              "diff": "1.81"
            },
            {
              "rank": 5,
              "bib": 50,
              "name": "杨睿怡",
              "team": "华发冰雪热雪奇迹",
              "run1": "23.54",
              "run2": "23.81",
              "time": "47.35",
              "diff": "3.50"
            },
            {
              "rank": 6,
              "bib": 35,
              "name": "刘子歌",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "25.22",
              "run2": "24.57",
              "time": "49.79",
              "diff": "5.94"
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 31,
              "name": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "20.73",
              "run2": "20.90",
              "time": "41.63",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 6,
              "name": "高琦硕",
              "team": "高峰",
              "run1": "21.20",
              "run2": "20.92",
              "time": "42.12",
              "diff": "0.49"
            },
            {
              "rank": 3,
              "bib": 15,
              "name": "郭一远",
              "team": "河北省体育局冬季运动中心",
              "run1": "21.42",
              "run2": "20.90",
              "time": "42.32",
              "diff": "0.69"
            },
            {
              "rank": 4,
              "bib": 29,
              "name": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "21.40",
              "run2": "21.07",
              "time": "42.47",
              "diff": "0.84"
            },
            {
              "rank": 5,
              "bib": 38,
              "name": "李彦博",
              "team": "四川体育职业学院",
              "run1": "21.37",
              "run2": "21.16",
              "time": "42.53",
              "diff": "0.90"
            },
            {
              "rank": 6,
              "bib": 33,
              "name": "艾思铭",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "21.41",
              "run2": "21.18",
              "time": "42.59",
              "diff": "0.96"
            },
            {
              "rank": 7,
              "bib": 10,
              "name": "左子正",
              "team": "左子正",
              "run1": "21.30",
              "run2": "21.38",
              "time": "42.68",
              "diff": "1.05"
            },
            {
              "rank": 8,
              "bib": 3,
              "name": "常冠廷",
              "team": "吉林市丰满区滑雪协会",
              "run1": "21.32",
              "run2": "21.50",
              "time": "42.82",
              "diff": "1.19"
            },
            {
              "rank": 9,
              "bib": 8,
              "name": "李京和",
              "team": "个人",
              "run1": "21.68",
              "run2": "21.30",
              "time": "42.98",
              "diff": "1.35"
            },
            {
              "rank": 10,
              "bib": 30,
              "name": "熊泽瑞",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "21.94",
              "run2": "21.35",
              "time": "43.29",
              "diff": "1.66"
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 13,
              "name": "李若瑜",
              "team": "中关村一小",
              "run1": "24.52",
              "run2": "24.75",
              "time": "49.27",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 45,
              "name": "蔡沛琳",
              "team": "成都热雪奇迹",
              "run1": "25.36",
              "run2": "25.12",
              "time": "50.48",
              "diff": "1.21"
            },
            {
              "rank": 3,
              "bib": 51,
              "name": "吴凌萱",
              "team": "华发冰雪热雪奇迹",
              "run1": "26.08",
              "run2": "25.73",
              "time": "51.81",
              "diff": "2.54"
            },
            {
              "rank": 4,
              "bib": 12,
              "name": "李昊汐",
              "team": "西安热雪奇迹",
              "run1": "26.06",
              "run2": "26.02",
              "time": "52.08",
              "diff": "2.81"
            },
            {
              "rank": 5,
              "bib": 43,
              "name": "罗暄晴",
              "team": "成都热雪奇迹",
              "run1": "25.93",
              "run2": "26.35",
              "time": "52.28",
              "diff": "3.01"
            },
            {
              "rank": 6,
              "bib": 52,
              "name": "吴玟颐",
              "team": "华发冰雪热雪奇迹",
              "run1": "26.93",
              "run2": "26.27",
              "time": "53.20",
              "diff": "3.93"
            },
            {
              "rank": 7,
              "bib": 48,
              "name": "卢彦伊",
              "team": "成都热雪奇迹",
              "run1": "27.24",
              "run2": "26.65",
              "time": "53.89",
              "diff": "4.62"
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 36,
              "name": "赵酌",
              "team": "四川体育职业学院",
              "run1": "23.03",
              "run2": "23.07",
              "time": "46.10",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 27,
              "name": "苏一豪",
              "team": "重庆市冬季运动管理中心",
              "run1": "24.47",
              "run2": "23.77",
              "time": "48.24",
              "diff": "2.14"
            },
            {
              "rank": 3,
              "bib": 26,
              "name": "郑捷铭",
              "team": "重庆市冬季运动管理中心",
              "run1": "24.52",
              "run2": "24.45",
              "time": "48.97",
              "diff": "2.87"
            },
            {
              "rank": 4,
              "bib": 46,
              "name": "竹禹丞",
              "team": "成都热雪奇迹",
              "run1": "24.66",
              "run2": "24.63",
              "time": "49.29",
              "diff": "3.19"
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "杨宗葆",
              "team": "个人",
              "run1": "24.70",
              "run2": "24.69",
              "time": "49.39",
              "diff": "3.29"
            },
            {
              "rank": 6,
              "bib": 49,
              "name": "于镇赫",
              "team": "成都热雪奇迹",
              "run1": "24.75",
              "run2": "24.87",
              "time": "49.62",
              "diff": "3.52"
            },
            {
              "rank": 7,
              "bib": 40,
              "name": "冯一晗",
              "team": "成都热雪奇迹",
              "run1": "27.30",
              "run2": "27.25",
              "time": "54.55",
              "diff": "8.45"
            },
            {
              "rank": 8,
              "bib": 54,
              "name": "顾羽宸",
              "team": "成都热雪奇迹",
              "run1": "29.62",
              "run2": "29.94",
              "time": "59.56",
              "diff": "13.46"
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 37,
              "name": "张雨馨",
              "team": "四川体育职业学院",
              "run1": "23.26",
              "run2": "23.02",
              "time": "46.28",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 21,
              "name": "罗梓瑜",
              "team": "河北省体育局冬季运动中心",
              "run1": "23.66",
              "run2": "23.53",
              "time": "47.19",
              "diff": "0.91"
            },
            {
              "rank": 3,
              "bib": 18,
              "name": "杨子骞",
              "team": "河北省体育局冬季运动中心",
              "run1": "23.92",
              "run2": "23.48",
              "time": "47.40",
              "diff": "1.12"
            },
            {
              "rank": 4,
              "bib": 41,
              "name": "叶涵汐",
              "team": "成都热雪奇迹",
              "run1": "25.98",
              "run2": "25.93",
              "time": "51.91",
              "diff": "5.63"
            },
            {
              "rank": 5,
              "bib": 19,
              "name": "张雅琪",
              "team": "河北省体育局冬季运动中心",
              "run1": "27.34",
              "run2": "25.56",
              "time": "52.90",
              "diff": "6.62"
            }
          ]
        },
        {
          "discipline": "大回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 53,
              "name": "黄子歌",
              "team": "四川体育职业学院",
              "run1": "22.81",
              "run2": "22.48",
              "time": "45.29",
              "diff": "0.00"
            },
            {
              "rank": 2,
              "bib": 20,
              "name": "张芝豪",
              "team": "河北省体育局冬季运动中心",
              "run1": "22.57",
              "run2": "22.83",
              "time": "45.40",
              "diff": "0.11"
            },
            {
              "rank": 3,
              "bib": 16,
              "name": "刘彦钧凯",
              "team": "河北省体育局冬季运动中心",
              "run1": "22.92",
              "run2": "23.35",
              "time": "46.27",
              "diff": "0.98"
            },
            {
              "rank": 4,
              "bib": 23,
              "name": "肖瑞林",
              "team": "重庆市冬季运动管理中心",
              "run1": "23.22",
              "run2": "23.18",
              "time": "46.40",
              "diff": "1.11"
            },
            {
              "rank": 5,
              "bib": 17,
              "name": "吕浩源",
              "team": "河北省体育局冬季运动中心",
              "run1": "23.59",
              "run2": "23.39",
              "time": "46.98",
              "diff": "1.69"
            },
            {
              "rank": 6,
              "bib": 22,
              "name": "林朗",
              "team": "哈尔滨热雪奇迹",
              "run1": "23.64",
              "run2": "23.53",
              "time": "47.17",
              "diff": "1.88"
            },
            {
              "rank": 7,
              "bib": 24,
              "name": "王梓丞",
              "team": "重庆市冬季运动管理中心",
              "run1": "23.79",
              "run2": "24.38",
              "time": "48.17",
              "diff": "2.88"
            },
            {
              "rank": 8,
              "bib": 47,
              "name": "肖辰俊熙",
              "team": "成都热雪奇迹",
              "run1": "25.36",
              "run2": "24.99",
              "time": "50.35",
              "diff": "5.06"
            },
            {
              "rank": 9,
              "bib": 44,
              "name": "何心远",
              "team": "成都热雪奇迹",
              "run1": "29.21",
              "run2": "27.45",
              "time": "56.66",
              "diff": "11.37"
            }
          ]
        }
      ]
    }
  ]
};

// 获取最新完成的比赛
export const recentCompetitions = latestResults.competitions.filter(c => c.status === 'completed');

// 按项目类型分组
export const resultsBySport = {
  alpine: latestResults.competitions.filter(c => c.sportType === 'alpine'),
  'snowboard-slopestyle': latestResults.competitions.filter(c => c.sportType === 'snowboard-slopestyle'),
  'freestyle-slopestyle': latestResults.competitions.filter(c => c.sportType === 'freestyle-slopestyle'),
  'snowboard-parallel': latestResults.competitions.filter(c => c.sportType === 'snowboard-parallel')
};
