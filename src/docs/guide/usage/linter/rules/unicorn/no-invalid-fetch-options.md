<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-invalid-fetch-options <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

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

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/no-invalid-fetch-options
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-invalid-fetch-options": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/unicorn/no_invalid_fetch_options.rs)
