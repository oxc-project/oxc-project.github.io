<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/no-direct-mutation-state

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
</div>

### What it does

The restriction coder cannot directly change the value of this.state

### Why is this bad?

calling setState() afterwards may replace the mutation you made

### Example

```javascript
 // error
 var Hello = createReactClass({
   componentDidMount: function() {
     this.state.name = this.props.name.toUpperCase();
   },
   render: function() {
     return <div>Hello {this.state.name}</div>;
   }
 });

 class Hello extends React.Component {
   constructor(props) {
     super(props)

     doSomethingAsync(() => {
       this.state = 'bad';
     });
   }
 }

 // success
 var Hello = createReactClass({
   componentDidMount: function() {
     this.setState({
       name: this.props.name.toUpperCase();
     });
   },
   render: function() {
     return <div>Hello {this.state.name}</div>;
   }
 });

 class Hello extends React.Component {
   constructor(props) {
     super(props)

     this.state = {
       foo: 'bar',
     }
   }
 }
```