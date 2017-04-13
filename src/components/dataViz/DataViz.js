import React, { Component } from 'react';
import { VictoryLine } from 'victory';
import RC2 from 'react-chartjs2';
import './DataViz.css' 


class DataViz extends Component {

  render() {

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
          lineTension: 0.1,
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: mapped,
        }
      ]
    };


    let reduced = mapped.reduce((obj, stuff) => {
      obj[stuff]
      return obj
    }, {})

    return (
      <div className='tides'>
        <RC2 data={data} type='line' />
      </div>
    )
  }
}

export default DataViz;