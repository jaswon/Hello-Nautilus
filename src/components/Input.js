import React, { Component } from 'react';

class Input extends Component {

  handleInput (e) {
    this.props.onInput(e.target.value)
  }

  render() {
    return (
      <div>
        <span>Enter some text: </span>
        <input 
          type="text" 
          onInput={this.handleInput.bind(this)}
          value={this.props.value} ></input>
      </div>
    );
  }
}

export default Input;
