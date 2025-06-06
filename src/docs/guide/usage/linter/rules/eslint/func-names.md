<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/func_names.rs`;
</script>

# eslint/func-names <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️💡</span> An auto-fix and a suggestion are available for this rule for some violations.
</Alert>
</div>

### What it does

Require or disallow named function expressions.

### Why is this bad?

Leaving the name off a function will cause `<anonymous>` to appear in
stack traces of errors thrown in it or any function called within it.
This makes it more difficult to find where an error is thrown. If you
provide the optional name for a function expression then you will get
the name of the function expression in the stack trace.

## Configuration

This rule has a string option:

- `"always"` requires a function expression to have a name under all
  circumstances.
- `"as-needed"` requires a function expression to have a name only when
  one will not be automatically inferred by the runtime.
- `"never"` requires a function expression to not have a name under any
  circumstances.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/*oxlint func-names: "error" */

// default is "always" and there is an anonymous function
Foo.prototype.bar = function() {};

/*oxlint func-names: ["error", "always"] */

// there is an anonymous function
Foo.prototype.bar = function() {};

/*oxlint func-names: ["error", "as-needed"] */

// there is an anonymous function
// where the name isn’t assigned automatically per the ECMAScript specs
Foo.prototype.bar = function() {};

/*oxlint func-names: ["error", "never"] */

// there is a named function
Foo.prototype.bar = function bar() {};
```

Examples of *_correct_ code for this rule:

```javascript
/*oxlint func-names: "error" */

Foo.prototype.bar = function bar() {};

/*oxlint func-names: ["error", "always"] */

Foo.prototype.bar = function bar() {};

/*oxlint func-names: ["error", "as-needed"] */

var foo = function() {};

/*oxlint func-names: ["error", "never"] */

Foo.prototype.bar = function() {};
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny func-names
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "func-names": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
