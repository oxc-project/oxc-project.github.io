<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/nextjs/no_async_client_component.rs`;
</script>

# nextjs/no-async-client-component <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Prevents the use of async functions for client components in Next.js applications.
This rule checks for any async function that:

- Is marked with "use client" directive
- Has a name starting with an uppercase letter (indicating it's a component)
- Is either exported as default or assigned to a variable

### Why is this bad?

Using async functions for client components can cause hydration mismatches between server and client,
can break component rendering lifecycle, and can lead to unexpected behavior with React's concurrent features.

### Examples

Examples of **incorrect** code for this rule:

```javascript
"use client";

// Async component with default export
export default async function MyComponent() {
  return <></>;
}

// Async component with named export
async function MyComponent() {
  return <></>;
}
export default MyComponent;

// Async arrow function component
const MyComponent = async () => {
  return <></>;
};
export default MyComponent;
```

Examples of **correct** code for this rule:

```javascript
"use client";

// Regular synchronous component
export default function MyComponent() {
  return <></>;
}

// Handling async operations in effects
export default function MyComponent() {
  useEffect(() => {
    async function fetchData() {
      // async operations here
    }
    fetchData();
  }, []);
  return <></>;
}

// Async operations in event handlers
export default function MyComponent() {
  const handleClick = async () => {
    // async operations here
  };
  return <button onClick={handleClick}>Click me</button>;
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny nextjs/no-async-client-component --nextjs-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-async-client-component": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
