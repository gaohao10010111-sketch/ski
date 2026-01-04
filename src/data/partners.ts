/**
 * 合作伙伴数据配置
 *
 * 按比赛项目分类：
 * - alpine: 高山滑雪
 * - snowboard-parallel: 单板平行项目
 * - snowboard-slopestyle: 单板大跳台/坡面障碍技巧
 * - freestyle-slopestyle: 自由式大跳台/坡面障碍技巧
 */

export interface Partner {
  id: string;
  name: string;
  nameEn?: string;
  logo: string;  // logo图片路径，如果没有则使用占位符
  url?: string;  // 官网链接
  type: 'organizer' | 'host' | 'brand' | 'resort';  // 主办方/承办方/合作品牌/合作雪场
}

export interface SportPartners {
  organizers: Partner[];    // 主办方
  hosts: Partner[];         // 承办方
  brands: Partner[];        // 合作品牌
  resorts: Partner[];       // 合作雪场
}

// 通用合作伙伴（所有项目共享）
export const commonPartners = {
  // 主办方 - 中国滑雪协会
  csa: {
    id: 'csa',
    name: '中国滑雪协会',
    nameEn: 'Chinese Ski Association',
    logo: '/logos/csa.jpg',
    url: 'http://www.ski.org.cn/',
    type: 'organizer' as const,
  },
  // 承办方 - 华体冰雪
  huati: {
    id: 'huati',
    name: '华体冰雪',
    nameEn: 'Huati Ice & Snow',
    logo: '/logos/huati.png',  // 需要转换AI文件
    url: 'http://www.cnsgroup.cn/',
    type: 'host' as const,
  },
};

// 合作品牌
export const brandPartners = {
  liski: {
    id: 'liski',
    name: 'Liski',
    nameEn: 'Liski Sport Equipment',
    logo: '/logos/liski.png',
    url: 'https://www.liski.it/',
    type: 'brand' as const,
  },
  taigeling: {
    id: 'taigeling',
    name: '泰格岭',
    nameEn: 'Taigeling',
    logo: '/logos/taigeling.png',  // 需要补充
    type: 'brand' as const,
  },
};

// 合作雪场
export const resortPartners = {
  rexueqiji: {
    id: 'rexueqiji',
    name: '热雪奇迹',
    nameEn: 'Bonski',
    logo: '/logos/rexueqiji.png',
    url: 'https://www.bonski.com.cn/',
    type: 'resort' as const,
  },
  songhuahu: {
    id: 'songhuahu',
    name: '松花湖度假区',
    nameEn: 'Lake Songhua Resort',
    logo: '/logos/songhuahu.jpg',
    url: 'https://www.lakesonghua.com/',
    type: 'resort' as const,
  },
  // aoshan: {
  //   id: 'aoshan',
  //   name: '陕西鳌山滑雪场',
  //   nameEn: 'Aoshan Ski Resort',
  //   logo: '/logos/aoshan.png',  // 待补充logo后启用
  //   type: 'resort' as const,
  // },
  xueruyi: {
    id: 'xueruyi',
    name: '雪如意滑雪场',
    nameEn: 'National Ski Jumping Center',
    logo: '/logos/xueruyi.png',  // 需要补充
    type: 'resort' as const,
  },
  // dongbeiya: {
  //   id: 'dongbeiya',
  //   name: '沈阳东北亚滑雪场',
  //   nameEn: 'Northeast Asia Ski Resort',
  //   logo: '/logos/dongbeiya.png',  // 待补充logo后启用
  //   type: 'resort' as const,
  // },
  // yunding: {
  //   id: 'yunding',
  //   name: '云顶滑雪场',
  //   nameEn: 'Genting Resort Secret Garden',
  //   logo: '/logos/yunding.png',  // 待补充logo后启用
  //   type: 'resort' as const,
  // },
  fulong: {
    id: 'fulong',
    name: '富龙滑雪场',
    nameEn: 'Fulong Ski Resort',
    logo: '/logos/fulong.png',  // 需要补充
    type: 'resort' as const,
  },
};

/**
 * 按比赛项目分组的合作伙伴
 */
export const sportPartnersMap: Record<string, SportPartners> = {
  // 高山滑雪
  alpine: {
    organizers: [commonPartners.csa],
    hosts: [commonPartners.huati],
    brands: [brandPartners.liski],
    resorts: [
      resortPartners.rexueqiji,
      resortPartners.songhuahu,
      // resortPartners.aoshan,  // 待补充logo后启用
    ],
  },

  // 单板平行项目
  'snowboard-parallel': {
    organizers: [commonPartners.csa],
    hosts: [commonPartners.huati],
    brands: [brandPartners.liski],
    resorts: [
      resortPartners.xueruyi,
      // resortPartners.dongbeiya,  // 待补充logo后启用
      // resortPartners.yunding,    // 待补充logo后启用
    ],
  },

  // 单板大跳台/坡面障碍技巧
  'snowboard-slopestyle': {
    organizers: [commonPartners.csa],
    hosts: [commonPartners.huati],
    brands: [brandPartners.taigeling],
    resorts: [
      resortPartners.fulong,
      resortPartners.xueruyi,
    ],
  },

  // 自由式大跳台/坡面障碍技巧
  'freestyle-slopestyle': {
    organizers: [commonPartners.csa],
    hosts: [commonPartners.huati],
    brands: [brandPartners.taigeling],
    resorts: [
      resortPartners.fulong,
      resortPartners.xueruyi,
    ],
  },
};

/**
 * 获取指定项目的合作伙伴
 */
export function getPartnersBySport(sportType: string): SportPartners {
  return sportPartnersMap[sportType] || {
    organizers: [commonPartners.csa],
    hosts: [commonPartners.huati],
    brands: [],
    resorts: [],
  };
}

/**
 * 获取所有合作伙伴（去重）
 */
export function getAllPartners(): Partner[] {
  const allPartners: Partner[] = [];
  const seenIds = new Set<string>();

  Object.values(sportPartnersMap).forEach(sport => {
    [...sport.organizers, ...sport.hosts, ...sport.brands, ...sport.resorts].forEach(partner => {
      if (!seenIds.has(partner.id)) {
        seenIds.add(partner.id);
        allPartners.push(partner);
      }
    });
  });

  return allPartners;
}

/**
 * 类型标签映射
 */
export const partnerTypeLabels: Record<Partner['type'], string> = {
  organizer: '主办单位',
  host: '承办单位',
  brand: '合作品牌',
  resort: '合作雪场',
};
