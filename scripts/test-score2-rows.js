// 测试 score2.pdf 成绩行格式
const fs = require('fs');
const path = require('path');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

async function testScore2Rows() {
  const pdfPath = path.join(__dirname, '..', 'score2.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));

  const pdf = await pdfjs.getDocument({ data }).promise;
  console.log(`PDF 总页数: ${pdf.numPages}\n`);

  // 只检查成绩公告页面 (第4、6、8、10页等偶数页)
  for (const pageNum of [4, 6, 8, 10]) {
    if (pageNum > pdf.numPages) break;

    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

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

    console.log(`\n========== 第 ${pageNum} 页（成绩公告）==========`);
    console.log('成绩行示例（前10行）:\n');

    let rowCount = 0;
    for (const y of sortedYs) {
      if (rowCount >= 10) break;

      const row = rows[y].sort((a, b) => a.x - b.x);
      const rowText = row.map(item => item.str).join(' ').trim();

      // 只显示以数字开头的行（可能是成绩行）
      if (/^\d/.test(rowText) && rowText.length > 20) {
        console.log(`行${++rowCount}: "${rowText}"`);
        console.log(`  长度: ${rowText.length}`);

        // 尝试不同的正则匹配
        // 格式: 名次 姓名 单位 号码 站姿 [评分...] 最终成绩 积分
        const match1 = rowText.match(/^(\d{1,2})\s+([\u4e00-\u9fa5·]{2,4})\s+(.+?)\s+(\d{1,3})\s+([GR])\s+/);
        if (match1) {
          console.log(`  匹配: 名次=${match1[1]}, 姓名=${match1[2]}, 单位=${match1[3]}, 号码=${match1[4]}, 站姿=${match1[5]}`);
        }

        // 提取最后的数字（积分）
        const lastNumbers = rowText.match(/(\d+)\s*$/);
        if (lastNumbers) {
          console.log(`  最后数字(积分): ${lastNumbers[1]}`);
        }

        // 提取倒数第二组数字（最终成绩）
        const scoreMatch = rowText.match(/(\d+\.?\d*)\s+\d+\s*$/);
        if (scoreMatch) {
          console.log(`  倒数第二数字(最终成绩): ${scoreMatch[1]}`);
        }

        console.log('');
      }
    }
  }
}

testScore2Rows().catch(console.error);
