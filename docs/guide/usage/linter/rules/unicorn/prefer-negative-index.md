---
url: /docs/guide/usage/linter/rules/unicorn/prefer-negative-index.md
---

### What it does

Prefer negative index over `.length` - index when possible

### Why is this bad?

Conciseness and readability

### Examples

Examples of **incorrect** code for this rule:

```js
foo.slice(foo.length - 2, foo.length - 1);
foo.at(foo.length - 1);
```

Examples of **correct** code for this rule:

```js
foo.slice(-2, -1);
foo.at(-1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-negative-index": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-negative-index
```

:::

## References

* Rule Source
