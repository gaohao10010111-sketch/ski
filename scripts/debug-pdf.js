const fs = require('fs');
const path = require('path');

async function debugPDF(pdfPath, pageNum) {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('Total pages:', pdf.numPages);

  const page = await pdf.getPage(pageNum);
  const textContent = await page.getTextContent();

  const items = textContent.items
    .filter(item => 'str' in item && 'transform' in item)
    .map(item => ({
      str: item.str.trim(),
      x: Math.round(item.transform[4]),
      y: Math.round(item.transform[5])
    }))
    .filter(item => item.str.length > 0);

  // 按Y坐标分行
  const rows = {};
  items.forEach(item => {
    const yKey = Math.round(item.y / 5) * 5;
    if (!rows[yKey]) rows[yKey] = [];
    rows[yKey].push(item);
  });

  // 打印每行
  const sortedYs = Object.keys(rows).map(Number).sort((a,b) => b - a);
  sortedYs.forEach(y => {
    const row = rows[y];
    row.sort((a, b) => a.x - b.x);
    const rowText = row.map(r => r.str).join(' ');
    console.log('Y=' + y + ': ' + rowText);
  });
}

const pageNum = parseInt(process.argv[2] || '3');
const pdfFile = process.argv[3] || 'score1.pdf';

debugPDF(path.join(__dirname, '..', pdfFile), pageNum).catch(console.error);
