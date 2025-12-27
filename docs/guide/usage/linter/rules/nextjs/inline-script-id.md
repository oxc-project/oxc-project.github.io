---
url: /docs/guide/usage/linter/rules/nextjs/inline-script-id.md
---
# nextjs/inline-script-id&#x20;

### What it does

Enforces that all `next/script` components with inline content or `dangerouslySetInnerHTML` must have an `id` prop.

### Why is this bad?

Next.js requires a unique `id` prop for inline scripts to properly deduplicate them during page renders.
Without an `id`, the same inline script might be executed multiple times, leading to unexpected behavior
or performance issues. This is particularly important for scripts that modify global state or perform
one-time initializations.

### Examples

Examples of **incorrect** code for this rule:

```javascript
import Script from 'next/script';

export default function Page() {
  return (
    <Script>
      {`console.log('Hello world');`}
    </Script>
  );
}

// Also incorrect with dangerouslySetInnerHTML
export default function Page() {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `console.log('Hello world');`
      }}
    />
  );
}
```

Examples of **correct** code for this rule:

```javascript
import Script from 'next/script';

export default function Page() {
  return (
    <Script id="my-script">
      {`console.log('Hello world');`}
    </Script>
  );
}

// Correct with dangerouslySetInnerHTML
export default function Page() {
  return (
    <Script
      id="my-script"
      dangerouslySetInnerHTML={{
        __html: `console.log('Hello world');`
      }}
    />
  );
}

// No id required for external scripts
export default function Page() {
  return (
    <Script src="https://example.com/script.js" />
  );
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/inline-script-id": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/inline-script-id --nextjs-plugin
```

:::

## References

* Rule Source
