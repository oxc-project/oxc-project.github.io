---
url: /docs/guide/usage/linter/rules/unicorn/require-module-attributes.md
---

### What it does

This rule enforces non-empty attribute list in import/export statements and import() expressions.

### Why is this bad?

Import attributes are meant to provide metadata about how a module should be loaded
(e.g., `with { type: "json" }`). An empty attribute object provides no information
and should be removed.

### Examples

Examples of **incorrect** code for this rule:

```js
import foo from "foo" with {};

export { foo } from "foo" with {};

const foo = await import("foo", {});

const foo = await import("foo", { with: {} });
```

Examples of **correct** code for this rule:

```js
import foo from "foo";

export { foo } from "foo";

const foo = await import("foo");

const foo = await import("foo");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/require-module-attributes": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/require-module-attributes
```

:::

## References

* Rule Source
