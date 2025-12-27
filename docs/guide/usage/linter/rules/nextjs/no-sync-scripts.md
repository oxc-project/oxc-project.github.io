---
url: /docs/guide/usage/linter/rules/nextjs/no-sync-scripts.md
---
# nextjs/no-sync-scripts&#x20;

### What it does

This rule prevents the use of synchronous `<script>` tags in Next.js applications.
It requires that any `<script>` tag with a `src` attribute must also have either
the `async` or `defer` attribute.

### Why is this bad?

Synchronous scripts can block the page rendering and negatively impact performance.
In Next.js applications, it's recommended to use `async` or `defer` attributes
to load scripts asynchronously, which improves page load times and user experience.

### Examples

Examples of **incorrect** code for this rule:

```javascript
// Synchronous script without async/defer
<script src="https://example.com/script.js"></script>

// Dynamic src without async/defer
<script src={dynamicSrc}></script>
```

Examples of **correct** code for this rule:

```javascript
// Script with async attribute
<script src="https://example.com/script.js" async></script>

// Script with defer attribute
<script src="https://example.com/script.js" defer></script>

// Script with spread props (allowed as it might include async/defer)
<script {...props}></script>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-sync-scripts": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/no-sync-scripts --nextjs-plugin
```

:::

## References

* Rule Source
