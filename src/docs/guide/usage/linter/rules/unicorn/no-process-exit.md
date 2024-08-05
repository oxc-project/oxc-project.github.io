<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-process-exit

<div class="rule-meta">
</div>

### What it does

Disallow `process.exit()`.

### Why is this bad?

Only use `process.exit()` in CLI apps. Throw an error instead.

### Example

```javascript
// Bad
if (problem) process.exit(1);

// Good
if (problem) throw new Error("message");

#! /usr/bin/env node
if (problem) process.exit(1);
```