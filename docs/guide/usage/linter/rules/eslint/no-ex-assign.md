---
url: /docs/guide/usage/linter/rules/eslint/no-ex-assign.md
---
# eslint/no-ex-assign&#x20;

### What it does

Disallow reassigning exceptions in catch clauses

### Why is this bad?

If a catch clause in a try statement accidentally
(or purposely) assigns another value to the exception parameter,
it is impossible to refer to the error from that point on.
Since there is no arguments object to offer alternative access to this data,
assignment of the parameter is absolutely destructive.

### Examples

Examples of **incorrect** code for this rule:

```javascript
try {
  // code
} catch (e) {
  e = 10;
}
```

Examples of **correct** code for this rule:

```javascript
try {
  // code
} catch (e) {
  let val = 10;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-ex-assign": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-ex-assign
```

:::

## References

* Rule Source
