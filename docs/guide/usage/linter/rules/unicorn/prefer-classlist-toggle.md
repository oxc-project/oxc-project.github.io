---
url: /docs/guide/usage/linter/rules/unicorn/prefer-classlist-toggle.md
---
# unicorn/prefer-classlist-toggle&#x20;

### What it does

Prefers the use of `element.classList.toggle(className, condition)` over
conditional add/remove patterns.

### Why is this bad?

The `toggle()` method is more concise and expressive than using conditional
logic to switch between `add()` and `remove()`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (condition) {
  element.classList.add("className");
} else {
  element.classList.remove("className");
}

condition ? element.classList.add("className") : element.classList.remove("className");

element.classList[condition ? "add" : "remove"]("className");
```

Examples of **correct** code for this rule:

```javascript
element.classList.toggle("className", condition);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-classlist-toggle": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-classlist-toggle
```

:::

## References

* Rule Source
