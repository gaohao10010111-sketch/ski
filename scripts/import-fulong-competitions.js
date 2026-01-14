/**
 * 导入富龙站比赛数据到数据库
 * 从 latestResults.ts 读取富龙站四场比赛数据并插入数据库
 *
 * 运行: node scripts/import-fulong-competitions.js
 */

const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

// 队伍名称标准化映射
const teamNameMapping = {
  // 石家庄市冰雪与足球运动 - 统一为"石家庄市冰雪与足球运动中心"
  "石家庄市冰雪与足球运动推广训练中心": "石家庄市冰雪与足球运动中心",
  "石家庄市冰雪与足球运动推广与训练中心": "石家庄市冰雪与足球运动中心",
  // 重庆市沙坪坝区体育运动 - 统一为"重庆市冬季运动管理中心"
  "重庆市沙坪坝区体育运动学校": "重庆市冬季运动管理中心",
  "重庆市沙坪坝区体育运动中心": "重庆市冬季运动管理中心",
  // 成都市武侯区滑雪运动协会 -> 个人
  "成都市武侯区滑雪运动协会": "个人",
  // 滑雪兔俱乐部 -> 个人
  "滑雪兔俱乐部": "个人",
  // 万域芳菲俱乐部 -> 四川体育职业学院
  "万域芳菲俱乐部": "四川体育职业学院",
  // 西安市竞技体育学校 -> 河北省体育局冬季运动中心
  "西安市竞技体育学校": "河北省体育局冬季运动中心",
  // 哈尔滨市冬季运动与水上运动中心 -> 河北省体育局冬季运动中心
  "哈尔滨市冬季运动与水上运动中心": "河北省体育局冬季运动中心",
  // 特殊情况：谭凯元 单位变体
  "谭凯元": "个人",
};

function normalizeTeamName(team) {
  return teamNameMapping[team] || team;
}

// 富龙站四场比赛数据
const fulongCompetitions = [
  {
    id: 'fulong-freestyle-bigair-2026',
    name: '2025-2026赛季全国自由式滑雪大跳台U系列比赛（富龙站）',
    sportType: 'freestyle-bigair',
    sport: '自由式滑雪大跳台',
    location: '张家口富龙滑雪场',
    date: '2026-01-11',
    endDate: '2026-01-14',
    status: 'completed'
  },
  {
    id: 'fulong-freestyle-slopestyle-2026',
    name: '2025-2026赛季全国自由式滑雪坡面障碍技巧U系列比赛（富龙站）',
    sportType: 'freestyle-slopestyle',
    sport: '自由式滑雪坡面障碍技巧',
    location: '张家口富龙滑雪场',
    date: '2026-01-11',
    endDate: '2026-01-13',
    status: 'completed'
  },
  {
    id: 'fulong-snowboard-bigair-2026',
    name: '2025-2026赛季全国单板滑雪大跳台U系列比赛（富龙站）',
    sportType: 'snowboard-bigair',
    sport: '单板滑雪大跳台',
    location: '张家口富龙滑雪场',
    date: '2026-01-08',
    endDate: '2026-01-11',
    status: 'completed'
  },
  {
    id: 'fulong-snowboard-slopestyle-2026',
    name: '2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（富龙站）',
    sportType: 'snowboard-slopestyle',
    sport: '单板滑雪坡面障碍技巧',
    location: '张家口富龙滑雪场',
    date: '2026-01-08',
    endDate: '2026-01-10',
    status: 'completed'
  }
];

// 从JSON文件导入比赛成绩数据
const latestResults = require('../src/data/latestResults.json');

function importFulongData() {
  console.log('开始导入富龙站比赛数据...\n');

  // 准备语句
  const insertCompetition = db.prepare(`
    INSERT OR IGNORE INTO Competition (id, name, sportType, sport, location, date, endDate, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertAthlete = db.prepare(`
    INSERT INTO Athlete (id, name, team, gender, birthYear, updatedAt)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(name, team) DO UPDATE SET
      birthYear = COALESCE(excluded.birthYear, birthYear),
      updatedAt = datetime('now')
  `);

  const getAthleteId = db.prepare(`
    SELECT id FROM Athlete WHERE name = ? AND team = ?
  `);

  const insertResult = db.prepare(`
    INSERT OR IGNORE INTO Result (id, athleteId, competitionId, discipline, ageGroup, gender, rank, bib, bestScore, points)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let competitionsAdded = 0;
  let athletesAdded = 0;
  let resultsAdded = 0;

  // 遍历latestResults中的富龙站比赛
  for (const comp of latestResults.competitions) {
    // 只处理富龙站比赛
    if (!comp.competition.includes('富龙站')) continue;

    // 找到对应的比赛配置
    const compConfig = fulongCompetitions.find(c => c.sportType === comp.sportType);
    if (!compConfig) {
      console.log(`未找到配置: ${comp.competition}`);
      continue;
    }

    // 插入比赛
    const compResult = insertCompetition.run(
      compConfig.id,
      compConfig.name,
      compConfig.sportType,
      compConfig.sport,
      compConfig.location,
      compConfig.date,
      compConfig.endDate,
      compConfig.status
    );
    if (compResult.changes > 0) {
      competitionsAdded++;
      console.log(`✅ 添加比赛: ${compConfig.name}`);
    } else {
      console.log(`⏭️ 比赛已存在: ${compConfig.name}`);
    }

    // 遍历各组别成绩
    for (const event of comp.events) {
      console.log(`  处理: ${event.discipline} ${event.ageGroup} ${event.gender} (${event.athletes.length}人)`);

      for (const athlete of event.athletes) {
        // 标准化队伍名称
        const normalizedTeam = normalizeTeamName(athlete.team);

        // 插入/更新运动员
        const athleteId = `athlete-${athlete.name}-${normalizedTeam}`.replace(/\s+/g, '-');
        insertAthlete.run(
          athleteId,
          athlete.name,
          normalizedTeam,
          event.gender,
          athlete.birthYear || null
        );

        // 获取运动员ID
        const existingAthlete = getAthleteId.get(athlete.name, normalizedTeam);
        const finalAthleteId = existingAthlete ? existingAthlete.id : athleteId;

        // 插入成绩
        const resultId = `result-${compConfig.id}-${finalAthleteId}-${event.discipline}-${event.ageGroup}-${event.gender}`;
        const resultInsert = insertResult.run(
          resultId,
          finalAthleteId,
          compConfig.id,
          event.discipline,
          event.ageGroup,
          event.gender,
          athlete.rank,
          athlete.bib,
          athlete.bestScore || null,
          athlete.points || 0
        );
        if (resultInsert.changes > 0) {
          resultsAdded++;
        }
      }
    }
    console.log('');
  }

  console.log('\n========== 导入完成 ==========');
  console.log(`比赛添加: ${competitionsAdded}`);
  console.log(`成绩记录添加: ${resultsAdded}`);

  // 验证数据
  console.log('\n========== 数据验证 ==========');
  const compCount = db.prepare('SELECT COUNT(*) as count FROM Competition WHERE id LIKE ?').get('fulong%');
  const resultCount = db.prepare('SELECT COUNT(*) as count FROM Result WHERE competitionId LIKE ?').get('fulong%');
  console.log(`富龙站比赛数: ${compCount.count}`);
  console.log(`富龙站成绩数: ${resultCount.count}`);

  db.close();
}

importFulongData();
