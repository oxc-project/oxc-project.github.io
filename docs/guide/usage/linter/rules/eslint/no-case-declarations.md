---
url: /docs/guide/usage/linter/rules/eslint/no-case-declarations.md
---

### What it does

Disallow lexical declarations in case clauses.

### Why is this bad?

The reason is that the lexical declaration is visible
in the entire switch block but it only gets initialized when it is assigned,
which will only happen if the case where it is defined is reached.

### Examples

Examples of **incorrect** code for this rule:

```javascript
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {}
    break;
  default:
    class C {}
}
```

Examples of **correct** code for this rule:

```javascript
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {}
    break;
  }
  default: {
    class C {}
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-case-declarations": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-case-declarations
```

:::

## References

* Rule Source
