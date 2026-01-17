---
url: /docs/guide/usage/linter/rules/import/no-named-default.md
---

### What it does

Reports use of a default export as a locally named import.

### Why is this bad?

Rationale: the syntax exists to import default exports expressively, let's use it.

### Examples

Examples of **incorrect** code for this rule:

```js
// message: Using exported name 'bar' as identifier for default export.
import { default as foo } from "./foo.js";
import { default as foo, bar } from "./foo.js";
```

Examples of **correct** code for this rule:

```js
import foo from "./foo.js";
import foo, { bar } from "./foo.js";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-named-default": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/no-named-default --import-plugin
```

:::

## References

* Rule Source
