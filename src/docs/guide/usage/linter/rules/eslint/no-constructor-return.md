<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-constructor-return <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Disallow returning value from constructor

### Why is this bad?

In JavaScript, returning a value in the constructor of a class may be a mistake.
Forbidding this pattern prevents mistakes resulting from unfamiliarity with the language or a copy-paste error.

### Example

Examples of **incorrect** code for this rule:

```rust
class C {
    constructor() { return 42; }
}
```

Examples of **correct** code for this rule:

```rust
class C {
    constructor() { this.value = 42; }
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-constructor-return
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-constructor-return": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/eslint/no_constructor_return.rs)
