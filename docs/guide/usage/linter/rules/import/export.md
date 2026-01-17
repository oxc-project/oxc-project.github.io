---
url: /docs/guide/usage/linter/rules/import/export.md
---

### What it does

Reports funny business with exports, like repeated exports of names or defaults.

### Why is this bad?

Having multiple exports of the same name can lead to ambiguity and confusion
in the codebase. It makes it difficult to track which export is being used
and can result in runtime errors if the wrong export is referenced.

### Examples

Examples of **incorrect** code for this rule:

```javascript
let foo;
export { foo }; // Multiple exports of name 'foo'.
export * from "./export-all"; // Conflicts if export-all.js also exports foo
```

Examples of **correct** code for this rule:

```javascript
let foo;
export { foo as foo1 }; // Renamed export to avoid conflict
export * from "./export-all"; // No conflict if export-all.js also exports foo
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/export": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/export --import-plugin
```

:::

## References

* Rule Source
