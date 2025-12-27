---
url: /docs/guide/usage/linter/rules/unicorn/prefer-array-find.md
---
# unicorn/prefer-array-find&#x20;

### What it does

Encourages using `Array.prototype.find` instead of `filter(...)[0]` or
similar patterns when only the first matching element is needed.

### Why is this bad?

Using `filter(...)[0]` to get the first match is less efficient and more verbose
than using `find(...)`. `find` short-circuits when a match is found,
whereas `filter` evaluates the entire array.

### Examples

Examples of **incorrect** code for this rule:

```js
const match = users.filter((u) => u.id === id)[0];
const match = users.filter(fn).shift();
```

Examples of **correct** code for this rule:

```js
const match = users.find((u) => u.id === id);
const match = users.find(fn);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-array-find": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-array-find
```

:::

## References

* Rule Source
