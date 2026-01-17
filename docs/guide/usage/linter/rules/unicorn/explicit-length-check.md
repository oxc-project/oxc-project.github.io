---
url: /docs/guide/usage/linter/rules/unicorn/explicit-length-check.md
---

### What it does

Enforce explicitly comparing the length or size property of a value.

### Why is this bad?

### Examples

Examples of **incorrect** code for this rule:

```javascript
const isEmpty = foo.length == 0;
const isEmpty = foo.length < 1;
const isEmpty = 0 === foo.length;
const isEmpty = 0 == foo.length;
const isEmpty = 1 > foo.length;

const isEmpty = !foo.length;
const isEmpty = !(foo.length > 0);
const isEmptySet = !foo.size;
```

Examples of **correct** code for this rule:

```javascript
const isEmpty = foo.length === 0;
```

## Configuration

This rule accepts a configuration object with the following properties:

### non-zero

type: `"greater-than" | "not-equal"`

default: `"greater-than"`

Configuration option to specify how non-zero length checks should be enforced.

`greater-than`: Enforces non-zero to be checked with `foo.length > 0`
`not-equal`: Enforces non-zero to be checked with `foo.length !== 0`

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/explicit-length-check": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/explicit-length-check
```

:::

## References

* Rule Source
