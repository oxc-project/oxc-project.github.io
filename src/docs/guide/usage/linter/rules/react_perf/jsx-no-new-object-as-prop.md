<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react_perf/jsx-no-new-object-as-prop

<div class="rule-meta">
</div>

### What it does

Prevent Objects that are local to the current method from being used as values of JSX props

```javascript
// Bad
<Item config={{}} />
<Item config={new Object()} />
<Item config={Object()} />
<Item config={this.props.config || {}} />
<Item config={this.props.config ? this.props.config : {}} />

// Good
<Item config={staticConfig} />
```