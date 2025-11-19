#!/bin/bash
# 滑雪积分系统 - 自动化部署脚本
# 使用SSH密钥直接在服务器上构建，避免文件传输

set -e  # 遇到错误立即退出

# 配置
SSH_KEY="C:\\Users\\Simbelmyne\\desktop\\ski\\1012.pem"
SERVER="ubuntu@81.68.80.163"
REPO_URL="https://github.com/gaohao10010111-sketch/ski.git"

echo "==================================================="
echo "  滑雪积分系统 - 自动化部署"
echo "==================================================="
echo ""
echo "🚀 开始部署..."
echo "服务器: $SERVER"
echo "时间: $(date)"
echo ""

# 步骤1: 清理旧的SSH进程
echo "[1/6] 清理SSH连接..."
powershell.exe -Command "Get-Process ssh -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue" 2>/dev/null || true
sleep 2

# 步骤2: 测试连接
echo "[2/6] 测试服务器连接..."
if ! powershell.exe -Command "ssh -i $SSH_KEY -o ConnectTimeout=5 $SERVER 'echo OK'" > /dev/null 2>&1; then
    echo "❌ 无法连接到服务器"
    exit 1
fi
echo "✅ 连接成功"

# 步骤3: 在服务器上从GitHub拉取最新代码
echo "[3/6] 拉取最新代码..."
powershell.exe -Command "ssh -i $SSH_KEY $SERVER @'
# 使用临时目录避免冲突
cd /home/ubuntu || exit 1
echo \"准备更新代码...\"

# 备份现有的out目录
if [ -d ski/out ]; then
    echo \"备份现有部署...\"
    cp -r ski/out ski-out-backup-\$(date +%Y%m%d%H%M%S) 2>/dev/null || true
fi

# 删除旧目录，重新克隆
rm -rf ski-new
git clone --depth 1 $REPO_URL ski-new

# 替换旧目录
rm -rf ski-old
mv ski ski-old 2>/dev/null || true
mv ski-new ski

cd ski
echo \"✅ 代码已更新到最新版本\"
git log -1 --oneline
'@"

# 步骤4: 安装依赖
echo "[4/6] 安装依赖..."
powershell.exe -Command "ssh -i $SSH_KEY $SERVER @'
cd /home/ubuntu/ski
echo \"安装npm依赖...\"
npm install 2>&1 | tail -20
echo \"✅ 依赖安装完成\"
'@"

# 步骤5: 构建项目
echo "[5/6] 构建项目..."
powershell.exe -Command "ssh -i $SSH_KEY $SERVER @'
cd /home/ubuntu/ski
echo \"开始构建...\"
rm -rf out
GITHUB_PAGES=true NODE_ENV=production npm run build 2>&1 | tail -30
echo \"✅ 构建完成\"
echo \"文件统计:\"
du -sh out 2>/dev/null && find out -type f | wc -l
'@"

# 步骤6: 重启Nginx
echo "[6/6] 重启Nginx..."
powershell.exe -Command "ssh -i $SSH_KEY $SERVER @'
echo \"重启Nginx服务...\"
sudo systemctl reload nginx
sudo systemctl status nginx --no-pager | head -5
echo \"✅ Nginx已重启\"
'@"

# 完成
echo ""
echo "==================================================="
echo "  ✅ 部署完成！"
echo "==================================================="
echo ""
echo "🌐 访问网站: https://sportscience.cn/ski/"
echo ""
echo "📊 部署信息:"
powershell.exe -Command "ssh -i $SSH_KEY $SERVER @'
cd /home/ubuntu/ski
echo \"  - Git版本: \$(git rev-parse --short HEAD)\"
echo \"  - 文件数量: \$(find out -type f 2>/dev/null | wc -l)\"
echo \"  - 目录大小: \$(du -sh out 2>/dev/null | cut -f1)\"
echo \"  - Nginx状态: \$(systemctl is-active nginx)\"
'@"
echo ""
echo "🎉 部署成功！"
