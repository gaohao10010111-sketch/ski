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

  // 即将上线组件
  comingSoon: {
    title: '即将上线',
    description: '此功能正在开发中，敬请期待。',
    backLabel: '返回首页',
    learnMoreLabel: '了解更多',
    progressLabel: '开发进度',
    progressValue: '30%',
    eta: '预计上线时间：2-4周',
    upcomingFeaturesTitle: '即将推出的功能：',
    upcomingFeatures: ['实时数据更新', '智能分析', '个性化推荐', '移动端优化']
  },

  // 文档中心
  docsPage: {
    hero: {
      title: '知识库',
      description: '滑雪竞赛规则、技术标准、平台使用指南'
    },
    viewDocLabel: '查看文档',
    categories: {
      pointsRules: {
        title: '积分规则文档',
        description: '中国滑雪积分计算规则详解',
        topics: ['积分计算公式', '赛事分级系数', '判罚分机制', 'BL/NL积分表']
      },
      competitionRules: {
        title: '竞赛技术规则',
        description: '滑雪竞赛技术规则和裁判标准',
        topics: ['比赛流程', '裁判规则', '计时系统', '申诉机制']
      },
      venueStandards: {
        title: '场地技术标准',
        description: '赛事场地设施和技术要求',
        topics: ['场地标准', '设施要求', '安全规范', '认证流程']
      },
      fisRules: {
        title: 'FIS国际规则',
        description: '国际滑雪联合会竞赛规则',
        topics: ['FIS积分规则', 'ICR竞赛规则', '国际标准', '中英对照']
      },
      guide: {
        title: '平台使用指南',
        description: '系统功能使用说明和常见问题',
        topics: ['注册流程', '报名指南', '积分查询', '常见问题']
      }
    },
    popular: {
      title: '热门文档',
      viewsLabel: '次查看',
      items: {
        alpineRulesV4: { title: '中国高山滑雪积分规则v4.0', category: '积分规则' },
        seasonGrading: { title: '2024-2025赛季赛事分级标准', category: '竞赛规则' },
        youthSeries: { title: 'U系列青少年赛事管理办法', category: '竞赛规则' },
        fisPointsGuide: { title: 'FIS积分计算方法详解', category: 'FIS规则' }
      }
    }
  },

  // 页面文案（ComingSoon）
  pages: {
    alpine: {
      athletes: {
        list: {
          title: '运动员名录',
          description: '查看所有注册运动员信息和档案',
          backLabel: '返回高山滑雪'
        },
        rankings: {
          title: '运动员排名',
          description: '基于积分和成绩的运动员综合排名',
          backLabel: '返回高山滑雪'
        },
        stats: {
          title: '运动员统计',
          description: '详细的运动员数据统计和可视化分析',
          backLabel: '返回高山滑雪'
        }
      },
      docs: {
        'competition-rules': {
          title: '竞赛规则',
          description: '详细的竞赛技术规则和标准',
          backLabel: '返回高山滑雪'
        },
        'points-rules': {
          title: '积分规则',
          description: '查看高山滑雪v4.0积分计算规则详解',
          backLabel: '返回高山滑雪'
        },
        'venue-standards': {
          title: '场地标准',
          description: '高山滑雪场地技术标准和认证要求',
          backLabel: '返回高山滑雪'
        }
      },
      events: {
        register: {
          title: '在线报名',
          description: '便捷的赛事在线报名系统，即将上线',
          backLabel: '返回高山滑雪'
        },
        results: {
          title: '成绩查询',
          description: '实时查询比赛成绩和积分变化',
          backLabel: '返回高山滑雪'
        },
        schedule: {
          title: '赛程日历',
          description: '查看即将举行的高山滑雪比赛安排',
          backLabel: '返回高山滑雪'
        },
        stats: {
          title: '赛事统计',
          description: '全面的赛事数据统计和分析工具',
          backLabel: '返回高山滑雪'
        }
      },
      points: {
        calculator: {
          title: '积分计算器',
          description: '基于v4.0规则的精确积分计算工具，即将上线',
          backLabel: '返回高山滑雪'
        },
        rankings: {
          title: '积分排名',
          description: '实时更新的运动员积分排名榜，敬请期待',
          backLabel: '返回高山滑雪'
        },
        trends: {
          title: '积分趋势',
          description: '可视化积分变化趋势，数据分析工具即将上线',
          backLabel: '返回高山滑雪'
        }
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: '运动员名录',
          description: '查看所有注册运动员信息和档案',
          backLabel: '返回自由式坡面障碍技巧'
        },
        rankings: {
          title: '运动员排名',
          description: '基于积分和成绩的运动员综合排名',
          backLabel: '返回自由式坡面障碍技巧'
        },
        stats: {
          title: '运动员统计',
          description: '详细的运动员数据统计和可视化分析',
          backLabel: '返回自由式坡面障碍技巧'
        }
      },
      docs: {
        'competition-rules': {
          title: '竞赛规则',
          description: '详细的竞赛技术规则和标准',
          backLabel: '返回自由式坡面障碍技巧'
        },
        'points-rules': {
          title: '积分规则',
          description: '查看积分计算规则详解',
          backLabel: '返回自由式坡面障碍技巧'
        },
        'venue-standards': {
          title: '场地标准',
          description: '场地技术标准和认证要求',
          backLabel: '返回自由式坡面障碍技巧'
        }
      },
      events: {
        register: {
          title: '在线报名',
          description: '便捷的赛事在线报名系统',
          backLabel: '返回自由式坡面障碍技巧'
        },
        results: {
          title: '成绩查询',
          description: '实时查询比赛成绩和积分变化',
          backLabel: '返回自由式坡面障碍技巧'
        },
        schedule: {
          title: '赛程日历',
          description: '查看即将举行的比赛安排',
          backLabel: '返回自由式坡面障碍技巧'
        },
        stats: {
          title: '赛事统计',
          description: '全面的赛事数据统计和分析工具',
          backLabel: '返回自由式坡面障碍技巧'
        }
      },
      points: {
        calculator: {
          title: '积分计算器',
          description: '精确的积分计算工具，即将上线',
          backLabel: '返回自由式坡面障碍技巧'
        },
        rankings: {
          title: '积分排名',
          description: '实时更新的运动员积分排名榜',
          backLabel: '返回自由式坡面障碍技巧'
        },
        trends: {
          title: '积分趋势',
          description: '可视化积分变化趋势，数据分析工具',
          backLabel: '返回自由式坡面障碍技巧'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: '运动员名录',
          description: '查看所有注册运动员信息和档案',
          backLabel: '返回单板平行项目'
        },
        rankings: {
          title: '运动员排名',
          description: '基于积分和成绩的运动员综合排名',
          backLabel: '返回单板平行项目'
        },
        stats: {
          title: '运动员统计',
          description: '详细的运动员数据统计和可视化分析',
          backLabel: '返回单板平行项目'
        }
      },
      docs: {
        'competition-rules': {
          title: '竞赛规则',
          description: '详细的竞赛技术规则和标准',
          backLabel: '返回单板平行项目'
        },
        'points-rules': {
          title: '积分规则',
          description: '查看积分计算规则详解',
          backLabel: '返回单板平行项目'
        },
        'venue-standards': {
          title: '场地标准',
          description: '场地技术标准和认证要求',
          backLabel: '返回单板平行项目'
        }
      },
      events: {
        register: {
          title: '在线报名',
          description: '便捷的赛事在线报名系统',
          backLabel: '返回单板平行项目'
        },
        results: {
          title: '成绩查询',
          description: '实时查询比赛成绩和积分变化',
          backLabel: '返回单板平行项目'
        },
        schedule: {
          title: '赛程日历',
          description: '查看即将举行的比赛安排',
          backLabel: '返回单板平行项目'
        },
        stats: {
          title: '赛事统计',
          description: '全面的赛事数据统计和分析工具',
          backLabel: '返回单板平行项目'
        }
      },
      points: {
        calculator: {
          title: '积分计算器',
          description: '精确的积分计算工具，即将上线',
          backLabel: '返回单板平行项目'
        },
        rankings: {
          title: '积分排名',
          description: '实时更新的运动员积分排名榜',
          backLabel: '返回单板平行项目'
        },
        trends: {
          title: '积分趋势',
          description: '可视化积分变化趋势，数据分析工具',
          backLabel: '返回单板平行项目'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: '运动员名录',
          description: '查看所有注册运动员信息和档案',
          backLabel: '返回单板坡面障碍技巧'
        },
        rankings: {
          title: '运动员排名',
          description: '基于积分和成绩的运动员综合排名',
          backLabel: '返回单板坡面障碍技巧'
        },
        stats: {
          title: '运动员统计',
          description: '详细的运动员数据统计和可视化分析',
          backLabel: '返回单板坡面障碍技巧'
        }
      },
      docs: {
        'competition-rules': {
          title: '竞赛规则',
          description: '详细的竞赛技术规则和标准',
          backLabel: '返回单板坡面障碍技巧'
        },
        'points-rules': {
          title: '积分规则',
          description: '查看积分计算规则详解',
          backLabel: '返回单板坡面障碍技巧'
        },
        'venue-standards': {
          title: '场地标准',
          description: '场地技术标准和认证要求',
          backLabel: '返回单板坡面障碍技巧'
        }
      },
      events: {
        register: {
          title: '在线报名',
          description: '便捷的赛事在线报名系统',
          backLabel: '返回单板坡面障碍技巧'
        },
        results: {
          title: '成绩查询',
          description: '实时查询比赛成绩和积分变化',
          backLabel: '返回单板坡面障碍技巧'
        },
        schedule: {
          title: '赛程日历',
          description: '查看即将举行的比赛安排',
          backLabel: '返回单板坡面障碍技巧'
        },
        stats: {
          title: '赛事统计',
          description: '全面的赛事数据统计和分析工具',
          backLabel: '返回单板坡面障碍技巧'
        }
      },
      points: {
        calculator: {
          title: '积分计算器',
          description: '精确的积分计算工具，即将上线',
          backLabel: '返回单板坡面障碍技巧'
        },
        rankings: {
          title: '积分排名',
          description: '实时更新的运动员积分排名榜',
          backLabel: '返回单板坡面障碍技巧'
        },
        trends: {
          title: '积分趋势',
          description: '可视化积分变化趋势，数据分析工具',
          backLabel: '返回单板坡面障碍技巧'
        }
      }
    },
    docs: {
      competitionRules: {
        title: '竞赛技术规则',
        description: '滑雪竞赛技术规则和裁判标准',
        backLabel: '返回知识库'
      },
      pointsRules: {
        title: '积分规则',
        description: '中国滑雪积分计算规则文档',
        backLabel: '返回知识库'
      },
      venueStandards: {
        title: '场地标准',
        description: '赛事场地设施和技术要求',
        backLabel: '返回知识库'
      },
      fisRules: {
        title: 'FIS国际规则',
        description: '国际滑雪联合会竞赛规则',
        backLabel: '返回知识库'
      },
      guide: {
        title: '平台使用指南',
        description: '系统功能使用说明和常见问题',
        backLabel: '返回知识库'
      }
    }
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
  },

  // 首页
  home: {
    hero: {
      title: '中国滑雪积分系统',
      titleEn: 'China Skiing Points System',
      subtitle: '权威·专业·精准的中国滑雪运动积分管理平台',
      exploreDisciplines: '探索滑雪项目',
      freeRegister: '免费注册',
      platformIntro: '专业运动员、教练员、赛事组织者的首选平台 • 国家体育总局认证标准'
    },
    features: {
      title: '平台核心功能',
      platformIntro: {
        title: '平台介绍',
        description: '了解中国高山滑雪积分体系'
      },
      memberRegister: {
        title: '会员注册',
        description: '注册成为平台会员，查看个人积分'
      },
      eventAnnouncement: {
        title: '赛事公告',
        description: '查看最新的赛事安排和公告'
      },
      pointsRules: {
        title: '积分规则',
        description: '查看中国高山滑雪积分计算规则'
      },
      competitionManagement: {
        title: '竞赛管理',
        description: '管理比赛信息、成绩录入和统计'
      },
      athleteProfiles: {
        title: '运动员档案',
        description: '运动员信息管理和积分历史'
      },
      onlineRegistration: {
        title: '在线报名',
        description: '便捷的赛事报名和费用管理'
      },
      dataAnalysis: {
        title: '数据分析',
        description: '深度数据分析和可视化报表'
      }
    },
    stats: {
      title: '平台数据概览',
      subtitle: '实时更新的系统数据和运行状态',
      disciplines: { label: '滑雪项目', value: '15+', description: '高山·自由式·单板' },
      pointsRules: { label: '积分规则', value: '100%', description: '符合中国标准' },
      updateCycle: { label: '积分更新', value: '7天', description: '每周更新' },
      users: { label: '注册用户', value: '1,200+', description: '运动员教练' }
    },
    news: {
      title: '实时动态',
      pauseCarousel: '暂停轮播',
      continueCarousel: '继续轮播',
      statuses: {
        live: '进行中',
        updated: '已更新',
        upcoming: '即将开始'
      },
      items: [
        { id: 'nc-men-gs', title: '2024全国锦标赛', subtitle: '大回转项目 · 正在进行', status: 'live', pinned: true },
        { id: 'points-refresh', title: '积分排名更新', subtitle: '14天周期 · 已发布', status: 'updated', pinned: false },
        { id: 'rules-update', title: '新赛季规则', subtitle: '技术委员会 · 已更新', status: 'updated', pinned: false },
        { id: 'registration-open', title: '选手注册开启', subtitle: '2024-25赛季 · 开放报名', status: 'upcoming', pinned: false },
        { id: 'camp', title: '训练营通知', subtitle: '冬训计划 · 即将开始', status: 'upcoming', pinned: false }
      ]
    },
    latestResults: {
      title: '最新赛事成绩',
      subtitle: '实时更新的竞赛结果和积分排名',
      recentResults: '最新成绩',
      liveUpdate: '实时更新',
      viewMore: '查看更多赛事 →',
      statusLabels: {
        live: '正在进行',
        completed: '已完成'
      },
      results: [
        { id: 'nc-men-gs', title: '2024全国锦标赛', subtitle: '男子大回转 · 天池雪场', status: 'live', time: '12-15 14:30' },
        { id: 'china-cup-sl', title: '中国杯高山滑雪公开赛', subtitle: '女子回转 · 万龙雪场', status: 'completed', time: '12-14 16:45' },
        { id: 'northeast-league', title: '东北三省联赛', subtitle: '混合全能 · 亚布力雪场', status: 'completed', time: '12-13 15:20' }
      ]
    },
    rankings: {
      title: '积分排行榜',
      updatedOn: '更新于',
      points: '积分',
      viewFullRankings: '查看完整排名 →',
      entries: [
        { rank: 1, name: '张伟', event: '男子大回转', points: '0.00' },
        { rank: 2, name: '李雪', event: '女子回转', points: '8.45' },
        { rank: 3, name: '王冰', event: '女子大回转', points: '12.30' },
        { rank: 4, name: '刘强', event: '男子回转', points: '15.67' }
      ]
    },
    memberWelcome: {
      welcomeBack: '欢迎回来',
      accountStatus: '账户正常',
      pendingReview: '待审核状态',
      currentPoints: '当前积分',
      systemPermissions: '系统权限',
      personalCenter: '个人中心',
      myPoints: '我的积分',
      adminPanel: '管理后台'
    },
    memberValue: {
      unlockFeatures: '解锁所有专业功能',
      registerToUnlock: '注册成为会员，享受完整的积分管理和赛事服务',
      pointsSystem: {
        title: '积分系统',
        features: ['个人积分查询与历史追踪', '实时积分排行榜', '积分计算器工具', '积分变化趋势分析']
      },
      eventManagement: {
        title: '赛事管理',
        features: ['查看比赛列表和赛事日程', '在线报名参赛', '实时成绩查看', '赛事成绩通知']
      },
      professionalFeatures: {
        title: '专业功能',
        features: ['个人运动员档案管理', '积分规则详解', '数据统计分析', '技术支持服务']
      },
      registerUnlock: '注册解锁'
    },
    about: {
      title: '关于平台',
      description1: '中国滑雪赛事积分系统是基于国家体育总局冬季运动管理中心标准打造的综合性竞赛管理平台。涵盖高山滑雪、自由式滑雪、单板滑雪全项目，采用符合中国标准的多档积分计算算法，为中国滑雪竞赛提供权威、准确的数据管理和积分计算服务。',
      description2: '我们致力于推动中国滑雪运动的数字化、标准化发展，为运动员、教练员、赛事组织者、竞赛裁判提供现代化的数据管理、积分计算、成绩统计工具，全面覆盖大跳台、坡面障碍技巧、平行项目等各类雪上项目，提升中国滑雪运动的组织水平和竞技水平。',
      multiTierPoints: { title: '多档积分体系', description: '360/240/120分档标准' },
      uSeries: { title: 'U系列赛事', description: 'U12/U15/U18全覆盖' },
      officialCertification: { title: '权威认证', description: '冬运中心官方标准' },
      allDisciplines: { title: '全项目支持', description: '高山·自由式·单板滑雪' }
    },
    systemFeatures: {
      title: '系统特色',
      feature1: '高山滑雪中国积分规则标准',
      feature2: '自由式/单板滑雪360/240/120分档体系',
      feature3: '大跳台、坡面障碍技巧、平行项目全覆盖',
      feature4: 'U12/U15/U18青少年系列赛事管理',
      feature5: '国家体育总局冬运中心标准认证',
      feature6: '多项目积分排行榜和数据可视化'
    }
  },

  // 关于页面
  aboutPage: {
    pageTitle: '关于我们',
    heroDescription: '中国滑雪积分管理平台是专业的滑雪运动积分管理服务，致力于推动滑雪运动的标准化和专业化发展',

    platformTitle: '平台简介',
    platformDescription1: '中国滑雪积分管理平台是基于官方积分计算规则和青少年U系列比赛方案建立的综合性滑雪运动管理平台。',
    platformDescription2: '平台支持高山滑雪、自由式滑雪、单板滑雪三大项目，涵盖速降、回转、大回转、超级大回转、全能、大跳台、坡面障碍技巧、U型场地等多个细分项目的积分计算和赛事管理。',
    platformDescription3: '我们致力于为滑雪运动提供专业、准确、高效的数字化管理服务，推动滑雪运动的规范化发展。',

    stats: {
      pointsSystems: { value: '4', label: '积分系统' },
      registeredAthletes: { value: '1000+', label: '注册运动员' },
      annualEvents: { value: '50+', label: '年度赛事' },
      onlineService: { value: '24/7', label: '在线服务' }
    },

    coreFeaturesTitle: '核心功能',
    coreFeaturesSubtitle: '专业、全面、易用的滑雪赛事管理解决方案',

    pointsCalculation: {
      title: '积分计算系统',
      description: '基于官方规则的精确积分计算，支持双积分体系'
    },
    eventManagement: {
      title: '赛事管理',
      description: '从报名到成绩发布的全流程数字化管理'
    },
    athleteManagement: {
      title: '运动员管理',
      description: '运动员注册、资格审查、积分记录管理'
    },
    dataAnalysis: {
      title: '数据分析',
      description: '专业的数据统计分析和可视化报告'
    },

    technicalFeaturesTitle: '技术特色',

    dualPointsEngine: {
      title: '双积分计算引擎',
      features: [
        '高山滑雪：基于时间的积分计算',
        '自由式/单板：基于排名的240/360/120分档',
        '动态判罚分计算',
        '多项目积分管理'
      ]
    },
    rulesSupport: {
      title: '规则体系支持',
      features: [
        '高山滑雪积分计算规则',
        '全国BA、SS青少年U系列方案',
        'FIS国际雪联规则兼容',
        '场地技术标准管理'
      ]
    },
    userExperience: {
      title: '用户体验',
      features: [
        '响应式设计，多端适配',
        '实时数据更新',
        '直观的数据可视化',
        '便捷的操作流程'
      ]
    },

    contactTitle: '联系我们',
    contactDescription: '如有任何问题或建议，欢迎联系我们',

    technicalSupport: {
      title: '技术支持',
      email: '邮箱：support@ski-points.com',
      phone: '电话：400-123-4567'
    },
    businessCooperation: {
      title: '合作咨询',
      email: '邮箱：business@ski-points.com',
      wechat: '微信：ski-points-service'
    }
  }
};

export type TranslationKeys = typeof zh;
