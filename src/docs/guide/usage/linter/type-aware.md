# Type-Aware Linting

Read our [technical preview announcement](/blog/2025-08-17-oxlint-type-aware) and [alpha announcement](/blog/2025-12-08-type-aware-alpha) for background details, and the rationale for the architecture we have chosen for type-aware linting.

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
- [typescript/prefer-nullish-coalescing](/docs/guide/usage/linter/rules/typescript/prefer-nullish-coalescing)
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

## Troubleshooting

### Debugging Unexpected Errors

If you encounter unexpected errors or rules not triggering when expected, types may not be resolving correctly. Run with `--type-check` to verify that all imports are being resolved:

```bash
oxlint --type-aware --type-check
```

This will report TypeScript errors alongside lint diagnostics, helping identify missing or unresolved types.

**Common causes of unresolved types:**

- **Monorepo with bundler (tsdown, tsup, etc.)**: Pre-build dependent packages so their types are available. For example, if package `A` depends on package `B`, build `B` first so its `.d.ts` files exist.
- **Missing dependencies**: Ensure all dependencies are installed (`npm install` / `pnpm install`)

### Debugging Slow Performance

If type-aware linting is running slower than expected:

1. **Update to the latest versions** of both `oxlint` and `oxlint-tsgolint`

2. **Enable debug logging** to see detailed timing information:

```bash
OXC_LOG=debug oxlint --type-aware
```

Example output (showing key timing milestones):

```
2025/01/01 12:00:00.000000 Starting tsgolint
2025/01/01 12:00:00.001000 Starting to assign files to programs. Total files: 259
2025/01/01 12:00:01.000000 Done assigning files to programs. Total programs: 8. Unmatched files: 75
2025/01/01 12:00:01.001000 Starting linter with 12 workers
2025/01/01 12:00:01.001000 Workload distribution: 8 programs
2025/01/01 12:00:01.002000 [1/8] Running linter on program: /path/to/project/jsconfig.json
...
2025/01/01 12:00:01.100000 [4/8] Running linter on program: /path/to/project/tsconfig.json
2025/01/01 12:00:02.500000 Program created with 26140 source files
2025/01/01 12:00:14.000000 /path/to/project/oxlint-plugin.mts
...
2025/01/01 12:00:14.100000 [5/8] Running linter on program: /path/to/project/apps/tsconfig.json
...
2025/01/01 12:00:15.000000 Linting Complete
Finished in 16.4s on 259 files with 161 rules using 12 threads.
```

**How to interpret the log:**

- **File assignment phase** (`Starting to assign files...` → `Done assigning files...`): Maps source files to their tsconfig projects. This phase should be fast. If slow, please file an issue.
- **Program linting** (`[N/M] Running linter on program...`): Each TypeScript project is linted separately. Programs that take significantly longer may indicate expensive type resolution or an overly large project.
  - Look for programs with an unusually high number of source files (e.g., `Program created with 26140 source files`). This may indicate misconfigured tsconfig `includes`/`excludes` pulling in unnecessary files like `node_modules`.
  - Each file path logged indicates when that file is being linted. Large time gaps between files may indicate expensive type resolution for certain files.

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
