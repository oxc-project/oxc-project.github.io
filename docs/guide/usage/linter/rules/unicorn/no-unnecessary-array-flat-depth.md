---
url: /docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-flat-depth.md
---

### What it does

Disallows passing `1` to `Array.prototype.flat`

### Why is this bad?

Passing `1` is unnecessary.

### Examples

Examples of **incorrect** code for this rule:

```js
foo.flat(1);
```

Examples of **correct** code for this rule:

```js
foo.flat();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-unnecessary-array-flat-depth": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-unnecessary-array-flat-depth
```

:::

## References

* Rule Source
