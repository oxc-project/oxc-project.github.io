<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# import/no-amd <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Forbids the use of AMD `require` and `define` calls.

### Why is this bad?

AMD (Asynchronous Module Definition) is an older module format
that is less common in modern JavaScript development, especially
with the widespread use of ES6 modules and CommonJS in Node.js.
AMD introduces unnecessary complexity and is often considered outdated.
This rule enforces the use of more modern module systems to improve
maintainability and consistency across the codebase.

### Examples

Examples of **incorrect** code for this rule:

```javascript
require([a, b], function () {});
```

Examples of **correct** code for this rule:

```javascript
require("../name");
require(`../name`);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny import/no-amd --import-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-amd": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/import/no_amd.rs)
