// 完整测试 score2.pdf 解析（使用新正则）
const fs = require('fs');
const path = require('path');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

async function testScore2Full() {
  const pdfPath = path.join(__dirname, '..', 'score2.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));

  const pdf = await pdfjs.getDocument({ data }).promise;
  console.log(`PDF 总页数: ${pdf.numPages}\n`);

  const competitions = [];
  let totalAthletes = 0;

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    const pageText = textContent.items
      .map(item => ('str' in item ? item.str : ''))
      .join(' ');

    // 检查格式类型
    const hasSnowboardBigAir = pageText.includes('单板滑雪大跳台') || (pageText.includes('单板') && pageText.includes('大跳台'));
    const hasResultAnnouncement = pageText.includes('成绩公告') || pageText.includes('成 绩 公 告');

    if (!hasSnowboardBigAir && !hasResultAnnouncement) continue;

    // 提取年龄组和性别
    const bigAirMatch = pageText.match(/(U\d{2})(男|女)子组/);
    if (!bigAirMatch) continue;

    const [, ageGroup, gender] = bigAirMatch;
    const discipline = '大跳台';

    console.log(`\n第 ${pageNum} 页: ${ageGroup} ${gender}子 ${discipline}`);

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

      // 格式3（单板滑雪大跳台成绩公告）: 名次 号码 姓名 单位 出生年 站姿 轮次 [5个评分] 本轮成绩 总成绩 积分
      const resultMatch3 = rowText.match(
        /^\s*(\d{1,2})\s+(\d{1,3})\s+([\u4e00-\u9fa5·]{2,4})\s+([\u4e00-\u9fa5\s]+?)\s+(\d{4})\s+([GR])\s+1\s+.*?(\d+\.\d{2})\s+(\d+\.\d{2})\s+(\d{1,3})\s*$/
      );

      if (resultMatch3) {
        const [, rank, bib, name, org, , , runScore, totalScore, points] = resultMatch3;
        results.push({
          rank: parseInt(rank),
          bib: parseInt(bib),
          name: name.trim(),
          organization: org.trim().replace(/\s+/g, ''),
          totalScore,
          points: parseInt(points)
        });
      }
    }

    if (results.length > 0) {
      competitions.push({
        ageGroup,
        gender: gender + '子',
        discipline,
        count: results.length
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
      console.log(`  ${i + 1}. ${c.ageGroup} ${c.gender} ${c.discipline}: ${c.count}人`);
    });
  }
}

testScore2Full().catch(console.error);
