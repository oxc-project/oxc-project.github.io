<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# promise/spec-only <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallow use of non-standard Promise static methods.

### Why is this bad?

Non-standard Promises may cost more maintenance work.

### Examples

Examples of **incorrect** code for this rule:

```js
Promise.done();
```

Examples of **correct** code for this rule:

```js
Promise.resolve();
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny promise/spec-only --promise-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/spec-only": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/promise/spec_only.rs)
