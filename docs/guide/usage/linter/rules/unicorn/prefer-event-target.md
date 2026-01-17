---
url: /docs/guide/usage/linter/rules/unicorn/prefer-event-target.md
---

### What it does

Prefers `EventTarget` over `EventEmitter`.

This rule reduces the bundle size and makes your code more cross-platform friendly.

See the [differences](https://nodejs.org/api/events.html#eventtarget-and-event-api) between `EventEmitter` and `EventTarget`.

### Why is this bad?

While [`EventEmitter`](https://nodejs.org/api/events.html#class-eventemitter) is only available in Node.js, [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) is also available in *Deno* and browsers.

### Examples

Examples of **incorrect** code for this rule:

```javascript
class Foo extends EventEmitter {}
```

Examples of **correct** code for this rule:

```javascript
class Foo extends OtherClass {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-event-target": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-event-target
```

:::

## References

* Rule Source
