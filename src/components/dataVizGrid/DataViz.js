import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RC2 from 'react-chartjs2';
import TideVizContainer from '../tides/TideVizContainer.js';
import './DataViz.css';

class dataVizGrid extends Component {

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
      },
    }

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
        <RC2 data={data} type='bar' options={expo, gridLineOptions} />
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
        <div className='tides forecast'>
          <Link to={`/suh/${this.props.spitBeaconsReport[0].spot_id}/`}>
            <h2 className='SD-tides'>BEACONS</h2>
          </Link>
          {this.beaconsForecastData()}
        </div>
      </div>
    )
  }
}

export default dataVizGrid;