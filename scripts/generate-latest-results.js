/**
 * Generate latestResults.ts from database
 * Reads all competitions and results from SQLite, outputs a TypeScript file
 * matching the existing interface format exactly.
 *
 * Run: node scripts/generate-latest-results.js
 */

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

function generateLatestResults() {
  console.log('Generating latestResults.ts from database...');

  // Get all competitions ordered by date DESC
  const competitions = db.prepare(`
    SELECT id, name, sport, sportType, location, date, endDate, status
    FROM Competition
    ORDER BY date DESC, name ASC
  `).all();

  console.log(`Found ${competitions.length} competitions`);

  const competitionResults = [];
  let totalResults = 0;

  for (const comp of competitions) {
    // Get results for this competition with athlete info
    const results = db.prepare(`
      SELECT
        r.discipline, r.ageGroup, r.gender, r.rank, r.bib,
        r.run1, r.run2, r.time, r.diff, r.bestScore, r.points,
        a.name as athleteName, a.team as athleteTeam, a.birthYear
      FROM Result r
      JOIN Athlete a ON r.athleteId = a.id
      WHERE r.competitionId = ?
      ORDER BY r.discipline, r.ageGroup, r.gender, r.rank
    `).all(comp.id);

    if (results.length === 0) continue;
    totalResults += results.length;

    // Group by discipline + ageGroup + gender
    const eventMap = new Map();
    for (const r of results) {
      const key = `${r.discipline}|||${r.ageGroup}|||${r.gender}`;
      if (!eventMap.has(key)) {
        eventMap.set(key, {
          discipline: r.discipline,
          ageGroup: r.ageGroup,
          gender: r.gender,
          athletes: []
        });
      }

      const athlete = {
        rank: r.rank,
        bib: r.bib,
        name: r.athleteName,
        team: r.athleteTeam
      };

      // Only include non-null optional fields
      if (r.birthYear) athlete.birthYear = String(r.birthYear);
      if (r.run1) athlete.run1 = r.run1;
      if (r.run2) athlete.run2 = r.run2;
      if (r.time) athlete.time = r.time;
      if (r.diff) athlete.diff = r.diff;
      if (r.bestScore != null) athlete.bestScore = r.bestScore;
      if (r.points != null) athlete.points = r.points;

      eventMap.get(key).athletes.push(athlete);
    }

    // Sort events: by discipline, then ageGroup order, then gender order
    const ageGroupOrder = ['U11', 'U15', 'U18'];
    const genderOrder = ['女子组', '男子组'];

    const events = Array.from(eventMap.values()).sort((a, b) => {
      if (a.discipline !== b.discipline) return a.discipline.localeCompare(b.discipline);
      const aAge = ageGroupOrder.indexOf(a.ageGroup);
      const bAge = ageGroupOrder.indexOf(b.ageGroup);
      if (aAge !== bAge) return aAge - bAge;
      const aGender = genderOrder.indexOf(a.gender);
      const bGender = genderOrder.indexOf(b.gender);
      return aGender - bGender;
    });

    competitionResults.push({
      competition: comp.name,
      sport: comp.sport,
      sportType: comp.sportType,
      location: comp.location,
      date: comp.date,
      endDate: comp.endDate || comp.date,
      status: comp.status || 'completed',
      events
    });

    console.log(`  ${comp.name}: ${results.length} results, ${events.length} events`);
  }

  const data = {
    lastUpdated: new Date().toISOString().split('T')[0],
    competitions: competitionResults
  };

  // Build TypeScript file
  const outputPath = path.join(__dirname, '../src/data/latestResults.ts');
  const content = `// 最新比赛成绩数据
// 自动生成，请勿手动修改
// 生成时间: ${new Date().toISOString()}

export interface AthleteResult {
  rank: number
  bib: number
  name: string
  team: string
  birthYear?: string
  run1?: string
  run2?: string
  time?: string
  diff?: string
  bestScore?: number
  points?: number
}

export interface EventResult {
  discipline: string
  ageGroup: string
  gender: string
  athletes: AthleteResult[]
}

export interface CompetitionResult {
  competition: string
  sport: string
  sportType: string
  location: string
  date: string
  endDate: string
  status: 'completed' | 'ongoing' | 'upcoming'
  events: EventResult[]
}

export interface ResultsData {
  lastUpdated: string
  competitions: CompetitionResult[]
}

export const latestResults: ResultsData = ${JSON.stringify(data, null, 2)};

// 获取最新完成的比赛
export const recentCompetitions = latestResults.competitions.filter(c => c.status === 'completed');

// 按项目类型分组
export const resultsBySport = {
  alpine: latestResults.competitions.filter(c => c.sportType === 'alpine'),
  'snowboard-slopestyle': latestResults.competitions.filter(c => c.sportType === 'snowboard-slopestyle'),
  'snowboard-bigair': latestResults.competitions.filter(c => c.sportType === 'snowboard-bigair'),
  'freestyle-slopestyle': latestResults.competitions.filter(c => c.sportType === 'freestyle-slopestyle'),
  'freestyle-bigair': latestResults.competitions.filter(c => c.sportType === 'freestyle-bigair'),
  'snowboard-parallel': latestResults.competitions.filter(c => c.sportType === 'snowboard-parallel')
};
`;

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`\nWritten to: ${outputPath}`);
  console.log(`Total: ${competitionResults.length} competitions, ${totalResults} results`);

  db.close();
}

generateLatestResults();
