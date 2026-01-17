---
url: /docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.md
---

### What it does

Forbids using Webpack loader syntax directly in import or require statements.

### Why is this bad?

This loader syntax is non-standard, so it couples the code to Webpack. The recommended way to
specify Webpack loader configuration is in a [Webpack configuration file](https://webpack.js.org/concepts/loaders/#configuration).

### Examples

Examples of **incorrect** code for this rule:

```javascript
import myModule from "my-loader!my-module";
import theme from "style!css!./theme.css";

var myModule = require("my-loader!./my-module");
var theme = require("style!css!./theme.css");
```

Examples of **correct** code for this rule:

```javascript
import myModule from "./my-module";
import theme from "./theme.css";

var myModule = require("./my-module");
var theme = require("./theme.css");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-webpack-loader-syntax": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/no-webpack-loader-syntax --import-plugin
```

:::

## References

* Rule Source
