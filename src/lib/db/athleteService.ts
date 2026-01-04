/**
 * 运动员服务 - 管理运动员数据的CRUD操作
 */
import prisma from '../prisma';
import type { Athlete } from '../prisma';

// 查询参数类型
interface AthleteFilters {
  name?: string;
  team?: string;
  gender?: string;
  limit?: number;
  offset?: number;
}

// 创建运动员参数
interface CreateAthleteData {
  name: string;
  team: string;
  gender: string;
  birthYear?: string;
  idNumber?: string;
}

/**
 * 查询运动员列表
 */
export async function getAthletes(filters: AthleteFilters = {}) {
  const { name, team, gender, limit = 50, offset = 0 } = filters;

  const where: Record<string, unknown> = {};

  if (name) {
    where.name = { contains: name };
  }
  if (team) {
    where.team = { contains: team };
  }
  if (gender) {
    where.gender = gender;
  }

  const [athletes, total] = await Promise.all([
    prisma.athlete.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { results: true }
        }
      }
    }),
    prisma.athlete.count({ where })
  ]);

  return { athletes, total };
}

/**
 * 获取单个运动员详情（含参赛记录）
 */
export async function getAthleteById(id: string) {
  const athlete = await prisma.athlete.findUnique({
    where: { id },
    include: {
      results: {
        include: {
          competition: true
        },
        orderBy: { createdAt: 'desc' }
      },
      seasonTotals: {
        orderBy: { season: 'desc' }
      }
    }
  });

  return athlete;
}

/**
 * 根据姓名和单位查找运动员
 */
export async function findAthleteByNameAndTeam(name: string, team: string) {
  return prisma.athlete.findUnique({
    where: {
      name_team: { name, team }
    }
  });
}

/**
 * 创建运动员（导入成绩时自动调用）
 */
export async function createAthlete(data: CreateAthleteData): Promise<Athlete> {
  return prisma.athlete.create({
    data: {
      name: data.name,
      team: data.team,
      gender: data.gender,
      birthYear: data.birthYear,
      idNumber: data.idNumber,
    }
  });
}

/**
 * 创建或获取运动员（如果不存在则创建）
 */
export async function upsertAthlete(data: CreateAthleteData): Promise<Athlete> {
  return prisma.athlete.upsert({
    where: {
      name_team: { name: data.name, team: data.team }
    },
    update: {
      gender: data.gender,
      birthYear: data.birthYear,
    },
    create: data
  });
}

/**
 * 更新运动员信息
 */
export async function updateAthlete(id: string, data: Partial<CreateAthleteData>) {
  return prisma.athlete.update({
    where: { id },
    data
  });
}

/**
 * 合并运动员（处理换单位情况）
 * @param primaryId 主运动员ID（保留的）
 * @param mergedId 被合并的运动员ID
 * @param operatorName 操作人
 */
export async function mergeAthletes(
  primaryId: string,
  mergedId: string,
  operatorName: string
) {
  // 获取被合并运动员信息
  const mergedAthlete = await prisma.athlete.findUnique({
    where: { id: mergedId }
  });

  if (!mergedAthlete) {
    throw new Error('被合并的运动员不存在');
  }

  // 事务处理：迁移成绩 + 记录合并历史 + 删除旧记录
  return prisma.$transaction(async (tx) => {
    // 1. 将被合并运动员的所有成绩迁移到主运动员
    await tx.result.updateMany({
      where: { athleteId: mergedId },
      data: { athleteId: primaryId }
    });

    // 2. 记录合并历史
    await tx.athleteAlias.create({
      data: {
        primaryAthleteId: primaryId,
        oldName: mergedAthlete.name,
        oldTeam: mergedAthlete.team,
        mergedBy: operatorName
      }
    });

    // 3. 删除被合并的运动员
    await tx.athlete.delete({
      where: { id: mergedId }
    });

    // 4. 返回主运动员更新后的信息
    return tx.athlete.findUnique({
      where: { id: primaryId },
      include: {
        results: true,
        seasonTotals: true
      }
    });
  });
}

/**
 * 获取运动员合并历史
 */
export async function getAthleteAliases(athleteId: string) {
  return prisma.athleteAlias.findMany({
    where: { primaryAthleteId: athleteId },
    orderBy: { mergedAt: 'desc' }
  });
}

/**
 * 删除运动员
 */
export async function deleteAthlete(id: string) {
  return prisma.athlete.delete({
    where: { id }
  });
}
