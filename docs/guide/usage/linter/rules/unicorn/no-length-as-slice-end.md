---
url: /docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md
---
# unicorn/no-length-as-slice-end&#x20;

### What it does

Disallow using `length` as the end argument of a `slice` call.

### Why is this bad?

Passing `length` as the end argument of a `slice` call is unnecessary and can be confusing.

### Examples

Examples of **incorrect** code for this rule:

```javascript
foo.slice(1, foo.length);
```

Examples of **correct** code for this rule:

```javascript
foo.slice(1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-length-as-slice-end": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-length-as-slice-end
```

:::

## References

* Rule Source
