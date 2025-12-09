const fs = require('fs');
const path = require('path');

async function parseAlpineResults(pdfPath) {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  const results = {
    competition: '2025-2026赛季全国高山滑雪U系列比赛（成都站）',
    sport: '高山滑雪',
    sportType: 'alpine',
    location: '成都热雪奇迹室内滑雪场',
    date: '2025-11-24',
    endDate: '2025-11-28',
    status: 'completed',
    events: []
  };

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    const items = textContent.items
      .filter(item => 'str' in item && 'transform' in item)
      .map(item => ({
        str: item.str.trim(),
        x: Math.round(item.transform[4]),
        y: Math.round(item.transform[5])
      }))
      .filter(item => item.str.length > 0);

    // 按Y坐标分行
    const rows = {};
    items.forEach(item => {
      const yKey = Math.round(item.y / 5) * 5;
      if (!rows[yKey]) rows[yKey] = [];
      rows[yKey].push(item);
    });

    const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a);
    const pageLines = sortedYs.map(y => {
      const row = rows[y];
      row.sort((a, b) => a.x - b.x);
      return row.map(r => r.str).join(' ');
    });

    const pageText = pageLines.join(' ');

    // 只处理"总成绩"页面
    if (!pageText.includes('总成绩') || pageText.includes('出发顺序')) continue;

    // 提取年龄组和性别
    let ageGroup = '';
    let gender = '';
    let discipline = '';

    // 匹配项目信息
    const groupMatch = pageText.match(/(U\d+)(男子|女子)组?(回转|大回转|超级大回转|滑降)/);
    if (groupMatch) {
      ageGroup = groupMatch[1];
      gender = groupMatch[2] + '组';
      discipline = groupMatch[3];
    }

    if (!ageGroup || !discipline) continue;

    // 提取运动员成绩
    const athletes = [];

    // 逐行处理
    pageLines.forEach((line, idx) => {
      // 匹配成绩行: 数字开头，名次 号码 姓名 单位 第一次成绩 第二次成绩 总成绩 差值
      // 格式: 1 39 李金润 四川体育职业学院 29.56 29.88 59.44 0.00
      // 或: 2 7 杨蓝戈 个人 30.70 30.74 1:01.44 2.00
      const match = line.match(/^(\d+)\s+(\d+)\s+(\S+)\s+(.+?)\s+([\d:.]+)\s+([\d:.]+)\s+([\d:.]+)\s+([\d:.]+)$/);
      if (match) {
        const rank = parseInt(match[1]);
        const bib = parseInt(match[2]);
        const name = match[3];
        const team = match[4].trim();
        const run1 = match[5];
        const run2 = match[6];
        const totalTime = match[7];
        const diff = match[8];

        if (rank <= 50) {
          athletes.push({
            rank,
            bib,
            name,
            team,
            run1,
            run2,
            time: totalTime,
            diff
          });
        }
      }
    });

    if (athletes.length > 0) {
      // 检查是否已存在这个项目
      const existingEvent = results.events.find(e =>
        e.discipline === discipline && e.ageGroup === ageGroup && e.gender === gender
      );

      if (!existingEvent) {
        results.events.push({
          discipline,
          ageGroup,
          gender,
          athletes: athletes.slice(0, 10)
        });
      }
    }
  }

  return results;
}

async function parseSnowboardResults(pdfPath) {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  const results = {
    competition: '2025-2026赛季单板滑雪大跳台U系列比赛（成都站）',
    sport: '单板滑雪大跳台',
    sportType: 'snowboard-slopestyle',
    location: '成都热雪奇迹室内滑雪场',
    date: '2025-11-22',
    endDate: '2025-11-25',
    status: 'completed',
    events: []
  };

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    const items = textContent.items
      .filter(item => 'str' in item && 'transform' in item)
      .map(item => ({
        str: item.str.trim(),
        x: Math.round(item.transform[4]),
        y: Math.round(item.transform[5])
      }))
      .filter(item => item.str.length > 0);

    // 按Y坐标分行
    const rows = {};
    items.forEach(item => {
      const yKey = Math.round(item.y / 3) * 3; // 更精确的分行
      if (!rows[yKey]) rows[yKey] = [];
      rows[yKey].push(item);
    });

    const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a);
    const pageLines = sortedYs.map(y => {
      const row = rows[y];
      row.sort((a, b) => a.x - b.x);
      return row.map(r => r.str).join(' ');
    });

    const pageText = pageLines.join(' ');

    // 只处理"成 绩 公 告"页面
    if (!pageText.includes('成 绩 公 告')) continue;

    // 提取年龄组和性别
    let ageGroup = '';
    let gender = '';

    const groupMatch = pageText.match(/(U\d+)(男子|女子)组?/);
    if (groupMatch) {
      ageGroup = groupMatch[1];
      gender = groupMatch[2] + '组';
    }

    if (!ageGroup) continue;

    // 提取运动员成绩
    const athletes = [];
    let currentAthlete = null;

    // 逐行处理，寻找成绩行
    pageLines.forEach((line, idx) => {
      // 匹配成绩行首行: 名次 号码 姓名 单位 出生年 站姿 轮次 J1-J5 得分 最终成绩 积分
      // 格式: 1 4 孙嘉怡 河北省体育局冬季运动中 2015 R 1 77 78 76 75 73 75.80 150.40 360
      const mainMatch = line.match(/^(\d+)\s+(\d+)\s+(\S+)\s+(.+?)\s+(\d{4})\s+([RG])\s+(\d)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+([\d.]+)\s+([\d.]+)\s+(\d+)$/);
      if (mainMatch) {
        const rank = parseInt(mainMatch[1]);
        const bib = parseInt(mainMatch[2]);
        const name = mainMatch[3];
        const team = mainMatch[4].trim();
        const birthYear = mainMatch[5];
        const stance = mainMatch[6];
        const bestScore = parseFloat(mainMatch[14]);
        const points = parseInt(mainMatch[15]);

        if (rank <= 50) {
          athletes.push({
            rank,
            bib,
            name,
            team,
            birthYear,
            bestScore,
            points
          });
        }
      }
    });

    if (athletes.length > 0) {
      const existingEvent = results.events.find(e =>
        e.ageGroup === ageGroup && e.gender === gender
      );

      if (!existingEvent) {
        results.events.push({
          discipline: '大跳台',
          ageGroup,
          gender,
          athletes: athletes.slice(0, 10)
        });
      }
    }
  }

  return results;
}

async function main() {
  console.log('解析高山滑雪成绩...');
  const alpineResults = await parseAlpineResults(
    path.join(__dirname, '..', 'score1.pdf')
  );
  console.log('高山滑雪项目数:', alpineResults.events.length);
  alpineResults.events.forEach(e => {
    console.log(`  - ${e.discipline} ${e.ageGroup} ${e.gender}: ${e.athletes.length}人`);
  });

  console.log('\n解析单板大跳台成绩...');
  const snowboardResults = await parseSnowboardResults(
    path.join(__dirname, '..', 'score2.pdf')
  );
  console.log('单板大跳台项目数:', snowboardResults.events.length);
  snowboardResults.events.forEach(e => {
    console.log(`  - ${e.discipline} ${e.ageGroup} ${e.gender}: ${e.athletes.length}人`);
  });

  // 生成数据文件
  const allResults = {
    lastUpdated: new Date().toISOString().split('T')[0],
    competitions: [snowboardResults, alpineResults]
  };

  const output = `// 最新比赛成绩数据
// 数据来源: 官方成绩公告PDF
// 生成时间: ${new Date().toISOString().split('T')[0]}

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

export const latestResults: ResultsData = ${JSON.stringify(allResults, null, 2)};

// 获取最新完成的比赛
export const recentCompetitions = latestResults.competitions.filter(c => c.status === 'completed');

// 按项目类型分组
export const resultsBySport = {
  alpine: latestResults.competitions.filter(c => c.sportType === 'alpine'),
  'snowboard-slopestyle': latestResults.competitions.filter(c => c.sportType === 'snowboard-slopestyle'),
  'freestyle-slopestyle': latestResults.competitions.filter(c => c.sportType === 'freestyle-slopestyle'),
  'snowboard-parallel': latestResults.competitions.filter(c => c.sportType === 'snowboard-parallel')
};
`;

  const dataDir = path.join(__dirname, '../src/data');
  fs.writeFileSync(path.join(dataDir, 'latestResults.ts'), output);
  console.log('\n已生成 src/data/latestResults.ts');
}

main().catch(console.error);
