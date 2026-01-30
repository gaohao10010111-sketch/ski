/**
 * 按日期重新排序比赛数据（最新的在前面）
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/latestResults.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// 提取 TypeScript 接口定义部分
const headerMatch = content.match(/([\s\S]*?export const latestResults: ResultsData = )/);
if (!headerMatch) {
  console.log('未找到数据头部');
  process.exit(1);
}
const header = headerMatch[1];

// 提取 JSON 数据部分
const jsonPart = content.slice(header.length).replace(/;\s*$/, '');

// 解析 JSON
let data;
try {
  data = JSON.parse(jsonPart);
} catch (e) {
  console.log('JSON 解析失败，尝试 eval');
  data = eval('(' + jsonPart + ')');
}

console.log('原顺序:');
data.competitions.forEach((c, i) => console.log(`${i+1}. ${c.date} - ${c.competition}`));

// 按日期倒序排列（最新的在前面）
data.competitions.sort((a, b) => new Date(b.date) - new Date(a.date));

console.log('\n新顺序（按时间倒序）:');
data.competitions.forEach((c, i) => console.log(`${i+1}. ${c.date} - ${c.competition}`));

// 重建文件内容
const newContent = header + JSON.stringify(data, null, 2) + ';\n';

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('\n文件已更新，共', data.competitions.length, '场比赛');
