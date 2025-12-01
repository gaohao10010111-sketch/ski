/**
 * 前端API客户端
 * 统一封装所有API请求
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// ========== 类型定义 ==========

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

// 运动员类型
export interface Athlete {
  id: string;
  name: string;
  gender: 'MALE' | 'FEMALE';
  birthDate: string;
  age?: number;
  nationality: string;
  province: string | null;
  club: string | null;
  fisCode: string | null;
  sportType: string;
  uSeriesGroup: string | null;
  status: string;
  currentPoints?: number;
  currentRank?: number | null;
}

export interface AthleteDetail extends Athlete {
  idNumber: string | null;
  createdAt: string;
  user?: { id: string; username: string; email: string } | null;
  seasonPoints: SeasonPoints[];
  recentResults: CompetitionResultSummary[];
}

export interface SeasonPoints {
  season: string;
  sportType: string;
  discipline: string | null;
  totalPoints: number;
  competitionCount: number;
  rank: number | null;
  blPoints?: number;
  nlPoints?: number;
}

// 比赛类型
export interface Competition {
  id: string;
  name: string;
  sportType: string;
  discipline: string | null;
  startDate: string;
  endDate: string;
  location: string;
  venue: string | null;
  raceLevel: string | null;
  pointsTier: string | null;
  format: string;
  status: string;
  organizer: string | null;
  participantCount?: number;
}

export interface CompetitionDetail extends Competition {
  description: string | null;
  winnerTime: number | null;
  createdAt: string;
  stats: {
    totalParticipants: number;
    finishers: number;
    dns: number;
    dnf: number;
    dq: number;
  };
  penaltyCalculation: {
    sumA: number;
    sumB: number;
    sumC: number;
    penalty: number;
  } | null;
  results: CompetitionResult[];
}

export interface CompetitionResult {
  id: string;
  athlete: {
    id: string;
    name: string;
    gender: string;
    province: string | null;
    club: string | null;
  };
  finalRank: number;
  status: string;
  totalTime: number | null;
  run1Time: number | null;
  run2Time: number | null;
  scores: unknown;
  basePoints: number;
  adjustedPoints: number | null;
  finalPoints: number;
  raceCoefficient: number | null;
  penalty: number | null;
}

export interface CompetitionResultSummary {
  id: string;
  competition: {
    id: string;
    name: string;
    startDate: string;
    sportType: string;
    discipline: string | null;
  };
  finalRank: number;
  finalPoints: number;
  status: string;
  createdAt: string;
}

// 排名类型
export interface RankingItem {
  rank: number;
  athleteId: string;
  athleteName: string;
  gender: string;
  province: string | null;
  club: string | null;
  sportType: string;
  discipline: string | null;
  uSeriesGroup: string | null;
  season: string;
  totalPoints: number;
  competitionCount: number;
  blPoints?: number;
  nlPoints?: number;
}

// 统计类型
export interface StatsOverview {
  overview: {
    totalAthletes: number;
    activeAthletes: number;
    totalCompetitions: number;
    completedCompetitions: number;
    upcomingCompetitions: number;
    currentSeason: string;
  };
  athletesBySport: Array<{ sportType: string; count: number }>;
  recentCompetitions: Array<{
    id: string;
    name: string;
    sportType: string;
    date: string;
    status: string;
    participantCount: number;
  }>;
  topAthletes: Array<{
    sportType: string;
    discipline: string | null;
    athlete: { id: string; name: string; gender: string; province: string | null };
    totalPoints: number;
  }>;
}

// ========== 请求工具 ==========

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${BASE_URL}${endpoint}`;

  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || {
          code: 'REQUEST_ERROR',
          message: '请求失败',
        },
      };
    }

    return data as ApiResponse<T>;
  } catch (error) {
    console.error('API请求错误:', error);
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: '网络错误，请检查网络连接',
      },
    };
  }
}

function buildQueryString(params: object): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });
  const qs = searchParams.toString();
  return qs ? `?${qs}` : '';
}

// ========== 运动员API ==========

export interface AthleteQueryParams extends PaginationParams {
  sportType?: string;
  gender?: string;
  province?: string;
  uSeriesGroup?: string;
  status?: string;
  search?: string;
}

export const athletesApi = {
  // 获取运动员列表
  list: (params: AthleteQueryParams = {}) =>
    request<Athlete[]>(`/api/athletes${buildQueryString(params)}`),

  // 获取运动员详情
  get: (id: string) => request<AthleteDetail>(`/api/athletes/${id}`),

  // 创建运动员
  create: (data: Partial<Athlete>) =>
    request<{ id: string; name: string; message: string }>('/api/athletes', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // 更新运动员
  update: (id: string, data: Partial<Athlete>) =>
    request<{ id: string; name: string; message: string }>(`/api/athletes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  // 删除运动员
  delete: (id: string) =>
    request<void>(`/api/athletes/${id}`, { method: 'DELETE' }),

  // 获取运动员积分历史
  getPoints: (id: string) =>
    request<{
      athlete: { id: string; name: string; sportType: string };
      seasonSummary: SeasonPoints[];
      history: Array<{
        id: string;
        date: string;
        sportType: string;
        discipline: string | null;
        previousPoints: number;
        newPoints: number;
        change: number;
        reason: string;
        competitionId: string | null;
      }>;
      competitionResults: CompetitionResultSummary[];
    }>(`/api/athletes/${id}/points`),
};

// ========== 比赛API ==========

export interface CompetitionQueryParams extends PaginationParams {
  sportType?: string;
  status?: string;
  startDateFrom?: string;
  startDateTo?: string;
}

export const competitionsApi = {
  // 获取比赛列表
  list: (params: CompetitionQueryParams = {}) =>
    request<Competition[]>(`/api/competitions${buildQueryString(params)}`),

  // 获取比赛详情
  get: (id: string) => request<CompetitionDetail>(`/api/competitions/${id}`),

  // 创建比赛
  create: (data: Partial<Competition>) =>
    request<{ id: string; name: string; message: string }>('/api/competitions', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // 更新比赛
  update: (id: string, data: Partial<Competition>) =>
    request<{ id: string; name: string; message: string }>(`/api/competitions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  // 删除比赛
  delete: (id: string) =>
    request<void>(`/api/competitions/${id}`, { method: 'DELETE' }),

  // 获取比赛成绩
  getResults: (id: string) =>
    request<{
      competition: { id: string; name: string; sportType: string; discipline: string | null; status: string };
      totalCount: number;
      results: CompetitionResult[];
    }>(`/api/competitions/${id}/results`),

  // 录入成绩
  addResult: (
    competitionId: string,
    data: {
      athleteId: string;
      finalRank: number;
      status?: string;
      totalTime?: number;
      run1Time?: number;
      run2Time?: number;
      scores?: Array<{ round: number; score: number; rank?: number }>;
    }
  ) =>
    request<{ id: string; athlete: { id: string; name: string }; finalRank: number; finalPoints: number; message: string }>(
      `/api/competitions/${competitionId}/results`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    ),
};

// ========== 排名API ==========

export interface RankingsQueryParams extends PaginationParams {
  sportType?: string;
  gender?: string;
  uSeriesGroup?: string;
  season?: string;
  discipline?: string;
}

export const rankingsApi = {
  // 获取排名列表
  list: (params: RankingsQueryParams = {}) =>
    request<RankingItem[]>(`/api/rankings${buildQueryString(params)}`),
};

// ========== 统计API ==========

export const statsApi = {
  // 获取平台统计概览
  overview: () => request<StatsOverview>('/api/stats/overview'),
};

// ========== 默认导出 ==========

const api = {
  athletes: athletesApi,
  competitions: competitionsApi,
  rankings: rankingsApi,
  stats: statsApi,
};

export default api;
