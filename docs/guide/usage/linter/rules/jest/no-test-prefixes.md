---
url: /docs/guide/usage/linter/rules/jest/no-test-prefixes.md
---

### What it does

Require using `.only` and `.skip` over `f` and `x`.

### Why is this bad?

Jest allows you to choose how you want to define focused and skipped tests,
with multiple permutations for each:

* only & skip: it.only, test.only, describe.only, it.skip, test.skip, describe.skip.
* 'f' & 'x': fit, fdescribe, xit, xtest, xdescribe.

This rule enforces usages from the only & skip list.

### Examples

Examples of **incorrect** code for this rule:

```javascript
fit("foo"); // invalid
fdescribe("foo"); // invalid
xit("foo"); // invalid
xtest("foo"); // invalid
xdescribe("foo"); // invalid
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/v1.1.9/docs/rules/no-test-prefixes.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-test-prefixes": "error"
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
    "jest/no-test-prefixes": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-test-prefixes --jest-plugin
```

:::

## References

* Rule Source
