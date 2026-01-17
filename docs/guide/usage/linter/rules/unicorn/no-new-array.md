---
url: /docs/guide/usage/linter/rules/unicorn/no-new-array.md
---

### What it does

Disallow `new Array()`.

### Why is this bad?

When using the `Array` constructor with one argument, it's not clear whether the argument is meant to be the length of the array or the only element.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const array = new Array(1);
const array = new Array(42);
const array = new Array(foo);
```

Examples of **correct** code for this rule:

```javascript
const array = Array.from({ length: 42 });
const array = [42];
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-new-array": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-new-array
```

:::

## References

* Rule Source
