<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/sort-keys <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

When declaring multiple properties, sorting property names alphabetically makes it easier
to find and/or diff necessary properties at a later time.

### Why is this bad?

Unsorted property keys can make the code harder to read and maintain.

### Examples

Examples of **incorrect** code for this rule:

```js
let myObj = {
  c: 1,
  a: 2,
};
```

Examples of **correct** code for this rule:

```js
let myObj = {
  a: 2,
  c: 1,
};
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny sort-keys
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "sort-keys": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/0f1e0e87715075c250763ea31c3a82505a4f10d3/crates/oxc_linter/src/rules/eslint/sort_keys.rs)
