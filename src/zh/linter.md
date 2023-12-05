---
title: Linter
outline: deep
---

# Linter

## Development

Create a `./test.ts` and then

```bash
just watch "run -p oxc_cli --bin oxlint -- test.ts"
```

## Rule generation

Create a new lint rule by providing the ESLint name

```bash
just new-rule name
```

Then add the rule to `crates/oxc_linter/src/rules.rs`:

1. Add to `mod`
2. Add to `oxc_macros::declare_all_lint_rules` at the bottom of the file

For other plugins, there are also:

```bash
just new-jest-rule name
just new-ts-rule name
just new-unicorn-rule name
just new-react-rule name
just new-jsx-a11y-rule name
```
