---
url: /docs/guide/usage/linter/rules/unicorn/no-unnecessary-slice-end.md
---

### What it does

Omitting the end argument defaults it to the object's .length.
Passing it explicitly or using Infinity is unnecessary

### Why is this bad?

In JavaScript, omitting the end index already causes .slice() to run to the end of the target,
so explicitly passing its length or Infinity is redundant.

### Examples

Examples of **incorrect** code for this rule:

```js
const foo = string.slice(1, string.length);
const foo = string.slice(1, Infinity);
const foo = string.slice(1, Number.POSITIVE_INFINITY);
```

Examples of **correct** code for this rule:

```js
const foo = string.slice(1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-unnecessary-slice-end": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-unnecessary-slice-end
```

:::

## References

* Rule Source
