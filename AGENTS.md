# Repository Guidelines

## Project Overview & Structure
中国滑雪积分系统整合高山、自由式、单板三大项目的报名、成绩、积分和规则管理。核心源码位于 `src/`，其中 `app/` 为 Next.js App Router 页面，`components/` 存放 UI 组件，`contexts/` 承载语言与身份状态，`locales/` 维护多语言文案，`utils/` 封装积分公式与数据工具。文档与制度资料位于 `docs/` 和根目录的 DOCX/PDF，部署脚本置于 `scripts/`，导出产物存放在 `out/`（GitHub Pages 与生产使用）。

## Architecture & Key Modules
- **前端**：Next.js + TypeScript；PWA 与微信小程序计划在后续阶段扩展。  
- **后端/API**：基于 Next.js API Routes 搭配 PostgreSQL、Redis 与云存储（OSS/COS）。  
- **积分引擎**：`SnowboardSlopestyleBigAirCalculator`、`SnowboardParallelCalculator`、`FreestyleSlopestyleBigAirCalculator`、`AlpineSkiCalculatorV4` 实现四套积分体系。  
- **数据表**：`four_sport_athletes`、`four_sport_competitions`、`four_sport_results`、`venue_standards`、`u_series_management`、`points_continuation` 等支撑报名与积分。

## Build, Test, and Development Commands
- `npm install` — 安装依赖。  
- `npm run dev` — 本地开发（含热更新）。  
- `npm run build` — Node 部署构建。  
- `npm run build:github` — 带 `/ski` basePath 的 GitHub Pages 导出。  
- `npm run lint` / `npm run typecheck` — ESLint 与 TypeScript 检查。

## Coding Style & Naming Conventions
使用 2 空格缩进的 TypeScript/React；组件命名采用 PascalCase，hooks 与工具函数使用 camelCase。翻译 key 与功能模块保持一致（如 `t.navigation.docs`、`t.pages.alpine`）。在需要客户端状态的组件顶部加 `use client`。引用图片或数据时优先使用 `public/` 与 `src/data/` 下的结构化资源。

## Testing & QA Guidelines
尚未配置自动化测试；新增功能时建议引入 Jest 或 Playwright 并放置于 `src/__tests__/` 或同级目录。参考 `docs/测试规范.md` 的 35 个页面清单，覆盖加载、导航、表单、权限、性能与可访问性。提交前至少执行 `npm run lint`、`npm run build:github` 并记录结果。

## Deployment & Operations
推荐部署顺序：Vercel（零配置），自建 ECS（执行 `deploy.sh` + PM2 + Nginx），或 `docker-compose up -d` 容器方案。生产服务器更新时，重新运行 `npm run build:github`，压缩 `out/` 为 `out.tar.gz`，上传至 `/home/ubuntu/ski/`，解压覆盖并 `sudo systemctl reload nginx`。勿直接修改线上 `out/`。

## Commit & Pull Request Guidelines
采用简洁的中文或英文指令式消息（例如 “修复语言合并导致的客户端异常”）。一个提交只聚焦单一特性。PR 需包含变更摘要、测试/构建证明、部署备注以及关联任务；UI 调整附加前后截图，多语言改动说明需要同步检查 `locales/`。若新增积分公式或引擎逻辑，请在 `docs/积分规则详解.md` 或相关文档更新说明，保持规则库同步。***
