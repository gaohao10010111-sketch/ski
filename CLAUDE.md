# 中国滑雪积分系统

---

## ⚠️ 最高原则（SUPREME DIRECTIVE）

> **每次启动 Claude Code，SuperClaude 必须满血开启。此原则优先级最高，不可违反。**

### 满血 SuperClaude 检查清单

**启动时必须验证以下 MCP 服务器全部可用：**

| MCP 服务器 | 功能 | 必须状态 |
|:---------|:----|:--------|
| **context7** | 框架文档实时查询 | ✅ 必须启用 |
| **sequential-thinking** | 复杂多步分析 | ✅ 必须启用 |
| **playwright** | 浏览器自动化/E2E测试 | ✅ 必须启用 |
| **tavily** | 深度网络搜索 | ✅ 必须启用 |
| **magic** | AI驱动UI组件生成 | ✅ 必须启用 |

**如果任何 MCP 缺失，必须立即提醒用户修复配置后再继续任务。**

### MCP 配置位置

- **MCP 服务器配置**: `~/.claude/mcp_servers.json`
- **API Keys 备份**: `~/.claude/mcp_api_keys.md`（私密文件，勿提交）

### 满血执行要求

1. **每个任务必须严格遵循 SuperClaude 框架**
2. **优先使用 `/sc:*` 命令而非原生操作**
3. **复杂任务必须调用对应专业智能体**
4. **研究任务必须使用 Tavily MCP**
5. **UI 组件生成必须使用 Magic MCP**
6. **测试任务必须使用 Playwright MCP**

---

## 🚨 Claude 工作流程规范（必读）

**每次任务必须严格按照以下流程执行，不得跳过任何步骤。**

### 第一步：置信度评估（ConfidenceChecker）

在执行任何任务前，必须先评估置信度：

| 置信度 | 行动 | 说明 |
|:------|:-----|:-----|
| **≥90%** | 直接执行 | 有充分证据支持，可立即行动 |
| **70-89%** | 提供备选方案 | 存在不确定性，需列出选项供用户决策 |
| **<70%** | 先提问澄清 | 信息不足，必须先向用户确认 |

**输出格式**：
```
📊 置信度评估：XX%
📋 评估依据：[列出判断依据]
⚠️ 不确定因素：[如有]
🎯 建议行动：[直接执行/提供方案/需要澄清]
```

### 第二步：选择正确的工具

根据任务类型选择对应的 SuperClaude 命令或智能体：

#### 常用命令
| 场景 | 命令 | 说明 |
|:----|:----|:----|
| 不确定用什么命令 | `/sc:recommend` | 智能推荐最合适的命令 |
| 技术调研 | `/sc:research` | 深度网络研究，多跳推理 |
| 架构设计 | `/sc:design` | 系统架构设计 |
| 功能实现 | `/sc:implement` | 代码实现 |
| 代码分析 | `/sc:analyze` | 代码质量、安全、性能分析 |
| 测试生成 | `/sc:test` | 自动生成测试用例 |
| 问题诊断 | `/sc:troubleshoot` | Bug调试和问题排查 |
| 并行任务 | `/sc:spawn` | 独立任务并行执行（3.5x速度） |
| 代码改进 | `/sc:improve` | 性能优化、质量提升 |
| 代码清理 | `/sc:cleanup` | 重构、删除死代码 |
| 文档生成 | `/sc:document` | API文档、README |
| Git操作 | `/sc:git` | 分支管理、提交 |

#### 16个专业智能体（通过 `/sc:pm` 或 `--agent` 调用）
| 智能体 | 专长领域 | 调用示例 |
|:------|:--------|:--------|
| PM Agent | 项目管理、置信度检查、自检协议 | 自动激活 |
| Security Engineer | 安全漏洞、OWASP Top 10、安全审计 | `--agent security` |
| **Frontend Architect** | **UI/UX、React/Vue、前端性能、组件架构** | `--agent frontend` |
| Backend Engineer | API设计、数据库、微服务 | `--agent backend` |
| **Mobile Developer** | **iOS/Android、React Native、移动UI** | `--agent mobile` |
| DevOps Engineer | CI/CD、Docker/K8s、监控 | `--agent devops` |
| Performance Engineer | 性能瓶颈、负载测试、优化 | `--agent performance` |
| Database Architect | Schema设计、索引优化、查询调优 | `--agent database` |
| QA Engineer | 测试策略、自动化测试 | `--agent qa` |
| Code Reviewer | 代码审查、最佳实践 | `--agent reviewer` |
| System Architect | 分布式系统、技术选型 | `--agent architect` |
| API Designer | RESTful设计、OpenAPI规范 | `--agent api` |
| Data Scientist | 数据分析、机器学习 | `--agent data` |
| Technical Writer | API文档、用户手册 | `--agent writer` |
| Research Agent | 深度研究、文献调研 | `/sc:research` |
| Business Analyst | 需求分析、ROI评估 | `--agent business` |

> **UI开发专用**：Frontend Architect + Mobile Developer + Magic MCP

#### 智能体自动触发机制

**大多数情况无需手动指定**，Claude 会根据任务关键词自动切换智能体视角：

| 智能体 | 自动触发关键词 |
|:------|:-------------|
| **Frontend Architect** | UI、组件、页面、样式、React、Vue、CSS |
| **Backend Engineer** | API、接口、服务端、数据库查询 |
| **Security Engineer** | 安全、漏洞、认证、权限、XSS、SQL注入 |
| **Performance Engineer** | 慢、优化、性能、加载时间、缓存 |
| **Database Architect** | 数据库、Schema、索引、查询优化 |
| **DevOps Engineer** | 部署、Docker、CI/CD、服务器、Nginx |
| **QA Engineer** | 测试、单元测试、E2E、覆盖率 |
| **Mobile Developer** | 小程序、App、移动端、React Native |
| **System Architect** | 架构、微服务、技术选型、分布式 |

**需要手动指定的情况**：
1. 任务跨多个领域，需要明确重点
2. 想要特定视角的分析
3. Claude 判断错误时纠正

**手动指定方式**：
```bash
# 方式1：通过 /sc:pm 调用
/sc:pm "调用 Frontend Architect 设计积分页面组件结构"

# 方式2：通过 --agent 参数
/sc:implement "用户卡片组件" --agent frontend
```

### 第三步：研究优于猜测

**核心原则**：遇到不确定的技术问题，必须用 `/sc:research` 获取准确信息，禁止基于训练数据推测。

```bash
# ❌ 错误做法
直接基于记忆回答技术问题

# ✅ 正确做法
/sc:research "Next.js 15 静态导出配置最佳实践"
```

### 第四步：并行执行独立任务

独立任务必须使用 `/sc:spawn` 并行执行：

```bash
# ❌ 顺序执行（慢）
npm run typecheck
npm run lint
npm run build

# ✅ 并行执行（3.5x快）
/sc:spawn "并行执行 typecheck、lint、build"
```

### 第五步：自检协议（SelfCheckProtocol）

任务完成后必须执行自检：

```
✅ 自检清单：
□ 功能完整性 - 所有需求是否实现
□ 代码质量 - 是否符合最佳实践
□ 测试覆盖 - 测试是否通过
□ 文档完整 - 是否需要更新文档
□ 性能验证 - 是否满足性能要求
□ 安全检查 - 是否存在安全漏洞
```

### 第六步：反思学习（ReflexionPattern）

遇到错误时记录并学习：

```
🔴 错误记录：
- 错误现象：[描述]
- 根本原因：[分析]
- 解决方案：[措施]
- 预防措施：[下次如何避免]
```

---

### 工作流程速查

```
新功能开发：/sc:pm → /sc:design → /sc:implement → /sc:test → /sc:document
Bug修复：    /sc:troubleshoot → /sc:analyze → /sc:implement → /sc:test → /sc:reflect
性能优化：   /sc:analyze → /sc:research → /sc:improve → /sc:test
技术调研：   /sc:research → /sc:design
代码重构：   /sc:analyze → /sc:cleanup → /sc:test
UI开发：     /sc:pm(frontend) → /sc:implement --agent frontend → /sc:test
```

### 高级隐藏功能

| 功能 | 命令 | 说明 |
|:----|:----|:----|
| 智能推荐 | `/sc:recommend "需求"` | 不知道用什么命令时使用 |
| 多专家评审 | `/sc:spec-panel @文件 --mode critique` | 召集虚拟专家团评审 |
| 并行执行 | `/sc:spawn "多任务"` | 3.5x速度提升 |
| 深度研究 | `/sc:research "问题" --depth deep` | 多跳推理，最多5跳 |
| 会话保存 | `/sc:save "进度名"` | 跨会话持久化 |
| 仓库索引 | `/sc:index-repo` | 94% token减少 |

### 错误处理协议

```
❌ 禁止行为：
- 出错后直接重试相同方法
- 忽略警告信息
- 基于记忆猜测技术问题

✅ 正确行为：
1. 停止 - 不立即重新执行
2. 调查 - /sc:research 或查阅文档
3. 分析 - 形成假设并记录
4. 设计新方案 - 必须与之前不同
5. 执行并验证
6. 记录学习 - 更新 docs/patterns/ 或 docs/mistakes/
```

📖 **完整功能手册**：见 `docs/SuperClaude完整功能手册.md`

---

### MCP 服务器配置（已安装）

| MCP 服务器 | 功能 | 自动触发场景 |
|:---------|:----|:-----------|
| **Context7** | 官方框架文档实时查询 | `/sc:implement --framework react/vue/next` |
| **Tavily** | 深度网络搜索 | `/sc:research` |
| **Playwright** | 浏览器自动化、E2E测试 | `/sc:test --e2e` |
| **Magic** | AI驱动UI组件生成 | `/sc:implement --type component` |

**MCP 与智能体协作示例**：
```bash
# UI开发（Magic + Frontend Architect + Context7）
/sc:implement "运动员积分卡片组件" --type component --framework react

# 深度技术调研（Tavily + Research Agent）
/sc:research "FIS积分算法最新变化" --depth deep

# E2E测试（Playwright + QA Engineer）
/sc:test "为积分排名页面生成完整测试套件" --e2e
```

---

## 项目概述
中国综合性滑雪赛事积分管理系统，支持**高山滑雪**、**自由式滑雪**、**单板滑雪**三大项目的竞赛数据管理和积分计算。

### 🎿 支持的赛事项目
1. **全国单板滑雪坡面障碍技巧和大跳台**
2. **单板滑雪平行项目**
3. **自由式滑雪坡面障碍技巧和大跳台**
4. **高山滑雪**

### 🏅 积分体系

#### 成人赛事积分体系
1. **单板坡障/大跳台**: 240/360/120分档，裁判评分转排名
2. **单板平行项目**: 竞速时间积分，淘汰赛制
3. **自由式坡障/大跳台**: 240/360/120分档，技巧难度系数
4. **高山滑雪**: v4.0时间基础公式，A/B/C级系数(1.0/0.6/0.3)

#### 全国青少年U系列统一积分体系（360分制）
**适用项目**：
- 单板平行项目：PGS（平行大回转）、PSL（平行回转）
- 单板坡面障碍技巧（SS）：Jumps（跳台段）、Rails/Boxes（道具段）
- 自由式坡面障碍技巧（FS-SS）：Jumps、Rails/Boxes
- 高山滑雪（Alpine）：SL（回转）、GS（大回转）、SG（超级大回转）

**核心规则**：
- 第1名360分，递减至第50名1分，50名后计0分
- 引入FIS思想的**基础分（BL）**与**赛季滚动分（NL）**双积分系统
- 男女分别独立排名与积分
- 比赛有效性：≥5人出发且≥3人完赛

📖 **详细积分规则**: 见 `docs/积分规则详解.md` 和 `全国青少年U系列赛事积分办法_综合版.pdf`

## 核心功能

### 1. 竞赛数据管理
- FIS标准XML格式导入
- 数据解析和结构化存储
- 多维度数据检索

### 2. 积分计算系统
**成人赛事**：
- 实时积分计算和更新
- 赛季积分×50%延续机制
- 独立项目排名系统
- 赛事分级（A级1.0、B级0.6、C级0.3）

**U系列赛事**：
- 统一360分制积分表（第1名360分→第50名1分）
- 基础分（BL）计算：基于上赛季表现
  - 高山SL/GS：取上赛季最佳3站平均，SG取最佳2站平均
  - 单板/自由式各子项：取上赛季最佳2站平均
  - 样本不足时保护机制：仅2站×0.8，仅1站×0.6
  - 伤病保护：新赛季BL至少保留为上一季BL×0.9
- 赛季滚动分（NL）计算：当前赛季实时表现
  - 高山SL/GS：最佳3站平均，SG：最佳2站平均
  - 单板/自由式各子项：最佳2站平均
  - 排序优先级分 = max(BL, NL)
- 子项赛季积分：取该子项赛季内最佳3站（或2站）单站积分之和
- 项目赛季总积分：同一项目下各子项赛季积分相加

### 3. 报名管理
- 在线报名和资格审查
- U系列年龄分组（基于身份证出生日期）：
  - **U12**：8-11岁（2014-01-01至2018-12-31）
  - **U15**：12-14岁（2011-01-01至2013-12-31）
  - **U18**：15-17岁（2008-01-01至2010-12-31）
- 参赛资格验证：
  - 中国籍公民持有效二代身份证
  - 县级及以上医院健康证明
  - 签署参赛声明书和安全责任承诺书
  - 自行购买赛事期间人身意外险
- 32人容量限制和候补管理
- 费用计算和支付集成

### 4. 成绩和规则管理
- 成绩录入、统计和排名
- 数字化规则库
- 中英文规则对照

### 5. 报表生成
- 自动生成比赛报告
- 积分变化报表
- 多格式导出（PDF/Excel）

## 技术架构

### 前端
- **Web**: Next.js + TypeScript
- **小程序**: 微信小程序原生
- **移动端**: PWA响应式

### 后端
- **API**: Next.js API Routes
- **数据库**: PostgreSQL + Redis
- **存储**: 云存储(OSS/COS)

### 四大积分计算引擎
```typescript
├── SnowboardSlopestyleBigAirCalculator  // 单板坡障/大跳台
├── SnowboardParallelCalculator          // 单板平行项目
├── FreestyleSlopestyleBigAirCalculator  // 自由式坡障/大跳台
└── AlpineSkiCalculatorV4                // 高山滑雪v4.0
```

### 核心数据表
```sql
four_sport_athletes      -- 四项目运动员表
four_sport_competitions  -- 四项目比赛表
four_sport_results       -- 四项目成绩表
venue_standards          -- 场地标准表
u_series_management      -- U系列管理表
points_continuation      -- 积分延续表
```

## 开发阶段

### Phase 1: 基础架构
- 四大项目数据模型
- 四大独立积分计算引擎
- 统一认证和权限系统

### Phase 2: 高山滑雪系统（v4.0）
- 积分计算引擎
- 赛事分级管理（A/B/C）
- 判罚分动态计算
- 伤病保护系统

### Phase 3: 自由式/单板系统
- 240/360/120分档计算
- 评分转排名系统
- 裁判评分录入
- 多轮次比赛管理

### Phase 4: U系列管理
- U12/U15/U18自动分组（基于身份证出生日期）
- 年龄验证与资格审查系统
- 统一360分制积分计算引擎
- 基础分（BL）+ 赛季滚动分（NL）双积分系统
- 子项独立排名系统（PGS、PSL、SS-Jumps、SS-Rails、FS-SS-Jumps、FS-SS-Rails、SL、GS、SG）
- 容量限制和候补管理
- 总决赛资格计算（各项目男女前25名）
- 伤病保护机制

### Phase 5: 场地标准管理
- 三级场地标准库
- 合规性验证系统
- 场地认证报告

### Phase 6: 巡回赛管理
- 6站巡回赛管理
- 奖金分配系统
- 积分延续机制

### Phase 7-8: 移动端和优化
- 小程序开发
- PWA和离线功能
- 数据分析和可视化
- 性能优化

## UI/UX设计参考

### FIS三层导航架构
```
第一层（平台级）: 项目门户 | 组织信息 | 公告 | 视频 | 会员
第二层（功能级）: 首页 | 赛程 | 实时成绩 | 运动员 | More▼
第三层（内容级）: 项目专属页面（轮播/赛事/积分/新闻/数据）
```

📖 **详细设计参考**: 见 `docs/FIS设计参考.md`

## Git仓库

- **GitHub**: https://github.com/gaohao10010111-sketch/ski.git
- **GitHub Pages**: https://gaohao10010111-sketch.github.io/ski/
- **主分支**: main

```bash
# 克隆仓库
git clone https://github.com/gaohao10010111-sketch/ski.git

# 推送代码
git push origin main
```

## 部署方案

### 推荐方案（按优先级）

#### 1. Vercel（最简单）
```bash
npx vercel --prod
```
- ✅ 零配置，自动优化
- ✅ 免费SSL和CDN

#### 2. 云服务器ECS
```bash
git clone https://github.com/gaohao10010111-sketch/ski.git
cd ski
chmod +x deploy.sh
./deploy.sh
```
- ✅ 完整部署脚本
- ✅ PM2进程管理
- ✅ Nginx反向代理

#### 3. Docker容器化
```bash
docker-compose up -d
```
- ✅ 环境一致性
- ✅ 易于扩展

### 部署文件
```
├── Dockerfile              # Docker镜像
├── docker-compose.yml      # 容器编排
├── nginx.conf              # Nginx配置
├── ecosystem.config.js     # PM2配置
├── deploy.sh               # 一键部署脚本
└── .env.example            # 环境变量模板
```

## 测试规范

### 全面测试清单（35个页面）

#### 主要功能页面
- 首页、关于系统、积分体系

#### 积分管理（5页）
- 积分中心、计算器、FIS查询、排名、趋势

#### 比赛管理（3页）
- 比赛管理、赛程、统计

#### 报名管理（4页）
- 报名、费用、管理后台、在线报名

#### 规则管理（4页）
- 规则中心、竞赛规则、FIS规则、积分规则

#### 成绩管理（3页）
- 成绩公布、导入、查询

#### 用户管理（3页）
- 登录、注册、个人中心

📖 **完整测试清单**: 见 `docs/测试规范.md`

### 测试检查项
- ✅ 基础功能（加载、导航、页脚）
- 🎨 用户界面（布局、字体、响应式）
- 🔗 功能性（表单、搜索、数据）
- 🚫 错误检查（404、JS错误、API）
- ♿ 可访问性（标题、标签、对比度）
- ⚡ 性能（加载速度、压缩、缓存）

## 开发命令

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 生产环境启动
npm start

# 类型检查
npm run typecheck

# 代码规范检查
npm run lint

# 测试
npm test
```

## 项目文档

### 核心文档
- `docs/积分规则详解.md` - 四大积分体系详细规则
- `docs/FIS设计参考.md` - FIS官网UI/UX设计分析
- `docs/测试规范.md` - 完整测试清单和规范
- `docs/API文档.md` - API接口文档

### 参考资料
- `中国高山滑雪赛事积分规则v4.docx` - 官方规则v4.0
- `全国青少年U系列赛事积分办法_综合版.pdf` - **U系列统一积分规则（360分制）**
- `2025-2026赛季全国BA、SS青少年U系列比赛方案.docx` - U系列方案
- `HPSSBA场地标准.xlsx` - 场地技术标准
- `fis_points_rules_02-09-2024.pdf` - FIS积分规则
- `国际雪联竞赛规则2021年7月版（中英）.docx` - 中英文规则

## 安全考虑
- 用户权限管理
- 数据加密传输
- 敏感信息脱敏
- 审计日志记录
- 访问令牌保护

---

**注意**: 本文档为项目核心概述。详细技术规范、积分计算公式、UI设计细节等请参考 `docs/` 目录下的专项文档。

## GitHub 推送命令

使用个人 access token 推送示例：
```bash
git push https://<USERNAME>:<PERSONAL_ACCESS_TOKEN>@github.com/gaohao10010111-sketch/ski.git main
```
> 请将 `<USERNAME>` 与 `<PERSONAL_ACCESS_TOKEN>` 替换为当前有效凭证。
