---
url: /docs/guide/usage/linter/rules/unicorn/consistent-empty-array-spread.md
---
# unicorn/consistent-empty-array-spread&#x20;

### What it does

When spreading a ternary in an array, we can use both \[] and '' as fallbacks,
but it's better to have consistent types in both branches.

### Why is this bad?

Having consistent types in both branches makes the code easier to read and understand.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const array = [a, ...(foo ? [b, c] : "")];

const array = [a, ...(foo ? "bc" : [])];
```

Examples of **correct** code for this rule:

```javascript
const array = [a, ...(foo ? [b, c] : [])];

const array = [a, ...(foo ? "bc" : "")];
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/consistent-empty-array-spread": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/consistent-empty-array-spread
```

:::

## References

* Rule Source
