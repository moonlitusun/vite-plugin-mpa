# Options.generateNotFoundHtml

:::warning
`Only effective in development environment`
:::

Generate a 404 page. When a user visits a non-existent page, this function will be called to generate a 404 page.

- Required: No
- Type: `(rawPages: string) => string`

## Example:

```ts
generateNotFoundHtml: (rawPages: string) => {
  return `<div>
  <h1>Page not found, you can go to:</h1>
  <ul>${rawPages}</ul>
  </div>`;
}
```
