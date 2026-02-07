#!/usr/bin/env node
/**
 * 修复成都站高山滑雪缺失的5名运动员
 *
 * 来源: 2025-2026赛季全国高山滑雪U系列比赛_成都.pdf
 *
 * 缺失:
 * - 回转 U18 男子组: rank 11 (李正翰)
 * - 大回转 U18 男子组: ranks 11-14 (王宏轩, 王冠霖, 马健剀, 李正翰)
 */

const Database = require('better-sqlite3');
const db = new Database('prisma/ski.db');

const COMP_ID = 'comp_qj8pm';
const POINTS_TABLE = {
  1: 360, 2: 329, 3: 303, 4: 280, 5: 260, 6: 242, 7: 226, 8: 212, 9: 199, 10: 187,
  11: 176, 12: 166, 13: 157, 14: 149, 15: 141, 16: 134, 17: 127, 18: 121, 19: 115, 20: 110,
  21: 105, 22: 100, 23: 96, 24: 92, 25: 88, 26: 84, 27: 80, 28: 76, 29: 73, 30: 70,
};

const missingAthletes = [
  // 回转 U18 男子组
  { discipline: '回转', ageGroup: 'U18', gender: '男子组', athleteGender: '男',
    rank: 11, bib: 9, name: '李正翰', team: '个人' },
  // 大回转 U18 男子组
  { discipline: '大回转', ageGroup: 'U18', gender: '男子组', athleteGender: '男',
    rank: 11, bib: 14, name: '王宏轩', team: '河北省体育局冬季运动中心' },
  { discipline: '大回转', ageGroup: 'U18', gender: '男子组', athleteGender: '男',
    rank: 12, bib: 1, name: '王冠霖', team: '吉林坤伦滑雪俱乐部' },
  { discipline: '大回转', ageGroup: 'U18', gender: '男子组', athleteGender: '男',
    rank: 13, bib: 2, name: '马健剀', team: '吉林坤伦滑雪俱乐部' },
  { discipline: '大回转', ageGroup: 'U18', gender: '男子组', athleteGender: '男',
    rank: 14, bib: 9, name: '李正翰', team: '个人' },
];

function findOrCreateAthlete(name, team, gender) {
  // Try exact match first
  let athlete = db.prepare('SELECT * FROM Athlete WHERE name = ? AND team = ?').get(name, team);
  if (athlete) return athlete;

  // Try by name only (might have different team from another event)
  athlete = db.prepare('SELECT * FROM Athlete WHERE name = ? AND gender = ?').get(name, gender);
  if (athlete) {
    console.log(`  Found ${name} with team "${athlete.team}" (expected "${team}")`);
    return athlete;
  }

  // Create new athlete
  const id = 'athlete_' + Math.random().toString(36).substring(2, 10);
  db.prepare(`
    INSERT INTO Athlete (id, name, gender, team, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))
  `).run(id, name, gender === '男' ? '男' : '女', team);

  console.log(`  Created new athlete: ${name} (${team})`);
  return db.prepare('SELECT * FROM Athlete WHERE id = ?').get(id);
}

console.log('修复成都站高山滑雪缺失成绩\n');

let added = 0;
let skipped = 0;

for (const entry of missingAthletes) {
  const points = POINTS_TABLE[entry.rank] || 0;
  const athlete = findOrCreateAthlete(entry.name, entry.team, entry.athleteGender);

  // Check if result already exists
  const existing = db.prepare(`
    SELECT * FROM Result
    WHERE athleteId = ? AND competitionId = ? AND discipline = ? AND ageGroup = ? AND gender = ?
  `).get(athlete.id, COMP_ID, entry.discipline, entry.ageGroup, entry.gender);

  if (existing) {
    console.log(`  Skip: ${entry.name} ${entry.discipline} ${entry.ageGroup} ${entry.gender} (already exists)`);
    skipped++;
    continue;
  }

  const resultId = 'result_' + Math.random().toString(36).substring(2, 10);
  db.prepare(`
    INSERT INTO Result (id, athleteId, competitionId, discipline, ageGroup, gender, rank, bib, points, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `).run(resultId, athlete.id, COMP_ID, entry.discipline, entry.ageGroup, entry.gender, entry.rank, entry.bib, points);

  console.log(`  Added: ${entry.rank}. ${entry.name} - ${entry.discipline} ${entry.ageGroup} ${entry.gender} (${points}pts)`);
  added++;
}

console.log(`\n结果: 添加 ${added} 条, 跳过 ${skipped} 条`);

// Verify
const counts = db.prepare(`
  SELECT discipline, ageGroup, gender, COUNT(*) as cnt
  FROM Result WHERE competitionId = ? AND ageGroup = 'U18' AND gender = '男子组'
  GROUP BY discipline, ageGroup, gender
`).all(COMP_ID);

console.log('\n验证 U18男子组:');
for (const c of counts) {
  console.log(`  ${c.discipline} ${c.ageGroup} ${c.gender}: ${c.cnt}`);
}

db.close();
