#!/bin/bash
# 静态导出构建脚本
# 临时移除API目录和动态路由以支持Next.js静态导出

set -e

BACKUP_DIR=".build-backup"

# 需要备份的目录（API和动态路由）
DIRS_TO_BACKUP=(
  "src/app/api"
  "src/app/athletes/[id]"
  "src/app/competitions/[id]"
)

echo "🔧 准备静态导出构建..."

# 创建备份目录
mkdir -p "$BACKUP_DIR"

# 备份需要排除的目录
for dir in "${DIRS_TO_BACKUP[@]}"; do
  if [ -d "$dir" ]; then
    backup_path="$BACKUP_DIR/$(echo "$dir" | tr '/' '_')"
    echo "📦 备份: $dir"
    mv "$dir" "$backup_path"
  fi
done

# 执行构建
echo "🏗️ 执行静态导出构建..."
GITHUB_PAGES=true npm run build

BUILD_STATUS=$?

# 恢复备份的目录
for dir in "${DIRS_TO_BACKUP[@]}"; do
  backup_path="$BACKUP_DIR/$(echo "$dir" | tr '/' '_')"
  if [ -d "$backup_path" ]; then
    echo "📂 恢复: $dir"
    # 确保父目录存在
    parent_dir=$(dirname "$dir")
    mkdir -p "$parent_dir"
    mv "$backup_path" "$dir"
  fi
done

# 清理备份目录
rmdir "$BACKUP_DIR" 2>/dev/null || true

if [ $BUILD_STATUS -ne 0 ]; then
  echo "❌ 构建失败"
  exit $BUILD_STATUS
fi

# 创建.nojekyll文件
touch out/.nojekyll

echo "✅ 静态导出构建完成！"
echo "📁 输出目录: out/"
