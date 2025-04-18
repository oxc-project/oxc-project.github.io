<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# import/unambiguous <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Warn if a `module` could be mistakenly parsed as a `script` and not pure ESM module

### Why is this bad?

For ESM-only environments helps to determine files that not pure ESM modules

### Examples

Examples of **incorrect** code for this rule:

```js
function x() {}

(function x() {
  return 42;
})();
```

Examples of **correct** code for this rule:

```js
import "foo";
function x() {
  return 42;
}

export function x() {
  return 42;
}

(function x() {
  return 42;
})();
export {}; // simple way to mark side-effects-only file as 'module' without any imports/exports
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny import/unambiguous --import-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/unambiguous": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/import/unambiguous.rs)
