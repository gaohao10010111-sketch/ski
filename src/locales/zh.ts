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
    readMore: '阅读全文',
    cancelled: '已取消'
  },

  // 导航
  navigation: {
    title: '中国滑雪青少年积分排名官方平台',
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
        title: '2025-2026赛季U系列比赛',
        subtitle: '中国青少年高山滑雪积分排名官方平台'
      },
      slide2: {
        title: '积分规则v4.0',
        subtitle: '时间基础公式，A/B/C级赛事系数'
      },
      slide3: {
        title: '全国冬季项目赛事赛历已公布',
        subtitle: '2025-2026赛季第一批赛历发布'
      }
    },

    subDisciplines: [
      { id: 'all', name: '全部项目', nameEn: 'All Events' },
      { id: 'DH', name: '速降', nameEn: 'Downhill' },
      { id: 'SL', name: '回转', nameEn: 'Slalom' },
      { id: 'GS', name: '大回转', nameEn: 'Giant Slalom' },
      { id: 'SG', name: '超级大回转', nameEn: 'Super-G' },
      { id: 'AC', name: '全能', nameEn: 'Alpine Combined' }
    ],

    quickAccess: {
      results: { title: '赛事成绩', nameEn: 'Results' },
      rankings: { title: '积分排名', nameEn: 'Rankings' },
      schedule: { title: '赛事日历', nameEn: 'Calendar' },
      videos: { title: '视频中心', nameEn: 'Videos' },
      athletes: { title: '运动员名录', nameEn: 'Athletes' },
      documents: { title: '规则文档', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '即将进行',
      events: [],
      emptyMessage: '暂无赛事安排，请关注官方通知'
    },

    latestNews: {
      title: '通知公告',
      items: [
        {
          title: '2025-2026赛季高山滑雪U系列比赛',
          subtitle: '竞赛规程即将发布',
          time: '2025-11',
          image: '/images/ski-bg.jpg'
        },
        {
          title: '全国冬季项目赛事赛历公布',
          subtitle: '2025-2026赛季第一批赛历',
          time: '2025-11-06',
          image: '/images/ski-bg.jpg'
        },
        {
          title: '中日韩冬季青少年运动会',
          subtitle: '2026年运动员选拔方案发布',
          time: '2025-11-18',
          image: '/images/ski-bg.jpg'
        }
      ]
    },

    topAthletes: {
      title: '积分排行',
      athletes: [
        { rank: 1, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 2, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 3, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 4, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 5, name: '待更新', nation: '-', points: 0, change: 0 }
      ]
    }
  },

  // 自由式坡面障碍技巧页面
  freestyleSlopestyle: {
    title: '自由式坡面障碍技巧',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: '自由式坡障',

    hero: {
      slide1: {
        title: '2025-2026赛季U系列比赛',
        subtitle: '自由式滑雪大跳台和坡面障碍技巧竞赛规程已发布'
      },
      slide2: {
        title: '360分制积分系统',
        subtitle: '第1名360分，统一青少年积分体系'
      },
      slide3: {
        title: 'U系列青少年比赛',
        subtitle: 'U12/U15/U18年龄组分组竞赛'
      }
    },

    subDisciplines: [
      { id: 'all', name: '全部项目', nameEn: 'All Events' },
      { id: 'SS', name: '坡面障碍技巧', nameEn: 'Slopestyle' },
      { id: 'BA', name: '大跳台', nameEn: 'Big Air' }
    ],

    quickAccess: {
      results: { title: '赛事成绩', nameEn: 'Results' },
      rankings: { title: '积分排名', nameEn: 'Rankings' },
      schedule: { title: '赛事日历', nameEn: 'Calendar' },
      videos: { title: '视频中心', nameEn: 'Videos' },
      athletes: { title: '运动员名录', nameEn: 'Athletes' },
      documents: { title: '规则文档', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '即将进行',
      events: [],
      emptyMessage: '暂无赛事安排，请关注官方通知'
    },

    latestNews: {
      title: '通知公告',
      items: [
        {
          title: '自由式滑雪U系列比赛竞赛规程',
          subtitle: '2025-2026赛季大跳台和坡面障碍技巧',
          time: '2025-11-07',
          image: '/images/ski-bg.jpg'
        },
        {
          title: '自由式滑雪坡面障碍技巧青少年锦标赛',
          subtitle: '2025-2026赛季竞赛规程已发布',
          time: '2025-11-07',
          image: '/images/ski-bg.jpg'
        },
        {
          title: '全国自由式滑雪空中技巧锦标赛',
          subtitle: '2025-2026赛季竞赛规程',
          time: '2025-11-27',
          image: '/images/ski-bg.jpg'
        }
      ]
    },

    topAthletes: {
      title: '积分排行',
      athletes: [
        { rank: 1, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 2, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 3, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 4, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 5, name: '待更新', nation: '-', points: 0, change: 0 }
      ]
    }
  },

  // 单板坡面障碍技巧页面
  snowboardSlopestyle: {
    title: '单板坡面障碍技巧',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: '单板坡障',

    hero: {
      slide1: {
        title: '2025-2026赛季U系列比赛',
        subtitle: '单板滑雪大跳台和坡面障碍技巧竞赛规程已发布'
      },
      slide2: {
        title: '360分制积分系统',
        subtitle: '第1名360分，统一青少年积分体系'
      },
      slide3: {
        title: 'U系列青少年比赛',
        subtitle: 'U12/U15/U18年龄组分组竞赛'
      }
    },

    subDisciplines: [
      { id: 'all', name: '全部项目', nameEn: 'All Events' },
      { id: 'SS', name: '坡面障碍技巧', nameEn: 'Slopestyle' },
      { id: 'BA', name: '大跳台', nameEn: 'Big Air' }
    ],

    quickAccess: {
      results: { title: '赛事成绩', nameEn: 'Results' },
      rankings: { title: '积分排名', nameEn: 'Rankings' },
      schedule: { title: '赛事日历', nameEn: 'Calendar' },
      videos: { title: '视频中心', nameEn: 'Videos' },
      athletes: { title: '运动员名录', nameEn: 'Athletes' },
      documents: { title: '规则文档', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '即将进行',
      events: [],
      emptyMessage: '暂无赛事安排，请关注官方通知'
    },

    latestNews: {
      title: '通知公告',
      items: [
        {
          title: '单板滑雪U系列比赛竞赛规程',
          subtitle: '2025-2026赛季大跳台和坡面障碍技巧',
          time: '2025-11-07',
          image: '/images/ski-bg.jpg'
        },
        {
          title: '单板滑雪大跳台青少年锦标赛',
          subtitle: '2025-2026赛季竞赛规程已发布',
          time: '2025-11-07',
          image: '/images/ski-bg.jpg'
        },
        {
          title: '全国单板滑雪坡面障碍技巧青少年锦标赛',
          subtitle: '2025-2026赛季竞赛规程',
          time: '2025-11-07',
          image: '/images/ski-bg.jpg'
        }
      ]
    },

    topAthletes: {
      title: '积分排行',
      athletes: [
        { rank: 1, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 2, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 3, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 4, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 5, name: '待更新', nation: '-', points: 0, change: 0 }
      ]
    }
  },

  // 单板平行项目页面
  snowboardParallel: {
    title: '单板平行项目',
    subtitle: 'Snowboard Parallel',
    projectLabel: '单板平行',

    hero: {
      slide1: {
        title: '2025-2026赛季U系列比赛',
        subtitle: '单板平行项目竞赛规程即将发布'
      },
      slide2: {
        title: '360分制积分系统',
        subtitle: '平行大回转PGS、平行回转PSL'
      },
      slide3: {
        title: 'U系列青少年比赛',
        subtitle: 'U12/U15/U18年龄组分组竞赛'
      }
    },

    subDisciplines: [
      { id: 'all', name: '全部项目', nameEn: 'All Events' },
      { id: 'PGS', name: '平行大回转', nameEn: 'Parallel Giant Slalom' },
      { id: 'PSL', name: '平行回转', nameEn: 'Parallel Slalom' }
    ],

    quickAccess: {
      results: { title: '赛事成绩', nameEn: 'Results' },
      rankings: { title: '积分排名', nameEn: 'Rankings' },
      schedule: { title: '赛事日历', nameEn: 'Calendar' },
      videos: { title: '视频中心', nameEn: 'Videos' },
      athletes: { title: '运动员名录', nameEn: 'Athletes' },
      documents: { title: '规则文档', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '即将进行',
      events: [],
      emptyMessage: '暂无赛事安排，请关注官方通知'
    },

    latestNews: {
      title: '通知公告',
      items: [
        {
          title: '单板平行项目U系列比赛',
          subtitle: '2025-2026赛季竞赛规程待发布',
          time: '2025-11',
          image: '/images/ski-bg.jpg'
        },
        {
          title: '全国冬季项目赛事赛历',
          subtitle: '2025-2026赛季第一批已公布',
          time: '2025-11-06',
          image: '/images/ski-bg.jpg'
        },
        {
          title: '第十二届全国大众冰雪季',
          subtitle: '群众冰雪赛事活动进行中',
          time: '2025-12-04',
          image: '/images/ski-bg.jpg'
        }
      ]
    },

    topAthletes: {
      title: '积分排行',
      athletes: [
        { rank: 1, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 2, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 3, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 4, name: '待更新', nation: '-', points: 0, change: 0 },
        { rank: 5, name: '待更新', nation: '-', points: 0, change: 0 }
      ]
    }
  },

  // 项目总览页面
  disciplinesPage: {
    hero: {
      backLabel: '返回首页',
      title: '中国滑雪青少年积分排名官方平台',
      subtitle: '四大项目独立积分体系 | 专业赛事管理平台'
    },
    continuation: {
      title: '四大项目积分延续机制',
      description: '科学合理的积分延续策略，确保四大项目竞技水平的连续性评估',
      cards: [
        {
          id: 'carry-forward',
          value: '×50%',
          title: '延续比例',
          description: '赛季结束后，四大项目积分分别按照50%的比例延续到下一赛季',
          accent: 'blue'
        },
        {
          id: 'season',
          value: '7.1-6.30',
          title: '赛季周期',
          description: '每年7月1日至次年6月30日为一个完整赛季，确保积分计算的时间统一性',
          accent: 'green'
        },
        {
          id: 'best-two',
          value: 'Best 2',
          title: '成绩计算',
          description: '取赛季内各项目最好两次成绩平均值作为运动员的最终积分',
          accent: 'purple'
        }
      ]
    },
    cardsSection: {
      title: '选择你的项目',
      ctaLabel: '进入项目系统',
      cards: [
        {
          id: 'alpine',
          name: '高山滑雪',
          nameEn: 'Alpine Skiing',
          icon: 'alpine',
          color: 'from-blue-600 to-cyan-600',
          description: 'v4.0时间基础积分计算 | A/B/C三级赛事系数',
          features: ['速降', '回转', '大回转', '超级大回转', '全能']
        },
        {
          id: 'snowboard-slopestyle',
          name: '单板坡面障碍技巧 & 大跳台',
          nameEn: 'Snowboard Slopestyle & Big Air',
          icon: 'snowboard',
          color: 'from-orange-600 to-yellow-600',
          description: '240/360/120分档积分 | 裁判评分转排名',
          features: ['坡面障碍技巧', '大跳台', 'U型场地']
        },
        {
          id: 'snowboard-parallel',
          name: '单板滑雪平行项目',
          nameEn: 'Snowboard Parallel',
          icon: 'snowboard',
          color: 'from-purple-600 to-pink-600',
          description: '竞速时间积分 | 淘汰赛制',
          features: ['平行大回转(PGS)', '平行回转(PSL)']
        },
        {
          id: 'freeski-slopestyle',
          name: '自由式滑雪坡面障碍技巧 & 大跳台',
          nameEn: 'Freeski Slopestyle & Big Air',
          icon: 'freeski',
          color: 'from-red-600 to-rose-600',
          description: '240/360/120分档积分 | 技巧难度系数',
          features: ['坡面障碍技巧', '大跳台', '空中技巧']
        }
      ]
    },
    highlights: {
      title: '系统核心特点',
      items: [
        {
          id: 'independent',
          icon: 'award',
          title: '独立积分体系',
          description: '四个项目独立排名和统计'
        },
        {
          id: 'realtime',
          icon: 'barChart',
          title: '实时积分计算',
          description: '比赛结束后自动更新积分'
        },
        {
          id: 'u-series',
          icon: 'target',
          title: 'U系列管理',
          description: 'U12/U15/U18青少年分组'
        },
        {
          id: 'continuation',
          icon: 'rotateCcw',
          title: '积分延续机制',
          description: '赛季结束后×50%基础积分'
        }
      ]
    }
  },

  // 运动员页面
  athletesPage: {
    pageTitle: '运动员管理',
    pageSubtitle: '中国滑雪运动员档案与积分统计',
    searchPlaceholder: '搜索运动员姓名或省份...',
    filterOptions: [
      { value: 'all', label: '所有项目' },
      { value: 'alpine', label: '高山滑雪' },
      { value: 'freestyle', label: '自由式滑雪' },
      { value: 'snowboard', label: '单板滑雪' }
    ],
    resultsSummary: '找到 {count} 名运动员',
    exportLabel: '导出列表',
    stats: [
      { id: 'registered', value: '-', label: '注册运动员', icon: 'user', theme: 'blue' },
      { id: 'active', value: '-', label: '活跃运动员', icon: 'trophy', theme: 'green' },
      { id: 'awarded', value: '-', label: '获奖运动员', icon: 'medal', theme: 'purple' },
      { id: 'improved', value: '-', label: '积分提升', icon: 'trendingUp', theme: 'red' }
    ],
    tableHeaders: {
      rank: '排名',
      athlete: '运动员',
      discipline: '项目',
      points: '积分',
      competitions: '参赛次数',
      bestResult: '最佳成绩',
      province: '所属省份'
    },
    list: [],
    emptyMessage: '暂无运动员数据，请导入成绩后查看'
  },

  // 语言切换
  languageSelector: {
    title: '选择语言',
    languages: {
      zh: '中文',
      en: '英语',
      ja: '日语',
      ko: '韩语',
      de: '德语',
      fr: '法语',
      it: '意大利语',
      ru: '俄语',
      no: '挪威语',
      sv: '瑞典语',
      fi: '芬兰语',
      es: '西班牙语'
    }
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

  rulesPage: {
    header: {
      title: '中国高山滑雪规则文库',
      description: '查看最新的简化规则体系，涵盖积分计算、竞赛管理、青少年培养等完整规则文档。',
      highlights: [
        { icon: 'award', text: '官方标准' },
        { icon: 'target', text: '简化计算体系' },
        { icon: 'users', text: '扩展青少年体系' }
      ]
    },
    headings: {
      ruleModules: '规则模块'
    },
    toc: {
      toggleTitle: '显示/隐藏目录',
      title: '页面目录',
      download: '下载 PDF 版本',
      items: {
        coreFormula: '核心公式',
        ruleModules: '规则模块',
        coreFeatures: '核心特点',
        quickLinks: '快速链接',
        upgradeInfo: '升级说明',
        importantNotice: '重要提示'
      }
    },
    formula: {
      title: '核心公式',
      expression: '最终积分 = (基础比赛积分 + 判罚分) × 赛事系数',
      description: '相比 v2.0 复杂体系，去除了质量系数、人数系数、附加分等复杂要素，采用简化三步计算法，提高效率和透明度。',
      copyButton: '复制公式',
      copySuccess: '已复制到剪贴板！',
      calculatorButton: '使用计算器'
    },
    ruleModules: {
      points: {
        title: '中国高山滑雪积分规则',
        description: '全新简化的积分计算体系，基于三步计算公式，去除复杂系数。',
        features: ['简化三步计算公式', '三级赛事体系（A/B/C）', '扩展青少年年龄组', '提高计算透明度'],
        linkLabel: '查看详情'
      },
      competition: {
        title: '竞赛规则说明',
        description: '了解新版竞赛规则和扩展青少年体系，获取完整参赛指导。',
        features: ['比赛项目介绍', '年龄分组体系', '参赛指南流程', '安全技术规范'],
        linkLabel: '查看详情'
      },
      documents: {
        title: '中国积分规则文档',
        description: '查看最新的简化积分规则文档与配套工具。',
        features: ['规则详解', '公式组件说明', '在线积分计算器', 'PDF 文档下载'],
        linkLabel: '查看详情'
      }
    },
    v4Features: {
      title: '核心特点',
      items: {
        simplified: {
          title: '简化计算',
          description: '去除复杂的质量系数、人数系数、附加分等要素。'
        },
        tiers: {
          title: '三级体系',
          description: 'A级（1.0）、B级（0.6）、C级（0.3）赛事分类。'
        },
        youth: {
          title: '扩展青少年',
          description: '聚焦 U15–U18 核心年龄段，提供精准培养支持。'
        },
        efficiency: {
          title: '高效透明',
          description: '三步计算公式，提高效率与透明度。'
        }
      }
    },
    quickLinks: {
      title: '快速链接',
      items: {
        calculator: { label: '积分计算器' },
        rankings: { label: '积分规则查询' },
        data: { label: '赛事数据管理' },
        association: { label: '中国滑雪协会', external: true }
      }
    },
    upgradeInfo: {
      title: '升级说明',
      improvements: {
        title: '主要改进',
        items: ['简化积分计算公式，去除复杂系数', '三级赛事体系，管理更加清晰', '扩展青少年年龄组，全程培养支持', '提高计算透明度和效率']
      },
      advantages: {
        title: '技术优势',
        items: ['三步计算法，易于理解和实施', '标准化管理，与国际接轨', '数字化支持，在线工具完善', '开放透明，公平公正竞争']
      }
    },
    importantNotice: {
      title: '重要提示',
      version: {
        title: '规则版本',
        items: ['当前版本：最新发布', '实施赛季：2024-2025 赛季', '适用范围：中国国内赛事', '更新周期：根据实践情况调整']
      },
      usage: {
        title: '使用指南',
        items: ['建议从积分规则开始了解', '使用在线计算器验证计算', '关注青少年体系扩展政策', '及时获取规则更新信息']
      },
      support: '本规则体系基于国际先进经验，结合中国实际情况制定，旨在为中国高山滑雪运动发展提供科学、公平、高效的规则支撑。如有疑问或建议，请通过相关渠道联系我们。'
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
    rules: {
      competition: {
        title: '竞赛规则说明',
        description: '此页面功能正在开发中，敬请期待。',
        backLabel: '返回规则中心'
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
      title: '中国滑雪青少年积分排名官方平台',
      titleEn: 'China Skiing Points Data Management Platform',
      subtitle: '全国滑雪青少年U系列赛事积分排名指定发布平台',
      exploreDisciplines: '探索积分系统',
      freeRegister: '免费注册',
      platformIntro: '专业运动员、教练员、赛事组织者的首选平台',
      highlights: [
        { label: '四大积分系统', color: 'bg-ski-blue' },
        { label: '官方标准认证', color: 'bg-green-400' },
        { label: 'U系列·大众赛事', color: 'bg-yellow-400' }
      ]
    },
    features: {
      title: '平台核心功能',
      description: '基于FIS国际雪联标准的完整滑雪竞赛管理解决方案，从积分计算、运动员管理到赛事组织，覆盖高山滑雪运动的所有核心环节',
      online: '已上线',
      useNow: '立即使用',
      fisPointsQuery: {
        title: 'FIS积分查询',
        description: '查询运动员FIS积分和排名信息'
      },
      pointsCalculator: {
        title: '积分计算器',
        description: '根据比赛成绩实时计算滑雪积分'
      },
      pointsRankings: {
        title: '积分排行榜',
        description: '实时更新的运动员积分排名'
      },
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
      disciplines: { label: '滑雪项目', value: '4大项', description: '高山·自由式·单板' },
      pointsRules: { label: '积分规则', value: '100%', description: '符合中国标准' },
      updateCycle: { label: '积分更新', value: '7天', description: '每周更新' },
      users: { label: '注册用户', value: '500+', description: '运动员教练' }
    },
    news: {
      title: '通知公告',
      pauseCarousel: '暂停轮播',
      continueCarousel: '继续轮播',
      statuses: {
        live: '进行中',
        updated: '已发布',
        upcoming: '即将开始'
      },
      items: [
        { id: 'u-series-2025', title: 'U系列比赛竞赛规程发布', subtitle: '2025-2026赛季 · 冬运中心', status: 'updated', pinned: true, href: 'https://www.sport.gov.cn/dyzx/n5169/index.html' },
        { id: 'bigair-ss-rules', title: '大跳台和坡面障碍技巧规程', subtitle: '自由式及单板滑雪 · 已发布', status: 'updated', pinned: false, href: 'https://www.sport.gov.cn/dyzx/n5169/index.html' },
        { id: 'season-calendar', title: '全国冬季项目赛事赛历', subtitle: '2025-2026赛季第一批 · 已公布', status: 'updated', pinned: false, href: 'https://www.sport.gov.cn/dyzx/n5169/index.html' },
        { id: 'youth-championship', title: '青少年锦标赛竞赛规程', subtitle: '坡面障碍技巧 · 已发布', status: 'updated', pinned: false, href: 'https://www.sport.gov.cn/dyzx/n5169/index.html' },
        { id: 'ice-snow-season', title: '第十二届全国大众冰雪季', subtitle: '群众冰雪赛事活动 · 进行中', status: 'live', pinned: false, href: 'https://www.sport.gov.cn/dyzx/n5169/index.html' }
      ]
    },
    latestResults: {
      title: '最新赛事成绩',
      subtitle: '实时更新的竞赛结果和积分排名',
      recentResults: '最新比赛',
      liveUpdate: '实时更新',
      viewMore: '查看更多赛事 →',
      noData: '暂无该项目的比赛数据',
      statusLabels: {
        live: '正在进行',
        completed: '已完成',
        upcoming: '即将开始'
      },
      results: []
    },
    rankings: {
      title: '积分排行榜',
      updatedOn: '更新于',
      points: '积分',
      season: '赛季',
      noData: '暂无该项目的排名数据',
      viewFullRankings: '查看完整排名 →',
      entries: []
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
      description1: '中国滑雪青少年积分排名官方平台是基于官方标准打造的综合性竞赛管理平台。涵盖高山滑雪、自由式滑雪、单板滑雪全项目，采用符合中国标准的多档积分计算算法，为中国滑雪竞赛提供权威、准确的数据管理和积分计算服务。',
      description2: '我们致力于推动中国滑雪运动的数字化、标准化发展，为运动员、教练员、赛事组织者、竞赛裁判提供现代化的数据管理、积分计算、成绩统计工具，全面覆盖大跳台、坡面障碍技巧、平行项目等各类雪上项目，提升中国滑雪运动的组织水平和竞技水平。',
      multiTierPoints: { title: '多档积分体系', description: '360/240/120分档标准' },
      uSeries: { title: 'U系列赛事', description: 'U12/U15/U18全覆盖' },
      officialCertification: { title: '权威认证', description: '官方标准' },
      allDisciplines: { title: '全项目支持', description: '高山·自由式·单板滑雪' }
    },
    systemFeatures: {
      title: '系统特色',
      feature1: '高山滑雪中国积分规则标准',
      feature2: '自由式/单板滑雪360/240/120分档体系',
      feature3: '大跳台、坡面障碍技巧、平行项目全覆盖',
      feature4: 'U12/U15/U18青少年系列赛事管理',
      feature5: '官方标准认证',
      feature6: '多项目积分排行榜和数据可视化'
    }
  },

  // 关于页面
  aboutPage: {
    pageTitle: '关于我们',
    heroDescription: '中国滑雪青少年积分排名官方平台是基于官方标准打造的综合性竞赛管理平台，为中国滑雪竞赛提供权威、准确的数据管理和积分计算服务',

    platformTitle: '平台简介',
    platformDescription1: '根据国家体育总局冬季运动管理中心官网公示，北京华体冰雪产业发展有限公司（以下简称"华体冰雪"）正式成为2025-2028三个赛季全国单板滑雪坡面障碍技巧和大跳台青少年U系列比赛、单板滑雪平行项目青少年U系列比赛、自由式滑雪坡面障碍技巧和大跳台青少年U系列比赛、高山滑雪青少年U系列比赛的官方承办单位。',
    platformDescription2: '经华体冰雪授权，本平台作为赛事积分平台的指定运营方，负责赛事数据的采集、积分计算与排名发布。本平台为全国滑雪青少年U系列赛事积分排名的指定官方发布平台，旨在为运动员、教练员及各界提供权威、公正、及时的竞赛信息服务。',
    platformDescription3: '我们致力于推动中国滑雪运动的数字化、标准化发展，为运动员、教练员、赛事组织者、竞赛裁判提供现代化的数据管理、积分计算、成绩统计工具，全面覆盖大跳台、坡面障碍技巧、平行项目等各类雪上项目，提升中国滑雪运动的组织水平和竞技水平。',

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
      email: '邮箱：待配置',
      phone: '电话：待配置'
    },
    businessCooperation: {
      title: '合作咨询',
      email: '邮箱：待配置',
      wechat: '微信：待配置'
    }
  }
};

export type TranslationKeys = typeof zh;

// Deep partial type for flexible locale files
type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type PartialTranslationKeys = DeepPartial<TranslationKeys>;
