/**
 * 导入沈阳东北亚站单板滑雪平行项目成绩到数据库（完整版）
 * 运行: node scripts/import-shenyang-dongbeiya.js
 */

const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

function createId() {
  return 'cmjzpdk' + crypto.randomBytes(10).toString('hex').slice(0, 15);
}

const dbPath = path.join(__dirname, '../prisma/ski.db');
const db = new Database(dbPath);

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

const shenyangResults = {
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
    { rank: 10, bib: 2, name: "靳羽琪", team: "长春市冬季运动管理中心", points: 187 },
    { rank: 11, bib: 13, name: "邵菲梵", team: "北京天高云淡体育文化有限公司", points: 176 },
    { rank: 12, bib: 9, name: "范芮希", team: "个人", points: 166 },
    { rank: 13, bib: 12, name: "贾釉茜", team: "ACE竞技滑雪队", points: 157 },
    { rank: 14, bib: 15, name: "房洢伊", team: "北京市朝阳区第三少儿业余体校", points: 149 },
    { rank: 15, bib: 11, name: "白默函", team: "重庆埃尔派体育文化传播有限公司", points: 141 },
  ],

  u18_male_pgs: [
    { rank: 1, bib: 51, name: "张鑫泽", team: "速森体育", points: 360 },
    { rank: 2, bib: 71, name: "谢德拥", team: "吉林省体育局雪上运动管理中心", points: 329 },
    { rank: 3, bib: 60, name: "王嘉崎", team: "新疆维吾尔自治区冬季运动训练中心", points: 303 },
    { rank: 4, bib: 65, name: "王洪飞", team: "长春市冬季运动管理中心", points: 280 },
    { rank: 5, bib: 64, name: "李嘉祺", team: "北京市朝阳区第三少儿业余体校", points: 260 },
    { rank: 6, bib: 75, name: "窦羿", team: "MAYA TEAM", points: 242 },
    { rank: 7, bib: 63, name: "郝子铭", team: "四川体育职业学院", points: 226 },
    { rank: 8, bib: 56, name: "付壡喆", team: "四川体育职业学院", points: 212 },
    { rank: 9, bib: 68, name: "程春", team: "长春市冬季运动管理中心", points: 199 },
    { rank: 10, bib: 76, name: "苗誉镨", team: "速森体育", points: 187 },
    { rank: 11, bib: 55, name: "杨武胜俊", team: "四川体育职业学院", points: 176 },
    { rank: 12, bib: 59, name: "宋星锋", team: "沈抚改革创新示范区体育联合会", points: 166 },
    { rank: 13, bib: 79, name: "吴熙诚", team: "上海市静安区滑雪协会", points: 157 },
    { rank: 14, bib: 54, name: "尚久智", team: "北京市朝阳区第三少儿业余体校", points: 149 },
    { rank: 15, bib: 69, name: "曲星铭", team: "个人", points: 141 },
    { rank: 16, bib: 78, name: "樊冠序", team: "ACE竞技滑雪队", points: 134 },
    { rank: 17, bib: 73, name: "吴保江", team: "个人", points: 127 },
    { rank: 18, bib: 52, name: "王天阳", team: "个人", points: 121 },
    { rank: 19, bib: 70, name: "杨一丁", team: "北京市朝阳区第三少儿业余体校", points: 115 },
    { rank: 20, bib: 67, name: "童科军", team: "五家渠市金科实验", points: 110 },
    { rank: 21, bib: 61, name: "刘鑫泽", team: "ACE竞技滑雪队", points: 105 },
    { rank: 22, bib: 62, name: "孙嘉泽", team: "沈抚改革创新示范区体育联合会", points: 100 },
  ],

  u11_female_gs: [
    { rank: 1, bib: 207, name: "须星漫", team: "北京虎村竞技体育有限公司", points: 360 },
    { rank: 2, bib: 223, name: "周子翕", team: "成都热雪奇迹", points: 329 },
    { rank: 3, bib: 220, name: "肖金茂", team: "四川体育职业学院", points: 303 },
    { rank: 4, bib: 216, name: "焦阳云朵", team: "北京虎村竞技体育有限公司", points: 280 },
    { rank: 5, bib: 219, name: "古庭钰", team: "8848俱乐部", points: 260 },
    { rank: 6, bib: 214, name: "李悦嘉", team: "长春市冬季运动管理中心", points: 242 },
    { rank: 7, bib: 201, name: "李子纯", team: "个人", points: 226 },
    { rank: 8, bib: 221, name: "曹娜瑛", team: "个人", points: 212 },
    { rank: 9, bib: 208, name: "李一菂", team: "北京虎村竞技体育有限公司", points: 199 },
    { rank: 10, bib: 202, name: "詹涵予", team: "长春市冬季运动管理中心", points: 187 },
    { rank: 11, bib: 218, name: "朱安然", team: "上海雪酷滑雪竞技队", points: 176 },
    { rank: 12, bib: 222, name: "李雨萱", team: "个人", points: 166 },
    { rank: 13, bib: 212, name: "ALBBESU", team: "张家口冰雪运动学校", points: 157 },
    { rank: 14, bib: 204, name: "张语珊", team: "个人", points: 149 },
    { rank: 15, bib: 210, name: "李汶瑾", team: "MAYA TEAM", points: 141 },
    { rank: 16, bib: 203, name: "姜予乔", team: "个人", points: 134 },
    { rank: 17, bib: 217, name: "李默涵", team: "8848俱乐部", points: 127 },
    { rank: 18, bib: 213, name: "周爱戴", team: "长春市极刃体育发展有限公司", points: 121 },
    { rank: 19, bib: 209, name: "马艺瑄", team: "沈抚改革创新示范区体育联合会", points: 115 },
    { rank: 20, bib: 224, name: "张兆檬", team: "King Pro Team", points: 110 },
    { rank: 21, bib: 206, name: "刘泽萱", team: "吉林峰尚青教体育文化产业有限公司", points: 105 },
  ],

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
    { rank: 11, bib: 295, name: "张睦然", team: "MAYA TEAM", points: 176 },
    { rank: 12, bib: 288, name: "赵梓聿", team: "MAYA TEAM", points: 166 },
    { rank: 13, bib: 278, name: "张朔源", team: "张家口市足球和冰雪运动学校", points: 157 },
    { rank: 14, bib: 276, name: "徐嘉艺", team: "长春市冬季运动管理中心", points: 149 },
    { rank: 15, bib: 257, name: "朱思越", team: "成都热雪奇迹", points: 141 },
    { rank: 16, bib: 294, name: "黄益航", team: "四川体育职业学院", points: 134 },
    { rank: 17, bib: 280, name: "孙奥荣", team: "四川体育职业学院", points: 127 },
    { rank: 18, bib: 281, name: "赵一诺", team: "沈抚改革创新示范区体育联合会", points: 121 },
    { rank: 19, bib: 290, name: "李沛洋", team: "个人", points: 115 },
    { rank: 20, bib: 289, name: "金俊烨", team: "延吉雪范", points: 110 },
    { rank: 21, bib: 255, name: "孙昊洋", team: "上海市静安区滑雪协会", points: 105 },
    { rank: 22, bib: 256, name: "郑伟伦", team: "沈抚改革创新示范区体育联合会", points: 100 },
    { rank: 23, bib: 260, name: "刘钥宸", team: "沈抚改革创新示范区体育联合会", points: 96 },
    { rank: 24, bib: 269, name: "许原岑", team: "沈抚改革创新示范区体育联合会", points: 92 },
    { rank: 25, bib: 264, name: "王梓墨", team: "个人", points: 88 },
    { rank: 26, bib: 268, name: "李承儒", team: "长春市冬季运动管理中心", points: 84 },
    { rank: 27, bib: 254, name: "梁洺嘉", team: "沈抚改革创新示范区体育联合会", points: 80 },
    { rank: 28, bib: 286, name: "安泓宇", team: "吉林峰尚青教体育文化产业有限公司", points: 76 },
    { rank: 29, bib: 284, name: "崔铭浩", team: "沈抚改革创新示范区体育联合会", points: 73 },
    { rank: 30, bib: 261, name: "李俊毅", team: "长春市极刃体育发展有限公司", points: 70 },
    { rank: 31, bib: 285, name: "孟奕成", team: "沈抚改革创新示范区体育联合会", points: 67 },
    { rank: 32, bib: 251, name: "尹一诺", team: "吉林峰尚青教体育文化产业有限公司", points: 64 },
    { rank: 33, bib: 292, name: "吴杭熹", team: "沈抚改革创新示范区体育联合会", points: 61 },
    { rank: 34, bib: 263, name: "梁洺睿", team: "沈抚改革创新示范区体育联合会", points: 58 },
    { rank: 35, bib: 277, name: "崔凯棋", team: "沈抚改革创新示范区体育联合会", points: 55 },
  ],

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
    { rank: 14, bib: 132, name: "亢正熙", team: "四川体育职业学院", points: 149 },
    { rank: 15, bib: 107, name: "李文静", team: "吉林省体育局雪上运动管理中心", points: 141 },
    { rank: 16, bib: 119, name: "谢露萱", team: "上海市静安区滑雪协会", points: 134 },
    { rank: 17, bib: 114, name: "叶丽扎·别克苏力坦", team: "新疆维吾尔自治区冬季运动训练中心", points: 127 },
    { rank: 18, bib: 125, name: "高雅傲雪", team: "沈抚改革创新示范区体育联合会", points: 121 },
    { rank: 19, bib: 116, name: "CANDIE JIANI SONG", team: "上海雪酷滑雪竞技队", points: 115 },
    { rank: 20, bib: 115, name: "赵天冉", team: "King Pro Team", points: 110 },
    { rank: 21, bib: 113, name: "孙小晰", team: "沈抚改革创新示范区体育联合会", points: 105 },
    { rank: 22, bib: 110, name: "王艺诺", team: "吉林省体育局雪上运动管理中心", points: 100 },
    { rank: 23, bib: 130, name: "刘馨泽", team: "吉林峰尚青教体育文化产业有限公司", points: 96 },
    { rank: 24, bib: 131, name: "陈梓萌", team: "King Pro Team", points: 92 },
    { rank: 25, bib: 103, name: "张涵舒", team: "重庆埃尔派体育文化传播有限公司", points: 88 },
    { rank: 26, bib: 120, name: "焦禹侨", team: "北京虎村竞技体育有限公司", points: 84 },
    { rank: 27, bib: 117, name: "朴恩裕", team: "延吉雪范", points: 80 },
    { rank: 28, bib: 118, name: "刘彦熠", team: "上海市静安区滑雪协会", points: 76 },
  ],

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
    { rank: 11, bib: 158, name: "暴城睿", team: "辽宁极限体育", points: 176 },
    { rank: 12, bib: 185, name: "杨子绪", team: "个人", points: 166 },
    { rank: 13, bib: 175, name: "于谨赫", team: "速森体育", points: 157 },
    { rank: 14, bib: 154, name: "徐承昊", team: "上海市静安区滑雪协会", points: 149 },
    { rank: 15, bib: 174, name: "叶庆安", team: "新疆维吾尔自治区冬季运动训练中心", points: 141 },
    { rank: 16, bib: 169, name: "陈浩铭", team: "四川体育职业学院", points: 134 },
    { rank: 17, bib: 164, name: "刘华森", team: "吉林峰尚青教体育文化产业有限公司", points: 127 },
    { rank: 18, bib: 153, name: "尤玺为", team: "个人", points: 121 },
    { rank: 19, bib: 165, name: "嘎日玛盖", team: "新疆维吾尔自治区冬季运动训练中心", points: 115 },
    { rank: 20, bib: 173, name: "司忠正", team: "长春市冬季运动管理中心", points: 110 },
    { rank: 21, bib: 159, name: "董天赋", team: "长春市冬季运动管理中心", points: 105 },
    { rank: 22, bib: 182, name: "左珈宁", team: "沈抚改革创新示范区体育联合会", points: 100 },
    { rank: 23, bib: 177, name: "高希言", team: "沈抚改革创新示范区体育联合会", points: 96 },
    { rank: 24, bib: 176, name: "刘子木", team: "沈抚改革创新示范区体育联合会", points: 92 },
    { rank: 25, bib: 152, name: "张峰睿", team: "沈抚改革创新示范区体育联合会", points: 88 },
    { rank: 26, bib: 168, name: "孙晟轩", team: "个人", points: 84 },
    { rank: 27, bib: 166, name: "刘子乐", team: "King Pro Team", points: 80 },
    { rank: 28, bib: 163, name: "梁恩泽", team: "上海市静安区滑雪协会", points: 76 },
    { rank: 29, bib: 161, name: "姜胤伯", team: "长春市极刃体育发展有限公司", points: 73 },
    { rank: 30, bib: 160, name: "陈冠霖", team: "沈抚改革创新示范区体育联合会", points: 70 },
  ],

};

const eventConfigs = [
  { key: 'u18_female_pgs', discipline: '平行大回转', ageGroup: 'U18', gender: '女子组', athleteGender: '女' },
  { key: 'u18_male_pgs', discipline: '平行大回转', ageGroup: 'U18', gender: '男子组', athleteGender: '男' },
  { key: 'u11_female_gs', discipline: '大回转', ageGroup: 'U11', gender: '女子组', athleteGender: '女' },
  { key: 'u11_male_gs', discipline: '大回转', ageGroup: 'U11', gender: '男子组', athleteGender: '男' },
  { key: 'u15_female_gs', discipline: '大回转', ageGroup: 'U15', gender: '女子组', athleteGender: '女' },
  { key: 'u15_male_gs', discipline: '大回转', ageGroup: 'U15', gender: '男子组', athleteGender: '男' },
];

function importData() {
  console.log('开始导入沈阳东北亚站数据（完整版）...\n');

  const transaction = db.transaction(() => {
    // 1. 删除旧数据
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
      competitionData.id, competitionData.name, competitionData.sportType,
      competitionData.sport, competitionData.location, competitionData.date,
      competitionData.endDate, competitionData.status, competitionData.pdfSource
    );

    const findAthlete = db.prepare('SELECT id FROM Athlete WHERE name = ? AND team = ?');
    const findAthleteByName = db.prepare('SELECT id, team FROM Athlete WHERE name = ?');
    const insertAthlete = db.prepare(`
      INSERT INTO Athlete (id, name, team, gender, updatedAt)
      VALUES (?, ?, ?, ?, datetime('now'))
    `);
    const updateAthleteTeam = db.prepare(`
      UPDATE Athlete SET team = ?, updatedAt = datetime('now') WHERE id = ?
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

      console.log(`  导入 ${config.ageGroup} ${config.gender} ${config.discipline}: ${results.length} 条`);

      for (const r of results) {
        let athlete = findAthlete.get(r.name, r.team);
        let athleteId;

        if (athlete) {
          athleteId = athlete.id;
        } else {
          // 尝试只用名字查找（可能换过俱乐部）
          const existingByName = findAthleteByName.get(r.name);
          if (existingByName) {
            athleteId = existingByName.id;
            // 如果团队信息更准确，更新
            if (r.team !== '个人' && existingByName.team !== r.team) {
              updateAthleteTeam.run(r.team, athleteId);
            }
          } else {
            athleteId = createId();
            insertAthlete.run(athleteId, r.name, r.team, config.athleteGender);
            newAthletes++;
          }
        }

        insertResult.run(
          createId(), competitionId, athleteId,
          config.discipline, config.ageGroup, config.gender,
          r.rank, r.points, r.bib
        );
        totalResults++;
      }
    }

    console.log(`\n总计导入 ${totalResults} 条成绩`);
    console.log(`新增 ${newAthletes} 名运动员`);
  });

  transaction();
  console.log('\n导入完成!');
}

importData();
db.close();
