---
url: /docs/guide/usage/linter/rules/eslint/no-negated-condition.md
---
# eslint/no-negated-condition&#x20;

### What it does

Disallow negated conditions.

### Why is this bad?

Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (!a) {
  doSomethingC();
} else {
  doSomethingB();
}

!a ? doSomethingC() : doSomethingB();
```

Examples of **correct** code for this rule:

```javascript
if (a) {
  doSomethingB();
} else {
  doSomethingC();
}

a ? doSomethingB() : doSomethingC();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-negated-condition": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-negated-condition
```

:::

## References

* Rule Source
