---
url: /docs/guide/usage/linter/rules/eslint/no-useless-rename.md
---

### What it does

Disallow renaming import, export, and destructured assignments to the same name.

### Why is this bad?

It is unnecessary to rename a variable to the same name.

### Examples

Examples of **incorrect** code for this rule:

```javascript
import { foo as foo } from "foo";
const { bar: bar } = obj;
export { baz as baz };
```

Examples of **correct** code for this rule:

```javascript
import { foo } from "foo";
const { bar: renamed } = obj;
export { baz };
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignoreDestructuring

type: `boolean`

default: `false`

When set to `true`, allows using the same name in destructurings.

### ignoreExport

type: `boolean`

default: `false`

When set to `true`, allows renaming exports to the same name.

### ignoreImport

type: `boolean`

default: `false`

When set to `true`, allows renaming imports to the same name.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-useless-rename": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-useless-rename
```

:::

## References

* Rule Source
