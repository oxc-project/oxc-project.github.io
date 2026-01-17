---
url: /docs/guide/usage/linter/rules/eslint/no-useless-catch.md
---

### What it does

Disallow unnecessary catch clauses

### Why is this bad?

A catch clause that only rethrows the original error is redundant,
and has no effect on the runtime behavior of the program.
These redundant clauses can be a source of confusion and code bloat,
so it’s better to disallow these unnecessary catch clauses.

### Examples

Examples of **incorrect** code for this rule:

```javascript
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}
```

Examples of **correct** code for this rule:

```javascript
doSomethingThatMightThrow();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-useless-catch": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-useless-catch
```

:::

## References

* Rule Source
