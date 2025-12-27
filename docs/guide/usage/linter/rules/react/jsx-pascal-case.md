---
url: /docs/guide/usage/linter/rules/react/jsx-pascal-case.md
---
# react/jsx-pascal-case&#x20;

### What it does

Enforce PascalCase for user-defined JSX components

### Why is this bad?

It enforces coding style that user-defined JSX components are defined and referenced in PascalCase. Note that since React's JSX uses the upper vs. lower case convention
to distinguish between local component classes and HTML tags this rule will not warn on components that start with a lower case letter.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<Test_component />
<TEST_COMPONENT />
```

Examples of **correct** code for this rule:

```jsx
<div />

<TestComponent />

<TestComponent>
    <div />
</TestComponent>

<CSSTransitionGroup />
```

Examples of **correct** code for the "allowAllCaps" option:

```jsx
<ALLOWED />

<TEST_COMPONENT />
```

Examples of **correct** code for the "allowNamespace" option:

```jsx
<Allowed.div />

<TestComponent.p />
```

Examples of **correct** code for the "allowLeadingUnderscore" option:

```jsx
<_AllowedComponent />

<_AllowedComponent>
    <div />
</_AllowedComponent>
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowAllCaps

type: `boolean`

default: `false`

Whether to allow all-caps component names.

### allowLeadingUnderscore

type: `boolean`

default: `false`

Whether to allow leading underscores in component names.

### allowNamespace

type: `boolean`

default: `false`

Whether to allow namespaced component names.

### ignore

type: `string[]`

default: `[]`

List of component names to ignore.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-pascal-case": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-pascal-case --react-plugin
```

:::

## References

* Rule Source
