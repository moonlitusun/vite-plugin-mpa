# Vite-plugin-mpa

English | [中文](./README-CN.md)

## Description

This plugin provides true MPA functionality for Vite, eliminating various limitations of Vite MP.

**No matter where your entry files/template files are located, you can access pages through the root route, making it perfect for embedded page development.**

```plaintext
http://localhost:5173/index.html
http://localhost:5173/about.html
...
```

🙅🏻‍♀️: ~~No need to search everywhere for your MPA page addresses.~~

Try the [demo](https://codesandbox.io/p/devbox/2lrppj).

## Features

- True **MPA**.
- Load pages on demand - no matter how many pages you have, only the current page will be loaded.
- Support for reusing template files.
- Support for 404 pages.
- Support for `vue`, `react`...and all frameworks supported by Vite.

## Quick Start

### Installation

```bash
# Using pnpm
pnpm add @sundaysky/vite-plugin-mpa

# Or bun
bun add @sundaysky/vite-plugin-mpa

# Or npm
npm install @sundaysky/vite-plugin-mpa

# Or yarn
yarn add @sundaysky/vite-plugin-mpa
```

### Configuration

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

### Usage

Start `vite serve`, visit `http://localhost:5173/index.html`, and you'll see the page.

## Configuration Options

```ts
import type { Options } from '@sundaysky/vite-plugin-mpa';
```

You can see all configuration option type definitions.

### `options.pages`

- Required: Yes
- Type: `Record<string, PageInfo>`
- Description: Page configuration, where key is the page name and value is the page configuration.
- Type definition:

```ts
interface PageInfo {
  title: string;
  entry: string;
  template: string;
}

type Pages = Record<string, PageInfo>;
```

- Example:

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

- Required: Yes
- Type: `string`
- Description: Page title.

This title will be displayed in the browser tab.

#### `options[page].entry`

- Required: Yes
- Type: `string`
- Description: Page entry file.
- Note:

**Use relative paths**, for example:

```ts
entry: 'src/pages/index/main.ts',
```

#### `options[page].template`

- Required: No
- Type: `string`
- Description: Page template file.
- Note:

**To reuse templates, `options[page].entry` will be automatically inserted into the template, so the template doesn't need to include the entry file and `title` tag**

A minimal example file would be:

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

`Only effective in development environment`

- Required: No
- Type: `(rawPages: string) => string`
- Description: Generate a 404 page. When a user visits a non-existent page, this function will be called to generate a 404 page.
- Example:

```ts
generateNotFoundHtml: (rawPages: string) => {
  return `<div>
  <h1>Page not found, you can go to:</h1>
  <ul>${rawPages}</ul>
  </div>`;
}
```
