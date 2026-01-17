---
url: /docs/guide/usage/linter/rules/eslint/no-loss-of-precision.md
---

### What it does

Disallow precision loss of number literal.

### Why is this bad?

It can lead to unexpected results in certain situations.
For example, when performing mathematical operations.

In JavaScript, Numbers are stored as double-precision floating-point numbers
according to the IEEE 754 standard. Because of this, numbers can only
retain accuracy up to a certain amount of digits. If the programmer
enters additional digits, those digits will be lost in the conversion
to the Number type and will result in unexpected/incorrect behavior.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var x = 2e999;
```

```javascript
var x = 9007199254740993;
```

```javascript
var x = 5123000000000000000000000000001;
```

```javascript
var x = 1230000000000000000000000.0;
```

```javascript
var x = 0x200000_0000000_1;
```

Examples of **correct** code for this rule:

```javascript
var x = 12345;
```

```javascript
var x = 123.456;
```

```javascript
var x = 123.0;
```

```javascript
var x = 123e34;
```

```javascript
var x = 0x1fff_ffff_fff_fff;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-loss-of-precision": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-loss-of-precision
```

:::

## References

* Rule Source
