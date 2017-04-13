import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TideVizContainer from '../tides/TideVizContainer.js';
import SpotChartsContainer from '../spotCharts/SpotChartsContainer.js';
import './DataViz.css';

class dataVizGrid extends Component {

  render() {
    return (
      <div>
        <div className='tides'>
          <h2 className='SD-tides'>Saint Diego Tides (dealwithit)</h2>
          <TideVizContainer />
        </div>
        <div className='tides forecast'>
          <SpotChartsContainer />
        </div>
      </div>
    )
  }
}

export default dataVizGrid;