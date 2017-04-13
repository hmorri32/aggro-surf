import React, { Component } from 'react';
import RC2 from 'react-chartjs2';
import './DataViz.css';
// import {zoom, pan, limits} from 'chartjs-plugin-zoom'

class DataViz extends Component {

  sanDiegoTideData() {
    const { tides, surfLineBeaconsTide } = this.props

    const zoomZoom = {
      pan: { enabled: true, mode: 'x', speed: 10, threshold: 10, limits: {max: 10, min: -10}},
      zoom: {enabled: true, mode: 'xy', threshold: 10, limits: {max: 20, min: -20}}
    }

    const mapped = tides.map((stuff) => {
      return stuff.tide
    })

    const hourly = tides.map((tide) => {
      return tide.hour
    })

    const mapped2 = surfLineBeaconsTide.map((stuff) => {
      return stuff.height
    })

    const hourly2 = surfLineBeaconsTide.map((tide) => {
      return tide.Localtime
    })

    const gridLineOptions = {
      legend: {
        labels: {
          fontColor: 'black'
        }
      },
      scales: {
        yAxes: [{
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
          },
        }]
      }
    }

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
      <div className='tide-charts'>
        <RC2 data={data} type='line' options={gridLineOptions}/>
        <RC2 data={data2} type='line' options={gridLineOptions}/>
      </div>
    )
  }

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

    return (
      <div>
        <RC2 data={data} type='bar' />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='tides'>
          <h2 className='SD-tides'>Saint Diego Tides (dealwithit)</h2>
          {this.sanDiegoTideData()}
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