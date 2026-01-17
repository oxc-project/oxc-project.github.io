---
url: /docs/guide/usage/linter/rules/eslint/no-label-var.md
---

### What it does

Disallow labels that share a name with a variable.

### Why is this bad?

This rule aims to create clearer code by disallowing the bad practice of creating a label
that shares a name with a variable that is in scope.

### Examples

Examples of **incorrect** code for this rule:

```js
var x = foo;
function bar() {
  x: for (;;) {
    break x;
  }
}
```

Examples of **correct** code for this rule:

```js
// The variable that has the same name as the label is not in scope.

function foo() {
  var q = t;
}

function bar() {
  q: for (;;) {
    break q;
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-label-var": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-label-var
```

:::

## References

* Rule Source
