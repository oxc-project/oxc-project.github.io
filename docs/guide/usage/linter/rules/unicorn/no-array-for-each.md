---
url: /docs/guide/usage/linter/rules/unicorn/no-array-for-each.md
---
# unicorn/no-array-for-each&#x20;

### What it does

Forbids the use of `Array#forEach` in favor of a for loop.

### Why is this bad?

Benefits of [`for…of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) over the `forEach` method can include:

* Faster
* Better readability
* Ability to exit early with `break` or `return`

Additionally, using `for…of` has great benefits if you are using TypeScript, because it does not cause a function boundary to be crossed. This means that type-narrowing earlier on in the current scope will work properly while inside of the loop (without having to re-type-narrow). Furthermore, any mutated variables inside of the loop will picked up on for the purposes of determining if a variable is being used.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = [1, 2, 3];
foo.forEach((element) => {
  /* ... */
});
```

Examples of **correct** code for this rule:

```javascript
const foo = [1, 2, 3];
for (const element of foo) {
  /* ... */
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-array-for-each": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-array-for-each
```

:::

## References

* Rule Source
