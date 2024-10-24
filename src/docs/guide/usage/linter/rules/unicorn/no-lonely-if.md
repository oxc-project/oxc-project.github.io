<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-lonely-if <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Disallow `if` statements as the only statement in `if` blocks without `else`.

### Why is this bad?

It can be confusing to have an `if` statement without an `else` clause as the only statement in an `if` block.

### Example

Examples of **incorrect** code for this rule:

```javascript
if (foo) {
  if (bar) {
  }
}
if (foo) if (bar) baz();
```

Examples of **correct** code for this rule:

```javascript
if (foo && bar) {
}
if (foo && bar) baz();
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_lonely_if.rs)