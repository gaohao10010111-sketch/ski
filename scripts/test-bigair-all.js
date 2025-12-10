const fs = require('fs');
const path = require('path');

async function testBigAirParsing() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join(__dirname, '..', 'score2.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('PDF 总页数:', pdf.numPages);
  console.log('\n========== 扫描所有成绩公告页 ==========\n');

  const allResults = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    // 构建页面文本
    const pageText = textContent.items
      .map(item => ('str' in item ? item.str : ''))
      .join(' ');

    // 检查是否是成绩公告页
    const hasResultAnnouncement = pageText.includes('成绩公告') || pageText.includes('成 绩 公 告');
    if (!hasResultAnnouncement) continue;

    // 提取组别信息
    const groupMatch = pageText.match(/(U\d{2})(男|女)子组/);
    if (!groupMatch) continue;

    const ageGroup = groupMatch[1];
    const gender = groupMatch[2] + '子';

    console.log(`\n页${pageNum}: ${ageGroup}${gender}组 成绩公告`);

    // 按Y坐标分行
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

    // 解析每一行
    let pageResults = [];

    for (const y of sortedYs) {
      const row = rows[y].sort((a, b) => a.x - b.x);
      const rowText = row.map(item => item.str).join(' ').trim();

      if (!rowText || rowText.length < 10) continue;
      if (rowText.includes('名次') || rowText.includes('排名')) continue;
      if (rowText.includes('技术代表') || rowText.includes('打印时间')) continue;
      if (!/^\s*\|?\s*\d/.test(rowText)) continue;

      const parsed = parseBigAirRow(rowText);
      if (parsed) {
        pageResults.push(parsed);
      }
    }

    console.log(`  解析到 ${pageResults.length} 名运动员`);
    if (pageResults.length > 0) {
      console.log(`  前3名: ${pageResults.slice(0, 3).map(r => `${r.rank}.${r.name}(${r.points}分)`).join(', ')}`);
    }

    allResults.push({
      pageNum,
      ageGroup,
      gender,
      results: pageResults
    });
  }

  console.log('\n========== 总结 ==========');
  console.log(`共找到 ${allResults.length} 个成绩公告页`);

  let totalAthletes = 0;
  allResults.forEach(group => {
    console.log(`- ${group.ageGroup}${group.gender}: ${group.results.length}人 (P${group.pageNum})`);
    totalAthletes += group.results.length;
  });
  console.log(`总运动员: ${totalAthletes}人`);
}

// 解析大跳台格式的数据行
function parseBigAirRow(rowText) {
  // 清理行开头的 | 和空格
  const cleanText = rowText.replace(/^\s*\|\s*/, '').trim();

  // 检查是否包含姓名（中文2-5字）
  const nameMatch = cleanText.match(/[\u4e00-\u9fa5·]{2,5}/);
  if (!nameMatch) return null;

  const name = nameMatch[0];

  // 提取所有数字
  const numbers = cleanText.match(/\d+(?:\.\d+)?/g) || [];

  // 至少需要：名次、号码、出生年、轮次、评分、最终成绩、积分
  if (numbers.length < 8) return null;

  // 检查轮次 - 如果行中包含轮次信息，且不是轮次1，跳过
  const roundPattern = /[GR]\s*\|?\s*(\d)\s*\|?\s*(\d{1,2})\s*\|?\s*(\d{1,2})/;
  const roundMatch = cleanText.match(roundPattern);

  if (roundMatch) {
    const round = parseInt(roundMatch[1]);
    if (round > 1) {
      return null;
    }
  }

  // 名次应该是第一个1-99之间的数字
  const rank = parseInt(numbers[0]);
  if (rank < 1 || rank > 99) return null;

  // 号码是第二个数字
  const bib = parseInt(numbers[1]);

  // 从末尾提取积分（1-360之间的整数）
  let points = 0;
  let finalScore = '-';

  for (let i = numbers.length - 1; i >= 0; i--) {
    const num = parseFloat(numbers[i]);
    if (Number.isInteger(num) && num >= 1 && num <= 360) {
      points = num;
      if (i > 0 && numbers[i - 1].includes('.')) {
        finalScore = numbers[i - 1];
      }
      break;
    }
  }

  if (points === 0) return null;

  // 提取单位 - 在姓名后面的中文
  let organization = '-';
  const afterName = cleanText.substring(cleanText.indexOf(name) + name.length);
  const orgMatch = afterName.match(/[\u4e00-\u9fa5]{2,15}/);
  if (orgMatch) {
    organization = orgMatch[0];
  }

  return {
    rank,
    bib,
    name,
    organization,
    finalScore,
    points
  };
}

testBigAirParsing().catch(console.error);
