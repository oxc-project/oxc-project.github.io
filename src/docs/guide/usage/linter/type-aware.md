# Type-Aware Linting

Read our [technical preview announcement](/blog/2025-08-17-oxlint-type-aware) for technical decision and background details.

## Installation

```bash
pnpm add -D oxlint-tsgolint@latest
```

Run `oxlint` with `--type-aware`

```bash
oxlint --type-aware
```

## Unsupported Features

The current version runs the default behavior and does nothing else.

The following issues will be addressed for the alpha version.

- [Allow configuring rules](https://github.com/oxc-project/tsgolint/issues/51)
- [Disable comments are not respected](https://github.com/oxc-project/oxc/issues/13491)
- [Type Checker is not enabled](https://github.com/oxc-project/tsgolint/issues/106)
- [IDE support](https://github.com/oxc-project/tsgolint/issues/71)

## Unimplemented Rules

See https://github.com/oxc-project/tsgolint/issues/104

## Configuration

List of supported rules:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "rules": {
    "typescript/await-thenable": "error",
    "typescript/no-array-delete": "error",
    "typescript/no-base-to-string": "error",
    "typescript/no-confusing-void-expression": "error",
    "typescript/no-duplicate-type-constituents": "error",
    "typescript/no-floating-promises": "error",
    "typescript/no-for-in-array": "error",
    "typescript/no-implied-eval": "error",
    "typescript/no-meaningless-void-operator": "error",
    "typescript/no-misused-promises": "error",
    "typescript/no-misused-spread": "error",
    "typescript/no-mixed-enums": "error",
    "typescript/no-redundant-type-constituents": "error",
    "typescript/no-unnecessary-boolean-literal-compare": "error",
    "typescript/no-unnecessary-template-expression": "error",
    "typescript/no-unnecessary-type-arguments": "error",
    "typescript/no-unnecessary-type-assertion": "error",
    "typescript/no-unsafe-argument": "error",
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-unsafe-call": "error",
    "typescript/no-unsafe-enum-comparison": "error",
    "typescript/no-unsafe-member-access": "error",
    "typescript/no-unsafe-return": "error",
    "typescript/no-unsafe-type-assertion": "error",
    "typescript/no-unsafe-unary-minus": "error",
    "typescript/non-nullable-type-assertion-style": "error",
    "typescript/only-throw-error": "error",
    "typescript/prefer-promise-reject-errors": "error",
    "typescript/prefer-reduce-type-parameter": "error",
    "typescript/prefer-return-this-type": "error",
    "typescript/promise-function-async": "error",
    "typescript/related-getter-setter-pairs": "error",
    "typescript/require-array-sort-compare": "error",
    "typescript/require-await": "error",
    "typescript/restrict-plus-operands": "error",
    "typescript/restrict-template-expressions": "error",
    "typescript/return-await": "error",
    "typescript/switch-exhaustiveness-check": "error",
    "typescript/unbound-method": "error",
    "typescript/use-unknown-in-catch-callback-variable": "error"
  }
}
```
