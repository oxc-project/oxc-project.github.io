---
url: /docs/guide/usage/linter/rules/unicorn/require-array-join-separator.md
---
# unicorn/require-array-join-separator&#x20;

### What it does

Enforce using the separator argument with Array#join()

### Why is this bad?

It's better to make it clear what the separator is when calling Array#join(),
instead of relying on the default comma (',') separator.

### Examples

Examples of **incorrect** code for this rule:

```javascript
foo.join();
```

Examples of **correct** code for this rule:

```javascript
foo.join(",");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/require-array-join-separator": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/require-array-join-separator
```

:::

## References

* Rule Source
