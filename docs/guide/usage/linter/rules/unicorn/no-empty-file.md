---
url: /docs/guide/usage/linter/rules/unicorn/no-empty-file.md
---

### What it does

Disallows files that do not contain any meaningful code.

This includes files that consist only of:

* Whitespace
* Comments
* Directives (e.g., `"use strict"`)
* Empty statements (`;`)
* Empty blocks (`{}`)
* Hashbangs (`#!/usr/bin/env node`)

### Why is this bad?

Files with no executable or exportable content are typically unintentional
or left over from refactoring. They clutter the codebase and may confuse
tooling or developers by appearing to serve a purpose when they do not.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-empty-file": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-empty-file
```

:::

## References

* Rule Source
