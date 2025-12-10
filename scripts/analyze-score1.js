const fs = require('fs');
const path = require('path');

async function analyzePageRows() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join('/mnt/c/Users/Simbelmyne/desktop/ski', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('PDF 总页数:', pdf.numPages);

  // 找一个有成绩公告的页面
  for (let pageNum = 1; pageNum <= Math.min(pdf.numPages, 20); pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => ('str' in item ? item.str : '')).join(' ');

    if (pageText.includes('成绩公告') || pageText.includes('成 绩 公 告')) {
      console.log(`\n第${pageNum}页是成绩公告页!`);
    }
  }

  // 分析有成绩公告的页面（继续搜索更多页）
  let targetPage = 3;
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const p = await pdf.getPage(pageNum);
    const tc = await p.getTextContent();
    const pt = tc.items.map(item => ('str' in item ? item.str : '')).join(' ');
    if (pt.includes('成绩公告') || pt.includes('成 绩 公 告')) {
      console.log(`\n>>> 成绩公告页: ${pageNum}`);
      targetPage = pageNum;
      break;
    }
  }

  const page = await pdf.getPage(targetPage);
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

  console.log('\nscore1.pdf 第1页行分析:');
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
