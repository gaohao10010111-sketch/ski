const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

// 读取 latestResults
const content = fs.readFileSync(path.join(__dirname, '../src/data/latestResults.ts'), 'utf-8');
const match = content.match(/export const latestResults[^=]*=\s*(\{[\s\S]*?\n\};)/);
const dataStr = match[1].replace(/\};$/, '}');
const latestResults = eval('(' + dataStr + ')');

// 获取松花湖站比赛
const songhuahu = latestResults.competitions.find(c => c.competition.includes('松花湖'));
if (!songhuahu) {
  console.log('未找到松花湖站数据');
  process.exit(1);
}

console.log('找到松花湖站:', songhuahu.competition);
console.log('项目数:', songhuahu.events.length);

// 检查数据库中是否已有松花湖站
const existing = db.prepare("SELECT COUNT(*) as cnt FROM Competition WHERE name LIKE '%松花湖%'").get();
if (existing.cnt > 0) {
  console.log('数据库中已存在松花湖站数据，跳过导入');
  process.exit(0);
}

// 插入比赛
const compId = 'songhuahu-alpine-2026';
const insertComp = db.prepare(`
  INSERT INTO Competition (id, name, sportType, discipline, startDate, endDate, location, venue, status, createdAt, updatedAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
`);

try {
  insertComp.run(
    compId,
    songhuahu.competition,
    'alpine',
    '高山滑雪',
    songhuahu.date,
    songhuahu.endDate,
    songhuahu.location,
    songhuahu.location,
    'COMPLETED'
  );
  console.log('已插入比赛:', compId);
} catch (e) {
  console.log('比赛插入失败:', e.message);
}

// 插入成绩
const insertResult = db.prepare(`
  INSERT INTO CompetitionResult (id, competitionId, athleteId, athleteName, team, rank, points, discipline, ageGroup, gender, createdAt, updatedAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
`);

let count = 0;
songhuahu.events.forEach((event, eventIdx) => {
  event.athletes.forEach((athlete, athleteIdx) => {
    if (athlete.points && athlete.points > 0) {
      const resultId = 'songhuahu-' + eventIdx + '-' + athleteIdx;
      const athleteId = 'athlete-' + athlete.name.split(' ').join('');
      try {
        insertResult.run(
          resultId,
          compId,
          athleteId,
          athlete.name,
          athlete.team,
          athlete.rank,
          athlete.points,
          event.discipline,
          event.ageGroup,
          event.gender
        );
        count++;
      } catch (e) {
        // 忽略重复
      }
    }
  });
});

console.log('已插入成绩记录:', count);
db.close();
