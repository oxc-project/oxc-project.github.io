# Quickstart

This page shows the recommended setup for Oxfmt and the most common workflows, with copy-paste commands.

## Install

Install `oxfmt` as a dev dependency:

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

Add scripts to `package.json`:

```json [package.json]
{
  "scripts": {
    "fmt": "oxfmt",
    "fmt:check": "oxfmt --check"
  }
}
```

Format files:

```sh
pnpm run fmt
```

Check formatting without writing files:

```sh
pnpm run fmt:check
```

## Usage

```sh
oxfmt [OPTIONS] [PATH]...
```

Running `oxfmt` without any options or arguments will format the current working directory, which is the same as `prettier --write .`

CLI options like `--no-semi` are not supported. We recommend setting these via the configuration file instead. This will ensure that the CLI and editor integrations always use the same settings.

Globs in positional paths are not expanded. (You can rely on your shell.) But `!`-prefixed exclude paths do support glob expansion.

For the complete list of options, see the [CLI reference](/docs/guide/usage/formatter/cli.html).

## Common workflows

### Pre-commit with lint-staged

```json
{
  "lint-staged": {
    "*": "pnpm run fmt --no-error-on-unmatched-pattern"
  }
}
```

`--no-error-on-unmatched-pattern` prevents the command from exiting with an error when a pattern does not match any files.

### Create a config file

Initialize the `.oxfmtrc.json` config with default values:

```sh
oxfmt --init
```

### Migrate from Prettier

```sh
oxfmt --migrate prettier
```

See [migrate from prettier](./migrate-from-prettier) for details.

### List files that differ

```sh
oxfmt --list-different
```

This is useful for configuring [files to ignore](./ignore-files).

### Piping file contents

```sh
echo 'const   x   =   1' | oxfmt --stdin-filepath test.ts
```

Prints `const x = 1;`

### Node.js API

```ts
import { format, type FormatOptions } from "oxfmt";

const input = `let a=42;`;
const options: FormatOptions = {
  semi: false,
};

const { code } = await format("a.js", input, options);
console.log(code); // "let a = 42"
```

## Next steps

- [Change configuration](./config)
- [Setup editors](./editors)
- [Setup CI](./ci)
- Learn advanced features: [sorting](./sorting), [embedded formatting](./embedded-formatting)
- Check [CLI reference](./cli)
