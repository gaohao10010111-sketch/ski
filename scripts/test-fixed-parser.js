const fs = require('fs');
const path = require('path');

// 测试修复后的解析逻辑
// 核心原则：同一行的信息才是一条信息，绝不从不同行拼凑数据

function parseResultRow(rowText, sportType = 'alpine') {
  // 清理行开头的 | 和空格
  const cleanText = rowText.replace(/^\s*\|\s*/, '').trim();

  // 提取中文姓名（2-5个汉字，可能包含间隔号·）
  const nameMatch = cleanText.match(/[\u4e00-\u9fa5·]{2,5}/);
  if (!nameMatch) return null;
  const name = nameMatch[0];

  // 提取所有数字（包括小数和时间格式）
  // 优先匹配时间格式 1:01.44，再匹配普通小数和整数
  const numbers = cleanText.match(/\d{1,2}:\d{2}\.\d{2}|\d+\.\d+|\d+/g) || [];

  // 对于大跳台/坡障格式，使用专门的解析逻辑
  if (sportType.includes('bigair') || sportType.includes('slopestyle') || sportType === 'freestyle') {
    // 大跳台完整数据行的特征：
    // - 必须包含姓名
    // - 必须包含站姿标记 G 或 R
    // - 必须包含积分（1-360的整数，在行末尾）
    // - 必须是轮次1的行（如果是轮次2/3的行，只有评分数据，没有完整信息）

    // 检查是否包含站姿标记（这是完整行的标志之一）
    const hasStance = /[|\s][GR][|\s]/.test(cleanText) || cleanText.includes(' G ') || cleanText.includes(' R ');

    // 如果没有站姿标记且数字很少，这可能是轮次2/3的行，跳过
    if (!hasStance && numbers.length < 8) {
      return null;
    }

    // 检查轮次 - 查找格式如 "G | 1" 或 "R 1" 的模式
    // 如果是轮次2或3的行（即使有姓名也跳过，因为那是从上一行继承的）
    const roundPattern = /[GR]\s*\|?\s*(\d)\s*\|/;
    const roundMatch = cleanText.match(roundPattern);
    if (roundMatch) {
      const round = parseInt(roundMatch[1]);
      if (round > 1) {
        return null;  // 跳过轮次2和3的行
      }
    }

    // 大跳台格式需要足够多的数字来包含：名次、号码、出生年、轮次、评分、最终成绩、积分
    if (numbers.length < 8) return null;

    // 名次应该是第一个1-99之间的数字
    const firstNum = numbers[0];
    if (!firstNum) return null;
    const rank = parseInt(firstNum);
    if (rank < 1 || rank > 99) return null;

    // 号码是第二个数字
    const secondNum = numbers[1];
    const bib = secondNum ? parseInt(secondNum) : rank;

    // 从末尾提取积分（1-360之间的整数）
    // 积分必须在这一行存在才能解析
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

    // 如果这一行没有积分，说明不是完整的数据行
    if (points === 0) return null;

    // 提取单位 - 在姓名后面的中文（必须在同一行）
    let organization = '-';
    const afterName = cleanText.substring(cleanText.indexOf(name) + name.length);
    const orgMatch = afterName.match(/[\u4e00-\u9fa5]{2,15}/);
    if (orgMatch) {
      organization = orgMatch[0];
    }

    return {
      rank,
      bib: bib > 0 && bib < 1000 ? bib : rank,
      name: name.trim(),
      organization,
      totalTime: finalScore,
      points,
      status: 'OK'
    };
  }

  // 高山滑雪格式
  if (numbers.length < 3) return null;

  const firstNum = numbers[0];
  if (!firstNum) return null;
  const rank = parseInt(firstNum);
  if (rank < 1 || rank > 99) return null;

  const secondNum = numbers[1];
  const bib = secondNum ? parseInt(secondNum) : rank;

  let organization = '-';
  const afterName = cleanText.substring(cleanText.indexOf(name) + name.length);
  const orgMatch = afterName.match(/[\u4e00-\u9fa5]{2,15}/);
  if (orgMatch) {
    organization = orgMatch[0];
  }

  let points = 0;
  let run1Time = '-';
  let run2Time = '-';
  let totalTime = '-';

  const timeNumbers = numbers.filter(n => n.includes('.') || n.includes(':'));

  if (timeNumbers.length >= 1) {
    if (timeNumbers.length >= 3) {
      run1Time = timeNumbers[0];
      run2Time = timeNumbers[1];
      totalTime = timeNumbers[2];
    } else if (timeNumbers.length >= 1) {
      totalTime = timeNumbers[timeNumbers.length - 1];
    }
  }

  for (let i = numbers.length - 1; i >= 0; i--) {
    const numStr = numbers[i];
    if (!numStr) continue;
    if (numStr.includes('.') || numStr.includes(':')) continue;
    const num = parseInt(numStr);
    if (num >= 1 && num <= 360) {
      points = num;
      break;
    }
  }

  if (points === 0 && totalTime === '-') return null;

  return {
    rank,
    bib: bib > 0 && bib < 1000 ? bib : rank,
    name: name.trim(),
    organization,
    run1Time,
    run2Time,
    totalTime,
    points,
    status: 'OK'
  };
}

async function testScore2() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join('/mnt/c/Users/Simbelmyne/desktop/ski', 'score2.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('========== 测试score2.pdf（大跳台）解析 ==========\n');

  // 分析第9页（U11男子组成绩公告）
  const page = await pdf.getPage(9);
  const textContent = await page.getTextContent();

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

  console.log('第9页（U11男子组成绩公告）解析测试:');
  console.log('==========================================\n');

  const results = [];

  for (const y of sortedYs) {
    const row = rows[y].sort((a, b) => a.x - b.x);
    const rowText = row.map(item => item.str).join(' ').trim();

    if (!rowText || rowText.length < 10) continue;
    if (!/^\s*\|?\s*\d/.test(rowText)) continue;
    if (rowText.includes('名次') || rowText.includes('排名')) continue;

    console.log(`Y=${y}: ${rowText.substring(0, 80)}...`);

    const parsed = parseResultRow(rowText, 'snowboard-bigair');
    if (parsed) {
      console.log(`  ✓ 解析成功: 名次=${parsed.rank}, 姓名=${parsed.name}, 单位=${parsed.organization}, 成绩=${parsed.totalTime}, 积分=${parsed.points}`);
      results.push(parsed);
    } else {
      console.log(`  ✗ 跳过（非完整数据行）`);
    }
    console.log('');
  }

  console.log('\n========== 解析结果汇总 ==========');
  console.log(`共解析 ${results.length} 名运动员\n`);

  results.forEach((r, i) => {
    console.log(`${i + 1}. 名次${r.rank} ${r.name} (${r.organization}) - 成绩: ${r.totalTime}, 积分: ${r.points}`);
  });
}

async function testScore1() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join('/mnt/c/Users/Simbelmyne/desktop/ski', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('\n\n========== 测试score1.pdf（高山滑雪）解析 ==========\n');

  // 分析第6页（U18女子组总成绩）
  const page = await pdf.getPage(6);
  const textContent = await page.getTextContent();

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

  console.log('第6页（U18女子组总成绩）解析测试:');
  console.log('==========================================\n');

  const results = [];

  for (const y of sortedYs) {
    const row = rows[y].sort((a, b) => a.x - b.x);
    const rowText = row.map(item => item.str).join(' ').trim();

    if (!rowText || rowText.length < 10) continue;
    if (!/^\s*\|?\s*\d/.test(rowText)) continue;
    if (rowText.includes('名次') || rowText.includes('排名') || rowText.includes('成绩排名')) continue;

    console.log(`Y=${y}: ${rowText.substring(0, 80)}...`);

    const parsed = parseResultRow(rowText, 'alpine');
    if (parsed) {
      console.log(`  ✓ 解析成功: 名次=${parsed.rank}, 姓名=${parsed.name}, 单位=${parsed.organization}, 总成绩=${parsed.totalTime}`);
      results.push(parsed);
    } else {
      console.log(`  ✗ 跳过`);
    }
    console.log('');
  }

  console.log('\n========== 解析结果汇总 ==========');
  console.log(`共解析 ${results.length} 名运动员\n`);

  results.forEach((r, i) => {
    console.log(`${i + 1}. 名次${r.rank} ${r.name} (${r.organization}) - 第一轮: ${r.run1Time}, 第二轮: ${r.run2Time}, 总成绩: ${r.totalTime}`);
  });
}

async function main() {
  await testScore2();
  await testScore1();
}

main().catch(console.error);
