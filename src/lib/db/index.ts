/**
 * 数据库服务层统一导出
 */

// 运动员服务
export {
  getAthletes,
  getAthleteById,
  findAthleteByNameAndTeam,
  createAthlete,
  upsertAthlete,
  updateAthlete,
  mergeAthletes,
  getAthleteAliases,
  deleteAthlete
} from './athleteService';

// 比赛服务
export {
  getCompetitions,
  getCompetitionById,
  findCompetitionByName,
  findCompetitionByPdfSource,
  createCompetition,
  updateCompetition,
  deleteCompetition,
  getLocations,
  getSportTypes,
  getSports,
  getCompetitionStats
} from './competitionService';

// 成绩服务
export {
  getResults,
  getAthleteResults,
  getCompetitionResults,
  createResult,
  createManyResults,
  updateResult,
  deleteResult,
  getDisciplines,
  getAgeGroups,
  getResultStats,
  resultExists
} from './resultService';

// 排名服务
export {
  getTotalRankings,
  recalculateSeasonTotals,
  getSeasonStats,
  getAthleteSeasonDetails
} from './rankingService';
