---
title: Type-Aware Linting Alpha
outline: deep
authors:
  - cameron
  - camchenry
---

<AppBlogPostHeader />

<br>

We're excited to announce the alpha release of type-aware linting in Oxlint!

## Overview

Following our [technical preview in August](/blog/2025-08-17-oxlint-type-aware), we're excited to announce that type-aware linting has reached alpha status. This milestone brings significant improvements in stability, configurability, and rule coverage.

Type-aware linting enables powerful rules like `no-floating-promises`, `no-misused-promises`, and `await-thenable` that catch bugs by understanding TypeScript's type system. With N type-aware rules now available, you can catch entire categories of runtime errors before they happen.

The alpha release addresses the major limitations from the technical preview:

- **Full rule configuration support** - Configure individual type-aware rules in `.oxlintrc.json`
- **Disable comment support** - Use `eslint-disable` comments to control type-aware rules
- **IDE support** - Type-aware linting works in VSCode and other supported editors
- **Improved stability** - Many crashes and edge cases have been fixed

While we're still working on performance for very large monorepos and some advanced rules, the alpha is ready for testing in production codebases.

## Quick Start

Install `oxlint` and `oxlint-tsgolint`, then run with the `--type-aware` flag:

::: code-group

```sh [npm]
npm add -D oxlint oxlint-tsgolint@latest
npx oxlint --type-aware
```

```sh [pnpm]
pnpm add -D oxlint oxlint-tsgolint@latest
pnpm oxlint --type-aware
```

```sh [yarn]
yarn add -D oxlint oxlint-tsgolint@latest
yarn oxlint --type-aware
```

```sh [bun]
bun add -D oxlint oxlint-tsgolint@latest
bunx oxlint --type-aware
```

:::

To try a specific type-aware rule without other configuration:

```bash
npx oxlint --type-aware -A all -D typescript/no-floating-promises
```

For more configuration options, see our [usage guide](/docs/guide/usage/linter/type-aware).

## What's New

### Rule configuration support in `oxlint`

Type-aware rules that run in `tsgolint` can be configured in `oxlint` just like any other lint rule. For example, you can configure the `no-floating-promises` rule to allow certain safe calls or ignore `void`:

```json
{
  "rules": {
    "typescript/no-floating-promises": ["error", {
      "ignoreVoid": true,
      "allowForKnownSafePromises": [
        { "from": "file", "name": "SafePromise" },
        { "from": "lib", "name": "PromiseLike" },
      ]
    }]
  }
}
```

Previously, this would silently fail, but now the configuration is actually passed to `tsgolint` and parsed for the lint rule to use.

### Disable comment support in `oxlint`

Rules that run in `tsgolint` can now be disabled similar to any other `oxlint` rule by placing a comment in the file or on a line:

```ts
/* oxlint-disable typescript/no-floating-promises */

// oxlint-disable-next-line typescript/no-floating-promises
[1, 2, 3].map(async x => x + 1);
```

Previously, this didn't actually disable the rule, but now it will.

### More supported rules

The alpha milestone is largely focused on stability and integrating `tsgolint` more closely with `oxlint`, but we've still ported several rules from `typescript-eslint` which you can now use via `oxlint` as well: 

- `no-deprecated`
- `prefer-includes`
- `strict-boolean-expressions`

### TypeScript program diagnostics are now reported

Previously, if TypeScript failed to create and parse a program, these errors were not reported which lead to confusion around why linting was not working. Now, we report any issues with creating a program as a diagnostic. For example, if a `tsconfig.json` file contains `baseUrl`, that will be reported now:

```
$ oxlint --type-aware

  × Invalid tsconfig
   ╭─[docs/tsconfig.json:1:1]
 1 │ {
   · ▲
 2 │   "compilerOptions": {
   ╰────
  help: Non-relative paths are not allowed. Did you forget a leading './'?

  × Invalid tsconfig
   ╭─[test/ui/tsconfig.json:1:1]
 1 │ {
   · ▲
 2 │   "extends": "../../tsconfig.base.json",
   ╰────
  help: Option 'baseUrl' has been removed. Please remove it from your configuration.
        See https://github.com/oxc-project/tsgolint/issues/351 for more information.
```

## Performance

[Add performance benchmarks and comparisons]

## Technical Details

### Architecture

Type-aware linting in Oxlint uses a unique two-binary architecture:

```
oxlint CLI (Rust)
  ├─ Handles file traversal, ignore logic, and diagnostics
  ├─ Passes paths and configuration to tsgolint
  └─ Formats and displays results

tsgolint (Go)
  ├─ Uses typescript-go for type checking
  ├─ Executes type-aware rules
  └─ Returns structured diagnostics
```

This design keeps Oxlint's core fast while leveraging TypeScript's type system through typescript-go. The frontend-backend separation means `oxlint` controls the user experience while `tsgolint` handles the heavy lifting of type analysis.

### TypeScript Compatibility

`tsgolint` is based on [typescript-go](https://github.com/microsoft/typescript-go), Microsoft's TypeScript v7.0 rewrite in Go, not the original TypeScript compiler.

**Important compatibility notes:**

- Only TypeScript 7.0+ features are supported
- Pre-7.0 syntax and deprecated features are not supported
- Legacy `tsconfig.json` options like `baseUrl` have been removed in TypeScript 7.0

If you're using deprecated features from TypeScript 6.0 or earlier, you'll need to migrate your codebase first. See the [TypeScript migration guide](https://github.com/microsoft/TypeScript/issues/62508#issuecomment-3348649259) for help updating deprecated tsconfig options.

### Implementation Details

`tsgolint` doesn't use typescript-go's public APIs. Instead, it compiles typescript-go by [shimming](https://github.com/oxc-project/tsgolint/tree/main/shim) internal APIs to make them accessible. We actively track typescript-go updates and fix breaking changes as needed.

Our typescript-go fork is synced regularly using renovatebot, ensuring we stay current with the latest improvements and fixes.

## What's Next

[Add roadmap and future plans]

## Try It Out

[Add call to action and community information]
