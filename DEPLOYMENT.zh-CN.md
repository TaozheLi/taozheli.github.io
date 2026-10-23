# 个人网站草稿与 GitHub Pages 部署

基于 Brittany Chiang v4，保留 MIT LICENSE 和作者署名。已根据用户提供的简历填入个人信息、教育经历、6 个精选项目、3 篇论文和获奖信息。GitHub 账号为 TaozheLi。

## 内容

修改 `src/profile.json`：

- `name`：姓名
- `headline`：首页标题
- `intro`：个人简介
- `email`：联系邮箱
- `skills`：技能字符串数组
- `experience`：对象数组，每项包含 `role`、`organization`、`dates`、`description`
- `projects`：对象数组，每项包含 `title`、`description`、`contribution`、`tech`（数组）、`code`、`demo`
- `publications`：对象数组，每项包含 `title`、`authors`、`venue`、`year`、`summary`、`pdf`、`code`、`project`

已移除上游博客/归档页面及生成逻辑，删除上游简历和课件，并替换个人 logo、favicon 源图和分享图片。已清理未使用的上游博客、项目示例、图片和栏目组件。原始简历 PDF 未公开。

## 部署

1. 在 GitHub 创建公开仓库：`你的用户名.github.io`。如已存在，先检查并备份原有内容。
2. 将本目录源码推送到仓库 `main` 分支。
3. 打开 Settings → Pages → Build and deployment → Source，选择 GitHub Actions。
4. 在 Actions 页面查看 Deploy GitHub Pages 工作流，成功后访问 `https://你的用户名.github.io`。

工作流构建 Gatsby 并部署 `public/`。此配置针对根域名个人主页；子目录项目站点需另行调整资源路径与链接。

## 本地运行

此模板使用旧版 Gatsby 3，当前配置采用 Node.js 16.20.2 兼容运行。该 Node.js 版本已停止维护，建议后续升级模板依赖；不应直接用当前最新 Node.js 构建。

```sh
yarn install --frozen-lockfile
yarn develop
```

生产构建：`yarn build`。

已确认显示姓名为 Taozhe Li，邮箱为 Taozhe.Li-1@ou.edu。
