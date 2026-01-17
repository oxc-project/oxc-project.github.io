---
url: /docs/guide/usage/linter/rules/import/no-named-as-default.md
---

### What it does

Reports use of an exported name as the locally imported name of a default export.
This happens when an imported default export is assigned a name that conflicts
with a named export from the same module.

### Why is this bad?

Using a named export's identifier for a default export can cause confusion
and errors in understanding which value is being imported. It also reduces
code clarity, making it harder for other developers to understand the intended
imports.

### Examples

Given

```javascript
// foo.js
export default "foo";
export const bar = "baz";
```

Examples of **incorrect** code for this rule:

```javascript
// Invalid: using exported name 'bar' as the identifier for default export.
import bar from "./foo.js";
```

Examples of **correct** code for this rule:

```javascript
// Valid: correctly importing default export with a non-conflicting name.
import foo from "./foo.js";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-named-as-default": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/no-named-as-default --import-plugin
```

:::

## References

* Rule Source
