---
url: /docs/guide/usage/linter/rules/oxc/const-comparisons.md
---

### What it does

Checks for redundant or logically impossible comparisons. This includes:

* Ineffective double comparisons against constants.
* Impossible comparisons involving constants.
* Redundant comparisons where both operands are the same (e.g., a < a).

### Why is this bad?

Such comparisons can lead to confusing or incorrect logic in the program. In many cases:

* Only one of the comparisons has any effect on the result, suggesting that the programmer might have made a mistake, such as flipping one of the comparison operators or using the wrong variable.
* Comparisons like a < a or a >= a are always false or true respectively, making the logic redundant and potentially misleading.

### Examples

Examples of **incorrect** code for this rule:

```javascript
status_code <= 400 && status_code > 500;
status_code < 200 && status_code <= 299;
status_code > 500 && status_code >= 500;
a < a; // Always false
a >= a; // Always true
```

Examples of **correct** code for this rule:

```javascript
status_code >= 400 && status_code < 500;
500 <= status_code && 600 > status_code;
500 <= status_code && status_code <= 600;
a < b;
a <= b;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/const-comparisons": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/const-comparisons
```

:::

## References

* Rule Source
