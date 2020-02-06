import React from 'react';
import ReactDOM from 'react-dom';
import ReactCliComponent from '../../src/ReactCliComponent.jsx';

function chg() {
  console.log('test!');
}

ReactDOM.render(
  <ReactCliComponent label="Hello, world" onChange={chg}/>,
  document.getElementById('root')
);