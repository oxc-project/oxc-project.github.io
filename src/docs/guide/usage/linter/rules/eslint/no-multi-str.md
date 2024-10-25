<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-multi-str <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

Disallow multiline strings.

### Why is this bad?

Some consider this to be a bad practice as it was an undocumented feature of JavaScript
that was only formalized later.

### Example

```javascript
var x =
  "Line 1 \
 Line 2";
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_multi_str.rs)