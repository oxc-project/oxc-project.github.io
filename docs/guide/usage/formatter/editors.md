---
url: /docs/guide/usage/formatter/editors.md
---
# Setup editors

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
