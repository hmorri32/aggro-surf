import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import RC2                  from 'react-chartjs2'


class SpotCharts extends Component {

  flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(toFlatten)
    }, [])
  }

  gridLineOptions() {
    return {
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
          }
        }]
      }
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
  }

  beaconsForecastChart() {

    const { spitBeaconsReport, surfLineBeaconsReport } = this.props;
    let slBeaconsData        = this.flatten(surfLineBeaconsReport.Surf.surf_max)
    let spitBeaconData       = spitBeaconsReport.map(stuff => stuff.size_ft)
    let spitBeaconYaxisLabel = spitBeaconsReport.map(stuff => stuff.hour)

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
    }

    return (
      <div>
        <Link to={{
          pathname: `/suh/${surfLineBeaconsReport.id}/`,
          spitID: `${spitBeaconsReport[0].spot_id}`
        }}>
          <h2 className='SD-tides'>{spitBeaconsReport[0].spot_name}</h2>
        </Link>
        <RC2 data={data} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  blacksForeCastChart() {
    const { spitBlacksReport, surfLineBlacksReport } = this.props;

    let surfLineBlacksData   = this.flatten(surfLineBlacksReport.Surf.surf_max)
    let spitBlacksData       = spitBlacksReport.map(surf => surf.size_ft)
    let spitBlacksYaxisLabel = spitBlacksReport.map(axis => axis.hour)

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
    }

    return (
      <div>
          <Link to={{
            pathname: `/suh/${surfLineBlacksReport.id}/`,
            spitID: `${spitBlacksReport[0].spot_id}`
          }}>
            <h2 className='SD-tides'>{spitBlacksReport[0].spot_name}</h2>
          </Link>
        <RC2 data={blacksData} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  pontoForecastChart() {

    const { spitPontoReport, surfLinePontoReport } = this.props;
    let slPontoData         = this.flatten(surfLinePontoReport.Surf.surf_max)
    let spitPontoData       = spitPontoReport.map(stuff => stuff.size_ft)
    let spitPontoYaxisLabel = spitPontoReport.map(stuff => stuff.hour)

    const pontoData = {
      labels: spitPontoYaxisLabel,
      datasets: [
        {
          label: 'Spitcast',
          backgroundColor: '#52B3D9',
          borderColor: '#52B3D9',
          borderWidth: 1,
          hoverBackgroundColor: '#C5EFF7',
          hoverBorderColor: '#52B3D9',
          data: spitPontoData,
        },
        {
          label: 'Surfline',
          backgroundColor: '#C5EFF7',
          borderColor: '#C5EFF7',
          borderWidth: 1,
          hoverBackgroundColor: '#52B3D9',
          hoverBorderColor: '#C5EFF7',
          data: slPontoData,
        }
      ]
    }

    return (
      <div>
          <Link to={{
            pathname: `/suh/${surfLinePontoReport.id}/`,
            spitID: `${spitPontoReport[0].spot_id}`
          }}>
            <h2 className='SD-tides'>{spitPontoReport[0].spot_name}</h2>
          </Link>
          <RC2 data={pontoData} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  windanseaForecastChart() {

    const { spitWindanseaReport, surfLineWindanseaReport } = this.props;
    let slWindanseaData         = this.flatten(surfLineWindanseaReport.Surf.surf_max)
    let spitWindanseaData       = spitWindanseaReport.map(stuff => stuff.size_ft)
    let spitWindanseaYaxisLabel = spitWindanseaReport.map(stuff => stuff.hour)

    const windanseaData = {
      labels: spitWindanseaYaxisLabel,
      datasets: [
        {
          label: 'Spitcast',
          backgroundColor: '#52B3D9',
          borderColor: '#52B3D9',
          borderWidth: 1,
          hoverBackgroundColor: '#C5EFF7',
          hoverBorderColor: '#52B3D9',
          data: spitWindanseaData,
        },
        {
          label: 'Surfline',
          backgroundColor: '#C5EFF7',
          borderColor: '#C5EFF7',
          borderWidth: 1,
          hoverBackgroundColor: '#52B3D9',
          hoverBorderColor: '#C5EFF7',
          data: slWindanseaData,
        }
      ]
    }

    return (
      <div>
        <Link to={{
          pathname: `/suh/${surfLineWindanseaReport.id}/`,
          spitID: `${spitWindanseaReport[0].spot_id}`
        }}>
          <h2 className='SD-tides'>{spitWindanseaReport[0].spot_name}</h2>
        </Link>
        <RC2 data={windanseaData} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.beaconsForecastChart()}
        {this.blacksForeCastChart()}
        {this.pontoForecastChart()}
        {this.windanseaForecastChart()}
      </div>
    )
  }
}

export default SpotCharts