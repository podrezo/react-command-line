# react-cli

ReactCLI is a ReactJS component that provides a simple way to present a command line interface to your user in your web app.

## Example Usage

The following will produce a terminal where the user can type "hello" to see a message containing the arguments passed to the function.

```js
const commands = {
  hello: {
    fn: args => {
      return `The arguments are ${args}`
    }
  }
}

// ...

ReactDOM.render(
  <ReactCliComponent commands={commands} />,
  document.getElementById('root')
);
```
