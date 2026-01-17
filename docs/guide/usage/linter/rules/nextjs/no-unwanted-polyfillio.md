---
url: /docs/guide/usage/linter/rules/nextjs/no-unwanted-polyfillio.md
---

### What it does

Prevent use of unsafe polyfill.io domains and duplicate polyfills.

### Why is this bad?

**Security Risk:**
The domains `cdn.polyfill.io` and `polyfill.io` were compromised in a supply chain attack in 2024,
where the domain was acquired by a malicious actor and began injecting harmful code into websites.
Over 380,000+ websites were affected. These domains should not be used under any circumstances.

**Performance Issue:**
For safe alternatives like `cdnjs.cloudflare.com/polyfill/`, including polyfills already shipped
with Next.js unnecessarily increases page weight which can affect loading performance.

### Examples

Examples of **incorrect** code for this rule:

```javascript
// Security risk - compromised domain
<script src='https://cdn.polyfill.io/v2/polyfill.min.js'></script>
<script src='https://polyfill.io/v3/polyfill.min.js'></script>

// Duplicate polyfills
<script src='https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=Array.prototype.copyWithin'></script>
<script src='https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=WeakSet%2CPromise'></script>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-unwanted-polyfillio": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/no-unwanted-polyfillio --nextjs-plugin
```

:::

## References

* Rule Source
