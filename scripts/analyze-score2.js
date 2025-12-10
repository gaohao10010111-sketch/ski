const fs = require('fs');
const path = require('path');

async function analyzePageRows() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join('/mnt/c/Users/Simbelmyne/desktop/ski', 'score2.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  // 分析第9页（成绩公告带数据）
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

  console.log('第9页行分析 (单板大跳台成绩公告):');
  console.log('==========================================');
  sortedYs.forEach((y, idx) => {
    const row = rows[y].sort((a, b) => a.x - b.x);
    const rowText = row.map(item => item.str).join(' | ').trim();
    if (rowText.length > 5) {
      console.log(`[${idx}] Y=${y}: ${rowText}`);
    }
  });
}

analyzePageRows().catch(console.error);
