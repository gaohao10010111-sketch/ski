// 完整测试PDF解析
const fs = require('fs');
const path = require('path');

async function testFullPdfParse() {
  const pdfjs = await import('pdfjs-dist');

  const pdfPath = path.join(__dirname, '..', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));

  const pdf = await pdfjs.getDocument({ data }).promise;
  console.log(`PDF 总页数: ${pdf.numPages}`);

  const competitions = [];
  let totalAthletes = 0;

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    // 构建页面文本
    const pageText = textContent.items
      .map(item => ('str' in item ? item.str : ''))
      .join(' ');

    // 检查是否包含比赛信息
    const hasPointsTable = pageText.includes('积分表');
    const hasResultFormat = pageText.includes('高山滑雪') && (pageText.includes('回转') || pageText.includes('大回转'));

    if (!hasPointsTable && !hasResultFormat) continue;

    // 提取比赛信息
    let matchInfo = pageText.match(/(U\d{2})(男|女)子组(回转|大回转|超级大回转)/);

    if (!matchInfo) {
      const format2Match = pageText.match(/高山滑雪[^\w]*(回转|大回转|超级大回转)[^\w]*(男|女)[^\w]*(U\d{2})/);
      if (format2Match) {
        matchInfo = [format2Match[0], format2Match[3], format2Match[2], format2Match[1]];
      }
    }

    if (!matchInfo) {
      console.log(`\n第 ${pageNum} 页: 未找到比赛信息匹配`);
      console.log(`  页面文本前200字: ${pageText.substring(0, 200)}`);
      continue;
    }

    const [, ageGroup, gender, discipline] = matchInfo;
    console.log(`\n第 ${pageNum} 页: ${ageGroup} ${gender}子 ${discipline}`);

    // 按Y坐标分组文本项
    const items = textContent.items
      .filter(item => 'str' in item && 'transform' in item)
      .map(item => ({
        str: item.str,
        x: Math.round(item.transform[4]),
        y: Math.round(item.transform[5])
      }));

    // 按Y坐标分行
    const rows = {};
    items.forEach(item => {
      const y = Math.round(item.y / 8) * 8;
      if (!rows[y]) rows[y] = [];
      rows[y].push(item);
    });

    // 按Y降序排列
    const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a);

    // 解析每一行
    const results = [];

    for (const y of sortedYs) {
      const row = rows[y].sort((a, b) => a.x - b.x);
      const rowText = row.map(item => item.str).join(' ').trim();

      // 格式2正则 - 修复后的版本
      const resultMatch2 = rowText.match(
        /^\s*(\d{1,3})\s+([\u4e00-\u9fa5·]{2,4})\s+(\d{4,5}[A-Za-z]?)\s+(\d{2}:\d{2}\.\d{2}|\d+\.\d{2})\s+(\d{1,3})\s+(\d{1,3})\s*$/
      );

      if (resultMatch2) {
        const [, rank, name, registrationId, total, points] = resultMatch2;
        results.push({
          rank: parseInt(rank),
          bib: parseInt(registrationId.replace(/[A-Za-z]$/, '')),
          name: name.trim(),
          totalTime: total,
          points: parseInt(points)
        });
      }
    }

    if (results.length > 0) {
      competitions.push({
        ageGroup,
        gender: gender + '子',
        discipline,
        resultsCount: results.length
      });
      totalAthletes += results.length;
      console.log(`  解析到 ${results.length} 名运动员`);
      console.log(`  前3名: ${results.slice(0, 3).map(r => `${r.rank}.${r.name}(${r.points}分)`).join(', ')}`);
    } else {
      console.log(`  未解析到任何成绩行`);
    }
  }

  console.log(`\n========================================`);
  console.log(`总计: ${competitions.length} 场比赛, ${totalAthletes} 名运动员`);

  if (competitions.length === 0) {
    console.log('\n❌ 解析失败: 未找到任何有效的比赛数据');
  } else {
    console.log('\n✅ 解析成功!');
    competitions.forEach((c, i) => {
      console.log(`  ${i + 1}. ${c.ageGroup} ${c.gender} ${c.discipline}: ${c.resultsCount}人`);
    });
  }
}

testFullPdfParse().catch(console.error);
