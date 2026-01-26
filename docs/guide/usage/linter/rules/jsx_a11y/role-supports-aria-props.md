---
url: /docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.md
---

### What it does

Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
Many ARIA attributes (states and properties) can only be used on elements with particular roles.
Some elements have implicit roles, such as `<a href="#" />`, which will resolve to `role="link"`.

### Why is this bad?

Using ARIA attributes that are inconsistent with the element's role can cause problems for assistive
technologies and their ability to understand or engage with the content of a page.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<ul role="radiogroup" "aria-labelledby"="foo">
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

Examples of **correct** code for this rule:

```jsx
<ul role="radiogroup" aria-required "aria-labelledby"="foo">
    <li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/role-supports-aria-props": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/role-supports-aria-props --jsx-a11y-plugin
```

:::

## References

* Rule Source
