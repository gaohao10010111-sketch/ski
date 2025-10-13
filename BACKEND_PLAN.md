# 滑雪积分系统后端架构方案

## 📊 数据隔离策略

### 方案一：独立数据库（推荐）✅
```
腾讯云服务器 (81.68.80.163)
├── 项目A数据库: ski_points_db (端口3306)
├── 项目B数据库: other_project_db (端口3306)
└── 项目C数据库: another_db (端口3306)
```

**优势**：
- 数据完全隔离，互不影响
- 独立备份和恢复
- 权限独立管理
- 性能互不干扰

### 方案二：独立数据库实例（最安全）
```
腾讯云服务器
├── MySQL实例1: ski_points (端口3306)
├── MySQL实例2: other_project (端口3307)
└── PostgreSQL: analytics (端口5432)
```

## 🗄️ 数据库选型

### 选项1：PostgreSQL（推荐用于复杂查询）
```sql
-- 优势
✅ 强大的JSON支持（存储比赛数据）
✅ 复杂查询性能好
✅ 完整的事务支持
✅ 免费开源

-- 数据库结构
CREATE DATABASE ski_points_prod;
CREATE USER ski_user WITH ENCRYPTED PASSWORD 'secure_password_here';
GRANT ALL PRIVILEGES ON DATABASE ski_points_prod TO ski_user;
```

### 选项2：MySQL（简单易用）
```sql
-- 优势
✅ 简单易维护
✅ 生态成熟
✅ 云服务支持好

CREATE DATABASE ski_points_prod CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'ski_user'@'localhost' IDENTIFIED BY 'secure_password_here';
GRANT ALL PRIVILEGES ON ski_points_prod.* TO 'ski_user'@'localhost';
```

## 🔐 数据安全方案

### 1. 网络隔离
```nginx
# 数据库只监听localhost
bind-address = 127.0.0.1

# API服务器访问数据库
location /api/ {
    proxy_pass http://localhost:3001;
}
```

### 2. 独立环境变量
```bash
# /home/ubuntu/ski/.env.production
DATABASE_URL=postgresql://ski_user:password@localhost:5432/ski_points_prod
JWT_SECRET=your_unique_jwt_secret_ski_2024
API_PORT=3001

# /home/ubuntu/other-project/.env
DATABASE_URL=postgresql://other_user:password@localhost:5432/other_db
JWT_SECRET=different_jwt_secret_other_2024
API_PORT=3002
```

### 3. 用户权限隔离
```sql
-- ski项目用户只能访问ski数据库
CREATE USER ski_user WITH PASSWORD 'password1';
GRANT ALL ON DATABASE ski_points_prod TO ski_user;

-- 其他项目用户只能访问各自数据库
CREATE USER other_user WITH PASSWORD 'password2';
GRANT ALL ON DATABASE other_db TO other_user;
```

## 🚀 后端技术栈

### Next.js API Routes（推荐）
```typescript
// 优势：与前端一体化
src/app/api/
├── auth/
│   ├── register/route.ts
│   ├── login/route.ts
│   └── logout/route.ts
├── athletes/
│   ├── route.ts
│   └── [id]/route.ts
├── competitions/
│   └── route.ts
└── points/
    └── route.ts
```

### 独立Node.js后端（更灵活）
```
/home/ubuntu/ski-api/
├── src/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── middleware/
├── .env
└── server.js
```

## 📦 部署架构

### 完整部署方案
```
腾讯云服务器 (81.68.80.163)
├── Nginx (端口80/443) - 前端静态文件
│   └── /ski/ → /home/ubuntu/ski/out/
├── Node.js API服务器 (端口3001)
│   └── /home/ubuntu/ski-api/
├── PostgreSQL数据库 (端口5432)
│   └── 数据库: ski_points_prod
└── 其他项目...
    ├── Node.js (端口3002)
    └── PostgreSQL (端口5433) 或 独立数据库
```

### Nginx反向代理配置
```nginx
server {
    server_name sportscience.cn;

    # 前端静态文件
    location /ski/ {
        alias /home/ubuntu/ski/out/;
        try_files $uri $uri.html $uri/ =404;
    }

    # 后端API（数据隔离）
    location /ski/api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    # 其他项目API
    location /other-project/api/ {
        proxy_pass http://localhost:3002/;
    }
}
```

## 🔒 数据表设计示例

### 核心表结构
```sql
-- 用户表
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW()
);

-- 运动员表
CREATE TABLE athletes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    fis_code VARCHAR(50),
    nationality VARCHAR(10),
    birth_date DATE,
    discipline VARCHAR(50)
);

-- 积分表
CREATE TABLE points (
    id SERIAL PRIMARY KEY,
    athlete_id INTEGER REFERENCES athletes(id),
    competition_id INTEGER,
    points DECIMAL(10,2),
    race_date DATE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 比赛表
CREATE TABLE competitions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    location VARCHAR(200),
    event_date DATE,
    discipline VARCHAR(50),
    level VARCHAR(10) -- A级/B级/C级
);
```

## 💾 备份策略

### 自动备份脚本
```bash
#!/bin/bash
# /home/ubuntu/backup-ski-db.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/ubuntu/backups/ski"
DB_NAME="ski_points_prod"

# 创建备份
pg_dump -U ski_user $DB_NAME > $BACKUP_DIR/ski_$DATE.sql

# 只保留最近7天的备份
find $BACKUP_DIR -name "ski_*.sql" -mtime +7 -delete

# 定时任务：每天凌晨2点备份
# crontab -e
# 0 2 * * * /home/ubuntu/backup-ski-db.sh
```

## 📈 性能优化

### 1. 数据库索引
```sql
-- 关键字段索引
CREATE INDEX idx_athletes_fis_code ON athletes(fis_code);
CREATE INDEX idx_points_athlete_date ON points(athlete_id, race_date);
CREATE INDEX idx_competitions_date ON competitions(event_date);
```

### 2. Redis缓存（可选）
```bash
# 安装Redis
sudo apt install redis-server

# 缓存积分排名
# 端口: 6379（与其他项目共享，使用不同的DB编号）
# ski项目使用: DB 0
# 其他项目使用: DB 1, 2, ...
```

## 🚦 实施步骤

### 阶段1: 数据库安装（1小时）
1. 安装PostgreSQL
2. 创建独立数据库和用户
3. 配置防火墙规则

### 阶段2: 后端API开发（2-3天）
1. 创建API路由结构
2. 实现用户认证
3. 开发核心接口

### 阶段3: 前后端集成（1天）
1. 修改前端API调用
2. 测试数据流转
3. 部署到生产环境

### 阶段4: 安全加固（半天）
1. 配置SSL
2. 设置CORS策略
3. 实施数据备份

## 💰 成本估算

### 基础方案（推荐）
- 当前服务器：已有
- PostgreSQL：免费开源
- 存储空间：~10GB（约¥5-10/月）
- 总计：**约¥10/月**

### 高级方案
- 独立数据库服务器：¥100-200/月
- Redis缓存：¥50-100/月
- 总计：¥150-300/月

## ✅ 推荐方案总结

**最佳方案**：
1. 使用PostgreSQL数据库（独立数据库名称）
2. Next.js API Routes实现后端
3. 通过环境变量隔离配置
4. Nginx反向代理不同项目的API
5. 每日自动备份数据

**数据隔离**：
- 不同数据库名称
- 不同数据库用户
- 不同API端口
- 独立环境变量文件
