---
url: /docs/guide/usage/formatter/integration.md
---
# Integration

## Editor

For VS Code, the Oxc extension is available from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) and [Open VSX Registry](https://open-vsx.org/extension/oxc/oxc-vscode).

For other editors, by running `oxfmt --lsp` you can start a language server that responds to standard `textDocument/formatting` requests.

:::warning

Currently, LSP support has some limitations, such as not supporting formatting of embedded parts in JS/TS files, non-JS files support.

:::

Formatting via stdin and stdout are also supported.

```sh
cat foo/bar.js | oxfmt --stdin-filepath f.js --config ./path/to/config.json
```

In addition, we have confirmed that some editors and extensions can work with the CLI by configuring them to use temporary files.

## Pre-commit hook

If you want to auto-format staged files with Oxfmt in a git pre-commit hook, you can use `oxfmt --no-error-on-unmatched-pattern`.

This command is equivalent to `prettier --no-error-on-unmatched-pattern --write`, and will format all matched files that are supported by oxfmt. The `--no-error-on-unmatched-pattern` flag ensures that Oxfmt will not raise errors if there are no supported files passed into the command by your pre-commit hook tool (e.g. only Ruby files are staged).

You can also pass `--check` to only *check* the formatting of files, and bail if any files are incorrectly formatted.

If you are using a pre-commit hook via husky/lint-staged, you can run Oxfmt with it by updating your package.json like so:

```json
"lint-staged": {
  "*": "oxfmt --no-error-on-unmatched-pattern"
},
```
