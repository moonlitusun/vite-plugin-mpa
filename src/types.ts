export interface PageInfo {
  title: string;
  entry: string;
  template: string;
}

export type Pages = Record<string, PageInfo>;
