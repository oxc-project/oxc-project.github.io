---
url: /docs/guide/usage/linter/automatic-fixes.md
description: 'Apply safe, suggested, and dangerous fixes with Oxlint.'
---

# Automatic fixes

Oxlint can automatically fix some lint violations. Automatic fixes are not enabled by default. You choose when to apply them.

## Safe fixes

Safe fixes are changes that do not alter program behavior.

Apply safe fixes:

```bash
oxlint --fix
```

## Suggestions

Suggestions are changes that may alter behavior or may not match your intent.

Apply suggestions:

```bash
oxlint --fix-suggestions
```

## Dangerous fixes

Dangerous fixes are aggressive changes that may break your code.

Apply dangerous fixes:

```bash
oxlint --fix-dangerously
```

## Combining fix modes

You can combine safe fixes and suggestions:

```bash
oxlint --fix --fix-suggestions
```

You can also include dangerous fixes:

```bash
oxlint --fix --fix-suggestions --fix-dangerously
```

## Rule support

Not all rules provide fixes. Some rules support safe fixes, some provide suggestions, and some do not provide fixes yet.

If a rule is missing a fixer, contributions are welcome.

## Type aware linting and fixes

Type aware linting requires building the project.

You can apply safe fixes with type aware linting enabled:

```bash
oxlint --type-aware --fix
```
