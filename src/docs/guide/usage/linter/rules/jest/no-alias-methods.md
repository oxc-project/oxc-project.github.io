<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/jest/no_alias_methods.rs`;
</script>

# jest/no-alias-methods <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

This rule ensures that only the canonical name as used in the Jest documentation is used in the code.

### Why is this bad?

These aliases are going to be removed in the next major version of Jest - see [jestjs/jest#13164](https://github.com/jestjs/jest/issues/13164) for more.
This rule will makes it easier to search for all occurrences of the method within code, and it ensures consistency among the method names used.

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect(a).toBeCalled();
expect(a).toBeCalledTimes();
expect(a).toBeCalledWith();
expect(a).lastCalledWith();
expect(a).nthCalledWith();
expect(a).toReturn();
expect(a).toReturnTimes();
expect(a).toReturnWith();
expect(a).lastReturnedWith();
expect(a).nthReturnedWith();
expect(a).toThrowError();
```

Examples of **correct** code for this rule:

```javascript
expect(a).toHaveBeenCalled();
expect(a).toHaveBeenCalledTimes();
expect(a).toHaveBeenCalledWith();
expect(a).toHaveBeenLastCalledWith();
expect(a).toHaveBeenNthCalledWith();
expect(a).toHaveReturned();
expect(a).toHaveReturnedTimes();
expect(a).toHaveReturnedWith();
expect(a).toHaveLastReturnedWith();
expect(a).toHaveNthReturnedWith();
expect(a).toThrow();
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest/blob/v1.1.9/docs/rules/no-alias-methods.md),
to use it, add the following configuration to your `.eslintrc.json`:

```json
{
  "rules": {
    "vitest/no-alias-methods": "error"
  }
}
```

Examples of **incorrect** code for this rule with vitest:

```javascript
expect(a).toBeCalled();
expect(a).toBeCalledTimes();
expect(a).not["toThrowError"]();
```

Examples of **correct** code for this rule with vitest:

```javascript
expect(a).toHaveBeenCalled();
expect(a).toHaveBeenCalledTimes();
expect(a).toHaveBeenCalledWith();
expect(a).toHaveBeenLastCalledWith();
expect(a).toHaveBeenNthCalledWith();
expect(a).toHaveReturned();
expect(a).toHaveReturnedTimes();
expect(a).toHaveReturnedWith();
expect(a).toHaveLastReturnedWith();
expect(a).toHaveNthReturnedWith();
expect(a).toThrow();
expect(a).rejects;
expect(a);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny jest/no-alias-methods --jest-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-alias-methods": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
