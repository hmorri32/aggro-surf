import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class SpotDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to='/suh'>HELLOOOO</Link>
      </div>
    )
  }
}


export default SpotDetail