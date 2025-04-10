<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/bad-object-literal-comparison <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Checks for comparisons between object and array literals.

### Why is this bad?

Comparing a variable to an object or array literal will always return false as object and array literals are never equal to each other.

If you want to check if an object or array is empty, use `Object.entries()` or `Object.keys()` and their lengths.

### Example

Examples of **incorrect** code for this rule:

```javascript
if (x === {}) {
}
if (arr !== []) {
}
```

Examples of **correct** code for this rule:

```javascript
if (typeof x === "object" && Object.keys(x).length === 0) {
}
if (Array.isArray(x) && x.length === 0) {
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/bad-object-literal-comparison
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/bad-object-literal-comparison": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/oxc/bad_object_literal_comparison.rs)
