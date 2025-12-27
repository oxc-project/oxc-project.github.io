---
url: /docs/guide/usage/linter/rules/unicorn/escape-case.md
---
# unicorn/escape-case&#x20;

### What it does

Enforces defining escape sequence values with uppercase characters rather than lowercase ones.
This promotes readability by making the escaped value more distinguishable from the identifier.

### Why is this bad?

Using lowercase characters in escape sequences makes them less readable and harder to distinguish
from surrounding code. Most style guides recommend uppercase for consistency and clarity.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = "\xa9";
const foo = "\ud834";
const foo = "\u{1d306}";
const foo = "\ca";
```

Examples of **correct** code for this rule:

```javascript
const foo = "\xA9";
const foo = "\uD834";
const foo = "\u{1D306}";
const foo = "\cA";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/escape-case": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/escape-case
```

:::

## References

* Rule Source
