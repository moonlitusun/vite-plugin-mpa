# `options.pages`

Page configuration, where key is the page name and value is the page configuration.

- Required: Yes
- Type: `Record<string, PageInfo>`

## Type definition

```ts
interface PageInfo {
  title: string;
  entry: string;
  template: string;
}

type Pages = Record<string, PageInfo>;
```

## Example

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

## `page.title`

This title will be displayed in the browser tab.

- Required: Yes
- Type: `string`

## `page.entry`

Page entry file.

- Required: Yes
- Type: `string`
- Note:

**Use relative paths**, for example:

```ts
entry: 'src/pages/index/main.ts',
```

## `page.template`

 Page template file.

- Required: No
- Type: `string`
- Note:

:::warning
**To reuse templates, `page.entry` will be automatically inserted into the template, so the template doesn't need to include the entry file and `title` tag**
:::

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
