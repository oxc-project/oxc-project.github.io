---
url: /docs/guide/usage/linter/rules/eslint/no-loop-func.md
---
# eslint/no-loop-func&#x20;

### What it does

Disallows function declarations and expressions inside loop statements
when they reference variables declared in the outer scope that may change
across iterations.

### Why is this bad?

Writing functions within loops tends to result in errors due to the way
closures work in JavaScript. Functions capture variables by reference,
not by value. When using `var`, which is function-scoped, all iterations
share the same variable binding, leading to unexpected behavior.

### Examples

Examples of **incorrect** code for this rule:

```js
for (var i = 0; i < 10; i++) {
  funcs[i] = function () {
    return i;
  };
}
```

Examples of **correct** code for this rule:

```js
for (let i = 0; i < 10; i++) {
  funcs[i] = function () {
    return i;
  };
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-loop-func": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-loop-func
```

:::

## References

* Rule Source
