---
url: /docs/guide/usage/linter/rules/unicorn/prefer-number-properties.md
---

### What it does

Disallows use of `parseInt()`, `parseFloat()`, `isNan()`, `isFinite()`, `Nan`, `Infinity` and `-Infinity` as global variables.

### Why is this bad?

ECMAScript 2015 moved globals onto the `Number` constructor for consistency and to slightly improve them. This rule enforces their usage to limit the usage of globals:

* [`Number.parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) over [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
* [`Number.parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) over [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
* [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) over [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) *(they have slightly [different behavior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#difference_between_number.isnan_and_global_isnan))*
* [`Number.isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) over [`isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite) *(they have slightly [different behavior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#difference_between_number.isfinite_and_global_isfinite))*
* [`Number.NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) over [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
* [`Number.POSITIVE_INFINITY`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY) over [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
* [`Number.NEGATIVE_INFINITY`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY) over [`-Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = parseInt("10", 2);
const bar = parseFloat("10.5");
```

Examples of **correct** code for this rule:

```javascript
const foo = Number.parseInt("10", 2);
const bar = Number.parseFloat("10.5");
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkInfinity

type: `boolean`

default: `false`

If set to `true`, checks for usage of `Infinity` and `-Infinity` as global variables.

### checkNaN

type: `boolean`

default: `true`

If set to `true`, checks for usage of `NaN` as a global variable.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-number-properties": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-number-properties
```

:::

## References

* Rule Source
