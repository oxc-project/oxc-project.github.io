<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/func-names

<div class="rule-meta">
<span class="fix">
🚧 An auto-fix is still under development.
</span>
</div>

### What it does

Require or disallow named function expressions

### Why is this bad?

Leaving the name off a function will cause <anonymous> to appear
in stack traces of errorsthrown in it or any function called within it.
This makes it more difficult to find where an error is thrown.
If you provide the optional name for a function expression
then you will get the name of the function expression in the stack trace.

/// ### Example

Example of **incorrect** code for this rule:

```javascript
/*eslint func-names: "error" */

// default is "always" and there is an anonymous function
Foo.prototype.bar = function () {};

/*eslint func-names: ["error", "always"] */

// there is an anonymous function
Foo.prototype.bar = function () {};

/*eslint func-names: ["error", "as-needed"] */

// there is an anonymous function
// where the name isn’t assigned automatically per the ECMAScript specs
Foo.prototype.bar = function () {};

/*eslint func-names: ["error", "never"] */

// there is a named function
Foo.prototype.bar = function bar() {};
```

Example of \*_correct_ code for this rule:

```javascript
/*eslint func-names: "error" */

Foo.prototype.bar = function bar() {};

/*eslint func-names: ["error", "always"] */

Foo.prototype.bar = function bar() {};

/*eslint func-names: ["error", "as-needed"] */

var foo = function () {};

/*eslint func-names: ["error", "never"] */

Foo.prototype.bar = function () {};
```