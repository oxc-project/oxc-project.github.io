---
url: /docs/guide/usage/linter/rules/eslint/preserve-caught-error.md
---
# eslint/preserve-caught-error&#x20;

### What it does

Enforces that when re-throwing an error in a catch block, the original error
is preserved using the 'cause' property.

### Why is this bad?

Re-throwing an error without preserving the original error loses important
debugging information and makes it harder to trace the root cause of issues.

### Examples

Examples of **incorrect** code for this rule:

```js
try {
  doSomething();
} catch (err) {
  throw new Error("Something failed");
}
```

Examples of **correct** code for this rule:

```js
try {
  doSomething();
} catch (err) {
  throw new Error("Something failed", { cause: err });
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### requireCatchParameter

type: `boolean`

default: `false`

When set to `true`, requires that catch clauses always have a parameter.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "preserve-caught-error": "error"
  }
}
```

```bash [CLI]
oxlint --deny preserve-caught-error
```

:::

## References

* Rule Source
