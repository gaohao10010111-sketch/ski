// 教练、场馆、俱乐部推荐数据
// 生成时间: 2025-12-09

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
    location: '内蒙古',
    rating: 4.6,
    students: 150,
    achievements: [
      '全国单板平行项目冠军教练',
      '省队技术教练',
      '冬运会铜牌教练'
    ],
    price: '600-900元/小时',
    description: '单板平行项目专项教练，拥有运动生理学背景，能够针对运动员特点制定个性化训练方案。'
  }
]

// 推荐场馆数据
export const recommendedVenues: Venue[] = [
  {
    id: 'venue-001',
    name: '成都热雪奇迹室内滑雪场',
    type: 'indoor',
    location: '四川成都',
    address: '成都市天府新区',
    facilities: ['室内雪道', '教学区', '装备租赁', '餐饮', '休息区', '更衣室'],
    slopes: { beginner: 2, intermediate: 2, advanced: 1 },
    rating: 4.7,
    reviews: 2580,
    price: '288-488元/场',
    openSeason: '全年开放',
    features: [
      '西南最大室内滑雪场',
      '全年恒温-5℃',
      'U系列赛事举办地',
      '专业教练团队'
    ],
    description: '西南地区最大的室内滑雪场，是全国U系列比赛指定场地。拥有多条不同难度雪道，适合各水平滑雪爱好者。'
  },
  {
    id: 'venue-002',
    name: '崇礼万龙滑雪场',
    type: 'resort',
    location: '河北张家口',
    address: '张家口市崇礼区红花梁',
    facilities: ['高速缆车', '魔毯', '雪具大厅', '酒店', '餐厅', '医疗站'],
    slopes: { beginner: 8, intermediate: 15, advanced: 9 },
    elevation: { base: 1620, summit: 2110 },
    rating: 4.8,
    reviews: 15680,
    price: '460-680元/天',
    openSeason: '11月-次年4月',
    features: [
      '华北最大滑雪场',
      '32条雪道',
      '最大落差490米',
      '国际赛事场地'
    ],
    website: 'www.wanlongski.com',
    description: '华北地区规模最大、设施最完善的滑雪度假区。多次承办国际国内重要赛事，是专业运动员训练首选。'
  },
  {
    id: 'venue-003',
    name: '长白山万达国际度假区',
    type: 'resort',
    location: '吉林白山',
    address: '白山市抚松县松江河镇',
    facilities: ['缆车系统', '雪具店', '五星酒店', '温泉', '儿童乐园', '医疗中心'],
    slopes: { beginner: 10, intermediate: 18, advanced: 15 },
    elevation: { base: 1050, summit: 1400 },
    rating: 4.9,
    reviews: 28900,
    price: '520-880元/天',
    openSeason: '11月-次年3月',
    features: [
      '亚洲一流滑雪度假区',
      '43条雪道',
      '天然优质粉雪',
      '完善配套设施'
    ],
    website: 'www.cbmski.com',
    description: '亚洲顶级滑雪度假区，拥有天然优质粉雪和完善的度假配套。是家庭滑雪度假和专业训练的理想选择。'
  },
  {
    id: 'venue-004',
    name: '北京南山滑雪场',
    type: 'outdoor',
    location: '北京密云',
    address: '北京市密云区河南寨镇',
    facilities: ['缆车', '魔毯', '雪具租赁', '滑雪学校', '餐厅', '停车场'],
    slopes: { beginner: 6, intermediate: 8, advanced: 4 },
    elevation: { base: 300, summit: 450 },
    rating: 4.5,
    reviews: 32500,
    price: '280-450元/天',
    openSeason: '12月-次年2月',
    features: [
      '北京最近滑雪场',
      '交通便利',
      '夜场滑雪',
      '教学体系完善'
    ],
    description: '距北京市区最近的大型滑雪场，交通便利，是北京市民周末滑雪首选。拥有完善的教学体系和夜场服务。'
  },
  {
    id: 'venue-005',
    name: '亚布力新体委滑雪场',
    type: 'resort',
    location: '黑龙江哈尔滨',
    address: '哈尔滨市尚志市亚布力镇',
    facilities: ['高山缆车', '专业赛道', '运动员村', '康复中心', '餐饮住宿'],
    slopes: { beginner: 5, intermediate: 12, advanced: 8 },
    elevation: { base: 450, summit: 1374 },
    rating: 4.6,
    reviews: 18200,
    price: '380-580元/天',
    openSeason: '11月-次年4月',
    features: [
      '中国滑雪发源地',
      '国家队训练基地',
      '亚冬会场地',
      '雪期长达150天'
    ],
    description: '中国滑雪运动发源地，国家滑雪队训练基地。拥有悠久历史和专业级赛道，是专业运动员的摇篮。'
  },
  {
    id: 'venue-006',
    name: '广州融创雪世界',
    type: 'indoor',
    location: '广东广州',
    address: '广州市花都区凤凰北路',
    facilities: ['室内雪道', '冰雪乐园', '教学中心', '餐饮购物', '主题酒店'],
    slopes: { beginner: 3, intermediate: 2, advanced: 1 },
    rating: 4.4,
    reviews: 45600,
    price: '258-428元/场',
    openSeason: '全年开放',
    features: [
      '华南最大室内雪场',
      '全年零下5度',
      '适合亲子体验',
      '南方滑雪启蒙基地'
    ],
    description: '华南地区最大的室内滑雪场，让南方人也能体验滑雪乐趣。特别适合滑雪入门和亲子家庭体验。'
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
    ageGroups: ['U12', 'U15', 'U18', '成年'],
    fee: '年费12000-25000元',
    description: '北京市官方青少年滑雪培训机构，拥有最专业的教练团队和训练体系。已向国家队输送多名优秀运动员。'
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
    description: '东北地区最专业的单板和自由式滑雪俱乐部，依托长白山优质雪资源，培养了大批优秀青少年运动员。'
  },
  {
    id: 'club-003',
    name: '张家口乔与杨滑雪俱乐部',
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
    ageGroups: ['U12', 'U15', 'U18', '成年', '亲子'],
    fee: '年费5000-12000元',
    description: '崇礼地区规模最大的滑雪俱乐部，充分利用冬奥场馆资源，提供专业训练和休闲滑雪服务。'
  },
  {
    id: 'club-004',
    name: '成都热雪青少年滑雪学校',
    type: 'youth',
    location: '四川成都',
    founded: 2019,
    members: 380,
    disciplines: ['单板滑雪', '高山滑雪'],
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
    ageGroups: ['U12', 'U15', 'U18'],
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
    ageGroups: ['儿童', 'U12', 'U15', '成年', '亲子'],
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
