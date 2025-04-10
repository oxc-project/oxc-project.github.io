<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/no-accumulating-spread <Badge type="info" text="Perf" />

<div class="rule-meta">
</div>

### What it does

Prevents using object or array spreads on accumulators in `Array.prototype.reduce()` and in loops.

### Why is this bad?

Object and array spreads create a new object or array on each iteration.
In the worst case, they also cause O(n) copies (both memory and time complexity).
When used on an accumulator, this can lead to `O(n^2)` memory complexity and
`O(n^2)` time complexity.

For a more in-depth explanation, see this [blog post](https://prateeksurana.me/blog/why-using-object-spread-with-reduce-bad-idea/)
by Prateek Surana.

### Examples

Examples of **incorrect** code for this rule:

```javascript
arr.reduce((acc, x) => ({ ...acc, [x]: fn(x) }), {});
Object.keys(obj).reduce((acc, el) => ({ ...acc, [el]: fn(el) }), {});

let foo = [];
for (let i = 0; i < 10; i++) {
  foo = [...foo, i];
}
```

Examples of **correct** code for this rule:

```javascript
function fn(x) {
  // ...
}

arr.reduce((acc, x) => acc.push(fn(x)), []);
Object.keys(obj).reduce((acc, el) => {
  acc[el] = fn(el);
}, {});
// spreading non-accumulators should be avoided if possible, but is not
// banned by this rule
Object.keys(obj).reduce((acc, el) => {
  acc[el] = { ...obj[el] };
  return acc;
}, {});

let foo = [];
for (let i = 0; i < 10; i++) {
  foo.push(i);
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/no-accumulating-spread
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/no-accumulating-spread": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/oxc/no_accumulating_spread.rs)
