import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SpotDetail extends Component {
  constructor() {
    super()
    this.state ={
      dude: 'suh'
    }
  }
  
  render() {
    return (
      <div>
        <Link to='/suh'>HELLOOOO</Link>
      </div>
    )
  }
}


export default SpotDetail