# Oxlint Configuration File

This configuration is aligned with ESLint v8's configuration schema (`eslintrc.json`).

Usage: `oxlint -c oxlintrc.json --import-plugin`

::: danger NOTE

Only the `.json` format is supported. You can use comments in configuration files.

:::

Example

`.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": [
    "import",
    "typescript",
    "unicorn"
  ],
  "env": {
    "browser": true
  },
  "globals": {
    "foo": "readonly"
  },
  "settings": {},
  "rules": {
    "eqeqeq": "warn",
    "import/no-cycle": "error",
    "react/self-closing-comp": [
      "error",
      {
        "html": false
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.test.ts",
        "*.spec.ts"
      ],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ]
}
```

## categories

type: `object`

Configure an entire category of rules all at once.

Rules enabled or disabled this way will be overwritten by individual rules in the `rules` field.

Example

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "categories": {
    "correctness": "warn"
  },
  "rules": {
    "eslint/no-unused-vars": "error"
  }
}
```

### categories.correctness

### categories.nursery

### categories.pedantic

### categories.perf

### categories.restriction

### categories.style

### categories.suspicious

## env

type: `Record<string, boolean>`

Predefine global variables.

Environments specify what global variables are predefined. See [ESLint's list of environments](https://eslint.org/docs/v8.x/use/configure/language-options#specifying-environments)
for what environments are available and what each one provides.

## extends

type: `string[]`

Paths of configuration files that this configuration file extends (inherits from). The files
are resolved relative to the location of the configuration file that contains the `extends`
property. The configuration files are merged from the first to the last, with the last file
overriding the previous ones.

## globals

type: `Record<string, string>`

Add or remove global variables.

For each global variable, set the corresponding value equal to `"writable"`
to allow the variable to be overwritten or `"readonly"` to disallow overwriting.

Globals can be disabled by setting their value to `"off"`. For example, in
an environment where most Es2015 globals are available but `Promise` is unavailable,
you might use this config:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "env": {
    "es6": true
  },
  "globals": {
    "Promise": "off"
  }
}
```

You may also use `"readable"` or `false` to represent `"readonly"`, and
`"writeable"` or `true` to represent `"writable"`.

## ignorePatterns

type: `string[]`

default: `[]`

Globs to ignore during linting. These are resolved from the configuration file path.

## overrides

type: `array`

### overrides[n]

type: `object`

#### overrides[n].files

type: `string[]`

#### overrides[n].rules

type: `object`

See [Oxlint Rules](https://oxc.rs/docs/guide/usage/linter/rules.html)

## rules

type: `object`

See [Oxlint Rules](https://oxc.rs/docs/guide/usage/linter/rules.html)

## settings

type: `object`

Configure the behavior of linter plugins.

Here's an example if you're using Next.js in a monorepo:

```json
{
  "settings": {
    "next": {
      "rootDir": "apps/dashboard/"
    },
    "react": {
      "linkComponents": [
        {
          "name": "Link",
          "linkAttribute": "to"
        }
      ]
    },
    "jsx-a11y": {
      "components": {
        "Link": "a",
        "Button": "button"
      }
    }
  }
}
```

### settings.jsdoc

type: `object`

#### settings.jsdoc.augmentsExtendsReplacesDocs

type: `boolean`

default: `false`

Only for `require-(yields|returns|description|example|param|throws)` rule

#### settings.jsdoc.exemptDestructuredRootsFromChecks

type: `boolean`

default: `false`

Only for `require-param-type` and `require-param-description` rule

#### settings.jsdoc.ignoreInternal

type: `boolean`

default: `false`

For all rules but NOT apply to `empty-tags` rule

#### settings.jsdoc.ignorePrivate

type: `boolean`

default: `false`

For all rules but NOT apply to `check-access` and `empty-tags` rule

#### settings.jsdoc.ignoreReplacesDocs

type: `boolean`

default: `true`

Only for `require-(yields|returns|description|example|param|throws)` rule

#### settings.jsdoc.implementsReplacesDocs

type: `boolean`

default: `false`

Only for `require-(yields|returns|description|example|param|throws)` rule

#### settings.jsdoc.overrideReplacesDocs

type: `boolean`

default: `true`

Only for `require-(yields|returns|description|example|param|throws)` rule

#### settings.jsdoc.tagNamePreference

type: `object`

default: `{}`

### settings.jsx-a11y

type: `object`

Configure JSX A11y plugin rules.

See
[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#configurations)'s
configuration for a full reference.

#### settings.jsx-a11y.components

type: `Record<string, string>`

default: `{}`

To have your custom components be checked as DOM elements, you can
provide a mapping of your component names to the DOM element name.

Example:

```json
{
  "settings": {
    "jsx-a11y": {
      "components": {
        "Link": "a",
        "IconButton": "button"
      }
    }
  }
}
```

#### settings.jsx-a11y.polymorphicPropName

type: `[
  string,
  null
]`

An optional setting that define the prop your code uses to create polymorphic components.
This setting will be used to determine the element type in rules that
require semantic context.

For example, if you set the `polymorphicPropName` to `as`, then this element:

```jsx
<Box as="h3">Hello</Box>;
```

Will be treated as an `h3`. If not set, this component will be treated
as a `Box`.

### settings.next

type: `object`

Configure Next.js plugin rules.

#### settings.next.rootDir

### settings.react

type: `object`

Configure React plugin rules.

Derived from [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#configuration-legacy-eslintrc-)

#### settings.react.formComponents

type: `array`

default: `[]`

Components used as alternatives to `<form>` for forms, such as `<Formik>`.

Example:

```jsonc
{
  "settings": {
    "react": {
      "formComponents": [
        "CustomForm",
        // OtherForm is considered a form component and has an endpoint attribute
        { "name": "OtherForm", "formAttribute": "endpoint" },
        // allows specifying multiple properties if necessary
        { "name": "Form", "formAttribute": ["registerEndpoint", "loginEndpoint"] }
      ]
    }
  }
}
```

##### settings.react.formComponents[n]

#### settings.react.linkComponents

type: `array`

default: `[]`

Components used as alternatives to `<a>` for linking, such as `<Link>`.

Example:

```jsonc
{
  "settings": {
    "react": {
      "linkComponents": [
        "HyperLink",
        // Use `linkAttribute` for components that use a different prop name
        // than `href`.
        { "name": "MyLink", "linkAttribute": "to" },
        // allows specifying multiple properties if necessary
        { "name": "Link", "linkAttribute": ["to", "href"] }
      ]
    }
  }
}
```

##### settings.react.linkComponents[n]
