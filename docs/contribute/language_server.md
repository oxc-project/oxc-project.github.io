---
url: /docs/contribute/language_server.md
---

This page tells you the main concept of the `oxc_language_server` and what the differences to the CLI are.
If you want to learn more about the communication between the language server and the editor, the official [LSP/LSIF documentation](https://microsoft.github.io/language-server-protocol/) is a great start.
The [`README.md`](https://github.com/oxc-project/oxc/blob/main/crates/oxc_language_server/README.md) of the language server has a quick overview of the relevant specs.

Note: In this document we will talk a lot about "tools", this is an abstract concept of the core logic for `oxlint` and `oxfmt`.

## `oxc_language_server` concept of implementing tools

`oxc_language_server` can be used to upgrade your own script with the capability to work as a language server.
The server on its own does not change your files or create suggestions. This is the responsibility of the tool.
Instead, it manages the workspace folders and all the communication for loading the right configuration.
To communicate with the provided tools, the server provides a [`ToolBuilder` and `Tool` trait](https://github.com/oxc-project/oxc/blob/main/crates/oxc_language_server/src/tool.rs).

## Difference between Language Server and CLI

### Editors changes the file, server communicates the changes

A small but important part about the communication of a file and the fix of it.
The CLI Tools are writing the changes to the file system.
The (oxc) language server should NEVER write to it, instead it just communicates it changes to the editor.

### Workspace Folders

You know when you open a git project in the editor? That is a workspace folder. The LSP has the concept of opening multiple (git) projects at the same time.
Each of the projects can have its own configuration (see next part), but the most important part is the own "context" with a workspace URI.
You can think of a workspace URI as the same as a "current working directory" for the CLI tool.
Keep in mind that a workspace folder can be added / removed by the editor.

### Configurations (with folders)

The language server can (like the CLI flags) be configured, the oxc language server follows the concept:
Each workspace folder can have its own configuration. As an example: git project A uses type aware linting, git project B uses dangerous fixes on auto save.

### Changing Configuration

Surprise! The user can change the language server configuration on the fly. The editor will send us the updated configuration.
Currently, the server will send each tool the old and new configuration, so it can handle all kinds of stuff.
Depending on the configuration the tool can restart/rebuild itself.

### Watch Patterns & Changing watched files

Your tool can tell the editor to watch for specific file (glob) patterns and notify the server, when the file is changed/created/deleted.
This is mostly used for the `.ox**rc.json` configuration and the referenced files inside of it (example `extends` from `oxlint`).
Depending on the configuration of the workspace and the tool, the tool may need to restart/rebuild itself again.
