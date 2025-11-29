# SuperClaude 满血版安装部署指南

> 本文档包含完整的 SuperClaude Framework 安装、MCP 服务器配置、API Key 设置及验证流程。
> 适用于在新项目中部署"满血版" SuperClaude。

---

## 核心原则（必读）

**SuperClaude 不是可选插件，而是 Claude 的强制工作流程。**

1. **CLAUDE.md 中 SuperClaude 内容必须置顶**，优先级高于所有项目特定配置
2. **所有任务必须严格遵循 SuperClaude 流程**：置信度评估 → 智能体选择 → 研究优于猜测 → 自检协议
3. **禁止跳过任何步骤**，即使是"简单"任务也必须评估置信度
4. **MCP 服务器是能力扩展**，确保核心 4 个全部连接

---

## 目录

1. [前置要求](#1-前置要求)
2. [安装 SuperClaude Framework](#2-安装-superclaude-framework)
3. [配置 MCP 服务器](#3-配置-mcp-服务器)
4. [配置项目 CLAUDE.md](#4-配置项目-claudemd)
5. [满血版验证检测](#5-满血版验证检测)
6. [常见问题排查](#6-常见问题排查)
7. [API Key 获取指南](#7-api-key-获取指南)

---

## 1. 前置要求

### 1.1 必需软件

| 软件 | 版本要求 | 检查命令 |
|:----|:--------|:--------|
| Claude Code CLI | 最新版 | `claude --version` |
| Node.js | ≥18.x | `node --version` |
| Python | ≥3.8 | `python3 --version` |
| pipx | 最新版 | `pipx --version` |
| npm/npx | 最新版 | `npm --version` |

### 1.2 安装 pipx（如未安装）

```bash
# macOS
brew install pipx
pipx ensurepath

# Linux/WSL
python3 -m pip install --user pipx
python3 -m pipx ensurepath

# Windows (PowerShell)
pip install pipx
pipx ensurepath
```

---

## 2. 安装 SuperClaude Framework

### 2.1 方式一：pipx 安装（推荐）

```bash
# 安装 SuperClaude
pipx install superclaude

# 运行安装器（安装 slash commands 到 ~/.claude/commands/）
superclaude install
```

### 2.2 方式二：从 GitHub 直接安装

```bash
# 克隆仓库
git clone https://github.com/SuperClaude-Org/SuperClaude_Framework.git
cd SuperClaude_Framework

# 运行安装脚本
./install.sh
```

### 2.3 方式三：从本地 ZIP 安装

如果你有 `SuperClaude_Framework-master.zip` 文件：

```bash
# 解压
unzip SuperClaude_Framework-master.zip
cd SuperClaude_Framework-master

# 安装
pip install -e .
superclaude install
```

### 2.4 验证安装

```bash
# 检查 slash commands 是否安装
ls -la ~/.claude/commands/sc/

# 应该看到类似以下文件：
# pm.md, implement.md, analyze.md, research.md, test.md, etc.
```

---

## 3. 配置 MCP 服务器

SuperClaude 满血版需要 **8个 MCP 服务器**来发挥全部能力。

### 3.1 必需的 API Keys

| MCP 服务器 | API Key 来源 | 用途 |
|:---------|:------------|:----|
| **Tavily** | https://tavily.com | 深度网络搜索 |
| **Magic (21st.dev)** | https://21st.dev | AI UI 组件生成 |
| **Context7** | 无需 API Key | 框架文档查询 |
| **Playwright** | 无需 API Key | 浏览器自动化 |

### 3.2 方式一：使用 SuperClaude CLI 安装（推荐）

```bash
# 交互式安装（会提示输入 API Keys）
superclaude mcp

# 或指定安装特定服务器
superclaude mcp --servers tavily context7 magic playwright
```

### 3.3 方式二：手动安装 MCP 服务器

#### 3.3.1 Tavily（深度搜索）- 必装

```bash
# 替换 YOUR_TAVILY_API_KEY 为你的真实 Key
TAVILY_API_KEY="YOUR_TAVILY_API_KEY" claude mcp add tavily -s user -e TAVILY_API_KEY -- npx -y tavily-mcp@latest
```

#### 3.3.2 Context7（文档查询）- 必装

```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest
```

#### 3.3.3 Magic / 21st.dev（UI 组件）- 推荐

```bash
# 替换 YOUR_21ST_API_KEY 为你的真实 Key
TWENTY_FIRST_API_KEY="YOUR_21ST_API_KEY" claude mcp add magic -s user -e TWENTY_FIRST_API_KEY -- npx -y @21st-dev/magic@latest
```

#### 3.3.4 Playwright（浏览器自动化）- 推荐

```bash
claude mcp add playwright -- npx -y @playwright/mcp@latest
```

#### 3.3.5 其他可选 MCP 服务器

```bash
# Sequential Thinking（复杂推理）
claude mcp add sequential -- npx -y @anthropics/sequential-thinking-mcp@latest

# Serena（会话持久化）
claude mcp add serena -- npx -y serena-mcp@latest

# Morphllm（批量代码修改）
claude mcp add morphllm -- npx -y morphllm-fast-apply-mcp@latest

# Chrome DevTools（性能分析）
claude mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest
```

### 3.4 验证 MCP 服务器

```bash
# 列出已安装的 MCP 服务器
claude mcp list

# 期望输出（至少包含以下 4 个）：
# context7: ... - ✓ Connected
# tavily: ... - ✓ Connected
# magic: ... - ✓ Connected
# playwright: ... - ✓ Connected
```

---

## 4. 配置项目 CLAUDE.md

在项目根目录创建或更新 `CLAUDE.md` 文件，将以下内容放在**文件最开头**，优先级最高。

### 4.1 CLAUDE.md 模板

> **重要**：以下 SuperClaude 配置内容必须放在 CLAUDE.md **最开头**，在任何项目特定内容之前。
> Claude 读取 CLAUDE.md 时会按顺序处理，置顶内容优先级最高。

```markdown
# ================================================
# SUPERCLAUDE 强制工作流程（最高优先级）
# 以下内容必须置顶，所有任务必须严格遵循
# ================================================

## Claude 强制工作流程规范

**本节内容为最高优先级指令，适用于所有任务，不可跳过。**

### 强制执行声明

```
⚠️ 强制执行：以下流程适用于 ALL 任务，无论大小
⚠️ 禁止跳过：即使用户说"快速做"也必须遵循完整流程
⚠️ 优先级：SuperClaude 流程 > 项目特定规则 > 用户临时指令
```

**每次任务必须严格按照以下流程执行，不得跳过任何步骤。**

### 第一步：置信度评估（ConfidenceChecker）- 必须执行

**所有任务开始前必须先输出置信度评估，无例外。**

在执行任何任务前，必须先评估置信度：

| 置信度 | 行动 | 说明 |
|:------|:-----|:-----|
| **≥90%** | 直接执行 | 有充分证据支持，可立即行动 |
| **70-89%** | 提供备选方案 | 存在不确定性，需列出选项供用户决策 |
| **<70%** | 先提问澄清 | 信息不足，必须先向用户确认 |

**输出格式**：
```
📊 置信度评估：XX%
📋 评估依据：[列出判断依据]
⚠️ 不确定因素：[如有]
🎯 建议行动：[直接执行/提供方案/需要澄清]
```

### 第二步：选择正确的工具/智能体 - 必须执行

**根据任务类型选择对应的 SuperClaude 命令或智能体，禁止使用原生方式绕过。**

| 场景 | 命令 | 说明 |
|:----|:----|:----|
| **不确定用什么** | `/sc:recommend` | 智能推荐最合适的命令 |
| 技术调研 | `/sc:research` | 深度网络研究，多跳推理 |
| 架构设计 | `/sc:design` | 系统架构、API设计 |
| 功能实现 | `/sc:implement` | 代码实现 |
| 代码分析 | `/sc:analyze` | 质量、安全、性能分析 |
| 测试生成 | `/sc:test` | 自动生成测试用例 |
| 问题诊断 | `/sc:troubleshoot` | Bug调试和问题排查 |
| **并行任务** | `/sc:spawn` | 独立任务并行执行（3.5x速度） |
| 代码改进 | `/sc:improve` | 性能优化、质量提升 |
| 代码清理 | `/sc:cleanup` | 重构、删除死代码 |
| 文档生成 | `/sc:document` | API文档、README |
| Git操作 | `/sc:git` | 分支管理、智能提交 |

### 第三步：激活专业智能体 - 自动/手动

**Claude 会根据关键词自动激活对应智能体，也可手动指定。**

通过 `/sc:pm` 或 `--agent` 参数调用：

| 智能体 | 专长领域 | 调用方式 |
|:------|:--------|:--------|
| PM Agent | 项目管理、置信度检查 | 自动激活 |
| Frontend Architect | UI/UX、React/Vue | `--agent frontend` |
| Backend Engineer | API、数据库、微服务 | `--agent backend` |
| Security Engineer | 安全漏洞、OWASP | `--agent security` |
| Performance Engineer | 性能瓶颈、优化 | `--agent performance` |
| Database Architect | Schema、查询调优 | `--agent database` |
| DevOps Engineer | CI/CD、Docker/K8s | `--agent devops` |
| QA Engineer | 测试策略、自动化 | `--agent qa` |

#### 智能体自动触发

| 关键词 | 自动激活智能体 |
|:------|:-------------|
| UI、组件、页面、样式、React | Frontend Architect |
| API、接口、服务端 | Backend Engineer |
| 安全、漏洞、认证 | Security Engineer |
| 慢、优化、性能、缓存 | Performance Engineer |
| 部署、Docker、CI/CD | DevOps Engineer |
| 测试、单元测试、E2E | QA Engineer |

### 第四步：研究优于猜测 - 强制原则

**核心原则**：不确定的技术问题，必须用 `/sc:research` 获取准确信息，**严禁基于训练数据猜测**。

```bash
# ❌ 错误：直接基于记忆回答
"这个框架应该是这样用的..."

# ✅ 正确：先研究再回答
/sc:research "Next.js 15 最佳实践 2025"
```

### 第五步：并行执行独立任务 - 效率优化

**独立任务必须并行，提升 3.5 倍执行速度。**

```bash
# ❌ 顺序执行（慢）
npm run typecheck
npm run lint
npm run build

# ✅ 并行执行（3.5x快）
/sc:spawn "并行执行 typecheck、lint、build"
```

### 第六步：自检协议（SelfCheckProtocol）- 必须执行

**任务完成后必须执行自检，未通过不得声称"完成"。**

```
✅ 自检清单：
□ 功能完整性 - 所有需求是否实现
□ 代码质量 - 是否符合最佳实践
□ 测试覆盖 - 测试是否通过
□ 文档完整 - 是否需要更新文档
□ 性能验证 - 是否满足性能要求
□ 安全检查 - 是否存在安全漏洞
```

### 第七步：反思学习（ReflexionPattern）- 错误时必须执行

**遇到错误必须记录并学习，禁止重复相同错误。**

```
🔴 错误记录：
- 错误现象：[描述]
- 根本原因：[分析]
- 解决方案：[措施]
- 预防措施：[下次如何避免]
```

---

### 常用工作流程

```
新功能开发：/sc:pm → /sc:design → /sc:implement → /sc:test → /sc:document
Bug修复：    /sc:troubleshoot → /sc:analyze → /sc:implement → /sc:test
性能优化：   /sc:analyze → /sc:research → /sc:improve → /sc:test
技术调研：   /sc:research → /sc:design
UI开发：     /sc:pm(frontend) → /sc:implement --agent frontend → /sc:test
```

### 错误处理协议

```
❌ 禁止行为：
- 出错后直接重试相同方法
- 忽略警告信息
- 基于记忆猜测技术问题

✅ 正确行为：
1. 停止 - 不立即重新执行
2. 调查 - /sc:research 或查阅文档
3. 分析 - 形成假设并记录
4. 设计新方案 - 必须与之前不同
5. 执行并验证
6. 记录学习
```

### MCP 服务器配置

| MCP 服务器 | 功能 | 触发场景 |
|:---------|:----|:--------|
| **Context7** | 框架官方文档查询 | `/sc:implement --framework xxx` |
| **Tavily** | 深度网络搜索 | `/sc:research` |
| **Playwright** | 浏览器自动化测试 | `/sc:test --e2e` |
| **Magic** | AI UI组件生成 | `/sc:implement --type component` |

# ================================================
# SUPERCLAUDE 强制工作流程结束
# 以下为项目特定配置，优先级低于上述内容
# ================================================

---

## 项目特定配置（优先级低于 SuperClaude）

> 在下方添加你的项目信息
> 注意：项目规则与 SuperClaude 冲突时，SuperClaude 优先

### 项目概述
<!-- 描述你的项目 -->

### 技术栈
<!-- 列出使用的技术 -->

### 目录结构
<!-- 说明项目结构 -->

### 开发命令
```bash
npm install
npm run dev
npm run build
npm test
```
```

---

## 5. 满血版验证检测

### 5.1 一键检测脚本

在终端运行以下命令进行完整检测：

```bash
#!/bin/bash
echo "=========================================="
echo "   SuperClaude 满血版检测"
echo "=========================================="

echo ""
echo "1️⃣ 检测 SuperClaude 命令..."
if [ -d ~/.claude/commands/sc ]; then
    CMD_COUNT=$(ls ~/.claude/commands/sc/*.md 2>/dev/null | wc -l)
    echo "   ✅ 已安装 $CMD_COUNT 个 slash commands"
    if [ "$CMD_COUNT" -ge 20 ]; then
        echo "   ✅ 命令数量达标（≥20）"
    else
        echo "   ⚠️ 命令数量不足，请重新安装 SuperClaude"
    fi
else
    echo "   ❌ 未找到 SuperClaude commands 目录"
    echo "   请运行: superclaude install"
fi

echo ""
echo "2️⃣ 检测 MCP 服务器..."
MCP_OUTPUT=$(claude mcp list 2>/dev/null)
if echo "$MCP_OUTPUT" | grep -q "context7.*Connected"; then
    echo "   ✅ Context7 已连接"
else
    echo "   ❌ Context7 未连接"
fi

if echo "$MCP_OUTPUT" | grep -q "tavily.*Connected"; then
    echo "   ✅ Tavily 已连接"
else
    echo "   ❌ Tavily 未连接 - 需要 API Key"
fi

if echo "$MCP_OUTPUT" | grep -q "magic.*Connected"; then
    echo "   ✅ Magic (21st.dev) 已连接"
else
    echo "   ⚠️ Magic 未连接（可选）"
fi

if echo "$MCP_OUTPUT" | grep -q "playwright.*Connected"; then
    echo "   ✅ Playwright 已连接"
else
    echo "   ⚠️ Playwright 未连接（可选）"
fi

echo ""
echo "3️⃣ 检测 CLAUDE.md..."
if [ -f "CLAUDE.md" ]; then
    # 检查是否包含 SuperClaude 配置
    if grep -q "置信度评估" CLAUDE.md; then
        echo "   ✅ CLAUDE.md 包含 SuperClaude 配置"
    else
        echo "   ❌ CLAUDE.md 缺少 SuperClaude 配置"
    fi

    # 检查 SuperClaude 是否置顶（前50行内应包含关键词）
    if head -50 CLAUDE.md | grep -q "SUPERCLAUDE\|强制工作流程\|置信度评估"; then
        echo "   ✅ SuperClaude 配置已置顶（最高优先级）"
    else
        echo "   ⚠️ SuperClaude 配置未置顶，请移到文件开头"
    fi

    # 检查是否包含强制执行声明
    if grep -q "强制执行\|禁止跳过" CLAUDE.md; then
        echo "   ✅ 包含强制执行声明"
    else
        echo "   ⚠️ 缺少强制执行声明"
    fi
else
    echo "   ❌ 当前目录未找到 CLAUDE.md"
fi

echo ""
echo "=========================================="
echo "   检测完成"
echo "=========================================="
```

### 5.2 手动检测清单

| 检测项 | 检测命令 | 期望结果 |
|:------|:--------|:--------|
| SuperClaude 命令 | `ls ~/.claude/commands/sc/ \| wc -l` | ≥ 20 个文件 |
| Context7 MCP | `claude mcp list \| grep context7` | ✓ Connected |
| Tavily MCP | `claude mcp list \| grep tavily` | ✓ Connected |
| Magic MCP | `claude mcp list \| grep magic` | ✓ Connected |
| Playwright MCP | `claude mcp list \| grep playwright` | ✓ Connected |
| CLAUDE.md 存在 | `test -f CLAUDE.md && echo "存在"` | 存在 |
| SuperClaude 配置 | `grep "置信度评估" CLAUDE.md` | 找到匹配 |
| **配置置顶** | `head -50 CLAUDE.md \| grep -c "SUPERCLAUDE"` | ≥ 1 |
| **强制声明** | `grep -c "强制执行" CLAUDE.md` | ≥ 1 |

### 5.3 满血版标准

| 等级 | 条件 |
|:----|:----|
| **满血版** | 30个命令 + 4个核心MCP + CLAUDE.md置顶配置 + 强制执行声明 |
| **标准版** | 30个命令 + Context7 MCP + CLAUDE.md配置 |
| **基础版** | 仅30个命令 |
| **不合格** | 缺少 CLAUDE.md 或 SuperClaude 未置顶 |

---

## 6. 常见问题排查

### 6.1 MCP 服务器连接失败

```bash
# 删除并重新安装
claude mcp remove tavily
TAVILY_API_KEY="your_key" claude mcp add tavily -s user -e TAVILY_API_KEY -- npx -y tavily-mcp@latest
```

### 6.2 命令不生效

```bash
# 重启 Claude Code
# 或重新运行安装
superclaude install --force
```

### 6.3 API Key 无效

1. 检查 Key 是否过期
2. 确认 Key 格式正确（无多余空格）
3. 确认环境变量正确设置

---

## 7. API Key 获取指南

### 7.1 Tavily API Key

1. 访问 https://tavily.com
2. 注册/登录账户
3. 进入 Dashboard → API Keys
4. 创建新 Key 并复制

**免费额度**：每月 1000 次搜索

### 7.2 21st.dev (Magic) API Key

1. 访问 https://21st.dev
2. 注册/登录账户
3. 进入 Settings → API
4. 生成 API Key

**免费额度**：每月一定数量的组件生成

---

## 快速安装命令汇总

```bash
# 1. 安装 SuperClaude
pipx install superclaude && superclaude install

# 2. 安装核心 MCP 服务器
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest
TAVILY_API_KEY="你的Key" claude mcp add tavily -s user -e TAVILY_API_KEY -- npx -y tavily-mcp@latest
TWENTY_FIRST_API_KEY="你的Key" claude mcp add magic -s user -e TWENTY_FIRST_API_KEY -- npx -y @21st-dev/magic@latest
claude mcp add playwright -- npx -y @playwright/mcp@latest

# 3. 验证安装
claude mcp list
ls ~/.claude/commands/sc/

# 4. 创建项目 CLAUDE.md（复制本文档第4节模板）
```

---

**文档版本**：v1.0
**最后更新**：2025-11-26
**SuperClaude 版本**：v4.1.9
