<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/no-mocks-import <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

This rule reports imports from a path containing a **mocks** component.

### Example

```javascript
import thing from "./__mocks__/index";
require("./__mocks__/index");
require("__mocks__");
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jest/no_mocks_import.rs)
