# 高山滑雪竞赛管理系统

## 🚨 甲方最新指导意见 (最高优先级)

### 📅 反馈时间：2024年12月
### 👤 反馈来源：阮总 (项目总负责人)

#### 🎯 核心问题识别

**1. 系统定位混乱问题** ⚠️
- ❌ **当前问题**：系统展示的是对公众的网页，内部功能全部暴露
- ✅ **正确方向**：应该是**会员制系统**，注册用户才能进入，权限分级管理
- 🔧 **需要调整**：很多数据统计、积分计算等都应该是内部后台功能，不应对公众开放

**2. 业务理解根本性偏差** 🚨 **最重要**
- ❌ **错误理解**：做国际雪联积分的中国引进版本
- ✅ **正确理解**：做**中国自己的高山滑雪积分体系**
- ❌ **错误方向**：统计国际赛事和已有FIS积分
- ✅ **正确方向**：统计**中国国内滑雪赛事**，自建积分计算体系
- 📋 **核心原则**：借鉴国际雪联方法，但设计中国自己的赛事积分体系

#### 📋 业务逻辑重新梳理

**我们要做的是：**
1. **中国高山滑雪赛事积分系统** (不是FIS积分引进)
2. **统计中国国内滑雪赛事** (不是国际赛事)
3. **借鉴国际雪联算法** (不是直接使用FIS规则)
4. **会员制管理系统** (不是公众展示网站)

#### 🔄 立即执行的调整要求

**第一阶段：等待规则框架** (暂停开发)
- ⏸️ 暂停当前所有开发工作
- 📖 等待阮总发布的"中国高山滑雪赛事积分规则框架"
- 🤝 与丁总、冬运中心、中滑协达成规则共识

**第二阶段：系统重构** (规则确定后)
- 🏗️ 基于确定规则重新设计整个系统架构
- 👥 实现会员制和权限管理
- 🇨🇳 开发中国积分计算引擎 (非FIS积分)
- 🔒 区分公众界面和内部管理系统

#### 📝 术语和文案紧急调整

**需要立即修正的表述：**
- ❌ "FIS积分" → ✅ "中国高山滑雪积分"
- ❌ "国际雪联标准" → ✅ "参考国际标准的中国积分体系"
- ❌ "国际赛事" → ✅ "中国国内赛事"
- ❌ "引进FIS积分" → ✅ "建立中国积分体系"

#### 🎯 关键待确定内容

**由阮总规则框架解决：**
- 赛事分级和类别划分
- U系列年龄分组
- 准入要求和名额分配
- 冬季/夏季赛季划分
- 注册办法和参赛资格

**由技术团队填充：**
- 具体计算公式 (借鉴国际雪联)
- 系统技术实现细节
- 数据库结构设计

#### ⚠️ 当前系统处理方案

**暂时保持现状但添加说明：**
1. 保持现有系统运行作为技术演示
2. 在显著位置标注"技术原型，最终以规则框架为准"
3. 准备根据规则框架快速重构

#### 🤝 多方协作要求

**必须达成共识的各方：**
- 阮总 (项目总负责)
- 丁总 (青少年赛事体系)
- 技术团队 (光一科技)
- 冬运中心 (官方指导)
- 中滑协 (行业协会)

**共识内容：**
- 中国高山滑雪积分规则框架
- 赛事级别和分类体系
- 青少年U系列具体规则
- 技术实现标准和要求

---

## 🏛️ 重要项目定位说明 (必读)

### 📋 官方授权与表述规范
1. **授权状态**: 本项目为国家体育总局冬季运动管理中心项目，目前官方授权正在审批过程中
2. **表述原则**: 措辞需谨慎，避免过度使用"官方认证"等强烈表述
3. **技术标准**: 我们基于FIS国际雪联的积分体系开发，技术标准完全一致，但表述上要突出我国官方地位而非国际雪联
4. **定位导向**: 强调为"中国高山滑雪运动官方数据管理平台"，体现国家级平台的权威性

### 🎯 文案表述指导原则
- ✅ 使用: "符合国际标准"、"采用国际算法"、"参照FIS标准"
- ✅ 使用: "国家体育总局冬运中心指导"、"中国高山滑雪官方平台"
- ❌ 避免: "FIS官方认证"、"国际雪联官方授权"
- ❌ 避免: 直接声称已获得正式官方认证

## 项目概述 (已根据甲方指导调整)

**⚠️ 重要声明：当前系统为技术原型阶段，最终系统架构和业务逻辑以阮总发布的规则框架为准**

### 🎯 项目正确定位
参考国际雪联(FIS)积分计算方法，为中国高山滑雪运动建立**独立的国内赛事积分体系**。这是一个**会员制管理系统**，用于统计和管理中国国内高山滑雪赛事的积分数据，而非国际雪联积分的引进或展示平台。

### 🔄 业务逻辑核心
1. **赛事范围**：专注中国国内高山滑雪赛事 (非国际赛事)
2. **积分体系**：建立中国自主积分计算体系 (借鉴但非复制FIS规则)
3. **用户定位**：会员制内部管理系统 (非公众展示网站)
4. **数据管理**：国内运动员、赛事、成绩的完整管理 (非FIS数据引进)

### ⏸️ 当前开发状态
- **第一阶段**：等待"中国高山滑雪赛事积分规则框架"发布
- **第二阶段**：基于确定规则重新设计系统架构
- **技术演示**：现有功能仅作为技术可行性展示

## 核心功能需求 (待规则框架确定后调整)

### 1. 中国赛事数据管理
- **数据导入**: 支持中国国内赛事数据导入 (参考FIS格式但适配国内赛事)
- **数据解析**: 自动解析国内比赛结果、运动员信息、赛道条件等
- **数据存储**: 结构化存储中国国内赛事历史数据
- **数据查询**: 支持国内赛事多维度数据检索和筛选

### 2. 中国积分计算系统
- **中国积分规则**: 基于待确定的中国积分规则自动计算 (借鉴FIS方法)
- **实时计算**: 国内比赛结束后自动更新运动员中国积分
- **积分历史**: 追踪运动员在中国积分体系中的变化趋势
- **排名系统**: 基于中国积分的实时排名更新

### 3. 中国规则管理
- **规则库**: 数字化存储中国高山滑雪竞赛规则文档
- **规则查询**: 支持关键词搜索和分类查询
- **规则更新**: 及时更新最新版本的中国积分规则
- **规则对照**: 支持中国规则与国际参考标准对照查看

### 4. 国内成绩管理
- **成绩录入**: 支持中国国内赛事成绩手动和批量录入
- **成绩统计**: 国内运动员个人和团体成绩统计
- **成绩排名**: 多项目、多级别的国内成绩排名
- **成绩验证**: 国内赛事成绩数据校验和异常检测

### 5. 会员制报名功能 ⭐ 核心功能
- **会员注册**: 运动员/教练员会员制注册系统
- **在线报名**: 会员在线报名参加国内赛事
- **资格审查**: 自动验证参赛资格和中国积分要求
- **报名管理**: 报名信息审核、修改、取消
- **费用管理**: 报名费用计算和支付集成
- **名单导出**: 生成参赛名单和起跑顺序

### 6. 权限管理系统 ⭐ 新增核心
- **用户角色**: 公众访客、注册会员、赛事管理员、系统管理员
- **权限分级**: 不同角色访问不同功能模块
- **数据保护**: 内部数据仅对授权用户开放
- **操作审计**: 记录关键操作的日志和审计轨迹

### 7. 报表生成 (会员专享)
- **比赛报告**: 自动生成国内比赛结果报告
- **积分报表**: 运动员中国积分变化报表
- **统计分析**: 国内赛事数据统计分析图表
- **导出功能**: 支持PDF、Excel等格式导出

## 中国积分计算规则详解 ⭐ 核心系统 (待规则框架确定)

**⚠️ 说明：以下内容为参考国际雪联方法的技术实现示例，最终积分规则以阮总发布的规则框架为准**

### 1. 中国积分系统基本原理 (参考FIS方法)
- **标准化计算**: 使用统一的高山滑雪公式确保中国赛事积分的公平性
- **动态更新**: 通过基础积分表(BL)和常规积分表(NL)实现中国积分的动态更新
- **难度系数**: 基于参赛选手中最好5名的中国积分计算比赛难度
- **有效期管理**: 当前赛季内的成绩有效，保持积分时效性
- **本土化调整**: 根据中国赛事特点调整计算参数和周期

### 2. 核心计算公式 (借鉴国际标准，适配中国赛事)

#### 2.1 中国积分计算公式 (参考FIS方法)
```javascript
// 高山滑雪标准公式 (适用于中国积分计算)
P = F × (Tx/To - 1)
// 或者
P = (F × Tx/To) - F

// 参数说明:
// P = 中国积分 (China Race Points)
// To = 获胜者时间 (Winner's Time in seconds)
// Tx = 被排名选手时间 (Ranked Competitor's Time in seconds)
// F = 项目系数 (Discipline Factor) - 可根据中国赛事特点调整
```

#### 2.2 各项目F系数 (待规则框架确定具体数值)
```javascript
const CHINA_DISCIPLINE_FACTORS = {
  DH: 1250,    // 速降 (Downhill) - 待确定
  SL: 730,     // 回转 (Slalom) - 待确定
  GS: 1010,    // 大回转 (Giant Slalom) - 待确定
  SG: 1190,    // 超级大回转 (Super Giant Slalom) - 待确定
  AC: 1360     // 全能 (Alpine Combined) - 待确定
};
// 注：具体系数将根据中国赛事特点和阮总规则框架调整
```

#### 2.3 中国积分惩罚值计算公式 (待调整)
```javascript
// 惩罚值 = (Sum A + Sum B - Sum C) ÷ 10 (参考FIS方法)
penalty = (sumA + sumB - sumC) / 10;

// 参数说明 (适配中国积分系统):
// sumA = 前10名中最好5名选手的中国积分总和
// sumB = 所有参赛选手中最好5名的中国积分总和
// sumC = 最好5名选手的比赛积分总和
// 注：具体计算方法将根据中国赛事规模和特点调整
```

### 3. 积分更新机制

#### 3.1 基础积分表(BL)
- **发布时间**: 每年6月中旬
- **计算方法**: 过去赛季每个项目最好2个成绩的平均值
- **特殊处理**:
  - 单一成绩: 增加20% (+标记)
  - 无成绩: 在之前BL基础上增加50% (>标记)

#### 3.2 常规积分表(NL)
- **首次发布**: 7月1日
- **更新频率**: 赛季期间定期更新
- **计算原则**: 当前期间每个项目最好2个成绩的平均值

#### 3.3 特殊状态处理
```javascript
const SPECIAL_STATUS = {
  INJURY_PROTECTION: 1.10,    // 伤病保护(#): 增加10%
  PREGNANCY_PROTECTION: 9,    // 怀孕保护: 最多9个月
  CONFIRMED_POINTS: 4         // 积分确认(C): 退役选手4个赛季
};
```

### 4. 项目特殊规则

#### 4.1 最大积分值限制
```javascript
const MAX_POINTS = {
  DH: 330,    // 速降
  SG: 270,    // 超级大回转
  SL: 165,    // 回转
  GS: 220,    // 大回转
  AC: 270     // 全能
};
```

#### 4.2 参赛配额计算
```javascript
// 基于第1个FIS积分表中各国选手在5个项目中的最佳表现
function calculateQuota(rankingPosition, athleteCount) {
  if (rankingPosition <= 150) {
    if (athleteCount >= 10) return 10;
    if (athleteCount >= 9) return 9;
    if (athleteCount >= 8) return 8;
    if (athleteCount >= 7) return 7;
    return 6; // 1-6名选手
  } else if (rankingPosition <= 300) {
    return athleteCount >= 2 ? 5 : 4;
  }
  return 0;
}
```

### 5. 数据处理规则

#### 5.1 积分舍入规则
```javascript
function roundPoints(points) {
  // 从0.0004向下舍入，从0.0005向上舍入
  return Math.round(points * 100) / 100;
  // 例: 13.654 = 13.65, 21.849 = 21.85
}
```

#### 5.2 并列情况处理
- 第10名并列: 所有并列选手都参与惩罚值计算
- 第5好FIS积分并列: 选择比赛积分更高者参与计算

### 6. 系统实现架构

#### 6.1 积分计算引擎
```javascript
class FISPointsCalculator {
  calculateRacePoints(winnerTime, competitorTime, discipline) {
    const F = DISCIPLINE_FACTORS[discipline];
    return F * (competitorTime / winnerTime - 1);
  }

  calculatePenalty(top10FISPoints, allCompetitorsFISPoints, top5RacePoints) {
    const sumA = top10FISPoints.slice(0, 5).reduce((a, b) => a + b, 0);
    const sumB = allCompetitorsFISPoints.slice(0, 5).reduce((a, b) => a + b, 0);
    const sumC = top5RacePoints.reduce((a, b) => a + b, 0);
    return (sumA + sumB - sumC) / 10;
  }
}
```

#### 6.2 数据验证规则
- 反兴奋剂: 违规选手删除之前获得的FIS积分
- 数据传输: 必须使用FIS格式电子传输
- 技术监督: 技术代表必须监督并在线报告

### 7. 中文文档补充规则 📋

#### 7.1 评估周期管理
```javascript
const EVALUATION_PERIODS = {
  NORTHERN_HEMISPHERE: {
    start: '11月第二个周末',
    end: '4月30日'
  },
  SOUTHERN_HEMISPHERE: {
    start: '7月1日',
    end: '10月15日'
  }
};
```

#### 7.2 基础积分表(BL)详细规则
```javascript
function calculateBLPoints(previousResults, previousBL) {
  if (previousResults.length >= 2) {
    // 使用两个最佳成绩的平均值
    const bestTwo = previousResults.slice(0, 2);
    return bestTwo.reduce((a, b) => a + b) / 2;
  } else if (previousResults.length === 1) {
    // 仅有一次成绩：附加20%
    return previousResults[0] * 1.20;
  } else {
    // 无成绩：在之前BL基础上增加50%
    return previousBL * 1.50;
  }
}

// 伤病保护处理
function applyInjuryProtection(currentPoints, protectionPoints) {
  if (currentPoints < protectionPoints) {
    return protectionPoints * 1.10; // BL积分上调10%
  }
  return currentPoints;
}
```

#### 7.3 国内积分系统架构
```javascript
class DomesticPointsSystem {
  constructor() {
    this.baselist = [];
    this.evaluationCycle = 14; // 14天为一个积分周期
  }

  // 创建国内基础积分表
  createDomesticBaseList(fisRegisteredAthletes) {
    // 按项目分类排序，第一名为0分
    const sorted = fisRegisteredAthletes.sort((a, b) => a.fisPoints - b.fisPoints);
    const champion = sorted[0];

    return sorted.map(athlete => ({
      ...athlete,
      domesticPoints: athlete.fisPoints - champion.fisPoints
    }));
  }

  // 积分周期更新流程
  updatePointsCycle(raceResults) {
    // 1. 比赛成绩确认
    const confirmedResults = this.confirmResults(raceResults);

    // 2. 排名计算
    const rankings = this.calculateRankings(confirmedResults);

    // 3. 换算公式应用
    const racePoints = this.applyConversionFormula(rankings);

    // 4. 减去罚分
    const finalPoints = this.applyPenalty(racePoints);

    // 5. 形成世界排名
    return this.generateWorldRanking(finalPoints);
  }
}
```

#### 7.4 分站赛积分系统
```javascript
const STAGE_RACE_POINTS = {
  CHAMPION: 1000,
  RUNNER_UP: 800,
  THIRD_PLACE: 600,
  FOURTH_PLACE: 500,
  FIFTH_PLACE: 400
  // ... 其他名次
};

// 总决赛积分通过叠加分站赛成绩确定
function calculateFinalPoints(stageResults) {
  return stageResults.reduce((total, stage) => {
    return total + STAGE_RACE_POINTS[stage.position] || 0;
  }, 0);
}
```

#### 7.5 竞赛管理规则
```javascript
const COMPETITION_RULES = {
  // 电子媒体权利管理
  MEDIA_RIGHTS: {
    rules: '208-209',
    description: '竞赛转播和媒体权利管理'
  },

  // 竞赛组织程序
  ORGANIZATION: {
    rules: '210-219',
    description: '赛事筹备和组织流程'
  },

  // 参赛资格
  ELIGIBILITY: {
    rules: '605-610',
    description: '运动员参赛资格和年龄限制'
  },

  // 竞赛执行
  EXECUTION: {
    rules: '611-617',
    description: '比赛现场执行程序'
  },

  // 申诉程序
  APPEALS: {
    rules: '640-647',
    description: '抗议与申诉处理流程'
  }
};
```

#### 7.6 特殊情况处理详则
```javascript
class SpecialCaseHandler {
  // 单一成绩处理
  handleSingleResult(result, hasBL) {
    if (!hasBL) {
      return result * 1.20; // 加20%
    }
    return result;
  }

  // 无成绩处理
  handleNoResults(previousBL) {
    return previousBL * 1.50; // 在BL基础上加50%
  }

  // 伤病保护处理
  handleInjuryProtection(currentBL) {
    return currentBL * 1.10; // 在BL基础上加10%
  }

  // 反兴奋剂处理
  handleDopingViolation(athleteId) {
    // 删除所有FIS积分
    this.deleteAllFISPoints(athleteId);
    this.addViolationRecord(athleteId);
  }

  // 罚分不足5人处理
  handleInsufficientParticipants(availablePoints, discipline) {
    const maxValues = MAX_POINTS[discipline];
    return this.padWithMaxValues(availablePoints, maxValues, 5);
  }
}
```

#### 7.7 积分展示要求
```javascript
const DISPLAY_REQUIREMENTS = {
  // 积分排行榜公示
  PUBLIC_RANKING: {
    updateFrequency: '14天周期',
    includeFields: ['排名', '姓名', '积分', '罚分值', '最终积分'],
    format: '参照国际雪联官网风格'
  },

  // 罚分值展示
  PENALTY_DISPLAY: {
    showInRanking: true,
    showCalculationDetails: true,
    transparency: '完全公开计算过程'
  },

  // 国际化界面
  INTERNATIONALIZATION: {
    languages: ['中文', '英文'],
    terminology: '与FIS官方术语保持一致'
  }
};
```

## 技术架构

### 前端架构
- **Web端**: React/Vue.js 响应式设计
- **小程序**: 微信小程序原生开发
- **移动端**: 响应式设计适配手机访问

### 后端架构
- **API服务**: Node.js/Python FastAPI
- **数据库**: PostgreSQL + Redis缓存
- **文件存储**: 云存储服务(OSS/COS)
- **消息队列**: Redis/RabbitMQ

### 数据层设计
```sql
-- 核心数据表结构设计
athletes (运动员表)
competitions (比赛表)
results (成绩表)
points (积分表)
registrations (报名表)
rules (规则表)
```

## 开发阶段规划

### Phase 1: 基础数据管理
- 数据库设计和搭建
- XML数据解析模块
- 基础CRUD接口开发
- 用户认证系统

### Phase 2: 积分计算核心
- FIS积分计算引擎
- 成绩管理系统
- 基础报表功能
- Web端管理界面

### Phase 3: 报名系统
- 在线报名功能
- 资格审查模块
- 支付集成
- 报名管理后台

### Phase 4: 移动端开发
- 微信小程序开发
- 移动端优化
- 离线功能支持
- 推送通知

### Phase 5: 高级功能
- 数据分析和可视化
- 智能推荐系统
- 多语言支持
- 性能优化

## 项目文件说明

### 现有资源
- `CHN6377.O22.xml`: FIS标准比赛数据样本
- `fis_points_rules_02-09-2024.pdf`: FIS积分规则文档
- `icr_21-12-2024.pdf`: 国际竞赛规则
- `国际雪联竞赛规则2021年7月版（中英）.docx`: 中英文规则对照
- `滑雪积分问题汇总.docx`: 积分计算问题总结

### 开发命令
```bash
# 测试命令
npm test

# 构建命令
npm run build

# 类型检查
npm run typecheck

# 代码规范检查
npm run lint
```

## Git仓库信息 📦

### 🔗 远程仓库

#### Gitee 仓库 (主要开发)
- **仓库地址**: https://gitee.com/guangyikeji/ski.git
- **克隆命令**: `git clone https://gitee.com/guangyikeji/ski.git`
- **主分支**: main
- **用途**: 主要代码开发和备份

#### GitHub 仓库 (Pages部署)
- **仓库地址**: https://github.com/guangyikeji/ski.git
- **克隆命令**: `git clone https://github.com/guangyikeji/ski.git`
- **主分支**: main
- **用途**: GitHub Pages自动部署
- **访问地址**: https://guangyikeji.github.io/ski/

### 👤 Git配置
```bash
git config --global user.name 'guangyikeji'
git config --global user.email '16161327+guangyikeji@user.noreply.gitee.com'
```

### 🔑 访问令牌
- **Gitee Token**: `[安全存储，见本地配置]`
- **GitHub Token**: `[安全存储，见本地配置]`
- **用途**: 用于推送代码到对应仓库
- **使用方法**: 在HTTPS URL中替换密码部分

### 📤 推送命令
```bash
# 添加Gitee远程仓库
git remote add origin https://guangyikeji:[GITEE_TOKEN]@gitee.com/guangyikeji/ski.git

# 添加GitHub远程仓库
git remote add github https://guangyikeji:[GITHUB_TOKEN]@github.com/guangyikeji/ski.git

# 推送到Gitee
git push origin main

# 推送到GitHub (触发GitHub Pages自动部署)
git push github main
```

### 🏷️ 分支管理
- **main**: 主分支，稳定版本
- **develop**: 开发分支（可选）
- **feature/***: 功能分支（按需创建）

## GitHub Pages 部署方案 📄

### 🎯 部署复杂度: ⭐ (5星制，极其简单)

GitHub Pages 提供免费的静态网站托管服务，非常适合Next.js静态导出的项目。

#### 🚀 一键部署流程

##### 1. 准备GitHub仓库
```bash
# 创建GitHub仓库 (如果还没有的话)
# 仓库名建议: ski 或 alpine-ski-points

# 添加GitHub远程仓库
git remote add github https://github.com/YOUR_USERNAME/ski.git

# 推送代码到GitHub
git push github main
```

##### 2. 启用GitHub Pages
1. 进入GitHub仓库页面
2. 点击 **Settings** 选项卡
3. 滚动到 **Pages** 部分
4. **Source** 选择: `GitHub Actions`
5. 无需其他配置，保存即可

##### 3. 自动部署
```bash
# 每次推送到main分支都会自动部署
git add .
git commit -m "feat: 更新网站内容"
git push github main

# 部署状态可在Actions页面查看
# 部署完成后自动生成访问链接: https://YOUR_USERNAME.github.io/ski/
```

#### 📋 已配置的文件
项目已完成所有GitHub Pages必要配置:

```
项目根目录/
├── .github/workflows/deploy.yml  # GitHub Actions自动部署工作流
├── next.config.js               # Next.js静态导出配置
├── public/.nojekyll            # 禁用Jekyll处理
└── package.json                # 新增GitHub Pages构建脚本
```

#### 🔧 核心配置说明

##### Next.js 静态导出配置
```javascript
// next.config.js
const nextConfig = {
  output: 'export',        // 启用静态导出
  trailingSlash: true,     // URL末尾添加斜杠
  images: {
    unoptimized: true,     // 禁用图片优化(GitHub Pages不支持)
  },
}
```

##### 构建脚本
```json
// package.json
{
  "scripts": {
    "build:github": "NODE_ENV=production next build",
    "deploy:github": "npm run build:github && touch out/.nojekyll"
  }
}
```

##### GitHub Actions 工作流
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build:github
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
```

#### 🌐 访问地址
部署成功后，网站将在以下地址可用:
- **主地址**: `https://YOUR_USERNAME.github.io/ski/`
- **自定义域名**: 可在Pages设置中配置

#### 📊 GitHub Pages vs 其他方案对比
| 方案 | 费用 | 部署难度 | 自动化 | 性能 | 限制 |
|------|------|----------|---------|------|------|
| **GitHub Pages** | **免费** | ⭐ 极简 | ✅ 全自动 | 🔥 优秀 | 静态站点 |
| Vercel | 免费 | ⭐ 极简 | ✅ 全自动 | 🔥 优秀 | 商用限制 |
| 阿里云ECS | ¥50+/月 | ⭐⭐⭐ 中等 | ⚠️ 需配置 | ⭐⭐⭐⭐ | 需维护 |

#### 🔍 故障排除

**构建失败**:
```bash
# 本地测试构建
npm run build:github

# 检查输出目录
ls -la out/
```

**页面无法访问**:
- 确认Pages设置中Source为 `GitHub Actions`
- 检查Actions页面是否有错误日志
- 确认仓库为public或有GitHub Pro

**图片无法显示**:
- 确认图片路径以 `/ski/images/` 开头
- 检查图片文件是否包含在out目录中

#### 💡 高级配置

##### 自定义域名
```bash
# 在public目录下创建CNAME文件
echo "your-domain.com" > public/CNAME

# 推送后在GitHub Pages设置中验证域名
```

##### 基于路径的部署
```javascript
// 如果仓库名不是ski，需要调整basePath
const nextConfig = {
  basePath: '/YOUR_REPO_NAME',
  assetPrefix: '/YOUR_REPO_NAME',
}
```

#### 🚀 完整推送流程 (已验证可用)

以下是完整的从本地开发到GitHub Pages部署的推送流程：

##### 1. 配置远程仓库
```bash
# 添加Gitee远程仓库 (主要开发)
git remote add origin https://guangyikeji:[GITEE_TOKEN]@gitee.com/guangyikeji/ski.git

# 添加GitHub远程仓库 (GitHub Pages部署)
git remote add github https://guangyikeji:[GITHUB_TOKEN]@github.com/guangyikeji/ski.git

# 验证远程仓库配置
git remote -v
```

##### 2. 日常开发推送流程
```bash
# 开发完成后，推送到两个仓库
git add .
git commit -m "feat: 添加新功能"

# 推送到GitHub (触发自动部署)
git push github main

# 推送到Gitee (备份和主要开发)
git push origin main
```

##### 3. GitHub Pages自动部署验证
```bash
# 推送后，可以通过以下方式验证部署状态：

# 1. 查看GitHub Actions状态
# 访问: https://github.com/guangyikeji/ski/actions

# 2. 等待部署完成 (通常2-5分钟)
# 部署成功后访问: https://guangyikeji.github.io/ski/

# 3. 本地验证构建
npm run build:github
ls -la out/  # 检查静态文件生成
```

##### 4. 安全注意事项
```bash
# ❌ 避免在代码中暴露访问令牌
# 如果意外提交了敏感信息，使用以下命令清理：

# 重置到安全的提交
git reset --hard [SAFE_COMMIT_HASH]

# 强制推送覆盖远程历史
git push --force-with-lease github main
```

##### 5. 故障排除
```bash
# 如果GitHub推送被拒绝（检测到敏感信息）：

# 方法1: 重写历史移除敏感信息
git filter-branch --env-filter 'unset GIT_COMMITTER_EMAIL' HEAD

# 方法2: 创建新的干净提交
git reset --soft HEAD~1
git commit -m "security: 移除敏感信息"

# 方法3: 使用GitHub提供的解除限制链接
# 访问GitHub提示的URL解除推送保护
```

#### 📊 部署成功验证

以下是项目当前的部署状态：

| 平台 | 状态 | 访问地址 | 最后部署 |
|------|------|----------|----------|
| **GitHub Pages** | ✅ 在线 | https://guangyikeji.github.io/ski/ | 自动部署 |
| **Vercel** | ✅ 在线 | https://alpine-ski-points.vercel.app | 自动部署 |
| **本地开发** | ✅ 可用 | http://localhost:3000 | `npm run dev` |

#### 🎯 推送最佳实践

1. **优先推送顺序**: GitHub → Gitee (先触发部署，再备份)
2. **提交信息规范**: 使用 `feat:`, `fix:`, `docs:` 等前缀
3. **敏感信息管理**: 使用环境变量或占位符，永不提交真实令牌
4. **部署验证**: 每次推送后检查GitHub Actions和网站访问
5. **版本管理**: 重要功能完成后打标签 `git tag v1.0.0`

## 云服务器部署方案 ☁️

### 🎯 迁移复杂度: ⭐⭐ (5星制，非常简单)

#### 📊 调整工作量评估
- **Vercel**: 0% 调整 - 零配置部署
- **阿里云ECS**: 5% 调整 - 仅需运行部署脚本
- **Docker部署**: 10% 调整 - 已提供完整配置

### 🚀 推荐部署方案

#### 1. Vercel (最简单) ⭐⭐⭐⭐⭐
```bash
# 一行命令部署
npx vercel --prod
```
- ✅ 零配置，自动优化
- ✅ 免费SSL和CDN
- ✅ 自动从Gitee部署
- ✅ 无需服务器管理

#### 2. 阿里云/腾讯云 ECS ⭐⭐⭐⭐
```bash
# 服务器上执行
git clone https://gitee.com/guangyikeji/ski.git
cd ski
chmod +x deploy.sh
./deploy.sh
```
- ✅ 已提供完整部署脚本
- ✅ PM2进程管理
- ✅ Nginx反向代理配置
- ✅ SSL证书支持

#### 3. Docker容器化 ⭐⭐⭐⭐⭐
```bash
# 单命令启动
docker-compose up -d
```
- ✅ 环境一致性
- ✅ 易于扩展和维护
- ✅ 包含Nginx和应用

### 📁 已创建的部署文件

```
项目根目录/
├── Dockerfile              # Docker镜像构建
├── docker-compose.yml      # 容器编排配置
├── nginx.conf              # Nginx反向代理配置
├── ecosystem.config.js     # PM2进程管理配置
├── deploy.sh               # 一键部署脚本
├── .env.example            # 环境变量模板
└── .gitignore              # 已更新部署相关忽略文件
```

### ⚡ 一键部署流程

#### 方案A: Vercel (推荐新手)
1. 注册Vercel账号
2. 连接Gitee仓库
3. 自动部署完成 ✅

#### 方案B: 云服务器ECS
```bash
# 1. 购买云服务器 (1核2G即可)
# 2. 安装Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. 克隆并部署
git clone https://gitee.com/guangyikeji/ski.git
cd ski
chmod +x deploy.sh
./deploy.sh
```

#### 方案C: Docker部署
```bash
# 1. 安装Docker
curl -fsSL https://get.docker.com | sh

# 2. 一键启动
git clone https://gitee.com/guangyikeji/ski.git
cd ski
docker-compose up -d
```

### 🔧 环境变量配置
```bash
# 复制并编辑环境变量
cp .env.example .env
nano .env

# 主要配置项
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
PORT=3000
```

### 📊 部署成本预估
| 方案 | 月费用 | 适用场景 |
|------|--------|----------|
| Vercel | 免费 | 个人项目、演示 |
| 阿里云ECS 1核2G | ¥50-80 | 小型项目 |
| 阿里云ECS 2核4G | ¥100-150 | 中型项目 |
| Docker集群 | ¥200+ | 大型项目 |

### 🛡️ 安全配置
- ✅ SSL证书自动配置
- ✅ 安全HTTP头设置
- ✅ 环境变量保护
- ✅ 文件权限控制
- ✅ 进程自动重启

## 部署和运维
- **容器化**: Docker部署 (已配置)
- **CI/CD**: Gitee Actions自动化部署 (可选)
- **进程管理**: PM2集群模式
- **反向代理**: Nginx负载均衡
- **监控**: 进程状态和日志监控
- **备份**: 数据库定期备份策略
- **SSL**: 自动HTTPS重定向

## 图片资源管理 🖼️

### 📁 图片本地化操作指南

为确保网站稳定性和性能，所有图片资源都应本地化处理，避免依赖外部CDN服务。

#### 🔄 图片下载和本地化流程

##### 1. 创建图片目录
```bash
# 确保图片目录存在
mkdir -p public/images
```

##### 2. 下载图片到本地
```bash
# 下载主要背景图片
curl -o "public/images/ski-bg.jpg" "https://source-url-here"

# 下载装饰图片
curl -o "public/images/skiing-1.jpg" "https://source-url-here"
curl -o "public/images/skiing-2.jpg" "https://source-url-here"
curl -o "public/images/ski-scene-1.jpg" "https://source-url-here"
```

##### 3. 验证下载的图片
```bash
# 检查文件大小和类型
ls -la public/images/
file public/images/*.jpg

# 查看文件大小
du -h public/images/*
```

##### 4. 更新代码引用
将所有外部图片链接替换为本地路径：
```javascript
// 替换前 (外部CDN)
src="https://external-cdn.com/image.jpg"
backgroundImage: "url('https://external-cdn.com/bg.jpg')"

// 替换后 (本地路径)
src="/images/ski-bg.jpg"
backgroundImage: "url('/images/ski-bg.jpg')"
```

##### 5. 测试和部署
```bash
# 本地测试
npm run build
npm run dev

# 提交到Git
git add public/images/
git add src/
git commit -m "feat: 图片本地化"
git push origin main

# 部署到Vercel
npx vercel --prod
```

#### 📊 当前图片资源清单

| 文件名 | 大小 | 用途 | 位置 |
|--------|------|------|------|
| ski-bg.jpg | 92KB | 主要背景图片 | Hero区域、关于部分 |
| skiing-1.jpg | 56KB | 滑雪运动图片1 | 功能区装饰、关于部分 |
| skiing-2.jpg | 16KB | 滑雪运动图片2 | 功能区装饰、计算器页面 |
| ski-scene-1.jpg | 24KB | 滑雪场景图片 | 卡片装饰、系统特色 |

#### 🎯 图片使用最佳实践

##### 图片命名规范
```bash
# 背景图片
ski-bg-[description].jpg
# 装饰图片
skiing-[number].jpg
# 场景图片
ski-scene-[number].jpg
# 功能相关图片
ski-[feature-name].jpg
```

##### 尺寸和质量建议
```bash
# 主背景图片: 1200x800, 质量80%
curl -o "public/images/ski-bg.jpg" "url?w=1200&h=800&q=80"

# 装饰图片: 600x400, 质量80%
curl -o "public/images/skiing-1.jpg" "url?w=600&h=400&q=80"

# 小装饰图片: 400x300, 质量75%
curl -o "public/images/ski-icon.jpg" "url?w=400&h=300&q=75"
```

##### 代码中的使用模式
```javascript
// Hero背景
style={{ backgroundImage: "url('/images/ski-bg.jpg')" }}

// 装饰图片 (圆形裁剪)
<img src="/images/skiing-1.jpg" className="w-full h-full object-cover rounded-full" />

// 卡片装饰 (循环使用)
src={
  index % 3 === 0 ? '/images/skiing-1.jpg' :
  index % 3 === 1 ? '/images/skiing-2.jpg' :
  '/images/ski-scene-1.jpg'
}
```

#### ⚡ 性能优化建议

1. **图片压缩**: 使用合适的质量参数 (75-85%)
2. **格式选择**: 优先使用 WebP/AVIF，降级到 JPEG
3. **懒加载**: 非关键图片实现懒加载
4. **Next.js Image**: 考虑使用 `next/image` 组件自动优化

#### 🔍 故障排除

**图片无法加载**:
```bash
# 检查文件是否存在
ls -la public/images/filename.jpg

# 检查文件权限
chmod 644 public/images/*.jpg

# 验证路径引用
grep -r "/images/" src/
```

**构建警告**:
```javascript
// 如需消除Next.js警告，使用Image组件
import Image from 'next/image'

<Image
  src="/images/ski-bg.jpg"
  alt="滑雪背景"
  width={1200}
  height={800}
  className="object-cover"
/>
```

## 安全考虑
- 用户权限管理
- 数据加密传输
- 敏感信息脱敏
- 审计日志记录
- **重要**: 请妥善保管访问令牌，避免泄露

## 💬 交流语言设置

**Claude Code AI 助手交流语言设置**: **🇨🇳 中文**

所有与用户的对话和回复统一使用中文进行，包括：
- ✅ 代码解释和说明
- ✅ 问题分析和解答
- ✅ 项目状态报告
- ✅ 技术建议和指导
- ✅ 错误诊断和修复说明

**例外情况**:
- 🔧 代码注释可保持英文（如有必要）
- 📝 Git提交信息可使用英文规范
- 🌐 国际标准术语保持原文（如FIS、XML等）

## 🔄 自动部署工作流程

**Claude Code AI 助手自动更新规则**: **🚀 完成修改后自动推送**

每次完成用户要求的代码修改后，必须自动执行以下完整流程：

### 📋 标准操作流程
1. **代码修改完成** - 完成所有用户要求的功能实现
2. **暂存修改文件** - `git add [修改的文件]`
3. **创建提交记录** - 使用规范的提交信息格式
4. **双重推送部署** - 同时推送到GitHub和Gitee仓库
5. **确认部署状态** - 验证推送成功

### 🎯 执行条件
- ✅ **任何功能性修改** - 新功能、bug修复、样式调整等
- ✅ **用户明确要求更新** - 用户说"更新"、"部署"、"推送"等关键词
- ✅ **重要问题修复** - 构建错误、功能故障等紧急修复
- ✅ **阶段性工作完成** - 完成一个或多个todo任务

### 🚫 例外情况
- ❌ **仅查看代码** - 只是阅读文件内容，未进行修改
- ❌ **讨论阶段** - 还在分析问题或制定方案阶段
- ❌ **测试构建** - 仅为验证构建是否成功的测试

### 📝 提交信息规范
```bash
git commit -m "$(cat <<'EOF'
feat/fix/style: [简洁描述主要改动]

- [改动点1的详细说明]
- [改动点2的详细说明]
- [改动点3的详细说明]

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### 🔗 推送命令
```bash
# 标准推送流程 - 必须同时推送到两个仓库
git push github main && git push origin main
```

### 📊 部署目标
- **GitHub**: 触发GitHub Pages自动部署 → https://guangyikeji.github.io/ski/
- **Gitee**: 代码备份和主要开发仓库
- **Vercel**: 自动同步GitHub部署 → https://alpine-ski-points.vercel.app

### ⚡ 自动化的好处
1. **即时反馈** - 用户可立即看到修改效果
2. **持续集成** - 保持代码库最新状态
3. **降低遗忘** - 避免忘记推送重要修改
4. **版本管理** - 每个修改都有完整的Git历史记录
5. **协作效率** - 团队成员可及时获得最新代码

### 🎯 执行提醒
**重要**: 除非用户明确说明"不需要推送"或"只是测试"，否则每次代码修改完成后都应该自动执行推送流程。用户的期望是看到修改立即生效，而不是需要手动要求推送。