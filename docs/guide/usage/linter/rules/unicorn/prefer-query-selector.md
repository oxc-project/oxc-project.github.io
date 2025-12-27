---
url: /docs/guide/usage/linter/rules/unicorn/prefer-query-selector.md
---
# unicorn/prefer-query-selector&#x20;

### What it does

Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`.

### Why is this bad?

* Using `.querySelector()` and `.querySelectorAll()` is more flexible and allows for more specific selectors.
* It's better to use the same method to query DOM elements. This helps keep consistency and it lends itself to future improvements (e.g. more specific selectors).

### Examples

Examples of **incorrect** code for this rule:

```javascript
document.getElementById("foo");
document.getElementsByClassName("foo bar");
document.getElementsByTagName("main");
document.getElementsByClassName(fn());
```

Examples of **correct** code for this rule:

```javascript
document.querySelector("#foo");
document.querySelector(".bar");
document.querySelector("main #foo .bar");
document.querySelectorAll(".foo .bar");
document.querySelectorAll("li a");
document.querySelector("li").querySelectorAll("a");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-query-selector": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-query-selector
```

:::

## References

* Rule Source
