---
url: /docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.md
---
# unicorn/no-useless-switch-case&#x20;

### What it does

Disallows useless default cases in switch statements.

### Why is this bad?

An empty case before the last default case is useless.

### Examples

Examples of **incorrect** code for this rule:

```javascript
switch (foo) {
  case 1:
  default:
    handleDefaultCase();
    break;
}
```

Examples of **correct** code for this rule:

```javascript
switch (foo) {
  case 1:
  case 2:
    handleCase1And2();
    break;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-useless-switch-case": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-useless-switch-case
```

:::

## References

* Rule Source
