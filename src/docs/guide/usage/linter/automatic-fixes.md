---
outline: [2, 3]
---

# Automatic Fixes

In some cases, Oxlint is able to automatically fix lint violations in your code.
There are two categories of automatic fixes:

- **Fixes**: These are changes that will not change your program's behavior. It
  is generally safe to run them in a pre-lint hook.
- **Suggestions**: Changes that may change your program's behavior or make a
  change you may not want (e.g. removing `console.log`s). These should be
  reviewed before being committed to your codebase.

```sh
oxlint --fix                   # Safe fixes only
oxlint --fix-suggestions       # Safe suggestions only
oxlint --fix --fix-suggestions # Safe fixes and suggestions
```

You can find which rules are fixable from the [rules page](./rules.md).

## Dangerous Fixes and Suggestions

Some fixes and suggestions are considered dangerous. Being more aggressive in
nature, **these may produce invalid code and/or change the behavior of your
program**. These are disabled by default and can be enabled with the
`--fix-dangerously` flag. You should review each change carefully before
committing it to your codebase.

:::warning
If you are using git, you should stage your changes before running any of the
commands below using `git add -A`.
:::

```sh
# Safe and dangerous fixes only
oxlint --fix-dangerously

# Safe and dangerous suggestions only
oxlint --fix-suggestions --fix-dangerously

# Applies all possible fixes and suggestions
oxlint --fix --fix-suggestions --fix-dangerously
```

## Pending Fixes

You may notice that some rules have a 🚧 next to their name. This indicate that
they could be automatically fixed, but they are missing an auto-fixer
implementation. You can help improve Oxlint by contributing an auto fixer for
rules that need them.
