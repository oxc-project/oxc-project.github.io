---
url: /docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.md
---
# unicorn/prefer-math-trunc&#x20;

### What it does

Prefers use of [`Math.trunc()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) instead of bitwise operations for clarity and more reliable results.

It prevents the use of the following bitwise operations:

* `x | 0` ([`bitwise OR`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) with 0)
* `~~x` (two [`bitwise NOT`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT))
* `x >> 0` ([`Signed Right Shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift) with 0)
* `x << 0` ([`Left Shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift) with 0)
* `x ^ 0` ([`bitwise XOR Shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR) with 0)

### Why is this bad?

Using bitwise operations to truncate numbers is not clear and do not work in [some cases](https://stackoverflow.com/a/34706108/11687747).

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = 1.1 | 0;
```

Examples of **correct** code for this rule:

```javascript
const foo = Math.trunc(1.1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-math-trunc": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-math-trunc
```

:::

## References

* Rule Source
