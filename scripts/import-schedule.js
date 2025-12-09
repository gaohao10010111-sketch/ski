const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const wb = XLSX.readFile('plan.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(ws, {header: 1});

// 解析日期
function parseDate(dateStr) {
  if (!dateStr) return { start: '', end: '' };
  const str = dateStr.toString().trim();

  // 匹配各种日期格式
  const match1 = str.match(/(\d{4})年(\d{1,2})月(\d{1,2})[日至\-]+(\d{1,2})日/);
  const match2 = str.match(/(\d{4})年(\d{1,2})月(\d{1,2})[日至\-]+(\d{1,2})月(\d{1,2})日/);
  const match3 = str.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);

  if (match2) {
    const year = match2[1];
    const startMonth = match2[2].padStart(2, '0');
    const startDay = match2[3].padStart(2, '0');
    const endMonth = match2[4].padStart(2, '0');
    const endDay = match2[5].padStart(2, '0');
    return {
      start: year + '-' + startMonth + '-' + startDay,
      end: year + '-' + endMonth + '-' + endDay
    };
  }

  if (match1) {
    const year = match1[1];
    const month = match1[2].padStart(2, '0');
    const startDay = match1[3].padStart(2, '0');
    const endDay = match1[4].padStart(2, '0');
    return {
      start: year + '-' + month + '-' + startDay,
      end: year + '-' + month + '-' + endDay
    };
  }

  if (match3) {
    const year = match3[1];
    const month = match3[2].padStart(2, '0');
    const day = match3[3].padStart(2, '0');
    return {
      start: year + '-' + month + '-' + day,
      end: year + '-' + month + '-' + day
    };
  }

  return { start: str, end: str };
}

// 分类关键词
const categoryKeywords = {
  'alpine': ['高山滑雪'],
  'snowboard-slopestyle': ['单板滑雪大跳台', '单板滑雪坡面障碍'],
  'freestyle-slopestyle': ['自由式滑雪大跳台', '自由式滑雪坡面障碍'],
  'snowboard-parallel': ['单板滑雪平行'],
  'freestyle-aerials': ['自由式滑雪空中技巧'],
  'freestyle-moguls': ['自由式滑雪雪上技巧'],
  'freestyle-halfpipe': ['自由式滑雪U型场地'],
  'snowboard-halfpipe': ['单板滑雪U型场地'],
  'snowboard-cross': ['单板滑雪障碍追逐'],
  'freestyle-cross': ['自由式滑雪障碍追逐'],
  'cross-country': ['越野滑雪'],
  'biathlon': ['冬季两项'],
  'nordic-combined': ['北欧两项'],
  'short-track': ['短道速滑'],
  'speed-skating': ['速度滑冰'],
  'curling': ['冰壶'],
  'figure-skating': ['花样滑冰'],
  'bobsled': ['雪车', '钢架雪车'],
  'luge': ['雪橇']
};

const ourCategories = ['alpine', 'snowboard-slopestyle', 'freestyle-slopestyle', 'snowboard-parallel'];

const events = [];
for (let i = 2; i < data.length; i++) {
  const row = data[i];
  if (row.length >= 5 && row[0]) {
    const sport = (row[1] || '').toString().trim().replace(/\n/g, '');
    const name = (row[2] || '').toString().trim().replace(/\n/g, '');
    const dates = parseDate(row[3]);

    // 确定类别
    let category = 'other';
    for (const [cat, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(k => sport.includes(k) || name.includes(k))) {
        category = cat;
        break;
      }
    }

    events.push({
      id: Number(row[0]),
      sport: sport,
      name: name,
      startDate: dates.start,
      endDate: dates.end,
      organizer: (row[4] || '').toString().trim().replace(/\n/g, ''),
      location: (row[5] || '').toString().trim(),
      category: category,
      isOurs: ourCategories.includes(category),
      status: 'upcoming'
    });
  }
}

// 确保目录存在
const dataDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 生成TypeScript代码
const output = `// 2025-2026赛季全国冬季项目赛事日历
// 数据来源: 国家体育总局冬季运动管理中心
// 生成时间: ${new Date().toISOString().split('T')[0]}

export interface Competition {
  id: number
  sport: string
  name: string
  startDate: string
  endDate: string
  organizer: string
  location: string
  category: string
  isOurs: boolean
  status: 'upcoming' | 'ongoing' | 'completed'
}

// 全部赛事数据 (共${events.length}场)
export const competitionSchedule2025: Competition[] = ${JSON.stringify(events, null, 2)};

// 我们系统相关的赛事（四大项目，共${events.filter(e => e.isOurs).length}场）
export const ourCompetitions = competitionSchedule2025.filter(e => e.isOurs);

// 按项目分类的赛事
export const competitionsByCategory = {
  // ★ 我们的四大项目
  alpine: competitionSchedule2025.filter(e => e.category === 'alpine'),
  'snowboard-slopestyle': competitionSchedule2025.filter(e => e.category === 'snowboard-slopestyle'),
  'freestyle-slopestyle': competitionSchedule2025.filter(e => e.category === 'freestyle-slopestyle'),
  'snowboard-parallel': competitionSchedule2025.filter(e => e.category === 'snowboard-parallel'),

  // 其他滑雪项目
  'freestyle-aerials': competitionSchedule2025.filter(e => e.category === 'freestyle-aerials'),
  'freestyle-moguls': competitionSchedule2025.filter(e => e.category === 'freestyle-moguls'),
  'freestyle-halfpipe': competitionSchedule2025.filter(e => e.category === 'freestyle-halfpipe'),
  'snowboard-halfpipe': competitionSchedule2025.filter(e => e.category === 'snowboard-halfpipe'),
  'snowboard-cross': competitionSchedule2025.filter(e => e.category === 'snowboard-cross'),
  'freestyle-cross': competitionSchedule2025.filter(e => e.category === 'freestyle-cross'),
  'cross-country': competitionSchedule2025.filter(e => e.category === 'cross-country'),
  'biathlon': competitionSchedule2025.filter(e => e.category === 'biathlon'),
  'nordic-combined': competitionSchedule2025.filter(e => e.category === 'nordic-combined'),

  // 冰上项目
  'short-track': competitionSchedule2025.filter(e => e.category === 'short-track'),
  'speed-skating': competitionSchedule2025.filter(e => e.category === 'speed-skating'),
  'curling': competitionSchedule2025.filter(e => e.category === 'curling'),
  'figure-skating': competitionSchedule2025.filter(e => e.category === 'figure-skating'),

  // 雪车雪橇
  'bobsled': competitionSchedule2025.filter(e => e.category === 'bobsled'),
  'luge': competitionSchedule2025.filter(e => e.category === 'luge'),

  // 其他
  'other': competitionSchedule2025.filter(e => e.category === 'other')
};

// 项目中文名映射
export const categoryNames: Record<string, string> = {
  'alpine': '高山滑雪',
  'snowboard-slopestyle': '单板坡面障碍技巧/大跳台',
  'freestyle-slopestyle': '自由式坡面障碍技巧/大跳台',
  'snowboard-parallel': '单板平行项目',
  'freestyle-aerials': '自由式空中技巧',
  'freestyle-moguls': '自由式雪上技巧',
  'freestyle-halfpipe': '自由式U型场地',
  'snowboard-halfpipe': '单板U型场地',
  'snowboard-cross': '单板障碍追逐',
  'freestyle-cross': '自由式障碍追逐',
  'cross-country': '越野滑雪',
  'biathlon': '冬季两项',
  'nordic-combined': '北欧两项',
  'short-track': '短道速滑',
  'speed-skating': '速度滑冰',
  'curling': '冰壶',
  'figure-skating': '花样滑冰',
  'bobsled': '雪车/钢架雪车',
  'luge': '雪橇',
  'other': '其他'
};
`;

fs.writeFileSync(path.join(dataDir, 'competitionSchedule.ts'), output);
console.log('已生成 src/data/competitionSchedule.ts');
console.log('总赛事:', events.length);
console.log('我们相关:', events.filter(e => e.isOurs).length);

// 统计各类别
const stats = {};
events.forEach(e => {
  stats[e.category] = (stats[e.category] || 0) + 1;
});
console.log('\n各类别统计:');
Object.entries(stats).sort((a,b) => b[1] - a[1]).forEach(([k,v]) => {
  const mark = ourCategories.includes(k) ? '★' : ' ';
  console.log('  ' + mark + ' ' + k + ': ' + v + '场');
});
