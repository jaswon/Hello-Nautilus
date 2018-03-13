import React, { Component } from 'react';
import './Histogram.css';

import { genHistogram } from '../utils';
import HistogramTable from './HistogramTable';
import BarGraph from './BarGraph';

class Histogram extends Component {

  constructor (props) {
    super(props);
    this.state = {
      displayMode: "table",
      sortMode: "character"
    }
    this.handleDisplayModeChange = this.handleDisplayModeChange.bind(this)
    this.handleSortModeChange = this.handleSortModeChange.bind(this)
  }

  handleDisplayModeChange (e) {
    this.setState({
      displayMode: e.target.value
    })
  }

  handleSortModeChange (e) {
    this.setState({
      sortMode: e.target.value
    })
  }

  render () {
    let hist = Object.entries(genHistogram(this.props.data))
      .sort( this.state.sortMode === "character"
        ? (a,b) => a[0].localeCompare(b[0])
        : (a,b) => b[1] - a[1]
      )
    let horiz = this.props.width > hist.length * 45 + 200
    return (
      <div id="hist-wrapper">
        <h2>Histogram Data</h2>
        <span>Display Mode: </span>
        <label >
          <input 
            type="radio" 
            value="table"
            checked={this.state.displayMode === "table"}
            onChange={this.handleDisplayModeChange}
          /> Table
        </label>
        <label >
          <input 
            type="radio" 
            value="graph"
            checked={this.state.displayMode === "graph"}
            onChange={this.handleDisplayModeChange}
          /> Graph
        </label><br/>
        <span>Sort Mode: </span>
        <label >
          <input 
            type="radio" 
            value="character"
            checked={this.state.sortMode === "character"}
            onChange={this.handleSortModeChange}
          /> Character
        </label>
        <label >
          <input 
            type="radio" 
            value="frequency"
            checked={this.state.sortMode === "frequency"}
            onChange={this.handleSortModeChange}
          /> Frequency
        </label>
        <div id="hist-display-container">
          { (this.state.displayMode === "table") && <HistogramTable data={hist} horiz={horiz} /> }  
          { (this.state.displayMode === "graph") && <BarGraph data={hist} horiz={horiz} /> }
        </div>
      </div>
    );
  }
}

export default Histogram;
