---
url: /docs/guide/usage/linter/rules/unicorn/no-invalid-fetch-options.md
---
# unicorn/no-invalid-fetch-options&#x20;

### What it does

Disallow invalid options in `fetch()` and `new Request()`. Specifically, this rule ensures that
a body is not provided when the method is `GET` or `HEAD`, as it will result in a `TypeError`.

### Why is this bad?

The `fetch()` function throws a `TypeError` when the method is `GET` or `HEAD` and a body is provided.
This can lead to unexpected behavior and errors in your code. By disallowing such invalid options,
the rule ensures that requests are correctly configured and prevents unnecessary errors.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const response = await fetch("/", { method: "GET", body: "foo=bar" });

const request = new Request("/", { method: "GET", body: "foo=bar" });
```

Examples of **correct** code for this rule:

```javascript
const response = await fetch("/", { method: "POST", body: "foo=bar" });

const request = new Request("/", { method: "POST", body: "foo=bar" });
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-invalid-fetch-options": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-invalid-fetch-options
```

:::

## References

* Rule Source
