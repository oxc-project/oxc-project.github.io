---
url: /docs/guide/usage/linter/rules/import/extensions.md
---
# import/extensions&#x20;

### What it does

Some file resolve algorithms allow you to omit the file extension within the import source path.
For example the node resolver (which does not yet support ESM/import) can resolve ./foo/bar to the absolute path /User/someone/foo/bar.js because the .js extension is resolved automatically by default in CJS.
Depending on the resolver you can configure more extensions to get resolved automatically.
In order to provide a consistent use of file extensions across your code base, this rule can enforce or disallow the use of certain file extensions.

### Why is this bad?

ESM-based file resolve algorithms (e.g., the one that Vite provides) recommend specifying the file extension to improve performance.

### Examples

Examples of **incorrect** code for this rule:

The following patterns are considered problems when configuration set to "always":

```js
import foo from "./foo";
import bar from "./bar";
import Component from "./Component";
import foo from "@/foo";
```

The following patterns are considered problems when configuration set to "never":

```js
import foo from "./foo.js";
import bar from "./bar.json";
import Component from "./Component.jsx";
import express from "express/index.js";
```

Examples of **correct** code for this rule:

The following patterns are not considered problems when configuration set to "always":

```js
import foo from "./foo.js";
import bar from "./bar.json";
import Component from "./Component.jsx";
import * as path from "path";
import foo from "@/foo.js";
```

The following patterns are not considered problems when configuration set to "never":

```js
import foo from "./foo";
import bar from "./bar";
import Component from "./Component";
import express from "express/index";
import * as path from "path";
```

**Per-extension configuration examples**:

```js
// Configuration: { "vue": "always", "ts": "never" }
import Component from "./Component.vue"; // ✓ OK - .vue configured as "always"
import utils from "./utils"; // ✓ OK - .ts configured as "never"
import styles from "./styles.css"; // ✓ OK - .css not configured, ignored

// Configuration: ["ignorePackages", { "js": "never", "ts": "never" }]
import foo from "./foo"; // ✓ OK - no extension
import bar from "lodash/fp"; // ✓ OK - package import, ignored (ignorePackages sets this to true)
```

## Configuration

This rule accepts three types of configuration:

1. **Global rule** (string): `"always"`, `"never"`, or `"ignorePackages"`

```json
{
  "rules": {
    // this would require extensions for all imports
    "import/extensions": ["error", "always"]
  }
}
```

2. **Per-extension rules** (object): `{ "js": "always", "jsx": "never", ... }`

```json
{
  "rules": {
    "import/extensions": [
      "error",
      // per-extension rules:
      // require extensions for .js imports and disallow them for .ts imports
      { "js": "always", "ts": "never" }
    ]
  }
}
```

3. **Combined** (array): `["error", "always", { "js": "never" }]` or `["error", { "js": "always" }]`

```json
{
  "rules": {
    "import/extensions": [
      "error",
      "always", // by default, require extensions for all imports
      { "ts": "never" } // override the global value and disallow extensions on imports for specific file types
    ]
  }
}
```

**Default behavior (no configuration)**: All imports pass.
Unconfigured file extensions are ignored, to avoid false positives.

This rule accepts a configuration object with the following properties:

### checkTypeImports

type: `boolean`

default: `false`

Whether to check type imports when enforcing extension rules.

### extensions

type: `Record<string, string>`

default: `{}`

Map from file extension (without dot) to its configured rule.

### ignorePackages

type: `boolean`

default: `false`

Whether to ignore package imports when enforcing extension rules.

A boolean option (not per-extension) that exempts package imports from the "always" rule.
Can be set in the config object: `["error", "always", { "ignorePackages": true }]`
Legacy shorthand: `["error", "ignorePackages"]` is equivalent to `["error", "always", { "ignorePackages": true }]`

* **With "always"**: When `true`, package imports (e.g., `lodash`, `@babel/core`) don't require extensions
* **With "never"**: This option has no effect; extensions are still forbidden on package imports

Example: `["error", "always", { "ignorePackages": true }]` allows `import foo from "lodash"` but requires `import bar from "./bar.js"`

### pathGroupOverrides

type: `array`

default: `[]`

Path group overrides for bespoke import specifiers.

Array of pattern-action pairs for custom import protocols (monorepo tools, custom resolvers).
Each override has: `{ "pattern": "<glob-pattern>", "action": "enforce" | "ignore" }`

**Pattern matching**: Uses glob patterns (`*`, `**`, `{a,b}`) to match import specifiers.

**Actions**:

* `"enforce"`: Apply normal extension validation (respect global/per-extension rules)
* `"ignore"`: Skip all extension validation for matching imports

**Precedence**: First matching pattern wins.

Example: `["error", "always", { "pathGroupOverrides": [{ "pattern": "rootverse{*,*/**}", "action": "ignore" }] }]`

* Allows `import { x } from 'rootverse+debug:src'` without extension
* Still requires extensions for standard imports

#### pathGroupOverrides\[n]

type: `object`

Path group override configuration for bespoke import specifiers.

Allows fine-grained control over extension validation for custom import protocols
(e.g., monorepo tools, custom resolvers, framework-specific imports).

**Pattern matching:**

Uses fast-glob patterns to match import specifiers:

* `*`: Match any characters except `/`
* `**`: Match any characters including `/` (recursive)
* `{a,b}`: Match alternatives

**Examples:**

```json
{
  "pattern": "rootverse{*,*/**}",
  "action": "enforce"
}
```

Matches: `rootverse+debug:src`, `rootverse+bfe:src/symbols`

##### pathGroupOverrides\[n].action

type: `"enforce" | "ignore"`

Action to take for path group overrides.

Determines how import extensions are validated for matching bespoke import specifiers.

###### `"enforce"`

Enforce extension validation for matching imports (require extensions based on config)

###### `"ignore"`

Ignore matching imports entirely (skip all extension validation)

##### pathGroupOverrides\[n].pattern

type: `string`

Glob pattern to match import specifiers

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/extensions": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/extensions --import-plugin
```

:::

## References

* Rule Source
