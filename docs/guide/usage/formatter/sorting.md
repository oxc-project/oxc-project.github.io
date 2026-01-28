---
url: /docs/guide/usage/formatter/sorting.md
---
# Sorting

Oxfmt includes sorting features for imports, Tailwind classes, and package.json.

* [Sort imports](#sort-imports)
* [Tailwind CSS class sorting](#tailwind-css-class-sorting)
* [Sort package.json fields](#sort-package-json-fields)

## Sort imports

:::warning
For progress, see [tracking issue](https://github.com/oxc-project/oxc/issues/14253).
:::

Based on [eslint-plugin-perfectionist/sort-imports](https://perfectionist.dev/rules/sort-imports).

Disabled by default.

### Example configuration

Sort imports by distance (furthest to closest):

```json [.oxfmtrc.json]
{
  "experimentalSortImports": {
    "groups": [
      ["side-effect"],
      ["builtin"],
      ["external", "type-external"],
      ["internal", "type-internal"],
      ["parent", "type-parent"],
      ["sibling", "type-sibling"],
      ["index", "type-index"]
    ]
  }
}
```

## Tailwind CSS class sorting

Sorts Tailwind utility classes.

Based on [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).

Disabled by default.

### Example configuration

```json [.oxfmtrc.json]
{
  "experimentalTailwindcss": {
    "stylesheet": "./path/to/stylesheet.css",
    "attributes": ["class", "className"],
    "functions": ["clsx", "cn"],
    "preserveWhitespace": true
  }
}
```

Regex patterns for `attributes` are not supported.

## Sort package.json fields

Sorts keys in `package.json` using an opinionated order.

See [field ordering](https://github.com/oxc-project/sort-package-json?tab=readme-ov-file#field-ordering) for details.

Enabled by default.

### Example configuration

To disable:

```json [.oxfmtrc.json]
{
  "experimentalSortPackageJson": false
}
```

To sort `scripts` alphabetically:

```json [.oxfmtrc.json]
{
  "experimentalSortPackageJson": {
    "sortScripts": true
  }
}
```
