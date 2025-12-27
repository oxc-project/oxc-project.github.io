---
url: /docs/guide/usage/linter/rules/eslint/no-extra-bind.md
---
# eslint/no-extra-bind&#x20;

### What it does

Disallow unnecessary calls to .bind()

### Why is this bad?

This rule is aimed at avoiding the unnecessary use of bind()
and as such will warn whenever an immediately-invoked function expression (IIFE) is using bind()
and doesn’t have an appropriate this value.
This rule won’t flag usage of bind() that includes function argument binding.

### Examples

Examples of **incorrect** code for this rule:

```js
const x = function () {
  foo();
}.bind(bar);

const z = (() => {
  this.foo();
}).bind(this);
```

Examples of **correct** code for this rule:

```js
const x = function () {
  this.foo();
}.bind(bar);
const y = function (a) {
  return a + 1;
}.bind(foo, bar);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-extra-bind": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-extra-bind
```

:::

## References

* Rule Source
