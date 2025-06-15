# 使用

## 安装

```bash
# 使用pnpm
pnpm add @sunday-sky/vite-plugin-mpa

# 或bun
bun add @sunday-sky/vite-plugin-mpa

# 或npm
npm install @sunday-sky/vite-plugin-mpa

# 或yarn
yarn add @sunday-sky/vite-plugin-mpa
```

## 配置

```ts
import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
import vitePluginMPA from '@sunday-sky/vite-plugin-mpa';

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

## 使用

启动`vite serve`，访问`http://localhost:5173/index.html`，即可看到页面。
