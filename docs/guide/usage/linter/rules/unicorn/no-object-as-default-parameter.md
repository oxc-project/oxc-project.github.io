---
url: /docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.md
---
# unicorn/no-object-as-default-parameter&#x20;

### What it does

Disallow the use of an object literal as a default value for a parameter.

### Why is this bad?

Default parameters should not be passed to a function through an object literal. The `foo = {a: false}` parameter works fine if only used with one option. As soon as additional options are added, you risk replacing the whole `foo = {a: false, b: true}` object when passing only one option: `{a: true}`. For this reason, object destructuring should be used instead.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function foo(foo = { a: false }) {}
```

Examples of **correct** code for this rule:

```javascript
function foo({ a = false } = {}) {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-object-as-default-parameter": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-object-as-default-parameter
```

:::

## References

* Rule Source
