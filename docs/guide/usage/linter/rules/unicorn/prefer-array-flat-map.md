---
url: /docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.md
---

### What it does

Prefers the use of `.flatMap()` when `map().flat()` are used together.

### Why is this bad?

It is slightly more efficient to use `.flatMap(…)` instead of `.map(…).flat()`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const bar = [1, 2, 3].map((i) => [i]).flat();
```

Examples of **correct** code for this rule:

```javascript
const bar = [1, 2, 3].flatMap((i) => [i]);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-array-flat-map": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-array-flat-map
```

:::

## References

* Rule Source
