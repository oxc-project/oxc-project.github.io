---
url: /docs/guide/usage/linter/rules/unicorn/switch-case-braces.md
---
# unicorn/switch-case-braces&#x20;

### What it does

Requires empty switch cases to omit braces, while non-empty cases must use braces.
This reduces visual clutter for empty cases and enforces proper scoping for non-empty ones.

### Why is this bad?

Using braces unnecessarily for empty cases adds visual noise,
while omitting braces in non-empty cases can lead to scoping issues.

### Examples

Examples of **incorrect** code for this rule:

```javascript
switch (num) {
  case 1: {
  }
  case 2:
    console.log("Case 2");
    break;
}
```

Examples of **correct** code for this rule:

```javascript
switch (num) {
  case 1:
  case 2: {
    console.log("Case 2");
    break;
  }
}
```

Example config:

```json
"unicorn/switch-case-braces": ["error", "avoid"]
```

## Configuration

This rule accepts one of the following string values:

### `"always"`

Always require braces in case clauses (except empty cases).

### `"avoid"`

Allow braces only when needed for scoping (e.g., variable or function declarations).

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/switch-case-braces": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/switch-case-braces
```

:::

## References

* Rule Source
