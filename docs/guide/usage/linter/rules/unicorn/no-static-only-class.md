---
url: /docs/guide/usage/linter/rules/unicorn/no-static-only-class.md
---

### What it does

Disallow classes that only have static members.

### Why is this bad?

A class with only static members could just be an object instead.

### Examples

Examples of **incorrect** code for this rule:

```javascript
class A {
  static a() {}
}
```

Examples of **correct** code for this rule:

```javascript
class A {
  static a() {}

  constructor() {}
}
```

```javascript
const X = {
  foo: false,
  bar() {},
};
```

```javascript
class X {
  static #foo = false; // private field
  static bar() {}
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-static-only-class": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-static-only-class
```

:::

## References

* Rule Source
