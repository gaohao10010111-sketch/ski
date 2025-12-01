#!/bin/bash
# 静态构建脚本 - 用于 GitHub Pages 和其他静态托管
# 临时移除不支持静态导出的目录，构建后恢复

set -e

echo "🔧 准备静态构建..."

# 定义需要临时移除的目录
API_DIR="src/app/api"
API_BACKUP="src/app/_api_backup"
ATHLETES_ID_DIR="src/app/athletes/[id]"
ATHLETES_ID_BACKUP="src/app/athletes/_id_backup"
COMPETITIONS_ID_DIR="src/app/competitions/[id]"
COMPETITIONS_ID_BACKUP="src/app/competitions/_id_backup"

# 清理函数 - 确保恢复所有目录
cleanup() {
    echo "🔄 恢复临时移动的目录..."
    [ -d "$API_BACKUP" ] && mv "$API_BACKUP" "$API_DIR"
    [ -d "$ATHLETES_ID_BACKUP" ] && mv "$ATHLETES_ID_BACKUP" "$ATHLETES_ID_DIR"
    [ -d "$COMPETITIONS_ID_BACKUP" ] && mv "$COMPETITIONS_ID_BACKUP" "$COMPETITIONS_ID_DIR"
    echo "✅ 目录已恢复"
}

# 设置 trap 确保即使出错也恢复目录
trap cleanup EXIT

# 清除旧的构建缓存
echo "🗑️  清除构建缓存..."
rm -rf .next out

# 临时移除不支持静态导出的目录
echo "📦 临时移除动态路由..."
[ -d "$API_DIR" ] && mv "$API_DIR" "$API_BACKUP"
[ -d "$ATHLETES_ID_DIR" ] && mv "$ATHLETES_ID_DIR" "$ATHLETES_ID_BACKUP"
[ -d "$COMPETITIONS_ID_DIR" ] && mv "$COMPETITIONS_ID_DIR" "$COMPETITIONS_ID_BACKUP"

# 执行构建
echo "🏗️  开始静态构建..."
GITHUB_PAGES=true npm run build

echo ""
echo "✅ 静态构建完成！"
echo "📁 输出目录: out/"
echo ""
echo "注意: 以下功能在静态版本中不可用:"
echo "  - /api/* (需要服务端)"
echo "  - /athletes/[id] (需要服务端)"
echo "  - /competitions/[id] (需要服务端)"
