<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

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

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/2b14a6fb5403dfe5eff8dfade3baf7725b837052/crates/oxc_linter/src/rules/oxc/no_barrel_file.rs)
