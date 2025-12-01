const XLSX = require('xlsx');
const workbook = XLSX.readFile('docs/中国滑雪积分系统项目投入预算表_v2.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];

console.log('=== 原始Excel合并单元格信息 ===\n');
if (sheet['!merges']) {
  sheet['!merges'].forEach((merge, i) => {
    console.log('合并' + (i+1) + ': 行' + (merge.s.r+1) + '-' + (merge.e.r+1) + ', 列' + (merge.s.c+1) + '-' + (merge.e.c+1));
  });
} else {
  console.log('无合并单元格信息');
}

console.log('\n=== 原始Excel前40行数据 ===\n');
const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
data.slice(0, 40).forEach((row, i) => {
  // 只显示有内容的列
  const seq = row[0];
  const sys = row[1];
  const mod = row[2];
  const param = row[3];
  const qty = row[4];
  const price = row[5];
  const total = row[6];

  if (seq !== '' || sys !== '' || mod !== '' || param !== '') {
    console.log((i+1) + ': 序号=[' + seq + '] 子系统=[' + sys + '] 模块=[' + mod + '] 参数=[' + String(param).substring(0,20) + '] 单价=' + price + ' 合计=' + total);
  }
});
