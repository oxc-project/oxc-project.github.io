---
url: /docs/guide/usage/linter/rules/unicorn/no-lonely-if.md
---

### What it does

Disallow `if` statements as the only statement in `if` blocks without `else`.

### Why is this bad?

It can be confusing to have an `if` statement without an `else` clause as the only statement in an `if` block.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (foo) {
  if (bar) {
  }
}
if (foo) if (bar) baz();
```

Examples of **correct** code for this rule:

```javascript
if (foo && bar) {
}
if (foo && bar) baz();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-lonely-if": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-lonely-if
```

:::

## References

* Rule Source
