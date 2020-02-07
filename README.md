# react-command-line

ReactCLI is a ReactJS component that provides a simple way to present a command line interface to your user in your web app.

You can view a [live demo here](https://podrezo.github.io/react-command-line/demo/).

## Installation

```bash
npm install --save react-command-line
# or
yarn add react-command-line
```

## Example Usage

The following will produce a terminal where the user can type "hello" to see a message containing the arguments passed to the function.

```jsx
const commands = {
  hello: {
    fn: args => {
      return `The arguments are ${args}`
    }
  }
}

// ...

ReactDOM.render(
  <CommandLine commands={commands} />,
  document.getElementById('root')
);
```

## Features

* Stylable terminal that accepts synchronous and asynchronous commands

## Ideas for future features

* Automatically clearing buffer past certain number of lines
* Supporting ANSI colors
