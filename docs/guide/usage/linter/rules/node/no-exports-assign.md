---
url: /docs/guide/usage/linter/rules/node/no-exports-assign.md
---
# node/no-exports-assign&#x20;

### What it does

Disallows assignment to `exports`.

### Why is this bad?

Directly using `exports = {}` can lead to confusion and potential bugs
because it reassigns the `exports` object, which may break module
exports. It is more predictable and clearer to use `module.exports`
directly or in conjunction with `exports`.

This rule is aimed at disallowing `exports = {}`, but allows
`module.exports = exports = {}` to avoid conflict with `n/exports-style`
rule's `allowBatchAssign` option.

### Examples

Examples of **incorrect** code for this rule:

```js
exports = {};
```

Examples of **correct** code for this rule:

```js
module.exports.foo = 1;
exports.bar = 2;
module.exports = {};

// allows `exports = {}` if along with `module.exports =`
module.exports = exports = {};
exports = module.exports = {};
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["node"],
  "rules": {
    "node/no-exports-assign": "error"
  }
}
```

```bash [CLI]
oxlint --deny node/no-exports-assign --node-plugin
```

:::

## References

* Rule Source
