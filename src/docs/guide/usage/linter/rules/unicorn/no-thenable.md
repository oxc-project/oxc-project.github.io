<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-thenable <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

disallow `then` property

### Why is this bad?

If an object is defined as "thenable", once it's accidentally
used in an await expression, it may cause problems:

### Example

```javascript
async function example() {
  const foo = {
    unicorn: 1,
    then() {},
  };

  const { unicorn } = await foo;

  console.log("after"); //<- This will never execute
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/unicorn/no_thenable.rs)
