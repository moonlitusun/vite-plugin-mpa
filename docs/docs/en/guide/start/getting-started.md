# Quick Start

## Installation

```bash
# Using pnpm
pnpm add @sunday-sky/vite-plugin-mpa

# Or bun
bun add @sunday-sky/vite-plugin-mpa

# Or npm
npm install @sunday-sky/vite-plugin-mpa

# Or yarn
yarn add @sunday-sky/vite-plugin-mpa
```

## Configuration

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
      // Configure your pages
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

## Usage

Start `vite serve`, visit `http://localhost:5173/index.html`, and you'll see the page.
