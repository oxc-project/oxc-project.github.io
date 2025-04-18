<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-document-cookie <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallow direct use of
[`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie).

### Why is this bad?

It's not recommended to use
[`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
directly as it's easy to get the string wrong. Instead, you should use
the [Cookie Store
API](https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API)
or a [cookie library](https://www.npmjs.com/search?q=cookie).

### Examples

Examples of **incorrect** code for this rule:

```javascript
document.cookie =
  "foo=bar" + "; Path=/" + "; Domain=example.com" + "; expires=Fri, 31 Dec 9999 23:59:59 GMT" + "; Secure";
```

Examples of **correct** code for this rule:

```javascript
async function storeCookies() {
  await cookieStore.set({
    name: "foo",
    value: "bar",
    expires: Date.now() + 24 * 60 * 60 * 1000,
    domain: "example.com",
  });
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/no-document-cookie
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-document-cookie": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/unicorn/no_document_cookie.rs)
