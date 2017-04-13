import React, { Component } from 'react';
import { VictoryLine } from 'victory';
import RC2 from 'react-chartjs2';
import './DataViz.css';
// import {zoom, pan, limits} from 'chartjs-plugin-zoom'

class DataViz extends Component {

  tideData() {
    const { tides, surfLineBeaconsTide } = this.props
    const chartOptions = {
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

  gimmeBeaconsSurfData() {

    const { spitBeaconsReport, surfLineBeaconsReport } = this.props;

    function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    }

    const slBeaconsData= flatten(surfLineBeaconsReport)


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
          label: 'Spitcast Beacons',
          backgroundColor: '#52B3D9',
          borderColor: '#52B3D9',
          borderWidth: 1,
          hoverBackgroundColor: '#C5EFF7',
          hoverBorderColor: '#52B3D9',
          data: spitBeaconData,
        },
        {
          label: 'Surfline Beacons',
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
      <div className='tides'>
        <h2>saintDiegoTidesDealwithit</h2>
          {this.tideData()}
          {this.gimmeBeaconsSurfData()}
      </div>
    )
  }
}

export default DataViz;