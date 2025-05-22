---
title: Oxlint 1.0 Stable
outline: deep
authors:
  - cameron
---

<AppBlogPostHeader />

Oxlint 1.0 is fully stable. After eighteen months of dedicated development and hundreds of contributions from the community, Oxlint 1.0 is here! We now have a dedicated full-time maintainer (me) and a growing core team working on maintaining and improving the linter.

If you haven’t already, we encourage you to try Oxlint in your codebase. If you run into any issues or have feedback, please reach out - we’re actively listening and ready to respond.

Oxlint a Rust-powered linter for JavaScript and TypeScript that ships with 500+ built-in rules and is designed to be fast and simple to adopt.

## Quick Start

Getting started with Oxlint is straightforward. Run it in your codebase using your preferred package manager:

**Run it, no config required.**

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

For small or new projects, Oxlint can be run without any configuration, using a default set of rules that catch code that is clearly incorrect or unnecessary.

For larger projects or projects that require more customization, Oxlint is configurable via an `.oxlintrc.json` file. This configuration format is based on ESLint v8’s flat config, making migration easy and familiar. Each source file is linted with the nearest applicable configuration, and you can use overrides to target specific glob patterns. You can also extend shared configs to keep teams consistent.

For projects already using ESLint, [oxlint-migrate](https://github.com/oxc-project/oxlint-migrate) can be used to migrate an existing ESLint flat-config file to Oxlint. Additionally, eslint-plugin-oxlint can disable overlapping ESLint rules while both linters are used together. It’s recommended to run `oxlint && eslint` to benefit from Oxlint's faster feedback cycle.

For more detailed instructions on how to use Oxlint and integrate it with your project or editor, check out the [installation guide](/docs/guide/usage/linter).

## Highlights

### Comprehensive Rule Coverage

Oxlint includes over 500 rules from various sources:

- Complete ESLint rule set, including TypeScript-specific rules from typescript-eslint (Excluding type checked rules.)
- Popular plugin rules from `eslint-plugin-unicorn`, `eslint-plugin-jsdoc`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jest`, and `eslint-plugin-import`
- Unique Oxlint rules like [bad comparison sequence](../docs/guide/usage/linter/rules/oxc/bad-comparison-sequence), [const comparisons](../docs/guide/usage/linter/rules/oxc/const-comparisons), and [only used in recursion](../docs/guide/usage/linter/rules/oxc/only-used-in-recursion)

### Flexible Configuration

Configure Oxlint through `.oxlintrc.json` files with support for:

- Nested configurations that apply to specific directories
- Override patterns for targeting specific file types or locations
- Shared configuration extending for team consistency

### Editor Integration

First-class editor support with extensions for:

- [VS Code](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
- [IntelliJ IDEA and WebStorm](https://plugins.jetbrains.com/plugin/27061-oxc)
- [Zed Editor](https://zed.dev/extensions?query=oxc)
- Language server protocol support for other editors

### Helpful Diagnostics

Oxlint is built to deliver clear, actionable error messages - not just describing the issue, but visualizing it and suggesting how to fix it.

![CLI Demo](https://github.com/oxc-project/oxc/assets/1430279/094a3b24-0433-42ae-aad2-48a7dec2b985)
_Oxlint running in the terminal with detailed error reporting_

## Adoption

**From ESLint**: Migrating from ESLint is designed to be seamless. [oxlint-migrate](https://github.com/oxc-project/oxlint-migrate) can be used to migrate an existing ESLint flat-config file to Oxlint.
Oxlint uses familiar configuration patterns and rule names, making the transition smooth for existing projects.

**In combination with ESLint**: Run `oxlint && eslint` for a faster feedback loop, in combination with [eslint-plugin-oxlint](https://github.com/oxc-project/eslint-plugin-oxlint) to disable overlapping ESLint rules.

**For New Projects**: Start fresh with sensible defaults. Oxlint's built-in rule set covers common patterns and best practices out of the box.

**In CI/CD**: Integrate Oxlint into your build pipeline for fast, reliable code quality checks that won't slow down your deployment process.

**For Large Codebases**: Scale confidently with Oxlint's performance-first architecture that handles monorepos and large JavaScript applications efficiently.

For detailed adoption guidance, see our [installation guide](/docs/guide/usage/linter).

## Performance

Oxlint was benchmarked on large, real-world codebases using its default set of correctness rules.

All benchmarks were run on a 2023 MacBook Pro M2 Max with 96 GB of RAM.

### Repository Benchmark Summary

| Repository         | File count | Lint time | Commit Hash                                  |
| ------------------ | ---------- | --------- | -------------------------------------------- |
| `microsoft/vscode` | 5,955      | 0.356s    | (`1a99a26db899152df71fcfd1914e63804d5d0d57`) |
| `elastic/kibana`   | 71,160     | 1.948 s   | (`f635e2a3b06526195d393b67f0d4534ce792815e`) |

### Linting Visual Studio Code

For a more direct comparison, Oxlint and ESLint were run on the Visual Studio Code codebase using exactly the same enabled rules and configurations.

For more details on this comparison, see https://github.com/oxc-project/bench-javascript-linter.

Oxlint was compiled in release mode at commit e2f0f0a.

| Tool                   | Time     |
| ---------------------- | -------- |
| oxlint                 | 615.3 ms |
| oxlint (single thread) | 1.840 s  |
| eslint                 | 33.481 s |

Oxlint ran ~55x faster than ESLint on the same codebase and configuration.

## Roadmap

**Custom Rules** – JavaScript plugin support is coming soon, enabling teams to write custom rules that integrate seamlessly with Oxlint's architecture.

**Performance Optimizations** – Continued improvements to parsing and analysis speed.

## Acknowledgements

Oxlint 1.0 represents the collective effort of over 200 contributors who have shaped this project. We're grateful for every bug report, feature request, and code contribution.

Special recognition goes to:

- [@branchseer](https://github.com/branchseer) for implementing the multi-file analysis runtime.
- [@camc314](https://github.com/camc314), [@mysteryven](https://github.com/mysteryven), and [@shulaoda](https://github.com/shulaoda) for implementing many sophisticated lint rules, testing, and constantly improving everything.
- [@camchenry](https://github.com/camchenry) for implementing nested configuration support.
- [@DonIsaac](https://github.com/DonIsaac) for improving configuration, documentation and website, and for representing Oxc at [SquiggleConf 2024](https://2024.squiggleconf.com).
- [@leaysgur](https://github.com/leaysgur) for the RegExp parser and JSDoc plugin.
- [@Sysix](https://github.com/Sysix) for maintaining `eslint-plugin-oxlint` and significant contributions to the language server and VSCode extension.
- [@u9g](https://github.com/u9g) and [@rzvxa](https://github.com/rzvxa) for implementing control flow graph analysis.

We'd love to hear your feedback on Oxlint! Please reach out to us on [Discord](https://discord.gg/oxlint) or [GitHub Discussions](https://github.com/oxc-project/oxc/discussions) with any questions, suggestions, or issues you encounter. Your input is invaluable in helping us make Oxlint even better.

## Join the Community

We're excited to see how Oxlint helps improve your development workflow. Connect with us:

- **Discord**: Join our [community server](https://discord.gg/9uXCAwqQZW) for real-time discussions
- **GitHub**: Share feedback on [GitHub Discussions](https://github.com/oxc-project/oxc/discussions)
- **Issues**: Report bugs or request features on our [issue tracker](https://github.com/oxc-project/oxc/issues)

Your feedback drives Oxlint's evolution.
