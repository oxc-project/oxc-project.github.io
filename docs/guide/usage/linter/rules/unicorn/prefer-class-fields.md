---
url: /docs/guide/usage/linter/rules/unicorn/prefer-class-fields.md
---
# unicorn/prefer-class-fields&#x20;

### What it does

Prefers class field declarations over `this` assignments in constructors for static values.

### Why is this bad?

Class field declarations are more readable and less error-prone than assigning static
values to `this` in the constructor. Using class fields keeps the constructor cleaner
and makes the intent clearer.

### Examples

Examples of **incorrect** code for this rule:

```js
class Foo {
  constructor() {
    this.bar = 1;
  }
}
```

Examples of **correct** code for this rule:

```js
class Foo {
  bar = 1;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-class-fields": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-class-fields
```

:::

## References

* Rule Source
