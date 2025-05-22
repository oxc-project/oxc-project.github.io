---
title: Oxlint 1.0
outline: deep
authors:
  - camc314
---

<AppBlogPostHeader />

After eighteen months, and hundreds of contributions, **Oxlint 1.0** is here! It’s a Rust-powered linter for JavaScript and TypeScript that ships with 500 + built-in rules and is designed to be fast, extensible, and simple to adopt.

## How to use

To run Oxlint in your codebase, you can use the package manager of your choice at the root of your codebase:

::: code-group

```sh [npm]
$ npx oxlint@latest
```

```sh [pnpm]
$ pnpm dlx oxlint@latest
```

```sh [yarn]
$ yarn dlx oxlint@latest
```

```sh [bun]
$ bunx oxlint@latest
```

```sh [deno]
$ deno run npm:oxlint@latest
```

:::

Oxlint is configurable via an .oxlintrc.json file. Each source file is linted with the nearest configuration, and you can use overrides to target specific glob patterns. You can also extend shared configs to keep teams consistent.

For more detailed instructions on how to use Oxlint and integrate it with your project or editor, check out the [installation guide](/docs/guide/usage/linter).

## Highlights

A huge ruleset with over 500 rules, including:

- Rules from [ESLint](https://eslint.org/), including typescript specific rules from [typescript-eslint](https://typescript-eslint.io)
- other sources such as `eslint-plugin-unicorn`, `eslint-plugin-jsdoc`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jest` and `eslint-plugin-import`.
- Unique rules such as [bad comparison sequence](../docs/guide/usage/linter/rules/oxc/bad-comparison-sequence), [const comparisons](../docs/guide/usage/linter/rules/oxc/const-comparisons), [double comparisons](../docs/guide/usage/linter/rules/oxc/double-comparisons), [only used in recursion](../docs/guide/usage/linter/rules/oxc/only-used-in-recursion) and more.

We have extensions for [VS Code](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode), [IntelliJ](https://plugins.jetbrains.com/plugin/27061-oxc), [Zed](https://zed.dev/extensions?query=oxc) as well as a language server for other editors.

## Performance

TODO: bench the following repos with same ESLint vs oxlint config + vs GA release

`elastic/kibana`\
`microsoft/vscode`\
`vitest-dev/vitest`
`vuejs/core`

## Roadmap

- **Custom Rules!** – write JavaScript plugins to integrate with Oxlint.
- TODO: anything else explicitly planned??

## Acknowledgements

Oxlint 1.0 would not have been possible without the over 200 contributors to the project.

Special thanks goes to:

- [@branchseer](https://github.com/branchseer) for implementing the multi-file analysis runtime.
- [@camc314](https://github.com/camc314), [@mysteryven](https://github.com/mysteryven), and [@shulaoda](https://github.com/shulaoda) for implementing many sophisticated lint rules, testing, and constantly improving everything.
- [@camchenry](https://github.com/camchenry) for implementing nested configuration support.
- [@DonIsaac](https://github.com/DonIsaac) for improving configuration, documentation and website, and for representing Oxc at [SquiggleConf 2024](https://2024.squiggleconf.com).
- [@leaysgur](https://github.com/leaysgur) for the RegExp parser and JSDoc plugin.
- [@Sysix](https://github.com/Sysix) for maintaining `eslint-plugin-oxlint` and significant contributions to the language server and VSCode extension.
- [@u9g](https://github.com/u9g) and [@rzvxa](https://github.com/rzvxa) for implementing control flow graph analysis.

We'd love to hear your feedback on Oxlint! Please reach out to us on [Discord](https://discord.gg/oxlint) or [GitHub Discussions](https://github.com/oxc-project/oxc/discussions) with any questions, suggestions, or issues you encounter. Your input is invaluable in helping us make Oxlint even better.
