# 中国滑雪积分系统

## 项目概述

全国滑雪青少年U系列赛事积分排名官方平台。经华体冰雪授权，负责赛事数据采集、积分计算与排名发布。

**支持赛事**: 高山滑雪 / 单板坡面障碍技巧+大跳台 / 单板平行项目 / 自由式坡面障碍技巧+大跳台

## 工作准则

- 中文沟通，代码注释用英文
- 不确定时先查再做（用 Tavily/Context7），不猜
- 复杂任务主动拆分并行（Task tool）
- 出错不重试同样方法，换思路
- 改代码前先读代码，改完验证

## 技术栈

| 层 | 技术 |
|---|---|
| 前端 | Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui |
| 数据库 | SQLite (prisma/ski.db) + Prisma ORM + better-sqlite3 |
| 部署 | 腾讯云 ECS + Nginx + PM2 / GitHub Pages (静态导出) |
| 数据导入 | Python (PyMuPDF) PDF提取 / Node.js 脚本 |

## 积分规则（360分制）

- 第1名360分 → 第50名1分，50名后0分
- 完整积分表: `{1:360, 2:329, 3:303, 4:280, 5:260, 6:242, 7:226, 8:212, 9:199, 10:187, 11:176, 12:166, 13:157, 14:149, 15:141, 16:134, 17:127, 18:121, 19:115, 20:110, 21:105, 22:100, 23:95, 24:91, 25:87, 26:83, 27:79, 28:75, 29:71, 30:67, 31:63, 32:59, 33:55, 34:51, 35:47, 36:43, 37:39, 38:35, 39:31, 40:27, 41:24, 42:21, 43:18, 44:15, 45:12, 46:9, 47:6, 48:3, 49:2, 50:1}`
- 年龄分组: U11(8-11岁) / U15(12-14岁) / U18(15-17岁)
- 男女独立排名
- 详细规则: `docs/积分规则详解.md` / `全国青少年U系列赛事积分办法_综合版.pdf`

## 数据库核心表

```
Competition  - 比赛 (id, name, sportType, location, date, status)
Athlete      - 运动员 (id, name, team, gender, birthYear, idNumber, birthDate)
Result       - 成绩 (athleteId, competitionId, discipline, ageGroup, gender, rank, bib, points)
               唯一约束: (athleteId, competitionId, discipline, ageGroup, gender)
               注意: 无 updatedAt 列
SeasonTotal  - 赛季汇总 (athleteId, season, ageGroup, gender, totalPoints, rank)
```

## 当前赛季数据（2025-2026）

| 站点 | 项目 | 成绩数 | 状态 |
|---|---|---|---|
| 成都站 | 单板坡障(60) + 大跳台(54) + 高山(85) + 自由式坡障(49) + 大跳台(50) | 298 | 已导入 |
| 雪如意站 | 单板平行(179) + 单板坡障(69) + 单板大跳台(63) + 自由式大跳台(54) | 365 | 已导入 |
| 富龙站(第二站) | 单板坡障(87) + 大跳台(80) + 自由式坡障(50) + 大跳台(48) | 265 | 已导入 |
| 松花湖站 | 高山滑雪(114) | 114 | 已导入 |
| 沈阳东北亚站 | 单板平行(151) | 151 | 已导入 |
| 鳌山站 | 高山滑雪(82) | 82 | 已导入 |
| 富龙站(第四站) | 单板坡障(78) + 大跳台(69) | 147 | 已导入 |
| **总计** | **18场比赛** | **1421** | **760名运动员** |

## PDF数据提取要点

- 使用 `fitz.open(pdf).get_text("blocks")` 获取带位置的文本块
- 按 y 坐标分组合并行（容差 8-12px 视PDF而定）
- 成都/富龙站 PDF 有 CJK 字体编码问题（宋体 CMap 损坏），无法文本提取
- 多页结果需追踪续页（"名次 号码 姓名" 开头的后续页）
- 并列名次（tie）需特殊处理，不能用 seen_ranks 去重

## 开发命令

```bash
npm run dev          # 开发服务器
npm run build        # 生产构建
npm run typecheck    # 类型检查
npm run lint         # 代码检查
```

## 部署

```bash
# 腾讯云一键部署
ssh -i ~/.ssh/tencent_cloud.pem ubuntu@43.139.31.180 \
  "cd /var/www/ski && git pull origin main && npm run build && pm2 restart all"
```

## Git

- **仓库**: https://github.com/gaohao10010111-sketch/ski.git
- **线上**: https://cnskipoints.com
- **主分支**: main
