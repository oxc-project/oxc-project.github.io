---
url: /docs/guide/usage/linter/rules/eslint/no-continue.md
---

### What it does

Disallow `continue` statements

### Why is this bad?

The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration. When used incorrectly it makes code less testable, less readable and less maintainable. Structured control flow statements such as if should be used instead.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var sum = 0,
  i;

for (i = 0; i < 10; i++) {
  if (i >= 5) {
    continue;
  }

  sum += i;
}
```

Examples of **correct** code for this rule:

```javascript
var sum = 0,
  i;
for (i = 0; i < 10; i++) {
  if (i < 5) {
    sum += i;
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-continue": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-continue
```

:::

## References

* Rule Source
