<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/oxc/no_barrel_file.rs`;
</script>

# oxc/no-barrel-file <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallow the use of barrel files where the file contains `export *` statements,
and the total number of modules exceed a threshold.

The default threshold is 100;

References:

- <https://github.com/thepassle/eslint-plugin-barrel-files>
- <https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7>

### Example

Invalid:

```javascript
export * from "foo"; // where `foo` loads a subtree of 100 modules
import * as ns from "foo"; // where `foo` loads a subtree of 100 modules
```

Valid:

```javascript
export { foo } from "foo";
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/no-barrel-file
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/no-barrel-file": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
