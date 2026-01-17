---
url: /docs/guide/usage/linter/rules/unicorn/no-accessor-recursion.md
---

### What it does

Disallow recursive access to this within getters and setters

### Why is this bad?

This rule prevents recursive access to this within getter and setter methods in objects and classes,
avoiding infinite recursion and stack overflow errors.

### Examples

Examples of **incorrect** code for this rule:

```js
const foo = {
  get bar() {
    return this.bar;
  },
};
```

Examples of **correct** code for this rule:

```js
const foo = {
  get bar() {
    return this.baz;
  },
};
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-accessor-recursion": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-accessor-recursion
```

:::

## References

* Rule Source
