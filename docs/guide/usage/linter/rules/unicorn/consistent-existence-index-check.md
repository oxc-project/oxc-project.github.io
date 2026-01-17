---
url: /docs/guide/usage/linter/rules/unicorn/consistent-existence-index-check.md
---

### What it does

Enforce consistent style for element existence checks with `indexOf()`,
`lastIndexOf()`, `findIndex()`, and `findLastIndex()`. This ensures
that comparisons are performed in a standard and clear way.

### Why is this bad?

This rule is meant to enforce a specific style and improve code clarity.
Using inconsistent comparison styles (e.g., `index < 0`, `index >= 0`)
can make the intention behind the code unclear, especially in large
codebases.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const index = foo.indexOf("bar");
if (index < 0) {
}

const index = foo.indexOf("bar");
if (index >= 0) {
}
```

Examples of **correct** code for this rule:

```javascript
const index = foo.indexOf("bar");
if (index === -1) {
}

const index = foo.indexOf("bar");
if (index !== -1) {
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/consistent-existence-index-check": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/consistent-existence-index-check
```

:::

## References

* Rule Source
