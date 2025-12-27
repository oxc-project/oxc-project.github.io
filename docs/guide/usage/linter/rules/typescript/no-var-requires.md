---
url: /docs/guide/usage/linter/rules/typescript/no-var-requires.md
---
# typescript/no-var-requires&#x20;

### What it does

Disallow `require` statements except in import statements

### Why is this bad?

In other words, the use of forms such as var foo = require("foo") are banned. Instead use ES module imports or import foo = require("foo") imports.

```typescript
var foo = require("foo");
const foo = require("foo");
let foo = require("foo");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-var-requires": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-var-requires
```

:::

## References

* Rule Source
