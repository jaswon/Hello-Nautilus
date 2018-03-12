import React, { Component } from 'react';
import './Histogram.css';

import { genHistogram } from '../utils';

class Histogram extends Component {

  render () {
    let hist = genHistogram(this.props.data)
    return (
      <div id="hist-data">
        <h2>Histogram Data</h2>
        <table>
          <thead><tr>
            <th>Character</th>
            <th>Frequency</th>
          </tr></thead>
          <tbody>
            {Object.entries(hist)
              .sort((a,b) => a[0].localeCompare(b[0]))
              .map( ([k,v]) => {
                return ( <tr> <td>{ k }</td><td>{ v }</td> </tr> )
              } )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Histogram;
