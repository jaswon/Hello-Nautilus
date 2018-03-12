import React, { Component } from 'react';
import './Histogram.css';

import { genHistogram } from '../utils';
import HistogramTable from './HistogramTable';
import BarGraph from './BarGraph';

class Histogram extends Component {

  constructor (props) {
    super(props);
    this.state = {
      displayMode: "table"
    }
    this.handleModeChange = this.handleModeChange.bind(this)
  }

  handleModeChange (e) {
    this.setState({
      displayMode: e.target.value
    })
  }

  render () {
    let hist = Object.entries(genHistogram(this.props.data))
                 .sort((a,b) => a[0].localeCompare(b[0]))
    return (
      <div id="hist-wrapper">
        <h2>Histogram Data</h2>
        <span>Display Mode: </span>
        <label style={{ marginLeft: 10 }}>
          <input 
            type="radio" 
            value="table"
            checked={this.state.displayMode === "table"}
            onChange={this.handleModeChange}
          /> Table
        </label>
        <label style={{ marginLeft: 10 }}>
          <input 
            type="radio" 
            value="graph"
            checked={this.state.displayMode === "graph"}
            onChange={this.handleModeChange}
          /> Graph
        </label>
        <div id="hist-display-container">
          { (this.state.displayMode === "table") && <HistogramTable data={hist} /> }  
          { (this.state.displayMode === "graph") && <BarGraph data={hist} /> }
        </div>
      </div>
    );
  }
}

export default Histogram;
