import { PrismaClient } from '@prisma/client';

// 防止开发环境热重载时创建多个Prisma实例
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;

// 导出类型以便在其他地方使用
export type {
  User,
  Athlete,
  Competition,
  CompetitionResult,
  AthleteSeasonPoints,
  PointsHistory,
  PenaltyCalculation,
  AuditLog
} from '@prisma/client';

export {
  UserRole,
  UserStatus,
  Gender,
  AthleteStatus,
  SportType,
  USeriesGroup,
  RaceLevel,
  PointsTier,
  CompetitionFormat,
  CompetitionStatus,
  ResultStatus
} from '@prisma/client';
