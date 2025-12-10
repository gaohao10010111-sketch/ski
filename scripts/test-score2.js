// 测试 score2.pdf 格式
const fs = require('fs');
const path = require('path');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

async function testScore2() {
  const pdfPath = path.join(__dirname, '..', 'score2.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));

  const pdf = await pdfjs.getDocument({ data }).promise;
  console.log(`PDF 总页数: ${pdf.numPages}\n`);

  // 检查前10页的内容
  for (let pageNum = 1; pageNum <= Math.min(10, pdf.numPages); pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    const pageText = textContent.items
      .map(item => ('str' in item ? item.str : ''))
      .join(' ');

    console.log(`\n========== 第 ${pageNum} 页 ==========`);
    console.log(`文本长度: ${pageText.length}`);
    console.log(`前500字符: ${pageText.substring(0, 500)}`);

    // 检测关键词
    console.log(`\n关键词检测:`);
    console.log(`  包含"积分表": ${pageText.includes('积分表')}`);
    console.log(`  包含"成绩公告": ${pageText.includes('成绩公告')}`);
    console.log(`  包含"高山滑雪": ${pageText.includes('高山滑雪')}`);
    console.log(`  包含"单板": ${pageText.includes('单板')}`);
    console.log(`  包含"自由式": ${pageText.includes('自由式')}`);
    console.log(`  包含"回转": ${pageText.includes('回转')}`);
    console.log(`  包含"大回转": ${pageText.includes('大回转')}`);
    console.log(`  包含"坡面障碍": ${pageText.includes('坡面障碍')}`);
    console.log(`  包含"大跳台": ${pageText.includes('大跳台')}`);
    console.log(`  包含U系列: ${pageText.match(/U\d{2}/g)?.join(', ') || '无'}`);
    console.log(`  包含"男/女": ${pageText.match(/(男|女)/g)?.join(', ') || '无'}`);

    // 尝试匹配比赛信息格式
    const format1 = pageText.match(/(U\d{2})(男|女)子组(回转|大回转|超级大回转)/);
    const format2 = pageText.match(/高山滑雪[^\w]*(回转|大回转|超级大回转)[^\w]*(男|女)[^\w]*(U\d{2})/);
    console.log(`\n比赛信息匹配:`);
    console.log(`  格式1 (U**男子组回转): ${format1 ? format1[0] : '无匹配'}`);
    console.log(`  格式2 (高山滑雪-回转-男-U**): ${format2 ? format2[0] : '无匹配'}`);
  }
}

testScore2().catch(console.error);
