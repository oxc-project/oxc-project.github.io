---
url: /docs/guide/usage/linter/rules/vitest/prefer-describe-function-title.md
---

### What it does

When testing a specific function, this rule aims to enforce passing a named function to describe()
instead of an equivalent hardcoded string.

### Why is this bad?

Tests that are related to a specific function, if the function being tested is renamed,
the describe title will be not match anymore and can make confusion in the future. Using the function
ensure a consistency even if the function is renamed.

### Examples

Examples of **incorrect** code for this rule:

```js
// myFunction.test.js
import { myFunction } from "./myFunction";

describe("myFunction", () => {
  // ...
});
```

Examples of **correct** code for this rule:

```js
// myFunction.test.js
import { myFunction } from "./myFunction";

describe(myFunction, () => {
  // ...
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/prefer-describe-function-title": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/prefer-describe-function-title --vitest-plugin
```

:::

## References

* Rule Source
