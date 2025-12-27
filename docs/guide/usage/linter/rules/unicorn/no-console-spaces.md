---
url: /docs/guide/usage/linter/rules/unicorn/no-console-spaces.md
---
# unicorn/no-console-spaces&#x20;

### What it does

Disallows leading/trailing space inside `console.log()` and similar methods.

### Why is this bad?

The `console.log()` method and similar methods join the parameters with a space so adding a leading/trailing space to a parameter, results in two spaces being added.

### Examples

Examples of **incorrect** code for this rule:

```javascript
console.log("abc ", "def");
```

Examples of **correct** code for this rule:

```javascript
console.log("abc", "def");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-console-spaces": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-console-spaces
```

:::

## References

* Rule Source
