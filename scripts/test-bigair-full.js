const fs = require('fs');
const path = require('path');

async function testBigAirParsing() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join(__dirname, '..', 'score2.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('PDF 总页数:', pdf.numPages);
  console.log('\n========== 分析大跳台成绩公告页 ==========\n');

  // 分析第9页（U11男子组成绩公告）
  const page = await pdf.getPage(9);
  const textContent = await page.getTextContent();

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

  console.log('单板大跳台数据行分析:');
  console.log('==========================================');

  // 解析每一行
  const results = [];

  for (const y of sortedYs) {
    const row = rows[y].sort((a, b) => a.x - b.x);
    const rowText = row.map(item => item.str).join(' ').trim();

    if (!rowText || rowText.length < 10) continue;
    if (rowText.includes('名次') || rowText.includes('排名')) continue;
    if (rowText.includes('技术代表') || rowText.includes('打印时间')) continue;

    // 检测是否是数据行（以数字开头）
    if (!/^\s*\|?\s*\d/.test(rowText)) continue;

    console.log(`Y=${y}: ${rowText}`);

    // 尝试解析
    const parsed = parseBigAirRow(rowText);
    if (parsed) {
      console.log(`  -> 解析成功: 名次=${parsed.rank}, 姓名=${parsed.name}, 单位=${parsed.organization}, 最终成绩=${parsed.finalScore}, 积分=${parsed.points}`);
      results.push(parsed);
    } else {
      console.log(`  -> 跳过（非完整数据行或轮次2/3）`);
    }
  }

  console.log('\n========== 解析结果汇总 ==========');
  console.log(`共解析 ${results.length} 名运动员\n`);
  results.forEach((r, i) => {
    console.log(`${i + 1}. 名次${r.rank} ${r.name} (${r.organization}) - 最终成绩: ${r.finalScore}, 积分: ${r.points}`);
  });
}

// 解析大跳台格式的数据行
function parseBigAirRow(rowText) {
  // 清理行开头的 | 和空格
  const cleanText = rowText.replace(/^\s*\|\s*/, '').trim();

  // 大跳台格式：名次 号码 姓名 单位 出生年 站姿 轮次 J1-J5 得分 最终成绩 积分
  // 示例: | 12 |   | 38 |   | 马泰铭 |   | 成都热雪奇迹 |  | 2014 |   | G |   |  | 1 |   | 28 |   | 24 |   |  | 25 |  | 26 | 26 | 25.80 | 53.40 |  | 166

  // 检查是否包含姓名（中文2-5字）
  const nameMatch = cleanText.match(/[\u4e00-\u9fa5·]{2,5}/);
  if (!nameMatch) return null;

  const name = nameMatch[0];

  // 提取所有数字
  const numbers = cleanText.match(/\d+(?:\.\d+)?/g) || [];

  // 至少需要：名次、号码、出生年、轮次、评分、最终成绩、积分
  if (numbers.length < 8) return null;

  // 检查轮次 - 如果行中包含轮次信息，且不是轮次1，跳过
  // 查找轮次标记位置（通常在站姿G/R后面）
  const roundPattern = /[GR]\s*\|?\s*(\d)\s*\|?\s*(\d{1,2})\s*\|?\s*(\d{1,2})/;
  const roundMatch = cleanText.match(roundPattern);

  if (roundMatch) {
    const round = parseInt(roundMatch[1]);
    if (round > 1) {
      return null; // 跳过轮次2和3
    }
  }

  // 尝试解析完整行
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
      // 积分前面是最终成绩（小数）
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
