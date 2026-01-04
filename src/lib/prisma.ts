import { PrismaClient } from '@prisma/client';

// 防止开发环境热重载时创建多个Prisma实例
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;

// 导出Prisma生成的类型
export type {
  Athlete,
  Competition,
  Result,
  SeasonTotal,
  ImportLog,
  AthleteAlias,
} from '@prisma/client';
