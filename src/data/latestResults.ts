// 最新比赛成绩数据
// 自动生成，请勿手动修改
// 生成时间: 2026-02-13T03:48:16.948Z

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
  "lastUpdated": "2026-02-13",
  "competitions": [
    {
      "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（雪如意站）",
      "sport": "单板滑雪大跳台",
      "sportType": "snowboard-bigair",
      "location": "张家口崇礼雪如意滑雪场",
      "date": "2026-02-08",
      "endDate": "2026-02-11",
      "status": "completed",
      "events": [
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 15,
              "name": "陈松妤",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 93.5,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 14,
              "name": "杨舒雅",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 81.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 17,
              "name": "颜嘉懿",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 74.5,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 3,
              "name": "蒋柠萱",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2015",
              "bestScore": 60.75,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 6,
              "name": "周子钰",
              "team": "山西省冰雪运动中心",
              "birthYear": "2017",
              "bestScore": 54.5,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 12,
              "name": "张诗涵",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2017",
              "bestScore": 49.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 5,
              "name": "顾嘉禾",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 46.75,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 18,
              "name": "周若慈",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 44.5,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 1,
              "name": "翟姝涵",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 40.25,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 19,
              "name": "杨茗然",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 33,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 16,
              "name": "牛安芷芸",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 21.75,
              "points": 176
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
              "bib": 27,
              "name": "陈宇垚",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 93,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 34,
              "name": "刘翰泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 89,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 23,
              "name": "刘沐泽",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 85.75,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 12,
              "name": "王祖安",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 84.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 41,
              "name": "方柏尧",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 82.25,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 42,
              "name": "监柏霖",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 79.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 35,
              "name": "范天成",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 76.5,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 9,
              "name": "王曌霖",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 72.75,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 1,
              "name": "曾云泽",
              "team": "New team",
              "birthYear": "2014",
              "bestScore": 70,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 7,
              "name": "赵严诺",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 66,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 36,
              "name": "刘音里",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 61.5,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 44,
              "name": "马琸阳",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 58.25,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 33,
              "name": "曾星越",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 55.75,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 4,
              "name": "石昊桐",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 53.75,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 38,
              "name": "蒋桨",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 52.5,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 20,
              "name": "陶志伟",
              "team": "山西省冰雪运动中心",
              "birthYear": "2016",
              "bestScore": 50.25,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 24,
              "name": "刘桐朔",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 48.75,
              "points": 127
            },
            {
              "rank": 18,
              "bib": 45,
              "name": "马琸明",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 48.25,
              "points": 121
            },
            {
              "rank": 19,
              "bib": 39,
              "name": "张哲朗",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 47,
              "points": 115
            },
            {
              "rank": 20,
              "bib": 40,
              "name": "王辰然",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 46.75,
              "points": 110
            },
            {
              "rank": 21,
              "bib": 32,
              "name": "刘奇翀",
              "team": "四平市冬季运动管理中心",
              "birthYear": "2015",
              "bestScore": 40,
              "points": 105
            },
            {
              "rank": 22,
              "bib": 11,
              "name": "魏子博",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 16.25,
              "points": 100
            },
            {
              "rank": 23,
              "bib": 43,
              "name": "刘沐文",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 12,
              "points": 95
            },
            {
              "rank": 24,
              "bib": 5,
              "name": "阿力合尔·木拉提江",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2014",
              "bestScore": 10.75,
              "points": 91
            },
            {
              "rank": 25,
              "bib": 2,
              "name": "褚天羿",
              "team": "Star单板队",
              "birthYear": "2016",
              "bestScore": 7.5,
              "points": 87
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
              "bib": 4,
              "name": "鱼嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 87.5,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 7,
              "name": "张依冉",
              "team": "山西省冰雪运动中心",
              "birthYear": "2011",
              "bestScore": 68.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 20,
              "name": "李芸西",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 65.5,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 22,
              "name": "刘霓霏",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 61.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 8,
              "name": "张淑雅",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 58.25,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 25,
              "name": "贺舒玉",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2011",
              "bestScore": 12.5,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 10,
              "name": "郭婉诗",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 8.5,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 13,
              "name": "刘禹婵",
              "team": "四平市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 5.25,
              "points": 212
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
              "bib": 28,
              "name": "高明烨",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "bestScore": 93,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 47,
              "name": "王恒宇",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 88.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 29,
              "name": "袁梓程",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 82.25,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 46,
              "name": "卢司焱",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 79.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 30,
              "name": "刘子俊",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 77.75,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 56,
              "name": "张栋涵",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 74.25,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 3,
              "name": "王浩臣",
              "team": "Star单板队",
              "birthYear": "2013",
              "bestScore": 72.75,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 48,
              "name": "郭彧铭",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 68.5,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 8,
              "name": "孙晨曦",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 61.5,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 6,
              "name": "高翊博",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 53,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 50,
              "name": "刘牧州",
              "team": "个人",
              "birthYear": "2011",
              "bestScore": 35,
              "points": 176
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
              "bib": 58,
              "name": "杨峻溪",
              "team": "个人",
              "birthYear": "2010",
              "bestScore": 88.5,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 15,
              "name": "袁嘉伟",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 85.25,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 14,
              "name": "何琨鹏",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 80,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 19,
              "name": "黄子剑",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 68.75,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 13,
              "name": "李智贤",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2010",
              "bestScore": 65.5,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 16,
              "name": "吴海鑫",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 63.5,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 60,
              "name": "封树渝",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 28.75,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 61,
              "name": "雷涵文",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 9,
              "points": 212
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（雪如意站）",
      "sport": "自由式滑雪大跳台",
      "sportType": "freestyle-bigair",
      "location": "张家口崇礼雪如意滑雪场",
      "date": "2026-02-08",
      "endDate": "2026-02-11",
      "status": "completed",
      "events": [
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 61,
              "name": "闫妍",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 85,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 44,
              "name": "张天馨",
              "team": "石家庄市冰雪与足球运动中心",
              "bestScore": 83.67,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 50,
              "name": "赵紫琪",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 80.67,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 45,
              "name": "武温暖",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 76.33,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 64,
              "name": "张耘萌",
              "team": "个人",
              "bestScore": 74,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 49,
              "name": "陈科羽",
              "team": "四川体育职业学院",
              "birthYear": "2016",
              "bestScore": 72.33,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 33,
              "name": "甄芝漫",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 70.33,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 43,
              "name": "李诗沫",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2015",
              "bestScore": 68,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 56,
              "name": "王玗希",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 64.33,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 36,
              "name": "王淑哲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 62.33,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 38,
              "name": "孙焕轲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 59.67,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 46,
              "name": "韩小贝",
              "team": "石家庄市冰雪与足球运动中心",
              "bestScore": 58,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 60,
              "name": "孙焕轶",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 56,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 48,
              "name": "任可心",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 51.33,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 30,
              "name": "欧子娴",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "bestScore": 45.33,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 59,
              "name": "王汝懿",
              "team": "个人",
              "bestScore": 35.33,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 63,
              "name": "孙婉迪",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 34.33,
              "points": 127
            },
            {
              "rank": 18,
              "bib": 62,
              "name": "李佳馨",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 33.33,
              "points": 121
            },
            {
              "rank": 19,
              "bib": 57,
              "name": "纪栩妍",
              "team": "个人",
              "bestScore": 16.67,
              "points": 115
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
              "bib": 62,
              "name": "张墨凡",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2014",
              "bestScore": 88,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 64,
              "name": "常嘉林",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2014",
              "bestScore": 76,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 71,
              "name": "赵铠轩",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 69.33,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 70,
              "name": "王俊熙",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 62.33,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 82,
              "name": "吴雨桐",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 57.67,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 65,
              "name": "崔芃森",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 48.67,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 69,
              "name": "张梓童",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 46.67,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 74,
              "name": "陈维仁",
              "team": "上海雪酷滑雪竞技队",
              "bestScore": 45.33,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 73,
              "name": "芦梓恒",
              "team": "纳西亚",
              "bestScore": 40.33,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 66,
              "name": "赵子钰",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 36.33,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 77,
              "name": "卢彦词",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 13.33,
              "points": 176
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
              "bib": 52,
              "name": "周紫君",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 90.67,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 41,
              "name": "罗优璇",
              "team": "河南省体育局",
              "birthYear": "2010",
              "bestScore": 85.33,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 34,
              "name": "平梓涵",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 81,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 54,
              "name": "叶欣悦",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 79,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 53,
              "name": "杨芷妍",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 77,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 29,
              "name": "李雅馨",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2011",
              "bestScore": 75.33,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 51,
              "name": "王珈绮",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 73.33,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 39,
              "name": "陈奕歌",
              "team": "河南省体育局",
              "birthYear": "2012",
              "bestScore": 69.33,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 55,
              "name": "韩萨仁其木格",
              "team": "小崔运动",
              "birthYear": "2013",
              "bestScore": 61.33,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 40,
              "name": "殷玉萱",
              "team": "河南省体育局",
              "bestScore": 19.33,
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
              "bib": 72,
              "name": "璩恩慧",
              "team": "河南省体育局",
              "birthYear": "2011",
              "bestScore": 93.67,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 80,
              "name": "邓明涛",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 90,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 79,
              "name": "王培旭",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 81.67,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 78,
              "name": "周英杰",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 79.67,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 67,
              "name": "张乔淳佑",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2012",
              "bestScore": 71,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 63,
              "name": "王翊宁",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2012",
              "bestScore": 67,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 76,
              "name": "陈飞扬",
              "team": "上海雪酷滑雪竞技队",
              "bestScore": 60,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 83,
              "name": "刘锐淇",
              "team": "个人",
              "bestScore": 49,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 75,
              "name": "陈鑫昊",
              "team": "上海雪酷滑雪竞技队",
              "bestScore": 48,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 81,
              "name": "刘栩辰",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 47.33,
              "points": 187
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 35,
              "name": "夏可馨",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2009",
              "bestScore": 78.67,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 26,
              "name": "高梓曦",
              "team": "A+自由式滑雪队",
              "bestScore": 63,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 66,
              "name": "陈露凝",
              "team": "个人",
              "birthYear": "2010",
              "bestScore": 57.67,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 27,
              "name": "齐馨",
              "team": "A+自由式滑雪队",
              "birthYear": "2009",
              "bestScore": 30.33,
              "points": 280
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（雪如意站）",
      "sport": "单板滑雪坡面障碍技巧",
      "sportType": "snowboard-slopestyle",
      "location": "张家口崇礼雪如意滑雪场",
      "date": "2026-02-05",
      "endDate": "2026-02-08",
      "status": "completed",
      "events": [
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 17,
              "name": "颜嘉懿",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 82,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 14,
              "name": "杨舒雅",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 77.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 15,
              "name": "陈松妤",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 74.5,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 16,
              "name": "牛安芷芸",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 63.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 6,
              "name": "周子钰",
              "team": "山西省冰雪运动中心",
              "birthYear": "2017",
              "bestScore": 60.5,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 12,
              "name": "张诗涵",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2017",
              "bestScore": 56.25,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 5,
              "name": "顾嘉禾",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 54.5,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 18,
              "name": "周若慈",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 45,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 1,
              "name": "翟姝涵",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 38.75,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 19,
              "name": "杨茗然",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 36.25,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 3,
              "name": "蒋柠萱",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2015",
              "bestScore": 15,
              "points": 176
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 34,
              "name": "刘翰泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 86.75,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 12,
              "name": "王祖安",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 74.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 27,
              "name": "陈宇垚",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 72.5,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 9,
              "name": "王曌霖",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 70.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 35,
              "name": "范天成",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 68.25,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 1,
              "name": "曾云泽",
              "team": "New team",
              "birthYear": "2014",
              "bestScore": 64.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 38,
              "name": "蒋桨",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 57.25,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 7,
              "name": "赵严诺",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 51,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 40,
              "name": "王辰然",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 50,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 44,
              "name": "马琸阳",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 49.5,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 2,
              "name": "褚天羿",
              "team": "Star单板队",
              "birthYear": "2016",
              "bestScore": 48.75,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 39,
              "name": "张哲朗",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 48.5,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 24,
              "name": "刘桐朔",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 47.5,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 11,
              "name": "魏子博",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 46.5,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 42,
              "name": "监柏霖",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 45.75,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 45,
              "name": "马琸明",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 45.25,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 23,
              "name": "刘沐泽",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 42.75,
              "points": 127
            },
            {
              "rank": 18,
              "bib": 41,
              "name": "方柏尧",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 40.75,
              "points": 121
            },
            {
              "rank": 19,
              "bib": 37,
              "name": "高圣煊",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 39.5,
              "points": 115
            },
            {
              "rank": 20,
              "bib": 43,
              "name": "刘沐文",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 36,
              "points": 110
            },
            {
              "rank": 21,
              "bib": 36,
              "name": "刘音里",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 35.25,
              "points": 105
            },
            {
              "rank": 22,
              "bib": 5,
              "name": "阿力合尔·木拉提江",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2014",
              "bestScore": 26,
              "points": 100
            },
            {
              "rank": 23,
              "bib": 32,
              "name": "刘奇翀",
              "team": "四平市冬季运动管理中心",
              "birthYear": "2015",
              "bestScore": 16,
              "points": 95
            },
            {
              "rank": 24,
              "bib": 33,
              "name": "曾星越",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 15.75,
              "points": 91
            },
            {
              "rank": 25,
              "bib": 4,
              "name": "石昊桐",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 11.5,
              "points": 87
            },
            {
              "rank": 26,
              "bib": 20,
              "name": "陶志伟",
              "team": "山西省冰雪运动中心",
              "birthYear": "2016",
              "bestScore": 11.25,
              "points": 83
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 4,
              "name": "鱼嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 89,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 7,
              "name": "张依冉",
              "team": "山西省冰雪运动中心",
              "birthYear": "2011",
              "bestScore": 83.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 8,
              "name": "张淑雅",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 75.25,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 20,
              "name": "李芸西",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 68.75,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 10,
              "name": "郭婉诗",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 60.25,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 9,
              "name": "张淑棋",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 42.5,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 22,
              "name": "刘霓霏",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 38,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 13,
              "name": "刘禹婵",
              "team": "四平市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 36,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 21,
              "name": "王玮怡",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 8.5,
              "points": 199
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 28,
              "name": "高明烨",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "bestScore": 92.75,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 29,
              "name": "袁梓程",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 82.75,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 47,
              "name": "王恒宇",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 78.25,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 3,
              "name": "王浩臣",
              "team": "Star单板队",
              "birthYear": "2013",
              "bestScore": 72,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 46,
              "name": "卢司焱",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 69,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 30,
              "name": "刘子俊",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 66,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 56,
              "name": "张栋涵",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 63.75,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "孙晨曦",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 62.25,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 48,
              "name": "郭彧铭",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 59,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 52,
              "name": "管奕涵",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 50.25,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 50,
              "name": "刘牧州",
              "team": "个人",
              "birthYear": "2011",
              "bestScore": 38.25,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 55,
              "name": "汤一",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 22,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 51,
              "name": "尤睿",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 9,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 22,
              "name": "梁明峰",
              "team": "山西省冰雪运动中心",
              "birthYear": "2012",
              "bestScore": 8,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 6,
              "name": "高翊博",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 5.75,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 49,
              "name": "冯思源",
              "team": "个人",
              "birthYear": "2011",
              "bestScore": 4.75,
              "points": 134
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 31,
              "name": "李俊辛",
              "team": "四川体育职业学院",
              "birthYear": "2008",
              "bestScore": 86,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 16,
              "name": "吴海鑫",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 70.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 58,
              "name": "杨峻溪",
              "team": "个人",
              "birthYear": "2010",
              "bestScore": 67.25,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 14,
              "name": "何琨鹏",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 64.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 15,
              "name": "袁嘉伟",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 62.5,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 13,
              "name": "李智贤",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2010",
              "bestScore": 60.5,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 19,
              "name": "黄子剑",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 57.25,
              "points": 226
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国高山滑雪U系列比赛（鳌山站）",
      "sport": "高山滑雪",
      "sportType": "alpine",
      "location": "鳌山滑雪场",
      "date": "2026-02-03",
      "endDate": "2026-02-06",
      "status": "completed",
      "events": [
        {
          "discipline": "回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 25,
              "name": "钱语墨",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "28.89",
              "run2": "29.75",
              "time": "58.64",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 26,
              "name": "张雨桐",
              "team": "个人",
              "run1": "33.52",
              "run2": "33.36",
              "time": "1:06.88",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 23,
              "name": "李若瑜",
              "team": "中关村一小",
              "birthYear": "2014",
              "run1": "34.88",
              "run2": "34.32",
              "time": "1:09.20",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 31,
              "name": "李欣桐",
              "team": "北京市朝阳区第三少儿业余体校",
              "run1": "35.50",
              "run2": "35.93",
              "time": "1:11.43",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 24,
              "name": "李昊汐",
              "team": "西安热雪奇迹",
              "birthYear": "2016",
              "run1": "37.74",
              "run2": "38.28",
              "time": "1:16.02",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 29,
              "name": "谷悦来",
              "team": "泾源县国有资本投资运营集团有限公司",
              "run1": "39.32",
              "run2": "39.44",
              "time": "1:18.76",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 22,
              "name": "付子乔",
              "team": "个人",
              "run1": "43.84",
              "run2": "44.98",
              "time": "1:28.82",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 27,
              "name": "穆艺馨",
              "team": "西安热雪奇迹竞技队",
              "run1": "46.05",
              "run2": "43.89",
              "time": "1:29.94",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 21,
              "name": "潘秋潼",
              "team": "西安热雪奇迹竞技队",
              "run1": "50.07",
              "run2": "49.98",
              "time": "1:40.05",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 30,
              "name": "符芳缘",
              "team": "个人",
              "run1": "56.05",
              "run2": "54.62",
              "time": "1:50.67",
              "points": 187
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
              "bib": 39,
              "name": "王子川",
              "team": "北京市朝阳区第三少儿业余体校",
              "run1": "28.68",
              "run2": "29.65",
              "time": "58.33",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 50,
              "name": "张沐晨",
              "team": "北京市朝阳区第三少儿业余体校",
              "run1": "33.50",
              "run2": "32.20",
              "time": "1:05.70",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 40,
              "name": "马金凯",
              "team": "西安热雪奇迹竞技队",
              "run1": "33.63",
              "run2": "34.67",
              "time": "1:08.30",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 43,
              "name": "安若维",
              "team": "个人",
              "run1": "36.12",
              "run2": "35.97",
              "time": "1:12.09",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 51,
              "name": "李景瑞",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "36.09",
              "run2": "36.60",
              "time": "1:12.69",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 38,
              "name": "吴俊霖",
              "team": "个人",
              "run1": "48.91",
              "run2": "47.97",
              "time": "1:36.88",
              "points": 242
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
              "bib": 60,
              "name": "张雨杉",
              "team": "西安高新一中沣东中学初中校区",
              "run1": "33.13",
              "run2": "33.57",
              "time": "1:06.70",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 64,
              "name": "唐妙",
              "team": "重庆市冬季运动管理中心",
              "run1": "34.93",
              "run2": "32.94",
              "time": "1:07.87",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 62,
              "name": "吴馨悦",
              "team": "济南市皇亭竞技体育学校",
              "run1": "33.70",
              "run2": "35.12",
              "time": "1:08.82",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 61,
              "name": "杨茹迦",
              "team": "济南市皇亭竞技体育学校",
              "run1": "38.40",
              "run2": "37.92",
              "time": "1:16.32",
              "points": 280
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
              "bib": 79,
              "name": "国益霖",
              "team": "延庆区体育局",
              "run1": "26.80",
              "run2": "27.14",
              "time": "53.94",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 72,
              "name": "蒋骐阳",
              "team": "兰州碧桂园学校",
              "run1": "31.50",
              "run2": "32.22",
              "time": "1:03.72",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 76,
              "name": "夏睦和",
              "team": "西安热雪奇迹竞技队",
              "run1": "33.57",
              "run2": "34.61",
              "time": "1:08.18",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 82,
              "name": "陈相伯",
              "team": "泾源县国有资本投资运营集团有限公司",
              "run1": "35.88",
              "run2": "38.06",
              "time": "1:13.94",
              "points": 280
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 6,
              "name": "孙若涵",
              "team": "延庆区体育局",
              "run1": "29.12",
              "run2": "29.43",
              "time": "58.55",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "周昱含",
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "birthYear": "2009",
              "run1": "30.19",
              "run2": "31.20",
              "time": "1:01.39",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "李冉",
              "team": "个人",
              "run1": "30.71",
              "run2": "32.42",
              "time": "1:03.13",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 1,
              "name": "邱心悦",
              "team": "葫小芦（北京）体育有限公司",
              "run1": "32.76",
              "run2": "32.42",
              "time": "1:05.18",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 4,
              "name": "王胜婕",
              "team": "葫小芦（北京）体育有限公司",
              "run1": "34.20",
              "run2": "33.94",
              "time": "1:08.14",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 5,
              "name": "杨睿怡",
              "team": "个人",
              "run1": "35.32",
              "run2": "38.29",
              "time": "1:13.61",
              "points": 242
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
              "bib": 13,
              "name": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "26.23",
              "run2": "27.30",
              "time": "53.53",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 11,
              "name": "王正政",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "27.20",
              "run2": "27.04",
              "time": "54.24",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 15,
              "name": "王冠霖",
              "team": "吉林坤伦滑雪俱乐部",
              "birthYear": "2009",
              "run1": "28.33",
              "run2": "27.97",
              "time": "56.30",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 16,
              "name": "左子正",
              "team": "个人",
              "birthYear": "2009",
              "run1": "28.36",
              "run2": "28.73",
              "time": "57.09",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 17,
              "name": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2009",
              "run1": "28.45",
              "run2": "30.55",
              "time": "59.00",
              "points": 260
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
              "bib": 28,
              "name": "钱语墨",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "23.63",
              "run2": "23.60",
              "time": "47.23",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 23,
              "name": "李欣桐",
              "team": "北京市朝阳区第三少儿业余体校",
              "run1": "28.24",
              "run2": "31.17",
              "time": "59.41",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 27,
              "name": "穆艺馨",
              "team": "西安热雪奇迹竞技队",
              "run1": "32.54",
              "run2": "33.40",
              "time": "1:05.94",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 29,
              "name": "符芳缘",
              "team": "个人",
              "run1": "36.41",
              "run2": "37.20",
              "time": "1:13.61",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 30,
              "name": "魏锦楦",
              "team": "个人",
              "run1": "50.25",
              "run2": "47.96",
              "time": "1:38.21",
              "points": 260
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
              "bib": 45,
              "name": "赵酌",
              "team": "成都热雪奇迹",
              "run1": "23.52",
              "run2": "23.50",
              "time": "47.02",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 40,
              "name": "王子川",
              "team": "北京市朝阳区第三少儿业余体校",
              "run1": "24.81",
              "run2": "25.30",
              "time": "50.11",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 47,
              "name": "王永清",
              "team": "济南市皇亭竞技体育学校",
              "run1": "26.14",
              "run2": "26.20",
              "time": "52.34",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 35,
              "name": "李景瑞",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "26.58",
              "run2": "27.51",
              "time": "54.09",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 36,
              "name": "张沐晨",
              "team": "北京市朝阳区第三少儿业余体校",
              "run1": "26.67",
              "run2": "27.60",
              "time": "54.27",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 42,
              "name": "马金凯",
              "team": "西安热雪奇迹竞技队",
              "run1": "27.26",
              "run2": "27.76",
              "time": "55.02",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 51,
              "name": "郭承卓",
              "team": "泾源县国有资本投资运营集团有限公司",
              "run1": "28.50",
              "run2": "28.32",
              "time": "56.82",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 38,
              "name": "郭承远",
              "team": "泾源县国有资本投资运营集团有限公司",
              "run1": "29.63",
              "run2": "31.75",
              "time": "1:01.38",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 37,
              "name": "徐子皓",
              "team": "泾源县国有资本投资运营集团有限公司",
              "run1": "31.46",
              "run2": "34.71",
              "time": "1:06.17",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 48,
              "name": "白瑾轩",
              "team": "西安热雪奇迹竞技队",
              "run1": "32.47",
              "run2": "33.88",
              "time": "1:06.35",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 53,
              "name": "吴俊霖",
              "team": "个人",
              "run1": "33.52",
              "run2": "34.05",
              "time": "1:07.57",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 41,
              "name": "王永源",
              "team": "济南市皇亭竞技体育学校",
              "run1": "38.72",
              "run2": "32.69",
              "time": "1:11.41",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 50,
              "name": "祁琨博",
              "team": "个人",
              "run1": "41.46",
              "run2": "42.95",
              "time": "1:24.41",
              "points": 157
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
              "bib": 60,
              "name": "张雨杉",
              "team": "西安高新一中沣东中学初中校区",
              "run1": "25.66",
              "run2": "26.33",
              "time": "51.99",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 65,
              "name": "唐妙",
              "team": "重庆市冬季运动管理中心",
              "run1": "26.40",
              "run2": "26.86",
              "time": "53.26",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 61,
              "name": "吴馨悦",
              "team": "济南市皇亭竞技体育学校",
              "run1": "26.97",
              "run2": "27.99",
              "time": "54.96",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 63,
              "name": "杨茹迦",
              "team": "济南市皇亭竞技体育学校",
              "run1": "28.31",
              "run2": "29.23",
              "time": "57.54",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 62,
              "name": "张歆瑶",
              "team": "个人",
              "run1": "50.01",
              "run2": "51.21",
              "time": "1:41.22",
              "points": 260
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
              "bib": 75,
              "name": "盛嗣垚",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "22.65",
              "run2": "22.80",
              "time": "45.45",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 73,
              "name": "国益霖",
              "team": "延庆区体育局",
              "run1": "23.58",
              "run2": "23.75",
              "time": "47.33",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 72,
              "name": "王思博",
              "team": "延庆区体育局",
              "run1": "23.73",
              "run2": "23.70",
              "time": "47.43",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 81,
              "name": "马腾轩",
              "team": "北京市朝阳区第三少儿业余体校",
              "run1": "24.55",
              "run2": "24.06",
              "time": "48.61",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 71,
              "name": "贾梓瑞",
              "team": "远东东（重庆）体育文化发展有限公司",
              "run1": "24.29",
              "run2": "24.40",
              "time": "48.69",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 79,
              "name": "蒋骐阳",
              "team": "兰州碧桂园学校",
              "run1": "25.59",
              "run2": "25.56",
              "time": "51.15",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 76,
              "name": "夏睦和",
              "team": "西安热雪奇迹竞技队",
              "run1": "26.34",
              "run2": "28.44",
              "time": "54.78",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 70,
              "name": "陈相伯",
              "team": "泾源县国有资本投资运营集团有限公司",
              "run1": "26.49",
              "run2": "33.20",
              "time": "59.69",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 82,
              "name": "李毓森",
              "team": "北京市朝阳区第三少儿业余体校",
              "run1": "29.73",
              "run2": "30.50",
              "time": "1:00.23",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 78,
              "name": "李波一",
              "team": "西安热雪奇迹竞技队",
              "run1": "32.05",
              "run2": "33.93",
              "time": "1:05.98",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 77,
              "name": "尚立明",
              "team": "泾源县国有资本投资运营集团有限公司",
              "run1": "35.33",
              "run2": "35.14",
              "time": "1:10.47",
              "points": 176
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
              "bib": 3,
              "name": "周昱含",
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "birthYear": "2009",
              "run1": "26.24",
              "run2": "25.89",
              "time": "52.13",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 1,
              "name": "孙若涵",
              "team": "延庆区体育局",
              "run1": "26.36",
              "run2": "26.27",
              "time": "52.63",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 8,
              "name": "邱心悦",
              "team": "葫小芦（北京）体育有限公司",
              "run1": "26.62",
              "run2": "26.15",
              "time": "52.77",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 7,
              "name": "龚信水",
              "team": "重庆市冬季运动管理中心",
              "run1": "27.69",
              "run2": "27.22",
              "time": "54.91",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 9,
              "name": "杨睿怡",
              "team": "个人",
              "run1": "28.84",
              "run2": "29.33",
              "time": "58.17",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 5,
              "name": "刘子歌",
              "team": "个人",
              "run1": "30.00",
              "run2": "30.55",
              "time": "1:00.55",
              "points": 242
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
              "bib": 18,
              "name": "王正政",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "25.28",
              "run2": "24.98",
              "time": "50.26",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 16,
              "name": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "25.50",
              "run2": "24.95",
              "time": "50.45",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 14,
              "name": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2009",
              "run1": "25.25",
              "run2": "25.25",
              "time": "50.50",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 12,
              "name": "左子正",
              "team": "个人",
              "birthYear": "2009",
              "run1": "25.27",
              "run2": "25.27",
              "time": "50.54",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 17,
              "name": "李彦博",
              "team": "成都热雪奇迹",
              "run1": "26.08",
              "run2": "24.92",
              "time": "51.00",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 13,
              "name": "熊泽瑞",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "25.79",
              "run2": "25.43",
              "time": "51.22",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 19,
              "name": "卢佑涵",
              "team": "个人",
              "run1": "49.85",
              "run2": "44.28",
              "time": "1:34.13",
              "points": 226
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（第二站沈阳东北亚站）",
      "sport": "单板滑雪",
      "sportType": "snowboard-parallel",
      "location": "沈阳东北亚滑雪场",
      "date": "2026-01-30",
      "endDate": "2026-01-31",
      "status": "completed",
      "events": [
        {
          "discipline": "大回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 207,
              "name": "须星漫",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2016",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 223,
              "name": "周子翕",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 220,
              "name": "肖金茂",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 216,
              "name": "焦阳云朵",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2014",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 219,
              "name": "古庭钰",
              "team": "8848俱乐部",
              "birthYear": "2014",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 214,
              "name": "李悦嘉",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2015",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 201,
              "name": "李子纯",
              "team": "个人",
              "birthYear": "2014",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 221,
              "name": "曹娜瑛",
              "team": "个人",
              "birthYear": "2016",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 208,
              "name": "李一菂",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2015",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 202,
              "name": "詹涵予",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2015",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 218,
              "name": "朱安然",
              "team": "上海雪酷滑雪竞技队",
              "birthYear": "2015",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 222,
              "name": "李雨萱",
              "team": "个人",
              "birthYear": "2014",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 212,
              "name": "ALBBESU",
              "team": "张家口冰雪运动学校",
              "birthYear": "2015",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 204,
              "name": "张语珊",
              "team": "个人",
              "birthYear": "2014",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 210,
              "name": "李汶瑾",
              "team": "MAYA TEAM",
              "birthYear": "2015",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 203,
              "name": "姜予乔",
              "team": "个人",
              "birthYear": "2015",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 217,
              "name": "李默涵",
              "team": "8848俱乐部",
              "birthYear": "2014",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 213,
              "name": "周爱戴",
              "team": "长春市极刃体育发展有限公司",
              "birthYear": "2015",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 209,
              "name": "马艺瑄",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2015",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 224,
              "name": "张兆檬",
              "team": "King Pro Team",
              "birthYear": "2016",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 206,
              "name": "刘泽萱",
              "team": "吉林峰尚青教体育文化产业有限公司",
              "birthYear": "2017",
              "points": 105
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
              "bib": 287,
              "name": "韩赫洺",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 291,
              "name": "宣达辰",
              "team": "个人",
              "birthYear": "2014",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 267,
              "name": "蒋文栋",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 266,
              "name": "王一臣",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 253,
              "name": "刘昱辰",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 272,
              "name": "罗晓野",
              "team": "个人",
              "birthYear": "2014",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 252,
              "name": "郑祎衫",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2016",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 262,
              "name": "肖咏悦",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2014",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 270,
              "name": "陈鑫艺",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 273,
              "name": "王子溪",
              "team": "King Pro Team",
              "birthYear": "2014",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 295,
              "name": "张睦然",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 288,
              "name": "赵梓聿",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 278,
              "name": "张朔源",
              "team": "张家口市足球和冰雪运动学校",
              "birthYear": "2014",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 276,
              "name": "徐嘉艺",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2014",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 257,
              "name": "朱思越",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 294,
              "name": "黄益航",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 280,
              "name": "孙奥荣",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 281,
              "name": "赵一诺",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2014",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 290,
              "name": "李沛洋",
              "team": "个人",
              "birthYear": "2014",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 289,
              "name": "金俊烨",
              "team": "延吉雪范",
              "birthYear": "2014",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 255,
              "name": "孙昊洋",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2017",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 256,
              "name": "郑伟伦",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2014",
              "points": 100
            },
            {
              "rank": 23,
              "bib": 260,
              "name": "刘钥宸",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2016",
              "points": 96
            },
            {
              "rank": 24,
              "bib": 269,
              "name": "许原岑",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2017",
              "points": 92
            },
            {
              "rank": 25,
              "bib": 264,
              "name": "王梓墨",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "points": 88
            },
            {
              "rank": 26,
              "bib": 268,
              "name": "李承儒",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2017",
              "points": 84
            },
            {
              "rank": 27,
              "bib": 254,
              "name": "梁洺嘉",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2017",
              "points": 80
            },
            {
              "rank": 28,
              "bib": 286,
              "name": "安泓宇",
              "team": "吉林峰尚青教体育文化产业有限公司",
              "birthYear": "2017",
              "points": 76
            },
            {
              "rank": 29,
              "bib": 284,
              "name": "崔铭浩",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2017",
              "points": 73
            },
            {
              "rank": 30,
              "bib": 261,
              "name": "李俊毅",
              "team": "长春市极刃体育发展有限公司",
              "birthYear": "2017",
              "points": 70
            },
            {
              "rank": 31,
              "bib": 285,
              "name": "孟奕成",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2017",
              "points": 67
            },
            {
              "rank": 32,
              "bib": 251,
              "name": "尹一诺",
              "team": "吉林峰尚青教体育文化产业有限公司",
              "birthYear": "2017",
              "points": 64
            },
            {
              "rank": 33,
              "bib": 292,
              "name": "吴杭熹",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2016",
              "points": 61
            },
            {
              "rank": 34,
              "bib": 263,
              "name": "梁洺睿",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2014",
              "points": 58
            },
            {
              "rank": 35,
              "bib": 277,
              "name": "崔凯棋",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2017",
              "points": 55
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
              "bib": 128,
              "name": "邱嘉晴",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2012",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 112,
              "name": "沈凌羽",
              "team": "MAYA TEAM",
              "birthYear": "2012",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 121,
              "name": "刘沛怡",
              "team": "MAYA TEAM",
              "birthYear": "2011",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 127,
              "name": "朱恩瑞",
              "team": "吉林省体育局雪上运动管理中心",
              "birthYear": "2013",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 105,
              "name": "刘妍梦",
              "team": "8848俱乐部",
              "birthYear": "2011",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 104,
              "name": "付睿熹",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 111,
              "name": "刘姝廷",
              "team": "8848俱乐部",
              "birthYear": "2011",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 102,
              "name": "邹齐",
              "team": "个人",
              "birthYear": "2012",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 122,
              "name": "袁薪雅",
              "team": "吉林省体育局雪上运动管理中心",
              "birthYear": "2012",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 123,
              "name": "黄卫瑄",
              "team": "ACE竞技滑雪队",
              "birthYear": "2011",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 108,
              "name": "陈雨歌",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 124,
              "name": "罗依然",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 101,
              "name": "王艺潼",
              "team": "个人",
              "birthYear": "2010",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 132,
              "name": "亢正熙",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 107,
              "name": "李文静",
              "team": "吉林省体育局雪上运动管理中心",
              "birthYear": "2010",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 119,
              "name": "谢露萱",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2013",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 114,
              "name": "叶丽扎·别克苏力坦",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2010",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 125,
              "name": "高雅傲雪",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2012",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 116,
              "name": "CANDIE JIANI SONG",
              "team": "上海雪酷滑雪竞技队",
              "birthYear": "2011",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 115,
              "name": "赵天冉",
              "team": "King Pro Team",
              "birthYear": "2012",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 113,
              "name": "孙小晰",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2013",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 110,
              "name": "王艺诺",
              "team": "吉林省体育局雪上运动管理中心",
              "birthYear": "2013",
              "points": 100
            },
            {
              "rank": 23,
              "bib": 130,
              "name": "刘馨泽",
              "team": "吉林峰尚青教体育文化产业有限公司",
              "birthYear": "2012",
              "points": 96
            },
            {
              "rank": 24,
              "bib": 131,
              "name": "陈梓萌",
              "team": "King Pro Team",
              "birthYear": "2012",
              "points": 92
            },
            {
              "rank": 25,
              "bib": 103,
              "name": "张涵舒",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2010",
              "points": 88
            },
            {
              "rank": 26,
              "bib": 120,
              "name": "焦禹侨",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2012",
              "points": 84
            },
            {
              "rank": 27,
              "bib": 117,
              "name": "朴恩裕",
              "team": "延吉雪范",
              "birthYear": "2011",
              "points": 80
            },
            {
              "rank": 28,
              "bib": 118,
              "name": "刘彦熠",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2013",
              "points": 76
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
              "bib": 162,
              "name": "高佳钇",
              "team": "速森体育",
              "birthYear": "2011",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 155,
              "name": "刁禹宁",
              "team": "个人",
              "birthYear": "2011",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 181,
              "name": "李天圆",
              "team": "MAYA TEAM",
              "birthYear": "2011",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 178,
              "name": "陈清桦",
              "team": "MAYA TEAM",
              "birthYear": "2012",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 151,
              "name": "张雨曈",
              "team": "MAYA TEAM",
              "birthYear": "2012",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 167,
              "name": "李柏翔",
              "team": "MAYA TEAM",
              "birthYear": "2010",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 180,
              "name": "马赛",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 179,
              "name": "高暄壹",
              "team": "吉林省体育局雪上运动管理中心",
              "birthYear": "2012",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 156,
              "name": "李曾翼",
              "team": "个人",
              "birthYear": "2013",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 170,
              "name": "郭天泽",
              "team": "MAYA TEAM",
              "birthYear": "2012",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 158,
              "name": "暴城睿",
              "team": "辽宁极限体育",
              "birthYear": "2012",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 185,
              "name": "杨子绪",
              "team": "个人",
              "birthYear": "2014",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 175,
              "name": "于谨赫",
              "team": "速森体育",
              "birthYear": "2010",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 154,
              "name": "徐承昊",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2012",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 174,
              "name": "叶庆安",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2010",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 169,
              "name": "陈浩铭",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 164,
              "name": "刘华森",
              "team": "吉林峰尚青教体育文化产业有限公司",
              "birthYear": "2013",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 153,
              "name": "尤玺为",
              "team": "个人",
              "birthYear": "2011",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 165,
              "name": "嘎日玛盖",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2012",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 173,
              "name": "司忠正",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2011",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 159,
              "name": "董天赋",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2011",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 182,
              "name": "左珈宁",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2011",
              "points": 100
            },
            {
              "rank": 23,
              "bib": 177,
              "name": "高希言",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2012",
              "points": 96
            },
            {
              "rank": 24,
              "bib": 176,
              "name": "刘子木",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2011",
              "points": 92
            },
            {
              "rank": 25,
              "bib": 152,
              "name": "张峰睿",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2011",
              "points": 88
            },
            {
              "rank": 26,
              "bib": 168,
              "name": "孙晟轩",
              "team": "个人",
              "birthYear": "2012",
              "points": 84
            },
            {
              "rank": 27,
              "bib": 166,
              "name": "刘子乐",
              "team": "King Pro Team",
              "birthYear": "2011",
              "points": 80
            },
            {
              "rank": 28,
              "bib": 163,
              "name": "梁恩泽",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2011",
              "points": 76
            },
            {
              "rank": 29,
              "bib": 161,
              "name": "姜胤伯",
              "team": "长春市极刃体育发展有限公司",
              "birthYear": "2012",
              "points": 73
            },
            {
              "rank": 30,
              "bib": 160,
              "name": "陈冠霖",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2010",
              "points": 70
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 10,
              "name": "林子又",
              "team": "四川体育职业学院",
              "birthYear": "2009",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 17,
              "name": "张芊凝",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2009",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 7,
              "name": "臧怡然",
              "team": "个人",
              "birthYear": "2008",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "丁小苏",
              "team": "MAYA TEAM",
              "birthYear": "2009",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 16,
              "name": "袁丽文",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2009",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 5,
              "name": "姜林宏",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2007",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 14,
              "name": "李雨濛",
              "team": "大连雨彤体育赛事俱乐部",
              "birthYear": "2010",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "张允童",
              "team": "个人",
              "birthYear": "2008",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 1,
              "name": "罗念其",
              "team": "四川体育职业学院",
              "birthYear": "2009",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 2,
              "name": "靳羽琪",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2009",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 13,
              "name": "邵菲梵",
              "team": "北京天高云淡体育文化有限公司",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 9,
              "name": "范芮希",
              "team": "个人",
              "birthYear": "2009",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 12,
              "name": "贾釉茜",
              "team": "ACE竞技滑雪队",
              "birthYear": "2009",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 15,
              "name": "房洢伊",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2010",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 11,
              "name": "白默函",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2008",
              "points": 141
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 51,
              "name": "张鑫泽",
              "team": "速森体育",
              "birthYear": "2009",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 71,
              "name": "谢德拥",
              "team": "吉林省体育局雪上运动管理中心",
              "birthYear": "2008",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 60,
              "name": "王嘉崎",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2008",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 65,
              "name": "王洪飞",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2008",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 64,
              "name": "李嘉祺",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2010",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 75,
              "name": "窦羿",
              "team": "MAYA TEAM",
              "birthYear": "2007",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 63,
              "name": "郝子铭",
              "team": "四川体育职业学院",
              "birthYear": "2008",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 56,
              "name": "付壡喆",
              "team": "四川体育职业学院",
              "birthYear": "2009",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 68,
              "name": "程春",
              "team": "长春市冬季运动管理中心",
              "birthYear": "2009",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 76,
              "name": "苗誉镨",
              "team": "速森体育",
              "birthYear": "2007",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 55,
              "name": "杨武胜俊",
              "team": "四川体育职业学院",
              "birthYear": "2008",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 59,
              "name": "宋星锋",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2009",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 79,
              "name": "吴熙诚",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2009",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 54,
              "name": "尚久智",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2009",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 69,
              "name": "曲星铭",
              "team": "个人",
              "birthYear": "2008",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 78,
              "name": "樊冠序",
              "team": "ACE竞技滑雪队",
              "birthYear": "2008",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 73,
              "name": "吴保江",
              "team": "零站单板滑雪俱乐部",
              "birthYear": "2007",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 52,
              "name": "王天阳",
              "team": "个人",
              "birthYear": "2008",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 70,
              "name": "杨一丁",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2009",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 67,
              "name": "童科军",
              "team": "五家渠市金科实验",
              "birthYear": "2008",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 61,
              "name": "刘鑫泽",
              "team": "ACE竞技滑雪队",
              "birthYear": "2009",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 62,
              "name": "孙嘉泽",
              "team": "沈抚改革创新示范区体育联合会",
              "birthYear": "2009",
              "points": 100
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国高山滑雪U系列比赛（松花湖站）",
      "sport": "高山滑雪",
      "sportType": "alpine",
      "location": "吉林省吉林市",
      "date": "2026-01-13",
      "endDate": "2026-01-16",
      "status": "completed",
      "events": [
        {
          "discipline": "回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 1,
              "name": "钱语墨",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:25.73",
              "run2": "00:25.51",
              "time": "00:51.24",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "顾欣蕊",
              "team": "上海市静安区滑雪协会",
              "run1": "00:27.55",
              "run2": "00:26.77",
              "time": "00:54.32",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "赵希悦",
              "team": "延庆区体育局",
              "run1": "00:27.38",
              "run2": "00:27.24",
              "time": "00:54.62",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "路钧惠",
              "team": "延庆区体育局",
              "run1": "00:27.67",
              "run2": "00:27.30",
              "time": "00:54.97",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "张雨桐",
              "team": "个人",
              "run1": "00:27.94",
              "run2": "00:27.77",
              "time": "00:55.71",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "张竞戈",
              "team": "个人",
              "run1": "00:28.44",
              "run2": "00:28.46",
              "time": "00:56.90",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 7,
              "name": "张曦安",
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "run1": "00:29.39",
              "run2": "00:29.09",
              "time": "00:58.48",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "冯薏霏",
              "team": "个人（零度竞技）",
              "run1": "00:29.97",
              "run2": "00:29.81",
              "time": "00:59.78",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 9,
              "name": "李若瑜",
              "team": "中关村一小",
              "birthYear": "2014",
              "run1": "00:31.81",
              "run2": "00:30.62",
              "time": "01:02.43",
              "points": 199
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
              "bib": 1,
              "name": "赵酌",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "run1": "00:23.73",
              "run2": "00:23.91",
              "time": "00:47.64",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "孙楚为",
              "team": "大连奥萨",
              "run1": "00:28.40",
              "run2": "00:27.13",
              "time": "00:55.53",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "安若维",
              "team": "个人",
              "run1": "00:32.39",
              "run2": "00:30.78",
              "time": "01:03.17",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "孙乾铭",
              "team": "山域竞技体育工作室二队",
              "run1": "00:34.36",
              "run2": "00:33.34",
              "time": "01:07.70",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "柳昇延",
              "team": "延庆区体育局",
              "run1": "00:35.21",
              "run2": "00:33.84",
              "time": "01:09.05",
              "points": 260
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
              "bib": 1,
              "name": "陈玥潞",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:24.10",
              "run2": "00:24.53",
              "time": "00:48.63",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "贾一诺",
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "run1": "00:24.61",
              "run2": "00:24.49",
              "time": "00:49.10",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "张雨馨",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "run1": "00:24.59",
              "run2": "00:25.32",
              "time": "00:49.91",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "刘金潼",
              "team": "个人（零度竞技）",
              "run1": "00:27.79",
              "run2": "00:27.52",
              "time": "00:55.31",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "张雨杉",
              "team": "西安高新一中沣东中学初中校区",
              "run1": "00:28.81",
              "run2": "00:27.83",
              "time": "00:56.64",
              "points": 260
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
              "bib": 1,
              "name": "王梓墨",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "run1": "00:21.80",
              "run2": "00:21.75",
              "time": "00:43.55",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "陈煜轩",
              "team": "大连奥萨竞技",
              "run1": "00:21.83",
              "run2": "00:21.82",
              "time": "00:43.65",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "王俞涵",
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "run1": "00:22.21",
              "run2": "00:22.28",
              "time": "00:44.49",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "韩以乐",
              "team": "竞禹体育",
              "run1": "00:22.45",
              "run2": "00:22.07",
              "time": "00:44.52",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "盛嗣垚",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:22.50",
              "run2": "00:22.11",
              "time": "00:44.61",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "丁天睿",
              "team": "山域竞技体育工作室",
              "run1": "00:22.52",
              "run2": "00:22.10",
              "time": "00:44.62",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 7,
              "name": "于承睿",
              "team": "个人（零度竞技）",
              "run1": "00:22.62",
              "run2": "00:22.44",
              "time": "00:45.06",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "国益霖",
              "team": "延庆区体育局",
              "run1": "00:22.92",
              "run2": "00:23.00",
              "time": "00:45.92",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 9,
              "name": "丁润章",
              "team": "东北师范大学附属实验学校（经开）",
              "run1": "00:22.28",
              "run2": "00:23.75",
              "time": "00:46.03",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 10,
              "name": "郭轩烨",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:23.13",
              "run2": "00:22.95",
              "time": "00:46.08",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 11,
              "name": "姚政希",
              "team": "个人",
              "run1": "00:23.84",
              "run2": "00:23.63",
              "time": "00:47.47",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 12,
              "name": "王景亮",
              "team": "广州热雪奇迹文化体育发展有限公司",
              "run1": "00:23.92",
              "run2": "00:23.80",
              "time": "00:47.72",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 13,
              "name": "林子辰",
              "team": "重庆市冬季运动管理中心1队",
              "run1": "00:24.67",
              "run2": "00:23.29",
              "time": "00:47.96",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 14,
              "name": "沈昊宇",
              "team": "个人",
              "run1": "00:24.52",
              "run2": "00:23.66",
              "time": "00:48.18",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 15,
              "name": "张博智",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:24.31",
              "run2": "00:24.07",
              "time": "00:48.38",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 16,
              "name": "肖瑞林",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2011",
              "run1": "00:24.92",
              "run2": "00:24.55",
              "time": "00:49.47",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 17,
              "name": "赵宣贺",
              "team": "个人",
              "run1": "00:24.98",
              "run2": "00:25.26",
              "time": "00:50.24",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 18,
              "name": "田芷源",
              "team": "长春市朝阳区山域竞技体育工作室",
              "run1": "00:25.51",
              "run2": "00:25.32",
              "time": "00:50.83",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 19,
              "name": "孙茂文",
              "team": "个人",
              "run1": "00:25.54",
              "run2": "00:25.86",
              "time": "00:51.40",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 20,
              "name": "冯泽昊",
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "run1": "00:26.02",
              "run2": "00:26.52",
              "time": "00:52.54",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 21,
              "name": "马照然",
              "team": "大连奥萨体育文化有限公司",
              "run1": "00:26.66",
              "run2": "00:26.13",
              "time": "00:52.79",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 22,
              "name": "董林枫",
              "team": "RSKI竞技滑雪队队",
              "run1": "00:26.57",
              "run2": "00:26.72",
              "time": "00:53.29",
              "points": 100
            },
            {
              "rank": 23,
              "bib": 23,
              "name": "蒋骐阳",
              "team": "兰州碧桂园学校",
              "run1": "00:28.24",
              "run2": "00:27.78",
              "time": "00:56.02",
              "points": 95
            },
            {
              "rank": 24,
              "bib": 24,
              "name": "龙思祺",
              "team": "广州雪迹文化体育发展有限公司",
              "run1": "00:32.11",
              "run2": "00:31.38",
              "time": "01:03.49",
              "points": 91
            }
          ]
        },
        {
          "discipline": "回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 1,
              "name": "孙若涵",
              "team": "延庆区体育局",
              "run1": "00:25.05",
              "run2": "00:25.23",
              "time": "00:50.28",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "周昱含",
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "birthYear": "2009",
              "run1": "00:25.31",
              "run2": "00:25.87",
              "time": "00:51.18",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "龚信水",
              "team": "重庆市冬季运动管理中心1队",
              "run1": "00:25.86",
              "run2": "00:26.16",
              "time": "00:52.02",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "邱心悦",
              "team": "葫小芦（北京）体育有限公司",
              "run1": "00:27.07",
              "run2": "00:26.79",
              "time": "00:53.86",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "王胜婕",
              "team": "葫小芦（北京）体育有限公司",
              "run1": "00:27.03",
              "run2": "00:26.92",
              "time": "00:53.95",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "杨睿怡",
              "team": "华发冰雪热雪奇迹",
              "birthYear": "2010",
              "run1": "00:31.20",
              "run2": "00:31.74",
              "time": "01:02.94",
              "points": 242
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
              "bib": 1,
              "name": "熊泽瑞",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "00:22.67",
              "run2": "00:22.79",
              "time": "00:45.46",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "高琦硕",
              "team": "高峰",
              "run1": "00:23.02",
              "run2": "00:23.00",
              "time": "00:46.02",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "00:23.51",
              "run2": "00:22.89",
              "time": "00:46.40",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "明泳桐",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:23.48",
              "run2": "00:23.11",
              "time": "00:46.59",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "左子正",
              "team": "左子正",
              "run1": "00:23.26",
              "run2": "00:23.49",
              "time": "00:46.75",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "王正政",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "00:23.62",
              "run2": "00:23.82",
              "time": "00:47.44",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 7,
              "name": "鞠沐辰",
              "team": "济南市皇亭竞技体育学校",
              "run1": "00:24.42",
              "run2": "00:23.38",
              "time": "00:47.80",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2009",
              "run1": "00:24.16",
              "run2": "00:24.10",
              "time": "00:48.26",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 9,
              "name": "王冠霖",
              "team": "吉林坤伦滑雪俱乐部",
              "birthYear": "2009",
              "run1": "00:25.23",
              "run2": "00:24.48",
              "time": "00:49.71",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 10,
              "name": "谭皓阳",
              "team": "个人（高峰）",
              "run1": "00:30.24",
              "run2": "00:30.09",
              "time": "01:00.33",
              "points": 187
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
              "bib": 1,
              "name": "钱语墨",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:26.62",
              "run2": "00:26.36",
              "time": "00:52.98",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "张雨桐",
              "team": "个人",
              "run1": "00:27.47",
              "run2": "00:27.85",
              "time": "00:55.32",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "赵希悦",
              "team": "延庆区体育局",
              "run1": "00:27.89",
              "run2": "00:28.21",
              "time": "00:56.10",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "顾欣蕊",
              "team": "上海市静安区滑雪协会",
              "run1": "00:28.46",
              "run2": "00:27.80",
              "time": "00:56.26",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "张曦安",
              "team": "零度竞技（吉林省零下壹度体育用品有限公司）",
              "run1": "00:28.75",
              "run2": "00:28.13",
              "time": "00:56.88",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "路钧惠",
              "team": "延庆区体育局",
              "run1": "00:29.47",
              "run2": "00:29.23",
              "time": "00:58.70",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 7,
              "name": "田芷郡",
              "team": "山域竞技体育工作室",
              "run1": "00:32.05",
              "run2": "00:31.76",
              "time": "01:03.81",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "崔凯淇",
              "team": "山域竞技体育工作室",
              "run1": "00:35.81",
              "run2": "00:35.44",
              "time": "01:11.25",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 9,
              "name": "韩侨安",
              "team": "竞禹体育",
              "run1": "00:36.24",
              "run2": "00:36.45",
              "time": "01:12.69",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 10,
              "name": "魏子澄",
              "team": "本溪全明星滑雪学校",
              "run1": "00:38.49",
              "run2": "00:38.94",
              "time": "01:17.43",
              "points": 187
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
              "bib": 1,
              "name": "赵酌",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "run1": "00:26.82",
              "run2": "00:26.55",
              "time": "00:53.37",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "竹禹丞",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "00:31.17",
              "run2": "00:30.11",
              "time": "01:01.28",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "蒋伯阳",
              "team": "兰州碧桂园学校",
              "run1": "00:30.95",
              "run2": "00:30.45",
              "time": "01:01.40",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "温逸伦",
              "team": "吉林坤伦滑雪俱乐部",
              "run1": "00:30.87",
              "run2": "00:30.65",
              "time": "01:01.52",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "张轩睿",
              "team": "RSKI竞技滑雪队队",
              "run1": "00:31.24",
              "run2": "00:30.72",
              "time": "01:01.96",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "安若维",
              "team": "个人",
              "run1": "00:31.41",
              "run2": "00:31.08",
              "time": "01:02.49",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 7,
              "name": "杨东信",
              "team": "RSKI竞技滑雪队队",
              "run1": "00:31.89",
              "run2": "00:30.74",
              "time": "01:02.63",
              "points": 226
            },
            {
              "rank": 7,
              "bib": 8,
              "name": "董子都",
              "team": "个人",
              "run1": "00:30.62",
              "run2": "00:32.01",
              "time": "01:02.63",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 9,
              "name": "陈昕逸",
              "team": "个人",
              "run1": "00:31.27",
              "run2": "00:31.46",
              "time": "01:02.73",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 10,
              "name": "柳昇延",
              "team": "延庆区体育局",
              "run1": "00:33.64",
              "run2": "00:34.38",
              "time": "01:08.02",
              "points": 187
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
              "bib": 1,
              "name": "陈玥潞",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:25.94",
              "run2": "00:26.23",
              "time": "00:52.17",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "杨玉涵",
              "team": "吉林坤伦滑雪俱乐部",
              "run1": "00:26.42",
              "run2": "00:26.31",
              "time": "00:52.73",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "张雨馨",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "run1": "00:27.43",
              "run2": "00:26.88",
              "time": "00:54.31",
              "points": 303
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
              "bib": 1,
              "name": "王梓墨",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "run1": "00:24.95",
              "run2": "00:24.86",
              "time": "00:49.81",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "盛嗣垚",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:25.53",
              "run2": "00:25.02",
              "time": "00:50.55",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "丁天睿",
              "team": "山域竞技体育工作室",
              "run1": "00:25.47",
              "run2": "00:25.48",
              "time": "00:50.95",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "郭轩烨",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:26.17",
              "run2": "00:25.49",
              "time": "00:51.66",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "韩以乐",
              "team": "竞禹体育",
              "run1": "00:25.62",
              "run2": "00:26.23",
              "time": "00:51.85",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "贾梓瑞",
              "team": "远东东（重庆）体育文化发展有限公司",
              "run1": "00:26.07",
              "run2": "00:26.11",
              "time": "00:52.18",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 7,
              "name": "田芷源",
              "team": "长春市朝阳区山域竞技体育工作室",
              "run1": "00:26.53",
              "run2": "00:26.15",
              "time": "00:52.68",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "林子辰",
              "team": "重庆市冬季运动管理中心1队",
              "run1": "00:26.41",
              "run2": "00:26.64",
              "time": "00:53.05",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 9,
              "name": "马照然",
              "team": "大连奥萨体育文化有限公司",
              "run1": "00:27.39",
              "run2": "00:26.37",
              "time": "00:53.76",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 10,
              "name": "王景亮",
              "team": "广州热雪奇迹文化体育发展有限公司",
              "run1": "00:28.09",
              "run2": "00:26.88",
              "time": "00:54.97",
              "points": 187
            },
            {
              "rank": 10,
              "bib": 11,
              "name": "邵楷同",
              "team": "广州热雪奇迹",
              "run1": "00:27.58",
              "run2": "00:27.39",
              "time": "00:54.97",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 12,
              "name": "肖瑞林",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2011",
              "run1": "00:28.03",
              "run2": "00:26.96",
              "time": "00:54.99",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 13,
              "name": "张博智",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:27.94",
              "run2": "00:27.31",
              "time": "00:55.25",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 14,
              "name": "蒋骐阳",
              "team": "兰州碧桂园学校",
              "run1": "00:28.35",
              "run2": "00:27.59",
              "time": "00:55.94",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 15,
              "name": "岳皓宇",
              "team": "个人",
              "run1": "00:28.47",
              "run2": "00:27.81",
              "time": "00:56.28",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 16,
              "name": "刘宸宇",
              "team": "福建省冰雪运动协会",
              "run1": "00:28.80",
              "run2": "00:28.36",
              "time": "00:57.16",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 17,
              "name": "龙思祺",
              "team": "广州雪迹文化体育发展有限公司",
              "run1": "00:29.85",
              "run2": "00:29.95",
              "time": "00:59.80",
              "points": 127
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
              "bib": 1,
              "name": "孙若涵",
              "team": "延庆区体育局",
              "run1": "00:26.77",
              "run2": "00:26.58",
              "time": "00:53.35",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "王胜婕",
              "team": "葫小芦（北京）体育有限公司",
              "run1": "00:27.40",
              "run2": "00:27.00",
              "time": "00:54.40",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "周昱含",
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "birthYear": "2009",
              "run1": "00:27.88",
              "run2": "00:27.41",
              "time": "00:55.29",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "邱心悦",
              "team": "葫小芦（北京）体育有限公司",
              "run1": "00:28.12",
              "run2": "00:28.03",
              "time": "00:56.15",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "龚信水",
              "team": "重庆市冬季运动管理中心1队",
              "run1": "00:28.60",
              "run2": "00:28.00",
              "time": "00:56.60",
              "points": 260
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
              "bib": 1,
              "name": "王正政",
              "team": "张家口乔与杨体育服务有限公司",
              "run1": "00:26.15",
              "run2": "00:25.77",
              "time": "00:51.92",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2009",
              "run1": "00:26.09",
              "run2": "00:25.94",
              "time": "00:52.03",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "李彦博",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "run1": "00:25.90",
              "run2": "00:26.33",
              "time": "00:52.23",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "明泳桐",
              "team": "张家口辰鹏体育发展有限公司",
              "run1": "00:26.36",
              "run2": "00:25.95",
              "time": "00:52.31",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "左子正",
              "team": "左子正",
              "run1": "00:25.83",
              "run2": "00:26.56",
              "time": "00:52.39",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "鞠沐辰",
              "team": "济南市皇亭竞技体育学校",
              "run1": "00:26.64",
              "run2": "00:25.84",
              "time": "00:52.48",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 7,
              "name": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "00:26.94",
              "run2": "00:25.62",
              "time": "00:52.56",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "常冠廷",
              "team": "吉林市丰满区滑雪协会",
              "birthYear": "2009",
              "run1": "00:26.56",
              "run2": "00:26.31",
              "time": "00:52.87",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 9,
              "name": "谭皓阳",
              "team": "个人（高峰）",
              "run1": "00:30.37",
              "run2": "00:30.37",
              "time": "01:00.74",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 10,
              "name": "戴文研",
              "team": "个人",
              "run1": "00:48.95",
              "run2": "00:35.29",
              "time": "01:24.24",
              "points": 187
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）",
      "sport": "自由式滑雪坡面障碍技巧",
      "sportType": "freestyle-slopestyle",
      "location": "张家口富龙滑雪场",
      "date": "2026-01-11",
      "endDate": "2026-01-13",
      "status": "completed",
      "events": [
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 20,
              "name": "赵紫琪",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 93.5,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 6,
              "name": "甄芝漫",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 90.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 17,
              "name": "李诗沫",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2015",
              "bestScore": 87.5,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 16,
              "name": "武温暖",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 85,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 37,
              "name": "闫妍",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 77.5,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 19,
              "name": "陈科羽",
              "team": "四川体育职业学院",
              "birthYear": "2016",
              "bestScore": 71.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 32,
              "name": "王玗希",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 69.25,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 18,
              "name": "任可心",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 67.25,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 3,
              "name": "欧子娴",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "bestScore": 65.75,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 7,
              "name": "袁芮涵",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 64.75,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 9,
              "name": "孙焕轲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 56.75,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 8,
              "name": "王淑哲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 45.75,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 5,
              "name": "梁宝云",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2014",
              "bestScore": 43,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 25,
              "name": "周钰芯",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 39.75,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 33,
              "name": "左均怡",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 14.25,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 35,
              "name": "李佳馨",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 11,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 36,
              "name": "孙婉迪",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 10,
              "points": 127
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 19,
              "name": "吴雨桐",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 92.75,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "常嘉林",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2014",
              "bestScore": 88,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 1,
              "name": "张墨凡",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2014",
              "bestScore": 86,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 8,
              "name": "赵铠轩",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 80,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 6,
              "name": "张梓童",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 71.25,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 7,
              "name": "王俊熙",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 68.25,
              "points": 242
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 34,
              "name": "周绮润",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 90.5,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 23,
              "name": "马世馨",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "bestScore": 87,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 10,
              "name": "罗优璇",
              "team": "河南省体育局",
              "birthYear": "2010",
              "bestScore": 80.5,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 13,
              "name": "殷玉宣",
              "team": "河南省体育局",
              "birthYear": "2012",
              "bestScore": 74.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 29,
              "name": "韩萨仁其木格",
              "team": "小崔运动",
              "birthYear": "2013",
              "bestScore": 72.5,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 22,
              "name": "吴思琪",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 69.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 15,
              "name": "王珠彤",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2011",
              "bestScore": 68.25,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 27,
              "name": "杨芷妍",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 63.75,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 24,
              "name": "周紫君",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 62,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 12,
              "name": "陈奕歌",
              "team": "河南省体育局",
              "birthYear": "2012",
              "bestScore": 61,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 4,
              "name": "李明灿",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 56.25,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 21,
              "name": "王珈绮",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 42.5,
              "points": 166
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 14,
              "name": "徐锦添",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 92,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 13,
              "name": "黄志豪",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 90,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 10,
              "name": "王凯文",
              "team": "黑龙江省雪上训练中心",
              "birthYear": "2011",
              "bestScore": 80,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 16,
              "name": "邓明涛",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 79.25,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 9,
              "name": "璩恩慧",
              "team": "河南省体育局",
              "birthYear": "2011",
              "bestScore": 78.25,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 15,
              "name": "王培旭",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 77.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 12,
              "name": "周英杰",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 65.25,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 18,
              "name": "程曦辉",
              "team": "个人",
              "birthYear": "2011",
              "bestScore": 44.5,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 5,
              "name": "程楚阳",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2013",
              "bestScore": 40,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 3,
              "name": "梁跃飞",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2013",
              "bestScore": 38.75,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 17,
              "name": "刘栩辰",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 27.5,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 4,
              "name": "王冬杰",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 21.5,
              "points": 166
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 30,
              "name": "高梓曦",
              "team": "个人",
              "birthYear": "2008",
              "bestScore": 86,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 31,
              "name": "陈露凝",
              "team": "个人",
              "birthYear": "2010",
              "bestScore": 73.75,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 1,
              "name": "齐馨",
              "team": "A+自由式滑雪队",
              "birthYear": "2009",
              "bestScore": 10.5,
              "points": 303
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）",
      "sport": "自由式滑雪大跳台",
      "sportType": "freestyle-bigair",
      "location": "张家口富龙滑雪场",
      "date": "2026-01-11",
      "endDate": "2026-01-14",
      "status": "completed",
      "events": [
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 17,
              "name": "李诗沫",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2015",
              "bestScore": 169,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 19,
              "name": "陈科羽",
              "team": "四川体育职业学院",
              "birthYear": "2016",
              "bestScore": 151.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 32,
              "name": "王玗希",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 147.75,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 6,
              "name": "甄芝漫",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 143,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 7,
              "name": "袁芮涵",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 131,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 8,
              "name": "王淑哲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 126.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 9,
              "name": "孙焕轲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 123.5,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 18,
              "name": "任可心",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 120,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 20,
              "name": "赵紫琪",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 100.75,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 37,
              "name": "闫妍",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 100.5,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 16,
              "name": "武温暖",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 97,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 25,
              "name": "周钰芯",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 93.25,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 5,
              "name": "梁宝云",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2014",
              "bestScore": 76.5,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 3,
              "name": "欧子娴",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "bestScore": 75.75,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 33,
              "name": "左均怡",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 74.5,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 35,
              "name": "李佳馨",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 49.25,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 36,
              "name": "孙婉迪",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 44.25,
              "points": 127
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
              "bib": 1,
              "name": "张墨凡",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2014",
              "bestScore": 184.75,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 2,
              "name": "常嘉林",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2014",
              "bestScore": 169,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 19,
              "name": "吴雨桐",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 157.75,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 6,
              "name": "张梓童",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 124.25,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 7,
              "name": "王俊熙",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 119.75,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 8,
              "name": "赵铠轩",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 113,
              "points": 242
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
              "bib": 23,
              "name": "马世馨",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "bestScore": 191.5,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 10,
              "name": "罗优璇",
              "team": "河南省体育局",
              "birthYear": "2010",
              "bestScore": 176.75,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 22,
              "name": "吴思琪",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 175.25,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 24,
              "name": "周紫君",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 169,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 4,
              "name": "李明灿",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 162.75,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 12,
              "name": "陈奕歌",
              "team": "河南省体育局",
              "birthYear": "2012",
              "bestScore": 157.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 34,
              "name": "周绮润",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 154.5,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 13,
              "name": "殷玉宣",
              "team": "河南省体育局",
              "birthYear": "2012",
              "bestScore": 149.5,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 21,
              "name": "王珈绮",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 147.75,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 27,
              "name": "杨芷妍",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 147.75,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 15,
              "name": "王珠彤",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2011",
              "bestScore": 115.75,
              "points": 176
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
              "bib": 14,
              "name": "徐锦添",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 188.5,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 13,
              "name": "黄志豪",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 187.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 10,
              "name": "王凯文",
              "team": "黑龙江省雪上训练中心",
              "birthYear": "2011",
              "bestScore": 176.5,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 16,
              "name": "邓明涛",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 169.25,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 9,
              "name": "璩恩慧",
              "team": "河南省体育局",
              "birthYear": "2011",
              "bestScore": 162.75,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 15,
              "name": "王培旭",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 157,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 12,
              "name": "周英杰",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 146.5,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 17,
              "name": "刘栩辰",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 92.5,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 5,
              "name": "程楚阳",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2013",
              "bestScore": 84.25,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 3,
              "name": "梁跃飞",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2013",
              "bestScore": 80,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 4,
              "name": "王冬杰",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 67.5,
              "points": 176
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 31,
              "name": "陈露凝",
              "team": "个人",
              "birthYear": "2010",
              "bestScore": 178.25,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 30,
              "name": "高梓曦",
              "team": "个人",
              "birthYear": "2008",
              "bestScore": 111.25,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 1,
              "name": "齐馨",
              "team": "A+自由式滑雪队",
              "birthYear": "2009",
              "bestScore": 1,
              "points": 303
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）",
      "sport": "单板滑雪坡面障碍技巧",
      "sportType": "snowboard-slopestyle",
      "location": "张家口富龙滑雪场",
      "date": "2026-01-08",
      "endDate": "2026-01-10",
      "status": "completed",
      "events": [
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 30,
              "name": "杨舒雅",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 82.33,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 31,
              "name": "陈松妤",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 78.67,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 34,
              "name": "牛安芷芸",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 77.67,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 7,
              "name": "孙嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 73.33,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 18,
              "name": "周子钰",
              "team": "山西省冰雪运动中心",
              "birthYear": "2017",
              "bestScore": 71,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 1,
              "name": "宋佳诺",
              "team": "Criss Crew",
              "birthYear": "2014",
              "bestScore": 68.33,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 19,
              "name": "张诗涵",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2017",
              "bestScore": 62,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 33,
              "name": "周斯言",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 60,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 35,
              "name": "颜嘉懿",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 56.67,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 32,
              "name": "郭芮溪",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 53,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 2,
              "name": "蒋柠萱",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2015",
              "bestScore": 47,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 38,
              "name": "张迦淳",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 41.33,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 36,
              "name": "周若慈",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 39,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 29,
              "name": "马珞恩",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 37.33,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 39,
              "name": "杨茗然",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 34.67,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 3,
              "name": "翟姝涵",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 27.67,
              "points": 134
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 42,
              "name": "刘翰泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 88.33,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 11,
              "name": "王瞾霖",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 76.33,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 53,
              "name": "闵家蕴",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 73,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 23,
              "name": "刘沐泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 71.67,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 38,
              "name": "范天成",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 70.33,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 48,
              "name": "宋知敏",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 69.33,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 12,
              "name": "王祖安",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 68.67,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 8,
              "name": "赵严诺",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 59.33,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 44,
              "name": "方柏尧",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 54,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 1,
              "name": "王睿文",
              "team": "Criss Crew",
              "birthYear": "2015",
              "bestScore": 52,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 34,
              "name": "陈宇垚",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 50.67,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 3,
              "name": "曾云泽",
              "team": "New team",
              "birthYear": "2014",
              "bestScore": 47.33,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 56,
              "name": "刘桐朔",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 44.67,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 52,
              "name": "监柏霖",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 44.33,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 55,
              "name": "王霖逸",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 43.33,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 10,
              "name": "魏子博",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 41.67,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 5,
              "name": "褚天羿",
              "team": "Star单板队",
              "birthYear": "2016",
              "bestScore": 41.33,
              "points": 127
            },
            {
              "rank": 18,
              "bib": 51,
              "name": "蒋桨",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 40.67,
              "points": 121
            },
            {
              "rank": 19,
              "bib": 22,
              "name": "陶志伟",
              "team": "山西省冰雪运动中心",
              "birthYear": "2016",
              "bestScore": 39,
              "points": 115
            },
            {
              "rank": 20,
              "bib": 40,
              "name": "曾星越",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 35.33,
              "points": 110
            },
            {
              "rank": 21,
              "bib": 2,
              "name": "孙翎皓",
              "team": "Criss Crew",
              "birthYear": "2017",
              "bestScore": 33.33,
              "points": 105
            },
            {
              "rank": 22,
              "bib": 7,
              "name": "石昊桐",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 31,
              "points": 100
            },
            {
              "rank": 23,
              "bib": 28,
              "name": "林芮锋",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 25.67,
              "points": 95
            },
            {
              "rank": 24,
              "bib": 46,
              "name": "刘音里",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 21,
              "points": 91
            },
            {
              "rank": 25,
              "bib": 39,
              "name": "马铂淙",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 16.67,
              "points": 87
            },
            {
              "rank": 26,
              "bib": 50,
              "name": "张哲朗",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 14.67,
              "points": 83
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 9,
              "name": "鱼嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 88.33,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 22,
              "name": "张诗蕊",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 85,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 21,
              "name": "曾梓萱",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "bestScore": 80,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 16,
              "name": "张依冉",
              "team": "山西省冰雪运动中心",
              "birthYear": "2011",
              "bestScore": 79,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 20,
              "name": "杜雨欣",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "bestScore": 77.67,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 15,
              "name": "郭婉诗",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 74.67,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 27,
              "name": "贺舒玉",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2011",
              "bestScore": 70,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 17,
              "name": "张潇然",
              "team": "山西省冰雪运动中心",
              "birthYear": "2011",
              "bestScore": 65.67,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 37,
              "name": "刘霓霏",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 63.33,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 14,
              "name": "张淑雅",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 60.33,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 12,
              "name": "张益嘉",
              "team": "河南省体育局",
              "birthYear": "2013",
              "bestScore": 55.33,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 6,
              "name": "周雨辰",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 50,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 4,
              "name": "杨可轩",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2010",
              "bestScore": 47.33,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 5,
              "name": "周雨欣",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 43,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 41,
              "name": "高艺轩",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 40.33,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 8,
              "name": "苏常格",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "bestScore": 38.67,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 25,
              "name": "赖文悦",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 14.33,
              "points": 127
            },
            {
              "rank": 18,
              "bib": 28,
              "name": "王若西",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 13,
              "points": 121
            },
            {
              "rank": 19,
              "bib": 42,
              "name": "王玮怡",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 8.67,
              "points": 115
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 47,
              "name": "谭凯元",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 93.67,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 37,
              "name": "王恒宇",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 89.67,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 13,
              "name": "郭展麟",
              "team": "黑龙江省雪上训练中心",
              "birthYear": "2011",
              "bestScore": 89,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 32,
              "name": "刘子俊",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 87,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 4,
              "name": "王浩臣",
              "team": "Star单板队",
              "birthYear": "2013",
              "bestScore": 84.33,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 33,
              "name": "袁梓程",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 9,
              "name": "孙晨曦",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 71.67,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 45,
              "name": "郭彧铭",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 58.33,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 27,
              "name": "张家睿",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 54.67,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 36,
              "name": "张钊宁",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 52,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 6,
              "name": "高翊博",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 50.67,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 25,
              "name": "梁嘉俊",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2013",
              "bestScore": 9,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 21,
              "name": "梁明峰",
              "team": "山西省冰雪运动中心",
              "birthYear": "2012",
              "bestScore": 6.33,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 54,
              "name": "冯思源",
              "team": "个人",
              "birthYear": "2011",
              "bestScore": 4,
              "points": 149
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 31,
              "name": "李俊辛",
              "team": "四川体育职业学院",
              "birthYear": "2008",
              "bestScore": 94.67,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 30,
              "name": "陈珉在",
              "team": "四川体育职业学院",
              "birthYear": "2009",
              "bestScore": 90.33,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 35,
              "name": "封树渝",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 87.67,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 17,
              "name": "袁嘉伟",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 85,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 18,
              "name": "黄子剑",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 77.67,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 19,
              "name": "倪文凯",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 74.67,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 14,
              "name": "吴海鑫",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 63.33,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 15,
              "name": "何鲲鹏",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 59,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 24,
              "name": "米馥豪",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2009",
              "bestScore": 45.33,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 20,
              "name": "赵开元",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2010",
              "bestScore": 34.33,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 43,
              "name": "杨峻溪",
              "team": "个人",
              "birthYear": "2010",
              "bestScore": 16,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 16,
              "name": "李智贤",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2010",
              "bestScore": 8.33,
              "points": 166
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）",
      "sport": "单板滑雪大跳台",
      "sportType": "snowboard-bigair",
      "location": "张家口富龙滑雪场",
      "date": "2026-01-08",
      "endDate": "2026-01-11",
      "status": "completed",
      "events": [
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 31,
              "name": "陈松妤",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 173,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 30,
              "name": "杨舒雅",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 144.67,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 1,
              "name": "宋佳诺",
              "team": "Criss Crew",
              "birthYear": "2014",
              "bestScore": 120.67,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 35,
              "name": "颜嘉懿",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 116.33,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 7,
              "name": "孙嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 111.66,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 34,
              "name": "牛安芷芸",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 99.33,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 18,
              "name": "周子钰",
              "team": "山西省冰雪运动中心",
              "birthYear": "2017",
              "bestScore": 57.33,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 2,
              "name": "蒋柠萱",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2015",
              "bestScore": 55.67,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 19,
              "name": "张诗涵",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2017",
              "bestScore": 53,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 33,
              "name": "周斯言",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 48,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 36,
              "name": "周若慈",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 45,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 38,
              "name": "张迦淳",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 43,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 3,
              "name": "翟姝涵",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 43,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 32,
              "name": "郭芮溪",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 36.34,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 29,
              "name": "马珞恩",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 27.33,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 39,
              "name": "杨茗然",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 26.33,
              "points": 134
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
              "bib": 42,
              "name": "刘翰泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 147.34,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 38,
              "name": "范天成",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 146.66,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 12,
              "name": "王祖安",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 123,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 3,
              "name": "曾云泽",
              "team": "New team",
              "birthYear": "2014",
              "bestScore": 122.67,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 44,
              "name": "方柏尧",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 112.66,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 10,
              "name": "魏子博",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 101.33,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 51,
              "name": "蒋桨",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 97.34,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 5,
              "name": "褚天羿",
              "team": "Star单板队",
              "birthYear": "2016",
              "bestScore": 94,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 11,
              "name": "王瞾霖",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 89,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 7,
              "name": "石昊桐",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 88,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 52,
              "name": "监柏霖",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 86,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 22,
              "name": "陶志伟",
              "team": "山西省冰雪运动中心",
              "birthYear": "2016",
              "bestScore": 65.67,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 8,
              "name": "赵严诺",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 59.33,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 50,
              "name": "张哲朗",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 53.33,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 40,
              "name": "曾星越",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 52,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 39,
              "name": "马铂淙",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 49,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 56,
              "name": "刘桐朔",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 40.67,
              "points": 127
            },
            {
              "rank": 18,
              "bib": 46,
              "name": "刘音里",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 40.66,
              "points": 121
            },
            {
              "rank": 19,
              "bib": 1,
              "name": "王睿文",
              "team": "Criss Crew",
              "birthYear": "2015",
              "bestScore": 39,
              "points": 115
            },
            {
              "rank": 20,
              "bib": 2,
              "name": "孙翎皓",
              "team": "Criss Crew",
              "birthYear": "2017",
              "bestScore": 38.33,
              "points": 110
            },
            {
              "rank": 21,
              "bib": 34,
              "name": "陈宇垚",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 35.67,
              "points": 105
            },
            {
              "rank": 22,
              "bib": 28,
              "name": "林芮锋",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 21.67,
              "points": 100
            },
            {
              "rank": 23,
              "bib": 23,
              "name": "刘沐泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 18,
              "points": 95
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
              "bib": 9,
              "name": "鱼嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 161.33,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 17,
              "name": "张潇然",
              "team": "山西省冰雪运动中心",
              "birthYear": "2011",
              "bestScore": 148,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 4,
              "name": "杨可轩",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2010",
              "bestScore": 137,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 14,
              "name": "张淑雅",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 120,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 16,
              "name": "张依冉",
              "team": "山西省冰雪运动中心",
              "birthYear": "2011",
              "bestScore": 118,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 15,
              "name": "郭婉诗",
              "team": "山西省冰雪运动中心",
              "birthYear": "2013",
              "bestScore": 116.34,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 37,
              "name": "刘霓霏",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 115.66,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 25,
              "name": "赖文悦",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 111,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 27,
              "name": "贺舒玉",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2011",
              "bestScore": 105.34,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 20,
              "name": "杜雨欣",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "bestScore": 104.67,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 21,
              "name": "曾梓萱",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "bestScore": 97.34,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 12,
              "name": "张益嘉",
              "team": "河南省体育局",
              "birthYear": "2013",
              "bestScore": 82,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 22,
              "name": "张诗蕊",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 63,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 6,
              "name": "周雨辰",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 54.67,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 28,
              "name": "王若西",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 49,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 5,
              "name": "周雨欣",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 31.67,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 8,
              "name": "苏常格",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "bestScore": 1,
              "points": 127
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
              "bib": 37,
              "name": "王恒宇",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 182.67,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 4,
              "name": "王浩臣",
              "team": "Star单板队",
              "birthYear": "2013",
              "bestScore": 168,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 33,
              "name": "袁梓程",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 165.33,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 47,
              "name": "谭凯元",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 162.33,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 9,
              "name": "孙晨曦",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 134,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 27,
              "name": "张家睿",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 120.34,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 25,
              "name": "梁嘉俊",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2013",
              "bestScore": 115.67,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 45,
              "name": "郭彧铭",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 110.33,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 32,
              "name": "刘子俊",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 80,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 6,
              "name": "高翊博",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 64.67,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 36,
              "name": "张钊宁",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 50.67,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 13,
              "name": "郭展麟",
              "team": "黑龙江省雪上训练中心",
              "birthYear": "2011",
              "bestScore": 42.67,
              "points": 166
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
              "bib": 35,
              "name": "封树渝",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 183,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 30,
              "name": "陈珉在",
              "team": "四川体育职业学院",
              "birthYear": "2009",
              "bestScore": 169.34,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 24,
              "name": "米馥豪",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2009",
              "bestScore": 128.67,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 16,
              "name": "李智贤",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2010",
              "bestScore": 128.33,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 15,
              "name": "何鲲鹏",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 97,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 31,
              "name": "李俊辛",
              "team": "四川体育职业学院",
              "birthYear": "2008",
              "bestScore": 95,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 17,
              "name": "袁嘉伟",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 95,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 43,
              "name": "杨峻溪",
              "team": "个人",
              "birthYear": "2010",
              "bestScore": 82.66,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 14,
              "name": "吴海鑫",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 73.33,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 19,
              "name": "倪文凯",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 72.67,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 18,
              "name": "黄子剑",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 49.67,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 20,
              "name": "赵开元",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2010",
              "bestScore": 36,
              "points": 166
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国单板滑雪平行项目U系列比赛（雪如意站）",
      "sport": "单板滑雪平行项目",
      "sportType": "snowboard-parallel",
      "location": "雪如意滑雪场",
      "date": "2025-12-23",
      "endDate": "2025-12-24",
      "status": "completed",
      "events": [
        {
          "discipline": "平行大回转",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 213,
              "name": "李禹潭",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2014",
              "run1": "00:39.02",
              "run2": "00:39.60",
              "time": "01:18.62",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 221,
              "name": "于忱汐",
              "team": "太原市第二少年体育学校",
              "birthYear": "2015",
              "run1": "00:39.75",
              "run2": "00:39.40",
              "time": "01:19.15",
              "diff": "00:00.53",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 214,
              "name": "肖金茂",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "run1": "00:40.35",
              "run2": "00:39.76",
              "time": "01:20.11",
              "diff": "00:01.49",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 204,
              "name": "须星漫",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2016",
              "run1": "00:43.45",
              "run2": "00:37.17",
              "time": "01:20.62",
              "diff": "00:02.00",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 209,
              "name": "古庭钰",
              "team": "中麟体育",
              "birthYear": "2014",
              "run1": "00:41.43",
              "run2": "00:39.29",
              "time": "01:20.72",
              "diff": "00:02.10",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 208,
              "name": "周子翕",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "00:43.78",
              "run2": "00:39.91",
              "time": "01:23.69",
              "diff": "00:05.07",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 218,
              "name": "ALBEESU",
              "team": "张家口市足球和冰雪运动学校",
              "run1": "00:41.77",
              "run2": "00:43.27",
              "time": "01:25.04",
              "diff": "00:06.42",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 201,
              "name": "焦阳云朵",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2014",
              "run1": "00:44.05",
              "run2": "00:41.26",
              "time": "01:25.31",
              "diff": "00:06.69",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 206,
              "name": "李汶瑾",
              "team": "MAYA TEAM",
              "birthYear": "2015",
              "run1": "00:42.24",
              "run2": "00:43.25",
              "time": "01:25.49",
              "diff": "00:06.87",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 223,
              "name": "朱安然",
              "team": "上海雪酷滑雪竞技队",
              "birthYear": "2015",
              "run1": "00:43.75",
              "run2": "00:41.89",
              "time": "01:25.64",
              "diff": "00:07.02",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 211,
              "name": "李宛凝",
              "team": "大连雨彤体育赛事俱乐部",
              "run1": "00:43.15",
              "run2": "00:42.64",
              "time": "01:25.79",
              "diff": "00:07.17",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 220,
              "name": "刘和一",
              "team": "北京天高云淡体育有限公司",
              "birthYear": "2014",
              "run1": "00:43.48",
              "run2": "00:42.69",
              "time": "01:26.17",
              "diff": "00:07.55",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 217,
              "name": "李子纯",
              "team": "个人",
              "birthYear": "2014",
              "run1": "00:43.70",
              "run2": "00:43.84",
              "time": "01:27.54",
              "diff": "00:08.92",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 219,
              "name": "李获稻",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "00:44.54",
              "run2": "00:44.38",
              "time": "01:28.92",
              "diff": "00:10.30",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 222,
              "name": "武子蓉",
              "team": "太原市第二少年体育学校",
              "birthYear": "2014",
              "run1": "00:45.45",
              "run2": "00:44.07",
              "time": "01:29.52",
              "diff": "00:10.90",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 215,
              "name": "张语珊",
              "team": "个人",
              "birthYear": "2014",
              "run1": "00:48.07",
              "run2": "00:44.95",
              "time": "01:33.02",
              "diff": "00:14.40",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 203,
              "name": "李墨涵",
              "team": "中麟体育",
              "birthYear": "2014",
              "run1": "00:46.64",
              "run2": "00:47.93",
              "time": "01:34.57",
              "diff": "00:15.95",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 210,
              "name": "李雨萱",
              "team": "个人",
              "birthYear": "2014",
              "run1": "00:51.48",
              "run2": "00:44.26",
              "time": "01:35.74",
              "diff": "00:17.12",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 212,
              "name": "马音霓",
              "team": "爱上雪体育产业发展（北京）有限公司",
              "birthYear": "2016",
              "run1": "00:48.42",
              "run2": "00:48.99",
              "time": "01:37.41",
              "diff": "00:18.79",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 207,
              "name": "张兆檬",
              "team": "King Pro Team",
              "birthYear": "2016",
              "run1": "00:51.15",
              "run2": "00:52.54",
              "time": "01:43.69",
              "diff": "00:25.07",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 205,
              "name": "高怡雯",
              "team": "北京天高云淡体育有限公司",
              "birthYear": "2017",
              "run1": "00:58.80",
              "run2": "00:58.37",
              "time": "01:57.17",
              "diff": "00:38.55",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 216,
              "name": "周芸溪",
              "team": "MAYA TEAM",
              "birthYear": "2017",
              "run1": "01:02.29",
              "run2": "01:02.24",
              "time": "02:04.53",
              "diff": "00:45.91",
              "points": 100
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 268,
              "name": "王一臣",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "run1": "00:36.99",
              "run2": "00:35.85",
              "time": "01:12.84",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 276,
              "name": "周翎",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2014",
              "run1": "00:36.11",
              "run2": "00:37.38",
              "time": "01:13.49",
              "diff": "00:00.65",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 258,
              "name": "韩赫洺",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "run1": "00:38.06",
              "run2": "00:37.50",
              "time": "01:15.56",
              "diff": "00:02.72",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 273,
              "name": "李承桓",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2015",
              "run1": "00:38.19",
              "run2": "00:37.45",
              "time": "01:15.64",
              "diff": "00:02.80",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 286,
              "name": "陈鼎钧",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2014",
              "run1": "00:37.81",
              "run2": "00:38.29",
              "time": "01:16.10",
              "diff": "00:03.26",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 284,
              "name": "聂榕辰",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2016",
              "run1": "00:37.93",
              "run2": "00:38.73",
              "time": "01:16.66",
              "diff": "00:03.82",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 264,
              "name": "罗晓野",
              "team": "个人",
              "birthYear": "2014",
              "run1": "00:39.02",
              "run2": "00:38.05",
              "time": "01:17.07",
              "diff": "00:04.23",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 260,
              "name": "薛景尧",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2014",
              "run1": "00:40.13",
              "run2": "00:38.91",
              "time": "01:19.04",
              "diff": "00:06.20",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 282,
              "name": "马昊文",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "run1": "00:41.53",
              "run2": "00:37.67",
              "time": "01:19.20",
              "diff": "00:06.36",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 252,
              "name": "周天朗",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2014",
              "run1": "00:39.94",
              "run2": "00:39.29",
              "time": "01:19.23",
              "diff": "00:06.39",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 259,
              "name": "马昊迪",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "run1": "00:39.53",
              "run2": "00:39.81",
              "time": "01:19.34",
              "diff": "00:06.50",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 277,
              "name": "蒋文栋",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "run1": "00:40.29",
              "run2": "00:39.64",
              "time": "01:19.93",
              "diff": "00:07.09",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 253,
              "name": "高宇承",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2015",
              "run1": "00:40.88",
              "run2": "00:41.00",
              "time": "01:21.88",
              "diff": "00:09.04",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 266,
              "name": "刘昱辰",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "run1": "00:45.33",
              "run2": "00:36.77",
              "time": "01:22.10",
              "diff": "00:09.26",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 272,
              "name": "张朔源",
              "team": "张家口市足球和冰雪运动学校",
              "birthYear": "2014",
              "run1": "00:38.63",
              "run2": "00:44.32",
              "time": "01:22.95",
              "diff": "00:10.11",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 287,
              "name": "张睦然",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "run1": "00:41.69",
              "run2": "00:41.57",
              "time": "01:23.26",
              "diff": "00:10.42",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 261,
              "name": "白雨奇",
              "team": "大连雨彤体育赛事俱乐部",
              "birthYear": "2014",
              "run1": "00:41.71",
              "run2": "00:41.66",
              "time": "01:23.37",
              "diff": "00:10.53",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 255,
              "name": "王子溪",
              "team": "KingProTeam",
              "birthYear": "2014",
              "run1": "00:42.83",
              "run2": "00:41.99",
              "time": "01:24.82",
              "diff": "00:11.98",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 285,
              "name": "黄益航",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "run1": "00:42.77",
              "run2": "00:42.44",
              "time": "01:25.21",
              "diff": "00:12.37",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 254,
              "name": "夏誉领",
              "team": "上海雪酷滑雪竞技队",
              "birthYear": "2016",
              "run1": "00:45.28",
              "run2": "00:40.39",
              "time": "01:25.67",
              "diff": "00:12.83",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 267,
              "name": "周豫",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2015",
              "run1": "00:43.92",
              "run2": "00:42.50",
              "time": "01:26.42",
              "diff": "00:13.58",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 269,
              "name": "张柏轩",
              "team": "MAYA TEAM",
              "birthYear": "2015",
              "run1": "00:44.37",
              "run2": "00:42.65",
              "time": "01:27.02",
              "diff": "00:14.18",
              "points": 100
            },
            {
              "rank": 23,
              "bib": 280,
              "name": "朱朗灿",
              "team": "个人",
              "birthYear": "2015",
              "run1": "00:46.97",
              "run2": "00:40.08",
              "time": "01:27.05",
              "diff": "00:14.21",
              "points": 95
            },
            {
              "rank": 24,
              "bib": 288,
              "name": "程子航",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2014",
              "run1": "00:44.18",
              "run2": "00:43.73",
              "time": "01:27.91",
              "diff": "00:15.07",
              "points": 91
            },
            {
              "rank": 25,
              "bib": 251,
              "name": "聂铭熙",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "run1": "00:44.36",
              "run2": "00:43.58",
              "time": "01:27.94",
              "diff": "00:15.10",
              "points": 87
            },
            {
              "rank": 26,
              "bib": 283,
              "name": "金子彦",
              "team": "个人",
              "birthYear": "2015",
              "run1": "00:44.24",
              "run2": "00:43.83",
              "time": "01:28.07",
              "diff": "00:15.23",
              "points": 83
            },
            {
              "rank": 27,
              "bib": 289,
              "name": "陈鑫艺",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "run1": "00:47.13",
              "run2": "00:41.36",
              "time": "01:28.49",
              "diff": "00:15.65",
              "points": 79
            },
            {
              "rank": 28,
              "bib": 270,
              "name": "孙奥荣",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "run1": "00:45.27",
              "run2": "00:43.67",
              "time": "01:28.94",
              "diff": "00:16.10",
              "points": 75
            },
            {
              "rank": 29,
              "bib": 265,
              "name": "赵梓聿",
              "team": "MAYA TEAM",
              "birthYear": "2014",
              "run1": "00:44.39",
              "run2": "00:44.77",
              "time": "01:29.16",
              "diff": "00:16.32",
              "points": 71
            },
            {
              "rank": 30,
              "bib": 278,
              "name": "闫慕垚",
              "team": "大连雨彤体育赛事俱乐部",
              "birthYear": "2015",
              "run1": "00:46.73",
              "run2": "00:49.13",
              "time": "01:35.86",
              "diff": "00:23.02",
              "points": 67
            },
            {
              "rank": 31,
              "bib": 281,
              "name": "杨滨睿",
              "team": "MAYA TEAM",
              "birthYear": "2016",
              "run1": "00:48.60",
              "run2": "00:47.39",
              "time": "01:35.99",
              "diff": "00:23.15",
              "points": 63
            },
            {
              "rank": 32,
              "bib": 256,
              "name": "景子融",
              "team": "中麟体育",
              "birthYear": "2016",
              "run1": "00:44.01",
              "run2": "00:55.37",
              "time": "01:39.38",
              "diff": "00:26.54",
              "points": 59
            },
            {
              "rank": 33,
              "bib": 263,
              "name": "祖与辰",
              "team": "秦皇岛狂雪滑雪俱乐部",
              "birthYear": "2014",
              "run1": "00:49.97",
              "run2": "00:50.60",
              "time": "01:40.57",
              "diff": "00:27.73",
              "points": 55
            },
            {
              "rank": 34,
              "bib": 279,
              "name": "吕毅",
              "team": "太原市第二少年体育学校",
              "birthYear": "2016",
              "run1": "00:53.35",
              "run2": "00:52.37",
              "time": "01:45.72",
              "diff": "00:32.88",
              "points": 51
            },
            {
              "rank": 35,
              "bib": 257,
              "name": "王博晨昊",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2014",
              "run1": "01:07.37",
              "run2": "00:42.75",
              "time": "01:50.12",
              "diff": "00:37.28",
              "points": 47
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 108,
              "name": "邱嘉晴",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2012",
              "run1": "00:33.62",
              "run2": "00:32.91",
              "time": "01:06.53",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 118,
              "name": "沈凌羽",
              "team": "MAYA TEAM",
              "birthYear": "2012",
              "run1": "00:34.92",
              "run2": "00:34.13",
              "time": "01:09.05",
              "diff": "00:02.52",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 113,
              "name": "韦苗茵",
              "team": "大连雨彤体育赛事俱乐部",
              "birthYear": "2011",
              "run1": "00:35.79",
              "run2": "00:34.84",
              "time": "01:10.63",
              "diff": "00:04.10",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 128,
              "name": "刘妍梦",
              "team": "中麟体育",
              "birthYear": "2011",
              "run1": "00:35.83",
              "run2": "00:35.16",
              "time": "01:10.99",
              "diff": "00:04.46",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 120,
              "name": "赵南茜",
              "team": "太原市第二少年体育学校",
              "birthYear": "2011",
              "run1": "00:35.83",
              "run2": "00:35.43",
              "time": "01:11.26",
              "diff": "00:04.73",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 103,
              "name": "刘沛怡",
              "team": "MAYA TEAM",
              "birthYear": "2011",
              "run1": "00:35.90",
              "run2": "00:35.97",
              "time": "01:11.87",
              "diff": "00:05.34",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 101,
              "name": "邰淼",
              "team": "内蒙古嘉灏体育",
              "birthYear": "2012",
              "run1": "00:36.61",
              "run2": "00:35.28",
              "time": "01:11.89",
              "diff": "00:05.36",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 127,
              "name": "张诺笒",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2012",
              "run1": "00:35.81",
              "run2": "00:36.17",
              "time": "01:11.98",
              "diff": "00:05.45",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 116,
              "name": "高宇宣",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2012",
              "run1": "00:36.31",
              "run2": "00:35.87",
              "time": "01:12.18",
              "diff": "00:05.65",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 104,
              "name": "汪昱诺",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2013",
              "run1": "00:36.85",
              "run2": "00:35.56",
              "time": "01:12.41",
              "diff": "00:05.88",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 125,
              "name": "杨卓尔",
              "team": "中麟体育",
              "birthYear": "2010",
              "run1": "00:36.44",
              "run2": "00:36.08",
              "time": "01:12.52",
              "diff": "00:05.99",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 105,
              "name": "黄卫瑄",
              "team": "吉林省阔展体育服务有限公司",
              "birthYear": "2011",
              "run1": "00:36.30",
              "run2": "00:36.47",
              "time": "01:12.77",
              "diff": "00:06.24",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 129,
              "name": "赵浛西",
              "team": "爱上雪体育产业发展（北京）有限公司",
              "birthYear": "2012",
              "run1": "00:36.51",
              "run2": "00:36.27",
              "time": "01:12.78",
              "diff": "00:06.25",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 106,
              "name": "邹齐",
              "team": "个人",
              "birthYear": "2012",
              "run1": "00:36.69",
              "run2": "00:36.47",
              "time": "01:13.16",
              "diff": "00:06.63",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 119,
              "name": "刘姝廷",
              "team": "中麟体育",
              "birthYear": "2011",
              "run1": "00:36.27",
              "run2": "00:38.67",
              "time": "01:14.94",
              "diff": "00:08.41",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 117,
              "name": "周焕熙",
              "team": "爱上雪体育产业发展（北京）有限公司",
              "birthYear": "2013",
              "run1": "00:37.57",
              "run2": "00:37.41",
              "time": "01:14.98",
              "diff": "00:08.45",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 102,
              "name": "闫艺宸",
              "team": "个人",
              "birthYear": "2010",
              "run1": "00:38.01",
              "run2": "00:38.25",
              "time": "01:16.26",
              "diff": "00:09.73",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 111,
              "name": "徐紫馨",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2012",
              "run1": "00:34.38",
              "run2": "00:42.65",
              "time": "01:17.03",
              "diff": "00:10.50",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 131,
              "name": "王艺潼",
              "team": "个人",
              "birthYear": "2010",
              "run1": "00:41.07",
              "run2": "00:38.79",
              "time": "01:19.86",
              "diff": "00:13.33",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 122,
              "name": "徐艺玮",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "run1": "00:40.23",
              "run2": "00:40.84",
              "time": "01:21.07",
              "diff": "00:14.54",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 114,
              "name": "史怀竺",
              "team": "大连雨彤体育赛事俱乐部",
              "birthYear": "2013",
              "run1": "00:41.07",
              "run2": "00:40.31",
              "time": "01:21.38",
              "diff": "00:14.85",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 130,
              "name": "叶丽扎·别克苏力坦",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2010",
              "run1": "00:46.64",
              "run2": "00:39.90",
              "time": "01:26.54",
              "diff": "00:20.01",
              "points": 100
            },
            {
              "rank": 23,
              "bib": 107,
              "name": "刘于靖璇",
              "team": "丝绸之路青少年俱乐部",
              "birthYear": "2010",
              "run1": "00:38.15",
              "run2": "00:52.95",
              "time": "01:31.10",
              "diff": "00:24.57",
              "points": 95
            },
            {
              "rank": 24,
              "bib": 124,
              "name": "王羽佳",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2010",
              "run1": "00:44.87",
              "run2": "00:46.66",
              "time": "01:31.53",
              "diff": "00:25.00",
              "points": 91
            },
            {
              "rank": 25,
              "bib": 115,
              "name": "黎若水",
              "team": "个人",
              "birthYear": "2010",
              "run1": "00:38.45",
              "run2": "00:53.24",
              "time": "01:31.69",
              "diff": "00:25.16",
              "points": 87
            },
            {
              "rank": 26,
              "bib": 121,
              "name": "刘芊焱",
              "team": "个人",
              "birthYear": "2012",
              "run1": "00:47.47",
              "run2": "00:46.30",
              "time": "01:33.77",
              "diff": "00:27.24",
              "points": 83
            },
            {
              "rank": 27,
              "bib": 112,
              "name": "吴宛霖",
              "team": "北京天高云淡体育有限公司",
              "birthYear": "2012",
              "run1": "00:49.39",
              "run2": "00:47.59",
              "time": "01:36.98",
              "diff": "00:30.45",
              "points": 79
            },
            {
              "rank": 28,
              "bib": 123,
              "name": "赵天冉",
              "team": "King Pro Team",
              "birthYear": "2012",
              "run1": "00:46.42",
              "run2": "00:52.13",
              "time": "01:38.55",
              "diff": "00:32.02",
              "points": 75
            },
            {
              "rank": 29,
              "bib": 132,
              "name": "周琪",
              "team": "锐冠青少年竞技滑雪队",
              "birthYear": "2013",
              "run1": "00:50.57",
              "run2": "00:49.36",
              "time": "01:39.93",
              "diff": "00:33.40",
              "points": 71
            },
            {
              "rank": 30,
              "bib": 134,
              "name": "亢正熙",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "run1": "01:01.82",
              "run2": "00:38.89",
              "time": "01:40.71",
              "diff": "00:34.18",
              "points": 67
            },
            {
              "rank": 31,
              "bib": 109,
              "name": "王奕棽",
              "team": "速森体育",
              "birthYear": "2013",
              "run1": "00:51.57",
              "run2": "00:52.17",
              "time": "01:43.74",
              "diff": "00:37.21",
              "points": 63
            },
            {
              "rank": 32,
              "bib": 110,
              "name": "陈卓",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2012",
              "run1": "01:08.02",
              "run2": "00:38.60",
              "time": "01:46.62",
              "diff": "00:40.09",
              "points": 59
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 190,
              "name": "高佳钇",
              "team": "速森体育",
              "birthYear": "2011",
              "run1": "00:33.02",
              "run2": "00:32.85",
              "time": "01:05.87",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 164,
              "name": "陈清桦",
              "team": "MAYA TEAM",
              "birthYear": "2012",
              "run1": "00:33.79",
              "run2": "00:33.65",
              "time": "01:07.44",
              "diff": "00:01.57",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 154,
              "name": "张雨曈",
              "team": "MAYA TEAM",
              "birthYear": "2012",
              "run1": "00:34.11",
              "run2": "00:34.19",
              "time": "01:08.30",
              "diff": "00:02.43",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 187,
              "name": "贾子一南",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2011",
              "run1": "00:33.57",
              "run2": "00:34.91",
              "time": "01:08.48",
              "diff": "00:02.61",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 178,
              "name": "李天圆",
              "team": "MAYA TEAM",
              "birthYear": "2011",
              "run1": "00:33.45",
              "run2": "00:35.10",
              "time": "01:08.55",
              "diff": "00:02.68",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 186,
              "name": "王子兮",
              "team": "四川体育职业学院",
              "birthYear": "2012",
              "run1": "00:34.15",
              "run2": "00:34.81",
              "time": "01:08.96",
              "diff": "00:03.09",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 180,
              "name": "阿琪勒图",
              "team": "内蒙古嘉灏体育",
              "birthYear": "2010",
              "run1": "00:35.14",
              "run2": "00:34.35",
              "time": "01:09.49",
              "diff": "00:03.62",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 195,
              "name": "叶庆安",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2010",
              "run1": "00:34.74",
              "run2": "00:35.41",
              "time": "01:10.15",
              "diff": "00:04.28",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 184,
              "name": "高琢皓",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2012",
              "run1": "00:35.20",
              "run2": "00:35.15",
              "time": "01:10.35",
              "diff": "00:04.48",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 158,
              "name": "马赛",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "run1": "00:35.73",
              "run2": "00:34.75",
              "time": "01:10.48",
              "diff": "00:04.61",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 181,
              "name": "徐承昊",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2012",
              "run1": "00:36.27",
              "run2": "00:34.34",
              "time": "01:10.61",
              "diff": "00:04.74",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 176,
              "name": "刘宸卓",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2012",
              "run1": "00:34.86",
              "run2": "00:36.09",
              "time": "01:10.95",
              "diff": "00:05.08",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 177,
              "name": "吉淏辰",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2012",
              "run1": "00:35.82",
              "run2": "00:35.62",
              "time": "01:11.44",
              "diff": "00:05.57",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 194,
              "name": "邢子瀚",
              "team": "纳西亚",
              "birthYear": "2012",
              "run1": "00:35.05",
              "run2": "00:36.57",
              "time": "01:11.62",
              "diff": "00:05.75",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 153,
              "name": "于谨赫",
              "team": "速森体育",
              "birthYear": "2010",
              "run1": "00:35.62",
              "run2": "00:36.22",
              "time": "01:11.84",
              "diff": "00:05.97",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 161,
              "name": "刘哲鸣",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2013",
              "run1": "00:36.20",
              "run2": "00:35.88",
              "time": "01:12.08",
              "diff": "00:06.21",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 155,
              "name": "孙屹卓",
              "team": "MAYA TEAM",
              "birthYear": "2011",
              "run1": "00:35.62",
              "run2": "00:37.36",
              "time": "01:12.98",
              "diff": "00:07.11",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 173,
              "name": "嘎日玛盖",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2012",
              "run1": "00:34.92",
              "run2": "00:38.22",
              "time": "01:13.14",
              "diff": "00:07.27",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 160,
              "name": "崔承泽",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2011",
              "run1": "00:37.66",
              "run2": "00:35.66",
              "time": "01:13.32",
              "diff": "00:07.45",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 174,
              "name": "王子嘉",
              "team": "内蒙古嘉灏体育",
              "birthYear": "2011",
              "run1": "00:36.28",
              "run2": "00:37.10",
              "time": "01:13.38",
              "diff": "00:07.51",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 172,
              "name": "江显晨",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2012",
              "run1": "00:37.19",
              "run2": "00:37.07",
              "time": "01:14.26",
              "diff": "00:08.39",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 179,
              "name": "孟裕皓",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2012",
              "run1": "00:34.91",
              "run2": "00:39.78",
              "time": "01:14.69",
              "diff": "00:08.82",
              "points": 100
            },
            {
              "rank": 23,
              "bib": 188,
              "name": "李柏翔",
              "team": "MAYA TEAM",
              "birthYear": "2010",
              "run1": "00:42.73",
              "run2": "00:33.01",
              "time": "01:15.74",
              "diff": "00:09.87",
              "points": 95
            },
            {
              "rank": 24,
              "bib": 166,
              "name": "陶勃遇",
              "team": "锐冠青少年竞技滑雪队",
              "birthYear": "2013",
              "run1": "00:37.62",
              "run2": "00:38.32",
              "time": "01:15.94",
              "diff": "00:10.07",
              "points": 91
            },
            {
              "rank": 25,
              "bib": 152,
              "name": "仲作成",
              "team": "MAYA TEAM",
              "birthYear": "2013",
              "run1": "00:38.33",
              "run2": "00:38.26",
              "time": "01:16.59",
              "diff": "00:10.72",
              "points": 87
            },
            {
              "rank": 26,
              "bib": 165,
              "name": "郭天泽",
              "team": "MAYA TEAM",
              "birthYear": "2012",
              "run1": "00:35.65",
              "run2": "00:41.33",
              "time": "01:16.98",
              "diff": "00:11.11",
              "points": 83
            },
            {
              "rank": 27,
              "bib": 185,
              "name": "袁子宸",
              "team": "重庆巴蜀科学城中学校",
              "birthYear": "2013",
              "run1": "00:39.75",
              "run2": "00:37.87",
              "time": "01:17.62",
              "diff": "00:11.75",
              "points": 79
            },
            {
              "rank": 28,
              "bib": 157,
              "name": "张亚琨",
              "team": "大连雨彤体育赛事俱乐部",
              "birthYear": "2012",
              "run1": "00:36.02",
              "run2": "00:42.02",
              "time": "01:18.04",
              "diff": "00:12.17",
              "points": 75
            },
            {
              "rank": 29,
              "bib": 191,
              "name": "贾博翔",
              "team": "锐冠青少年竞技滑雪队",
              "birthYear": "2011",
              "run1": "00:38.89",
              "run2": "00:39.68",
              "time": "01:18.57",
              "diff": "00:12.70",
              "points": 71
            },
            {
              "rank": 30,
              "bib": 170,
              "name": "井诚",
              "team": "中麟体育",
              "birthYear": "2012",
              "run1": "00:44.51",
              "run2": "00:34.67",
              "time": "01:19.18",
              "diff": "00:13.31",
              "points": 67
            },
            {
              "rank": 31,
              "bib": 192,
              "name": "洪戬",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2011",
              "run1": "00:41.48",
              "run2": "00:38.09",
              "time": "01:19.57",
              "diff": "00:13.70",
              "points": 63
            },
            {
              "rank": 32,
              "bib": 162,
              "name": "张晧泽",
              "team": "太原市第二少年体育学校",
              "run1": "00:41.28",
              "run2": "00:38.71",
              "time": "01:19.99",
              "diff": "00:14.12",
              "points": 59
            },
            {
              "rank": 33,
              "bib": 175,
              "name": "郭芮名",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "run1": "00:39.13",
              "run2": "00:42.83",
              "time": "01:21.96",
              "diff": "00:16.09",
              "points": 55
            },
            {
              "rank": 34,
              "bib": 168,
              "name": "李钊羽",
              "team": "个人",
              "birthYear": "2012",
              "run1": "00:38.29",
              "run2": "00:43.84",
              "time": "01:22.13",
              "diff": "00:16.26",
              "points": 51
            },
            {
              "rank": 35,
              "bib": 197,
              "name": "谢书敖",
              "team": "零站单板滑雪俱乐部",
              "birthYear": "2010",
              "run1": "00:42.90",
              "run2": "00:40.33",
              "time": "01:23.23",
              "diff": "00:17.36",
              "points": 47
            },
            {
              "rank": 36,
              "bib": 156,
              "name": "王浩然",
              "team": "中麟体育",
              "birthYear": "2010",
              "run1": "00:46.53",
              "run2": "00:37.08",
              "time": "01:23.61",
              "diff": "00:17.74",
              "points": 43
            },
            {
              "rank": 37,
              "bib": 167,
              "name": "陈浩铭",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "run1": "00:37.80",
              "run2": "00:47.36",
              "time": "01:25.16",
              "diff": "00:19.29",
              "points": 39
            },
            {
              "rank": 38,
              "bib": 171,
              "name": "徐悦宾",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2013",
              "run1": "00:39.83",
              "run2": "00:46.30",
              "time": "01:26.13",
              "diff": "00:20.26",
              "points": 35
            },
            {
              "rank": 39,
              "bib": 196,
              "name": "暴城睿",
              "team": "辽宁极限体育",
              "birthYear": "2012",
              "run1": "00:35.03",
              "run2": "00:52.27",
              "time": "01:27.30",
              "diff": "00:21.43",
              "points": 31
            },
            {
              "rank": 40,
              "bib": 151,
              "name": "靳淏宬",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2013",
              "run1": "00:45.20",
              "run2": "00:43.78",
              "time": "01:28.98",
              "diff": "00:23.11",
              "points": 27
            },
            {
              "rank": 41,
              "bib": 169,
              "name": "熊品超",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2011",
              "run1": "00:41.38",
              "run2": "00:48.00",
              "time": "01:29.38",
              "diff": "00:23.51",
              "points": 24
            },
            {
              "rank": 42,
              "bib": 163,
              "name": "孙裕恒",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2013",
              "run1": "00:44.47",
              "run2": "00:48.97",
              "time": "01:33.44",
              "diff": "00:27.57",
              "points": 21
            },
            {
              "rank": 43,
              "bib": 193,
              "name": "陈羿同",
              "team": "零站体育",
              "birthYear": "2010",
              "run1": "00:45.61",
              "run2": "00:50.03",
              "time": "01:35.64",
              "diff": "00:29.77",
              "points": 18
            },
            {
              "rank": 44,
              "bib": 182,
              "name": "陈宥廷",
              "team": "上海雪酷滑雪竞技队",
              "birthYear": "2013",
              "run1": "00:43.71",
              "run2": "01:17.19",
              "time": "02:00.90",
              "diff": "00:55.03",
              "points": 15
            },
            {
              "rank": 45,
              "bib": 189,
              "name": "杨昊泽",
              "team": "速森体育",
              "birthYear": "2012",
              "run1": "02:02.49",
              "run2": "00:40.89",
              "time": "02:43.38",
              "diff": "01:37.51",
              "points": 12
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 9,
              "name": "李妙涵",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2009",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 10,
              "name": "臧怡然",
              "team": "个人",
              "birthYear": "2008",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 5,
              "name": "丁小苏",
              "team": "MAYA TEAM",
              "birthYear": "2009",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 7,
              "name": "王子怡",
              "team": "个人",
              "birthYear": "2008",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 19,
              "name": "张芊凝",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2009",
              "run1": "00:39.86",
              "run2": "00:40.30",
              "time": "01:20.16",
              "diff": "00:03.21",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 14,
              "name": "李雨濛",
              "team": "大连雨彤体育赛事俱乐部",
              "birthYear": "2010",
              "run1": "00:40.63",
              "run2": "00:39.59",
              "time": "01:20.22",
              "diff": "00:03.27",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 17,
              "name": "张允童",
              "team": "个人",
              "birthYear": "2008",
              "run1": "00:40.81",
              "run2": "00:40.13",
              "time": "01:20.94",
              "diff": "00:03.99",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 3,
              "name": "袁丽文",
              "team": "上海市静安区滑雪协会",
              "birthYear": "2009",
              "run1": "00:42.14",
              "run2": "00:41.69",
              "time": "01:23.83",
              "diff": "00:06.88",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 2,
              "name": "王婧霏",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2008",
              "run1": "00:41.77",
              "run2": "00:40.61",
              "time": "01:22.38",
              "diff": "00:05.43",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 12,
              "name": "邵菲梵",
              "team": "北京天高云淡体育文化有限公司",
              "run1": "00:42.17",
              "run2": "00:41.93",
              "time": "01:24.10",
              "diff": "00:07.15",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 8,
              "name": "贾釉茜",
              "team": "ACE竞技滑雪队",
              "birthYear": "2009",
              "run1": "00:43.51",
              "run2": "00:45.51",
              "time": "01:29.02",
              "diff": "00:12.07",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 18,
              "name": "叶香菲",
              "team": "大连雨彤体育赛事俱乐部",
              "birthYear": "2009",
              "run1": "00:43.43",
              "run2": "00:46.16",
              "time": "01:29.59",
              "diff": "00:12.64",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 13,
              "name": "刘墨晗",
              "team": "北京虎村竞技体育有限公司",
              "birthYear": "2009",
              "run1": "00:46.49",
              "run2": "00:45.66",
              "time": "01:32.15",
              "diff": "00:15.20",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 6,
              "name": "朱珈仪",
              "team": "吉林市冬季运动管理中心",
              "birthYear": "2008",
              "run1": "00:47.55",
              "run2": "00:45.25",
              "time": "01:32.80",
              "diff": "00:15.85",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 11,
              "name": "韩非桐",
              "team": "速森体育",
              "birthYear": "2007",
              "run1": "00:47.58",
              "run2": "00:46.84",
              "time": "01:34.42",
              "diff": "00:17.47",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 21,
              "name": "杨笑语",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2009",
              "run1": "00:45.02",
              "run2": "00:50.06",
              "time": "01:35.08",
              "diff": "00:18.13",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 20,
              "name": "房洢伊",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2010",
              "run1": "00:42.12",
              "run2": "00:59.65",
              "time": "01:41.77",
              "diff": "00:24.82",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 1,
              "name": "白默函",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2008",
              "run1": "00:50.79",
              "run2": "00:51.04",
              "time": "01:41.83",
              "diff": "00:24.88",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 16,
              "name": "刘怡廷",
              "team": "张家口市足球和冰雪运动学校",
              "birthYear": "2009",
              "run1": "00:51.58",
              "run2": "00:51.69",
              "time": "01:43.27",
              "diff": "00:26.32",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 15,
              "name": "范芮希",
              "team": "个人",
              "birthYear": "2009",
              "run1": "01:08.61",
              "run2": "00:42.19",
              "time": "01:50.80",
              "diff": "00:33.85",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 4,
              "name": "杜美佳妮",
              "team": "北京佩士体育有限公司",
              "birthYear": "2008",
              "run1": "01:13.03",
              "run2": "00:55.18",
              "time": "02:08.21",
              "diff": "00:51.26",
              "points": 105
            }
          ]
        },
        {
          "discipline": "平行大回转",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 53,
              "name": "窦羿",
              "team": "MAYA TEAM",
              "birthYear": "2007",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 54,
              "name": "张鑫泽",
              "team": "速森体育",
              "birthYear": "2009",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 66,
              "name": "李嘉祺",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2010",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 56,
              "name": "马凯涛",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2009",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 68,
              "name": "尚久智",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2009",
              "run1": "00:35.14",
              "run2": "00:34.75",
              "time": "01:09.89",
              "diff": "00:01.37",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 51,
              "name": "吴凯",
              "team": "中麟体育",
              "birthYear": "2008",
              "run1": "00:36.68",
              "run2": "00:35.31",
              "time": "01:11.99",
              "diff": "00:03.47",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 69,
              "name": "杨武胜俊",
              "team": "四川体育职业学院",
              "birthYear": "2008",
              "run1": "00:37.08",
              "run2": "00:36.59",
              "time": "01:13.67",
              "diff": "00:05.15",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 59,
              "name": "付壡喆",
              "team": "四川体育职业学院",
              "birthYear": "2009",
              "run1": "00:37.31",
              "run2": "00:36.65",
              "time": "01:13.96",
              "diff": "00:05.44",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 55,
              "name": "廉钰洁",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2008",
              "run1": "00:35.69",
              "run2": "00:37.38",
              "time": "01:13.07",
              "diff": "00:04.55",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 65,
              "name": "苗誉镨",
              "team": "速森体育",
              "birthYear": "2007",
              "run1": "00:36.46",
              "run2": "00:37.19",
              "time": "01:13.65",
              "diff": "00:05.13",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 62,
              "name": "王嘉崎",
              "team": "新疆维吾尔自治区冬季运动训练中心",
              "birthYear": "2008",
              "run1": "00:37.62",
              "run2": "00:37.15",
              "time": "01:14.77",
              "diff": "00:06.25",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 70,
              "name": "杨伯伦",
              "team": "个人",
              "birthYear": "2010",
              "run1": "00:39.39",
              "run2": "00:38.53",
              "time": "01:17.92",
              "diff": "00:09.40",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 67,
              "name": "常一鸣",
              "team": "锐冠青少年竞技滑雪队",
              "birthYear": "2009",
              "run1": "00:38.73",
              "run2": "00:39.55",
              "time": "01:18.28",
              "diff": "00:09.76",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 71,
              "name": "杨一丁",
              "team": "北京市朝阳区第三少儿业余体校",
              "birthYear": "2009",
              "run1": "00:38.80",
              "run2": "00:40.26",
              "time": "01:19.06",
              "diff": "00:10.54",
              "points": 149
            },
            {
              "rank": 15,
              "bib": 76,
              "name": "郑研伟",
              "team": "个人",
              "birthYear": "2007",
              "run1": "00:37.89",
              "run2": "00:41.49",
              "time": "01:19.38",
              "diff": "00:10.86",
              "points": 141
            },
            {
              "rank": 16,
              "bib": 74,
              "name": "樊冠序",
              "team": "ACE竞技滑雪队",
              "birthYear": "2008",
              "run1": "00:40.47",
              "run2": "00:39.89",
              "time": "01:20.36",
              "diff": "00:11.84",
              "points": 134
            },
            {
              "rank": 17,
              "bib": 57,
              "name": "曲星铭",
              "team": "个人",
              "birthYear": "2008",
              "run1": "00:40.97",
              "run2": "00:40.01",
              "time": "01:20.98",
              "diff": "00:12.46",
              "points": 127
            },
            {
              "rank": 18,
              "bib": 64,
              "name": "付若洵",
              "team": "KingProTeam",
              "birthYear": "2009",
              "run1": "00:38.44",
              "run2": "00:43.07",
              "time": "01:21.51",
              "diff": "00:12.99",
              "points": 121
            },
            {
              "rank": 19,
              "bib": 52,
              "name": "吴保江",
              "team": "零站单板滑雪俱乐部",
              "birthYear": "2007",
              "run1": "00:39.75",
              "run2": "00:42.68",
              "time": "01:22.43",
              "diff": "00:13.91",
              "points": 115
            },
            {
              "rank": 20,
              "bib": 73,
              "name": "辛博",
              "team": "重庆埃尔派体育文化传播有限公司",
              "birthYear": "2009",
              "run1": "00:39.53",
              "run2": "00:45.84",
              "time": "01:25.37",
              "diff": "00:16.85",
              "points": 110
            },
            {
              "rank": 21,
              "bib": 60,
              "name": "黄铸轩",
              "team": "个人",
              "birthYear": "2008",
              "run1": "00:43.33",
              "run2": "00:43.70",
              "time": "01:27.03",
              "diff": "00:18.51",
              "points": 105
            },
            {
              "rank": 22,
              "bib": 58,
              "name": "唐鸿博",
              "team": "KingProTeam",
              "birthYear": "2009",
              "run1": "00:41.75",
              "run2": "00:48.08",
              "time": "01:29.83",
              "diff": "00:21.31",
              "points": 100
            },
            {
              "rank": 23,
              "bib": 63,
              "name": "杜鑫",
              "team": "张家口市足球和冰雪运动学校",
              "birthYear": "2009",
              "run1": "00:46.35",
              "run2": "00:47.63",
              "time": "01:33.98",
              "diff": "00:25.46",
              "points": 95
            },
            {
              "rank": 24,
              "bib": 75,
              "name": "刘馨泽",
              "team": "吉林峰尚青教体育文化产业有限公司",
              "birthYear": "2012",
              "run1": "00:49.46",
              "run2": "00:46.86",
              "time": "01:36.32",
              "diff": "00:27.80",
              "points": 91
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（成都站）",
      "sport": "自由式滑雪坡面障碍技巧",
      "sportType": "freestyle-slopestyle",
      "location": "成都热雪奇迹室内滑雪场",
      "date": "2025-11-25",
      "endDate": "2025-11-28",
      "status": "completed",
      "events": [
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 66,
              "name": "赵紫琪",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 81.6,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 60,
              "name": "王淑哲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 79,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 64,
              "name": "任可心",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 76.2,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 62,
              "name": "武温暖",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 72,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 63,
              "name": "李诗沫",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2015",
              "bestScore": 67.4,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 53,
              "name": "孙焕轶",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 65,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 55,
              "name": "闫妍",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 63.4,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 58,
              "name": "甄芝漫",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 62.8,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 59,
              "name": "韩小贝",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 58.4,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 61,
              "name": "袁芮涵",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 51.8,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 54,
              "name": "孙焕轲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 48.4,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 51,
              "name": "欧子娴",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "bestScore": 46,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 65,
              "name": "陈科羽",
              "team": "四川体育职业学院",
              "birthYear": "2016",
              "bestScore": 41.8,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 57,
              "name": "万洛辰",
              "team": "个人",
              "birthYear": "2017",
              "bestScore": 32.8,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 52,
              "name": "孙婉迪",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 28.6,
              "points": 141
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 52,
              "name": "常嘉林",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2014",
              "bestScore": 86.4,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 51,
              "name": "张墨凡",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2014",
              "bestScore": 81.4,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 56,
              "name": "赵铠轩",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 74.8,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 58,
              "name": "张梓童",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 65.2,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 57,
              "name": "王俊熙",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 62.4,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 53,
              "name": "崔芃森",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 56.6,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 59,
              "name": "卢彦词",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 50.4,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 55,
              "name": "赵子钰",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 41.6,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 54,
              "name": "李雪聪",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 39.4,
              "points": 199
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 68,
              "name": "周绮润",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 95,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 74,
              "name": "王珈绮",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 90.4,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 73,
              "name": "叶欣悦",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 81,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 71,
              "name": "王珠彤",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2011",
              "bestScore": 79.8,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 70,
              "name": "平梓涵",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 78.6,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 69,
              "name": "李明灿",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 75.8,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 72,
              "name": "杨芷妍",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 64.8,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 67,
              "name": "李雅馨",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2011",
              "bestScore": 60.4,
              "points": 212
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 70,
              "name": "周英杰",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 87.8,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 67,
              "name": "张乔淳佑",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2012",
              "bestScore": 84,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 64,
              "name": "欧阳聚勇",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2010",
              "bestScore": 81.8,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 60,
              "name": "王翊宁",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2012",
              "bestScore": 72,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 68,
              "name": "宇威琦",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 67.8,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 71,
              "name": "刘栩辰",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 42.4,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 66,
              "name": "李霁开",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2011",
              "bestScore": 20.8,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 63,
              "name": "王冬杰",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 20.4,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 65,
              "name": "程楚阳",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2013",
              "bestScore": 19,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 62,
              "name": "梁跃飞",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2013",
              "bestScore": 17.4,
              "points": 187
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 76,
              "name": "夏可馨",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2009",
              "bestScore": 88.2,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 77,
              "name": "余思源",
              "team": "四川体育职业学院",
              "birthYear": "2009",
              "bestScore": 65.2,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 75,
              "name": "高梓曦",
              "team": "个人",
              "birthYear": "2008",
              "bestScore": 60.4,
              "points": 303
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 75,
              "name": "田嘉译",
              "team": "沈阳体育学院",
              "birthYear": "2009",
              "bestScore": 96,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 73,
              "name": "孙金隆",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2007",
              "bestScore": 92.6,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 74,
              "name": "张天迈",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2009",
              "bestScore": 70.6,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 72,
              "name": "王晨",
              "team": "个人",
              "birthYear": "2008",
              "bestScore": 33,
              "points": 280
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国自由式滑雪大跳台U系列比赛（成都站）",
      "sport": "自由式滑雪大跳台",
      "sportType": "freestyle-bigair",
      "location": "成都热雪奇迹室内滑雪场",
      "date": "2025-11-25",
      "endDate": "2025-11-28",
      "status": "completed",
      "events": [
        {
          "discipline": "大跳台",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 66,
              "name": "赵紫琪",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 170,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 60,
              "name": "王淑哲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 149.6,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 62,
              "name": "武温暖",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2014",
              "bestScore": 137.4,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 63,
              "name": "李诗沫",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2015",
              "bestScore": 134.2,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 55,
              "name": "闫妍",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 123,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 53,
              "name": "孙焕轶",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 120.6,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 64,
              "name": "任可心",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 113.8,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 54,
              "name": "孙焕轲",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 94.6,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 59,
              "name": "韩小贝",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 87.8,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 51,
              "name": "欧子娴",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "bestScore": 79.4,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 65,
              "name": "陈科羽",
              "team": "四川体育职业学院",
              "birthYear": "2016",
              "bestScore": 75.8,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 61,
              "name": "袁芮涵",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 73.8,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 58,
              "name": "甄芝漫",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 62.6,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 52,
              "name": "孙婉迪",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 30.6,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 56,
              "name": "李佳馨",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 26.4,
              "points": 141
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
              "bib": 52,
              "name": "常嘉林",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2014",
              "bestScore": 167,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 56,
              "name": "赵铠轩",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 163.2,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 51,
              "name": "张墨凡",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2014",
              "bestScore": 125,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 58,
              "name": "张梓童",
              "team": "河南省体育局",
              "birthYear": "2016",
              "bestScore": 124.2,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 53,
              "name": "崔芃森",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 108.2,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 57,
              "name": "王俊熙",
              "team": "河南省体育局",
              "birthYear": "2015",
              "bestScore": 100.6,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 55,
              "name": "赵子钰",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 80.6,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 59,
              "name": "卢彦词",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 69.8,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 54,
              "name": "李雪聪",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 57.2,
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
              "bib": 70,
              "name": "平梓涵",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 171.2,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 73,
              "name": "叶欣悦",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 154.8,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 74,
              "name": "王珈绮",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 150,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 72,
              "name": "杨芷妍",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 144.6,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 69,
              "name": "李明灿",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 125.8,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 67,
              "name": "李雅馨",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2011",
              "bestScore": 116,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 68,
              "name": "周绮润",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 90.2,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 71,
              "name": "王珠彤",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2011",
              "bestScore": 80,
              "points": 212
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
              "bib": 70,
              "name": "周英杰",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 155.6,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 64,
              "name": "欧阳聚勇",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2010",
              "bestScore": 147,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 67,
              "name": "张乔淳佑",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2012",
              "bestScore": 146.8,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 60,
              "name": "王翊宁",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2012",
              "bestScore": 116,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 68,
              "name": "宇威琦",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 108.8,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 71,
              "name": "刘栩辰",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 88,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 62,
              "name": "梁跃飞",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2013",
              "bestScore": 80.4,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 63,
              "name": "王冬杰",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 53.6,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 65,
              "name": "程楚阳",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2013",
              "bestScore": 52.2,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 69,
              "name": "徐思远",
              "team": "沈阳体育学院",
              "birthYear": "2013",
              "bestScore": 46.2,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 66,
              "name": "李霁开",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2011",
              "bestScore": 33.8,
              "points": 176
            }
          ]
        },
        {
          "discipline": "大跳台",
          "ageGroup": "U18",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 76,
              "name": "夏可馨",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2009",
              "bestScore": 147.6,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 77,
              "name": "余思源",
              "team": "四川体育职业学院",
              "birthYear": "2009",
              "bestScore": 145.8,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 75,
              "name": "高梓曦",
              "team": "个人",
              "birthYear": "2008",
              "bestScore": 102.2,
              "points": 303
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
              "bib": 75,
              "name": "田嘉译",
              "team": "沈阳体育学院",
              "birthYear": "2009",
              "bestScore": 176.4,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 74,
              "name": "张天迈",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2009",
              "bestScore": 158.2,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 73,
              "name": "孙金隆",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2007",
              "bestScore": 121,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 72,
              "name": "王晨",
              "team": "个人",
              "birthYear": "2008",
              "bestScore": 68.2,
              "points": 280
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
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 13,
              "name": "李若瑜",
              "team": "中关村一小",
              "birthYear": "2014",
              "run1": "35.56",
              "run2": "35.40",
              "time": "1:10.96",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 43,
              "name": "罗暄晴",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "36.12",
              "run2": "36.89",
              "time": "1:13.01",
              "diff": "2.05",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 51,
              "name": "吴凌萱",
              "team": "华发冰雪热雪奇迹",
              "birthYear": "2015",
              "run1": "38.06",
              "run2": "39.94",
              "time": "1:18.00",
              "diff": "7.04",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 45,
              "name": "蔡沛琳",
              "team": "成都热雪奇迹",
              "birthYear": "2017",
              "run1": "39.03",
              "run2": "39.44",
              "time": "1:18.47",
              "diff": "7.51",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 12,
              "name": "李昊汐",
              "team": "西安热雪奇迹",
              "birthYear": "2016",
              "run1": "39.72",
              "run2": "39.15",
              "time": "1:18.87",
              "diff": "7.91",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 52,
              "name": "吴玟颐",
              "team": "华发冰雪热雪奇迹",
              "birthYear": "2016",
              "run1": "40.10",
              "run2": "39.71",
              "time": "1:19.81",
              "diff": "8.85",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 48,
              "name": "卢彦伊",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "46.10",
              "run2": "41.73",
              "time": "1:27.83",
              "diff": "16.87",
              "points": 226
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
              "birthYear": "2015",
              "run1": "30.80",
              "run2": "31.05",
              "time": "1:01.85",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 46,
              "name": "竹禹丞",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "33.93",
              "run2": "33.82",
              "time": "1:07.75",
              "diff": "5.90",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 27,
              "name": "苏一豪",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2014",
              "run1": "34.56",
              "run2": "33.24",
              "time": "1:07.80",
              "diff": "5.95",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 49,
              "name": "于镇赫",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "run1": "40.62",
              "run2": "37.16",
              "time": "1:17.78",
              "diff": "15.93",
              "points": 280
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
              "birthYear": "2011",
              "run1": "31.05",
              "run2": "30.75",
              "time": "1:01.80",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 18,
              "name": "杨子骞",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "run1": "31.23",
              "run2": "30.92",
              "time": "1:02.15",
              "diff": "0.35",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 21,
              "name": "罗梓瑜",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "run1": "35.31",
              "run2": "34.83",
              "time": "1:10.14",
              "diff": "8.34",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 19,
              "name": "张雅琪",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "run1": "39.42",
              "run2": "36.93",
              "time": "1:16.35",
              "diff": "14.55",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 55,
              "name": "陈奕霏",
              "team": "个人",
              "birthYear": "2010",
              "run1": "41.97",
              "run2": "43.99",
              "time": "1:25.96",
              "diff": "24.16",
              "points": 260
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
              "birthYear": "2011",
              "run1": "31.47",
              "run2": "31.39",
              "time": "1:02.86",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 16,
              "name": "刘彦钧凯",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "run1": "31.78",
              "run2": "32.19",
              "time": "1:03.97",
              "diff": "1.11",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 53,
              "name": "黄子歌",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "run1": "32.89",
              "run2": "31.82",
              "time": "1:04.71",
              "diff": "1.85",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 24,
              "name": "王梓丞",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "run1": "34.42",
              "run2": "34.13",
              "time": "1:08.55",
              "diff": "5.69",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 17,
              "name": "吕浩源",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2012",
              "run1": "35.24",
              "run2": "35.46",
              "time": "1:10.70",
              "diff": "7.84",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 22,
              "name": "林朗",
              "team": "哈尔滨热雪奇迹",
              "birthYear": "2010",
              "run1": "37.09",
              "run2": "36.82",
              "time": "1:13.91",
              "diff": "11.05",
              "points": 242
            }
          ]
        },
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
              "birthYear": "2009",
              "run1": "29.56",
              "run2": "29.88",
              "time": "59.44",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 7,
              "name": "杨蓝戈",
              "team": "个人",
              "birthYear": "2010",
              "run1": "30.70",
              "run2": "30.74",
              "time": "1:01.44",
              "diff": "2.00",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 34,
              "name": "庞予涵",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "30.95",
              "run2": "31.51",
              "time": "1:02.46",
              "diff": "3.02",
              "points": 303
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
              "birthYear": "2010",
              "run1": "27.82",
              "run2": "28.28",
              "time": "56.10",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 33,
              "name": "艾思铭",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2009",
              "run1": "28.53",
              "run2": "28.41",
              "time": "56.94",
              "diff": "0.84",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 6,
              "name": "高琦硕",
              "team": "高峰",
              "run1": "28.67",
              "run2": "28.43",
              "time": "57.10",
              "diff": "1.00",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 15,
              "name": "郭一远",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2008",
              "run1": "28.61",
              "run2": "28.65",
              "time": "57.26",
              "diff": "1.16",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 31,
              "name": "王润钰",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2009",
              "run1": "28.64",
              "run2": "28.67",
              "time": "57.31",
              "diff": "1.21",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 10,
              "name": "左子正",
              "team": "左子正",
              "run1": "28.70",
              "run2": "28.63",
              "time": "57.33",
              "diff": "1.23",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 3,
              "name": "常冠廷",
              "team": "吉林市丰满区滑雪协会",
              "birthYear": "2009",
              "run1": "29.16",
              "run2": "28.60",
              "time": "57.76",
              "diff": "1.66",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 1,
              "name": "王冠霖",
              "team": "吉林坤伦滑雪俱乐部",
              "birthYear": "2009",
              "run1": "29.04",
              "run2": "29.55",
              "time": "58.59",
              "diff": "2.49",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 14,
              "name": "王宏轩",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2008",
              "run1": "30.32",
              "run2": "30.41",
              "time": "1:00.73",
              "diff": "4.63",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 2,
              "name": "马健剀",
              "team": "吉林坤伦滑雪俱乐部",
              "birthYear": "2008",
              "run1": "33.39",
              "run2": "31.61",
              "time": "1:05.00",
              "diff": "8.90",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 9,
              "name": "李正翰",
              "team": "个人",
              "birthYear": "2009",
              "points": 176
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
              "birthYear": "2014",
              "run1": "24.52",
              "run2": "24.75",
              "time": "49.27",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 45,
              "name": "蔡沛琳",
              "team": "成都热雪奇迹",
              "birthYear": "2017",
              "run1": "25.36",
              "run2": "25.12",
              "time": "50.48",
              "diff": "1.21",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 51,
              "name": "吴凌萱",
              "team": "华发冰雪热雪奇迹",
              "birthYear": "2015",
              "run1": "26.08",
              "run2": "25.73",
              "time": "51.81",
              "diff": "2.54",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 12,
              "name": "李昊汐",
              "team": "西安热雪奇迹",
              "birthYear": "2016",
              "run1": "26.06",
              "run2": "26.02",
              "time": "52.08",
              "diff": "2.81",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 43,
              "name": "罗暄晴",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "25.93",
              "run2": "26.35",
              "time": "52.28",
              "diff": "3.01",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 52,
              "name": "吴玟颐",
              "team": "华发冰雪热雪奇迹",
              "birthYear": "2016",
              "run1": "26.93",
              "run2": "26.27",
              "time": "53.20",
              "diff": "3.93",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 48,
              "name": "卢彦伊",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "27.24",
              "run2": "26.65",
              "time": "53.89",
              "diff": "4.62",
              "points": 226
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
              "birthYear": "2015",
              "run1": "23.03",
              "run2": "23.07",
              "time": "46.10",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 27,
              "name": "苏一豪",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2014",
              "run1": "24.47",
              "run2": "23.77",
              "time": "48.24",
              "diff": "2.14",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 26,
              "name": "郑捷铭",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2014",
              "run1": "24.52",
              "run2": "24.45",
              "time": "48.97",
              "diff": "2.87",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 46,
              "name": "竹禹丞",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "24.66",
              "run2": "24.63",
              "time": "49.29",
              "diff": "3.19",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 5,
              "name": "杨宗葆",
              "team": "个人",
              "birthYear": "2014",
              "run1": "24.70",
              "run2": "24.69",
              "time": "49.39",
              "diff": "3.29",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 49,
              "name": "于镇赫",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "run1": "24.75",
              "run2": "24.87",
              "time": "49.62",
              "diff": "3.52",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 40,
              "name": "冯一晗",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "run1": "27.30",
              "run2": "27.25",
              "time": "54.55",
              "diff": "8.45",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 54,
              "name": "顾羽宸",
              "team": "成都热雪奇迹",
              "birthYear": "2016",
              "run1": "29.62",
              "run2": "29.94",
              "time": "59.56",
              "diff": "13.46",
              "points": 212
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
              "birthYear": "2011",
              "run1": "23.26",
              "run2": "23.02",
              "time": "46.28",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 21,
              "name": "罗梓瑜",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "run1": "23.66",
              "run2": "23.53",
              "time": "47.19",
              "diff": "0.91",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 18,
              "name": "杨子骞",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "run1": "23.92",
              "run2": "23.48",
              "time": "47.40",
              "diff": "1.12",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 41,
              "name": "叶涵汐",
              "team": "成都热雪奇迹",
              "birthYear": "2013",
              "run1": "25.98",
              "run2": "25.93",
              "time": "51.91",
              "diff": "5.63",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 19,
              "name": "张雅琪",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "run1": "27.34",
              "run2": "25.56",
              "time": "52.90",
              "diff": "6.62",
              "points": 260
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
              "birthYear": "2013",
              "run1": "22.81",
              "run2": "22.48",
              "time": "45.29",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 20,
              "name": "张芝豪",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "run1": "22.57",
              "run2": "22.83",
              "time": "45.40",
              "diff": "0.11",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 16,
              "name": "刘彦钧凯",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "run1": "22.92",
              "run2": "23.35",
              "time": "46.27",
              "diff": "0.98",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 23,
              "name": "肖瑞林",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2011",
              "run1": "23.22",
              "run2": "23.18",
              "time": "46.40",
              "diff": "1.11",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 17,
              "name": "吕浩源",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2012",
              "run1": "23.59",
              "run2": "23.39",
              "time": "46.98",
              "diff": "1.69",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 22,
              "name": "林朗",
              "team": "哈尔滨热雪奇迹",
              "birthYear": "2010",
              "run1": "23.64",
              "run2": "23.53",
              "time": "47.17",
              "diff": "1.88",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 24,
              "name": "王梓丞",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "run1": "23.79",
              "run2": "24.38",
              "time": "48.17",
              "diff": "2.88",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 47,
              "name": "肖辰俊熙",
              "team": "成都热雪奇迹",
              "birthYear": "2013",
              "run1": "25.36",
              "run2": "24.99",
              "time": "50.35",
              "diff": "5.06",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 44,
              "name": "何心远",
              "team": "成都热雪奇迹",
              "birthYear": "2011",
              "run1": "29.21",
              "run2": "27.45",
              "time": "56.66",
              "diff": "11.37",
              "points": 199
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
              "birthYear": "2009",
              "run1": "21.90",
              "run2": "21.95",
              "time": "43.85",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 34,
              "name": "庞予涵",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "22.46",
              "run2": "22.12",
              "time": "44.58",
              "diff": "0.73",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 7,
              "name": "杨蓝戈",
              "team": "个人",
              "birthYear": "2010",
              "run1": "22.43",
              "run2": "22.45",
              "time": "44.88",
              "diff": "1.03",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 4,
              "name": "周昱含",
              "team": "沈阳王伟滑雪管理咨询服务有限公司",
              "birthYear": "2009",
              "run1": "22.87",
              "run2": "22.79",
              "time": "45.66",
              "diff": "1.81",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 50,
              "name": "杨睿怡",
              "team": "华发冰雪热雪奇迹",
              "birthYear": "2010",
              "run1": "23.54",
              "run2": "23.81",
              "time": "47.35",
              "diff": "3.50",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 35,
              "name": "刘子歌",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "25.22",
              "run2": "24.57",
              "time": "49.79",
              "diff": "5.94",
              "points": 242
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
              "birthYear": "2009",
              "run1": "20.73",
              "run2": "20.90",
              "time": "41.63",
              "diff": "0.00",
              "points": 360
            },
            {
              "rank": 2,
              "bib": 6,
              "name": "高琦硕",
              "team": "高峰",
              "run1": "21.20",
              "run2": "20.92",
              "time": "42.12",
              "diff": "0.49",
              "points": 329
            },
            {
              "rank": 3,
              "bib": 15,
              "name": "郭一远",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2008",
              "run1": "21.42",
              "run2": "20.90",
              "time": "42.32",
              "diff": "0.69",
              "points": 303
            },
            {
              "rank": 4,
              "bib": 29,
              "name": "王阳明",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "21.40",
              "run2": "21.07",
              "time": "42.47",
              "diff": "0.84",
              "points": 280
            },
            {
              "rank": 5,
              "bib": 38,
              "name": "李彦博",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "run1": "21.37",
              "run2": "21.16",
              "time": "42.53",
              "diff": "0.90",
              "points": 260
            },
            {
              "rank": 6,
              "bib": 33,
              "name": "艾思铭",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2009",
              "run1": "21.41",
              "run2": "21.18",
              "time": "42.59",
              "diff": "0.96",
              "points": 242
            },
            {
              "rank": 7,
              "bib": 10,
              "name": "左子正",
              "team": "左子正",
              "run1": "21.30",
              "run2": "21.38",
              "time": "42.68",
              "diff": "1.05",
              "points": 226
            },
            {
              "rank": 8,
              "bib": 3,
              "name": "常冠廷",
              "team": "吉林市丰满区滑雪协会",
              "birthYear": "2009",
              "run1": "21.32",
              "run2": "21.50",
              "time": "42.82",
              "diff": "1.19",
              "points": 212
            },
            {
              "rank": 9,
              "bib": 8,
              "name": "李京和",
              "team": "个人",
              "birthYear": "2009",
              "run1": "21.68",
              "run2": "21.30",
              "time": "42.98",
              "diff": "1.35",
              "points": 199
            },
            {
              "rank": 10,
              "bib": 30,
              "name": "熊泽瑞",
              "team": "张家口乔与杨体育服务有限公司",
              "birthYear": "2010",
              "run1": "21.94",
              "run2": "21.35",
              "time": "43.29",
              "diff": "1.66",
              "points": 187
            },
            {
              "rank": 11,
              "bib": 14,
              "name": "王宏轩",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2008",
              "points": 176
            },
            {
              "rank": 12,
              "bib": 1,
              "name": "王冠霖",
              "team": "吉林坤伦滑雪俱乐部",
              "birthYear": "2009",
              "points": 166
            },
            {
              "rank": 13,
              "bib": 2,
              "name": "马健剀",
              "team": "吉林坤伦滑雪俱乐部",
              "birthYear": "2008",
              "points": 157
            },
            {
              "rank": 14,
              "bib": 9,
              "name": "李正翰",
              "team": "个人",
              "birthYear": "2009",
              "points": 149
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（成都站）",
      "sport": "单板滑雪坡面障碍技巧",
      "sportType": "snowboard-slopestyle",
      "location": "成都热雪奇迹室内滑雪场",
      "date": "2025-11-22",
      "endDate": "2025-11-24",
      "status": "completed",
      "events": [
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 11,
              "name": "牛安芷芸",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 83.75,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 4,
              "name": "孙嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2015",
              "bestScore": 80.75,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 2,
              "name": "翟姝涵",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 65.75,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 13,
              "name": "张诗涵",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2017",
              "bestScore": 59.25,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 3,
              "name": "周斯言",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 45.75,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 6,
              "name": "杨茗然",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 41,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 1,
              "name": "蒋柠萱",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2015",
              "bestScore": 37.5,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 20,
              "name": "姚予希",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "bestScore": 32,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 7,
              "name": "冷昕莲",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 12.25,
              "points": 199
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U11",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 18,
              "name": "刘翰泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 90.75,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 24,
              "name": "王祖安",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 86.5,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 3,
              "name": "刘沐泽",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 85,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 26,
              "name": "陈宇垚",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 76.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 2,
              "name": "范天成",
              "team": "个人",
              "birthYear": "2015",
              "bestScore": 74.25,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 23,
              "name": "魏子博",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 73,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 25,
              "name": "王曌霖",
              "team": "河南省体育局",
              "birthYear": "2014",
              "bestScore": 67.25,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 20,
              "name": "林芮锋",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 51.75,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 9,
              "name": "赵严诺",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 47.5,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 32,
              "name": "曾星越",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 38.25,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 39,
              "name": "宁浩然",
              "team": "成都热雪奇迹",
              "birthYear": "2015",
              "bestScore": 29.75,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 38,
              "name": "马泰铭",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "bestScore": 26.25,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 5,
              "name": "石昊桐",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2017",
              "bestScore": 22.5,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 41,
              "name": "刘子逸",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 22.25,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 40,
              "name": "陈奎亦",
              "team": "四川体育职业学院",
              "birthYear": "2015",
              "bestScore": 22,
              "points": 141
            },
            {
              "rank": 16,
              "bib": 36,
              "name": "朱秋霖",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 17.5,
              "points": 134
            },
            {
              "rank": 17,
              "bib": 6,
              "name": "程锦辰",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 16.5,
              "points": 127
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "女子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 8,
              "name": "鱼嘉怡",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 82.75,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 15,
              "name": "赖文悦",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 80,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 14,
              "name": "叶欣瑞",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 76,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 9,
              "name": "贺舒玉",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2011",
              "bestScore": 61.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 12,
              "name": "高艺轩",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 48.75,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 18,
              "name": "杨可轩",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2010",
              "bestScore": 46.75,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 17,
              "name": "周雨辰",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 44.5,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 16,
              "name": "周雨欣",
              "team": "广西射击射箭运动发展中心",
              "birthYear": "2012",
              "bestScore": 41,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 5,
              "name": "苏常格",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2013",
              "bestScore": 23.5,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 10,
              "name": "王若西",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 20.5,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 19,
              "name": "闫梓左",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 7.25,
              "points": 176
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U15",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 27,
              "name": "袁梓程",
              "team": "四川体育职业学院",
              "birthYear": "2011",
              "bestScore": 88.25,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 1,
              "name": "王恒宇",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 81,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 35,
              "name": "谭凯元",
              "team": "个人",
              "birthYear": "2012",
              "bestScore": 68.5,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 30,
              "name": "郭彧铭",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 51.5,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 22,
              "name": "梁嘉俊",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2013",
              "bestScore": 46.75,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 19,
              "name": "张家睿",
              "team": "四川体育职业学院",
              "birthYear": "2013",
              "bestScore": 45.5,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 4,
              "name": "高翊博",
              "team": "北京市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 39.25,
              "points": 226
            },
            {
              "rank": 8,
              "bib": 7,
              "name": "麦冠航",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2010",
              "bestScore": 33,
              "points": 212
            },
            {
              "rank": 9,
              "bib": 16,
              "name": "张钊宁",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 29.5,
              "points": 199
            },
            {
              "rank": 10,
              "bib": 15,
              "name": "于瀚",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2012",
              "bestScore": 27.75,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 37,
              "name": "邓与骜",
              "team": "成都热雪奇迹",
              "birthYear": "2013",
              "bestScore": 24.5,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 29,
              "name": "刘子俊",
              "team": "四川体育职业学院",
              "birthYear": "2010",
              "bestScore": 17.5,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 14,
              "name": "罗知腾",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2012",
              "bestScore": 15.75,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 33,
              "name": "刘名豪",
              "team": "个人",
              "birthYear": "2013",
              "bestScore": 5,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 8,
              "name": "王天磊",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2011",
              "bestScore": 2.75,
              "points": 141
            }
          ]
        },
        {
          "discipline": "坡面障碍技巧",
          "ageGroup": "U18",
          "gender": "男子组",
          "athletes": [
            {
              "rank": 1,
              "bib": 28,
              "name": "李俊辛",
              "team": "四川体育职业学院",
              "birthYear": "2008",
              "bestScore": 90,
              "points": 360
            },
            {
              "rank": 2,
              "bib": 13,
              "name": "封树渝",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 76.25,
              "points": 329
            },
            {
              "rank": 3,
              "bib": 21,
              "name": "米馥豪",
              "team": "石家庄市冰雪与足球运动中心",
              "birthYear": "2009",
              "bestScore": 71.25,
              "points": 303
            },
            {
              "rank": 4,
              "bib": 11,
              "name": "黄子剑",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2008",
              "bestScore": 43.75,
              "points": 280
            },
            {
              "rank": 5,
              "bib": 10,
              "name": "罗皓桉",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2007",
              "bestScore": 39.75,
              "points": 260
            },
            {
              "rank": 6,
              "bib": 12,
              "name": "倪文凯",
              "team": "湖北省武术和冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 37.5,
              "points": 242
            },
            {
              "rank": 7,
              "bib": 17,
              "name": "雷涵文",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 35.25,
              "points": 226
            }
          ]
        }
      ]
    },
    {
      "competition": "2025-2026赛季全国单板滑雪大跳台U系列比赛（成都站）",
      "sport": "单板滑雪大跳台",
      "sportType": "snowboard-bigair",
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
              "team": "个人",
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
              "team": "个人",
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
            },
            {
              "rank": 11,
              "bib": 32,
              "name": "曾星越",
              "team": "个人",
              "birthYear": "2016",
              "bestScore": 63,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 38,
              "name": "马泰铭",
              "team": "成都热雪奇迹",
              "birthYear": "2014",
              "bestScore": 53.4,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 6,
              "name": "程锦辰",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2014",
              "bestScore": 25.6,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 36,
              "name": "朱秋霖",
              "team": "个人",
              "birthYear": "2014",
              "bestScore": 23.6,
              "points": 149
            },
            {
              "rank": 15,
              "bib": 20,
              "name": "林芮锋",
              "team": "四川体育职业学院",
              "birthYear": "2014",
              "bestScore": 19.6,
              "points": 141
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
              "team": "重庆市冬季运动管理中心",
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
              "team": "重庆市冬季运动管理中心",
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
              "team": "个人",
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
              "team": "个人",
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
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2012",
              "bestScore": 73,
              "points": 187
            },
            {
              "rank": 11,
              "bib": 37,
              "name": "邓与骜",
              "team": "成都热雪奇迹",
              "birthYear": "2013",
              "bestScore": 60.8,
              "points": 176
            },
            {
              "rank": 12,
              "bib": 14,
              "name": "罗知腾",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2012",
              "bestScore": 60.2,
              "points": 166
            },
            {
              "rank": 13,
              "bib": 16,
              "name": "张钊宁",
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2013",
              "bestScore": 42,
              "points": 157
            },
            {
              "rank": 14,
              "bib": 8,
              "name": "王天磊",
              "team": "河北省体育局冬季运动中心",
              "birthYear": "2011",
              "bestScore": 1,
              "points": 149
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
              "team": "重庆市冬季运动管理中心",
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
              "team": "重庆市冬季运动管理中心",
              "birthYear": "2009",
              "bestScore": 40.6,
              "points": 226
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
  'snowboard-bigair': latestResults.competitions.filter(c => c.sportType === 'snowboard-bigair'),
  'freestyle-slopestyle': latestResults.competitions.filter(c => c.sportType === 'freestyle-slopestyle'),
  'freestyle-bigair': latestResults.competitions.filter(c => c.sportType === 'freestyle-bigair'),
  'snowboard-parallel': latestResults.competitions.filter(c => c.sportType === 'snowboard-parallel')
};
