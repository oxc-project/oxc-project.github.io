<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/no-unsafe-declaration-merging

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
</div>

### What it does

Disallow unsafe declaration merging.

### Why is this bad?

Declaration merging between classes and interfaces is unsafe.
The TypeScript compiler doesn't check whether properties are initialized, which can cause lead to TypeScript not detecting code that will cause runtime errors.

### Example

```javascript
interface Foo {}
class Foo {}
```