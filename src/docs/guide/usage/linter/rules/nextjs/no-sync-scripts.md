<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/nextjs/no_sync_scripts.rs`;
</script>

# nextjs/no-sync-scripts <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

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

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny nextjs/no-sync-scripts --nextjs-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-sync-scripts": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
