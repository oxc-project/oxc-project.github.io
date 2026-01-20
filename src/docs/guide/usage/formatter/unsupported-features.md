# Unsupported features

:::info
These features are planned. Follow our [milestone](https://github.com/oxc-project/oxc/milestone/15).
:::

## Configuration limitations

Not currently supported:

- `prettier` field in `package.json`
- Config file format other than `.json` and `.jsonc`
- Nested configs in sub directories
- Nested `.editorconfig` in sub directories
- `experimentalTernaries` and `experimentalOperatorPosition` options

Note: Default `printWidth` is `100` (Prettier uses `80`).

## Prettier plugins

Not supported. However, Oxfmt provides built-in alternatives:

- `experimentalSortImports`
  - Based on `eslint-plugin-perfectionist/sort-imports`
  - Disabled by default
- `experimentalSortPackageJson`
  - Based on `prettier-plugin-packagejson`
  - Enabled by default
- `experimentalTailwindcss`
  - Based on `prettier-plugin-tailwindcss`
  - Disabled by default

See [Configuration file reference](./config-file-reference) for details.

## Embedded template literals

Not fully implemented. See:

> oxfmt: embedded formatting full support (aka xxx-in-js) · Issue #15180 · oxc-project/oxc\
> https://github.com/oxc-project/oxc/issues/15180
