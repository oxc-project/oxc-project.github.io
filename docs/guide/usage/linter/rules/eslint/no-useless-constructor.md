---
url: /docs/guide/usage/linter/rules/eslint/no-useless-constructor.md
---
# eslint/no-useless-constructor&#x20;

### What it does

Disallow constructors that can be safely removed without changing how the class works.

### Why is this bad?

ES2015 provides a default class constructor if one is not specified. As
such, it is unnecessary to provide an empty constructor or one that
simply delegates into its parent class.

::: warning
Caveat: This lint rule will report on constructors whose sole purpose is to change visibility of a parent constructor.
This is because the rule does not have type information to determine if the parent constructor is public, protected, or private.
:::

### Examples

Examples of **incorrect** code for this rule:

```javascript
class A {
  constructor() {}
}

class B extends A {
  constructor(...args) {
    super(...args);
  }
}
```

Examples of **correct** code for this rule:

```javascript
class A {}

class B {
  constructor() {
    doSomething();
  }
}

class C extends A {
  constructor() {
    super("foo");
  }
}

class D extends A {
  constructor() {
    super();
    doSomething();
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-useless-constructor": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-useless-constructor
```

:::

## References

* Rule Source
