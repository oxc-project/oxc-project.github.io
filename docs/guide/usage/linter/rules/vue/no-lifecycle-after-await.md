---
url: /docs/guide/usage/linter/rules/vue/no-lifecycle-after-await.md
---
# vue/no-lifecycle-after-await&#x20;

### What it does

Disallow asynchronously registered lifecycle hooks.

### Why is this bad?

Lifecycle hooks must be registered synchronously during `setup()` execution.
If a lifecycle hook is called after an `await` statement, it may be registered
too late and might not work as expected.

### Examples

Examples of **incorrect** code for this rule:

```vue
<script>
import { onMounted } from "vue";
export default {
  async setup() {
    await doSomething();
    onMounted(() => {
      /* ... */
    }); // error
  },
};
</script>
```

Examples of **correct** code for this rule:

```vue
<script>
import { onMounted } from "vue";
export default {
  async setup() {
    onMounted(() => {
      /* ... */
    }); // ok
    await doSomething();
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
    "vue/no-lifecycle-after-await": "error"
  }
}
```

```bash [CLI]
oxlint --deny vue/no-lifecycle-after-await --vue-plugin
```

:::

## References

* Rule Source
