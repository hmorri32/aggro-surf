import React, { Component } from 'react';
import TideVizContainer     from '../tides/TideVizContainer.js';
import SpotChartsContainer  from '../spotCharts/SpotChartsContainer.js';
import './DataViz.css';

class dataVizGrid extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div className='tides'>
          <h2 className='SD-tides'>Saint Diego County (dealwithit)</h2>
          {/* <TideVizContainer /> */}
        </div>
        <div className='tides forecast'>
          <SpotChartsContainer />
        </div>
      </div>
    )
  }
}

export default dataVizGrid;