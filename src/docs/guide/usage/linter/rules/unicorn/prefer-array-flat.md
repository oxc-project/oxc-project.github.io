<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/prefer-array-flat <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule for some violations.
</Alert>
</div>

### What it does

Prefers `Array#flat()` over legacy techniques to flatten arrays.

### Why is this bad?

ES2019 introduced a new method [`Array#flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) that flatten arrays.

This rule aims to standardize the use of `Array#flat()` over legacy techniques to flatten arrays.

### Example

Examples of **incorrect** code for this rule:

```javascript
const foo = array.flatMap((x) => x);
const foo = array.reduce((a, b) => a.concat(b), []);
const foo = array.reduce((a, b) => [...a, ...b], []);
const foo = [].concat(maybeArray);
const foo = [].concat(...array);
const foo = [].concat.apply([], array);
const foo = Array.prototype.concat.apply([], array);
const foo = Array.prototype.concat.call([], maybeArray);
const foo = Array.prototype.concat.call([], ...array);
```

Examples of **correct** code for this rule:

```javascript
const foo = array.flat();
const foo = [maybeArray].flat();
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/prefer-array-flat
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-array-flat": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/unicorn/prefer_array_flat.rs)
