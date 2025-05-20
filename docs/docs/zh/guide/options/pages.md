# `options.pages`

页面配置，key为页面名称，value为页面配置。

- 必填：是
- 类型：`Record<string, PageInfo>`

## 类型定义

```ts
interface PageInfo {
  title: string;
  entry: string;
  template: string;
}

type Pages = Record<string, PageInfo>;
```

## 示例

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

## `page.title`

这个标题会显示在浏览器标签上。

- 必填：是
- 类型：`string`

## `page.entry`

页面入口文件。

- 必填：是
- 类型：`string`
- 注意：

**使用相对路径**，例如：

```ts
entry: 'src/pages/index/main.ts',
```

## `page.template`

 Page template file.

- Required: No
- Type: `string`
- Note:

:::warning
**为了复用模版，所以会自动把`options[page].entry`插入到模版中，所以模版内不需要带入口文件和`title`标签**
:::

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
