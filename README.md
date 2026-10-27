# owopxiaoy 的个人博客

> 持续学习，不断向上。记录学习过程、项目实践与生活中的小想法。

**[在线浏览博客](https://owopxiaoy.github.io/)** · **[文章归档](https://owopxiaoy.github.io/archive/)** · **[RSS 订阅](https://owopxiaoy.github.io/rss.xml)**

## 关于项目

这是 owopxiaoy 的个人博客，基于 [saicaca/Fuwari](https://github.com/saicaca/fuwari) 开源模板进行个性化改造。Fuwari 是使用 Astro 构建的静态博客模板，本仓库在保留其布局与基础功能的同时，加入个人内容和视觉调整。

博客用于记录学习笔记、技术探索、项目实践和日常随笔。文章使用 Markdown 编写，通过 GitHub Actions 自动构建，并由 GitHub Pages 发布。

## 个性化改造

- 配置中文界面、个人资料、头像与首页横幅。
- 调整首页横幅高度，给文章列表留出更多展示空间。
- 清理模板示例文章，加入中文 Markdown 入门文章。
- 添加蓝色细雨效果与开关；雨层不拦截点击，移动端减少雨滴数量，并遵循系统的“减少动态效果”设置。
- 修复主题切换组件与归档列表的类型问题，统一代码检查器版本。
- 配置个人根站点地址及 GitHub Pages 自动发布流程，构建时生成搜索索引。

以下功能来自 Fuwari 模板：响应式布局、明暗主题、主题色调整、文章分类与标签、文章目录、代码高亮、页面过渡、RSS 和站点地图。

## 技术组成

| 技术 | 用途 |
| --- | --- |
| Astro | 页面组织与静态网站生成 |
| Svelte | 搜索、主题切换等交互组件 |
| TypeScript | 类型检查与开发支持 |
| Tailwind CSS | 界面样式 |
| Markdown | 文章内容编写 |
| Pagefind | 构建时生成搜索索引，供浏览器搜索 |
| pnpm | 依赖管理与命令执行 |
| GitHub Actions / GitHub Pages | 自动构建与静态网站托管 |

## 项目结构

```text
.
├── .github/workflows/       # 检查、构建和自动部署流程
├── public/                 # 原样发布的静态资源
├── src/
│   ├── assets/images/      # 头像、横幅等图片
│   ├── components/         # 导航、页脚、文章卡片等组件
│   │   └── RainEffect.astro # 下雨特效及开关
│   ├── constants/          # 横幅高度等常量
│   ├── content/
│   │   └── posts/          # Markdown 文章
│   ├── i18n/               # 多语言文案
│   ├── layouts/            # 页面整体布局
│   ├── pages/              # 首页、归档、文章页等页面入口
│   ├── plugins/            # Markdown 与代码展示扩展
│   ├── styles/             # 样式文件
│   ├── types/              # 类型定义
│   ├── utils/              # 内容、日期和链接等工具
│   └── config.ts           # 博客名称、个人信息、导航和主题配置
├── astro.config.mjs        # 网站地址及 Astro 配置
├── package.json            # 项目依赖与命令
└── pnpm-lock.yaml          # 依赖锁定文件
```

`dist/` 是构建生成的网站目录，`node_modules/` 是本地安装的依赖目录，两者均不需要提交到仓库。

## 本地运行

使用 Node.js 22，与部署流程保持一致；项目指定的包管理器为 pnpm 9.14.4。

```sh
npm install -g pnpm@9.14.4
git clone https://github.com/owopxiaoy/owopxiaoy.github.io.git
cd owopxiaoy.github.io
pnpm install
pnpm dev
```

打开终端显示的本地地址，通常为 `http://localhost:4321/`。已经克隆到本地的项目直接进入原文件夹即可，不需要重新克隆。

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 启动本地开发预览 |
| `pnpm new-post <filename>` | 创建文章 |
| `pnpm check` | 执行 Astro 代码检查 |
| `pnpm build` | 构建网站并生成 Pagefind 搜索索引 |
| `pnpm preview` | 预览构建后的正式版本 |
| `pnpm format` | 格式化源文件，会修改文件 |

搜索索引在构建阶段生成，验证正式搜索功能请先执行 `pnpm build`，再执行 `pnpm preview`。

## 写文章与发布

### 1. 创建文章

在项目目录中执行：

```sh
pnpm new-post robot-notes
```

在 `src/content/posts/` 中编辑新文件。建议文件名使用英文短横线命名，文章标题可以使用中文。

### 2. 填写文章信息

```markdown
---
title: "我的机器人项目笔记"
published: 2026-10-28
description: "记录一次调试经历，以及解决问题的过程。"
image: ""
tags: ["机器人", "学习笔记"]
category: "项目实践"
draft: true
lang: "zh_CN"
---

今天遇到了一个值得记录的问题。

## 问题与现象

描述问题出现的条件。

## 解决过程

记录尝试的方法和验证结果。

## 我的收获

总结经验与下一步计划。
```

`tags` 支持多个标签，`category` 表示分类。写作中使用 `draft: true`，准备公开时改为 `false`。日期字段用于文章信息展示，不作为定时发布功能使用。

### 3. 添加图片

例如将文章图片放在 `src/content/posts/images/robot-test.jpg`，在同层文章中引用：

```markdown
![机器人调试现场](./images/robot-test.jpg)
```

文章顶部的 `image` 字段用于封面，不需要封面时保持为空。

### 4. 预览并检查

```sh
pnpm dev
```

检查标题、正文排版、图片与链接。需要预览草稿列表时，可临时将 `draft` 改为 `false`；未准备发布的文章应在提交前改回 `true`。

正式发布前执行：

```sh
pnpm check
pnpm build
```

### 5. 提交并发布

先检查改动，再添加本次文章及相关图片：

```sh
git status
git add src/content/posts/robot-notes.md
# 有新增图片时，按实际路径添加：
# git add src/content/posts/images/robot-test.jpg
git commit -m "发布机器人项目笔记"
git push origin main
```

推送后，在仓库的 [Actions 页面](https://github.com/owopxiaoy/owopxiaoy.github.io/actions) 查看 **Deploy blog to GitHub Pages**。待构建与部署成功后，访问线上博客确认更新。

修改旧文章、删除文章、更换图片，也遵循“修改 → 检查 → 提交 → 推送”的流程。

## 部署原理

```text
本地 Markdown 与网站源码
          ↓ git push
GitHub 仓库 main 分支
          ↓ GitHub Actions
安装依赖 → pnpm build → 生成网页与搜索索引
          ↓ 上传 dist 构建产物
GitHub Pages
          ↓
https://owopxiaoy.github.io/
```

部署配置位于 `.github/workflows/deploy.yml`。它使用 Node.js 22，通过锁定文件安装依赖，构建完成后将 `dist/` 发布到 GitHub Pages。

当前站点配置：

```js
site: "https://owopxiaoy.github.io",
base: "/",
```

GitHub 仓库的 **Settings → Pages → Build and deployment → Source** 应选择 **GitHub Actions**。推送到 `main` 会自动触发部署，也可以在 Actions 页面手动运行。

本站是静态博客：内容在构建时生成，不依赖常驻应用后端或文章数据库。服务器由 GitHub Pages 提供和维护，因此无需自行购买服务器，也无需让本地电脑持续开机。交互和下雨动画在访客浏览器中执行。

## 常用修改位置

| 想修改的内容 | 对应文件 |
| --- | --- |
| 名称、语言、个人简介、社交链接 | `src/config.ts` |
| 横幅与头像 | `src/assets/images/`，并同步修改 `src/config.ts` 中的路径 |
| 横幅高度 | `src/constants/constants.ts` |
| 页脚文字 | `src/components/Footer.astro` |
| 雨滴颜色、数量与开关样式 | `src/components/RainEffect.astro` |
| 文章分类、标签、封面与简介 | 对应文章顶部的 Frontmatter |
| 网站域名和部署路径 | `astro.config.mjs` |

## 致谢与许可

感谢 [saicaca](https://github.com/saicaca) 与 [Fuwari](https://github.com/saicaca/fuwari) 的贡献者提供模板，也感谢 Astro、Svelte、Tailwind CSS 和 Pagefind 等开源项目。

仓库代码沿用 [MIT License](./LICENSE)，保留原项目许可声明。博客文章的许可说明以文章页面为准；第三方图片、字体及其他素材的权利归各自权利人所有，不因本仓库的代码许可而一并授权。
