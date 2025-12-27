---
url: /docs/guide/usage/linter/rules/eslint/no-unreachable.md
---
# eslint/no-unreachable&#x20;

### What it does

Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.

This rule can be disabled for TypeScript code if `allowUnreachableCode: false` is configured
in the `tsconfig.json`, as the TypeScript compiler enforces this check.

### Why is this bad?

Unreachable code after a `return`, `throw`, `continue`, or `break` statement can never be run.

### Examples

Examples of **incorrect** code for this rule:

```ts
function foo() {
  return 2;
  console.log("this will never be executed");
}
```

Examples of **correct** code for this rule:

```ts
function foo() {
  console.log("this will be executed");
  return 2;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unreachable": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-unreachable
```

:::

## References

* Rule Source
