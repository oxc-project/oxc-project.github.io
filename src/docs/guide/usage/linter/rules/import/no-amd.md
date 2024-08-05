<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# import/no-amd

<div class="rule-meta">
</div>

### What it does

Forbid AMD `require` and `define` calls.

### Example

```javascript
// fail
require([a, b], function () {});
// pass
require("../name");
require(`../name`);
```