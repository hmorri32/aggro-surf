import React, { Component } from 'react';
import { VictoryLine } from 'victory';
import RC2 from 'react-chartjs2';
import './DataViz.css'


class DataViz extends Component {

  tideData() {
    const mapped = this.props.tides.map((stuff) => {
      return stuff.tide
    })

    const hourly = this.props.tides.map((tide) => {
      return tide.hour
    })

    const data = {
      labels: hourly,
      datasets: [
        {
          label: 'SD County Tides',
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
      ]
    };
    return (
      <RC2 data={data} type='line' />
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