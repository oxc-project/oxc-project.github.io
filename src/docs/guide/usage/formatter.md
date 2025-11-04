# Formatter

Oxfmt (`/oh-eks-for-mat/`) is a non-opinionated yet Prettier-compatible code formatter.

:::info
Oxfmt is currently working in progress.

Please join the discussion!

> RFC: Formatter · oxc-project/oxc · Discussion #13608
> https://github.com/oxc-project/oxc/discussions/13608

For a while, you may use [@prettier/plugin-oxc](https://github.com/prettier/prettier/tree/main/packages/plugin-oxc) in prettier to gain some parsing speed.
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

```
Usage: [--check | --list-different] [-c=PATH] [--ignore-path=PATH]... [PATH]...

Output Options
        --check              Check mode - check if files are formatted
        --list-different     List mode - list files that would be changed

Basic Options
    -c, --config=PATH        Path to the configuration file

Ignore Options
        --ignore-path=PATH   Path to ignore file(s). Can be specified multiple times. If not
                             specified, .gitignore and .prettierignore in the current directory are
                             used.
        --with-node-modules  Format code in node_modules directory (skipped by default)

Miscellaneous
        --no-error-on-unmatched-pattern  Do not exit with error when pattern is unmatched
        --threads=INT        Number of threads to use. Set to 1 for using only 1 CPU core

Available positional items:
    PATH                     Single file, single path or list of paths. If not provided, current
                             working directory is used. Glob is supported only for exclude patterns
                             like `'!**/fixtures/*.js'.

Available options:
    -h, --help               Prints help information
    -V, --version            Prints version information
```

Oxfmt works like `prettier --write .` by default.

Format options are not supported by CLI, use configuration file instead. This will help you use CLI and editor extension with the same settings.

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

## Notable limitations

These will (or will not) be implemented in the future.

- Only JS and TS files are supported
- Embedded parts like css-in-js are partially supported
- Stdin and stdout are not supported
- Configuration is not supported for
  - `prettier` field in `package.json`
  - Extensions other than `.json(c)`
- Globs in positional paths are not expanded
  - But it works in `!` prefixed exclude paths
- Plugins are not supported
  - Some of them like sort-imports will be natively supported

## Compatibility with Prettier

Please see this discussion.

> `Oxfmt` differences with `Prettier` · oxc-project/oxc · Discussion #14669
> https://github.com/oxc-project/oxc/discussions/14669
