import React, { Component } from 'react';

import Input from './components/Input';
import Histogram from './components/Histogram';
import Reverse from './components/Reverse'

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  { data: "The quick brown fox jumps over the lazy dog!" }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  handleDataChange (data) {
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Nautilus!</h1>
        <Input onInput={this.handleDataChange.bind(this)} value={this.state.data} />
        <Reverse data={this.state.data} />
        <Histogram data={this.state.data} width={this.state.width} />
      </div>
    );
  }
}

export default App;
