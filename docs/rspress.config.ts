import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Vite Plugin MPA',
  icon: '/logo.svg',
  base: process.env.PUBLIC_PATH || '/',
  lang: 'en',
  logo: {
    light: '/logo.svg',
    dark: '/logo.svg',
  },
  route: {
    cleanUrls: true,
    exclude: ['**/fragments/**'],
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/moonlitusun/vite-plugin-mpa',
      },
    ],
    locales: [
      {
        lang: 'zh',
        label: '简体中文',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/moonlitusun/vite-plugin-mpa/tree/main/docs',
          text: '📝 在 GitHub 上编辑此页',
        },
        overview: {
          filterNameText: '过滤',
          filterPlaceholderText: '输入关键词',
          filterNoResultText: '未找到匹配的 API',
        },
      },
      {
        lang: 'en',
        label: 'English',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/moonlitusun/vite-plugin-mpa/tree/main/docs',
          text: '📝 Edit this page on GitHub',
        },
      },
    ],
  },
});
