---
url: /docs/guide/usage/linter/rules/eslint/no-unsafe-negation.md
---

### What it does

Disallows negating the left operand of relational operators to prevent logical errors
caused by misunderstanding operator precedence or accidental use of negation.

This rule can be disabled for TypeScript code, as the TypeScript compiler
enforces this check.

### Why is this bad?

Negating the left operand of relational operators can result in unexpected behavior due to
operator precedence, leading to logical errors. For instance, `!a in b` may be interpreted
as `(!a) in b` instead of `!(a in b)`, which is not the intended logic.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if ((!key) in object) {
}

if ((!obj) instanceof Ctor) {
}
```

Examples of **correct** code for this rule:

```javascript
if (!(key in object)) {
}

if (!(obj instanceof Ctor)) {
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### enforceForOrderingRelations

type: `boolean`

default: `false`

The `enforceForOrderingRelations` option determines whether negation is allowed
on the left-hand side of ordering relational operators (<, >, <=, >=).

The purpose is to avoid expressions such as `!a < b` (which is equivalent to `(a ? 0 : 1) < b`)
when what is really intended is `!(a < b)`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unsafe-negation": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-unsafe-negation
```

:::

## References

* Rule Source
