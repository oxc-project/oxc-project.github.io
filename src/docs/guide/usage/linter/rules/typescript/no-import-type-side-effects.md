<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/no-import-type-side-effects <Badge type="info" text="Restriction" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Enforce the use of top-level `import type` qualifier when an import only
has specifiers with inline type qualifiers.

### Why is this bad?

The `--verbatimModuleSyntax` compiler option causes TypeScript to do
simple and predictable transpilation on import declarations. Namely, it
completely removes import declarations with a top-level type qualifier,
and it removes any import specifiers with an inline type qualifier.

The latter behavior does have one potentially surprising effect in that
in certain cases TS can leave behind a "side effect" import at runtime:

```ts
import { type A, type B } from "mod";
```

is transpiled to

```ts
import {} from "mod";
// which is the same as
import "mod";
```

For the rare case of needing to import for side effects, this may be
desirable - but for most cases you will not want to leave behind an
unnecessary side effect import.

### Example

```ts
import { type A } from "mod";
import { type A as AA } from "mod";
import { type A, type B } from "mod";
import { type A as AA, type B as BB } from "mod";
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny typescript/no-import-type-side-effects
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-import-type-side-effects": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/typescript/no_import_type_side_effects.rs)
