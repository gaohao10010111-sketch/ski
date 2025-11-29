const ExcelJS = require('exceljs');
const path = require('path');

async function generateExcel() {
  const workbook = new ExcelJS.Workbook();
  const ws = workbook.addWorksheet('开发技术参数表');

  // 设置列宽
  ws.columns = [
    { width: 6 },   // A: 序号
    { width: 18 },  // B: 子系统
    { width: 18 },  // C: 功能模块
    { width: 38 },  // D: 详细参数
    { width: 6 },   // E: 数量
    { width: 12 },  // F: 单价
    { width: 12 },  // G: 合计
    { width: 8 },   // H: 备注
  ];

  // 通用边框样式
  const thinBorder = {
    top: { style: 'thin' },
    left: { style: 'thin' },
    bottom: { style: 'thin' },
    right: { style: 'thin' }
  };

  // 居中对齐
  const centerAlign = { vertical: 'middle', horizontal: 'center', wrapText: true };
  const leftAlign = { vertical: 'middle', horizontal: 'left', wrapText: true };
  const rightAlign = { vertical: 'middle', horizontal: 'right' };

  // 第1行：大标题
  ws.mergeCells('A1:H1');
  const titleCell = ws.getCell('A1');
  titleCell.value = '中国滑雪积分系统开发技术参数';
  titleCell.font = { bold: true, size: 14 };
  titleCell.alignment = centerAlign;
  ws.getRow(1).height = 30;

  // 第2行：表头
  const headers = ['序号', '子系统', '功能模块', '详细参数', '数量', '单价（元）', '合计（元）', '备注'];
  const headerRow = ws.getRow(2);
  headers.forEach((h, i) => {
    const cell = headerRow.getCell(i + 1);
    cell.value = h;
    cell.font = { bold: true };
    cell.alignment = centerAlign;
    cell.border = thinBorder;
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0E0E0' } };
  });
  headerRow.height = 24;

  // 数据定义 - 总价目标约47万，有零有整
  // 总价目标: 468800元
  const data = [
    // 1. 积分计算引擎系统 (128000)
    { seq: 1, sys: '积分计算引擎系统', mod: '高山滑雪积分计算', params: [
      '支持时间基础公式计算', '支持异常状态处理', '支持判罚分动态计算', '支持赛事分级系数配置', '支持伤病保护积分计算'
    ], qty: 1, price: 36000 },
    { seq: '', sys: '', mod: '单板滑雪积分计算', params: [
      '支持坡面障碍技巧积分计算', '支持大跳台项目积分计算', '支持平行大回转竞速积分', '支持平行回转淘汰赛制积分', '支持裁判评分转排名算法'
    ], qty: 1, price: 32000 },
    { seq: '', sys: '', mod: '自由式滑雪积分计算', params: [
      '支持坡面障碍技巧积分计算', '支持大跳台项目积分计算', '支持技巧难度系数配置', '支持多轮次成绩取最佳规则', '支持预赛决赛成绩合并计算'
    ], qty: 1, price: 32000 },
    { seq: '', sys: '', mod: 'U系列统一积分计算', params: [
      '支持360分制积分表', '支持基础分计算', '支持赛季滚动分计算', '支持优先级分计算', '支持年龄组自动识别', '支持样本不足时保护机制'
    ], qty: 1, price: 28000 },

    // 2. 运动员管理系统 (56000)
    { seq: 2, sys: '运动员管理系统', mod: '运动员信息管理', params: [
      '支持运动员基本信息录入与维护', '支持身份证号码解析与校验', '支持根据身份证自动计算年龄分组', '支持运动员照片上传与管理', '支持运动员资格状态管理'
    ], qty: 1, price: 24000 },
    { seq: '', sys: '', mod: '运动员积分档案', params: [
      '支持个人积分总览', '支持历史参赛成绩记录查询', '支持积分变化趋势图表展示', '支持排名变化曲线可视化', '支持积分延续计算'
    ], qty: 1, price: 22000 },
    { seq: '', sys: '', mod: '运动员检索查询', params: [
      '支持多条件组合检索', '支持积分区间筛选', '支持排名范围筛选', '支持检索结果导出'
    ], qty: 1, price: 10000 },

    // 3. 赛事管理系统 (72000)
    { seq: 3, sys: '赛事管理系统', mod: '赛事信息管理', params: [
      '支持赛事基本信息创建与编辑', '支持赛事分级设置', '支持赛事状态流转', '支持场地信息关联与验证', '支持赛事公告发布'
    ], qty: 1, price: 18000 },
    { seq: '', sys: '', mod: '赛程编排管理', params: [
      '支持比赛日程编排', '支持轮次配置', '支持出发顺序生成', '支持分组抽签管理'
    ], qty: 1, price: 16000 },
    { seq: '', sys: '', mod: '成绩录入管理', params: [
      '支持时间成绩录入', '支持裁判评分录入', '支持成绩实时计算与排名更新', '支持FIS标准数据导入', '支持成绩异常标记'
    ], qty: 1, price: 24000 },
    { seq: '', sys: '', mod: '成绩公示发布', params: [
      '支持成绩单自动生成', '支持成绩网页在线公示', '支持成绩导出', '支持历史成绩档案查询'
    ], qty: 1, price: 14000 },

    // 4. 排名统计系统 (46000)
    { seq: 4, sys: '排名统计系统', mod: '实时排名管理', params: [
      '支持全国积分排名实时更新', '支持分项目独立排名', '支持U系列分组排名', '支持男女分别独立排名', '支持历史排名查询'
    ], qty: 1, price: 20000 },
    { seq: '', sys: '', mod: '数据统计分析', params: [
      '支持积分分布统计图表', '支持赛事参与度统计', '支持运动员成绩趋势分析', '支持数据可视化大屏展示'
    ], qty: 1, price: 16000 },
    { seq: '', sys: '', mod: '报表导出管理', params: [
      '支持排名榜单导出', '支持积分证明文件生成', '支持统计报表导出', '支持自定义报表模板'
    ], qty: 1, price: 10000 },

    // 5. 用户权限系统 (26000)
    { seq: 5, sys: '用户权限系统', mod: '用户账户管理', params: [
      '支持手机号邮箱注册登录', '支持短信验证码登录', '支持密码找回与重置', '支持个人信息维护', '支持登录日志记录'
    ], qty: 1, price: 14000 },
    { seq: '', sys: '', mod: '角色权限管理', params: [
      '支持多角色定义', '支持细粒度功能权限配置', '支持数据权限隔离', '支持操作审计日志'
    ], qty: 1, price: 12000 },

    // 6. 前端界面开发 (72000)
    { seq: 6, sys: '前端界面开发', mod: 'Web端页面开发', params: [
      '支持首页门户设计与开发', '支持积分查询页面', '支持赛事中心页面', '支持运动员中心页面', '支持个人中心页面', '支持管理后台页面', '支持响应式布局适配'
    ], qty: 1, price: 45000 },
    { seq: '', sys: '', mod: '小程序端开发', params: [
      '支持微信小程序核心功能开发', '支持积分查询与排名浏览', '支持赛事信息查看', '支持个人成绩查询', '支持消息通知推送'
    ], qty: 1, price: 27000 },

    // 7. 数据服务系统 (48000)
    { seq: 7, sys: '数据服务系统', mod: 'API接口开发', params: [
      '支持API接口设计与开发', '支持接口鉴权与安全验证', '支持接口限流与防刷', '支持接口文档自动生成'
    ], qty: 1, price: 18000 },
    { seq: '', sys: '', mod: '数据库设计', params: [
      '支持运动员数据表设计', '支持赛事数据表设计', '支持成绩数据表设计', '支持索引优化与查询调优', '支持数据备份与恢复机制'
    ], qty: 1, price: 18000 },
    { seq: '', sys: '', mod: '缓存与性能优化', params: [
      '支持缓存热点数据', '支持排名数据实时缓存更新', '支持页面静态化加速', '支持CDN内容分发'
    ], qty: 1, price: 12000 },

    // 8. 系统部署运维 (20800)
    { seq: 8, sys: '系统部署运维', mod: '服务器部署', params: [
      '支持云服务器环境搭建', '支持反向代理配置', '支持安全证书部署', '支持进程管理', '支持容器化部署'
    ], qty: 1, price: 12000 },
    { seq: '', sys: '', mod: '运维监控服务', params: [
      '支持系统监控', '支持异常告警通知', '支持每日数据自动备份', '支持故障响应', '支持首年运维技术支持'
    ], qty: 1, price: 8800 },
  ];

  // 验证总价: 36000+32000+32000+28000 + 24000+22000+10000 + 18000+16000+24000+14000 + 20000+16000+10000 + 14000+12000 + 45000+27000 + 18000+18000+12000 + 12000+8800 = 468800
  const totalPrice = 36000+32000+32000+28000 + 24000+22000+10000 + 18000+16000+24000+14000 + 20000+16000+10000 + 14000+12000 + 45000+27000 + 18000+18000+12000 + 12000+8800;
  console.log('预计总价:', totalPrice);

  let currentRow = 3;

  // 按系统分组
  const systems = [];
  let currentSys = null;
  data.forEach(item => {
    if (item.seq !== '') {
      currentSys = { seq: item.seq, sys: item.sys, modules: [], startRow: currentRow };
      systems.push(currentSys);
    }
    const modStartRowNum = currentRow;
    item.params.forEach((param, idx) => {
      const row = ws.getRow(currentRow);

      // 序号列（只在系统第一行填值）
      if (item.seq !== '' && idx === 0) {
        row.getCell(1).value = item.seq;
      }
      row.getCell(1).alignment = centerAlign;
      row.getCell(1).border = thinBorder;

      // 子系统列（只在系统第一行填值）
      if (item.seq !== '' && idx === 0) {
        row.getCell(2).value = item.sys;
      }
      row.getCell(2).alignment = centerAlign;
      row.getCell(2).border = thinBorder;

      // 功能模块列（只在模块第一行填值）
      if (idx === 0) {
        row.getCell(3).value = item.mod;
      }
      row.getCell(3).alignment = centerAlign;
      row.getCell(3).border = thinBorder;

      // 详细参数
      row.getCell(4).value = param;
      row.getCell(4).alignment = leftAlign;
      row.getCell(4).border = thinBorder;

      // 数量、单价、合计（只在模块最后一行填值）
      if (idx === item.params.length - 1) {
        row.getCell(5).value = item.qty;
        row.getCell(6).value = item.price;
        row.getCell(7).value = { formula: `E${currentRow}*F${currentRow}` };
      }
      row.getCell(5).alignment = centerAlign;
      row.getCell(5).border = thinBorder;
      row.getCell(6).alignment = rightAlign;
      row.getCell(6).border = thinBorder;
      row.getCell(6).numFmt = '#,##0';
      row.getCell(7).alignment = rightAlign;
      row.getCell(7).border = thinBorder;
      row.getCell(7).numFmt = '#,##0.00';

      // 备注
      row.getCell(8).alignment = centerAlign;
      row.getCell(8).border = thinBorder;

      currentRow++;
    });

    // 记录模块合并范围
    if (item.params.length > 1) {
      ws.mergeCells(`C${modStartRowNum}:C${currentRow - 1}`);
    }

    currentSys.modules.push({ startRow: modStartRowNum, endRow: currentRow - 1 });
  });

  // 合并子系统和序号列
  systems.forEach(sys => {
    const startRow = sys.startRow;
    const endRow = sys.modules[sys.modules.length - 1].endRow;
    if (endRow > startRow) {
      ws.mergeCells(`A${startRow}:A${endRow}`);
      ws.mergeCells(`B${startRow}:B${endRow}`);
    }
  });

  // 合计行
  const totalRow = ws.getRow(currentRow);
  ws.mergeCells(`A${currentRow}:F${currentRow}`);
  totalRow.getCell(1).value = '合计';
  totalRow.getCell(1).alignment = centerAlign;
  totalRow.getCell(1).font = { bold: true };
  totalRow.getCell(1).border = thinBorder;
  for (let i = 2; i <= 6; i++) {
    totalRow.getCell(i).border = thinBorder;
  }
  totalRow.getCell(7).value = { formula: `SUM(G3:G${currentRow - 1})` };
  totalRow.getCell(7).alignment = rightAlign;
  totalRow.getCell(7).font = { bold: true };
  totalRow.getCell(7).border = thinBorder;
  totalRow.getCell(7).numFmt = '#,##0.00';
  totalRow.getCell(8).border = thinBorder;

  // 保存文件
  const outputPath = path.join(__dirname, '..', 'docs', '中国滑雪积分系统项目投入预算表.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log('Excel文件已生成:', outputPath);
}

generateExcel().catch(console.error);
