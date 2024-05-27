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

Or test and filter against the rule:

```bash
just watch "test -p oxc_linter -- rule-name"
```

### Snapshot Testing

[`cargo insta`](https://insta.rs/docs) is used for snapshot testing.

After running `cargo test -p oxc_linter` and the line `Tester::new(RULE::NAME, pass, fail).test_and_snapshot()` is called, a new `rule.snap.new` file will be generated.

Use `cargo insta accept` to accept all snapshot changes.

## Rule generation

Create a new linter rule by providing the ESLint name

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
just new-oxc-rule name
just new-deepscan-rule name
just new-nextjs-rule name
```

## Rule Category

- correctness - code that is outright wrong or useless
- suspicious - code that is most likely wrong or useless
- pedantic - lints which are rather strict or have occasional false positives
- perf - code that can be written to run faster
- style - code that should be written in a more idiomatic way
- restriction - lints should be considered on a case-by-case basis before enabling.
- nursery - new lints that are still under development

## General Advice

### Pin point the error message to the shortest code span

We want the user to focus on the problematic code rather than deciphering the error message to identify which part of the code is erroneous.
