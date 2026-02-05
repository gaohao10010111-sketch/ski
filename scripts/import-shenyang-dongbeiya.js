/**
 * 导入沈阳东北亚站单板滑雪平行项目成绩到数据库
 * 运行: node scripts/import-shenyang-dongbeiya.js
 */

const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

// 简单的 cuid 生成器
function createId() {
  return 'cmjzpdk' + crypto.randomBytes(10).toString('hex').slice(0, 15);
}

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

// 沈阳东北亚站比赛信息
const competitionId = 'comp_shenyang_dongbeiya_snowboard_parallel';
const competitionData = {
  id: competitionId,
  name: '2025-2026赛季全国单板滑雪平行项目U系列比赛（第二站沈阳东北亚站）',
  sportType: 'snowboard-parallel',
  sport: '单板滑雪',
  location: '沈阳东北亚滑雪场',
  date: '2026-01-30',
  endDate: '2026-01-31',
  status: 'completed',
  pdfSource: '2025-2026赛季全国单板滑雪平行项目U系列比赛_沈阳东北亚站.pdf'
};

// 沈阳东北亚站成绩数据
const shenyangResults = {
  // U18女子组平行大回转
  u18_female_pgs: [
    { rank: 1, bib: 10, name: "林子又", team: "四川体育职业学院", points: 360 },
    { rank: 2, bib: 17, name: "张芊凝", team: "北京市朝阳区第三少儿业余体校", points: 329 },
    { rank: 3, bib: 7, name: "臧怡然", team: "个人", points: 303 },
    { rank: 4, bib: 4, name: "丁小苏", team: "MAYA TEAM", points: 280 },
    { rank: 5, bib: 16, name: "袁丽文", team: "上海市静安区滑雪协会", points: 260 },
    { rank: 6, bib: 5, name: "姜林宏", team: "重庆埃尔派体育文化传播有限公司", points: 242 },
    { rank: 7, bib: 14, name: "李雨濛", team: "大连雨彤体育赛事俱乐部", points: 226 },
    { rank: 8, bib: 8, name: "张允童", team: "个人", points: 212 },
    { rank: 9, bib: 1, name: "罗念其", team: "四川体育职业学院", points: 199 },
    { rank: 10, bib: 2, name: "靳羽琪", team: "长春市冬季运动管理中心（长春市业余冰雪运动学校）", points: 187 },
  ],

  // U18男子组平行大回转
  u18_male_pgs: [
    { rank: 1, bib: 51, name: "张鑫泽", team: "速森体育", points: 360 },
    { rank: 2, bib: 71, name: "谢德拥", team: "吉林省体育局雪上运动管理中心", points: 329 },
    { rank: 3, bib: 60, name: "王嘉崎", team: "新疆维吾尔自治区冬季运动训练中心", points: 303 },
    { rank: 4, bib: 65, name: "王洪飞", team: "长春市冬季运动管理中心（长春市业余冰雪运动学校）", points: 280 },
    { rank: 5, bib: 64, name: "李嘉祺", team: "北京市朝阳区第三少儿业余体校", points: 260 },
    { rank: 6, bib: 75, name: "窦羿", team: "MAYA TEAM", points: 242 },
    { rank: 7, bib: 63, name: "郝子铭", team: "四川体育职业学院", points: 226 },
    { rank: 8, bib: 56, name: "付壡喆", team: "四川体育职业学院", points: 212 },
    { rank: 9, bib: 68, name: "程春", team: "长春市冬季运动管理中心（长春市业余冰雪运动学校）", points: 199 },
    { rank: 10, bib: 76, name: "苗誉镨", team: "速森体育", points: 187 },
  ],

  // U11女子组大回转
  u11_female_gs: [
    { rank: 1, bib: 207, name: "须星漫", team: "北京虎村竞技体育有限公司", points: 360 },
    { rank: 2, bib: 223, name: "周子翕", team: "成都热雪奇迹", points: 329 },
    { rank: 3, bib: 220, name: "肖金茂", team: "四川体育职业学院", points: 303 },
    { rank: 4, bib: 216, name: "焦阳云朵", team: "北京虎村竞技体育有限公司", points: 280 },
    { rank: 5, bib: 219, name: "古庭钰", team: "8848俱乐部", points: 260 },
    { rank: 6, bib: 214, name: "李悦嘉", team: "长春市冬季运动管理中心（长春市业余冰雪运动学校）", points: 242 },
    { rank: 7, bib: 201, name: "李子纯", team: "个人", points: 226 },
    { rank: 8, bib: 221, name: "曹娜瑛", team: "个人", points: 212 },
    { rank: 9, bib: 208, name: "李一菂", team: "北京虎村竞技体育有限公司", points: 199 },
    { rank: 10, bib: 202, name: "詹涵予", team: "长春市冬季运动管理中心（长春市业余冰雪运动学校）", points: 187 },
  ],

  // U11男子组大回转
  u11_male_gs: [
    { rank: 1, bib: 287, name: "韩赫洺", team: "四川体育职业学院", points: 360 },
    { rank: 2, bib: 291, name: "宣达辰", team: "个人", points: 329 },
    { rank: 3, bib: 267, name: "蒋文栋", team: "MAYA TEAM", points: 303 },
    { rank: 4, bib: 266, name: "王一臣", team: "MAYA TEAM", points: 280 },
    { rank: 5, bib: 253, name: "刘昱辰", team: "MAYA TEAM", points: 260 },
    { rank: 6, bib: 272, name: "罗晓野", team: "个人", points: 242 },
    { rank: 7, bib: 252, name: "郑祎衫", team: "沈抚改革创新示范区体育联合会", points: 226 },
    { rank: 8, bib: 262, name: "肖咏悦", team: "上海市静安区滑雪协会", points: 212 },
    { rank: 9, bib: 270, name: "陈鑫艺", team: "四川体育职业学院", points: 199 },
    { rank: 10, bib: 273, name: "王子溪", team: "King Pro Team", points: 187 },
  ],

  // U15女子组大回转
  u15_female_gs: [
    { rank: 1, bib: 128, name: "邱嘉晴", team: "北京虎村竞技体育有限公司", points: 360 },
    { rank: 2, bib: 112, name: "沈凌羽", team: "MAYA TEAM", points: 329 },
    { rank: 3, bib: 121, name: "刘沛怡", team: "MAYA TEAM", points: 303 },
    { rank: 4, bib: 127, name: "朱恩瑞", team: "吉林省体育局雪上运动管理中心", points: 280 },
    { rank: 5, bib: 105, name: "刘妍梦", team: "8848俱乐部", points: 260 },
    { rank: 6, bib: 104, name: "付睿熹", team: "四川体育职业学院", points: 242 },
    { rank: 7, bib: 111, name: "刘姝廷", team: "8848俱乐部", points: 226 },
    { rank: 8, bib: 102, name: "邹齐", team: "个人", points: 212 },
    { rank: 9, bib: 122, name: "袁薪雅", team: "吉林省体育局雪上运动管理中心", points: 199 },
    { rank: 10, bib: 123, name: "黄卫瑄", team: "ACE竞技滑雪队", points: 187 },
    { rank: 11, bib: 108, name: "陈雨歌", team: "四川体育职业学院", points: 176 },
    { rank: 12, bib: 124, name: "罗依然", team: "四川体育职业学院", points: 166 },
    { rank: 13, bib: 101, name: "王艺潼", team: "个人", points: 157 },
  ],

  // U15男子组大回转
  u15_male_gs: [
    { rank: 1, bib: 162, name: "高佳钇", team: "速森体育", points: 360 },
    { rank: 2, bib: 155, name: "刁禹宁", team: "个人", points: 329 },
    { rank: 3, bib: 181, name: "李天圆", team: "MAYA TEAM", points: 303 },
    { rank: 4, bib: 178, name: "陈清桦", team: "MAYA TEAM", points: 280 },
    { rank: 5, bib: 151, name: "张雨曈", team: "MAYA TEAM", points: 260 },
    { rank: 6, bib: 167, name: "李柏翔", team: "MAYA TEAM", points: 242 },
    { rank: 7, bib: 180, name: "马赛", team: "四川体育职业学院", points: 226 },
    { rank: 8, bib: 179, name: "高暄壹", team: "吉林省体育局雪上运动管理中心", points: 212 },
    { rank: 9, bib: 156, name: "李曾翼", team: "个人", points: 199 },
    { rank: 10, bib: 170, name: "郭天泽", team: "MAYA TEAM", points: 187 },
  ],
};

// 项目配置
const eventConfigs = [
  { key: 'u18_female_pgs', discipline: '平行大回转', ageGroup: 'U18', gender: '女子组', athleteGender: '女' },
  { key: 'u18_male_pgs', discipline: '平行大回转', ageGroup: 'U18', gender: '男子组', athleteGender: '男' },
  { key: 'u11_female_gs', discipline: '大回转', ageGroup: 'U11', gender: '女子组', athleteGender: '女' },
  { key: 'u11_male_gs', discipline: '大回转', ageGroup: 'U11', gender: '男子组', athleteGender: '男' },
  { key: 'u15_female_gs', discipline: '大回转', ageGroup: 'U15', gender: '女子组', athleteGender: '女' },
  { key: 'u15_male_gs', discipline: '大回转', ageGroup: 'U15', gender: '男子组', athleteGender: '男' },
];

function importData() {
  console.log('开始导入沈阳东北亚站数据...\n');

  // 开始事务
  const transaction = db.transaction(() => {
    // 1. 检查并删除旧的比赛数据
    const existingComp = db.prepare('SELECT id FROM Competition WHERE id = ?').get(competitionId);
    if (existingComp) {
      console.log('删除旧的比赛数据...');
      db.prepare('DELETE FROM Result WHERE competitionId = ?').run(competitionId);
      db.prepare('DELETE FROM Competition WHERE id = ?').run(competitionId);
    }

    // 2. 插入比赛
    console.log(`插入比赛: ${competitionData.name}`);
    db.prepare(`
      INSERT INTO Competition (id, name, sportType, sport, location, date, endDate, status, pdfSource)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      competitionData.id,
      competitionData.name,
      competitionData.sportType,
      competitionData.sport,
      competitionData.location,
      competitionData.date,
      competitionData.endDate,
      competitionData.status,
      competitionData.pdfSource
    );

    // 准备 SQL 语句
    const findAthlete = db.prepare('SELECT id FROM Athlete WHERE name = ? AND team = ?');
    const insertAthlete = db.prepare(`
      INSERT INTO Athlete (id, name, team, gender, updatedAt)
      VALUES (?, ?, ?, ?, datetime('now'))
    `);
    const insertResult = db.prepare(`
      INSERT INTO Result (id, competitionId, athleteId, discipline, ageGroup, gender, rank, points, bib)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    let totalResults = 0;
    let newAthletes = 0;

    for (const config of eventConfigs) {
      const results = shenyangResults[config.key];
      if (!results) continue;

      console.log(`  导入 ${config.ageGroup} ${config.gender === '男' ? '男子组' : '女子组'} ${config.discipline}: ${results.length} 条`);

      for (const r of results) {
        // 查找或创建运动员
        let athlete = findAthlete.get(r.name, r.team);
        let athleteId;

        if (athlete) {
          athleteId = athlete.id;
        } else {
          athleteId = createId();
          insertAthlete.run(athleteId, r.name, r.team, config.athleteGender);
          newAthletes++;
        }

        // 插入成绩
        insertResult.run(
          createId(),
          competitionId,
          athleteId,
          config.discipline,
          config.ageGroup,
          config.gender,
          r.rank,
          r.points,
          r.bib
        );
        totalResults++;
      }
    }

    console.log(`\n总计导入 ${totalResults} 条成绩`);
    console.log(`新增 ${newAthletes} 名运动员`);
  });

  // 执行事务
  transaction();

  console.log('\n导入完成!');
}

// 执行导入
importData();

// 关闭数据库连接
db.close();
