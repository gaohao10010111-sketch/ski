const XLSX = require('xlsx');
const workbook = XLSX.readFile('docs/中国滑雪积分系统项目投入预算表.xlsx');
workbook.SheetNames.forEach(sheetName => {
  console.log('=== Sheet:', sheetName, '===');
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  data.forEach((row, i) => {
    if (row.some(cell => cell !== '')) {
      console.log(i + 1, '|', row.join(' | '));
    }
  });
  console.log('');
});
