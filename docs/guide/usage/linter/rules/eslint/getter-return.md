---
url: /docs/guide/usage/linter/rules/eslint/getter-return.md
---
# eslint/getter-return&#x20;

### What it does

Requires all getters to have a `return` statement.

### Why is this bad?

Getters should always return a value. If they don't, it's probably a mistake.

This rule does not run on TypeScript files, since type checking will
catch getters that do not return a value.

### Examples

Examples of **incorrect** code for this rule:

```javascript
class Person {
  get name() {
    // no return
  }
}

const obj = {
  get foo() {
    // object getter are also checked
  },
};
```

Examples of **correct** code for this rule:

```javascript
class Person {
  get name() {
    return this._name;
  }
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowImplicit

type: `boolean`

default: `false`

When set to `true`, allows getters to implicitly return `undefined` with a `return` statement containing no expression.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "getter-return": "error"
  }
}
```

```bash [CLI]
oxlint --deny getter-return
```

:::

## References

* Rule Source
