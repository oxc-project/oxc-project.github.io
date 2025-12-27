---
url: /docs/guide/usage/linter/rules/unicorn/prefer-global-this.md
---
# unicorn/prefer-global-this&#x20;

### What it does

Enforces the use of [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) instead of
environment‑specific global object aliases (`window`, `self`, or `global`).
Using the standard `globalThis` makes your code portable across browsers, Web Workers, Node.js,
and future JavaScript runtimes.

### Why is this bad?

• **Portability** – `window` is only defined in browser main threads, `self` is used in Web Workers,
and `global` is Node‑specific. Choosing the wrong alias causes runtime crashes when the code is
executed outside of its original environment.
• **Clarity** – `globalThis` clearly communicates that you are referring to the global object itself
rather than a particular platform.

### Examples

Examples of **incorrect** code for this rule:

```js
// Browser‑only
window.alert("Hi");

// Node‑only
if (typeof global.Buffer !== "undefined") {
}

// Web Worker‑only
self.postMessage("done");
```

Examples of **correct** code for this rule:

```js
globalThis.alert("Hi");

if (typeof globalThis.Buffer !== "undefined") {
}

globalThis.postMessage("done");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-global-this": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-global-this
```

:::

## References

* Rule Source
