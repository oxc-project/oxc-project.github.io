---
url: /docs/guide/usage/linter/rules/unicorn/prefer-response-static-json.md
---
# unicorn/prefer-response-static-json&#x20;

### What it does

Enforces the use of `Response.json()` over `new Response(JSON.stringify())`.

### Why is this bad?

`Response.json()` is a more concise and semantically clear way to create JSON responses.
It automatically sets the correct `Content-Type` header (`application/json`) and handles
serialization, making the code more maintainable and less error-prone.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const response = new Response(JSON.stringify(data));
const response = new Response(JSON.stringify(data), { status: 200 });
```

Examples of **correct** code for this rule:

```javascript
const response = Response.json(data);
const response = Response.json(data, { status: 200 });
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-response-static-json": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-response-static-json
```

:::

## References

* Rule Source
