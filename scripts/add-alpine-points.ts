// 为高山滑雪数据添加积分
// 360分制积分表

const fs = require('fs')
const path = require('path')

// 360分制积分表（第1名360分，第50名1分）
const POINTS_TABLE: number[] = [
  360, 329, 303, 280, 260, 242, 226, 212, 199, 187,  // 1-10
  176, 166, 157, 149, 141, 134, 127, 121, 115, 110,  // 11-20
  105, 100, 96, 92, 88, 84, 80, 76, 72, 68,          // 21-30
  64, 61, 58, 55, 52, 49, 46, 43, 40, 37,            // 31-40
  34, 31, 28, 25, 22, 19, 16, 13, 10, 1              // 41-50
]

function getPoints(rank: number): number {
  if (rank < 1 || rank > 50) return 0
  return POINTS_TABLE[rank - 1]
}

// 读取文件
const filePath = path.join(__dirname, '../src/data/latestResults.ts')
let content = fs.readFileSync(filePath, 'utf-8')

// 匹配高山滑雪比赛的运动员数据块
// 找到 sportType: "alpine" 的比赛，然后为每个运动员添加 points

// 使用正则匹配高山滑雪部分
const alpinePattern = /"sportType":\s*"alpine"[\s\S]*?"events":\s*\[([\s\S]*?)\n\s{4}\]/g

let match = alpinePattern.exec(content)
if (match) {
  const eventsContent = match[1]

  // 为每个运动员添加积分
  // 匹配: "diff": "xxx" } 或 "diff": "xxx"\n            }
  // 添加: , "points": xxx

  let updatedEvents = eventsContent

  // 找到每个 athletes 数组
  const athletesPattern = /"athletes":\s*\[([\s\S]*?)\n\s{10}\]/g
  let athletesMatch

  while ((athletesMatch = athletesPattern.exec(eventsContent)) !== null) {
    const athletesContent = athletesMatch[1]

    // 为每个运动员添加积分
    let updatedAthletes = athletesContent
    let rank = 0

    // 匹配每个运动员对象
    const athletePattern = /\{([^{}]+)\}/g
    let athleteMatch

    while ((athleteMatch = athletePattern.exec(athletesContent)) !== null) {
      const athleteStr = athleteMatch[1]

      // 提取 rank
      const rankMatch = athleteStr.match(/"rank":\s*(\d+)/)
      if (rankMatch) {
        rank = parseInt(rankMatch[1])
        const points = getPoints(rank)

        // 检查是否已有 points
        if (!athleteStr.includes('"points"')) {
          // 在 "diff" 后添加 points
          const newAthleteStr = athleteStr.replace(
            /"diff":\s*"([^"]+)"/,
            `"diff": "$1",\n              "points": ${points}`
          )
          updatedAthletes = updatedAthletes.replace(athleteStr, newAthleteStr)
        }
      }
    }

    updatedEvents = updatedEvents.replace(athletesContent, updatedAthletes)
  }

  content = content.replace(eventsContent, updatedEvents)
}

// 写回文件
fs.writeFileSync(filePath, content)
console.log('高山滑雪积分已添加完成！')
