---
url: /docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.md
---
# eslint/no-irregular-whitespace&#x20;

### What it does

Disallows the use of irregular whitespace characters in the code.

### Why is this bad?

Irregular whitespace characters are invisible to most editors and can
cause unexpected behavior, making code harder to debug and maintain.
They can also cause issues with code formatting and parsing.

### Examples

Examples of **incorrect** code for this rule:

```javascript
// Contains irregular whitespace characters (invisible)
function example() {
  var foo = "bar"; // irregular whitespace before 'bar'
}
```

Examples of **correct** code for this rule:

```javascript
function example() {
  var foo = "bar"; // regular spaces only
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-irregular-whitespace": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-irregular-whitespace
```

:::

## References

* Rule Source
