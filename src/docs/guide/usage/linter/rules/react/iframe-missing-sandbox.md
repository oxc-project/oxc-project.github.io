<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/iframe-missing-sandbox <Badge type="info" text="Suspicious" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Enforce sandbox attribute on iframe elements

### Why is this bad?

The sandbox attribute enables an extra set of restrictions for the
content in the iframe. Using sandbox attribute is considered a good
security practice. To learn more about sandboxing, see [MDN's
documentation on the `sandbox`
attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox).

This rule checks all React `<iframe>` elements and verifies that there
is `sandbox` attribute and that it's value is valid. In addition to that
it also reports cases where attribute contains `allow-scripts` and
`allow-same-origin` at the same time as this combination allows the
embedded document to remove the sandbox attribute and bypass the
restrictions.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<iframe />;
<iframe sandbox="invalid-value" />;
<iframe sandbox="allow-same-origin allow-scripts" />;
```

Examples of **correct** code for this rule:

```jsx
<iframe sandbox="" />;
<iframe sandbox="allow-origin" />;
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/2b14a6fb5403dfe5eff8dfade3baf7725b837052/crates/oxc_linter/src/rules/react/iframe_missing_sandbox.rs)