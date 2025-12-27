---
url: /docs/guide/usage/linter/rules/vue/require-typed-ref.md
---
# vue/require-typed-ref&#x20;

### What it does

Require `ref` and `shallowRef` functions to be strongly typed.

### Why is this bad?

With TypeScript it is easy to prevent usage of `any` by using `noImplicitAny`.
Unfortunately this rule is easily bypassed with Vue `ref()` function.
Calling `ref()` function without a generic parameter or an initial value leads to ref having `Ref<any>` type.

### Examples

Examples of **incorrect** code for this rule:

```typescript
const count = ref();
const name = shallowRef();
```

Examples of **correct** code for this rule:

```typescript
const count = ref<number>();
const a = ref(0);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/require-typed-ref": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/require-typed-ref --vue-plugin
```

:::

## References

* Rule Source
