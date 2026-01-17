---
url: /docs/guide/usage/linter/rules/unicorn/require-module-specifiers.md
---

### What it does

Enforce non-empty specifier list in `import` and `export` statements.

### Why is this bad?

Empty import/export specifiers add no value and can be confusing.
If you want to import a module for side effects, use `import 'module'` instead.

### Examples

Examples of **incorrect** code for this rule:

```js
import {} from "foo";
import foo from "foo";
export {} from "foo";
export {};
```

Examples of **correct** code for this rule:

```js
import "foo";
import foo from "foo";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/require-module-specifiers": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/require-module-specifiers
```

:::

## References

* Rule Source
