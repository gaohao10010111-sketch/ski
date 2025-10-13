# 🔧 服务器网络问题解决方案

## 问题诊断

服务器无法访问npm仓库（错误：EHOSTUNREACH），需要手动解决网络问题后才能安装依赖。

## ✅ 当前已完成

1. ✅ 数据库完全配置（ski_points_prod运行正常）
2. ✅ 后端代码全部上传（src/lib, src/app/api）
3. ✅ Nginx配置更新（API代理已配置）
4. ✅ 日志目录已创建
5. ❌ npm依赖未安装（网络问题）

## 🔍 网络问题排查

### 步骤1: 检查服务器网络

```bash
ssh -i C:\Users\Simbelmyne\desktop\ski\1012.pem ubuntu@81.68.80.163

# 测试网络连接
ping -c 3 registry.npmjs.org
ping -c 3 registry.npmmirror.com
ping -c 3 8.8.8.8

# 检查DNS
cat /etc/resolv.conf

# 检查防火墙
sudo ufw status
```

### 步骤2: 尝试修复网络

```bash
# 重启网络服务
sudo systemctl restart systemd-networkd

# 或者刷新DNS
sudo systemd-resolve --flush-caches

# 检查IPv6问题（npm可能使用IPv6导致连接失败）
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
```

## 📦 方案A: 修复网络后安装（推荐）

网络修复后，执行：

```bash
cd /home/ubuntu/ski

# 清理npm缓存
npm cache clean --force

# 设置淘宝镜像
npm config set registry https://registry.npmmirror.com

# 安装所有依赖
npm install --legacy-peer-deps

# 或者只安装后端必须的包
npm install pg bcryptjs jsonwebtoken dotenv
```

## 📦 方案B: 本地打包上传（快速）

如果服务器网络长期有问题，可以在本地打包node_modules上传：

### 在本地Windows上执行：

```powershell
# 1. 在本地安装依赖
cd C:\Users\Simbelmyne\desktop\ski
npm install --legacy-peer-deps

# 2. 打包node_modules
tar -czf node_modules.tar.gz node_modules

# 3. 上传到服务器
scp -i C:\Users\Simbelmyne\desktop\ski\1012.pem node_modules.tar.gz ubuntu@81.68.80.163:/home/ubuntu/ski/

# 4. SSH到服务器解压
ssh -i C:\Users\Simbelmyne\desktop\ski\1012.pem ubuntu@81.68.80.163
cd /home/ubuntu/ski
tar -xzf node_modules.tar.gz
rm node_modules.tar.gz
```

**注意**: 这种方法可能有平台兼容性问题（Windows vs Linux），某些native模块需要重新编译。

### 更好的方式：使用Docker构建

```bash
# 在服务器上使用Docker构建（如果服务器有Docker）
cd /home/ubuntu/ski

# 创建临时Dockerfile
cat > Dockerfile.build << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmmirror.com && \
    npm install --legacy-peer-deps
EOF

# 使用Docker构建并提取node_modules
docker build -f Dockerfile.build -t ski-builder .
docker create --name ski-temp ski-builder
docker cp ski-temp:/app/node_modules ./
docker rm ski-temp
```

## 📦 方案C: 手动下载包（最后手段）

如果以上方法都不行，可以手动下载必须的npm包：

### 必须的后端包：
1. **pg** (PostgreSQL客户端)
2. **bcryptjs** (密码加密)
3. **jsonwebtoken** (JWT认证)
4. **dotenv** (环境变量)

### 手动下载链接：
```bash
# 在能访问外网的机器上下载
mkdir npm-packages
cd npm-packages

# 下载包
npm pack pg
npm pack bcryptjs
npm pack jsonwebtoken
npm pack dotenv

# 打包上传
cd ..
tar -czf npm-packages.tar.gz npm-packages

# 上传到服务器
scp -i 1012.pem npm-packages.tar.gz ubuntu@81.68.80.163:/home/ubuntu/ski/

# 服务器上安装
cd /home/ubuntu/ski
tar -xzf npm-packages.tar.gz
cd npm-packages
for pkg in *.tgz; do npm install --no-save "$pkg"; done
```

## 🚀 依赖安装完成后的步骤

```bash
cd /home/ubuntu/ski

# 1. 安装PM2（如果还没安装）
sudo npm install -g pm2

# 2. 启动API服务器
pm2 start ecosystem.config.js

# 3. 保存PM2配置
pm2 save
pm2 startup

# 4. 查看日志
pm2 logs ski-api

# 5. 测试API
curl http://localhost:3001/api/health

# 应该返回：{"status":"healthy","database":"connected"...}
```

## 🌐 从外网测试

```bash
# 健康检查
curl https://sportscience.cn/ski/api/health

# 用户注册
curl -X POST https://sportscience.cn/ski/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"test123","name":"测试"}'

# 用户登录
curl -X POST https://sportscience.cn/ski/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"test123"}'
```

## 📞 需要帮助？

### 检查清单：

- [ ] 服务器可以ping通外网
- [ ] 服务器DNS解析正常
- [ ] npm可以连接到registry
- [ ] node_modules目录存在
- [ ] pm2已安装
- [ ] PM2进程ski-api运行中
- [ ] curl localhost:3001/api/health返回healthy
- [ ] 外网可以访问https://sportscience.cn/ski/api/health

### 日志位置：

- **PM2日志**: `pm2 logs ski-api`
- **Nginx错误**: `/var/log/nginx/sportscience.error.log`
- **PostgreSQL**: `/var/log/postgresql/postgresql-14-main.log`
- **npm安装**: `/tmp/npm-install.log`（如果用了后台安装）

### 常见错误：

| 错误 | 原因 | 解决方法 |
|------|------|----------|
| EHOSTUNREACH | 网络不可达 | 检查服务器网络和DNS |
| ECONNREFUSED | API未启动 | 检查pm2 status，查看日志 |
| 502 Bad Gateway | API无响应 | 检查pm2进程和端口3001 |
| Database connection error | 数据库问题 | 检查PostgreSQL服务 |

---

**总结**：核心问题是服务器npm网络连接。修复网络后，整个后端部署只需要5-10分钟即可完成！
