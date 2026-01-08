// 为高山滑雪数据添加积分
const fs = require('fs');
const path = require('path');

// 360分制积分表
const POINTS_TABLE = [
  360, 329, 303, 280, 260, 242, 226, 212, 199, 187,  // 1-10
  176, 166, 157, 149, 141, 134, 127, 121, 115, 110,  // 11-20
  105, 100, 96, 92, 88, 84, 80, 76, 72, 68,          // 21-30
  64, 61, 58, 55, 52, 49, 46, 43, 40, 37,            // 31-40
  34, 31, 28, 25, 22, 19, 16, 13, 10, 1              // 41-50
];

function getPoints(rank) {
  if (rank < 1 || rank > 50) return 0;
  return POINTS_TABLE[rank - 1];
}

const filePath = path.join(__dirname, '../src/data/latestResults.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// 匹配所有没有 points 字段但有 diff 字段的运动员记录
// 格式: "diff": "xxx"\n            }
// 替换为: "diff": "xxx",\n              "points": xxx\n            }

let count = 0;

// 使用正则替换每个缺少 points 的运动员
content = content.replace(
  /("rank": (\d+),[\s\S]*?"diff": "[^"]*")(\s*\n\s*\})/g,
  (match, before, rankStr, after) => {
    // 检查是否已有 points
    if (match.includes('"points"')) {
      return match;
    }
    const rank = parseInt(rankStr);
    const points = getPoints(rank);
    count++;
    return `${before},\n              "points": ${points}${after}`;
  }
);

fs.writeFileSync(filePath, content);
console.log(`已为 ${count} 名运动员添加积分`);
