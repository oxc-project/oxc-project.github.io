# Configuration

## `.oxfmtrc.json(c)`

We support `.json` or `.jsonc` config file.

Almost all formatting options are compatible with Prettier's [options](https://prettier.io/docs/options).

We also recommend adding the `$schema` to the config file:

```json
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json"
}
```

For full reference, see also [Configuration file reference](./config-file-reference).

By default, `oxfmt` automatically tries to find the nearest `.oxfmtrc.json` or `.oxfmtrc.jsonc` file from the current working directory. If not found, the default configuration options are used.

You can also specify your config file with the `-c yourconfig.jsonc` flag.

## `.editorconfig`

`.editorconfig` file is also supported by Oxfmt.

And these fields will override default options.

- `end_of_line`: `endOfLine`
- `indent_style`: `useTabs`
- `indent_size`: `tabWidth`
- `max_line_length`: `printWidth`

If both `.editorconfig` and `.oxfmtrc.json` has the same field, `.oxfmtrc` will win.

By default, `oxfmt` automatically tries to find the nearest `.editorconfig` file from the current working directory.

Unlike Prettier, Oxfmt does not respect `root = true` and does not merge nested `.editorconfig` files.

## Ignore files

By default, `oxfmt` automatically finds the `.gitignore` and `.prettierignore` files from the current working directory.

Also you can specify your ignore file by `--ignore-path your.ignore` flag.
In addition, `.oxfmtrc.json(c)` supports an `ignorePatterns` field.

Global and nested ignores are not respected.

VCS directories like `.git` and `.svn` are always ignored, also popular lock files are also ignored.
