# Formatter (oxfmt)

Oxfmt (`/oh-eks-for-mat/`) is a Prettier-compatible code formatter.

:::info
Oxfmt is currently working in progress.

Please join the discussion!

> RFC: Formatter · oxc-project/oxc · Discussion #13608\
> https://github.com/oxc-project/oxc/discussions/13608

For now, you may use [@prettier/plugin-oxc](https://github.com/prettier/prettier/tree/main/packages/plugin-oxc) in prettier to gain some parsing speed.
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

Or save it to your package.json:

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

## Command-line Interface

`oxfmt` works like `prettier --write .` by default.

Format options like `--no-semi` are not supported by CLI, we recommend to use configuration file instead. This will help you use CLI and editor extension with the same settings.

Globs in positional paths are not expanded. (Still you can rely on your shell.) But it works in `!` prefixed exclude paths.

See more details in [CLI reference](./formatter/cli).

## Configuration file

By default, `oxfmt` automatically tries to find the nearest `.oxfmtrc.json` or `.oxfmtrc.jsonc` file from current working directory. If not found, default configuration is used.

Also you can specify your config file by `-c yourconfig.jsonc` flag.

Almost all format options are compatible with Prettier's [options](https://prettier.io/docs/options).
So you may finish your setup by just renaming `.prettierrc.json` to `.oxfmtrc.jsonc`.

Config file follows this schema.

> https://github.com/oxc-project/oxc/blob/main/npm/oxfmt/configuration_schema.json

You can start with this template if your editor is supporting JSON Schema.

```json
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json"
}
```

## Ignore file

By default, `oxfmt` automatically finds the `.gitignore` and `.prettierignore` file from current working directory.

Also you can specify your ignore file by `--ignore-path your.ignore` flag.

VCS directories like `.git` and `.svn` are always ignored. Also global and nested ignores are not respected.

In addition, `.oxfmtrc.json(c)` also supports `ignorePatterns` field.

## FAQs

### What kinds of files are supported?

Currently, only JS and TS files are supported.
JSX is always available in JS files, but for TS files, the `.tsx` extension is required to use JSX.

Embedded parts like CSS-in-JS have experimental partial support.
By specifying `embeddedLanguageFormatting: auto`, non-substitution templates will be formatted.

### What is the compatibility with Prettier?

We're following the `main` branch of Prettier, not the `latest` release.

For other differences, please see this discussion.

> `Oxfmt` differences with `Prettier` · oxc-project/oxc · Discussion #14669\
> https://github.com/oxc-project/oxc/discussions/14669

### Are there any limitations for configuration?

The following are NOT currently supported:

- `prettier` field in `package.json`
- File formats other than `.json(c)`
- Nested configs in sub directories
- `override` field
- Respect `.editorconfig`
- `experimentalTernaries` and `experimentalOperatorPosition` option

Also, if `printWidth` is not specified, its default value is `100`. This differs from Prettier's default.

### Are Prettier plugins supported?

Currently, they are not supported.

For import sorting functionality, we provide experimental behavior based on `eslint-plugin-perfectionist/sort-imports` through the `experimentalSortImports` configuration option.

### How does editor integration work?

By running `oxfmt --lsp`, you can start a language server that responds to `textDocument/formatting` requests.

Formatting via stdin and stdout are not supported, but we have confirmed that some editors and extensions can work with the CLI by configuring them to use temporary files.

Oxc VS Code extension is also available.

However, both methods have some limitations, such as not supporting formatting of embedded parts.
