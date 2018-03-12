import React, { Component } from 'react';
import './BarGraph.css';


class BarGraph extends Component {
  render () {
    let data = this.props.data
    let largest = data.reduce( (acc,cur) => Math.max(acc, cur[1]), 1)
    return (
      <div className="graph-wrapper">
        <table className="graph">
          <tr >
            { data.map( ([k,v]) => (
              <td className="bar-wrapper"><div className="bar" style={{ height: `${v/largest*100}%` }}>{v}</div></td>
            ) ) } 
          </tr>
          <tr>
            { data.map( ([k,v]) => (
              <td>'{k}'</td>
            ) ) } 
          </tr>
        </table>
      </div>
    );
  }
}

export default BarGraph;
