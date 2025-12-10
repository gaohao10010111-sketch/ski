// 测试 PDF 解析 - 验证正则表达式是否能匹配实际内容
const fs = require('fs');
const path = require('path');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

async function testPdfParsing() {

  const pdfPath = path.join(__dirname, '..', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));

  const pdf = await pdfjs.getDocument({ data }).promise;
  console.log(`PDF 总页数: ${pdf.numPages}\n`);

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

    if (!hasPointsTable && !hasResultFormat) {
      continue;
    }

    console.log(`\n========== 第 ${pageNum} 页 ==========`);
    console.log(`包含积分表: ${hasPointsTable}`);
    console.log(`包含高山滑雪格式: ${hasResultFormat}`);
    console.log(`页面文本前300字符: ${pageText.substring(0, 300)}...`);

    // 提取比赛信息
    let matchInfo = pageText.match(/(U\d{2})(男|女)子组(回转|大回转|超级大回转)/);
    console.log(`\n格式1匹配(U**男/女子组回转): ${matchInfo ? matchInfo[0] : '无匹配'}`);

    if (!matchInfo) {
      const format2Match = pageText.match(/高山滑雪[^\w]*(回转|大回转|超级大回转)[^\w]*(男|女)[^\w]*(U\d{2})/);
      console.log(`格式2匹配(高山滑雪-回转-男-U**): ${format2Match ? format2Match[0] : '无匹配'}`);
      if (format2Match) {
        matchInfo = [format2Match[0], format2Match[3], format2Match[2], format2Match[1]];
      }
    }

    if (!matchInfo) {
      console.log('⚠️ 未找到比赛信息匹配，跳过此页');
      continue;
    }

    const [, ageGroup, gender, discipline] = matchInfo;
    console.log(`\n✅ 解析到比赛: ${ageGroup} ${gender}子 ${discipline}`);

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
    let matchedCount = 0;
    let unmatchedRows = [];

    for (const y of sortedYs) {
      const row = rows[y].sort((a, b) => a.x - b.x);
      const rowText = row.map(item => item.str).join(' ').trim();

      // 格式1正则
      const resultMatch1 = rowText.match(
        /^\s*(\d{1,2})\s+(\d{1,3})\s+([\u4e00-\u9fa5·]{2,4})\s+([\u4e00-\u9fa5\s]+?)\s+(\d+\.\d{2})\s+(\d+\.\d{2})\s+(\d{1,2}:\d{2}\.\d{2}|\d+\.\d{2})\s+(\d{1,3})\s*$/
      );

      // 格式2正则 - 修复后
      const resultMatch2 = rowText.match(
        /^\s*(\d{1,3})\s+([\u4e00-\u9fa5·]{2,4})\s+(\d{4,5}[A-Za-z]?)\s+(\d{2}:\d{2}\.\d{2}|\d+\.\d{2})\s+(\d{1,3})\s+(\d{1,3})\s*$/
      );

      if (resultMatch1) {
        matchedCount++;
        const [, rank, bib, name, org, run1, run2, total, points] = resultMatch1;
        results.push({ rank: parseInt(rank), name: name.trim(), points: parseInt(points) });
      } else if (resultMatch2) {
        matchedCount++;
        const [, rank, name, registrationId, total, points] = resultMatch2;
        results.push({ rank: parseInt(rank), name: name.trim(), points: parseInt(points) });
      } else if (rowText.match(/^\d{1,3}\s+[\u4e00-\u9fa5]/) && rowText.length > 10) {
        // 可能是成绩行但未匹配
        unmatchedRows.push(rowText);
      }
    }

    console.log(`\n匹配结果数: ${matchedCount}`);
    if (results.length > 0) {
      console.log(`前3名: ${results.slice(0, 3).map(r => `${r.rank}.${r.name}(${r.points}分)`).join(', ')}`);
      competitions.push({ ageGroup, gender: gender + '子', discipline, count: results.length });
      totalAthletes += results.length;
    }

    if (unmatchedRows.length > 0) {
      console.log(`\n⚠️ 未匹配的可能成绩行 (前5行):`);
      unmatchedRows.slice(0, 5).forEach((r, i) => console.log(`  ${i + 1}. "${r}"`));
    }
  }

  console.log(`\n\n==================== 总结 ====================`);
  console.log(`总计: ${competitions.length} 场比赛, ${totalAthletes} 名运动员`);

  if (competitions.length === 0) {
    console.log('\n❌ 解析失败: 未找到任何有效的比赛数据');
  } else {
    console.log('\n✅ 解析成功!');
    competitions.forEach((c, i) => {
      console.log(`  ${i + 1}. ${c.ageGroup} ${c.gender} ${c.discipline}: ${c.count}人`);
    });
  }
}

testPdfParsing().catch(console.error);
