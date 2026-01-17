---
url: /docs/guide/usage/linter/rules/unicorn/numeric-separators-style.md
---

### What it does

Enforces a convention of grouping digits using numeric separators.

### Why is this bad?

Long numbers can become really hard to read, so cutting it into groups of digits,
separated with a \_, is important to keep your code clear. This rule also enforces
a proper usage of the numeric separator, by checking if the groups of digits are
of the correct size.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const invalid = [1_23_4444, 1_234.56789, 0xab_c_d_ef, 0b10_00_1111, 0o1_0_44_21, 1_294_28771_2n];
```

Examples of **correct** code for this rule:

```javascript
const valid = [1_234_567, 1_234.567_89, 0xab_cd_ef, 0b1000_1111, 0o10_4421, 1_294_287_712n];
```

## Configuration

This rule accepts a configuration object with the following properties:

### binary

type: `object`

Configuration for binary literals (e.g. `0b1010_0001` and bigint variants).
Controls how digits are grouped and when separators are applied.

#### binary.groupLength

type: `integer`

The number of digits per group when inserting numeric separators.
For example, a `groupLength` of 3 formats `1234567` as `1_234_567`.

#### binary.minimumDigits

type: `integer`

The minimum number of digits required before grouping is applied.
Values with fewer digits than this threshold will not be grouped.

### hexadecimal

type: `object`

Configuration for hexadecimal literals (e.g. `0xAB_CD`, `0Xab_cd`, and bigint variants).
Controls how digits are grouped and when separators are applied.

#### hexadecimal.groupLength

type: `integer`

The number of digits per group when inserting numeric separators.
For example, a `groupLength` of 3 formats `1234567` as `1_234_567`.

#### hexadecimal.minimumDigits

type: `integer`

The minimum number of digits required before grouping is applied.
Values with fewer digits than this threshold will not be grouped.

### number

type: `object`

Configuration for decimal numbers (integers, fraction parts, and exponents).
Controls how digits are grouped and when separators are applied.

#### number.groupLength

type: `integer`

The number of digits per group when inserting numeric separators.
For example, a `groupLength` of 3 formats `1234567` as `1_234_567`.

#### number.minimumDigits

type: `integer`

The minimum number of digits required before grouping is applied.
Values with fewer digits than this threshold will not be grouped.

### octal

type: `object`

Configuration for octal literals (e.g. `0o1234_5670` and bigint variants).
Controls how digits are grouped and when separators are applied.

#### octal.groupLength

type: `integer`

The number of digits per group when inserting numeric separators.
For example, a `groupLength` of 3 formats `1234567` as `1_234_567`.

#### octal.minimumDigits

type: `integer`

The minimum number of digits required before grouping is applied.
Values with fewer digits than this threshold will not be grouped.

### onlyIfContainsSeparator

type: `boolean`

default: `false`

Only enforce the rule when the numeric literal already contains a separator (`_`).

When `true`, numbers without separators are left as-is; when `false` (default),
grouping will be enforced for eligible numbers even if they don't include separators yet.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/numeric-separators-style": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/numeric-separators-style
```

:::

## References

* Rule Source
