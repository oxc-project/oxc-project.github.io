---
url: /docs/guide/usage/linter/rules/eslint/default-case-last.md
---

### What it does

Requires the `default` clause in `switch` statements to be the last one.

### Why is this bad?

By convention and for readability, the `default` clause should be the last one in a `switch`.
While it is legal to place it before or between `case` clauses, doing so is confusing and may
lead to unexpected "fall-through" behavior.

### Examples

Examples of **incorrect** code for this rule:

```js
/* default-case-last: "error" */

switch (foo) {
  default:
    bar();
    break;
  case "a":
    baz();
    break;
}

switch (foo) {
  case 1:
    bar();
    break;
  default:
    baz();
    break;
  case 2:
    qux();
    break;
}
```

Examples of **correct** code for this rule:

```js
/* default-case-last: "error" */

switch (foo) {
  case 1:
    bar();
    break;
  case 2:
    qux();
    break;
  default:
    baz();
    break;
}

switch (foo) {
  case "x":
    bar();
    break;
  case "y":
  default:
    baz();
    break;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "default-case-last": "error"
  }
}
```

```bash [CLI]
oxlint --deny default-case-last
```

:::

## References

* Rule Source
