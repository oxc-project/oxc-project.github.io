---
title: VSCode Extension
outline: deep
---

# VSCode Extension

## Development

Build the extension and run it inside vscode:

1. `pnpm install`
2. `pnpm run build`
3. `pnpm --filter './editors/*' build`
4. open vscode and run the command palette (ctrl-shift-p) "Extensions: Install from VSIX..."
5. open `./editors/vscode/oxc_language_server.vsix`
6. open a `.js` / `.ts` file, add `debugger;` and save
7. see the warning `eslint(no-debugger): debugger statement is not allowed - oxc`
