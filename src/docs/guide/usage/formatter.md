# Formatter (oxfmt)

Oxfmt (`/oh-eks-for-mat/`) is a Prettier-compatible code formatter.

:::info
Oxfmt is currently in alpha.

Please join the discussion!

> RFC: Formatter · oxc-project/oxc · Discussion #13608\
> https://github.com/oxc-project/oxc/discussions/13608

Waiting on Oxfmt to implement additional features? Consider using [@prettier/plugin-oxc](https://github.com/prettier/prettier/tree/main/packages/plugin-oxc) in Prettier to gain some parsing speed in the meantime.
:::

## Features

- Support many kinds of file types
  - JS/TS(X): Supported by `oxc_formatter`
  - All file types supported by Prettier by default
- Faster alternative of Prettier CLI
  - Over [30×](/blog/2025-12-01-oxfmt-alpha.html#performance) faster than Prettier’s experimental CLI without cache
- Experimental but usable features
  - Native sort-imports
  - Native sort-packagejson

## Supported languages

- JS, JSX
- TS, TSX
- TOML
- JSON, JSONC, JSON5
- YAML
- HTML, Angular, Vue, MJML
- Ember, Handlebars
- CSS, SCSS, Less
- GraphQL
- Markdown, MDX

:::warning

Note that the `embeddedLanguageFormatting` option is not fully supported in JS/TS files. And for now, it is disabled by default.

:::

## Installation

Run `oxfmt` directly at the root of your repository:

::: code-group

```sh [npm]
$ npx oxfmt@latest
```

```sh [pnpm]
$ pnpm dlx oxfmt@latest
```

```sh [yarn]
$ yarn dlx oxfmt@latest
```

```sh [bun]
$ bunx oxfmt@latest
```

```sh [deno]
$ deno run npm:oxfmt@latest
```

:::

Or save it to your `package.json`:

::: code-group

```sh [npm]
$ npm add -D oxfmt
```

```sh [pnpm]
$ pnpm add -D oxfmt
```

```sh [yarn]
$ yarn add -D oxfmt
```

```sh [bun]
$ bun add -D oxfmt
```

:::

## Configuration

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "format": "oxfmt",
    "format:check": "oxfmt --check"
  }
}
```

## Usage

**Apply formatting:**
```bash
pnpm run format
```

**Verify formatting:**
Check for issues without modifying files.
```bash
pnpm run format:check
```

## Command-line Interface

`oxfmt` CLI works like `prettier --write .` by default.

Formatting config options like `--no-semi` are not supported via CLI flags.
We recommend setting these via the configuration file instead. This will ensure that the CLI and editor integrations always use the same settings.

Globs in positional paths are not expanded. (You can rely on your shell.) But `!`-prefixed exclude paths do support glob expansion.

See more details in the [CLI reference](./formatter/cli).

## Node.js API

`oxfmt` is also available via Node.js API: `format()` function.

```ts
import { format } from "oxfmt";
import type { FormatOptions } from "oxfmt";

const INPUT = `let a=42;`;
const options: FormatOptions = {
  semi: false,
};

const { code, errors } = await format("a.js", INPUT, options);
console.log(code); // "let a = 42"
```

## System Requirements

- **Node.js**: >= 20.19.0 or >= 22.12.0
- **Platforms**: darwin-arm64, darwin-x64, linux-arm64, linux-x64, win32-arm64, and win32-x64

## FAQs

### Are there any formatting differences with Prettier?

For JS/TS files, we're tested against the `v3.7.3` of Prettier.

For known differences, please see this discussion.

> `Oxfmt` differences with `Prettier` · oxc-project/oxc · Discussion #14669\
> https://github.com/oxc-project/oxc/discussions/14669

### Are there any limitations for configuration with Prettier?

The following are NOT currently supported:

- `prettier` field in `package.json`
- Config file format other than `.json` and `.jsonc`
- `overrides` field
- Nested configs in sub directories
- Nested `.editorconfig` in sub directories
- `experimentalTernaries` and `experimentalOperatorPosition` option

Also, if `printWidth` is not specified, its default value is `100`. This differs from Prettier's default `80`.

### Are Prettier plugins supported?

Currently, NOT supported.

However, for import sorting functionality, we provide experimental behavior based on `eslint-plugin-perfectionist/sort-imports` through the `experimentalSortImports` option.

And for `prettier-plugin-packagejson`, we have the `experimentalSortPackageJson` option, which is enabled by default.

See more details in the [Configuration file reference](./formatter/config-file-reference).

### Why are nested scripts and code blocks not formatted?

Currently, the `embeddedLanguageFormatting` option is `"off"` by default.
Please set it to `"auto"` in your config file.

However, even with `"auto"`, the contents inside `TaggedTemplateLiteral` in JS/TS files may not be fully formatted in some cases.
