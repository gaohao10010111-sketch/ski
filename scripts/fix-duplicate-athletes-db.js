/**
 * 修复数据库中重复的运动员记录
 * 将同一运动员在不同比赛中使用的不同队伍名称统一
 *
 * 运行: node scripts/fix-duplicate-athletes-db.js
 */

const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

// 队伍名称标准化映射 - 将变体名称映射到标准名称
const teamNameMapping = {
  // 石家庄市冰雪与足球运动 变体
  "石家庄市冰雪与足球运动推广训练中心": "石家庄市冰雪与足球运动中心",
  "石家庄市冰雪与足球运动推广与训练中心": "石家庄市冰雪与足球运动中心",

  // 重庆市体育运动 变体
  "重庆市沙坪坝区体育运动学校": "重庆市冬季运动管理中心",
  "重庆市沙坪坝区体育运动中心": "重庆市冬季运动管理中心",

  // 俱乐部 -> 体育学院
  "万域芳菲俱乐部": "四川体育职业学院",
  "滑雪兔俱乐部": "个人",
  "成都市武侯区滑雪运动协会": "个人",

  // 特殊情况
  "谭凯元": "个人",  // 队伍名错误填成运动员名
};

// 特定运动员的队伍修正（针对那些在不同省份注册的运动员，选择最新/最常用的队伍）
const athleteTeamFixes = {
  // 格式: "运动员名": "标准队伍名"
  // 这些运动员在不同省份有注册，需要统一到一个队伍
  "叶欣瑞": "四川体育职业学院",
  "孙嘉怡": "河北省体育局冬季运动中心",
  "李俊辛": "四川体育职业学院",
  "王祖安": "河南省体育局",
  "王恒宇": "个人",
  "鱼嘉怡": "河北省体育局冬季运动中心",
  "封树渝": "重庆市冬季运动管理中心",
  "杨茗然": "个人",
  "孙焕轲": "河南省体育局",
  "翟姝涵": "北京市冬季运动管理中心",
  "郭彧铭": "个人",
};

function normalizeTeamName(team) {
  return teamNameMapping[team] || team;
}

function fixDuplicateAthletes() {
  console.log('开始修复重复运动员数据...\n');

  // 1. 先获取所有重复的运动员
  const duplicates = db.prepare(`
    SELECT name, COUNT(*) as cnt, GROUP_CONCAT(id, ',') as ids, GROUP_CONCAT(team, '|||') as teams
    FROM Athlete
    GROUP BY name
    HAVING cnt > 1
  `).all();

  console.log(`发现 ${duplicates.length} 个重复运动员\n`);

  let mergedCount = 0;
  let updatedResults = 0;

  for (const dup of duplicates) {
    const athleteIds = dup.ids.split(',');
    const teams = dup.teams.split('|||');

    console.log(`处理: ${dup.name} (${dup.cnt}个记录)`);
    console.log(`  原队伍: ${teams.join(' / ')}`);

    // 确定标准队伍名
    let standardTeam = null;

    // 先检查是否有特定修正
    if (athleteTeamFixes[dup.name]) {
      standardTeam = athleteTeamFixes[dup.name];
    } else {
      // 尝试通过映射找到标准名称
      for (const team of teams) {
        const normalized = normalizeTeamName(team);
        if (normalized !== team) {
          // 找到了一个需要映射的队伍，使用映射后的名称
          standardTeam = normalized;
          break;
        }
      }
      // 如果没有映射，使用第一个非映射的队伍名
      if (!standardTeam) {
        for (const team of teams) {
          if (!teamNameMapping[team]) {
            standardTeam = team;
            break;
          }
        }
      }
      // 最后备选：使用第一个
      if (!standardTeam) {
        standardTeam = normalizeTeamName(teams[0]);
      }
    }

    console.log(`  标准队伍: ${standardTeam}`);

    // 找到或创建标准运动员记录
    let primaryAthlete = db.prepare(`
      SELECT id FROM Athlete WHERE name = ? AND team = ?
    `).get(dup.name, standardTeam);

    let primaryId;
    if (primaryAthlete) {
      primaryId = primaryAthlete.id;
    } else {
      // 创建新的标准记录
      primaryId = `athlete-${dup.name}-${standardTeam}`.replace(/\s+/g, '-');
      const firstAthlete = db.prepare('SELECT * FROM Athlete WHERE id = ?').get(athleteIds[0]);
      db.prepare(`
        INSERT INTO Athlete (id, name, team, gender, birthYear, updatedAt)
        VALUES (?, ?, ?, ?, ?, datetime('now'))
      `).run(primaryId, dup.name, standardTeam, firstAthlete.gender, firstAthlete.birthYear);
      console.log(`  创建新记录: ${primaryId}`);
    }

    // 将所有成绩指向标准运动员ID
    for (const oldId of athleteIds) {
      if (oldId !== primaryId) {
        // 更新成绩表中的athleteId
        const updateResult = db.prepare(`
          UPDATE Result SET athleteId = ? WHERE athleteId = ?
        `).run(primaryId, oldId);
        updatedResults += updateResult.changes;

        // 删除旧的运动员记录
        db.prepare('DELETE FROM Athlete WHERE id = ?').run(oldId);
        console.log(`  合并: ${oldId} -> ${primaryId}`);
      }
    }

    // 更新主记录的队伍名（如果需要）
    db.prepare(`
      UPDATE Athlete SET team = ?, updatedAt = datetime('now') WHERE id = ?
    `).run(standardTeam, primaryId);

    mergedCount++;
    console.log('');
  }

  // 2. 全局队伍名称标准化（处理非重复但队伍名需要修正的情况）
  console.log('执行全局队伍名称标准化...\n');

  for (const [oldName, newName] of Object.entries(teamNameMapping)) {
    const athletesToUpdate = db.prepare(`
      SELECT id, name FROM Athlete WHERE team = ?
    `).all(oldName);

    for (const athlete of athletesToUpdate) {
      // 检查是否已存在使用标准队伍名的同名运动员
      const existing = db.prepare(`
        SELECT id FROM Athlete WHERE name = ? AND team = ?
      `).get(athlete.name, newName);

      if (existing && existing.id !== athlete.id) {
        // 需要合并
        const updateResult = db.prepare(`
          UPDATE Result SET athleteId = ? WHERE athleteId = ?
        `).run(existing.id, athlete.id);
        updatedResults += updateResult.changes;
        db.prepare('DELETE FROM Athlete WHERE id = ?').run(athlete.id);
        console.log(`  合并队伍变体: ${athlete.name} (${oldName} -> ${newName})`);
      } else {
        // 只更新队伍名
        db.prepare(`
          UPDATE Athlete SET team = ?, updatedAt = datetime('now') WHERE id = ?
        `).run(newName, athlete.id);
      }
    }
  }

  console.log('\n========== 修复完成 ==========');
  console.log(`合并运动员数: ${mergedCount}`);
  console.log(`更新成绩记录数: ${updatedResults}`);

  // 验证
  const remainingDuplicates = db.prepare(`
    SELECT name, COUNT(*) as cnt FROM Athlete GROUP BY name HAVING cnt > 1
  `).all();

  console.log(`\n剩余重复运动员: ${remainingDuplicates.length}`);
  if (remainingDuplicates.length > 0) {
    console.log('需要手动处理:');
    remainingDuplicates.forEach(d => console.log(`  - ${d.name} (${d.cnt}个记录)`));
  }

  // 统计
  const athleteCount = db.prepare('SELECT COUNT(*) as cnt FROM Athlete').get();
  const resultCount = db.prepare('SELECT COUNT(*) as cnt FROM Result').get();
  console.log(`\n数据库统计:`);
  console.log(`  运动员总数: ${athleteCount.cnt}`);
  console.log(`  成绩总数: ${resultCount.cnt}`);

  db.close();
}

fixDuplicateAthletes();
