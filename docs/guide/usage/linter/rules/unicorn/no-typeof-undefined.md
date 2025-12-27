---
url: /docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.md
---
# unicorn/no-typeof-undefined&#x20;

### What it does

Disallow `typeof` comparisons with `undefined`.

### Why is this bad?

Checking if a value is `undefined` by using `typeof value === 'undefined'` is needlessly verbose. It's generally better to compare against `undefined` directly. The only time `typeof` is needed is when a global variable potentially does not exists, in which case, using `globalThis.value === undefined` may be better.

### Examples

Examples of **incorrect** code for this rule:

```javascript
typeof foo === "undefined";
```

Examples of **correct** code for this rule:

```javascript
foo === undefined;
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkGlobalVariables

type: `boolean`

default: `false`

If set to `true`, also report `typeof x === "undefined"` when `x` may be a global
variable that is not declared (commonly checked via `typeof foo === "undefined"`).

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-typeof-undefined": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-typeof-undefined
```

:::

## References

* Rule Source
