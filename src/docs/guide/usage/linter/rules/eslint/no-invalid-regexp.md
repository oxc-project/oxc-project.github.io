<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-invalid-regexp <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow invalid regular expression strings in RegExp constructors.

### Why is this bad?

An invalid pattern in a regular expression literal is a SyntaxError when the code is parsed,
but an invalid string in RegExp constructors throws a SyntaxError only when the code is executed.

### Examples

Examples of **incorrect** code for this rule:

```js
RegExp("[");
RegExp(".", "z");
new RegExp("\\");
```

Examples of **correct** code for this rule:

```js
RegExp(".");
new RegExp();
this.RegExp("[");
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/bd572c609b9fa4561c18485a4cf88716937c445d/crates/oxc_linter/src/rules/eslint/no_invalid_regexp.rs)