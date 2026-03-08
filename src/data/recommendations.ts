// 教练、场馆、俱乐部推荐数据
// 更新时间: 2026-03-08
// 雪场数据基于公开信息，教练和俱乐部为示例数据

export interface Coach {
  id: string
  name: string
  avatar?: string
  title: string
  specialties: string[]
  certifications: string[]
  experience: number // 年
  location: string
  rating: number // 1-5
  students: number
  achievements: string[]
  contact?: string
  price?: string
  description: string
}

export interface Venue {
  id: string
  name: string
  image?: string
  type: 'indoor' | 'outdoor' | 'resort'
  location: string
  address: string
  facilities: string[]
  slopes: {
    beginner: number
    intermediate: number
    advanced: number
  }
  elevation?: {
    base: number
    summit: number
  }
  rating: number
  reviews: number
  price: string
  openSeason: string
  features: string[]
  contact?: string
  website?: string
  description: string
  isCompetitionVenue?: boolean // U系列赛事举办地
}

export interface Club {
  id: string
  name: string
  logo?: string
  type: 'professional' | 'amateur' | 'youth' | 'school'
  location: string
  founded: number
  members: number
  disciplines: string[]
  achievements: string[]
  coaches: number
  ageGroups: string[]
  contact?: string
  website?: string
  fee?: string
  description: string
}

// 推荐教练数据
export const recommendedCoaches: Coach[] = [
  {
    id: 'coach-001',
    name: '王伟',
    title: '国家级高山滑雪教练',
    specialties: ['高山滑雪', '回转', '大回转'],
    certifications: ['国家级教练员', 'FIS认证教练', '国家职业资格一级'],
    experience: 15,
    location: '北京',
    rating: 4.9,
    students: 500,
    achievements: [
      '培养多名全国冠军',
      '国家队技术顾问',
      '2022冬奥会教练组成员'
    ],
    price: '800-1200元/小时',
    description: '拥有15年专业执教经验，曾担任国家队技术顾问，培养了多名全国青年冠军。擅长技术动作精细化指导，适合各年龄段学员。'
  },
  {
    id: 'coach-002',
    name: '李廷奎',
    title: '单板滑雪国家级教练',
    specialties: ['单板大跳台', '坡面障碍技巧', '单板平行'],
    certifications: ['国家级教练员', 'CASI三级认证', 'AASI认证'],
    experience: 12,
    location: '吉林',
    rating: 4.8,
    students: 380,
    achievements: [
      'U系列赛事技术代表',
      '培养多名省队运动员',
      '全国单板滑雪优秀教练'
    ],
    price: '600-1000元/小时',
    description: '单板滑雪专业教练，曾多次担任全国U系列比赛技术代表。教学风格活泼，深受青少年学员喜爱。'
  },
  {
    id: 'coach-003',
    name: '张雪梅',
    title: '自由式滑雪高级教练',
    specialties: ['自由式坡障', '大跳台', '空中技巧基础'],
    certifications: ['国家一级教练员', 'CSIA三级', '运动康复师'],
    experience: 10,
    location: '黑龙江',
    rating: 4.7,
    students: 280,
    achievements: [
      '省队主教练',
      '全国锦标赛优秀教练',
      '青少年滑雪推广大使'
    ],
    price: '500-800元/小时',
    description: '前省队运动员，转型教练后专注青少年自由式滑雪培训。注重基础功训练和安全意识培养。'
  },
  {
    id: 'coach-004',
    name: '陈志刚',
    title: '青少年滑雪启蒙教练',
    specialties: ['滑雪启蒙', '双板基础', '儿童教学'],
    certifications: ['国家二级教练员', 'CSIA二级', '儿童心理辅导师'],
    experience: 8,
    location: '河北张家口',
    rating: 4.9,
    students: 650,
    achievements: [
      '最受欢迎青少年教练',
      '滑雪冬令营首席教练',
      '零事故安全记录'
    ],
    price: '300-500元/小时',
    description: '专注5-12岁儿童滑雪启蒙教学，教学方法生动有趣，特别擅长让孩子们爱上滑雪。连续5年零安全事故记录。'
  },
  {
    id: 'coach-005',
    name: '衣锦光',
    title: '高山滑雪技术代表',
    specialties: ['高山滑雪', '技术分析', '竞赛指导'],
    certifications: ['国家级教练员', 'FIS技术代表', '国际裁判资格'],
    experience: 20,
    location: '四川成都',
    rating: 4.8,
    students: 200,
    achievements: [
      '全国比赛技术代表',
      '国家队技术分析师',
      '冬运会裁判长'
    ],
    price: '1000-1500元/小时',
    description: '20年高山滑雪执教经验，多次担任全国比赛技术代表和裁判长。擅长运动员技术诊断和竞技水平提升。'
  },
  {
    id: 'coach-006',
    name: '刘洋',
    title: '单板平行项目教练',
    specialties: ['平行大回转', '平行回转', '竞速技术'],
    certifications: ['国家一级教练员', 'SBINZ认证', '运动生理学硕士'],
    experience: 9,
    location: '辽宁沈阳',
    rating: 4.6,
    students: 150,
    achievements: [
      '全国单板平行项目冠军教练',
      '省队技术教练',
      '冬运会铜牌教练'
    ],
    price: '600-900元/小时',
    description: '单板平行项目专项教练，拥有运动生理学背景，能够针对运动员特点制定个性化训练方案。'
  },
  {
    id: 'coach-007',
    name: '赵明远',
    title: '青少年竞技滑雪教练',
    specialties: ['高山滑雪', '回转', '体能训练'],
    certifications: ['国家一级教练员', 'CSIA三级', '运动训练学硕士'],
    experience: 11,
    location: '陕西宝鸡',
    rating: 4.7,
    students: 220,
    achievements: [
      'U系列赛事多名学员获奖',
      '西北地区优秀教练员',
      '省运会金牌教练'
    ],
    price: '400-700元/小时',
    description: '深耕西北地区青少年高山滑雪培训，依托鳌山滑雪场优质雪道资源，培养了大批U系列参赛选手。'
  },
  {
    id: 'coach-008',
    name: '孙晓峰',
    title: '单板坡面障碍技巧教练',
    specialties: ['坡面障碍技巧', '大跳台', '公园滑雪'],
    certifications: ['国家一级教练员', 'CASI二级', 'AASI认证'],
    experience: 7,
    location: '河北张家口',
    rating: 4.8,
    students: 310,
    achievements: [
      '全国单板青年锦标赛带队教练',
      '崇礼地区人气教练',
      '多名学员入选省队'
    ],
    price: '500-800元/小时',
    description: '前单板职业选手，擅长坡面障碍和大跳台技术教学。教学注重安全渐进，从基础道具到高难度跳台逐步进阶。'
  }
]

// 推荐场馆数据（赛事举办地优先，使用真实信息）
export const recommendedVenues: Venue[] = [
  // ===== U系列赛事举办地 =====
  {
    id: 'venue-chengdu',
    name: '成都热雪奇迹',
    type: 'indoor',
    location: '四川成都',
    address: '成都市都江堰市玉堂街道至臻路37号',
    facilities: ['室内雪道', '地形公园', '教学区', '装备租赁', '餐饮', '主题酒店'],
    slopes: { beginner: 3, intermediate: 2, advanced: 1 },
    rating: 4.7,
    reviews: 8600,
    price: '298-598元/场',
    openSeason: '全年开放',
    features: [
      'U系列赛事举办地',
      '西南最大室内雪场',
      '全年恒温-5℃',
      '2个地形公园'
    ],
    isCompetitionVenue: true,
    description: '西南地区最大的室内滑雪场，总建筑面积约8万平方米，拥有7条分级雪道和2个地形公园。2025-2026赛季U系列成都站举办高山滑雪、单板坡障/大跳台、自由式坡障/大跳台5项比赛。'
  },
  {
    id: 'venue-xueruyi',
    name: '雪如意滑雪场',
    type: 'resort',
    location: '河北张家口',
    address: '张家口市崇礼区崇礼奥林匹克公园',
    facilities: ['高速缆车', '吊厢缆车', '青少年训练区', '餐饮商业街', '停车场'],
    slopes: { beginner: 9, intermediate: 13, advanced: 9 },
    elevation: { base: 1500, summit: 1650 },
    rating: 4.8,
    reviews: 5200,
    price: '350-580元/天',
    openSeason: '11月-次年3月',
    features: [
      'U系列赛事举办地',
      '2022冬奥会标志性场馆',
      '31条雪道',
      '3000平米青少年专区'
    ],
    isCompetitionVenue: true,
    description: '国家跳台滑雪中心"雪如意"是2022年北京冬奥会标志性场馆。2024年12月新开放的滑雪场拥有31条雪道，是崇礼第9家滑雪场。2025-2026赛季U系列雪如意站举办单板平行、单板坡障/大跳台、自由式坡障/大跳台5项比赛。'
  },
  {
    id: 'venue-fulong',
    name: '崇礼富龙滑雪场',
    type: 'resort',
    location: '河北张家口',
    address: '张家口市崇礼区098乡道',
    facilities: ['高速缆车', '夜场灯光', '雪具大厅', '酒店', '餐厅', '地形公园'],
    slopes: { beginner: 10, intermediate: 12, advanced: 8 },
    elevation: { base: 1500, summit: 2100 },
    rating: 4.6,
    reviews: 12800,
    price: '380-580元/天',
    openSeason: '11月-次年3月',
    features: [
      'U系列赛事举办地',
      '中国首家城市滑雪场',
      '崇礼唯一夜场',
      '30条雪道'
    ],
    website: 'fulongski.com',
    isCompetitionVenue: true,
    description: '中国首家"城市滑雪场"，距崇礼城区步行仅5分钟，是崇礼唯一提供夜场滑雪的雪场。30条雪道跨3个区域，周围山体环绕形成避风暖场环境。2025-2026赛季U系列富龙站举办单板坡障/大跳台、自由式坡障/大跳台比赛。'
  },
  {
    id: 'venue-songhuahu',
    name: '万科松花湖滑雪场',
    type: 'resort',
    location: '吉林吉林',
    address: '吉林市丰满区大青山青山大街888号',
    facilities: ['吊厢缆车', '高速缆车', '魔毯', '山顶餐厅', '度假酒店', 'FIS认证赛道'],
    slopes: { beginner: 13, intermediate: 8, advanced: 6 },
    elevation: { base: 330, summit: 935 },
    rating: 4.9,
    reviews: 28900,
    price: '430元/天',
    openSeason: '11月-次年3月',
    features: [
      'U系列赛事举办地',
      '8届世界滑雪大奖中国最佳',
      '5条FIS认证赛道',
      '中国最长初级道5.23公里'
    ],
    isCompetitionVenue: true,
    description: '连续8年获得世界滑雪大奖"中国最佳滑雪场"。拥有50条雪道覆盖220公顷，落差605米，5条FIS认证赛道可承办大回转和坡面障碍赛事。距吉林市区仅15公里。2025-2026赛季U系列松花湖站举办高山滑雪比赛。'
  },
  {
    id: 'venue-dongbeiya',
    name: '沈阳东北亚滑雪场',
    type: 'outdoor',
    location: '辽宁沈阳',
    address: '沈阳市沈北新区马刚乡沈阳国家森林公园内',
    facilities: ['缆车', '魔毯', '雪具租赁', '钻石型雪具大厅', '餐饮', '夜场灯光'],
    slopes: { beginner: 5, intermediate: 6, advanced: 5 },
    elevation: { base: 220, summit: 441 },
    rating: 4.5,
    reviews: 9600,
    price: '158-380元/天',
    openSeason: '12月-次年3月',
    features: [
      'U系列赛事举办地',
      '辽宁省最大滑雪场',
      '沈阳最高峰石人山',
      '夜场滑雪'
    ],
    isCompetitionVenue: true,
    description: '辽宁省最大的滑雪场，位于沈阳国家森林公园内，16条雪道总面积35万平方米。拥有获GFDA全球未来设计大奖金奖的钻石型雪具大厅。2025-2026赛季U系列沈阳站举办单板平行项目比赛。'
  },
  {
    id: 'venue-aoshan',
    name: '鳌山滑雪度假区',
    type: 'resort',
    location: '陕西宝鸡',
    address: '宝鸡市太白县咀头镇塘口村',
    facilities: ['缆车', '魔毯', '雪具大厅', '云端森林酒店', '造雪系统', '滑雪学校'],
    slopes: { beginner: 5, intermediate: 5, advanced: 8 },
    elevation: { base: 1500, summit: 2600 },
    rating: 4.6,
    reviews: 6800,
    price: '229-499元/天',
    openSeason: '11月-次年3月',
    features: [
      'U系列赛事举办地',
      '秦岭高海拔雪场',
      '最大落差1100米',
      '36条雪道'
    ],
    isCompetitionVenue: true,
    description: '位于秦岭腹地太白县，海拔1500-2600米，是中国高海拔滑雪场之一。占地17000亩，36条雪道总长约31公里，最大落差约1100米。2025-2026赛季U系列鳌山站举办高山滑雪大回转和回转比赛。'
  },
  // ===== 其他知名雪场 =====
  {
    id: 'venue-wanlong',
    name: '万龙滑雪场',
    type: 'resort',
    location: '河北张家口',
    address: '张家口市崇礼区红花梁',
    facilities: ['高速缆车', '雪具大厅', '山顶酒店', '餐厅', '医疗站', '滑雪学校'],
    slopes: { beginner: 5, intermediate: 4, advanced: 23 },
    elevation: { base: 1560, summit: 2110 },
    rating: 4.8,
    reviews: 15680,
    price: '460-680元/天',
    openSeason: '10月底-次年4月',
    features: [
      '中国唯一朝北雪场',
      '32条雪道',
      '崇礼最长雪季',
      '粉雪天堂'
    ],
    website: 'wanlongski.com',
    description: '中国唯一朝北滑雪场，以粉雪闻名，被称为"中国粉雪天堂"。32条雪道中23条为高级道，是崇礼开业最早的高端雪场。雪季从10月底持续到次年4月，为崇礼最长。多支国家队在此训练。'
  },
  {
    id: 'venue-beidahu',
    name: '北大湖滑雪度假区',
    type: 'resort',
    location: '吉林吉林',
    address: '吉林市永吉县北大湖镇',
    facilities: ['吊厢缆车', '高速缆车', '魔毯', 'Club Med度假村', '跳台', '医疗中心'],
    slopes: { beginner: 15, intermediate: 39, advanced: 10 },
    elevation: { base: 540, summit: 1408 },
    rating: 4.8,
    reviews: 22500,
    price: '450-680元/天',
    openSeason: '11月-次年4月',
    features: [
      '亚洲最大有效落差870米',
      '64-74条雪道',
      '亚冬会比赛场地',
      'FIS世界杯举办地'
    ],
    website: 'beidahu.com',
    description: '亚洲最大的单体滑雪度假区，拥有亚洲最大有效落差870米，64-74条雪道覆盖275公顷。曾举办第6届亚冬会、3届全国冬运会和多项FIS世界杯赛事，被国际雪联官员称为"中国的惠斯勒"。'
  },
  {
    id: 'venue-yabuli',
    name: '亚布力滑雪旅游度假区',
    type: 'resort',
    location: '黑龙江哈尔滨',
    address: '哈尔滨市尚志市亚布力镇金牌大道84号',
    facilities: ['三山联网缆车', '跳台', '运动员公寓', '度假酒店', '餐饮', '医疗站'],
    slopes: { beginner: 11, intermediate: 20, advanced: 8 },
    elevation: { base: 460, summit: 1374 },
    rating: 4.6,
    reviews: 18200,
    price: '169-580元/天',
    openSeason: '11月-次年3月',
    features: [
      '中国滑雪发源地',
      '三山联网56条雪道',
      '2025亚冬会赛场',
      '国家队训练基地'
    ],
    website: 'yabuliski.com',
    description: '中国竞技滑雪发源地，1996年举办第3届亚冬会。"三山联网"工程连通三座山峰，56条雪道总长88.8公里，最大落差912米。2025年第9届亚冬会雪上项目举办地，被誉为"中国雪之门"。'
  }
]

// 推荐俱乐部数据
export const recommendedClubs: Club[] = [
  {
    id: 'club-001',
    name: '北京冬季运动管理中心青训营',
    type: 'professional',
    location: '北京',
    founded: 2008,
    members: 350,
    disciplines: ['高山滑雪', '自由式滑雪', '单板滑雪'],
    achievements: [
      '培养多名国家队队员',
      '全国青少年锦标赛团体冠军',
      '冬奥会人才输送基地'
    ],
    coaches: 25,
    ageGroups: ['U11', 'U15', 'U18', '成年'],
    fee: '年费12000-25000元',
    description: '北京市青少年滑雪培训机构，曾向国家队输送多名运动员。'
  },
  {
    id: 'club-002',
    name: '吉林省雪上运动俱乐部',
    type: 'professional',
    location: '吉林长春',
    founded: 2005,
    members: 280,
    disciplines: ['单板滑雪', '自由式滑雪'],
    achievements: [
      '全国单板锦标赛冠军俱乐部',
      '省队人才基地',
      '全国青少年比赛金牌大户'
    ],
    coaches: 18,
    ageGroups: ['U11', 'U15', 'U18'],
    fee: '年费8000-18000元',
    description: '东北地区单板和自由式滑雪俱乐部，依托松花湖、北大湖雪场资源开展培训。'
  },
  {
    id: 'club-003',
    name: '张家口崇礼滑雪俱乐部',
    type: 'amateur',
    location: '河北张家口',
    founded: 2015,
    members: 520,
    disciplines: ['高山滑雪', '单板滑雪'],
    achievements: [
      'U系列比赛常客',
      '崇礼地区最大俱乐部',
      '冬奥遗产推广单位'
    ],
    coaches: 30,
    ageGroups: ['U11', 'U15', 'U18', '成年', '亲子'],
    fee: '年费5000-12000元',
    description: '崇礼地区规模最大的滑雪俱乐部，充分利用冬奥场馆资源，在富龙、万龙、雪如意等多个雪场开展训练。'
  },
  {
    id: 'club-004',
    name: '成都热雪青少年滑雪学校',
    type: 'youth',
    location: '四川成都',
    founded: 2019,
    members: 380,
    disciplines: ['单板滑雪', '高山滑雪', '自由式滑雪'],
    achievements: [
      '西南地区领先青训机构',
      'U系列比赛优秀组织单位',
      '全年训练不间断'
    ],
    coaches: 22,
    ageGroups: ['U11', 'U15', 'U18'],
    fee: '年费6000-15000元',
    description: '依托成都热雪奇迹室内滑雪场，实现全年不间断训练。是西南地区青少年滑雪培训的领军机构。'
  },
  {
    id: 'club-005',
    name: '哈尔滨冰雪运动学校',
    type: 'school',
    location: '黑龙江哈尔滨',
    founded: 1985,
    members: 450,
    disciplines: ['高山滑雪', '越野滑雪', '跳台滑雪'],
    achievements: [
      '国家级体育传统项目学校',
      '培养多名世界冠军',
      '中国滑雪人才摇篮'
    ],
    coaches: 35,
    ageGroups: ['U11', 'U15', 'U18'],
    fee: '义务教育免费 / 专业队择优录取',
    description: '中国历史最悠久的滑雪运动学校，被誉为"世界冠军的摇篮"。采用体教融合模式，文化学习与专业训练并重。'
  },
  {
    id: 'club-006',
    name: '上海冰雪之星滑雪俱乐部',
    type: 'amateur',
    location: '上海',
    founded: 2018,
    members: 680,
    disciplines: ['单板滑雪', '双板滑雪'],
    achievements: [
      '华东地区会员最多',
      '滑雪冬令营品牌',
      '亲子滑雪推广先锋'
    ],
    coaches: 15,
    ageGroups: ['儿童', 'U11', 'U15', '成年', '亲子'],
    fee: '年费3000-8000元',
    description: '华东地区规模最大的滑雪爱好者俱乐部，组织各类滑雪活动和冬令营。特别适合南方家庭的滑雪启蒙。'
  }
]

// 统计数据
export const recommendationStats = {
  totalCoaches: recommendedCoaches.length,
  totalVenues: recommendedVenues.length,
  totalClubs: recommendedClubs.length,
  totalStudents: recommendedCoaches.reduce((sum, c) => sum + c.students, 0),
  totalMembers: recommendedClubs.reduce((sum, c) => sum + c.members, 0)
}
