---
url: /docs/guide/usage/linter/rules/eslint/no-iterator.md
---
# eslint/no-iterator&#x20;

### What it does

Disallow the use of the `__iterator__` property

### Why is this bad?

The `__iterator__` property was a SpiderMonkey extension to JavaScript
that could be used to create custom iterators that are compatible with
JavaScript’s for in and for each constructs. However, this property is
now obsolete, so it should not be used. Here’s an example of how this
used to work:

```js
Foo.prototype.__iterator__ = function () {
  return new FooIterator(this);
};
```

### Examples

Examples of **incorrect** code for this rule:

```javascript
Foo.prototype.__iterator__ = function () {
  return new FooIterator(this);
};

foo.__iterator__ = function () {};

foo["__iterator__"] = function () {};
```

Examples of **correct** code for this rule:

```js
const __iterator__ = 42; // not using the __iterator__ property

Foo.prototype[Symbol.iterator] = function () {
  return new FooIterator(this);
};
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-iterator": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-iterator
```

:::

## References

* Rule Source
