<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-empty-character-class <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow empty character classes in regular expressions

### Why is this bad?

Because empty character classes in regular expressions do not match anything, they might be typing mistakes.

### Example

```javascript
var foo = /^abc[]/;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-empty-character-class
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-empty-character-class": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/b9ab60bde696d2742d3c5781084ee3c7bb99821e/crates/oxc_linter/src/rules/eslint/no_empty_character_class.rs)
