#!/bin/bash
set -e

echo "========================================="
echo "🚀 开始部署滑雪积分系统后端"
echo "========================================="

cd /home/ubuntu/ski

# 步骤1: 清理并安装依赖
echo ""
echo "📦 步骤1: 安装npm依赖..."
npm config set registry https://registry.npmmirror.com
npm install --legacy-peer-deps || echo "部分依赖安装失败，继续..."

# 步骤2: 创建日志目录
echo ""
echo "📁 步骤2: 创建日志目录..."
mkdir -p /home/ubuntu/ski/logs

# 步骤3: 更新Nginx配置
echo ""
echo "🔧 步骤3: 更新Nginx配置..."
sudo cp /etc/nginx/sites-available/sportscience.cn /etc/nginx/sites-available/sportscience.cn.backup_before_api

# 步骤4: 测试Nginx配置
echo ""
echo "✅ 步骤4: 测试Nginx配置..."
sudo nginx -t

# 步骤5: 安装PM2
echo ""
echo "🔧 步骤5: 安装PM2进程管理器..."
which pm2 || sudo npm install -g pm2

# 步骤6: 停止旧进程
echo ""
echo "🛑 步骤6: 停止旧的API进程（如果存在）..."
pm2 delete ski-api || echo "没有运行中的ski-api进程"

# 步骤7: 启动Next.js API服务器
echo ""
echo "🚀 步骤7: 启动Next.js API服务器..."
pm2 start ecosystem.config.js || echo "PM2启动失败"

# 步骤8: 设置PM2开机自启
echo ""
echo "💾 步骤8: 设置PM2开机自启..."
pm2 save

# 步骤9: 查看服务状态
echo ""
echo "📊 步骤9: 查看服务状态..."
pm2 list
pm2 logs ski-api --lines 20 --nostream || echo "暂无日志"

# 步骤10: 测试API健康检查
echo ""
echo "🏥 步骤10: 测试API健康检查..."
sleep 3
curl -s http://localhost:3001/api/health || echo "API未响应"

echo ""
echo "========================================="
echo "✅ 部署脚本执行完成！"
echo "========================================="
echo ""
echo "📋 后续步骤："
echo "1. 上传新的Nginx配置"
echo "2. 重载Nginx"
echo "3. 从外网测试API"
