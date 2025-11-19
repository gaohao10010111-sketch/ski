#!/bin/bash
# 手动部署脚本 - 在服务器上执行
# SSH登录: ssh -i C:\Users\Simbelmyne\desktop\ski\1012.pem ubuntu@81.68.80.163

echo "=== 滑雪积分系统部署脚本 ==="
echo "开始时间: $(date)"

# 步骤1：准备目录
echo ""
echo "[1/5] 准备部署目录..."
cd /home/ubuntu/ski
mkdir -p out-backup
if [ -d "out" ]; then
    echo "备份现有out目录..."
    mv out out-backup/out-$(date +%Y%m%d%H%M%S)
fi
mkdir -p out

# 步骤2：解压文件（如果存在）
echo ""
echo "[2/5] 解压构建文件..."
if [ -f "out-uncompressed.tar" ]; then
    cd out
    tar -xf ../out-uncompressed.tar --strip-components=1
    echo "文件数量: $(find . -type f | wc -l)"
    echo "目录大小: $(du -sh .)"
else
    echo "⚠️  未找到 out-uncompressed.tar"
    echo "备选方案：从GitHub克隆main分支并构建..."
    cd /tmp
    rm -rf ski-deploy
    git clone --depth 1 https://github.com/gaohao10010111-sketch/ski.git ski-deploy
    cd ski-deploy
    npm install
    GITHUB_PAGES=true npm run build

    if [ -d ".next" ]; then
        echo "✅ 构建成功！复制.next内容..."
        cp -r .next/static /home/ubuntu/ski/out/_next
        cp -r .next/*.html /home/ubuntu/ski/out/ 2>/dev/null || true
        find . -name "*.html" -type f -exec cp {} /home/ubuntu/ski/out/ \; 2>/dev/null || true
    fi
fi

# 步骤3：验证文件
echo ""
echo "[3/5] 验证部署文件..."
cd /home/ubuntu/ski/out
ls -la | head -20
echo "总文件数: $(find . -type f | wc -l)"

# 步骤4：设置权限
echo ""
echo "[4/5] 设置文件权限..."
chmod -R 755 /home/ubuntu/ski/out

# 步骤5：重启Nginx
echo ""
echo "[5/5] 重启Nginx服务..."
sudo systemctl reload nginx
sudo systemctl status nginx | head -10

echo ""
echo "=== 部署完成 ==="
echo "完成时间: $(date)"
echo ""
echo "🎯 访问网站："
echo "https://sportscience.cn/ski/"
echo ""
echo "📊 部署统计："
echo "- 文件总数: $(find /home/ubuntu/ski/out -type f | wc -l)"
echo "- 目录大小: $(du -sh /home/ubuntu/ski/out)"
echo "- Nginx状态: $(systemctl is-active nginx)"
