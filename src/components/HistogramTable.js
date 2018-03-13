import React, { Component } from 'react';
import './HistogramTable.css';


class HistogramTable extends Component {

  render () {
    let data = this.props.data
    return (
      <div>
        { ( this.props.horiz ) ? (
          <table id="hist-table">
            <thead>
              <tr>
                <th className='heading' >Character</th>
                { data.map( ([k,v]) => (<th key={k} >'{ k }'</th>) ) }
                <th style={{ width: 0 }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='heading' >Frequency</td>
                { data.map( ([k,v]) => (<td key={k} >{ v }</td>) ) }
                <td style={{ width: 0 }}></td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table id="hist-table">
            <thead>
              <tr>
                <th>Character</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              { data.map( ([k,v]) => (
                <tr key={k} ><td>'{ k }'</td><td>{ v }</td></tr>
              ) ) }
            </tbody>
          </table>
        ) }
      </div>
    )
  }
}

export default HistogramTable;
