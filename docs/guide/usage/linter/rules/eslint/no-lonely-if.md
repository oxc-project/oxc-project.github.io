---
url: /docs/guide/usage/linter/rules/eslint/no-lonely-if.md
---

### What it does

Disallow `if` statements as the only statement in `else` blocks

### Why is this bad?

When an `if` statement is the only statement in an `else` block, it is often clearer to use
an `else if` instead.

### Examples

Examples of **incorrect** code for this rule:

```js
if (condition) {
  // ...
} else {
  if (anotherCondition) {
    // ...
  }
}
```

```js
if (condition) {
  // ...
} else {
  if (anotherCondition) {
    // ...
  } else {
    // ...
  }
}
```

Examples of **correct** code for this rule:

```js
if (condition) {
  // ...
} else if (anotherCondition) {
  // ...
}
```

```js
if (condition) {
  // ...
} else if (anotherCondition) {
  // ...
} else {
  // ...
}
```

```js
if (condition) {
  // ...
} else {
  if (anotherCondition) {
    // ...
  }
  doSomething();
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-lonely-if": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-lonely-if
```

:::

## References

* Rule Source
