---
url: /docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.md
---

### What it does

Disallow magic numbers for `Array.prototype.flat` depth.

### Why is this bad?

Magic numbers are hard to understand and maintain. When calling `Array.prototype.flat`, it is usually called with `1` or infinity. If you are using a different number, it is better to add a comment explaining the depth.

### Examples

Examples of **incorrect** code for this rule:

```javascript
array.flat(2);
array.flat(20);
```

Examples of **correct** code for this rule:

```javascript
array.flat(2 /* explanation */);
array.flat(1);
array.flat();
array.flat(Infinity);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-magic-array-flat-depth": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-magic-array-flat-depth
```

:::

## References

* Rule Source
