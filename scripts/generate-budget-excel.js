const XLSX = require('xlsx');

// 定义数据结构
const systems = [
  {
    seq: 1,
    name: '积分计算引擎系统',
    modules: [
      { name: '高山滑雪积分计算', price: 36000, params: [
        '支持时间基础公式计算', '支持异常状态处理', '支持判罚分动态计算',
        '支持赛事分级系数配置', '支持伤病保护积分计算'
      ]},
      { name: '单板坡障/大跳台积分计算', price: 18000, params: [
        '支持坡面障碍技巧积分计算', '支持大跳台项目积分计算',
        '支持裁判评分转排名算法', '支持240/360/120分档计算'
      ]},
      { name: '单板平行积分计算', price: 14000, params: [
        '支持平行大回转(PGS)竞速积分', '支持平行回转(PSL)淘汰赛制积分',
        '支持时间差计算与排名', '支持淘汰赛轮次管理'
      ]},
      { name: '自由式滑雪积分计算', price: 32000, params: [
        '支持坡面障碍技巧积分计算', '支持大跳台项目积分计算',
        '支持技巧难度系数配置', '支持多轮次成绩取最佳规则', '支持预赛决赛成绩合并计算'
      ]},
      { name: 'U系列统一积分计算', price: 28000, params: [
        '支持360分制积分表', '支持基础分计算', '支持赛季滚动分计算',
        '支持优先级分计算', '支持年龄组自动识别', '支持样本不足时保护机制'
      ]}
    ]
  },
  {
    seq: 2,
    name: '运动员管理系统',
    modules: [
      { name: '运动员信息管理', price: 24000, params: [
        '支持运动员基本信息录入与维护', '支持身份证号码解析与校验',
        '支持根据身份证自动计算年龄分组', '支持运动员资格状态管理', '支持多条件组合检索与筛选'
      ]},
      { name: '运动员积分档案', price: 22000, params: [
        '支持个人积分总览', '支持历史参赛成绩记录查询',
        '支持积分变化趋势图表展示', '支持排名变化曲线可视化', '支持积分延续计算'
      ]},
      { name: '运动员检索导出', price: 14000, params: [
        '支持多条件组合检索', '支持积分区间筛选', '支持排名范围筛选', '支持检索结果导出'
      ]}
    ]
  },
  {
    seq: 3,
    name: '赛事管理系统',
    modules: [
      { name: '赛事信息管理', price: 20000, params: [
        '支持赛事基本信息创建与编辑', '支持赛事分级设置',
        '支持赛事状态流转', '支持场地信息关联与验证', '支持赛事公告发布'
      ]},
      { name: '赛程编排管理', price: 14000, params: [
        '支持比赛日程编排', '支持轮次配置', '支持赛事日历展示'
      ]},
      { name: '成绩录入管理', price: 22000, params: [
        '支持时间成绩录入', '支持裁判评分录入',
        '支持成绩实时计算与排名更新', '支持成绩异常标记与处理'
      ]},
      { name: '成绩公示发布', price: 14000, params: [
        '支持成绩单自动生成', '支持成绩网页在线公示',
        '支持成绩导出', '支持历史成绩档案查询'
      ]}
    ]
  },
  {
    seq: 4,
    name: '排名统计系统',
    modules: [
      { name: '实时排名管理', price: 22000, params: [
        '支持全国积分排名实时更新', '支持分项目独立排名',
        '支持U系列分组排名', '支持男女分别独立排名', '支持历史排名查询'
      ]},
      { name: '数据统计分析', price: 16000, params: [
        '支持积分分布统计图表', '支持赛事参与度统计',
        '支持运动员成绩趋势分析', '支持积分趋势可视化'
      ]},
      { name: '报表导出管理', price: 10000, params: [
        '支持排名榜单导出', '支持统计报表导出', '支持多格式导出'
      ]}
    ]
  },
  {
    seq: 5,
    name: '用户权限系统',
    modules: [
      { name: '用户账户管理', price: 16000, params: [
        '支持邮箱注册登录', '支持密码找回与重置',
        '支持个人信息维护', '支持登录状态保持', '支持表单实时验证'
      ]},
      { name: '角色权限管理', price: 10000, params: [
        '支持多角色定义', '支持基础功能权限配置'
      ]}
    ]
  },
  {
    seq: 6,
    name: '前端界面开发',
    modules: [
      { name: 'Web端页面开发', price: 48000, params: [
        '支持首页门户设计与开发', '支持积分查询页面', '支持赛事中心页面',
        '支持运动员中心页面', '支持个人中心页面', '支持管理后台页面', '支持响应式布局适配'
      ]},
      { name: '多语言国际化', price: 16000, params: [
        '支持中英日韩等8种语言', '支持语言切换组件', '支持多语言路由适配'
      ]},
      { name: '规则中心开发', price: 12000, params: [
        '支持FIS规则页面', '支持竞赛规则页面', '支持积分规则页面', '支持积分体系总览页面'
      ]},
      { name: 'UI组件库开发', price: 8000, params: [
        '支持Toast通知组件', '支持面包屑导航组件', '支持导航进度条组件', '支持项目切换组件'
      ]}
    ]
  },
  {
    seq: 7,
    name: '数据服务系统',
    modules: [
      { name: 'API接口开发', price: 18000, params: [
        '支持RESTful API接口设计与开发', '支持接口鉴权与安全验证',
        '支持接口错误处理与响应规范', '支持健康检查接口'
      ]},
      { name: '数据库设计', price: 18000, params: [
        '支持运动员数据表设计', '支持赛事数据表设计',
        '支持成绩数据表设计', '支持积分历史数据表设计', '支持索引优化与查询调优'
      ]},
      { name: '前端性能优化', price: 8000, params: [
        '支持图片懒加载', '支持页面静态化加速', '支持客户端状态管理'
      ]}
    ]
  },
  {
    seq: 8,
    name: '系统部署运维',
    modules: [
      { name: '服务器部署', price: 12000, params: [
        '支持云服务器环境搭建', '支持Nginx反向代理配置',
        '支持HTTPS安全证书部署', '支持PM2进程管理', '支持静态站点部署'
      ]},
      { name: '运维技术支持', price: 8000, params: [
        '支持首年运维技术支持', '支持故障响应与处理', '支持版本更新部署'
      ]}
    ]
  }
];

// 生成数据行
const data = [];
const merges = [];
const formulaCells = []; // 记录需要添加公式的单元格

// 标题行
data.push(['中国滑雪积分系统开发技术参数', '', '', '', '', '', '', '']);
merges.push({ s: { r: 0, c: 0 }, e: { r: 0, c: 7 } });

// 表头行
data.push(['序号', '子系统', '功能模块', '详细参数', '数量', '单价（元）', '合计（元）', '备注']);

let currentRow = 2; // 从第3行开始（0-indexed为2）

systems.forEach(system => {
  const systemStartRow = currentRow;

  system.modules.forEach((module, moduleIdx) => {
    const moduleStartRow = currentRow;

    module.params.forEach((param, paramIdx) => {
      const row = [];

      if (paramIdx === 0 && moduleIdx === 0) {
        row.push(system.seq);
      } else {
        row.push('');
      }

      if (paramIdx === 0 && moduleIdx === 0) {
        row.push(system.name);
      } else {
        row.push('');
      }

      if (paramIdx === 0) {
        row.push(module.name);
        row.push(param);
        row.push(1);
        row.push(module.price);
        // 先放入数值，稍后替换为公式
        row.push(module.price);
        row.push('');
        // 记录公式单元格位置（Excel行号从1开始）
        formulaCells.push({
          row: currentRow,
          col: 6, // G列
          excelRow: currentRow + 1,
          formula: `E${currentRow + 1}*F${currentRow + 1}`
        });
      } else {
        row.push('');
        row.push(param);
        row.push('');
        row.push('');
        row.push('');
        row.push('');
      }

      data.push(row);
      currentRow++;
    });

    const moduleEndRow = currentRow - 1;

    // 合并功能模块列（C列，index=2）
    if (moduleEndRow > moduleStartRow) {
      merges.push({ s: { r: moduleStartRow, c: 2 }, e: { r: moduleEndRow, c: 2 } });
    }
    // 合并数量列（E列，index=4）
    if (moduleEndRow > moduleStartRow) {
      merges.push({ s: { r: moduleStartRow, c: 4 }, e: { r: moduleEndRow, c: 4 } });
    }
    // 合并单价列（F列，index=5）
    if (moduleEndRow > moduleStartRow) {
      merges.push({ s: { r: moduleStartRow, c: 5 }, e: { r: moduleEndRow, c: 5 } });
    }
    // 合并合计列（G列，index=6）
    if (moduleEndRow > moduleStartRow) {
      merges.push({ s: { r: moduleStartRow, c: 6 }, e: { r: moduleEndRow, c: 6 } });
    }
    // 合并备注列（H列，index=7）
    if (moduleEndRow > moduleStartRow) {
      merges.push({ s: { r: moduleStartRow, c: 7 }, e: { r: moduleEndRow, c: 7 } });
    }
  });

  const systemEndRow = currentRow - 1;

  // 合并序号列（A列，index=0）
  if (systemEndRow > systemStartRow) {
    merges.push({ s: { r: systemStartRow, c: 0 }, e: { r: systemEndRow, c: 0 } });
  }
  // 合并子系统列（B列，index=1）
  if (systemEndRow > systemStartRow) {
    merges.push({ s: { r: systemStartRow, c: 1 }, e: { r: systemEndRow, c: 1 } });
  }
});

// 计算总价用于显示
let calculatedTotal = 0;
systems.forEach(s => {
  s.modules.forEach(m => {
    calculatedTotal += m.price;
  });
});

// 合计行
const totalRow = currentRow;
data.push(['合计', '', '', '', '', '', calculatedTotal, '']);
merges.push({ s: { r: totalRow, c: 0 }, e: { r: totalRow, c: 5 } });

// 创建工作表
const ws = XLSX.utils.aoa_to_sheet(data);

// 设置合并单元格
ws['!merges'] = merges;

// 设置列宽
ws['!cols'] = [
  { wch: 6 },   // 序号
  { wch: 18 },  // 子系统
  { wch: 20 },  // 功能模块
  { wch: 36 },  // 详细参数
  { wch: 6 },   // 数量
  { wch: 12 },  // 单价
  { wch: 12 },  // 合计
  { wch: 8 },   // 备注
];

// 辅助函数：将列号转为Excel列名
function getColLetter(colIndex) {
  let letter = '';
  while (colIndex >= 0) {
    letter = String.fromCharCode((colIndex % 26) + 65) + letter;
    colIndex = Math.floor(colIndex / 26) - 1;
  }
  return letter;
}

// 添加公式到合计单元格
formulaCells.forEach(cell => {
  const cellRef = 'G' + cell.excelRow;
  const priceCell = ws['F' + cell.excelRow];
  const priceValue = priceCell ? priceCell.v : 0;
  // 设置公式并保留计算值
  ws[cellRef] = {
    t: 'n',
    v: priceValue,
    f: cell.formula
  };
});

// 构建总计公式 - 使用多个单元格相加
const sumParts = formulaCells.map(cell => 'G' + cell.excelRow);
const totalCellRef = 'G' + (totalRow + 1);
ws[totalCellRef] = {
  t: 'n',
  v: calculatedTotal,
  f: sumParts.join('+')
};

// 设置单元格样式（居中对齐）
// 注意：标准xlsx库对样式支持有限，但我们可以尝试设置
const range = XLSX.utils.decode_range(ws['!ref']);
for (let R = range.s.r; R <= range.e.r; ++R) {
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const cellRef = XLSX.utils.encode_cell({ r: R, c: C });
    if (!ws[cellRef]) continue;

    // 初始化样式对象
    if (!ws[cellRef].s) ws[cellRef].s = {};

    // 设置居中对齐
    ws[cellRef].s.alignment = {
      horizontal: 'center',
      vertical: 'center',
      wrapText: true
    };

    // 标题行加粗
    if (R === 0) {
      ws[cellRef].s.font = { bold: true, sz: 14 };
    }
    // 表头行加粗
    if (R === 1) {
      ws[cellRef].s.font = { bold: true };
      ws[cellRef].s.fill = { fgColor: { rgb: 'CCCCCC' } };
    }
    // 合计行加粗
    if (R === totalRow) {
      ws[cellRef].s.font = { bold: true };
    }
  }
}

// 创建工作簿并保存
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, ws, '开发技术参数表');
XLSX.writeFile(workbook, 'docs/中国滑雪积分系统项目投入预算表_v3.xlsx');

// 验证
let total = 0;
systems.forEach(s => {
  s.modules.forEach(m => {
    total += m.price;
  });
});

console.log('Excel文件已生成: docs/中国滑雪积分系统项目投入预算表_v3.xlsx');
console.log('总行数:', data.length);
console.log('合并单元格数:', merges.length);
console.log('公式单元格数:', formulaCells.length);
console.log('计算总价:', total);

// 输出模块明细
console.log('\n=== 模块明细 ===');
systems.forEach(s => {
  let sysTotal = 0;
  console.log(`\n${s.seq}. ${s.name}:`);
  s.modules.forEach(m => {
    console.log(`   - ${m.name}: ${m.price.toLocaleString()}元`);
    sysTotal += m.price;
  });
  console.log(`   小计: ${sysTotal.toLocaleString()}元`);
});
