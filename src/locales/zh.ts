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
    profile: '个人设置',
    viewDetails: '查看详情',
    viewFullSchedule: '查看完整赛程',
    viewFullRankings: '查看完整排名',
    readMore: '阅读全文'
  },

  // 导航
  navigation: {
    title: '中国滑雪积分系统',
    titleShort: 'CSPS',

    // 项目切换器
    disciplines: '项目',
    alpine: '高山滑雪',
    snowboardSlopestyle: '单板坡面障碍技巧',
    snowboardParallel: '单板平行项目',
    freestyleSlopestyle: '自由式坡面障碍技巧',

    // 全局导航
    my: '我的',
    docs: '文档',
    about: '关于',

    // 项目级导航
    points: '积分管理',
    events: '赛事管理',
    athletes: '运动员',

    // 子菜单
    submenus: {
      // 积分管理子菜单
      pointsCalculator: '积分计算器',
      pointsRankings: '积分排名',
      pointsTrends: '积分趋势',

      // 赛事管理子菜单
      eventsSchedule: '赛程日历',
      eventsRegister: '在线报名',
      eventsResults: '成绩查询',
      eventsStats: '数据统计',
      resultsLive: '实时成绩',
      resultsImport: '成绩录入',
      resultsAnnouncement: '成绩发布',

      // 运动员子菜单
      athletesList: '运动员名录',
      athletesProfile: '运动员档案',
      athletesStats: '运动员统计',

      // 文档子菜单
      docsPointsRules: '积分规则',
      docsCompetitionRules: '竞赛规则',
      docsVenueStandards: '场地标准',
      docsGuide: '使用指南',

      // 个人中心子菜单
      myProfile: '个人中心',
      myPoints: '我的积分',
      myRegistrations: '我的报名',
      myAthlete: '运动员资料',
      myHistory: '成绩历史',

      // 更多功能
      moreFeatures: '更多功能'
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
    title: '高山滑雪',
    subtitle: 'Alpine Skiing',
    projectLabel: '高山滑雪',

    hero: {
      slide1: {
        title: '2024全国锦标赛精彩瞬间',
        subtitle: '见证中国高山滑雪的辉煌时刻'
      },
      slide2: {
        title: '积分系统全新升级',
        subtitle: '基于v4.0规则，更精确的积分计算'
      },
      slide3: {
        title: '冬季训练营开始报名',
        subtitle: '专业教练团队，助力技术提升'
      }
    },

    quickAccess: {
      results: { title: '赛事成绩', nameEn: 'Results' },
      rankings: { title: '积分排名', nameEn: 'Rankings' },
      schedule: { title: '赛事日历', nameEn: 'Calendar' },
      videos: { title: '视频中心', nameEn: 'Videos' },
      athletes: { title: '运动员名录', nameEn: 'Athletes' },
      documents: { title: '规则文档', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '即将进行'
    },

    latestNews: {
      title: '最新动态'
    },

    topAthletes: {
      title: '积分排行'
    }
  },

  // 自由式坡面障碍技巧页面
  freestyleSlopestyle: {
    title: '自由式坡面障碍技巧',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: '自由式坡障',

    hero: {
      slide1: {
        title: '2024全国自由式滑雪坡面障碍技巧锦标赛',
        subtitle: '见证中国自由式滑雪的极限突破'
      },
      slide2: {
        title: '360分档积分系统',
        subtitle: '基于难度系数的公正评分机制'
      },
      slide3: {
        title: 'U系列青少年发展计划',
        subtitle: 'U12/U15/U18梯队培养体系'
      }
    },

    quickAccess: {
      results: { title: '赛事成绩', nameEn: 'Results' },
      rankings: { title: '积分排名', nameEn: 'Rankings' },
      schedule: { title: '赛事日历', nameEn: 'Calendar' },
      videos: { title: '视频中心', nameEn: 'Videos' },
      athletes: { title: '运动员名录', nameEn: 'Athletes' },
      documents: { title: '规则文档', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '即将进行'
    },

    latestNews: {
      title: '最新动态'
    },

    topAthletes: {
      title: '积分排行'
    }
  },

  // 单板坡面障碍技巧页面
  snowboardSlopestyle: {
    title: '单板坡面障碍技巧',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: '单板坡障',

    hero: {
      slide1: {
        title: '2024全国单板坡面障碍技巧锦标赛',
        subtitle: '见证中国单板滑雪的精彩时刻'
      },
      slide2: {
        title: '360分档积分系统',
        subtitle: '基于国际标准的积分计算规则'
      },
      slide3: {
        title: 'U系列青少年培养计划',
        subtitle: 'U12/U15/U18三级培养体系'
      }
    },

    quickAccess: {
      results: { title: '赛事成绩', nameEn: 'Results' },
      rankings: { title: '积分排名', nameEn: 'Rankings' },
      schedule: { title: '赛事日历', nameEn: 'Calendar' },
      videos: { title: '视频中心', nameEn: 'Videos' },
      athletes: { title: '运动员名录', nameEn: 'Athletes' },
      documents: { title: '规则文档', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '即将进行'
    },

    latestNews: {
      title: '最新动态'
    },

    topAthletes: {
      title: '积分排行'
    }
  },

  // 单板平行项目页面
  snowboardParallel: {
    title: '单板平行项目',
    subtitle: 'Snowboard Parallel',
    projectLabel: '单板平行',

    hero: {
      slide1: {
        title: '2024全国单板平行项目锦标赛',
        subtitle: '竞速与技巧的完美结合'
      },
      slide2: {
        title: '淘汰赛制积分系统',
        subtitle: '基于对决排名的公平积分计算'
      },
      slide3: {
        title: '精英选手培养计划',
        subtitle: '提升竞速水平，冲击国际赛事'
      }
    },

    quickAccess: {
      results: { title: '赛事成绩', nameEn: 'Results' },
      rankings: { title: '积分排名', nameEn: 'Rankings' },
      schedule: { title: '赛事日历', nameEn: 'Calendar' },
      videos: { title: '视频中心', nameEn: 'Videos' },
      athletes: { title: '运动员名录', nameEn: 'Athletes' },
      documents: { title: '规则文档', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '即将进行'
    },

    latestNews: {
      title: '最新动态'
    },

    topAthletes: {
      title: '积分排行'
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
    comingSoon: '即将上线',
    roles: {
      admin: '管理员',
      coach: '教练员',
      athlete: '运动员',
      user: '用户'
    }
  }
};

export type TranslationKeys = typeof zh;
