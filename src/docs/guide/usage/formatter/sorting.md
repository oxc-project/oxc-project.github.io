# Sorting

Oxfmt includes several sorting features that go beyond basic formatting to improve consistency and readability.

- [Sort imports](#sort-imports)
- [Tailwind CSS class sorting](#tailwind-css-class-sorting)
- [Sort package.json fields](#sort-package-json-fields)

## Sort imports

Oxfmt can sort import declarations, which is modeled after `sort-imports` from the [ESLint Perfectionist Plugin](https://perfectionist.dev/rules/sort-imports).

Implemented and unimplemented features are tracked at https://github.com/oxc-project/oxc/issues/14253.

This feature is disabled by default.

### Configuration

A recommended approach is to sort imports by distance, from the furthest to the closest:

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

Oxfmt can sort Tailwind CSS utility classes in JSX and markup.

Configurations are based on [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).

This feature is disabled by default.

### Configuration

```jsonc [.oxfmtrc.json]
{
  "experimentalTailwindcss": {
    "config": "./tailwind.config.js",
    "stylesheet": "./path/to/stylesheet.css",
    "attributes": ["class", "className"],
    "functions": ["clsx", "cn"],
    "preserveDuplicates": false, // default false
    "preserveWhitespace": false, // default false
  },
}
```

### Limitations

Regex patterns for `tailwindAttributes` is not supported:

```jsonc [.oxfmtrc.json]
{
  "experimentalTailwindcss": {
    "attributes": ["/data-.*/"], // not supported
  },
}
```

## Sort package.json fields

Oxfmt can sort keys in `package.json` using a fixed, opinionated order that improves scanability.

The orders are grouped by logical groups, followed by unknown fields alphabetically, then private fields (starting with `_`) at the end.

See [field ordering](https://github.com/oxc-project/sort-package-json?tab=readme-ov-file#field-ordering) for details.

This feature is enabled by default.

### Configuration

To disable:

```json [.oxfmtrc.json]
{
  "experimentalSortPackageJson": false
}
```

The `scripts` field is not sorted by default, enable `sortScripts`:

```json [.oxfmtrc.json]
{
  "experimentalSortPackageJson": {
    "sortScripts": true
  }
}
```
