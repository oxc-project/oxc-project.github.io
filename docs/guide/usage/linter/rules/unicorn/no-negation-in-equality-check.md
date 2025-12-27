---
url: /docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.md
---
# unicorn/no-negation-in-equality-check&#x20;

### What it does

Disallow negated expressions on the left of (in)equality checks.

### Why is this bad?

A negated expression on the left of an (in)equality check is likely a mistake from trying to negate the whole condition.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (!foo === bar) {
}

if (!foo !== bar) {
}
```

Examples of **correct** code for this rule:

```javascript
if (foo !== bar) {
}

if (!(foo === bar)) {
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-negation-in-equality-check": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-negation-in-equality-check
```

:::

## References

* Rule Source
