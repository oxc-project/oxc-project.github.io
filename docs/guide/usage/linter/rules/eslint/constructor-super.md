---
url: /docs/guide/usage/linter/rules/eslint/constructor-super.md
---

### What it does

Requires `super()` calls in constructors of derived classes and disallows `super()` calls
in constructors of non-derived classes.

This rule can be disabled for TypeScript code, as the TypeScript compiler
enforces this check.

### Why is this bad?

In JavaScript, calling `super()` in the constructor of a derived class (a class that extends
another class) is required. Failing to do so will result in a ReferenceError at runtime.
Conversely, calling `super()` in a non-derived class is a syntax error.

### Examples

Examples of **incorrect** code for this rule:

```js
// Missing super() call
class A extends B {
    constructor() { }
}

// super() in non-derived class
class A {
    constructor() {
        super();
    }
}

// super() only in some code paths
class C extends D {
    constructor() {
        if (condition) {
            super();
        }
    }
}
```

Examples of **correct** code for this rule:

```js
// Proper super() call in derived class
class A extends B {
  constructor() {
    super();
  }
}

// No super() in non-derived class
class A {
  constructor() {}
}

// super() in all code paths
class C extends D {
  constructor() {
    if (condition) {
      super();
    } else {
      super();
    }
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "constructor-super": "error"
  }
}
```

```bash [CLI]
oxlint --deny constructor-super
```

:::

## References

* Rule Source
