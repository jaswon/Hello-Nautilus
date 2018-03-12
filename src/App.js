import React, { Component } from 'react';

import Input from './components/Input';
import Histogram from './components/Histogram';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  { data: "" }
  }

  handleDataChange (data) {
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Nautilus!</h1>
        <Input onInput={this.handleDataChange.bind(this)} value={this.state.data} />
        <Histogram data={this.state.data} />
      </div>
    );
  }
}

export default App;
