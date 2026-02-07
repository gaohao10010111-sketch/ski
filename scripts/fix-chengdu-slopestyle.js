#!/usr/bin/env node
/**
 * 修复成都站单板坡障(comp_47wce2)全部成绩数据
 *
 * 问题：原始导入数据几乎全错 - rank 1-3 名字对但号码不对，rank 4+ 完全是不同的运动员
 * 方案：删除全部旧数据，从PDF重新导入59条正确记录
 *
 * 来源: 2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛_成都.pdf (pdfplumber提取)
 */

const Database = require('better-sqlite3');
const db = new Database('prisma/ski.db');

const COMP_ID = 'comp_47wce2';
const POINTS_TABLE = {
  1: 360, 2: 329, 3: 303, 4: 280, 5: 260, 6: 242, 7: 226, 8: 212, 9: 199, 10: 187,
  11: 176, 12: 166, 13: 157, 14: 149, 15: 141, 16: 134, 17: 127, 18: 121, 19: 115, 20: 110,
  21: 105, 22: 100, 23: 96, 24: 92, 25: 88, 26: 84, 27: 80, 28: 76, 29: 73, 30: 70,
  31: 67, 32: 64, 33: 61, 34: 58, 35: 56, 36: 54, 37: 52, 38: 50, 39: 48, 40: 46,
  41: 44, 42: 42, 43: 40, 44: 38, 45: 36, 46: 34, 47: 32, 48: 30, 49: 28, 50: 24,
};

// Correct data from PDF (pdfplumber extraction)
const correctResults = [
  // U11 女子组 (9人)
  { ageGroup: 'U11', gender: '女子组', rank: 1, bib: 11, name: '牛安芷芸', team: '个人', athleteGender: '女' },
  { ageGroup: 'U11', gender: '女子组', rank: 2, bib: 4, name: '孙嘉怡', team: '河北省体育局冬季运动中心', athleteGender: '女' },
  { ageGroup: 'U11', gender: '女子组', rank: 3, bib: 2, name: '翟姝涵', team: '北京市冬季运动管理中心', athleteGender: '女' },
  { ageGroup: 'U11', gender: '女子组', rank: 4, bib: 13, name: '张诗涵', team: '石家庄市冰雪与足球运动推广训练中心', athleteGender: '女' },
  { ageGroup: 'U11', gender: '女子组', rank: 5, bib: 3, name: '周斯言', team: '个人', athleteGender: '女' },
  { ageGroup: 'U11', gender: '女子组', rank: 6, bib: 6, name: '杨茗然', team: '河北省体育局冬季运动中心', athleteGender: '女' },
  { ageGroup: 'U11', gender: '女子组', rank: 7, bib: 1, name: '蒋柠萱', team: '北京市冬季运动管理中心', athleteGender: '女' },
  { ageGroup: 'U11', gender: '女子组', rank: 8, bib: 20, name: '姚予希', team: '成都热雪奇迹', athleteGender: '女' },
  { ageGroup: 'U11', gender: '女子组', rank: 9, bib: 7, name: '冷昕莲', team: '河北省体育局冬季运动中心', athleteGender: '女' },
  // U11 男子组 (17人)
  { ageGroup: 'U11', gender: '男子组', rank: 1, bib: 18, name: '刘翰泽', team: '个人', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 2, bib: 24, name: '王祖安', team: '河南省体育局', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 3, bib: 3, name: '刘沐泽', team: '石家庄市冰雪与足球运动推广训练中心', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 4, bib: 26, name: '陈宇垚', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 5, bib: 2, name: '范天成', team: '个人', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 6, bib: 23, name: '魏子博', team: '河南省体育局', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 7, bib: 25, name: '王曌霖', team: '河南省体育局', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 8, bib: 20, name: '林芮锋', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 9, bib: 9, name: '赵严诺', team: '河北省体育局冬季运动中心', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 10, bib: 32, name: '曾星越', team: '个人', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 11, bib: 39, name: '宁浩然', team: '成都热雪奇迹', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 12, bib: 38, name: '马泰铭', team: '成都热雪奇迹', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 13, bib: 5, name: '石昊桐', team: '北京市冬季运动管理中心', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 14, bib: 41, name: '刘子逸', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 15, bib: 40, name: '陈奎亦', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 16, bib: 36, name: '朱秋霖', team: '个人', athleteGender: '男' },
  { ageGroup: 'U11', gender: '男子组', rank: 17, bib: 6, name: '程锦辰', team: '河北省体育局冬季运动中心', athleteGender: '男' },
  // U15 女子组 (11人)
  { ageGroup: 'U15', gender: '女子组', rank: 1, bib: 8, name: '鱼嘉怡', team: '河北省体育局冬季运动中心', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 2, bib: 15, name: '赖文悦', team: '四川体育职业学院', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 3, bib: 14, name: '叶欣瑞', team: '四川体育职业学院', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 4, bib: 9, name: '贺舒玉', team: '重庆市沙坪坝区体育运动学校', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 5, bib: 12, name: '高艺轩', team: '个人', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 6, bib: 18, name: '杨可轩', team: '广西射击射箭运动发展中心', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 7, bib: 17, name: '周雨辰', team: '广西射击射箭运动发展中心', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 8, bib: 16, name: '周雨欣', team: '广西射击射箭运动发展中心', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 9, bib: 5, name: '苏常格', team: '河北省体育局冬季运动中心', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 10, bib: 10, name: '王若西', team: '重庆市沙坪坝区体育运动学校', athleteGender: '女' },
  { ageGroup: 'U15', gender: '女子组', rank: 11, bib: 19, name: '闫梓左', team: '个人', athleteGender: '女' },
  // U15 男子组 (15人)
  { ageGroup: 'U15', gender: '男子组', rank: 1, bib: 27, name: '袁梓程', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 2, bib: 1, name: '王恒宇', team: '个人', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 3, bib: 35, name: '谭凯元', team: '个人', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 4, bib: 30, name: '郭彧铭', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 5, bib: 22, name: '梁嘉俊', team: '石家庄市冰雪与足球运动推广训练中心', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 6, bib: 19, name: '张家睿', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 7, bib: 4, name: '高翊博', team: '北京市冬季运动管理中心', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 8, bib: 7, name: '麦冠航', team: '河北省体育局冬季运动中心', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 9, bib: 16, name: '张钊宁', team: '重庆市沙坪坝区体育运动学校', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 10, bib: 15, name: '于瀚', team: '重庆市沙坪坝区体育运动学校', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 11, bib: 37, name: '邓与骜', team: '成都热雪奇迹', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 12, bib: 29, name: '刘子俊', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 13, bib: 14, name: '罗知腾', team: '重庆市沙坪坝区体育运动学校', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 14, bib: 33, name: '刘名豪', team: '个人', athleteGender: '男' },
  { ageGroup: 'U15', gender: '男子组', rank: 15, bib: 8, name: '王天磊', team: '河北省体育局冬季运动中心', athleteGender: '男' },
  // U18 男子组 (7人)
  { ageGroup: 'U18', gender: '男子组', rank: 1, bib: 28, name: '李俊辛', team: '四川体育职业学院', athleteGender: '男' },
  { ageGroup: 'U18', gender: '男子组', rank: 2, bib: 13, name: '封树渝', team: '重庆市沙坪坝区体育运动学校', athleteGender: '男' },
  { ageGroup: 'U18', gender: '男子组', rank: 3, bib: 21, name: '米馥豪', team: '石家庄市冰雪与足球运动推广训练中心', athleteGender: '男' },
  { ageGroup: 'U18', gender: '男子组', rank: 4, bib: 11, name: '黄子剑', team: '湖北省武术和冬季运动管理中心', athleteGender: '男' },
  { ageGroup: 'U18', gender: '男子组', rank: 5, bib: 10, name: '罗皓桉', team: '湖北省武术和冬季运动管理中心', athleteGender: '男' },
  { ageGroup: 'U18', gender: '男子组', rank: 6, bib: 12, name: '倪文凯', team: '湖北省武术和冬季运动管理中心', athleteGender: '男' },
  { ageGroup: 'U18', gender: '男子组', rank: 7, bib: 17, name: '雷涵文', team: '重庆市沙坪坝区体育运动学校', athleteGender: '男' },
];

function findOrCreateAthlete(name, team, gender) {
  // Try exact match first
  let athlete = db.prepare('SELECT * FROM Athlete WHERE name = ? AND team = ?').get(name, team);
  if (athlete) return athlete;

  // Try by name + gender (team might differ slightly between events)
  athlete = db.prepare('SELECT * FROM Athlete WHERE name = ? AND gender = ?').get(name, gender);
  if (athlete) {
    return athlete;
  }

  // Create new athlete
  const id = 'athlete_' + Math.random().toString(36).substring(2, 10);
  db.prepare(`
    INSERT INTO Athlete (id, name, gender, team, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))
  `).run(id, name, gender, team);

  console.log(`  Created new athlete: ${name} (${team})`);
  return db.prepare('SELECT * FROM Athlete WHERE id = ?').get(id);
}

// Step 1: Show current state
const oldCount = db.prepare('SELECT COUNT(*) as cnt FROM Result WHERE competitionId = ?').get(COMP_ID).cnt;
console.log(`修复成都站单板坡障(comp_47wce2)成绩数据\n`);
console.log(`当前DB记录: ${oldCount}`);
console.log(`PDF正确记录: ${correctResults.length}\n`);

// Step 2: Delete all old results for this competition
const deleteResult = db.prepare('DELETE FROM Result WHERE competitionId = ?').run(COMP_ID);
console.log(`已删除旧记录: ${deleteResult.changes} 条\n`);

// Step 3: Insert correct results
let added = 0;
for (const entry of correctResults) {
  const points = POINTS_TABLE[entry.rank] || 0;
  const athlete = findOrCreateAthlete(entry.name, entry.team, entry.athleteGender);

  const resultId = 'result_' + Math.random().toString(36).substring(2, 10);
  db.prepare(`
    INSERT INTO Result (id, athleteId, competitionId, discipline, ageGroup, gender, rank, bib, points, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `).run(resultId, athlete.id, COMP_ID, '坡面障碍技巧', entry.ageGroup, entry.gender, entry.rank, entry.bib, points);
  added++;
}

console.log(`\n已添加正确记录: ${added} 条`);

// Step 4: Verify
const newCount = db.prepare('SELECT COUNT(*) as cnt FROM Result WHERE competitionId = ?').get(COMP_ID).cnt;
console.log(`\n验证 - 当前记录数: ${newCount}`);

const events = db.prepare(`
  SELECT ageGroup, gender, COUNT(*) as cnt
  FROM Result WHERE competitionId = ?
  GROUP BY ageGroup, gender ORDER BY ageGroup, gender
`).all(COMP_ID);

for (const e of events) {
  console.log(`  ${e.ageGroup} ${e.gender}: ${e.cnt}`);
}

// Step 5: Clean up orphaned athletes (ghost athletes with no results)
const ghostNames = ['李俣辛', '冯晨峰', '耿浩然', '李汶轩'];
for (const name of ghostNames) {
  const athlete = db.prepare('SELECT id FROM Athlete WHERE name = ?').get(name);
  if (athlete) {
    const resultCount = db.prepare('SELECT COUNT(*) as cnt FROM Result WHERE athleteId = ?').get(athlete.id).cnt;
    if (resultCount === 0) {
      // Check SeasonTotal too
      db.prepare('DELETE FROM SeasonTotal WHERE athleteId = ?').run(athlete.id);
      db.prepare('DELETE FROM Athlete WHERE id = ?').run(athlete.id);
      console.log(`  Cleaned up orphaned athlete: ${name}`);
    }
  }
}

db.close();
console.log('\n修复完成!');
