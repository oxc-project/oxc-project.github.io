---
url: /docs/guide/usage/linter/rules/eslint/class-methods-use-this.md
---

### What it does

Enforce that class methods utilize this.

### Examples

Examples of **incorrect** code for this rule:

```js
class A {
  foo() {
    console.log("Hello World");
  }
}
```

Examples of **correct** code for this rule:

```js
class A {
  foo() {
    this.bar = "Hello World"; // OK, this is used
  }
}

class B {
  constructor() {
    // OK. constructor is exempt
  }
}

class C {
  static foo() {
    // OK. static methods aren't expected to use this.
  }
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### enforceForClassFields

type: `boolean`

default: `true`

Enforce this rule for class fields that are functions.

### exceptMethods

type: `array`

default: `[]`

List of method names to exempt from this rule.

#### exceptMethods\[n]

type: `object`

##### exceptMethods\[n].name

type: `string`

##### exceptMethods\[n].private

type: `boolean`

### ignoreClassesWithImplements

type: `"all" | "public-fields"`

default: `null`

Whether to ignore classes that implement interfaces.

### ignoreOverrideMethods

type: `boolean`

default: `false`

Whether to ignore methods that are overridden.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "class-methods-use-this": "error"
  }
}
```

```bash [CLI]
oxlint --deny class-methods-use-this
```

:::

## References

* Rule Source
