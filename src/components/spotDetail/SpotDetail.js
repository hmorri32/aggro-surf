import React, { Component } from 'react';
// import { Link }             from 'react-router-dom';
import { WelcomeScreen }    from '../welcomeScreen/WelcomeScreen';
import { yungKeys }         from '../../helpers/keys.js';
import RC2                  from 'react-chartjs2'
import './SpotDetail.css'

class SpotDetail extends Component {
  constructor() {
    super()
    this.state ={
      forecast: '',
      spitWeek: [],
      spitTides: []
    }
  }

  componentWillMount() {
    window.scrollTo(0,0);
    fetch(`http://api.surfline.com/v1/forecasts/${this.props.match.params.id}`)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        forecast: json
      })
    })
    this.getWeeklySpitData()
    this.getWeeklySpitTides()
  }

  getWeeklySpitData() {
    fetch(`http://api.spitcast.com/api/spot/forecast/${this.props.router.location.spitID}/?dcat=week`)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        spitWeek: json
      })
    })
  }

  getWeeklySpitTides() {
    fetch('http://api.spitcast.com/api/county/tide/san-diego/?dcat=week')
    .then(response => response.json())
    .then((json) => {
      this.setState({
        spitTides: [...json]
      })
    })
  }

  createMarkup() {
    if(this.state.forecast) {
      return {__html: `${this.state.forecast.Analysis.short_term_forecast}`};
    }
  }

  MyComponent() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }

  superCoolExtendedGraphs() {
    const { spitWeek, spitTides } = this.state;
    let chartData = spitWeek.map(forecast => forecast.size_ft)
    let yAxis     = spitWeek.map(forecast => forecast.date)
    let tideData  = spitTides.map(forecast => forecast.tide)

    console.log(yAxis);

    const data = {
      labels: yAxis,
      datasets: [
        {
          label: 'Surf Height',
          backgroundColor: '#52B3D9',
          borderColor: '#52B3D9',
          borderWidth: 1,
          hoverBackgroundColor: '#C5EFF7',
          hoverBorderColor: '#52B3D9',
          data: chartData,
        }
      ]
    }

    const tides = {
      labels: yAxis,
      datasets: [
        {
          label: 'Tides',
          fill: false,
          borderColor: '#2C3E50',
          pointBorderColor: '#2C3E50',
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: '#2C3E50',
          pointHoverBorderColor: '#fff',
          pointRadius: 2,
          pointHitRadius: 2,
          data: tideData,
        }
      ]
    }
    return (
      <div>
        <RC2 data={data} type='bar' />
        <RC2 data={tides} type='line' />
      </div>
    )
  }

  render() {
    return (
      <div>
        <WelcomeScreen />
        <div className='tides padding'>
          <div id='render'>
            <h2> {this.state.forecast.name} Report</h2>
            {!this.state.forecast
              ? null
              : <p>{this.state.forecast.Analysis.reportdate }</p>}
            { this.MyComponent() }
            { this.superCoolExtendedGraphs() }
          </div>
          <div className='frames'>
            <iframe
              className='frames'
              width="100%"
              height="650"    src={`https://embed.windytv.com/embed2.html?lat=${this.state.forecast.lat}&lon=${this.state.forecast.lon}&zoom=13&level=surface&overlay=wind&menu=&message=&marker=&forecast=12&calendar=now&location=coordinates&type=map&actualGrid=&metricWind=kt&metricTemp=%C2%B0C`}
              frameBorder="0">
            </iframe>
            <iframe
              className='frames'
              width="100%"
              height="650"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=${yungKeys}&q=${this.state.forecast.lat}, ${this.state.forecast.lon}&maptype=satellite`}>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}


export default SpotDetail