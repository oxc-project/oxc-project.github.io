---
url: /docs/guide/usage/linter/rules/import/namespace.md
---

### What it does

Enforces names exist at the time they are dereferenced, when imported as
a full namespace (i.e. `import * as foo from './foo'; foo.bar();` will
report if bar is not exported by `./foo.`). Will report at the import
declaration if there are no exported names found. Also, will report for
computed references (i.e. `foo["bar"]()`). Reports on assignment to a
member of an imported namespace.

### Why is this bad?

Dereferencing a name that does not exist can lead to runtime errors and
unexpected behavior in your code. It makes the code less reliable and
harder to maintain, as it may not be clear which names are valid. This
rule helps ensure that all referenced names are defined, improving
the clarity and robustness of your code.

### Examples

Given

```javascript
// ./foo.js
export const bar = "I'm bar";
```

Examples of **incorrect** code for this rule:

```javascript
// ./qux.js
import * as foo from "./foo";
foo.notExported(); // Error: notExported is not exported

// Assignment to a member of an imported namespace
foo.bar = "new value"; // Error: bar cannot be reassigned

// Computed reference to a non-existent export
const method = "notExported";
foo[method](); // Error: notExported does not exist
```

Examples of **correct** code for this rule:

```javascript
// ./baz.js
import * as foo from "./foo";
console.log(foo.bar); // Valid: bar is exported

// Computed reference
const method = "bar";
foo[method](); // Valid: method refers to an exported function
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowComputed

type: `boolean`

default: `false`

Whether to allow computed references to an imported namespace.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/namespace": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/namespace --import-plugin
```

:::

## References

* Rule Source
