# 中国滑雪积分系统

## 项目概述
中国综合性滑雪赛事积分管理系统，支持**高山滑雪**、**自由式滑雪**、**单板滑雪**三大项目的竞赛数据管理和积分计算。

### 🎿 支持的赛事项目
1. **全国单板滑雪坡面障碍技巧和大跳台**
2. **单板滑雪平行项目**
3. **自由式滑雪坡面障碍技巧和大跳台**
4. **高山滑雪**

### 🏅 四大积分体系
1. **单板坡障/大跳台**: 240/360/120分档，裁判评分转排名
2. **单板平行项目**: 竞速时间积分，淘汰赛制
3. **自由式坡障/大跳台**: 240/360/120分档，技巧难度系数
4. **高山滑雪**: v4.0时间基础公式，A/B/C级系数(1.0/0.6/0.3)

📖 **详细积分规则**: 见 `docs/积分规则详解.md`

## 核心功能

### 1. 竞赛数据管理
- FIS标准XML格式导入
- 数据解析和结构化存储
- 多维度数据检索

### 2. 四大积分计算系统
- 实时积分计算和更新
- 赛季积分×50%延续机制
- 独立项目排名系统
- 赛事分级（A级1.0、B级0.6、C级0.3）

### 3. 报名管理
- 在线报名和资格审查
- U系列年龄分组（U12/U15/U18）
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
- U12/U15/U18自动分组
- 年龄验证（基于身份证）
- 容量限制和候补管理
- 独立积分排名

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
