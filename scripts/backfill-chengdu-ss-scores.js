/**
 * Backfill bestScore values for Chengdu slopestyle competition (comp_47wce2).
 * Reads extracted scores from /tmp/chengdu-ss-scores.json and updates the Result table.
 */
const fs = require('fs');
const Database = require('better-sqlite3');

const DB_PATH = 'prisma/ski.db';
const JSON_PATH = '/tmp/chengdu-ss-scores.json';
const COMPETITION_ID = 'comp_47wce2';

const db = new Database(DB_PATH);
const scores = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8'));

console.log(`Loaded ${scores.length} scores from ${JSON_PATH}`);
console.log(`Updating competition: ${COMPETITION_ID}\n`);

// The JSON ageGroup is like "U11 女子组" but the DB stores ageGroup="U11" and gender="女子组"
// Split the combined ageGroup into separate fields
function splitAgeGroup(combined) {
  // "U11 女子组" -> { ageGroup: "U11", gender: "女子组" }
  // "U15 男子组" -> { ageGroup: "U15", gender: "男子组" }
  const parts = combined.split(' ');
  return { ageGroup: parts[0], gender: parts[1] };
}

// Prepare the update statement
// Match on competitionId + rank + ageGroup + gender + bib
const updateStmt = db.prepare(`
  UPDATE Result
  SET bestScore = ?
  WHERE competitionId = ?
    AND rank = ?
    AND ageGroup = ?
    AND gender = ?
    AND bib = ?
`);

let updated = 0;
let notFound = 0;

const updateAll = db.transaction(() => {
  for (const score of scores) {
    const { ageGroup, gender } = splitAgeGroup(score.ageGroup);
    const result = updateStmt.run(
      score.bestScore,
      COMPETITION_ID,
      score.rank,
      ageGroup,
      gender,
      score.bib
    );
    if (result.changes > 0) {
      updated++;
    } else {
      console.log(`  NOT FOUND: rank=${score.rank} bib=${score.bib} ageGroup=${ageGroup} gender=${gender} bestScore=${score.bestScore}`);
      notFound++;
    }
  }
});

updateAll();

console.log(`Updated: ${updated}`);
console.log(`Not found: ${notFound}`);

// Verify
const remaining = db.prepare(`
  SELECT COUNT(*) as count
  FROM Result
  WHERE competitionId = ? AND bestScore IS NULL
`).get(COMPETITION_ID);

console.log(`\nRemaining null bestScore: ${remaining.count}`);

if (remaining.count === 0) {
  console.log('All results now have bestScore populated!');
} else {
  console.log('WARNING: Some results still have null bestScore');
  const nullRows = db.prepare(`
    SELECT rank, bib, ageGroup, gender
    FROM Result
    WHERE competitionId = ? AND bestScore IS NULL
    ORDER BY ageGroup, rank
  `).all(COMPETITION_ID);
  nullRows.forEach(r => console.log(`  rank=${r.rank} bib=${r.bib} ageGroup=${r.ageGroup} gender=${r.gender}`));
}

db.close();
