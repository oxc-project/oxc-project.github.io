---
url: /docs/guide/usage/linter/rules/unicorn/no-array-method-this-argument.md
---
# unicorn/no-array-method-this-argument&#x20;

### What it does

Disallows the use of the `thisArg` parameter in array iteration methods such as
`map`, `filter`, `some`, `every`, and similar.

### Why is this bad?

The `thisArg` parameter makes code harder to understand and reason about. Instead,
prefer arrow functions or bind explicitly in a clearer way. Arrow functions inherit
`this` from the lexical scope, which is more intuitive and less error-prone.

### Examples

Examples of **incorrect** code for this rule:

```js
array.map(function (x) {
  return x + this.y;
}, this);
array.filter(function (x) {
  return x !== this.value;
}, this);
```

Examples of **correct** code for this rule:

```js
array.map((x) => x + this.y);
array.filter((x) => x !== this.value);
const self = this;
array.map(function (x) {
  return x + self.y;
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-array-method-this-argument": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-array-method-this-argument
```

:::

## References

* Rule Source
