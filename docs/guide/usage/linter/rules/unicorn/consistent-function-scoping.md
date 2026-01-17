---
url: /docs/guide/usage/linter/rules/unicorn/consistent-function-scoping.md
---

### What it does

Disallow functions that are declared in a scope which does not capture
any variables from the outer scope.

### Why is this bad?

Moving function declarations to the highest possible scope improves
readability, directly [improves performance](https://stackoverflow.com/questions/80802/does-use-of-anonymous-functions-affect-performance/81329#81329)
and allows JavaScript engines to better [optimize your performance](https://ponyfoo.com/articles/javascript-performance-pitfalls-v8#optimization-limit).

### Examples

Examples of **incorrect** code for this rule:

```js
export function doFoo(foo) {
  // Does not capture anything from the scope, can be moved to the outer scope
  function doBar(bar) {
    return bar === "bar";
  }
  return doBar;
}

function doFoo(foo) {
  const doBar = (bar) => {
    return bar === "bar";
  };
}
```

Examples of **correct** code for this rule:

```js
function doBar(bar) {
  return bar === "bar";
}

export function doFoo(foo) {
  return doBar;
}

export function doFoo(foo) {
  function doBar(bar) {
    return bar === "bar" && foo.doBar(bar);
  }
  return doBar;
}
```

### Limitations

This rule does not detect or remove extraneous code blocks inside of functions:

```js
function doFoo(foo) {
  {
    function doBar(bar) {
      return bar;
    }
  }

  return foo;
}
```

It also ignores functions that contain `JSXElement` references:

```jsx
function doFoo(FooComponent) {
  function Bar() {
    return <FooComponent />;
  }

  return Bar;
}
```

[Immediately invoked function expressions (IIFE)](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression) are ignored:

```js
(function () {
  function doFoo(bar) {
    return bar;
  }
})();
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkArrowFunctions

type: `boolean`

default: `true`

Whether to check scoping with arrow functions.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/consistent-function-scoping": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/consistent-function-scoping
```

:::

## References

* Rule Source
