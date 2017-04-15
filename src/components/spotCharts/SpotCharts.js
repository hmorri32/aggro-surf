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
    },

    {
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

    const { spitBeaconsReport, surfLineBeaconsReport, tides } = this.props;
    let slBeaconsData        = this.flatten(surfLineBeaconsReport.Surf.surf_max)
    let spitBeaconData       = spitBeaconsReport.map(stuff => stuff.size_ft)
    let spitBeaconYaxisLabel = spitBeaconsReport.map(stuff => stuff.hour)
    let mapped               = tides.map(stuff => stuff.tide)

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
        },
        {
          label: 'SD County Tides',
          type: 'line',
          fill: false,
          borderColor: 'rgb(34, 49, 63)',
          pointBorderColor: 'rgb(34, 49, 63)',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: 'rgb(34, 49, 63)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointRadius: 2,
          pointHitRadius: 2,
          data: mapped,
        }
      ]
    }

    return (
      <div>
        <Link to={{
          pathname: `/suh/${surfLineBeaconsReport.id}/`,
          spitData: this.props.spitBeaconsReport
        }}>
          <h2 className='SD-tides'>{spitBeaconsReport[0].spot_name}</h2>
        </Link>
        <RC2 data={data} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  blacksForeCastChart() {
    const { spitBlacksReport, surfLineBlacksReport, tides } = this.props;

    let surfLineBlacksData   = this.flatten(surfLineBlacksReport.Surf.surf_max)
    let spitBlacksData       = spitBlacksReport.map(surf => surf.size_ft)
    let spitBlacksYaxisLabel = spitBlacksReport.map(axis => axis.hour)
    let mapped               = tides.map(stuff => stuff.tide)

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
        },
        {
          label: 'SD County Tides',
          type: 'line',
          fill: false,
          borderColor: 'rgb(34, 49, 63)',
          pointBorderColor: 'rgb(34, 49, 63)',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: 'rgb(34, 49, 63)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointRadius: 2,
          pointHitRadius: 2,
          data: mapped,
        }
      ]
    }

    return (
      <div>
          <Link to={{
            pathname: `/suh/${surfLineBlacksReport.id}/`,
            spitData: this.props.spitBlacksReport,
            spitID: spitBlacksReport[0].spot_id
          }}>
            <h2 className='SD-tides'>{spitBlacksReport[0].spot_name}</h2>
          </Link>
        <RC2 data={blacksData} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  pontoForecastChart() {

    const { spitPontoReport, surfLinePontoReport, tides } = this.props;
    let slPontoData         = this.flatten(surfLinePontoReport.Surf.surf_max)
    let spitPontoData       = spitPontoReport.map(stuff => stuff.size_ft)
    let spitPontoYaxisLabel = spitPontoReport.map(stuff => stuff.hour)
    let mapped              = tides.map(stuff => stuff.tide)

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
        },
        {
          label: 'SD County Tides',
          type: 'line',
          fill: false,
          borderColor: 'rgb(34, 49, 63)',
          pointBorderColor: 'rgb(34, 49, 63)',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: 'rgb(34, 49, 63)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointRadius: 2,
          pointHitRadius: 2,
          data: mapped,
        }
      ]
    }

    return (
      <div>
          <Link to={{
            pathname: `/suh/${surfLinePontoReport.id}/`,
            spitData: this.props.spitPontoReport
          }}>
            <h2 className='SD-tides'>{spitPontoReport[0].spot_name}</h2>
          </Link>
          <RC2 data={pontoData} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  windanseaForecastChart() {

    const { spitWindanseaReport, surfLineWindanseaReport, tides } = this.props;
    let slWindanseaData         = this.flatten(surfLineWindanseaReport.Surf.surf_max)
    let spitWindanseaData       = spitWindanseaReport.map(stuff => stuff.size_ft)
    let spitWindanseaYaxisLabel = spitWindanseaReport.map(stuff => stuff.hour)
    let mapped                  = tides.map(stuff => stuff.tide)

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
        },
        {
          label: 'SD County Tides',
          type: 'line',
          fill: false,
          borderColor: 'rgb(34, 49, 63)',
          pointBorderColor: 'rgb(34, 49, 63)',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: 'rgb(34, 49, 63)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointRadius: 2,
          pointHitRadius: 2,
          data: mapped,
        }
      ]
    }

    return (
      <div>
        <Link to={{
          pathname: `/suh/${surfLineWindanseaReport.id}/`,
          spitData: this.props.spitWindanseaReport
        }}>
          <h2 className='SD-tides'>{spitWindanseaReport[0].spot_name}</h2>
        </Link>
        <RC2 data={windanseaData} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  scrippsForecastChart() {

    const { spitScrippsReport, surfLineScrippsReport, tides } = this.props;
    let slScrippsData         = this.flatten(surfLineScrippsReport.Surf.surf_max)
    let spitScrippsData       = spitScrippsReport.map(stuff => stuff.size_ft)
    let spitScrippsYAxisLabel = spitScrippsReport.map(stuff => stuff.hour)
    let mapped                = tides.map(stuff => stuff.tide)

    const scrippsData = {
      labels: spitScrippsYAxisLabel,
      datasets: [
        {
          label: 'Spitcast',
          backgroundColor: '#52B3D9',
          borderColor: '#52B3D9',
          borderWidth: 1,
          hoverBackgroundColor: '#C5EFF7',
          hoverBorderColor: '#52B3D9',
          data: spitScrippsData,
        },
        {
          label: 'Surfline',
          backgroundColor: '#C5EFF7',
          borderColor: '#C5EFF7',
          borderWidth: 1,
          hoverBackgroundColor: '#52B3D9',
          hoverBorderColor: '#C5EFF7',
          data: slScrippsData,
        },
        {
          label: 'SD County Tides',
          type: 'line',
          fill: false,
          borderColor: 'rgb(34, 49, 63)',
          pointBorderColor: 'rgb(34, 49, 63)',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: 'rgb(34, 49, 63)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointRadius: 2,
          pointHitRadius: 2,
          data: mapped,
        }
      ]
    }

    return (
      <div>
        <Link to={{
          pathname: `/suh/${surfLineScrippsReport.id}/`,
          spitData: this.props.spitScrippsReport
        }}>
          <h2 className='SD-tides'>{spitScrippsReport[0].spot_name}</h2>
        </Link>
        <RC2 data={scrippsData} type='bar' options={this.gridLineOptions()} />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.beaconsForecastChart()}
        {this.blacksForeCastChart()}
        {this.pontoForecastChart()}
        {this.scrippsForecastChart()}
        {this.windanseaForecastChart()}
      </div>
    )
  }
}

export default SpotCharts