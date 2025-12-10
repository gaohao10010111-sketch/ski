const fs = require('fs');
const path = require('path');

async function testPage7Rows() {
  // 动态导入 pdfjs-dist
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  // 读取 PDF 文件
  const pdfPath = path.join(__dirname, '..', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));

  // 加载 PDF
  const pdf = await pdfjs.getDocument({ data }).promise;
  console.log('PDF 总页数:', pdf.numPages);

  // 获取第7页（积分表页面）
  const page = await pdf.getPage(7);
  const textContent = await page.getTextContent();

  // 按Y坐标分组
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

  // 按Y降序排列并构建行文本
  const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a);
  console.log('\n第7页所有行 (按Y坐标从高到低):');
  console.log('================================');

  sortedYs.forEach((y, index) => {
    const row = rows[y].sort((a, b) => a.x - b.x);
    const rowText = row.map(item => item.str).join(' ').trim();
    if (rowText.length > 5) {
      console.log(`[${index}] Y=${y}: ${rowText}`);

      // 尝试解析成绩行
      const numbers = rowText.match(/\d+(?:\.\d+)?|\d{1,2}:\d{2}\.\d{2}/g) || [];
      const nameMatch = rowText.match(/[\u4e00-\u9fa5·]{2,5}/);

      if (numbers.length > 0 || nameMatch) {
        console.log(`    -> 数字: [${numbers.join(', ')}], 姓名: ${nameMatch ? nameMatch[0] : '无'}`);
      }
    }
  });
}

testPage7Rows().catch(console.error);
