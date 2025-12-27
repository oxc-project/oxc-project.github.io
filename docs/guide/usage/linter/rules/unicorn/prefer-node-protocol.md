---
url: /docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.md
---
# unicorn/prefer-node-protocol&#x20;

### What it does

Prefer using the `node:protocol` when importing Node.js builtin modules

### Why is this bad?

Node.js builtin modules should be imported using the `node:` protocol to avoid ambiguity with local modules.

### Examples

Examples of **incorrect** code for this rule:

```javascript
import fs from "fs";
```

Examples of **correct** code for this rule:

```javascript
import fs from "node:fs";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-node-protocol": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-node-protocol
```

:::

## References

* Rule Source
