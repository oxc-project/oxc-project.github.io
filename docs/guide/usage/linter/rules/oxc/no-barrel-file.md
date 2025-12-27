---
url: /docs/guide/usage/linter/rules/oxc/no-barrel-file.md
---
# oxc/no-barrel-file&#x20;

### What it does

Disallow the use of barrel files where the file contains `export *` statements,
and the total number of modules exceed a threshold.

The default threshold is 100.

### Why is this bad?

Barrel files that re-export many modules can significantly slow down
applications and bundlers. When a barrel file exports a large number of
modules, importing from it forces the runtime or bundler to process all
the exported modules, even if only a few are actually used. This leads
to slower startup times and larger bundle sizes.

References:

* <https://github.com/thepassle/eslint-plugin-barrel-files>
* <https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7>

### Example

Invalid:

```javascript
export * from "foo"; // where `foo` loads a subtree of 100 modules
import * as ns from "foo"; // where `foo` loads a subtree of 100 modules
```

Valid:

```javascript
export { foo } from "foo";
```

## Configuration

This rule accepts a configuration object with the following properties:

### threshold

type: `integer`

default: `100`

The maximum number of modules that can be re-exported via `export *`
before the rule is triggered.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/no-barrel-file": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/no-barrel-file
```

:::

## References

* Rule Source
