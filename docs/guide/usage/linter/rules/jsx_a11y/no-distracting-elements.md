---
url: /docs/guide/usage/linter/rules/jsx_a11y/no-distracting-elements.md
---
# jsx\_a11y/no-distracting-elements&#x20;

### What it does

Enforces that no distracting elements are used.

### Why is this bad?

Elements that can be visually distracting can cause accessibility issues
with visually impaired users. Such elements are most likely deprecated,
and should be avoided. By default, `<marquee>` and `<blink>` elements
are visually distracting and can trigger vestibular disorders.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<marquee />
<marquee {...props} />
<marquee lang={undefined} />
<blink />
<blink {...props} />
<blink foo={undefined} />
```

Examples of **correct** code for this rule:

```jsx
<div />
<Marquee />
<Blink />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/no-distracting-elements": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/no-distracting-elements --jsx-a11y-plugin
```

:::

## References

* Rule Source
