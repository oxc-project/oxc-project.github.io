---
url: /docs/guide/usage/linter/rules/eslint/radix.md
---
# eslint/radix&#x20;

### What it does

Enforce the consistent use of the radix argument when using `parseInt()`.

### Why is this bad?

Using the `parseInt()` function without specifying
the radix can lead to unexpected results.

See the
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#radix)
for more information.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var num = parseInt("071"); // 57
```

Examples of **correct** code for this rule:

```javascript
var num = parseInt("071", 10); // 71
```

## Configuration

This rule accepts one of the following string values:

### `"always"`

Always require the radix parameter when using `parseInt()`.

### `"as-needed"`

Only require the radix parameter when necessary.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "radix": "error"
  }
}
```

```bash [CLI]
oxlint --deny radix
```

:::

## References

* Rule Source
