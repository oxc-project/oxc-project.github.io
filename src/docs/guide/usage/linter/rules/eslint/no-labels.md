<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-labels <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

Disallow labeled statements.

### Why is this bad?

Labeled statements in JavaScript are used in conjunction with `break` and `continue` to control flow around multiple loops. For example:

```js
outer: while (true) {
  while (true) {
    break outer;
  }
}
```

The `break outer` statement ensures that this code will not result in an infinite loop because control is returned to the next statement after the `outer` label was applied. If this statement was changed to be just `break`, control would flow back to the outer `while` statement and an infinite loop would result.
While convenient in some cases, labels tend to be used only rarely and are frowned upon by some as a remedial form of flow control that is more error prone and harder to understand.

### Examples

Examples of **incorrect** code for this rule:

```js
label: while (true) {
  // ...
}

label: while (true) {
  break label;
}

label: while (true) {
  continue label;
}

label: switch (a) {
  case 0:
    break label;
}

label: {
  break label;
}

label: if (a) {
  break label;
}
```

Examples of **correct** code for this rule:

```js
var f = {
  label: "foo",
};

while (true) {
  break;
}

while (true) {
  continue;
}
```

### Options

The options allow labels with loop or switch statements:

- `"allowLoop"` (`boolean`, default is `false`) - If this option was set `true`, this rule ignores labels which are sticking to loop statements.
- `"allowSwitch"` (`boolean`, default is `false`) - If this option was set `true`, this rule ignores labels which are sticking to switch statements.

Actually labeled statements in JavaScript can be used with other than loop and switch statements.
However, this way is ultra rare, not well-known, so this would be confusing developers.

#### allowLoop

Examples of **correct** code for the `{ "allowLoop": true }` option:

```js
label: while (true) {
  break label;
}
```

#### allowSwitch

Examples of **correct** code for the `{ "allowSwitch": true }` option:

```js
label: switch (a) {
  case 0:
    break label;
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/2b14a6fb5403dfe5eff8dfade3baf7725b837052/crates/oxc_linter/src/rules/eslint/no_labels.rs)