---
url: /docs/guide/usage/linter/rules/vue/no-deprecated-destroyed-lifecycle.md
---
# vue/no-deprecated-destroyed-lifecycle&#x20;

### What it does

Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks in Vue.js 3.0.0+.

### Why is this bad?

In Vue.js 3.0.0+, the `destroyed` and `beforeDestroy` lifecycle hooks have been renamed
to `unmounted` and `beforeUnmount` respectively. Using the old names is deprecated and
may cause confusion or compatibility issues.

### Examples

Examples of **incorrect** code for this rule:

```vue
<script>
export default {
  beforeDestroy() {},
  destroyed() {},
};
</script>
```

Examples of **correct** code for this rule:

```vue
<script>
export default {
  beforeUnmount() {},
  unmounted() {},
};
</script>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vue"],
  "rules": {
    "vue/no-deprecated-destroyed-lifecycle": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/no-deprecated-destroyed-lifecycle --vue-plugin
```

:::

## References

* Rule Source
