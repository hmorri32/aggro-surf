import React, { Component } from 'react';
import RC2                  from 'react-chartjs2';
import 'chartjs-plugin-zoom';

class TideViz extends Component {

  sanDiegoTideData() {
    const { surfLineBeaconsTide } = this.props

    const zoomZoom = {
      pan: { enabled: true, mode: 'x', speed: 10, threshold: 10, limits: {max: 10, min: -10}},
      zoom: {enabled: true, mode: 'xy', threshold: 10, limits: {max: 20, min: -20}}
    }

    const mapped2 = surfLineBeaconsTide.map(stuff => stuff.height)
    const hourly2 = surfLineBeaconsTide.map(tide => tide.Localtime)

    const gridLineOptions = {
      legend: {
        labels: {
          fontColor: 'black'
        }
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'feet',
            fontColor: 'black'
          },
          gridLines: {
            color: 'rgba(255,255,255, 0.5)'
          },
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          },
        }],
        xAxes: [{
          gridLines: {
            color: 'rgba(255,255,255, 0.5)'
          },
          ticks: {
            fontColor: 'black'
          }
        }]
      }
    }

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
      <div className='tide-charts'>
        <RC2 data={data2} type='line' options={gridLineOptions, zoomZoom}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.sanDiegoTideData()}
      </div>
    )
  }
}

export default TideViz