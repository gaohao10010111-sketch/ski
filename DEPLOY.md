# 🚀 GitHub Pages 部署指南

## 📋 概述

本项目已配置GitHub Pages直接从`development`分支的`docs`文件夹部署，您可以通过多种方式更新网站。

## 🌐 访问地址

- **网站地址**: https://guangyikeji.github.io/ski/
- **GitHub仓库**: https://github.com/guangyikeji/ski

## 🛠️ 部署方式

### 方式1: 一键部署脚本 ⭐ 推荐

```bash
# 在项目根目录执行
./deploy-github-pages.sh

# 或者带自定义提交信息
./deploy-github-pages.sh "feat: 添加新功能"
```

**脚本功能**：
- ✅ 自动清理旧文件
- ✅ 构建静态网站（34个页面）
- ✅ Git提交和推送
- ✅ 网站访问测试
- ✅ 彩色日志输出

### 方式2: npm脚本

```bash
# 在 alpine-ski-points 目录
cd alpine-ski-points

# 快速部署
npm run deploy:pages

# 或者分步操作
npm run build:direct  # 构建到 ../docs
cd ..
git add . && git commit -m "更新网站" && git push github development
```

### 方式3: 手动操作

```bash
# 1. 进入项目目录
cd alpine-ski-points

# 2. 构建静态文件
DIRECT_DEPLOY=true npm run build

# 3. 提交和推送
cd ..
git add .
git commit -m "更新网站内容"
git push github development
```

## ⚡ 构建配置

项目支持两种构建模式：

### GitHub Actions模式
```bash
GITHUB_PAGES=true npm run build
# 输出到: alpine-ski-points/out
# basePath: /ski
```

### 直接部署模式
```bash
DIRECT_DEPLOY=true npm run build
# 输出到: docs/
# basePath: 无前缀
```

## 📁 目录结构

```
ski/
├── alpine-ski-points/          # Next.js项目源码
│   ├── src/                    # 源代码
│   ├── package.json           # 项目配置
│   └── next.config.js         # Next.js配置
├── docs/                      # GitHub Pages静态文件
│   ├── index.html            # 主页
│   ├── _next/                # Next.js资源
│   └── ...                   # 其他页面
├── deploy-github-pages.sh     # 一键部署脚本
└── DEPLOY.md                 # 本文档
```

## 🔧 GitHub Pages设置

GitHub仓库已配置为：
- **Source**: Deploy from a branch
- **Branch**: development
- **Folder**: /docs

## ⏰ 部署时间

- **构建时间**: ~30-60秒
- **GitHub Pages更新**: 1-2分钟
- **总部署时间**: 2-3分钟

## 🛡️ 安全说明

- 所有敏感信息已通过环境变量保护
- 部署脚本包含错误检查和回滚机制
- 自动检测构建失败并停止部署

## 📊 网站功能

部署后的网站包含以下功能模块：

### 🏔️ 核心功能
- **积分计算器**: FIS标准公式计算
- **运动员排名**: 实时积分排行榜
- **比赛管理**: 赛事数据管理
- **在线报名**: 比赛报名系统

### 📱 技术特性
- **响应式设计**: 支持手机、平板、桌面
- **PWA支持**: 可安装到设备
- **SEO优化**: 搜索引擎友好
- **性能优化**: 快速加载和缓存

## 🐛 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 检查TypeScript错误
   cd alpine-ski-points && npm run typecheck

   # 检查ESLint错误
   npm run lint
   ```

2. **推送失败**
   ```bash
   # 检查远程仓库配置
   git remote -v

   # 重新添加远程仓库
   git remote add github https://github.com/guangyikeji/ski.git
   ```

3. **网站访问404**
   - 等待1-2分钟让GitHub Pages更新
   - 检查docs文件夹是否有index.html
   - 确认GitHub Pages设置正确

### 调试命令

```bash
# 检查构建输出
ls -la docs/

# 验证HTML文件
find docs -name "*.html" | wc -l

# 测试本地静态文件
cd docs && python3 -m http.server 8000
```

## 🔄 更新流程

每次代码修改后的标准流程：

1. **开发阶段**
   ```bash
   cd alpine-ski-points
   npm run dev  # 本地开发服务器
   ```

2. **测试阶段**
   ```bash
   npm run build:direct  # 测试构建
   ```

3. **部署阶段**
   ```bash
   cd ..
   ./deploy-github-pages.sh "描述本次更新内容"
   ```

4. **验证阶段**
   - 访问 https://guangyikeji.github.io/ski/
   - 测试关键功能页面
   - 检查移动端适配

## 📞 技术支持

如遇到部署问题，请检查：

1. **构建日志**: 查看npm build输出
2. **Git状态**: `git status` 检查文件状态
3. **远程仓库**: `git remote -v` 验证仓库地址
4. **GitHub Actions**: 查看仓库Actions标签页

---

🎯 **一键部署，轻松更新！**

使用 `./deploy-github-pages.sh` 即可完成从代码修改到网站更新的全流程！