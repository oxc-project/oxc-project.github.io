---
url: /docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.md
---
# unicorn/no-unreadable-array-destructuring&#x20;

### What it does

Disallow unreadable array destructuring

### Why is this bad?

Destructuring is very useful, but it can also make some code harder to read.
This rule prevents ignoring consecutive values when destructuring from an array.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const [, , foo] = parts;
```

Examples of **correct** code for this rule:

```javascript
const [foo] = parts;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-unreadable-array-destructuring": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-unreadable-array-destructuring
```

:::

## References

* Rule Source
