---
url: /docs/guide/usage/linter/rules/jest/prefer-comparison-matcher.md
---

### What it does

This rule checks for comparisons in tests that could be replaced with one of the
following built-in comparison matchers:

* `toBeGreaterThan`
* `toBeGreaterThanOrEqual`
* `toBeLessThan`
* `toBeLessThanOrEqual`

### Why is this bad?

Using generic matchers like `toBe(true)` with comparison expressions
makes tests less readable and provides less helpful error messages when
they fail. Jest's specific comparison matchers offer clearer intent and
better error output that shows the actual values being compared.

### Examples

Examples of **incorrect** code for this rule:

```js
expect(x > 5).toBe(true);
expect(x < 7).not.toEqual(true);
expect(x <= y).toStrictEqual(true);
```

Examples of **correct** code for this rule:

```js
expect(x).toBeGreaterThan(5);
expect(x).not.toBeLessThanOrEqual(7);
expect(x).toBeLessThanOrEqual(y);
// special case - see below
expect(x < "Carl").toBe(true);
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/prefer-comparison-matcher": "error"
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/prefer-comparison-matcher": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-comparison-matcher --jest-plugin
```

:::

## References

* Rule Source
