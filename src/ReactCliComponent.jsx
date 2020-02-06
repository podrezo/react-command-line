import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  messages: PropTypes.objectOf(PropTypes.string),
  commands: PropTypes.object.isRequired,
  prompt: PropTypes.string,
  autoFocus: PropTypes.bool
}

const defaultProps = {
  prompt: '> ',
  commands: {},
  messages: {
    'WELCOME_MESSAGE': '',
    'INVALID_COMMAND': 'Invalid command.'
  },
  autoFocus: true
}


class ReactCliComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: this.props.messages['WELCOME_MESSAGE'].split("\n")
    }
    this.promptRef = React.createRef();
    this._focusPrompt = this._focusPrompt.bind(this);
    this._appendToBufferArray = this._appendToBufferArray.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleEnter = this._handleEnter.bind(this);
  }

  _focusPrompt() {
    this.promptRef.current.focus();
  }

  _appendToBufferArray(str) {
    this.tempBuffer = [... this.tempBuffer, ... str.split("\n")];
  }

  _handleEnter() {
    this._appendToBufferArray(this.props.prompt + this.promptRef.current.innerText);
    // TODO: Parse out the arguments
    const input = this.promptRef.current.innerText.trim();
    const commandNameToRun = /^([^\s]*)\s?.*$/.exec(input)?.pop();
    // reset the prompt
    this.promptRef.current.innerText = '';
    // execute the command
    const command = this.props.commands[commandNameToRun];
    if(typeof command === 'undefined') {
      this._appendToBufferArray(this.props.messages['INVALID_COMMAND']);
      return;
    }
    if(command.fn.constructor.name === 'AsyncFunction') {
      // TODO: Async functions should be supported
      throw new Error('Async commands are not supported yet');
      // command.fn().then(result => {
      //   this.setState({
      //     buffer: [...this.state.buffer, result]
      //   });
      // });
    } else {
      const result = command.fn(input);
      this._appendToBufferArray(result);
    }
  }

  _handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.tempBuffer = [...this.state.buffer];
      this._handleEnter();
      this.setState({
        buffer: this.tempBuffer
      });
    }
  }
  
  componentDidMount() {
    if(this.props.autoFocus) {
      this._focusPrompt();
    }
  }

  render() {
    const styles = this.props.styles || {};

    const lines = this.state.buffer.map((line, index) => <p key={index}>{line}</p>);

    return (
      <div style={styles.cli} onClick={this._focusPrompt} className="react_cli">
        {lines}
        {this.props.prompt} <span spellCheck="true" contentEditable="true" style={{minWidth: '10px'}} onKeyDown={this._handleKeyDown} ref={this.promptRef}></span>
      </div>
    );
  }
}

ReactCliComponent.propTypes = propTypes;
ReactCliComponent.defaultProps = defaultProps;

export default ReactCliComponent;
