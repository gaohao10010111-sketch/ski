import { PrismaClient, SportType, Gender, RaceLevel, PointsTier, CompetitionFormat, CompetitionStatus, USeriesGroup, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('开始填充种子数据...');

  // 1. 创建管理员用户
  const adminPassword = await bcrypt.hash('admin123456', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@ski-points.cn' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@ski-points.cn',
      passwordHash: adminPassword,
      name: '系统管理员',
      role: UserRole.ADMIN,
    },
  });
  console.log('创建管理员用户:', admin.username);

  // 2. 创建测试运动员
  const athletes = [
    // 高山滑雪
    { name: '张伟', gender: Gender.MALE, birthDate: new Date('2000-03-15'), province: '黑龙江', sportType: SportType.ALPINE_SKI, club: '哈尔滨滑雪队' },
    { name: '李娜', gender: Gender.FEMALE, birthDate: new Date('2001-07-22'), province: '吉林', sportType: SportType.ALPINE_SKI, club: '长春体育学院' },
    { name: '王强', gender: Gender.MALE, birthDate: new Date('1999-11-08'), province: '新疆', sportType: SportType.ALPINE_SKI, club: '新疆冬季运动中心' },

    // 单板坡障/大跳台
    { name: '刘洋', gender: Gender.MALE, birthDate: new Date('2002-05-12'), province: '北京', sportType: SportType.SNOWBOARD_SLOPESTYLE_BIGAIR, club: '北京冬季运动中心' },
    { name: '陈雪', gender: Gender.FEMALE, birthDate: new Date('2003-01-28'), province: '河北', sportType: SportType.SNOWBOARD_SLOPESTYLE_BIGAIR, club: '崇礼滑雪学校' },

    // 单板平行
    { name: '赵磊', gender: Gender.MALE, birthDate: new Date('1998-09-03'), province: '辽宁', sportType: SportType.SNOWBOARD_PARALLEL, club: '沈阳体育学院' },
    { name: '孙红', gender: Gender.FEMALE, birthDate: new Date('2000-12-18'), province: '黑龙江', sportType: SportType.SNOWBOARD_PARALLEL, club: '亚布力训练基地' },

    // 自由式坡障/大跳台
    { name: '周明', gender: Gender.MALE, birthDate: new Date('2001-04-25'), province: '吉林', sportType: SportType.FREESTYLE_SLOPESTYLE_BIGAIR, club: '吉林省冬季运动中心' },
    { name: '吴芳', gender: Gender.FEMALE, birthDate: new Date('2002-08-14'), province: '内蒙古', sportType: SportType.FREESTYLE_SLOPESTYLE_BIGAIR, club: '呼伦贝尔滑雪队' },

    // U系列运动员
    { name: '小明', gender: Gender.MALE, birthDate: new Date('2012-06-10'), province: '北京', sportType: SportType.ALPINE_SKI, uSeriesGroup: USeriesGroup.U15, club: '北京青少年滑雪俱乐部' },
    { name: '小红', gender: Gender.FEMALE, birthDate: new Date('2014-02-20'), province: '河北', sportType: SportType.SNOWBOARD_SLOPESTYLE_BIGAIR, uSeriesGroup: USeriesGroup.U12, club: '崇礼青少年训练营' },
  ];

  for (const athleteData of athletes) {
    const athlete = await prisma.athlete.upsert({
      where: {
        id: `seed-${athleteData.name}-${athleteData.sportType}`
      },
      update: {},
      create: {
        id: `seed-${athleteData.name}-${athleteData.sportType}`,
        ...athleteData,
      },
    });
    console.log('创建运动员:', athlete.name);
  }

  // 3. 创建测试比赛
  const competitions = [
    // 高山滑雪比赛
    {
      id: 'comp-alpine-gs-2024',
      name: '2024-2025赛季全国高山滑雪锦标赛（大回转）',
      sportType: SportType.ALPINE_SKI,
      discipline: 'GS',
      startDate: new Date('2024-12-15'),
      endDate: new Date('2024-12-16'),
      location: '吉林省吉林市',
      venue: '北大湖滑雪场',
      raceLevel: RaceLevel.A,
      format: CompetitionFormat.TIME_TRIAL,
      status: CompetitionStatus.COMPLETED,
      organizer: '中国滑雪协会',
    },
    {
      id: 'comp-alpine-sl-2024',
      name: '2024-2025赛季全国高山滑雪锦标赛（回转）',
      sportType: SportType.ALPINE_SKI,
      discipline: 'SL',
      startDate: new Date('2024-12-17'),
      endDate: new Date('2024-12-17'),
      location: '吉林省吉林市',
      venue: '北大湖滑雪场',
      raceLevel: RaceLevel.A,
      format: CompetitionFormat.TIME_TRIAL,
      status: CompetitionStatus.COMPLETED,
      organizer: '中国滑雪协会',
    },

    // 单板坡障比赛
    {
      id: 'comp-sb-ss-2024',
      name: '2024-2025赛季全国单板滑雪坡面障碍技巧锦标赛',
      sportType: SportType.SNOWBOARD_SLOPESTYLE_BIGAIR,
      discipline: 'SS',
      startDate: new Date('2025-01-10'),
      endDate: new Date('2025-01-12'),
      location: '河北省张家口市',
      venue: '云顶滑雪公园',
      pointsTier: PointsTier.TIER_360,
      format: CompetitionFormat.QUALIFICATION_FINAL,
      status: CompetitionStatus.UPCOMING,
      organizer: '中国滑雪协会',
    },

    // 单板平行比赛
    {
      id: 'comp-sb-pgs-2024',
      name: '2024-2025赛季全国单板滑雪平行大回转锦标赛',
      sportType: SportType.SNOWBOARD_PARALLEL,
      discipline: 'PGS',
      startDate: new Date('2025-01-20'),
      endDate: new Date('2025-01-21'),
      location: '黑龙江省哈尔滨市',
      venue: '亚布力滑雪场',
      pointsTier: PointsTier.TIER_240,
      format: CompetitionFormat.ELIMINATION,
      status: CompetitionStatus.UPCOMING,
      organizer: '中国滑雪协会',
    },

    // 自由式比赛
    {
      id: 'comp-fs-ba-2024',
      name: '2024-2025赛季全国自由式滑雪大跳台锦标赛',
      sportType: SportType.FREESTYLE_SLOPESTYLE_BIGAIR,
      discipline: 'BA',
      startDate: new Date('2025-02-01'),
      endDate: new Date('2025-02-02'),
      location: '北京市',
      venue: '首钢滑雪大跳台',
      pointsTier: PointsTier.TIER_360,
      format: CompetitionFormat.QUALIFICATION_FINAL,
      status: CompetitionStatus.UPCOMING,
      organizer: '中国滑雪协会',
    },
  ];

  for (const compData of competitions) {
    const competition = await prisma.competition.upsert({
      where: { id: compData.id },
      update: {},
      create: compData,
    });
    console.log('创建比赛:', competition.name);
  }

  // 4. 为已完成的比赛创建成绩
  const alpineGsResults = [
    { athleteId: 'seed-张伟-ALPINE_SKI', finalRank: 1, totalTime: 120.35, basePoints: 0, finalPoints: 0 },
    { athleteId: 'seed-王强-ALPINE_SKI', finalRank: 2, totalTime: 121.82, basePoints: 12.23, finalPoints: 12.23 },
    { athleteId: 'seed-李娜-ALPINE_SKI', finalRank: 3, totalTime: 123.15, basePoints: 23.28, finalPoints: 23.28 },
  ];

  for (const resultData of alpineGsResults) {
    const result = await prisma.competitionResult.upsert({
      where: {
        athleteId_competitionId: {
          athleteId: resultData.athleteId,
          competitionId: 'comp-alpine-gs-2024',
        },
      },
      update: {},
      create: {
        ...resultData,
        competitionId: 'comp-alpine-gs-2024',
        raceCoefficient: 1.0,
      },
    });
    console.log('创建成绩: 运动员', resultData.athleteId, '排名', result.finalRank);
  }

  // 5. 创建赛季积分记录
  const seasonPoints = [
    { athleteId: 'seed-张伟-ALPINE_SKI', season: '2024-2025', sportType: SportType.ALPINE_SKI, discipline: 'GS', totalPoints: 0, competitionCount: 1, rank: 1 },
    { athleteId: 'seed-王强-ALPINE_SKI', season: '2024-2025', sportType: SportType.ALPINE_SKI, discipline: 'GS', totalPoints: 12.23, competitionCount: 1, rank: 2 },
    { athleteId: 'seed-李娜-ALPINE_SKI', season: '2024-2025', sportType: SportType.ALPINE_SKI, discipline: 'GS', totalPoints: 23.28, competitionCount: 1, rank: 3 },
  ];

  for (const pointsData of seasonPoints) {
    await prisma.athleteSeasonPoints.upsert({
      where: {
        athleteId_season_sportType_discipline: {
          athleteId: pointsData.athleteId,
          season: pointsData.season,
          sportType: pointsData.sportType,
          discipline: pointsData.discipline || '',
        },
      },
      update: {},
      create: pointsData,
    });
    console.log('创建赛季积分: 运动员', pointsData.athleteId);
  }

  console.log('种子数据填充完成！');
}

main()
  .catch((e) => {
    console.error('种子数据填充失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
