const fs = require('fs');
const path = require('path');

async function analyzePageRows() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join('/mnt/c/Users/Simbelmyne/desktop/ski', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('PDF 总页数:', pdf.numPages);
  console.log('\n========== 搜索成绩公告页 ==========\n');

  // 找所有成绩公告页
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => ('str' in item ? item.str : '')).join(' ');

    if (pageText.includes('成绩公告') || pageText.includes('成 绩 公 告')) {
      console.log(`>>> 成绩公告页: ${pageNum}`);

      // 提取组别信息
      const groupMatch = pageText.match(/(U\d{2})(男|女)子组/);
      if (groupMatch) {
        console.log(`    组别: ${groupMatch[1]}${groupMatch[2]}子组`);
      }
    }
  }

  // 分析第一个成绩公告页的详细内容
  console.log('\n========== 分析第一个成绩公告页（第4页）==========\n');

  const page = await pdf.getPage(4);
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

  console.log('score1.pdf 第4页行分析:');
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
