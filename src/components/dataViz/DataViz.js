import React, { Component } from 'react';
import { VictoryLine } from 'victory';
import RC2 from 'react-chartjs2';
import './DataViz.css';
// import {zoom, pan, limits} from 'chartjs-plugin-zoom'

class DataViz extends Component {

  tideData() {

    const chartOptions = { pan: {enabled: true, mode: 'x', speed: 10, threshold: 10, limits: {max: 10, min: -10}}, zoom: {enabled: true, mode: 'xy', threshold: 10, limits: {max: 20, min: -20}} }

    const mapped = this.props.tides.map((stuff) => {
      return stuff.tide
    })

    const hourly = this.props.tides.map((tide) => {
      return tide.hour
    })

    const mapped2 = this.props.surfLineBeaconsTide.map((stuff) => {
      return stuff.height
    })

    const hourly2 = this.props.surfLineBeaconsTide.map((tide) => {
      return tide.Localtime
    })

    const data = {
      labels: hourly,
      datasets: [
        {
          label: 'SD County Daily Tides',
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointRadius: 5,
          pointHitRadius: 5,
          data: mapped,
        }
      ],
    };
    const data2 = {
      labels: hourly2,
      datasets: [
        {
          label: 'SD County Extended Tides',
          fill: false,
          borderColor: '#2C3E50',
          pointBorderColor: '#2C3E50',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: '#2C3E50',
          pointHoverBorderColor: '#fff',
          pointRadius: 2,
          pointHitRadius: 2,
          data: mapped2,
        }
      ]
    };

    return (
      <div>
      <RC2 data={data} type='line' />
      <RC2 data={data2} type='line' />
      </div>
    )
  }

  render() {
    return (
      <div className='tides'>
        {this.tideData()}
      </div>
    )
  }
}

export default DataViz;