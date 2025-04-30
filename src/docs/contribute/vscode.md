---
title: VSCode Extension
outline: deep
---

# VSCode Extension

## Development

Make sure you setup the project with `just init`. Some tools are required for that.
More information inside the `justfile` located on the root `oxc` project.

After `just init` run `pnpm install` inside `editors/vscode` directory.

## Building Extension and Installing it locally

Inside `editors/vscode` run `pnpm build` to compile the vscode extension and build the release version of the language server.
Run `pnpm install-extension` to install it on your VSCode Editor.
A editor window restart it needed. With `CTRL` + `SHIFT` + `P` and the search for "Developer: Reload Window",
you are finally able to manual test your changes inside VSCode.

### Building Debug Version of Server

Running `pnpm build` will build the release version of the server, This can take some time.
If you want faster feedback is the follow flow:

```bash
pnpm compile # transform TS Code
pnpm server:build:debug # build the debug version of it
pnpm package # package it as VSCode Extension
pnpm install-extension
```

Make sure to tell the VSCode Extension to use the debug build with the env variable:
`SERVER_PATH_DEV="/workspace/editors/vscode/target/debug/oxc_language_server"`.

Or use the Extension Settings with `settings.json`:

```json
{
  "oxc.path.server": "./editors/vscode/target/debug/oxc_language_server"
}
```

For Windows, the `oxc_language_server` will be provided with a `exe` extension.

### Use the Output Channel

To understand what the Extension and the Language Server is doing, you can use the `Oxc` Output Channel inside VSCode.
The get more information use the Extension Setting inside `settings.json`:

```json
{
  "oxc.trace.server": "verbose"
}
```

On `oxc_language_server` you can use the `info!` or `error!` macro to send messages to the output channel.
