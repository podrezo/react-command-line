import React from 'react';
import ReactDOM from 'react-dom';
import ReactCliComponent from '../../src/ReactCliComponent.jsx';

const messages = {
  'WELCOME_MESSAGE': 'Welcome! Type "help" to see a list of commands.',
  'INVALID_COMMAND': 'Invalid command. Try typing "help" to see a list of supported commands.'
}
const commands = {
  help: {
    fn: args => {
      return `Supported commands: foo

foo [args]: Echoes 'bar' and the arguments.`
    }
  },
  foo: {
    fn: args => {
      return `bar. Arguments were: ${args}`;
    }
  },
  // sleep: {
  //   fn: async args => {
  //     let deferred = Promise.defer();
  //     setTimeout(() => {
  //       deferred.resolve();
  //     }, 1000);
  //     return deferred.promise;
  //   }
  // }
}

ReactDOM.render(
  <ReactCliComponent commands={commands} messages={messages} />,
  document.getElementById('root')
);