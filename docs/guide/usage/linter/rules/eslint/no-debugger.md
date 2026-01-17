---
url: /docs/guide/usage/linter/rules/eslint/no-debugger.md
---

### What it does

Checks for usage of the `debugger` statement

### Why is this bad?

`debugger` statements do not affect functionality when a debugger isn't attached.
They're most commonly an accidental debugging leftover.

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function main() {
  const data = await getData();
  const result = complexCalculation(data);
  debugger;
}
```

Examples of **correct** code for this rule:

```javascript
async function main() {
  const data = await getData();
  const result = complexCalculation(data);
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-debugger": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-debugger
```

:::

## References

* Rule Source
