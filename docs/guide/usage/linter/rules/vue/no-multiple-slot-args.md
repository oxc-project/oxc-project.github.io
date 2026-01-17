---
url: /docs/guide/usage/linter/rules/vue/no-multiple-slot-args.md
---

### What it does

Disallow passing multiple arguments to scoped slots.

### Why is this bad?

Users have to use the arguments in fixed order and cannot omit the ones they don't need.
e.g. if you have a slot that passes in 5 arguments but the user actually only need the last 2 of them,
they will have to declare all 5 just to use the last 2.

More information can be found in [vuejs/vue#9468](https://github.com/vuejs/vue/issues/9468#issuecomment-462210146)

### Examples

Examples of **incorrect** code for this rule:

```vue
<script>
export default {
  render(h) {
    var children = this.$scopedSlots.default(foo, bar);
    var children = this.$scopedSlots.default(...foo);
  },
};
</script>
```

Examples of **correct** code for this rule:

```vue
<script>
export default {
  render(h) {
    var children = this.$scopedSlots.default();
    var children = this.$scopedSlots.default(foo);
    var children = this.$scopedSlots.default({ foo, bar });
  },
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
    "vue/no-multiple-slot-args": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/no-multiple-slot-args --vue-plugin
```

:::

## References

* Rule Source
