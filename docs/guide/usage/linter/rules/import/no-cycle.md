---
url: /docs/guide/usage/linter/rules/import/no-cycle.md
---

### What it does

Ensures that there is no resolvable path back to this module via its dependencies.

This includes cycles of depth 1 (imported module imports me) to an effectively
infinite value, if the `maxDepth` option is not set.

### Why is this bad?

Dependency cycles lead to confusing architectures where bugs become hard to find.
It is common to import an `undefined` value that is caused by a cyclic dependency.

### Examples

Examples of **incorrect** code for this rule:

```javascript
// dep-b.js
import "./dep-a.js";
export function b() {
  /* ... */
}
```

```javascript
// dep-a.js
import { b } from "./dep-b.js"; // reported: Dependency cycle detected.
export function a() {
  /* ... */
}
```

In this example, `dep-a.js` and `dep-b.js` import each other, creating a circular
dependency, which is problematic.

Examples of **correct** code for this rule:

```javascript
// dep-b.js
export function b() {
  /* ... */
}
```

```javascript
// dep-a.js
import { b } from "./dep-b.js"; // no circular dependency
export function a() {
  /* ... */
}
```

In this corrected version, `dep-b.js` no longer imports `dep-a.js`, breaking the cycle.

## Configuration

This rule accepts a configuration object with the following properties:

### allowUnsafeDynamicCyclicDependency

type: `boolean`

default: `false`

Allow cyclic dependency if there is at least one dynamic import in the chain

### ignoreExternal

type: `boolean`

default: `false`

Ignore external modules

### ignoreTypes

type: `boolean`

default: `true`

Ignore type-only imports

### maxDepth

type: `integer`

default: `4294967295`

Maximum dependency depth to traverse

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-cycle": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/no-cycle --import-plugin
```

:::

## References

* Rule Source
