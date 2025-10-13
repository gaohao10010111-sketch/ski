# 滑雪积分系统后端部署指南

## ✅ 已完成的工作

### 1. 数据库部署 ✅
- ✅ 安装PostgreSQL 14
- ✅ 创建独立数据库：`ski_points_prod`
- ✅ 创建专用用户：`ski_user`
- ✅ 配置密码认证
- ✅ 创建完整数据库表结构（8张表 + 13个索引）

### 2. 后端API开发 ✅
- ✅ 数据库连接池（`src/lib/db.ts`）
- ✅ 用户认证工具（`src/lib/auth.ts`）
- ✅ 注册API（`/api/auth/register`）
- ✅ 登录API（`/api/auth/login`）
- ✅ 用户信息API（`/api/auth/me`）
- ✅ 健康检查API（`/api/health`）

### 3. 环境配置 ✅
- ✅ 生产环境变量文件（`.env.production`）
- ✅ 数据库连接配置
- ✅ JWT安全配置

## 📋 数据库表结构

### 核心业务表
1. **users** - 用户表
   - 用户认证信息（用户名、邮箱、密码）
   - 用户角色权限管理

2. **athletes** - 运动员表
   - FIS编码、国籍、出生日期
   - 关联用户账号

3. **competitions** - 比赛表
   - 比赛信息、级别、赛事系数
   - A/B/C级分类

4. **results** - 成绩表
   - 比赛成绩记录
   - DNF/DNS/DQ状态

5. **points** - 积分表
   - 基础积分、判罚分、最终积分
   - v4.0积分计算结果

6. **registrations** - 报名表
   - 在线报名信息
   - 报名状态和支付管理

7. **rules** - 规则文档表
   - 规则文档存储和版本管理

8. **audit_logs** - 审计日志表
   - 系统操作记录
   - 数据变更追踪

## 🚀 下一步部署流程

### 步骤1: 上传文件到服务器

```bash
# 在本地执行（Windows PowerShell）
cd C:\Users\Simbelmyne\desktop\ski

# 上传环境配置文件
scp -i C:\Users\Simbelmyne\desktop\ski\1012.pem .env.production ubuntu@81.68.80.163:/home/ubuntu/ski/

# 上传更新的package.json
scp -i C:\Users\Simbelmyne\desktop\ski\1012.pem package.json ubuntu@81.68.80.163:/home/ubuntu/ski/

# 上传所有新创建的后端代码
scp -i C:\Users\Simbelmyne\desktop\ski\1012.pem -r src/lib ubuntu@81.68.80.163:/home/ubuntu/ski/src/
scp -i C:\Users\Simbelmyne\desktop\ski\1012.pem -r src/app/api ubuntu@81.68.80.163:/home/ubuntu/ski/src/app/
```

### 步骤2: 服务器上安装依赖

```bash
# SSH连接到服务器
ssh -i C:\Users\Simbelmyne\desktop\ski\1012.pem ubuntu@81.68.80.163

# 进入项目目录
cd /home/ubuntu/ski

# 安装新的依赖
npm install pg bcryptjs jsonwebtoken dotenv

# 安装TypeScript类型定义
npm install --save-dev @types/pg @types/bcryptjs @types/jsonwebtoken
```

### 步骤3: 构建项目

```bash
# 使用生产环境变量构建
NODE_ENV=production npm run build

# 或者如果需要GitHub Pages构建：
# GITHUB_PAGES=true npm run build
```

### 步骤4: 配置Nginx反向代理API

编辑Nginx配置文件，添加API代理：

```bash
sudo nano /etc/nginx/sites-available/sportscience.cn
```

在配置中添加API路由（在 `location /ski/` 之后）：

```nginx
# API后端代理
location /ski/api/ {
    proxy_pass http://localhost:3001/api/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

重载Nginx：
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 步骤5: 启动Next.js服务器

使用PM2进程管理器：

```bash
# 安装PM2（如果未安装）
sudo npm install -g pm2

# 启动Next.js服务器
pm2 start npm --name "ski-api" -- start -- -p 3001

# 设置开机自启
pm2 startup
pm2 save

# 查看日志
pm2 logs ski-api

# 查看状态
pm2 status
```

### 步骤6: 测试API接口

```bash
# 测试健康检查
curl http://localhost:3001/api/health

# 应该返回：
# {"status":"healthy","database":"connected","timestamp":"..."}

# 测试注册接口
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"test123","name":"测试用户"}'

# 测试登录接口
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"test123"}'
```

## 🔒 数据隔离验证

### 确认数据完全隔离

```bash
# 1. 连接到ski数据库
PGPASSWORD=SkiPoints2024!Secure psql -U ski_user -d ski_points_prod -c "\dt"

# 2. 查看所有数据库
sudo -u postgres psql -c "\l"

# 3. 验证用户权限
sudo -u postgres psql -c "\du ski_user"
```

### 数据隔离保证
- ✅ **独立数据库**: `ski_points_prod` 专用于滑雪积分系统
- ✅ **独立用户**: `ski_user` 只能访问 `ski_points_prod`
- ✅ **独立端口**: API运行在端口 3001
- ✅ **独立环境变量**: `.env.production` 独立配置
- ✅ **Nginx路径隔离**: `/ski/api/` 独立路由

## 📊 监控和日志

### 查看应用日志
```bash
# PM2日志
pm2 logs ski-api

# 数据库日志
sudo tail -f /var/log/postgresql/postgresql-14-main.log

# Nginx日志
sudo tail -f /var/log/nginx/sportscience.access.log
sudo tail -f /var/log/nginx/sportscience.error.log
```

### 性能监控
```bash
# 查看进程状态
pm2 monit

# 查看数据库连接数
sudo -u postgres psql -d ski_points_prod -c "SELECT count(*) FROM pg_stat_activity WHERE datname='ski_points_prod';"
```

## 🛡️ 安全建议

### 生产环境必须修改的配置
```bash
# 修改 .env.production 中的以下值：
JWT_SECRET=<生成强随机字符串>
SESSION_SECRET=<生成强随机字符串>
POSTGRES_PASSWORD=<更改为更强的密码>
```

生成强随机密钥：
```bash
# 生成32字节随机密钥
openssl rand -base64 32
```

### 防火墙配置
```bash
# PostgreSQL端口只允许localhost访问（默认已配置）
# 确认PostgreSQL监听地址
sudo grep "listen_addresses" /etc/postgresql/14/main/postgresql.conf
# 应该是: listen_addresses = 'localhost'

# 确认防火墙规则
sudo ufw status
```

## 🔄 自动备份配置

将在下一步骤中配置自动数据库备份脚本。

## 📞 API接口文档

### 1. 用户注册
**POST** `/api/auth/register`

**请求体**:
```json
{
  "username": "用户名",
  "email": "email@example.com",
  "password": "密码",
  "name": "姓名（可选）"
}
```

**响应**:
```json
{
  "message": "注册成功",
  "user": {
    "id": 1,
    "username": "用户名",
    "email": "email@example.com",
    "name": "姓名",
    "role": "user"
  },
  "token": "JWT_TOKEN"
}
```

### 2. 用户登录
**POST** `/api/auth/login`

**请求体**:
```json
{
  "username": "用户名或邮箱",
  "password": "密码"
}
```

**响应**:
```json
{
  "message": "登录成功",
  "user": {
    "id": 1,
    "username": "用户名",
    "email": "email@example.com",
    "name": "姓名",
    "role": "user"
  },
  "token": "JWT_TOKEN"
}
```

### 3. 获取当前用户信息
**GET** `/api/auth/me`

**请求头**:
```
Authorization: Bearer JWT_TOKEN
```

**响应**:
```json
{
  "user": {
    "id": 1,
    "username": "用户名",
    "email": "email@example.com",
    "name": "姓名",
    "role": "user",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "lastLogin": "2024-01-01T00:00:00.000Z"
  },
  "athlete": {
    "id": 1,
    "fis_code": "CHN123456",
    "nationality": "CHN",
    "discipline": "GS"
  }
}
```

### 4. 健康检查
**GET** `/api/health`

**响应**:
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production"
}
```

## 🎉 完成状态

- [x] PostgreSQL数据库安装和配置
- [x] 数据库表结构创建
- [x] 用户认证API开发
- [x] 环境变量配置
- [ ] Nginx反向代理配置（待执行）
- [ ] PM2进程管理配置（待执行）
- [ ] API接口测试（待执行）
- [ ] 自动备份脚本配置（待执行）

## 📝 下一步行动

现在可以执行上述部署流程，将后端系统完整部署到生产服务器！
