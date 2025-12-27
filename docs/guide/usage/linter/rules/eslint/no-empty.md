---
url: /docs/guide/usage/linter/rules/eslint/no-empty.md
---
# eslint/no-empty&#x20;

### What it does

Disallows empty block statements

### Why is this bad?

Empty block statements, while not technically errors, usually occur due to refactoring that wasn’t completed.
They can cause confusion when reading code.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (condition) {
}
```

Examples of **correct** code for this rule:

```javascript
if (condition) {
  throw new Error("condition should be false");
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowEmptyCatch

type: `boolean`

default: `false`

If set to `true`, allows an empty `catch` block without triggering the linter.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-empty": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-empty
```

:::

## References

* Rule Source
