const fs = require('fs');
const path = require('path');

async function testPdfMatch() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join(__dirname, '..', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('PDF 总页数:', pdf.numPages);

  // 测试第7页的正则匹配
  const page = await pdf.getPage(7);
  const textContent = await page.getTextContent();
  const pageText = textContent.items
    .map(item => ('str' in item ? item.str : ''))
    .join(' ');

  console.log('\n页7的完整文本长度:', pageText.length);
  console.log('页7的前200字符:', pageText.substring(0, 200));

  // 测试各种正则表达式
  const regexes = [
    { name: '原始正则', pattern: /(U\d{2})(男|女)子组(回转|大回转|超级大回转)/ },
    { name: '带空格正则', pattern: /(U\d{2})\s*(男|女)\s*子\s*组\s*(回转|大回转|超级大回转)/ },
    { name: '更宽松正则', pattern: /(U\d{2})\s*(男|女)\s*子\s*组\s*.{0,20}(回转|大回转|超级大回转)/ }
  ];

  console.log('\n正则匹配测试:');
  for (const { name, pattern } of regexes) {
    const match = pageText.match(pattern);
    console.log(`${name}: ${match ? '成功 - ' + JSON.stringify(match.slice(0, 4)) : '失败'}`);
  }

  // 检查关键字
  console.log('\n关键字检测:');
  console.log('包含"积分表":', pageText.includes('积分表'));
  console.log('包含"U18":', pageText.includes('U18'));
  console.log('包含"女子组":', pageText.includes('女子组'));
  console.log('包含"回转":', pageText.includes('回转'));
  console.log('包含"高山滑雪":', pageText.includes('高山滑雪'));

  // 找到 U18 附近的文本
  const u18Index = pageText.indexOf('U18');
  if (u18Index >= 0) {
    console.log('\nU18附近的文本 (前后50字符):');
    console.log(pageText.substring(Math.max(0, u18Index - 10), u18Index + 50));
  }
}

testPdfMatch().catch(console.error);
