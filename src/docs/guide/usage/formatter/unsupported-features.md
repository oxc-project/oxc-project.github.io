# Unsupported features

:::info
These are unsupported features at present.
We plan to implement them all. Please follow our [milestone](https://github.com/oxc-project/oxc/milestone/15).
:::

## Are there any limitations for configuration with Prettier?

The following are NOT currently supported:

- `prettier` field in `package.json`
- Config file format other than `.json` and `.jsonc`
- `overrides` field
- Nested configs in sub directories
- Nested `.editorconfig` in sub directories
- `experimentalTernaries` and `experimentalOperatorPosition` option

Also, if `printWidth` is not specified, its default value is `100`. This differs from Prettier's default `80`.

## Are Prettier plugins supported?

Currently, NOT supported.

However, we have some experimental sorting options:

- `experimentalSortImports`
  - Based on `eslint-plugin-perfectionist/sort-imports`
  - Disabled by default
- `experimentalSortPackageJson`
  - Based on `prettier-plugin-packagejson`
  - Enabled by default
- `experimentalTailwindcss`
  - Based on `prettier-plugin-tailwindcss`
  - Disabled by default

See more details in the [Configuration file reference](./config-file-reference).

## Why are embedded template literals not formatted?

Currently, not fully implemented.

For known differences, please see this discussion.

> oxfmt: embedded formatting full support (aka xxx-in-js) · Issue #15180 · oxc-project/oxc\
> https://github.com/oxc-project/oxc/issues/15180
