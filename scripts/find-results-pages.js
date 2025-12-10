const fs = require('fs');
const path = require('path');

async function findResultPages() {
  const pdfjsModule = await import('pdfjs-dist');
  const pdfjs = pdfjsModule.default || pdfjsModule;

  const pdfPath = path.join('/mnt/c/Users/Simbelmyne/desktop/ski', 'score1.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjs.getDocument({ data }).promise;

  console.log('PDF 总页数:', pdf.numPages);
  console.log('\n========== 分析每页内容类型 ==========\n');

  // 搜索所有页面，找出不同类型的页面
  const pageTypes = {};

  for (let pageNum = 1; pageNum <= Math.min(pdf.numPages, 30); pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => ('str' in item ? item.str : '')).join(' ');

    let pageType = '未知';

    if (pageText.includes('出发顺序')) {
      pageType = '出发顺序';
    } else if (pageText.includes('成绩公告') || pageText.includes('成 绩 公 告')) {
      pageType = '成绩公告';
    } else if (pageText.includes('第一次滑行 成绩') && pageText.includes('成绩排名')) {
      pageType = '第一轮成绩';
    } else if (pageText.includes('第二次滑行 成绩') && pageText.includes('成绩排名')) {
      pageType = '第二轮成绩';
    } else if (pageText.includes('总 成 绩') || pageText.includes('总成绩')) {
      pageType = '总成绩';
    } else if (pageText.includes('积分')) {
      pageType = '含积分页';
    }

    // 检测组别
    const groupMatch = pageText.match(/(U\d{2})(男|女)子组/);
    const group = groupMatch ? `${groupMatch[1]}${groupMatch[2]}子组` : '';

    // 检测项目
    let sport = '';
    if (pageText.includes('回转')) sport = '回转';
    if (pageText.includes('大回转')) sport = '大回转';
    if (pageText.includes('超级大回转')) sport = '超级大回转';

    console.log(`第${pageNum}页: [${pageType}] ${group} ${sport}`);

    if (!pageTypes[pageType]) pageTypes[pageType] = [];
    pageTypes[pageType].push(pageNum);
  }

  console.log('\n========== 页面类型统计 ==========');
  for (const [type, pages] of Object.entries(pageTypes)) {
    console.log(`${type}: ${pages.join(', ')}`);
  }
}

findResultPages().catch(console.error);
