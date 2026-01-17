---
url: /docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.md
---

### What it does

Use [`.dataset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) on DOM elements over `getAttribute(…)`, `.setAttribute(…)`, `.removeAttribute(…)` and `.hasAttribute(…)`.

### Why is this bad?

The `dataset` property is a map of strings that contains all the `data-*` attributes from the element. It is a convenient way to access all of them at once.

### Examples

Examples of **incorrect** code for this rule:

```javascript
element.setAttribute("data-unicorn", "🦄");
```

Examples of **correct** code for this rule:

```javascript
element.dataset.unicorn = "🦄";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-dom-node-dataset": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-dom-node-dataset
```

:::

## References

* Rule Source
