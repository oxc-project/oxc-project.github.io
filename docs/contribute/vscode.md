# VSCode Extension

## Development

Build the extension and run it inside vscode:

1. `pnpm install`
2. `pnpm run build`
3. `pnpm run package`
4. open vscode and run the command palette "Extensions: Install from VSIX..."
5. find the `oxc-vscode-x.x.x.vsix` file from `./editor/vscode` directory
6. open a `.js` / `.ts` file, add `debugger;` and save
7. see the warning `eslint(no-debugger): debugger statement is not allowed - oxc`
