<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# import/no-webpack-loader-syntax <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

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

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny import/no-webpack-loader-syntax --import-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-webpack-loader-syntax": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/import/no_webpack_loader_syntax.rs)
