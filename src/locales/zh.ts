// 中文语言包
export const zh = {
  // 通用
  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功',
    cancel: '取消',
    confirm: '确认',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    search: '搜索',
    filter: '筛选',
    export: '导出',
    import: '导入',
    back: '返回',
    next: '下一步',
    previous: '上一步',
    submit: '提交',
    reset: '重置',
    home: '首页',
    language: '语言',
    login: '登录',
    logout: '退出登录',
    register: '注册',
    profile: '个人设置'
  },

  // 导航
  navigation: {
    title: '中国滑雪积分系统',
    titleShort: 'CSPS',
    disciplines: '项目',
    points: '积分',
    events: '赛事',
    my: '我的',
    docs: '知识库',
    about: '关于',
    
    // 子菜单
    submenus: {
      // 滑雪项目
      alpine: '高山滑雪',
      snowboardSlopestyle: '单板坡面/大跳台', 
      snowboardParallel: '单板平行',
      freeskiSlopestyle: '自由式坡面/大跳台',
      
      // 积分中心
      myPoints: '我的积分',
      pointsQuery: '积分查询',
      pointsCalculator: '积分计算器',
      pointsRankings: '积分排行榜',
      pointsTrends: '积分趋势分析',
      
      // 赛事
      eventsSchedule: '赛事日程',
      eventsRegister: '在线报名',
      eventsList: '比赛列表',
      eventsResults: '成绩查询',
      eventsStats: '数据统计',
      
      // 我的
      personalCenter: '个人中心',
      myRegistrations: '我的报名',
      athleteProfile: '运动员档案',
      resultsHistory: '成绩历史',
      
      // 知识库
      pointsRules: '积分规则文档',
      competitionRules: '竞赛技术规则',
      venueStandards: '场地技术标准',
      fisRules: 'FIS国际规则',
      userGuide: '平台使用指南'
    }
  },

  // 面包屑导航
  breadcrumb: {
    home: '首页',
    disciplines: '滑雪项目',
    alpine: '高山滑雪',
    snowboardSlopestyle: '单板坡面/大跳台',
    snowboardParallel: '单板平行',
    freeskiSlopestyle: '自由式坡面/大跳台',
    points: '积分中心',
    events: '赛事',
    my: '我的',
    docs: '知识库',
    about: '关于系统'
  },

  // 高山滑雪页面
  alpine: {
    title: '高山滑雪积分系统',
    subtitle: 'Alpine Skiing Points System',
    description: 'v4.0时间基础公式',
    
    // 标签
    tags: {
      timeBasedFormula: 'v4.0时间基础公式',
      raceLevels: 'A/B/C三级赛事',
      penaltyCalculation: '判罚分动态计算'
    },
    
    // 快速功能入口
    quickLinks: {
      title: '快速功能入口',
      pointsRanking: {
        title: '积分排行榜',
        description: '查看当前赛季积分排名'
      },
      pointsCalculator: {
        title: '积分计算器',
        description: 'v4.0公式实时计算积分'
      },
      competitions: {
        title: '赛事管理',
        description: '查看赛程和比赛结果'
      },
      athletes: {
        title: '运动员档案',
        description: '运动员信息和成绩查询'
      },
      registration: {
        title: '在线报名',
        description: '参加高山滑雪赛事'
      },
      rules: {
        title: '规则文档',
        description: '高山滑雪竞赛规则'
      },
      enterFunction: '进入功能'
    },
    
    // 积分规则
    pointsRules: {
      title: '高山滑雪积分规则 (v4.0)',
      baseFormula: {
        title: '基础比赛积分公式',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=基础积分 | F=项目系数 | Tx=选手时间 | To=冠军时间'
      },
      finalFormula: {
        title: '最终积分计算',
        formula: '最终积分 = (P + 判罚分) × 赛事系数',
        description: 'A级(1.0) | B级(0.6) | C级(0.3)'
      },
      disciplineFactors: {
        title: '项目系数表',
        downhill: '速降 DH',
        slalom: '回转 SL',
        giantSlalom: '大回转 GS',
        superG: '超大回转 SG',
        combined: '全能 AC'
      }
    },
    
    // 统计数据
    statistics: {
      title: '实时数据统计',
      registeredAthletes: '注册运动员',
      seasonEvents: '本赛季赛事',
      raceCount: '比赛场次',
      averagePoints: '平均积分',
      monthlyIncrease: '本月新增12名',
      seasonGrowth: '较上赛季增长16%',
      pandemicImpact: '受疫情影响略有下降',
      levelImprovement: '整体水平稳步提升'
    }
  },

  // 自由式坡面/大跳台页面
  freeskiSlopestyle: {
    title: '自由式坡面/大跳台',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120分档',
      judgingSystem: '裁判评分制',
      competitionFormat: '预赛/决赛轮次'
    },
    
    pointsSystem: {
      title: '分档积分体系',
      class1: {
        title: '一类赛事',
        description: '全国锦标赛等顶级赛事'
      },
      class2: {
        title: '二类赛事', 
        description: '区域性重要赛事'
      },
      class3: {
        title: '三类赛事',
        description: '地方性常规赛事'
      }
    }
  },

  // 单板坡面/大跳台页面
  snowboardSlopestyle: {
    title: '单板坡面/大跳台',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120分档',
      judgingSystem: '裁判评分制',
      competitionFormat: '预赛/决赛轮次'
    }
  },

  // 单板平行项目页面
  snowboardParallel: {
    title: '单板平行项目',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: '时间竞速积分',
      eliminationFormat: '淘汰赛制',
      parallelEvents: 'PGS/PSL项目'
    }
  },

  // 语言切换
  languageSelector: {
    title: '选择语言',
    chinese: '中文',
    english: 'English', 
    japanese: '日本語',
    korean: '한국어'
  },

  // 认证和权限
  auth: {
    needsLogin: '需要登录',
    loginToUnlock: '登录解锁更多功能',
    comingSoon: '即将上线'
  }
};

export type TranslationKeys = typeof zh;