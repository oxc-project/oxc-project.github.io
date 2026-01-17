---
url: /docs/guide/usage/linter/rules/promise/no-return-in-finally.md
---

### What it does

Disallow return statements in a finally() callback of a promise.

### Why is this bad?

Disallow return statements inside a callback passed to finally(), since nothing would
consume what's returned.

### Examples

Examples of **incorrect** code for this rule:

```javascript
myPromise.finally(function (val) {
  return val;
});
```

Examples of **correct** code for this rule:

```javascript
Promise.resolve(1).finally(() => {
  console.log(2);
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/no-return-in-finally": "error"
  }
}
```

```bash [CLI]
oxlint --deny promise/no-return-in-finally --promise-plugin
```

:::

## References

* Rule Source
