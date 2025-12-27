---
url: /docs/guide/usage/linter/rules/jsdoc/check-access.md
---
# jsdoc/check-access&#x20;

### What it does

Checks that `@access` tags use one of the following values:

* "package", "private", "protected", "public"

Also reports:

* Mixing of `@access` with `@public`, `@private`, `@protected`, or `@package` on the same doc block.
* Use of multiple instances of `@access` (or the `@public`, etc) on the same doc block.

### Why is this bad?

It is important to have a consistent way of specifying access levels in JSDoc
comments. Using invalid or multiple access level tags creates confusion about
the intended visibility of documented elements and can lead to inconsistencies
in API documentation generation. Mixing different access tags or using invalid
values makes the documentation unclear and potentially misleading.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @access private @public */

/** @access invalidlevel */
```

Examples of **correct** code for this rule:

```javascript
/** @access private */

/** @private */
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/check-access": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/check-access --jsdoc-plugin
```

:::

## References

* Rule Source
