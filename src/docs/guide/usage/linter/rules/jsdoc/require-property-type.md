<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsdoc/require-property-type <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Requires that each `@property` tag has a type value (within curly brackets).

### Why is this bad?

The type of a property should be documented.

### Example

```javascript
// Passing
/**
 * @typedef {SomeType} SomeTypedef
 * @property {number} foo
 */

// Failing
/**
 * @typedef {SomeType} SomeTypedef
 * @property foo
 */
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsdoc/require_property_type.rs)