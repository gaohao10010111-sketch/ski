const fs = require('fs');
const path = require('path');

async function testFullParsing() {
  // 动态导入 pdfjs-dist
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  // 读取 PDF 文件
  const pdfPath = path.join(__dirname, '..', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));

  // 加载 PDF
  const pdf = await pdfjs.getDocument({ data }).promise;
  console.log('PDF 总页数:', pdf.numPages);

  // 模拟浏览器端的完整解析流程
  const allPages = [];
  const competitionsWithPointsTable = new Set();

  console.log('\n========== 第一遍扫描：收集页面信息 ==========\n');

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    const pageText = textContent.items
      .map(item => ('str' in item ? item.str : ''))
      .join(' ');

    // 检查标志
    const hasPointsTable = pageText.includes('积分表');
    const hasAlpineFormat = pageText.includes('高山滑雪') && (pageText.includes('回转') || pageText.includes('大回转'));
    const hasResultAnnouncement = pageText.includes('成绩公告') || pageText.includes('成 绩 公 告');

    // 跳过无关页面
    if (!hasPointsTable && !hasAlpineFormat && !hasResultAnnouncement) continue;

    // 尝试匹配比赛格式
    let matchInfo = null;
    let sportType = '';

    // 格式1: "U18男子组回转"
    matchInfo = pageText.match(/(U\d{2})\s*(男|女)\s*子\s*组\s*(回转|大回转|超级大回转)/);
    if (matchInfo) {
      sportType = 'alpine';
    }

    // 格式2: "高山滑雪-回转-男-U18"
    if (!matchInfo) {
      const format2Match = pageText.match(/高山滑雪[^\w]*(回转|大回转|超级大回转)[^\w]*(男|女)[^\w]*(U\d{2})/);
      if (format2Match) {
        matchInfo = [format2Match[0], format2Match[3], format2Match[2], format2Match[1]];
        sportType = 'alpine';
      }
    }

    if (!matchInfo) {
      if (hasPointsTable) {
        console.log(`页${pageNum}: 有积分表但没有匹配到格式`);
        console.log(`  文本前200字符: ${pageText.substring(0, 200)}`);
      }
      continue;
    }

    const [, ageGroup, gender, discipline] = matchInfo;
    const competitionKey = `${ageGroup}-${gender}-${discipline}`;

    console.log(`页${pageNum}: ${hasPointsTable ? '积分表' : '成绩公告'} - ${competitionKey}`);

    if (hasPointsTable) {
      competitionsWithPointsTable.add(competitionKey);
    }

    allPages.push({
      pageNum,
      pageText,
      textContent,
      hasPointsTable,
      hasResultAnnouncement,
      ageGroup,
      gender: gender + '子',
      discipline,
      sportType
    });
  }

  console.log(`\n收集到 ${allPages.length} 个比赛页面`);
  console.log(`有积分表的比赛: ${[...competitionsWithPointsTable].join(', ')}`);

  // 第二遍：解析
  console.log('\n========== 第二遍扫描：解析成绩数据 ==========\n');

  const competitions = [];
  const processedCompetitions = new Set();

  // 智能解析结果行
  const parseResultRow = (rowText) => {
    const numbers = rowText.match(/\d+(?:\.\d+)?|\d{1,2}:\d{2}\.\d{2}/g) || [];
    const nameMatch = rowText.match(/[\u4e00-\u9fa5·]{2,5}/);
    const orgMatch = rowText.match(/[\u4e00-\u9fa5·]{2,5}\s+([\u4e00-\u9fa5\s]+?)(?:\s+\d|\s*$)/);

    if (!nameMatch || numbers.length < 3) return null;

    const name = nameMatch[0];
    const organization = orgMatch ? orgMatch[1].trim().replace(/\s+/g, '') : '-';

    let points = 0;
    let totalScore = '-';
    let runScore = '-';

    for (let i = numbers.length - 1; i >= 0; i--) {
      const numStr = numbers[i];
      if (!numStr) continue;
      const num = parseInt(numStr);
      if (num >= 1 && num <= 360 && !numStr.includes('.') && !numStr.includes(':')) {
        points = num;
        if (i > 0 && numbers[i - 1]) {
          totalScore = numbers[i - 1];
        }
        if (i > 1 && numbers[i - 2]) {
          runScore = numbers[i - 2];
        }
        break;
      }
    }

    if (points === 0) return null;

    const firstNum = numbers[0];
    if (!firstNum) return null;
    const rank = parseInt(firstNum);
    if (rank < 1 || rank > 99) return null;

    const secondNum = numbers[1];
    const bib = secondNum ? parseInt(secondNum) : rank;

    return {
      rank,
      bib: bib > 0 && bib < 1000 ? bib : rank,
      name: name.trim(),
      organization,
      run1Time: runScore,
      run2Time: '-',
      totalTime: totalScore,
      points,
      status: 'OK'
    };
  };

  for (const pageInfo of allPages) {
    const competitionKey = `${pageInfo.ageGroup}-${pageInfo.gender}-${pageInfo.discipline}`;

    // 跳过已处理
    if (processedCompetitions.has(competitionKey)) {
      console.log(`跳过已处理: ${competitionKey}`);
      continue;
    }

    // 优先使用积分表
    if (competitionsWithPointsTable.has(competitionKey) && !pageInfo.hasPointsTable) {
      console.log(`跳过成绩公告（该比赛有积分表）: ${competitionKey}`);
      continue;
    }

    processedCompetitions.add(competitionKey);

    const { textContent, ageGroup, gender, discipline, hasPointsTable } = pageInfo;

    // 按Y坐标分组
    const items = textContent.items
      .filter(item => 'str' in item && 'transform' in item)
      .map(item => ({
        str: item.str,
        x: Math.round(item.transform[4]),
        y: Math.round(item.transform[5])
      }));

    const rows = {};
    items.forEach(item => {
      const y = Math.round(item.y / 8) * 8;
      if (!rows[y]) rows[y] = [];
      rows[y].push(item);
    });

    const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a);

    const results = [];

    for (const y of sortedYs) {
      const row = rows[y].sort((a, b) => a.x - b.x);
      const rowText = row.map(item => item.str).join(' ').trim();

      if (!rowText || rowText.length < 10) continue;
      if (!/^\s*\d/.test(rowText)) continue;
      if (/^[\d\s]+$/.test(rowText)) continue;
      if (rowText.includes('名次') || rowText.includes('排名') || rowText.includes('姓名') || rowText.includes('成绩排名')) continue;

      const parsedResult = parseResultRow(rowText);
      if (parsedResult) {
        results.push(parsedResult);
      }
    }

    if (results.length > 0) {
      competitions.push({
        ageGroup,
        gender,
        discipline,
        results,
        dataSource: hasPointsTable ? 'pointsTable' : 'resultAnnouncement',
        pageNum: pageInfo.pageNum
      });
      console.log(`解析成功: ${competitionKey} - ${results.length}人 (页${pageInfo.pageNum})`);
    } else {
      console.log(`解析失败（无有效结果）: ${competitionKey} (页${pageInfo.pageNum})`);
    }
  }

  console.log(`\n========== 最终结果 ==========`);
  console.log(`共解析 ${competitions.length} 场比赛`);
  console.log(`总运动员数: ${competitions.reduce((sum, c) => sum + c.results.length, 0)}`);

  if (competitions.length > 0) {
    console.log('\n各场比赛详情:');
    competitions.forEach((c, i) => {
      console.log(`${i + 1}. ${c.ageGroup}${c.gender}${c.discipline} - ${c.results.length}人 (${c.dataSource}, P${c.pageNum})`);
      if (c.results.length > 0) {
        console.log(`   第1名: ${c.results[0].name} - ${c.results[0].points}分`);
      }
    });
  }
}

testFullParsing().catch(console.error);
