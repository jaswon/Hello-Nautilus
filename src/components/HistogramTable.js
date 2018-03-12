import React, { Component } from 'react';
import './HistogramTable.css';


class HistogramTable extends Component {

  render () {
    let data = this.props.data
    return (
      <table id="hist-table">
        <thead>
          <tr>
            <td className='heading' >Character</td>
            { data.map( ([k,v]) => (<td>'{ k }'</td>) ) }
            <td style={{ width: 10 }}></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='heading' >Frequency</td>
            { data.map( ([k,v]) => (<td>{ v }</td>) ) }
            <td style={{ width: 10 }}></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default HistogramTable;
