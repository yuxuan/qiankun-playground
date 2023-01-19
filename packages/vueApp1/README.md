# #name#

#description#

## 配置文件说明

```sh
.browserlistrc   # 转译的目标浏览器范围，会被 Babel、PostCSS 等工具依赖
.eslintrc.js     # ESLint 配置，默认启用 @ecomfe/eslint-config 并开启 Vue/TS 支持
.stylelintrc     # Stylelint 配置，默认启用 @ecomfe/stylelint-config
.huskyrc         # Husky 配置，默认在 git commit 时调起 lint-staged
.lintstagedrc    # lint-staged 配置，默认在 git commit 前修正代码风格问题
babel.config.js  # Babel 配置，Vue CLI 默认生成
vue.config.js    # Vue CLI 配置，默认开启了 Less 的内联 JS 功能
```

## 源码目录结构

<请根据项目实际情况描述>

## 开发命令

### 本地开发

```sh
npm install
npm run serve
```

### 构建

```sh
npm run build
```

### 代码检查

#### 仅检查

```sh
npm run lint
```

#### 检查并修复

```sh
npm run lint:fix
```
