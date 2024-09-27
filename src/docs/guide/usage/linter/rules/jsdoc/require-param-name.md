<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsdoc/require-param-name <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Requires that all `@param` tags have names.

### Why is this bad?

The name of a param should be documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @param {SomeType} */
function quux(foo) {}
```

Examples of **correct** code for this rule:

```javascript
/** @param {SomeType} foo */
function quux(foo) {}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsdoc/require_param_name.rs)