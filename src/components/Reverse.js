import React, { Component } from 'react';

import { reverseString } from '../utils'

class Reverse extends Component {
  render () {
    return (<div><br/>
      <span>Your input reversed: </span>
      {reverseString(this.props.data)}
    </div>)
  }
}

export default Reverse
