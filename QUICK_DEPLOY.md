# 🚀 后端快速部署指南

## ✅ 已完成部分
- PostgreSQL数据库已安装配置
- 独立数据库ski_points_prod已创建
- 所有后端代码已上传到服务器
- 环境配置文件已上传

## 📋 待执行命令（按顺序执行）

### 方式1: 使用部署脚本（推荐）

```bash
# 1. SSH登录服务器
ssh -i C:\Users\Simbelmyne\desktop\ski\1012.pem ubuntu@81.68.80.163

# 2. 进入项目目录
cd /home/ubuntu/ski

# 3. 安装依赖（这一步会比较慢，请耐心等待）
npm config set registry https://registry.npmmirror.com
npm install --legacy-peer-deps

# 4. 创建日志目录
mkdir -p /home/ubuntu/ski/logs

# 5. 安装PM2
sudo npm install -g pm2

# 6. 停止旧进程（如果有）
pm2 delete ski-api

# 7. 启动API服务器
pm2 start ecosystem.config.js

# 8. 保存PM2配置（开机自启）
pm2 save
pm2 startup

# 9. 查看服务状态
pm2 list
pm2 logs ski-api --lines 50

# 10. 测试API健康检查
curl http://localhost:3001/api/health

# 如果返回 {"status":"healthy","database":"connected"...} 则API启动成功！
```

### 方式2: 分步手动执行（如果方式1失败）

```bash
# SSH登录
ssh -i C:\Users\Simbelmyne\desktop\ski\1012.pem ubuntu@81.68.80.163

cd /home/ubuntu/ski

# 只安装必要的后端包（更快）
npm install pg bcryptjs jsonwebtoken dotenv

# 如果上面的命令也慢，尝试使用yarn
sudo npm install -g yarn
yarn add pg bcryptjs jsonwebtoken dotenv

# 创建日志目录
mkdir -p logs

# 安装PM2
sudo npm install -g pm2

# 启动API服务器（方式A: 使用PM2配置文件）
pm2 start ecosystem.config.js

# 或者（方式B: 直接命令）
pm2 start "npm start" --name ski-api -- -p 3001

# 查看日志
pm2 logs ski-api

# 测试
curl http://localhost:3001/api/health
```

## 🔧 配置Nginx反向代理

```bash
# 备份当前Nginx配置
sudo cp /etc/nginx/sites-available/sportscience.cn /etc/nginx/sites-available/sportscience.cn.backup_$(date +%Y%m%d)

# 上传新的Nginx配置
sudo cp /home/ubuntu/ski/nginx-with-api.conf /etc/nginx/sites-available/sportscience.cn

# 测试Nginx配置
sudo nginx -t

# 如果测试通过，重载Nginx
sudo systemctl reload nginx
```

## ✅ 测试API接口

### 1. 健康检查
```bash
curl https://sportscience.cn/ski/api/health
```

应该返回：
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2024-xx-xx...",
  "environment": "production"
}
```

### 2. 测试注册
```bash
curl -X POST https://sportscience.cn/ski/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "test123456",
    "name": "测试用户"
  }'
```

### 3. 测试登录
```bash
curl -X POST https://sportscience.cn/ski/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "test123456"
  }'
```

## 🛠️ 故障排查

### 问题1: npm install失败或超时
**解决方案**：
```bash
# 清理缓存
npm cache clean --force

# 删除node_modules重新安装
rm -rf node_modules package-lock.json

# 使用国内镜像
npm config set registry https://registry.npmmirror.com

# 或者使用yarn
sudo npm install -g yarn
yarn install
```

### 问题2: PM2启动失败
**解决方案**：
```bash
# 查看详细错误
pm2 logs ski-api --err --lines 100

# 检查环境变量
cat .env.production

# 测试数据库连接
PGPASSWORD=SkiPoints2024!Secure psql -U ski_user -d ski_points_prod -c "SELECT NOW();"

# 直接启动Next.js查看错误
npm start
```

### 问题3: Nginx 502 Bad Gateway
**解决方案**：
```bash
# 检查API服务器是否运行
pm2 list

# 检查端口是否监听
sudo netstat -tlnp | grep 3001

# 查看Nginx错误日志
sudo tail -f /var/log/nginx/sportscience.error.log

# 查看API日志
pm2 logs ski-api
```

### 问题4: 数据库连接失败
**解决方案**：
```bash
# 检查PostgreSQL服务
sudo systemctl status postgresql

# 测试数据库连接
PGPASSWORD=SkiPoints2024!Secure psql -U ski_user -d ski_points_prod

# 检查环境变量
grep DATABASE_URL .env.production
```

## 📊 监控命令

```bash
# 实时查看API日志
pm2 logs ski-api --lines 100

# 查看PM2进程状态
pm2 monit

# 查看系统资源使用
pm2 status
top

# 查看数据库连接数
sudo -u postgres psql -d ski_points_prod -c "SELECT count(*) FROM pg_stat_activity WHERE datname='ski_points_prod';"

# 查看Nginx访问日志
sudo tail -f /var/log/nginx/sportscience.access.log

# 查看Nginx错误日志
sudo tail -f /var/log/nginx/sportscience.error.log
```

## 🔒 安全检查清单

- [ ] 修改.env.production中的JWT_SECRET为强随机字符串
- [ ] 修改.env.production中的SESSION_SECRET为强随机字符串
- [ ] 确认PostgreSQL只监听localhost
- [ ] 确认防火墙规则正确（3001端口不对外开放）
- [ ] 确认Nginx HTTPS配置正常
- [ ] 确认pm2开机自启已配置

## 🎉 部署完成确认

部署成功的标志：
1. ✅ `pm2 list` 显示ski-api状态为online
2. ✅ `curl http://localhost:3001/api/health` 返回healthy状态
3. ✅ `curl https://sportscience.cn/ski/api/health` 从外网可访问
4. ✅ 用户注册和登录接口正常工作
5. ✅ 数据库连接正常，能查询数据

## 📝 下一步

部署完成后，建议配置：
1. 数据库自动备份（见DEPLOYMENT_GUIDE.md）
2. 日志轮转配置
3. 监控告警（可选）
4. SSL证书自动更新验证

---

**需要帮助？**
如有问题，请检查：
- PM2日志: `pm2 logs ski-api`
- Nginx错误日志: `sudo tail -f /var/log/nginx/sportscience.error.log`
- 数据库日志: `sudo tail -f /var/log/postgresql/postgresql-14-main.log`
