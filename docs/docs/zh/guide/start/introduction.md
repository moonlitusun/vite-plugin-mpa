# 介绍

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
