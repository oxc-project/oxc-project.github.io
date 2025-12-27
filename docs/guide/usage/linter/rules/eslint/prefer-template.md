---
url: /docs/guide/usage/linter/rules/eslint/prefer-template.md
---
# eslint/prefer-template&#x20;

### What it does

Require template literals instead of string concatenation.

### Why is this bad?

In ES2015 (ES6), we can use template literals instead of string concatenation.

### Examples

Examples of **incorrect** code for this rule:

```js
const str = "Hello, " + name + "!";
const str1 = "Time: " + 12 * 60 * 60 * 1000;
```

Examples of **correct** code for this rule:

```js
const str = "Hello World!";
const str2 = `Time: ${12 * 60 * 60 * 1000}`;
const str4 = "Hello, " + "World!";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "prefer-template": "error"
  }
}
```

```bash [CLI]
oxlint --deny prefer-template
```

:::

## References

* Rule Source
