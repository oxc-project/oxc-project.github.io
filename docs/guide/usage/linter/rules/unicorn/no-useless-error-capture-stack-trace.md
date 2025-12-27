---
url: /docs/guide/usage/linter/rules/unicorn/no-useless-error-capture-stack-trace.md
---
# unicorn/no-useless-error-capture-stack-trace&#x20;

### What it does

Disallows unnecessary `Error.captureStackTrace(…)` in error constructors.

### Why is this bad?

Calling `Error.captureStackTrace(…)` inside the constructor of a built-in `Error` subclass
is unnecessary, since the `Error` constructor calls it automatically.

### Examples

Examples of **incorrect** code for this rule:

```js
class MyError extends Error {
  constructor() {
    Error.captureStackTrace(this, MyError);
  }
}
```

Examples of **correct** code for this rule:

```js
class MyError extends Error {
  constructor() {
    // No need to call Error.captureStackTrace
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-useless-error-capture-stack-trace": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-useless-error-capture-stack-trace
```

:::

## References

* Rule Source
