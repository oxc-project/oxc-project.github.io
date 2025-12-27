---
url: /docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.md
---
# oxc/number-arg-out-of-range&#x20;

### What it does

Checks whether the radix or precision arguments of number-related functions exceeds the limit.

### Why is this bad?

The radix argument of `Number.prototype.toString` should be between 2 and 36.
The precision argument of `Number.prototype.toFixed` and `Number.prototype.toExponential` should be between 0 and 20.
The precision argument of `Number.prototype.toPrecision` should be between 1 and 21.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var x = 42;
var s_radix_64 = x.toString(64);
var s = x.toString(1);
```

Examples of **correct** code for this rule:

```javascript
var x = 42;
var s_radix_16 = x.toString(16);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/number-arg-out-of-range": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/number-arg-out-of-range
```

:::

## References

* Rule Source
