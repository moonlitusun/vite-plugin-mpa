# Vite-plugin-mpa

[English](./README.md) | 中文

## 说明

本插件为vite提供了真正的MPA功能，抛去了vite MP的种种限制

**无论你的入口文件/模版文件在哪里，都可以通过根路由访问页面，非常适合嵌入式页面开发。**

```plaintext
http://localhost:5173/index.html
http://localhost:5173/about.html
...
```

🙅🏻‍♀️：~~无需再到处找你的MPA页面地址到底是什么。~~

去试试[demo](https://codesandbox.io/p/devbox/2lrppj)。

## 特性

- 真正的**MPA**。
- 按需加载页面，无论你启动了多少个页面，只会加载当前页面。
- 支持复用模版文件。
- 支持404页面。
- 支持`vue`，`react`...等所有vite支持的框架。

## 快速开始

### 安装

```bash
# 使用pnpm
pnpm add @sundaysky/vite-plugin-mpa

# 或bun
bun add @sundaysky/vite-plugin-mpa

# 或npm
npm install @sundaysky/vite-plugin-mpa

# 或yarn
yarn add @sundaysky/vite-plugin-mpa
```

### 配置

```ts
import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
import vitePluginMPA from '@sundaysky/vite-plugin-mpa';

// https://vite.dev/config/
export default defineConfig({
  // ...
  plugins: [
    // ...
    vitePluginMPA({
      // 配置你的页面
      pages: {
        index: {
          title: 'index',
          entry: 'src/pages/index/main.ts',
          template: 'template/index.html',
        },
        index2: {
          title: 'index2',
          entry: 'src/pages/index2/main.ts',
          template: 'template/index2.html',
        },
      },
    }) as PluginOption,
  ],
});
```

### 使用

启动`vite serve`，访问`http://localhost:5173/index.html`，即可看到页面。

## 配置项

```ts
import type { Options } from '@sundaysky/vite-plugin-mpa';
```

即可看到所有配置项的类型定义。

### `options.pages`

- 必填：是
- 类型：`Record<string, PageInfo>`
- 描述：页面配置，key为页面名称，value为页面配置。
- 类型定义：

```ts
interface PageInfo {
  title: string;
  entry: string;
  template: string;
}

type Pages = Record<string, PageInfo>;
```

- 示例：

```ts
pages: {
  index: {
    title: 'index',
    entry: 'src/pages/index/main.ts',
    template: 'template/index.html',
  },
  index2: {
    title: 'index2',
    entry: 'src/pages/index2/main.ts',
    template: 'template/index2.html',
  },
}
```

#### `options[page].title`

- 必填：是
- 类型：`string`
- 描述：页面标题。

这个地址会显示在浏览器标签上。

#### `options[page].entry`

- 必填：是
- 类型：`string`
- 描述：页面入口文件。
- 注意：

**要使用相对路径**，例如：

```ts
entry: 'src/pages/index/main.ts',
```

#### `options[page].template`

- 必填：否
- 类型：`string`
- 描述：页面模版文件。
- 注意：

**为了复用模版，所以会自动把`options[page].entry`插入到模版中，所以模版内不需要带入口文件和`title`标签**

一个最简单的示例文件为：

```html
<!DOCTYPE html>
<html>
  <head>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
```

### `options.generateNotFoundHtml`

`仅在开发环境有效`

- 必填：否
- 类型：`(rawPages: string) => string`
- 描述：生成404页面，当用户访问一个不存在的页面时，会调用这个函数生成404页面。
- 示例：

```ts
generateNotFoundHtml: (rawPages: string) => {
  return `<div>
  <h1>Page not found, you can go to:</h1>
  <ul>${rawPages}</ul>
  </div>`;
}
```
