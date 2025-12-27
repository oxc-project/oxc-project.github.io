---
url: /docs/guide/usage/linter/rules/import/consistent-type-specifier-style.md
---
# import/consistent-type-specifier-style&#x20;

### What it does

This rule either enforces or bans the use of inline type-only markers for named imports.

### Why is this bad?

Mixing top-level `import type { Foo } from 'foo'` with inline `{ type Bar }`
forces readers to mentally switch contexts when scanning your imports.
Enforcing one style makes it immediately obvious which imports are types and which are value imports.

### Examples

Examples of incorrect code for the default `prefer-top-level` option:

```typescript
import { type Foo } from "Foo";
import Foo, { type Bar } from "Foo";
```

Examples of correct code for the default option:

```typescript
import type { Foo } from "Foo";
import type Foo, { Bar } from "Foo";
```

Examples of incorrect code for the `prefer-inline` option:

```typescript
import type { Foo } from "Foo";
import type Foo, { Bar } from "Foo";
```

Examples of correct code for the `prefer-inline` option:

```typescript
import { type Foo } from "Foo";
import Foo, { type Bar } from "Foo";
```

## Configuration

This rule accepts one of the following string values:

### `"prefer-top-level"`

Prefer `import type { Foo } from 'foo'` for type imports.

### `"prefer-inline"`

Prefer `import { type Foo } from 'foo'` for type imports.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/consistent-type-specifier-style": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/consistent-type-specifier-style --import-plugin
```

:::

## References

* Rule Source
