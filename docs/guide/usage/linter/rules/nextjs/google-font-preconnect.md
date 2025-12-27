---
url: /docs/guide/usage/linter/rules/nextjs/google-font-preconnect.md
---
# nextjs/google-font-preconnect&#x20;

### What it does

Enforces the presence of `rel="preconnect"` when using Google Fonts via `<link>` tags.

### Why is this bad?

When using Google Fonts, it's recommended to include a preconnect resource hint to establish early connections to the required origin.
Without preconnect, the browser needs to perform DNS lookups, TCP handshakes, and TLS negotiations before it can download the font files,
which can delay font loading and impact performance.

### Examples

Examples of **incorrect** code for this rule:

```javascript
<link href="https://fonts.gstatic.com" />
<link rel="preload" href="https://fonts.gstatic.com" />
```

Examples of **correct** code for this rule:

```javascript
<link rel="preconnect" href="https://fonts.gstatic.com" />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/google-font-preconnect": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/google-font-preconnect --nextjs-plugin
```

:::

## References

* Rule Source
