<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-empty-file <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallows any files only containing the following:

- Whitespace
- Comments
- Directives
- Empty statements
- Empty blocks
- Hashbang

### Why is this bad?

Meaningless files clutter a codebase.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/bd572c609b9fa4561c18485a4cf88716937c445d/crates/oxc_linter/src/rules/unicorn/no_empty_file.rs)
