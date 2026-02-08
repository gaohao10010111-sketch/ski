/**
 * Import Xueruyi Slopestyle and Big Air competition data into database.
 * Reads from JSON extracted by extract-xueruyi-slopestyle-bigair.py
 *
 * Run: node scripts/import-xueruyi-slopestyle-bigair.js
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

// Team name normalization
const teamNameMapping = {
  "石家庄市冰雪与足球运动推广训练中心": "石家庄市冰雪与足球运动中心",
  "石家庄市冰雪与足球运动推广与训练中心": "石家庄市冰雪与足球运动中心",
  "重庆市沙坪坝区体育运动学校": "重庆市冬季运动管理中心",
  "重庆市沙坪坝区体育运动中心": "重庆市冬季运动管理中心",
  "成都市武侯区滑雪运动协会": "个人",
  "滑雪兔俱乐部": "个人",
  "万域芳菲俱乐部": "四川体育职业学院",
  "西安市竞技体育学校": "河北省体育局冬季运动中心",
  "哈尔滨市冬季运动与水上运动中心": "河北省体育局冬季运动中心",
};

function normalizeTeamName(team) {
  if (!team) return '个人';
  team = team.trim();
  return teamNameMapping[team] || team;
}

// Competition definitions
const competitions = [
  {
    id: 'xueruyi-snowboard-slopestyle-2026',
    name: '2025-2026赛季全国单板滑雪坡面障碍技巧U系列比赛（雪如意站）',
    sportType: 'snowboard-slopestyle',
    sport: '单板滑雪坡面障碍技巧',
    location: '张家口崇礼雪如意滑雪场',
    date: '2026-02-05',
    endDate: '2026-02-08',
    status: 'completed',
    jsonKey: 'slopestyle',
  },
  {
    id: 'xueruyi-snowboard-bigair-2026',
    name: '2025-2026赛季全国单板滑雪大跳台U系列比赛（雪如意站）',
    sportType: 'snowboard-bigair',
    sport: '单板滑雪大跳台',
    location: '张家口崇礼雪如意滑雪场',
    date: '2026-02-08',
    endDate: '2026-02-11',
    status: 'completed',
    jsonKey: 'bigair',
  },
];

function main() {
  console.log('========== Import Xueruyi Slopestyle & Big Air ==========\n');

  // Read JSON data
  const jsonPath = path.join(__dirname, 'xueruyi-slopestyle-bigair.json');
  if (!fs.existsSync(jsonPath)) {
    console.error('JSON file not found. Run extract-xueruyi-slopestyle-bigair.py first.');
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // Prepare statements
  const insertCompetition = db.prepare(`
    INSERT OR IGNORE INTO Competition (id, name, sportType, sport, location, date, endDate, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertAthlete = db.prepare(`
    INSERT INTO Athlete (id, name, team, gender, birthYear, updatedAt)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(name, team) DO UPDATE SET
      birthYear = COALESCE(excluded.birthYear, Athlete.birthYear),
      updatedAt = datetime('now')
  `);

  const getAthleteId = db.prepare(`
    SELECT id FROM Athlete WHERE name = ? AND team = ?
  `);

  const insertResult = db.prepare(`
    INSERT OR IGNORE INTO Result (id, athleteId, competitionId, discipline, ageGroup, gender, rank, bib, bestScore, points)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let totalComps = 0;
  let totalResults = 0;
  let totalAthletes = 0;

  const importAll = db.transaction(() => {
    for (const comp of competitions) {
      console.log(`\n--- ${comp.name} ---`);

      // Insert competition
      const compResult = insertCompetition.run(
        comp.id, comp.name, comp.sportType, comp.sport,
        comp.location, comp.date, comp.endDate, comp.status
      );
      if (compResult.changes > 0) {
        totalComps++;
        console.log(`  Competition created: ${comp.id}`);
      } else {
        console.log(`  Competition already exists: ${comp.id}`);
      }

      // Process results
      const results = data[comp.jsonKey] || [];
      console.log(`  Results to import: ${results.length}`);

      // Group by ageGroup + gender for logging
      const groups = {};

      for (const r of results) {
        const normalizedTeam = normalizeTeamName(r.team);
        const gender = r.gender === '男子组' ? '男' : (r.gender === '女子组' ? '女' : r.gender);

        // Upsert athlete
        const athleteId = `athlete-${r.name}-${normalizedTeam}`.replace(/\s+/g, '-');
        insertAthlete.run(
          athleteId, r.name, normalizedTeam, gender,
          r.birthYear || null
        );

        // Get actual athlete ID (may have been created earlier)
        const existingAthlete = getAthleteId.get(r.name, normalizedTeam);
        const finalAthleteId = existingAthlete ? existingAthlete.id : athleteId;

        // Insert result
        const resultId = `result-${comp.id}-${finalAthleteId}-${r.discipline}-${r.ageGroup}-${r.gender}`;
        const res = insertResult.run(
          resultId, finalAthleteId, comp.id,
          r.discipline, r.ageGroup, r.gender,
          r.rank, r.bib,
          r.bestScore || null, r.points || 0
        );

        if (res.changes > 0) {
          totalResults++;
        }

        const groupKey = `${r.ageGroup} ${r.gender}`;
        groups[groupKey] = (groups[groupKey] || 0) + 1;
      }

      for (const [group, count] of Object.entries(groups).sort()) {
        console.log(`    ${group}: ${count}`);
      }
    }
  });

  importAll();

  console.log('\n========== Import Complete ==========');
  console.log(`Competitions added: ${totalComps}`);
  console.log(`Results added: ${totalResults}`);

  // Verification
  console.log('\n========== Verification ==========');
  const compCount = db.prepare('SELECT COUNT(*) as count FROM Competition').get();
  const resultCount = db.prepare('SELECT COUNT(*) as count FROM Result').get();
  const athleteCount = db.prepare('SELECT COUNT(*) as count FROM Athlete').get();

  const xrSlopeCount = db.prepare("SELECT COUNT(*) as count FROM Result WHERE competitionId = ?").get('xueruyi-snowboard-slopestyle-2026');
  const xrBigairCount = db.prepare("SELECT COUNT(*) as count FROM Result WHERE competitionId = ?").get('xueruyi-snowboard-bigair-2026');

  console.log(`Total competitions: ${compCount.count}`);
  console.log(`Total results: ${resultCount.count}`);
  console.log(`Total athletes: ${athleteCount.count}`);
  console.log(`Xueruyi slopestyle results: ${xrSlopeCount.count}`);
  console.log(`Xueruyi bigair results: ${xrBigairCount.count}`);

  db.close();
  console.log('\nDone!');
}

main();
