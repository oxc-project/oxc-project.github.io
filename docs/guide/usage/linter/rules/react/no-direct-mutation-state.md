---
url: /docs/guide/usage/linter/rules/react/no-direct-mutation-state.md
---
# react/no-direct-mutation-state&#x20;

### What it does

The restriction coder cannot directly change the value of this.state

### Why is this bad?

calling setState() afterwards may replace the mutation you made

### Examples

```jsx
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

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-direct-mutation-state": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-direct-mutation-state --react-plugin
```

:::

## References

* Rule Source
