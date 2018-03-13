import React, { Component } from 'react';
import './BarGraph.css';


class BarGraph extends Component {
  render () {
    let data = this.props.data
    // largest element in bar graph data (to normalize)
    let largest = data.reduce( (acc,cur) => Math.max(acc, cur[1]), 1)
    return (
      <div className="graph-wrapper">
        {
          // depending on if the graph should be wider or taller
          (this.props.horiz) ? ( // bars are vertical
            <table className="graph horiz"><tbody>
              <tr >
                { data.map( ([k,v]) => (
                  <td className="bar-wrapper" >
                    <div className="bar" style={{ height: `${v/largest*100}%` }}>
                      <div className="num">{v}</div>
                    </div>
                  </td>
                ) ) } 
              </tr>
              <tr>
                { data.map( ([k,v]) => (
                  <td key={k} >'{k}'</td>
                ) ) } 
              </tr>
            </tbody></table>
          ) : ( // bars are horizontal
            <table className="graph vert">
              { data.map( ([k,v]) => (
                <tr >
                  <td><span>'{k}'</span></td>
                  <td className="bar-wrapper">
                    <div className="bar" style={{ width: `${v/largest*100}%` }}></div>
                    <div className="num">{ v }</div>
                  </td>
                </tr>
              ) ) }
            </table>
          )
        }
      </div>
    );
  }
}

export default BarGraph;
