---
url: /docs/guide/usage/linter/editors.md
---

# Setup editors

Oxlint editor extensions start the language server with `oxlint --lsp` from your **project installation**, so `oxlint` must be installed in the project.

See [Quickstart](./quickstart) to install and run Oxlint from the command line.

## Supported editors

* [VS Code](#vs-code)
* [Zed](#zed)
* [JetBrains](#jetbrains)
* [coc.nvim](#cocnvim)
* [Other editors](#other-editors)

## VS Code

### Install

Download the official Oxc VS Code extension from:

* [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
* [Open VSX Registry](https://open-vsx.org/extension/oxc/oxc-vscode)

The extension is also compatible with other VS Code-based editors, including Cursor.

### Use (recommended setup for teams)

1. Recommend the extension in your repository so contributors install the same tooling.

Create `.vscode/extensions.json`:

```json
{
  "recommendations": ["oxc.oxc-vscode"]
}
```

2. Enable fix on save (optional).

Add to `.vscode/settings.json`:

```jsonc
{
  "editor.codeActionsOnSave": {
    "source.fixAll.oxc": true,
  },
}
```

### Usage and configuration reference

* <https://github.com/oxc-project/oxc/tree/main/editors/vscode>

## Zed

### Install

* [Oxc Zed Extension](https://zed.dev/extensions/oxc)

### Use

Configure the extension in Zed’s `settings.json` (workspace or user settings), then open your project as a folder/workspace.

### Usage and configuration reference

* <https://github.com/oxc-project/oxc-zed>

***

## JetBrains

IntelliJ IDEA and WebStorm

### Install

* [Oxc in JetBrains Marketplace](https://plugins.jetbrains.com/plugin/27061-oxc)

### Use

Install the plugin, restart the IDE, and open your repository as a project.

### Usage and configuration reference

* <https://github.com/oxc-project/oxc-intellij-plugin>

## coc.nvim

### Install

```vim
:CocInstall coc-oxc
```

### Usage and configuration reference

* <https://github.com/oxc-project/coc-oxc>

## Other editors

If your editor supports custom LSP configuration (Neovim LSP, Emacs, Helix, Sublime LSP, etc.), configure it to launch:

```bash
oxlint --lsp
```

### Reference (language server implementation and issues)

* <https://github.com/oxc-project/oxc/tree/main/crates/oxc_language_server>
