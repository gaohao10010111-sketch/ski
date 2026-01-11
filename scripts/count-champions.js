// 统计各项目冠军数量
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../src/data/latestResults.ts');
const content = fs.readFileSync(dataFile, 'utf-8');

// 提取 latestResults 对象
const match = content.match(/export const latestResults.*?=\s*(\{[\s\S]*\});?\s*$/m);
if (!match) {
  console.error('无法解析 latestResults');
  process.exit(1);
}

// 使用eval解析（仅用于本地脚本）
const data = eval('(' + match[1].replace(/;$/, '') + ')');

const champsByType = {};

data.competitions.forEach(comp => {
  const sport = comp.sportType;
  if (!champsByType[sport]) champsByType[sport] = [];

  comp.events.forEach(event => {
    const winner = event.athletes.find(a => a.rank === 1);
    if (winner) {
      champsByType[sport].push({
        name: winner.name,
        event: `${event.gender} ${event.ageGroup} ${event.discipline}`,
        competition: comp.competition
      });
    }
  });
});

console.log('=== 各项目冠军详细统计 ===\n');

Object.entries(champsByType).forEach(([sport, champs]) => {
  console.log(`【${sport}】共 ${champs.length} 位冠军:`);
  champs.forEach((c, i) => {
    console.log(`  ${i+1}. ${c.name} - ${c.event}`);
  });
  console.log('');
});

console.log('=== 页面显示统计 ===\n');

const snowboardSS = (champsByType['snowboard-slopestyle']?.length || 0) + (champsByType['snowboard-bigair']?.length || 0);
const freestyleSS = (champsByType['freestyle-slopestyle']?.length || 0) + (champsByType['freestyle-bigair']?.length || 0);
const parallel = champsByType['snowboard-parallel']?.length || 0;
const alpine = champsByType['alpine']?.length || 0;

console.log(`单板坡障/大跳台页面: ${snowboardSS}位冠军 (页面显示前8位)`);
console.log(`自由式坡障/大跳台页面: ${freestyleSS}位冠军 (页面显示前8位)`);
console.log(`单板平行项目页面: ${parallel}位冠军 (页面显示前8位)`);
console.log(`高山滑雪页面: ${alpine}位冠军 (页面显示前8位)`);
console.log(`\n总计: ${snowboardSS + freestyleSS + parallel + alpine}位冠军`);
