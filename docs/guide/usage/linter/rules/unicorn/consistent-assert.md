---
url: /docs/guide/usage/linter/rules/unicorn/consistent-assert.md
---
# unicorn/consistent-assert&#x20;

### What it does

Enforces consistent usage of the `assert` module.

### Why is this bad?

Inconsistent usage of the `assert` module can lead to confusion and errors.

### Examples

Examples of **incorrect** code for this rule:

```js
import assert from "node:assert";

assert(divide(10, 2) === 5);
```

Examples of **correct** code for this rule:

```js
import assert from "node:assert";

assert.ok(divide(10, 2) === 5);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/consistent-assert": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/consistent-assert
```

:::

## References

* Rule Source
