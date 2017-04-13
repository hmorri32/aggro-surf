import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RC2 from 'react-chartjs2';


class SpotCharts extends Component {

  flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(toFlatten);
    }, []);
  }

  beaconsForecastChart() {

    const { spitBeaconsReport, surfLineBeaconsReport } = this.props;

    let slBeaconsData  = this.flatten(surfLineBeaconsReport)
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
        <Link to={`/suh/${spitBeaconsReport[0].spot_id}/`}>
          <h2 className='SD-tides'>{spitBeaconsReport[0].spot_name}</h2>
        </Link>
        <RC2 data={data} type='bar' options={expo, gridLineOptions} />
      </div>
    )
  }

  blacksForeCastChart() {
    const { spitBlacksReport, surfLineBlacksReport } = this.props;
    let surfLineBlacksData = this.flatten(surfLineBlacksReport.surf_max)

    let spitBlacksData     = spitBlacksReport.map((stuff) => {
      return stuff.size_ft
    })

    let spitBlacksYaxisLabel = spitBlacksReport.map((stuff) => {
      return stuff.hour
    })

    const blacksData = {
      labels: spitBlacksYaxisLabel,
      datasets: [
        {
          label: 'Spitcast',
          backgroundColor: '#52B3D9',
          borderColor: '#52B3D9',
          borderWidth: 1,
          hoverBackgroundColor: '#C5EFF7',
          hoverBorderColor: '#52B3D9',
          data: spitBlacksData,
        },
        {
          label: 'Surfline',
          backgroundColor: '#C5EFF7',
          borderColor: '#C5EFF7',
          borderWidth: 1,
          hoverBackgroundColor: '#52B3D9',
          hoverBorderColor: '#C5EFF7',
          data: surfLineBlacksData,
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
          <Link to={`/suh/${spitBlacksReport[0].spot_id}/`}>
            <h2 className='SD-tides'>{spitBlacksReport[0].spot_name}</h2>
          </Link>
        <RC2 data={blacksData} type='bar' options={expo, gridLineOptions} />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.beaconsForecastChart()}
        {this.blacksForeCastChart()}
      </div>
    )
  }
}

export default SpotCharts