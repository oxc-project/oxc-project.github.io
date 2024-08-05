<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-await-in-loop

<div class="rule-meta">
</div>

### What it does

This rule disallows the use of await within loop bodies. (for, for-in, for-of, while, do-while).

### Why is this bad?

It potentially indicates that the async operations are not being effectively parallelized.
Instead, they are being run in series, which can lead to poorer performance.

### Example

Bad:

```javascript
for (const user of users) {
  const userRecord = await getUserRecord(user);
}
```

Good:

```javascript
await Promise.all(users.map((user) => getUserRecord(user)));
```