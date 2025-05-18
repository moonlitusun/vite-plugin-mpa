import type { ResolvedConfig, ViteDevServer } from 'vite';

import { loadHtmlContent } from '@/load-html-content';

import type { Pages } from '@/types';

export interface Options {
  pages: Pages;
}

export default function vitePluginMPA(options: Options) {
  let config: ResolvedConfig;

  return {
    name: 'vite-plugin-mpa',
    config() {
      return {
        appType: 'custom',
      };
    },
    configResolved(resolvedConfig: ResolvedConfig) {
      config = resolvedConfig;
      console.log(config, 'config');
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        const isHtmlRequest = req.headers.accept?.includes('text/html');
        const { pages } = options;

        if (!isHtmlRequest) {
          return next();
        }

        const { originalUrl } = req;
        const _reqUrl = originalUrl.includes('.html')
          ? originalUrl
          : '/index.html';
        const pageName = _reqUrl.match(/\/(.*?)\.html/)?.[1] ?? '';

        if (pages[pageName]) {
          const rawHtmlContent = await loadHtmlContent(pageName, pages, {
            isDev: true,
          });

          if (!rawHtmlContent) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('Page not found');
            return;
          }
          const htmlContent = await server.transformIndexHtml(
            _reqUrl,
            rawHtmlContent,
            _reqUrl
          );

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(htmlContent);
        } else {
          let list = '';
          for (const page of Object.keys(pages)) {
            const { title } = pages[page];
            list += `<li><a href="/${page}.html">${title}: ${page}</a></li>`;
          }
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(`<div>
              <h1>Page not found, you can go to:</h1>
              <ul>${list}</ul>
              </div>`);
        }
      });
    },
  };
}
