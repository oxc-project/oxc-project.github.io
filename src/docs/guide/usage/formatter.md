# Formatter (oxfmt)

Oxfmt (`/oh-eks-for-mat/`) is a Prettier-compatible code formatter.

:::info
Oxfmt is currently a work in progress.

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

Formatting config options like `--no-semi` are not supported via CLI flags, we recommend setting these via the configuration file instead. This will ensure that the CLI and editor integrations always use the same settings.

Globs in positional paths are not expanded. (You can rely on your shell.) But `!`-prefixed exclude paths do support glob expansion.

See more details in the [CLI reference](./formatter/cli).

## Configuration file

By default, `oxfmt` automatically tries to find the nearest `.oxfmtrc.json` or `.oxfmtrc.jsonc` file from the current working directory. If not found, the default configuration options are used.

You can also specify your config file with the `-c yourconfig.jsonc` flag.

Almost all formatting options are compatible with Prettier's [options](https://prettier.io/docs/options).
So you can migrate from Prettier by simply renaming `.prettierrc.json` to `.oxfmtrc.jsonc`.

We also recommend adding the `$schema` to the config file after copying it:

```json
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json"
}
```

You can see the full JSON schema for the config file here:

> https://github.com/oxc-project/oxc/blob/main/npm/oxfmt/configuration_schema.json

## Ignore file

By default, `oxfmt` automatically finds the `.gitignore` and `.prettierignore` files from the current working directory.

Also you can specify your ignore file by `--ignore-path your.ignore` flag.

VCS directories like `.git` and `.svn` are always ignored. Also global and nested ignores are not respected.

In addition, `.oxfmtrc.json(c)` supports an `ignorePatterns` field.

## Pre-commit hook

If you want to auto-format staged files with oxfmt in a git pre-commit hook, you can use `oxfmt --no-error-on-unmatched-pattern`.

This command is equivalent to `prettier --no-error-on-unmatched-pattern --write`, and will format all matched files that are supported by oxfmt. The `--no-error-on-unmatched-pattern` flag ensures that oxfmt will not raise errors if there are no supported files passed into the command by your pre-commit hook tool (e.g. only Ruby files are staged).

You can also pass `--check` to only _check_ the formatting of files, and bail if any files are incorrectly formatted.

If you are using a pre-commit hook via husky/lint-staged, you can run oxfmt with it by updating your package.json like so:

```json
"lint-staged": {
  "*": "oxfmt --no-error-on-unmatched-pattern"
},
```

## FAQs

### What kinds of files are supported?

Currently, only JavaScript and TypeScript files are supported (using all common JS/TS extensions and filenames, including `.js`, `.jsx`, `.ts`, `.mjs`, etc.).
JSX is always available in JS files, but for TypeScript, the `.tsx` extension is required to use JSX syntax.

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
