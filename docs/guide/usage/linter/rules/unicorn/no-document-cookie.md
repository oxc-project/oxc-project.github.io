---
url: /docs/guide/usage/linter/rules/unicorn/no-document-cookie.md
---
# unicorn/no-document-cookie&#x20;

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
  "foo=bar" +
  "; Path=/" +
  "; Domain=example.com" +
  "; expires=Fri, 31 Dec 9999 23:59:59 GMT" +
  "; Secure";
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

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-document-cookie": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-document-cookie
```

:::

## References

* Rule Source
