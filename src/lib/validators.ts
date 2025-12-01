import { z } from 'zod';

// ========== 通用验证 ==========

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export const idSchema = z.string().min(1, 'ID不能为空');

// ========== 运动员验证 ==========

export const createAthleteSchema = z.object({
  name: z.string().min(2, '姓名至少2个字符').max(50, '姓名最多50个字符'),
  gender: z.enum(['MALE', 'FEMALE'], { message: '性别必须是 MALE 或 FEMALE' }),
  birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), '出生日期格式无效'),
  idNumber: z.string().length(18, '身份证号必须是18位').optional().nullable(),
  nationality: z.string().default('中国'),
  province: z.string().optional().nullable(),
  club: z.string().optional().nullable(),
  fisCode: z.string().optional().nullable(),
  sportType: z.enum(['ALPINE_SKI', 'SNOWBOARD_SLOPESTYLE_BIGAIR', 'SNOWBOARD_PARALLEL', 'FREESTYLE_SLOPESTYLE_BIGAIR']),
  uSeriesGroup: z.enum(['U12', 'U15', 'U18']).optional().nullable(),
});

export const updateAthleteSchema = createAthleteSchema.partial();

export const athleteQuerySchema = paginationSchema.extend({
  sportType: z.enum(['ALPINE_SKI', 'SNOWBOARD_SLOPESTYLE_BIGAIR', 'SNOWBOARD_PARALLEL', 'FREESTYLE_SLOPESTYLE_BIGAIR']).optional(),
  gender: z.enum(['MALE', 'FEMALE']).optional(),
  province: z.string().optional(),
  uSeriesGroup: z.enum(['U12', 'U15', 'U18']).optional(),
  status: z.enum(['ACTIVE', 'INJURED', 'RETIRED']).optional(),
  search: z.string().optional(),
});

// ========== 比赛验证 ==========

export const createCompetitionSchema = z.object({
  name: z.string().min(5, '比赛名称至少5个字符'),
  sportType: z.enum(['ALPINE_SKI', 'SNOWBOARD_SLOPESTYLE_BIGAIR', 'SNOWBOARD_PARALLEL', 'FREESTYLE_SLOPESTYLE_BIGAIR']),
  discipline: z.string().optional().nullable(),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), '开始日期格式无效'),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), '结束日期格式无效'),
  location: z.string().min(2, '地点至少2个字符'),
  venue: z.string().optional().nullable(),
  raceLevel: z.enum(['A', 'B', 'C']).optional().nullable(),
  pointsTier: z.enum(['TIER_360', 'TIER_240', 'TIER_120']).optional().nullable(),
  format: z.enum(['QUALIFICATION_FINAL', 'ELIMINATION', 'TIME_TRIAL']),
  status: z.enum(['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED']).default('UPCOMING'),
  organizer: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

export const updateCompetitionSchema = createCompetitionSchema.partial();

export const competitionQuerySchema = paginationSchema.extend({
  sportType: z.enum(['ALPINE_SKI', 'SNOWBOARD_SLOPESTYLE_BIGAIR', 'SNOWBOARD_PARALLEL', 'FREESTYLE_SLOPESTYLE_BIGAIR']).optional(),
  status: z.enum(['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED']).optional(),
  startDateFrom: z.string().optional(),
  startDateTo: z.string().optional(),
});

// ========== 成绩验证 ==========

export const createResultSchema = z.object({
  athleteId: z.string().min(1, '运动员ID不能为空'),
  finalRank: z.number().int().min(1, '排名必须大于0'),
  status: z.enum(['OK', 'DNS', 'DNF', 'DQ']).default('OK'),
  totalTime: z.number().positive().optional().nullable(),
  run1Time: z.number().positive().optional().nullable(),
  run2Time: z.number().positive().optional().nullable(),
  scores: z.array(z.object({
    round: z.number().int().min(1),
    score: z.number().min(0).max(100),
    rank: z.number().int().min(1).optional(),
  })).optional().nullable(),
});

export const batchCreateResultsSchema = z.object({
  results: z.array(createResultSchema).min(1, '至少需要一条成绩'),
});

// ========== 积分计算验证 ==========

export const calculatePointsSchema = z.object({
  competitionId: z.string().min(1, '比赛ID不能为空'),
  recalculate: z.boolean().default(false),
});

// ========== 排名查询验证 ==========

export const rankingsQuerySchema = paginationSchema.extend({
  sportType: z.enum(['ALPINE_SKI', 'SNOWBOARD_SLOPESTYLE_BIGAIR', 'SNOWBOARD_PARALLEL', 'FREESTYLE_SLOPESTYLE_BIGAIR']).optional(),
  gender: z.enum(['MALE', 'FEMALE']).optional(),
  uSeriesGroup: z.enum(['U12', 'U15', 'U18']).optional(),
  season: z.string().regex(/^\d{4}-\d{4}$/, '赛季格式应为 YYYY-YYYY').optional(),
  discipline: z.string().optional(),
});

// ========== 类型导出 ==========

export type CreateAthleteInput = z.infer<typeof createAthleteSchema>;
export type UpdateAthleteInput = z.infer<typeof updateAthleteSchema>;
export type AthleteQuery = z.infer<typeof athleteQuerySchema>;

export type CreateCompetitionInput = z.infer<typeof createCompetitionSchema>;
export type UpdateCompetitionInput = z.infer<typeof updateCompetitionSchema>;
export type CompetitionQuery = z.infer<typeof competitionQuerySchema>;

export type CreateResultInput = z.infer<typeof createResultSchema>;
export type BatchCreateResultsInput = z.infer<typeof batchCreateResultsSchema>;

export type RankingsQuery = z.infer<typeof rankingsQuerySchema>;
