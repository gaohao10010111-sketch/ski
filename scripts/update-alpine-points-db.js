// 更新数据库中高山滑雪成绩的积分
const Database = require('better-sqlite3');
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

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

// 查询高山滑雪比赛ID
const alpineCompetitions = db.prepare(`
  SELECT id, name FROM Competition WHERE sportType = 'alpine'
`).all();

console.log('找到高山滑雪比赛:', alpineCompetitions.length);

if (alpineCompetitions.length === 0) {
  console.log('数据库中没有高山滑雪比赛数据');
  process.exit(0);
}

// 更新每个比赛的成绩积分
let totalUpdated = 0;

for (const comp of alpineCompetitions) {
  console.log(`\n处理比赛: ${comp.name}`);

  // 查询该比赛所有成绩
  const results = db.prepare(`
    SELECT id, rank, points FROM Result WHERE competitionId = ?
  `).all(comp.id);

  console.log(`  成绩记录: ${results.length}`);

  // 更新每条成绩的积分
  const updateStmt = db.prepare(`UPDATE Result SET points = ? WHERE id = ?`);

  for (const result of results) {
    const newPoints = getPoints(result.rank);
    if (result.points !== newPoints) {
      updateStmt.run(newPoints, result.id);
      totalUpdated++;
    }
  }
}

console.log(`\n总共更新了 ${totalUpdated} 条成绩的积分`);

// 同时更新 SeasonTotal 表
console.log('\n重新计算赛季总积分...');

// 获取所有运动员的赛季积分
const seasonTotals = db.prepare(`
  SELECT
    st.id,
    st.athleteId,
    st.season,
    st.ageGroup,
    st.gender,
    (SELECT SUM(r.points) FROM Result r
     JOIN Competition c ON r.competitionId = c.id
     WHERE r.athleteId = st.athleteId
     AND r.ageGroup = st.ageGroup
     AND r.gender = st.gender) as newTotal,
    (SELECT COUNT(*) FROM Result r
     WHERE r.athleteId = st.athleteId
     AND r.ageGroup = st.ageGroup
     AND r.gender = st.gender) as compCount
  FROM SeasonTotal st
`).all();

const updateSeasonStmt = db.prepare(`
  UPDATE SeasonTotal SET totalPoints = ?, competitionCount = ?, avgPoints = ? WHERE id = ?
`);

let seasonUpdated = 0;
for (const st of seasonTotals) {
  const newTotal = st.newTotal || 0;
  const compCount = st.compCount || 0;
  const avgPoints = compCount > 0 ? Math.round(newTotal / compCount) : 0;

  updateSeasonStmt.run(newTotal, compCount, avgPoints, st.id);
  seasonUpdated++;
}

console.log(`更新了 ${seasonUpdated} 条赛季总积分`);

db.close();
console.log('\n数据库更新完成！');
