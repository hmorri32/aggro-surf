import React, { Component } from 'react';
import SpotChartsContainer  from '../spotCharts/SpotChartsContainer.js';
import { Link }             from 'react-router-dom';
import './DataViz.css';

class dataVizGrid extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div className='tides'>
          <Link to='/' className='back-button-link'>
            <button className='back-button'>Go back to the montage by clicking this super long button</button>
          </Link>
          <h2 className='SD-tides'>San Diego County</h2>
        </div>
        <div className='tides forecast'>
          <SpotChartsContainer />
        </div>
      </div>
    )
  }
}

export default dataVizGrid;