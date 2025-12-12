#!/bin/bash
# 滑雪积分系统 - 腾讯云服务器部署脚本
# 服务器: 81.70.185.130 (cnskipoints.com)

set -e

# 配置
SSH_KEY="/Users/gaohao/Desktop/ski/1210.pem"
SERVER="root@81.70.185.130"
DEPLOY_DIR="/var/www/ski"
LOCAL_BUILD_DIR="/Users/gaohao/Desktop/ski/out"

echo "==================================================="
echo "  滑雪积分系统 - 腾讯云部署"
echo "==================================================="
echo ""
echo "时间: $(date)"
echo "服务器: $SERVER"
echo "目标目录: $DEPLOY_DIR"
echo ""

# 步骤1: 构建项目
echo "[1/4] 构建项目..."
cd /Users/gaohao/Desktop/ski
rm -rf out
STANDALONE=true npm run build
echo "✅ 构建完成"
echo "文件数量: $(find out -type f | wc -l)"
echo "目录大小: $(du -sh out | cut -f1)"

# 步骤2: 修复本地文件权限
echo ""
echo "[2/4] 修复文件权限..."
chmod -R 644 out/
find out -type d -exec chmod 755 {} \;
echo "✅ 权限已修复"

# 步骤3: 上传文件
echo ""
echo "[3/4] 上传文件到服务器..."
rsync -avz --delete \
    -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no" \
    $LOCAL_BUILD_DIR/ $SERVER:$DEPLOY_DIR/

# 步骤4: 服务器端权限修复
echo ""
echo "[4/4] 服务器端权限修复..."
ssh -i $SSH_KEY -o StrictHostKeyChecking=no $SERVER "
    chown -R nginx:nginx $DEPLOY_DIR
    find $DEPLOY_DIR -type d -exec chmod 755 {} \;
    find $DEPLOY_DIR -type f -exec chmod 644 {} \;
    systemctl reload nginx
"

echo ""
echo "==================================================="
echo "  ✅ 部署完成！"
echo "==================================================="
echo ""
echo "🌐 访问网站: https://cnskipoints.com/"
echo ""
