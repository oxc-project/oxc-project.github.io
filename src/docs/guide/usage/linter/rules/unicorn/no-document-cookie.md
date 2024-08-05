<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-document-cookie

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
</div>

### What it does

Disallow direct use of [`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie).

### Why is this bad?

It's not recommended to use [`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) directly as it's easy to get the string wrong. Instead, you should use the [Cookie Store API](https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API) or a [cookie library](https://www.npmjs.com/search?q=cookie).

### Example

```javascript
// bad
document.cookie =
  "foo=bar" + "; Path=/" + "; Domain=example.com" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT" + "; Secure";

// good
await cookieStore.set({
  name: "foo",
  value: "bar",
  expires: Date.now() + 24 * 60 * 60 * 1000,
  domain: "example.com",
});
```