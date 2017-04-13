import React, { Component } from 'react';
import RC2 from 'react-chartjs2';
import './DataViz.css';
import TideVizContainer from '../tides/TideVizContainer.js'

class DataViz extends Component {

  beaconsForecastData() {

    const { spitBeaconsReport, surfLineBeaconsReport } = this.props;

    function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    }

    let slBeaconsData  = flatten(surfLineBeaconsReport)
    let spitBeaconData = spitBeaconsReport.map((stuff) => {
      return stuff.size_ft
    })

    let spitBeaconYaxisLabel = spitBeaconsReport.map((stuff) => {
      return stuff.hour
    })


    const data = {
      labels: spitBeaconYaxisLabel,
      datasets: [
        {
          label: 'Spitcast',
          backgroundColor: '#52B3D9',
          borderColor: '#52B3D9',
          borderWidth: 1,
          hoverBackgroundColor: '#C5EFF7',
          hoverBorderColor: '#52B3D9',
          data: spitBeaconData,
        },
        {
          label: 'Surfline',
          backgroundColor: '#C5EFF7',
          borderColor: '#C5EFF7',
          borderWidth: 1,
          hoverBackgroundColor: '#52B3D9',
          hoverBorderColor: '#C5EFF7',
          data: slBeaconsData,
        }
      ]
    };

    const expo = {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'feet'
          }
        }]
      }
    }

    return (
      <div>
        <RC2 data={data} type='bar' options={expo} />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='tides'>
          <h2 className='SD-tides'>Saint Diego Tides (dealwithit)</h2>
          <TideVizContainer />
        </div>
        <div className='tides'>
          <h2 className='SD-tides'>BEACONS (wave height)</h2>
          {this.beaconsForecastData()}
        </div>
      </div>
    )
  }
}

export default DataViz;