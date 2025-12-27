---
url: /docs/guide/usage/linter/rules/eslint/no-obj-calls.md
---
# eslint/no-obj-calls&#x20;

### What it does

Disallow calling some global objects as functions.

This rule can be disabled for TypeScript code, as the TypeScript compiler
enforces this check.

### Why is this bad?

Some global objects are not intended to be called as functions.
Calling them as functions will usually result in a TypeError being thrown.

### Examples

Examples of **incorrect** code for this rule:

```javascript
let math = Math();
let newMath = new Math();

let json = JSON();
let newJson = new JSON();

let atomics = Atomics();
let newAtomics = new Atomics();

let intl = Intl();
let newIntl = new Intl();

let reflect = Reflect();
let newReflect = new Reflect();
```

Examples of **correct** code for this rule:

```javascript
let area = (r) => 2 * Math.PI * r * r;
let object = JSON.parse("{}");
let first = Atomics.load(sharedArray, 0);
let segmenterFrom = Intl.Segmenter("fr", { granularity: "word" });
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-obj-calls": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-obj-calls
```

:::

## References

* Rule Source
