<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/no-async-await <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallows the use of async/await.

### Example

```javascript
async function foo() {
  await bar();
  return baz();
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/2b14a6fb5403dfe5eff8dfade3baf7725b837052/crates/oxc_linter/src/rules/oxc/no_async_await.rs)
