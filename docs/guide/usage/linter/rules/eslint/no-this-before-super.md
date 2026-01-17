---
url: /docs/guide/usage/linter/rules/eslint/no-this-before-super.md
---

### What it does

Requires calling `super()` before using `this` or `super`.

This rule can be disabled for TypeScript code, as the TypeScript compiler
enforces this check.

### Why is this bad?

In the constructor of derived classes, if `this`/`super` are used before `super()` calls,
it raises a `ReferenceError`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
class A1 extends B {
  constructor() {
    // super() needs to be called first
    this.a = 0;
    super();
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-this-before-super": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-this-before-super
```

:::

## References

* Rule Source
