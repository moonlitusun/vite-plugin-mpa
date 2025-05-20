# Options.generateNotFoundHtml

:::warning
`仅在开发环境有效`
:::

- 必填：否
- 类型：`(rawPages: string) => string`

## 示例：

```ts
generateNotFoundHtml: (rawPages: string) => {
  return `<div>
  <h1>Page not found, you can go to:</h1>
  <ul>${rawPages}</ul>
  </div>`;
}
```
