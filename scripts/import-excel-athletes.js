/**
 * Import athlete data from Excel files
 * Updates existing athletes with idNumber, creates new athletes
 *
 * Sources:
 * - 5 competition import templates (19 columns)
 * - 1 sign-in sheet (13 columns)
 * - 1 athlete export file (12 columns, authoritative)
 *
 * Run: node scripts/import-excel-athletes.js
 */

const Database = require('better-sqlite3');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);
const gameDir = path.join(__dirname, '../game');

// Team name normalization (same as import-fulong-competitions.js)
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

function normalizeGender(g) {
  if (!g) return null;
  g = g.trim();
  if (g === '男' || g === '男子' || g === '男子组') return '男';
  if (g === '女' || g === '女子' || g === '女子组') return '女';
  return g;
}

// Convert Excel serial date to YYYY-MM-DD string
function excelDateToString(val) {
  if (!val) return null;
  if (typeof val === 'string') {
    // Already a date string like "2014-01-06"
    if (/^\d{4}-\d{2}-\d{2}/.test(val)) return val.substring(0, 10);
    return null;
  }
  if (typeof val === 'number') {
    // Excel serial number
    const date = XLSX.SSF.parse_date_code(val);
    if (date) {
      const y = date.y;
      const m = String(date.m).padStart(2, '0');
      const d = String(date.d).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }
  }
  return null;
}

function extractBirthYearFromId(idNumber) {
  if (!idNumber || typeof idNumber !== 'string') return null;
  idNumber = idNumber.trim();
  if (idNumber.length === 18) {
    return idNumber.substring(6, 10);
  }
  return null;
}

function extractBirthDateFromId(idNumber) {
  if (!idNumber || typeof idNumber !== 'string') return null;
  idNumber = idNumber.trim();
  if (idNumber.length === 18) {
    const y = idNumber.substring(6, 10);
    const m = idNumber.substring(10, 12);
    const d = idNumber.substring(12, 14);
    return `${y}-${m}-${d}`;
  }
  return null;
}

function extractGenderFromId(idNumber) {
  if (!idNumber || typeof idNumber !== 'string') return null;
  idNumber = idNumber.trim();
  if (idNumber.length === 18) {
    const genderDigit = parseInt(idNumber.charAt(16));
    return genderDigit % 2 === 1 ? '男' : '女';
  }
  return null;
}

// Collect athletes from all Excel sources
function collectAthletes() {
  const athletes = new Map(); // key: name, value: { name, team, gender, idNumber, birthYear, birthDate }

  function addAthlete(name, team, gender, idNumber, birthYear, birthDate, source) {
    if (!name || name.trim() === '') return;
    name = name.trim();
    team = normalizeTeamName(team);
    gender = normalizeGender(gender);

    // Clean idNumber
    if (idNumber) {
      idNumber = String(idNumber).trim();
      if (idNumber.length !== 18 || !/^\d{17}[\dXx]$/.test(idNumber)) {
        idNumber = null; // Invalid ID
      }
    }

    // Extract info from ID if available
    if (idNumber) {
      if (!birthYear) birthYear = extractBirthYearFromId(idNumber);
      if (!birthDate) birthDate = extractBirthDateFromId(idNumber);
      if (!gender) gender = extractGenderFromId(idNumber);
    }

    const key = `${name}|||${team}`;
    const existing = athletes.get(key);
    if (existing) {
      // Merge: prefer non-null values
      if (idNumber && !existing.idNumber) existing.idNumber = idNumber;
      if (birthYear && !existing.birthYear) existing.birthYear = birthYear;
      if (birthDate && !existing.birthDate) existing.birthDate = birthDate;
      if (gender && !existing.gender) existing.gender = gender;
      existing.sources.add(source);
    } else {
      athletes.set(key, {
        name, team, gender, idNumber,
        birthYear: birthYear || null,
        birthDate: birthDate || null,
        sources: new Set([source])
      });
    }
  }

  // 1. Import templates (19-column format)
  const importTemplates = [
    '2025-2026赛季全国高山滑雪U系列比赛（第一站成都站）导入模板.xlsx',
    '2025-2026赛季全国自由式滑雪大跳台和坡面障碍技巧U系列比赛（第一站成都站）导入模板.xlsx',
    '2025-2026赛季全国单板滑雪平行项目U系列比赛（第一站雪如意站）-成绩导入-导入模板.xlsx',
    '2025-2026赛季单板滑雪大跳台和坡面障碍技巧 U系列比赛（第一站成都站）导入模板.xlsx',
  ];

  for (const filename of importTemplates) {
    const filePath = path.join(gameDir, filename);
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filename}`);
      continue;
    }

    const wb = XLSX.readFile(filePath);
    const sheetName = wb.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, raw: true });

    console.log(`\n--- ${filename} ---`);
    console.log(`  Sheet: ${sheetName}, Rows: ${rows.length}`);

    // Skip header row (row 0)
    let count = 0;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.length < 10) continue;

      const name = row[2] ? String(row[2]).trim() : null;
      const idNumber = row[4] ? String(row[4]).trim() : null;
      const team = row[6] ? String(row[6]).trim() : null;
      const gender = row[9] ? String(row[9]).trim() : null;

      if (name) {
        addAthlete(name, team, gender, idNumber, null, null, filename);
        count++;
      }
    }
    console.log(`  Athletes extracted: ${count}`);
  }

  // 2. Sign-in sheet (13-column format)
  const signinPath = path.join(gameDir, '单板平行U系列-沈阳东北亚站-运动员签到表.xlsx');
  if (fs.existsSync(signinPath)) {
    const wb = XLSX.readFile(signinPath);
    const sheetName = wb.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, raw: true });

    console.log(`\n--- 沈阳签到表 ---`);
    console.log(`  Sheet: ${sheetName}, Rows: ${rows.length}`);

    let count = 0;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.length < 7) continue;

      const team = row[1] ? String(row[1]).trim() : null;
      const name = row[2] ? String(row[2]).trim() : null;
      const idNumber = row[3] ? String(row[3]).trim() : null;
      const birthDateRaw = row[4];
      const gender = row[6] ? String(row[6]).trim() : null;

      const birthDate = excelDateToString(birthDateRaw);
      const birthYear = birthDate ? birthDate.substring(0, 4) : null;

      if (name) {
        addAthlete(name, team, gender, idNumber, birthYear, birthDate, '沈阳签到表');
        count++;
      }
    }
    console.log(`  Athletes extracted: ${count}`);
  }

  // 3. Athlete export (12-column format, authoritative)
  const exportPath = path.join(gameDir, '运动员信息导出.xlsx');
  if (fs.existsSync(exportPath)) {
    const wb = XLSX.readFile(exportPath);
    const sheetName = wb.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, raw: true });

    console.log(`\n--- 运动员信息导出 ---`);
    console.log(`  Sheet: ${sheetName}, Rows: ${rows.length}`);

    let count = 0;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.length < 6) continue;

      const name = row[0] ? String(row[0]).trim() : null;
      const gender = row[1] ? String(row[1]).trim() : null;
      const team = row[2] ? String(row[2]).trim() : null;
      const idNumber = row[3] ? String(row[3]).trim() : null;
      const birthDateRaw = row[4];
      const birthYear = row[5] ? String(row[5]).trim() : null;

      const birthDate = excelDateToString(birthDateRaw);

      if (name) {
        addAthlete(name, team, gender, idNumber, birthYear, birthDate, '运动员信息导出');
        count++;
      }
    }
    console.log(`  Athletes extracted: ${count}`);
  }

  return athletes;
}

function importToDatabase(athletes) {
  console.log('\n========== Importing to database ==========');

  const getAthlete = db.prepare('SELECT id, name, team, gender, idNumber, birthYear, birthDate FROM Athlete WHERE name = ? AND team = ?');
  const updateAthlete = db.prepare(`
    UPDATE Athlete SET
      idNumber = COALESCE(?, idNumber),
      birthYear = COALESCE(?, birthYear),
      birthDate = COALESCE(?, birthDate),
      gender = COALESCE(?, gender),
      updatedAt = datetime('now')
    WHERE id = ?
  `);
  const insertAthlete = db.prepare(`
    INSERT INTO Athlete (id, name, team, gender, birthYear, idNumber, birthDate, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(name, team) DO UPDATE SET
      idNumber = COALESCE(excluded.idNumber, Athlete.idNumber),
      birthYear = COALESCE(excluded.birthYear, Athlete.birthYear),
      birthDate = COALESCE(excluded.birthDate, Athlete.birthDate),
      gender = COALESCE(excluded.gender, Athlete.gender),
      updatedAt = datetime('now')
  `);

  let updated = 0;
  let created = 0;
  let skipped = 0;
  let idNumbersAdded = 0;

  const importAll = db.transaction(() => {
    for (const [key, athlete] of athletes) {
      const existing = getAthlete.get(athlete.name, athlete.team);

      if (existing) {
        // Update existing athlete
        let hasUpdate = false;
        if (athlete.idNumber && !existing.idNumber) { hasUpdate = true; idNumbersAdded++; }
        if (athlete.birthYear && !existing.birthYear) hasUpdate = true;
        if (athlete.birthDate && !existing.birthDate) hasUpdate = true;

        if (hasUpdate) {
          updateAthlete.run(
            athlete.idNumber || null,
            athlete.birthYear || null,
            athlete.birthDate ? new Date(athlete.birthDate).toISOString() : null,
            athlete.gender || null,
            existing.id
          );
          updated++;
        } else {
          skipped++;
        }
      } else {
        // Create new athlete
        const athleteId = `athlete-${athlete.name}-${athlete.team}`.replace(/\s+/g, '-');
        insertAthlete.run(
          athleteId,
          athlete.name,
          athlete.team,
          athlete.gender || '未知',
          athlete.birthYear || null,
          athlete.idNumber || null,
          athlete.birthDate ? new Date(athlete.birthDate).toISOString() : null
        );
        created++;
        if (athlete.idNumber) idNumbersAdded++;
      }
    }
  });

  importAll();

  console.log(`\n========== Results ==========`);
  console.log(`Athletes processed: ${athletes.size}`);
  console.log(`Updated (with new data): ${updated}`);
  console.log(`Created (new athletes): ${created}`);
  console.log(`Skipped (no new data): ${skipped}`);
  console.log(`ID numbers added: ${idNumbersAdded}`);
}

function verify() {
  console.log('\n========== Verification ==========');
  const totalAthletes = db.prepare('SELECT COUNT(*) as count FROM Athlete').get();
  const withIdNumber = db.prepare("SELECT COUNT(*) as count FROM Athlete WHERE idNumber IS NOT NULL AND idNumber <> ''").get();
  const withBirthDate = db.prepare("SELECT COUNT(*) as count FROM Athlete WHERE birthDate IS NOT NULL").get();

  console.log(`Total athletes: ${totalAthletes.count}`);
  console.log(`With ID number: ${withIdNumber.count}`);
  console.log(`With birth date: ${withBirthDate.count}`);
}

// Main
console.log('========== Excel Athlete Import ==========\n');

const athletes = collectAthletes();
console.log(`\nTotal unique athletes collected: ${athletes.size}`);

importToDatabase(athletes);
verify();

db.close();
console.log('\nDone!');
