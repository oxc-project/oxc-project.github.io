---
url: /docs/guide/usage/linter/rules/eslint/no-import-assign.md
---
# eslint/no-import-assign&#x20;

### What it does

Disallow assigning to imported bindings.

### Why is this bad?

The updates of imported bindings by ES Modules cause runtime errors.

The TypeScript compiler generally enforces this check already. Although
it should be noted that there are some cases TypeScript does not catch, such
as assignments via `Object.assign`. So this rule is still useful for
TypeScript code in those cases.

### Examples

Examples of **incorrect** code for this rule:

```javascript
import mod, { named } from "./mod.mjs";
import * as mod_ns from "./mod.mjs";

mod = 1; // ERROR: 'mod' is readonly.
named = 2; // ERROR: 'named' is readonly.
mod_ns.named = 3; // ERROR: The members of 'mod_ns' are readonly.
mod_ns = {}; // ERROR: 'mod_ns' is readonly.
// Can't extend 'mod_ns'
Object.assign(mod_ns, { foo: "foo" }); // ERROR: The members of 'mod_ns' are readonly.
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-import-assign": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-import-assign
```

:::

## References

* Rule Source
