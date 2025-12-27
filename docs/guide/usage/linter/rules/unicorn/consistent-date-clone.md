---
url: /docs/guide/usage/linter/rules/unicorn/consistent-date-clone.md
---
# unicorn/consistent-date-clone&#x20;

### What it does

The Date constructor can clone a `Date` object directly when passed as an argument,
making timestamp conversion unnecessary. This rule enforces the use of the
direct `Date` cloning instead of using `.getTime()` for conversion.

### Why is this bad?

Using `.getTime()` to convert a `Date` object to a timestamp and then back to a
`Date` is redundant and unnecessary. Simply passing the `Date` object to the
`Date` constructor is cleaner and more efficient.

### Examples

Examples of **incorrect** code for this rule:

```js
new Date(date.getTime());
```

Examples of **correct** code for this rule:

```js
new Date(date);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/consistent-date-clone": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/consistent-date-clone
```

:::

## References

* Rule Source
