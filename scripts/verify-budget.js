const XLSX = require('xlsx');
const workbook = XLSX.readFile('docs/中国滑雪积分系统项目投入预算表_v2.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });

console.log('=== 修改后的预算表验证 ===\n');

let totalFromSheet = 0;
const modules = [];

data.forEach((row) => {
  const colG = row[6]; // 合计列
  const module = row[2] || row[0] || '';

  if (colG && typeof colG === 'number' && colG > 0 && colG < 500000) {
    modules.push({ name: module, amount: colG });
    totalFromSheet += colG;
  }
});

modules.forEach((m, i) => {
  console.log(`${String(i + 1).padStart(2)}. ${m.name.padEnd(20)} ${String(m.amount).padStart(8)}元`);
});

console.log('\n' + '='.repeat(40));
console.log(`   合计总金额: ${totalFromSheet}元`);
console.log('='.repeat(40));
