<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/numeric-separators-style

<div class="rule-meta">
<span class="fix">
🛠️ An auto-fix is available for this rule.
</span>
</div>

### What it does

Enforces a convention of grouping digits using numeric separators.

### Why is this bad?

Long numbers can become really hard to read, so cutting it into groups of digits,
separated with a \_, is important to keep your code clear. This rule also enforces
a proper usage of the numeric separator, by checking if the groups of digits are
of the correct size.

### Example

```javascript
const invalid = [1_23_4444, 1_234.56789, 0xab_c_d_ef, 0b10_00_1111, 0o1_0_44_21, 1_294_28771_2n];
const valid = [1_234_567, 1_234.567_89, 0xab_cd_ef, 0b1000_1111, 0o10_4421, 1_294_287_712n];
```