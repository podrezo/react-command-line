import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.object
}

const defaultProps = {
  prompt: '> '
}

class ReactCliComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: ['Welcome!']
    }
    this.promptRef = React.createRef();
    this._focusPrompt = this._focusPrompt.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  _focusPrompt() {
    this.promptRef.current.focus();
  }

  _handleKeyDown(e) {
    if (e.key === 'Enter') {
      const command = this.promptRef.current.innerText;
      this.setState({
        buffer: [...this.state.buffer, command]
      })
      this.promptRef.current.innerText = '';
      console.log(`Execute command: ${command}`);
    }
  }

  // _handlePromptChange(e) {
  //   console.log(this.promptRef);
  //   this.setState({
  //     promptValue: this.promptRef.innerText
  //   })
  // }
  
  componentDidMount() {
    //autofocus
    this._focusPrompt();
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
