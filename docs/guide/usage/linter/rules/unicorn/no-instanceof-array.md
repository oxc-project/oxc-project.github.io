---
url: /docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md
---

### What it does

Require `Array.isArray()` instead of `instanceof Array`.

### Why is this bad?

The instanceof Array check doesn't work across realms/contexts, for example, frames/windows in browsers or the vm module in Node.js.

### Examples

Examples of **incorrect** code for this rule:

```javascript
array instanceof Array;
[1, 2, 3] instanceof Array;
```

Examples of **correct** code for this rule:

```javascript
Array.isArray(array);
Array.isArray([1, 2, 3]);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-instanceof-array": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-instanceof-array
```

:::

## References

* Rule Source
