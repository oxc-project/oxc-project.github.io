<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsdoc/require-property-name

<div class="rule-meta">
</div>

### What it does

Requires that all `@property` tags have names.

### Why is this bad?

The name of a property type should be documented.

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
 * @property {number}
 */
```