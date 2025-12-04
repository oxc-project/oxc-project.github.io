# Type-Aware Linting

Read our [technical preview announcement](/blog/2025-08-17-oxlint-type-aware) for background details, and the rationale for the architecture we have chosen for type-aware linting.

## Installation

::: code-group

```sh [npm]
npm add -D oxlint-tsgolint@latest
```

```sh [pnpm]
pnpm add -D oxlint-tsgolint@latest
```

```sh [yarn]
yarn add -D oxlint-tsgolint@latest
```

```sh [bun]
bun add -D oxlint-tsgolint@latest
```

:::

Run `oxlint` with `--type-aware`

```bash
oxlint --type-aware
```

## Unimplemented Rules

See https://github.com/oxc-project/tsgolint/issues/104

## Supported Rules

List of supported rules:

- [typescript/await-thenable](/docs/guide/usage/linter/rules/typescript/await-thenable)
- [typescript/no-array-delete](/docs/guide/usage/linter/rules/typescript/no-array-delete)
- [typescript/no-base-to-string](/docs/guide/usage/linter/rules/typescript/no-base-to-string)
- [typescript/no-confusing-void-expression](/docs/guide/usage/linter/rules/typescript/no-confusing-void-expression)
- [typescript/no-deprecated](/docs/guide/usage/linter/rules/typescript/no-deprecated)
- [typescript/no-duplicate-type-constituents](/docs/guide/usage/linter/rules/typescript/no-duplicate-type-constituents)
- [typescript/no-floating-promises](/docs/guide/usage/linter/rules/typescript/no-floating-promises)
- [typescript/no-for-in-array](/docs/guide/usage/linter/rules/typescript/no-for-in-array)
- [typescript/no-implied-eval](/docs/guide/usage/linter/rules/typescript/no-implied-eval)
- [typescript/no-meaningless-void-operator](/docs/guide/usage/linter/rules/typescript/no-meaningless-void-operator)
- [typescript/no-misused-promises](/docs/guide/usage/linter/rules/typescript/no-misused-promises)
- [typescript/no-misused-spread](/docs/guide/usage/linter/rules/typescript/no-misused-spread)
- [typescript/no-mixed-enums](/docs/guide/usage/linter/rules/typescript/no-mixed-enums)
- [typescript/no-redundant-type-constituents](/docs/guide/usage/linter/rules/typescript/no-redundant-type-constituents)
- [typescript/no-unnecessary-boolean-literal-compare](/docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare)
- [typescript/no-unnecessary-template-expression](/docs/guide/usage/linter/rules/typescript/no-unnecessary-template-expression)
- [typescript/no-unnecessary-type-arguments](/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-arguments)
- [typescript/no-unnecessary-type-assertion](/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-assertion)
- [typescript/no-unsafe-argument](/docs/guide/usage/linter/rules/typescript/no-unsafe-argument)
- [typescript/no-unsafe-assignment](/docs/guide/usage/linter/rules/typescript/no-unsafe-assignment)
- [typescript/no-unsafe-call](/docs/guide/usage/linter/rules/typescript/no-unsafe-call)
- [typescript/no-unsafe-enum-comparison](/docs/guide/usage/linter/rules/typescript/no-unsafe-enum-comparison)
- [typescript/no-unsafe-member-access](/docs/guide/usage/linter/rules/typescript/no-unsafe-member-access)
- [typescript/no-unsafe-return](/docs/guide/usage/linter/rules/typescript/no-unsafe-return)
- [typescript/no-unsafe-type-assertion](/docs/guide/usage/linter/rules/typescript/no-unsafe-type-assertion)
- [typescript/no-unsafe-unary-minus](/docs/guide/usage/linter/rules/typescript/no-unsafe-unary-minus)
- [typescript/non-nullable-type-assertion-style](/docs/guide/usage/linter/rules/typescript/non-nullable-type-assertion-style)
- [typescript/only-throw-error](/docs/guide/usage/linter/rules/typescript/only-throw-error)
- [typescript/prefer-includes](/docs/guide/usage/linter/rules/typescript/prefer-includes)
- [typescript/prefer-promise-reject-errors](/docs/guide/usage/linter/rules/typescript/prefer-promise-reject-errors)
- [typescript/prefer-reduce-type-parameter](/docs/guide/usage/linter/rules/typescript/prefer-reduce-type-parameter)
- [typescript/prefer-return-this-type](/docs/guide/usage/linter/rules/typescript/prefer-return-this-type)
- [typescript/promise-function-async](/docs/guide/usage/linter/rules/typescript/promise-function-async)
- [typescript/related-getter-setter-pairs](/docs/guide/usage/linter/rules/typescript/related-getter-setter-pairs)
- [typescript/require-array-sort-compare](/docs/guide/usage/linter/rules/typescript/require-array-sort-compare)
- [typescript/require-await](/docs/guide/usage/linter/rules/typescript/require-await)
- [typescript/restrict-plus-operands](/docs/guide/usage/linter/rules/typescript/restrict-plus-operands)
- [typescript/restrict-template-expressions](/docs/guide/usage/linter/rules/typescript/restrict-template-expressions)
- [typescript/return-await](/docs/guide/usage/linter/rules/typescript/return-await)
- [typescript/strict-boolean-expressions](/docs/guide/usage/linter/rules/typescript/strict-boolean-expressions)
- [typescript/switch-exhaustiveness-check](/docs/guide/usage/linter/rules/typescript/switch-exhaustiveness-check)
- [typescript/unbound-method](/docs/guide/usage/linter/rules/typescript/unbound-method)
- [typescript/use-unknown-in-catch-callback-variable](/docs/guide/usage/linter/rules/typescript/use-unknown-in-catch-callback-variable)

## TypeScript Compatibility

tsgolint is based on [typescript-go](https://github.com/microsoft/typescript-go) (Microsoft's TypeScript v7.0 rewrite in Go), not the original TypeScript compiler written in TypeScript.

**Key implications:**

- Only TypeScript 7.0+ features are supported
- Pre-7.0 syntax and features (like `baseUrl` in `tsconfig.json`) are not supported
- If you're using deprecated features that were deprecated in TypeScript 6.0 or removed in TypeScript 7.0, you'll need to migrate your codebase first

For help migrating deprecated tsconfig options, see the [TypeScript migration guide](https://github.com/microsoft/TypeScript/issues/62508#issuecomment-3348649259).

## Architecture

Type-aware linting in Oxlint uses a unique two-binary architecture:

```
oxlint CLI (Rust)
  ├─ Handles file traversal, ignore logic, and diagnostics
  ├─ Runs non-type-aware rules and custom JS plugins
  ├─ Passes paths and configuration to tsgolint
  └─ Formats and displays results

tsgolint (Go)
  ├─ Uses typescript-go directly for type checking
  ├─ Executes type-aware rules
  └─ Returns structured diagnostics
```

This design keeps Oxlint's core fast while leveraging TypeScript's type system through typescript-go. The frontend-backend separation means `oxlint` controls the user experience while `tsgolint` handles the heavy lifting of type analysis.