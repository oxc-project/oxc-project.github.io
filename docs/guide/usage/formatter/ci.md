---
url: /docs/guide/usage/formatter/ci.md
---
# Setup CI and other integrations

## Pre-commit hook

If you want to auto-format staged files with Oxfmt in a git pre-commit hook, you can use `oxfmt --no-error-on-unmatched-pattern`.

This command is equivalent to `prettier --no-error-on-unmatched-pattern --write`, and will format all matched files that are supported by oxfmt. The `--no-error-on-unmatched-pattern` flag ensures that Oxfmt will not raise errors if there are no supported files passed into the command by your pre-commit hook tool (e.g. only Ruby files are staged).

You can also pass `--check` to only *check* the formatting of files, and bail if any files are incorrectly formatted.

If you are using a pre-commit hook via husky/lint-staged, you can run Oxfmt with it by updating your package.json like so:

```json
"lint-staged": {
  "*": "oxfmt --no-error-on-unmatched-pattern"
},
```
