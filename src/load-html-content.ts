import { readFileSync, existsSync } from 'node:fs';
import { isUndefined } from 'lodash-es';
import type { Pages } from '@/types';
import { defaultTemplate } from '@/constants/default-template';

const templateContentCache = new Map<string, string>();
const entryContentCache = new Map<string, string>();

export const loadHtmlContent = async (
  pageName: string,
  pages: Pages,
  { isDev = true }: { isDev?: boolean } = {}
) => {
  const pageEntryInfo = pages[pageName];
  if (!pageEntryInfo) return null;

  const { entry, template, title } = pageEntryInfo;

  if (isDev) {
    const entryContent = entryContentCache.get(entry);
    if (entryContent) return entryContent;
  }

  let htmlContent = templateContentCache.get(template);
  if (!htmlContent) {
    if (existsSync(template)) {
      htmlContent = readFileSync(template, 'utf-8');
    } else {
      htmlContent = defaultTemplate;
    }
    templateContentCache.set(template, htmlContent || '');
  }

  htmlContent = htmlContent.replace(
    '</body>',
    `<script src="${entry.replace(/\\/g, '/')}" type="module"></script></body>`
  );
  if (!isUndefined(title)) {
    htmlContent = htmlContent.replace(
      '<head>',
      `<head><title>${title}</title>`
    );
  }

  if (isDev) {
    entryContentCache.set(entry, htmlContent);
  }

  return htmlContent;
};
