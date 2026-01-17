---
url: /docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.md
---

### What it does

Prefers the use of `child.remove()` over `parentNode.removeChild(child)`.

### Why is this bad?

The DOM function [`Node#remove()`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) is preferred over the indirect removal of an object with [`Node#removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild).

### Examples

Examples of **incorrect** code for this rule:

```javascript
parentNode.removeChild(childNode);
```

Examples of **correct** code for this rule:

```javascript
childNode.remove();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-dom-node-remove": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-dom-node-remove
```

:::

## References

* Rule Source
