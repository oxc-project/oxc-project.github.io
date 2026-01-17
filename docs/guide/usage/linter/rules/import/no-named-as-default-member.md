---
url: /docs/guide/usage/linter/rules/import/no-named-as-default-member.md
---

### What it does

Reports the use of an exported name (named export) as a property on the
default export. This occurs when trying to access a named export through
the default export, which is incorrect.

### Why is this bad?

Accessing a named export via the default export is incorrect and will not
work as expected. Named exports should be imported directly, while default
exports are accessed without properties. This mistake can lead to runtime
errors or undefined behavior.

### Examples

Given

```javascript
// ./bar.js
export function bar() {
  return null;
}
export default () => {
  return 1;
};
```

Examples of **incorrect** code for this rule:

```javascript
// ./foo.js
import foo from "./bar";
const bar = foo.bar; // Incorrect: trying to access named export via default
```

Examples of **correct** code for this rule:

```javascript
// ./foo.js
import { bar } from "./bar"; // Correct: accessing named export directly
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-named-as-default-member": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/no-named-as-default-member --import-plugin
```

:::

## References

* Rule Source
