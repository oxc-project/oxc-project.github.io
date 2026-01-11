# Configuration

Oxfmt is configured using a project-level configuration file. Most options are compatible with Prettier and follow the same semantics, with a small number of Oxfmt-specific extensions.

## `.oxfmtrc.json` / `.oxfmtrc.jsonc`

Oxfmt supports configuration files written in JSON or JSON with comments (JSONC):

- `.oxfmtrc.json`
- `.oxfmtrc.jsonc`

Almost all formatting options are compatible with Prettier’s options.
See the official Prettier documentation for details on shared options:

- https://prettier.io/docs/options

### JSON schema support

We recommend adding a `$schema` field to enable editor validation and autocomplete:

```json [.oxfmtrc.json]
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json"
}
```

### Configuration resolution

By default, `oxfmt` searches for the nearest `.oxfmtrc.json` or `.oxfmtrc.jsonc` file starting from the current working directory and walking up the directory tree.

If no configuration file is found, Oxfmt uses its default options.

You can also specify a configuration file explicitly using the `-c` flag:

```sh
oxfmt -c path/to/yourconfig.jsonc
```

### Full reference

For a complete list of supported options and their defaults, see:

- [Configuration file reference](./config-file-reference)

## `.editorconfig`

Oxfmt also supports `.editorconfig` files.

The following `.editorconfig` properties are read and mapped to Oxfmt options:

- `end_of_line` → `endOfLine`
- `indent_style` → `useTabs`
- `indent_size` → `tabWidth`
- `max_line_length` → `printWidth`
- `insert_final_newline` → `insertFinalNewline`

Glob-based overrides in `.editorconfig` are supported for these properties.

### Resolution behavior

By default, `oxfmt` searches for the nearest `.editorconfig` file starting from the current working directory.

- Oxfmt does not respect `root = true`
- Oxfmt does not merge nested `.editorconfig` files

Only the nearest `.editorconfig` file from the current working directory is applied.

## Configuration precedence

When multiple configuration sources are present, Oxfmt applies options in the following order (from lowest to highest priority):

1. Default values
2. `.editorconfig`
3. `.oxfmtrc.json` / `.oxfmtrc.jsonc`

In all cases, options defined in `.oxfmtrc` override values derived from `.editorconfig`.

## `insertFinalNewline`

Oxfmt supports `insertFinalNewline`, which controls whether a final newline is added at the end of formatted files.

This is a [frequently requested feature in Prettier](https://github.com/prettier/prettier/issues/6360), as some infrastructure environments (for example, Salesforce) strip all line endings from files.

This option defaults to `true`.

## `printWidth`

Oxfmt uses a default `printWidth` of 100 characters.

This differs from Prettier’s default of 80. We chose a wider default for the
following reasons:

- TypeScript code tends to be longer due to type annotations
- Import statements often contain many specifiers
- Modern development environments typically use wider screens
- Fewer line breaks result in slightly fewer LLM tokens

While Oxfmt remains compatible with Prettier’s formatting behavior, it intentionally
uses a different default print length.

### Migrating from Prettier

If you want to avoid large diffs when migrating from Prettier, explicitly set
`printWidth` to `80`:

```json [.oxfmtrc.json]
{
  "printWidth": 80
}
```
