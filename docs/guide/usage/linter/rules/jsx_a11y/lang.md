---
url: /docs/guide/usage/linter/rules/jsx_a11y/lang.md
---

### What it does

The lang prop on the `<html>` element must be a valid IETF's BCP 47 language tag.

### Why is this bad?

If the language of a webpage is not specified as valid,
the screen reader assumes the default language set by the user.
Language settings become an issue for users who speak multiple languages
and access website in more than one language.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<html>
<html lang="foo">
```

Examples of **correct** code for this rule:

```jsx
<html lang="en">
<html lang="en-US">
```

### Resources

* [eslint-plugin-jsx-a11y/lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/v6.9.0/docs/rules/lang.md)
* [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/lang": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/lang --jsx-a11y-plugin
```

:::

## References

* Rule Source
