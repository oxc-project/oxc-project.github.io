# Sorting

Oxfmt includes sorting features for imports, Tailwind classes, and package.json.

- [Sort imports](#sort-imports)
- [Tailwind CSS class sorting](#tailwind-css-class-sorting)
- [Sort package.json fields](#sort-package-json-fields)

## Sort imports

Based on [eslint-plugin-perfectionist/sort-imports](https://perfectionist.dev/rules/sort-imports). Disabled by default.

Progress: https://github.com/oxc-project/oxc/issues/14253

### Configuration

Sort imports by distance (furthest to closest):

```json [.oxfmtrc.json]
{
  "experimentalSortImports": {
    "groups": [
      ["side-effect"],
      ["builtin"],
      ["external", "external-type"],
      ["internal", "internal-type"],
      ["parent", "parent-type"],
      ["sibling", "sibling-type"],
      ["index", "index-type"]
    ]
  }
}
```

## Tailwind CSS class sorting

Sorts Tailwind utility classes in JSX / TSX.

Based on [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).

Disabled by default.

### Configuration

```json [.oxfmtrc.json]
{
  "experimentalTailwindcss": {
    "config": "./tailwind.config.js",
    "stylesheet": "./path/to/stylesheet.css",
    "attributes": ["class", "className"],
    "functions": ["clsx", "cn"],
    "preserveDuplicates": false,
    "preserveWhitespace": false
  }
}
```

### Limitations

Regex patterns for `attributes` are not supported:

```json [.oxfmtrc.json]
{
  "experimentalTailwindcss": {
    "attributes": ["/data-.*/"]
  }
}
```

## Sort package.json fields

Sorts keys in `package.json` using an opinionated order. Enabled by default.

See [field ordering](https://github.com/oxc-project/sort-package-json?tab=readme-ov-file#field-ordering) for details.

### Configuration

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
