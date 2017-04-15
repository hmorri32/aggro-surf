import React, { Component } from 'react';
// import { Link }             from 'react-router-dom';
import { WelcomeScreen }    from '../welcomeScreen/WelcomeScreen';
import { yungKeys }         from '../../helpers/keys.js';
import TideVizContainer     from '../tides/TideVizContainer.js';

import './SpotDetail.css'

class SpotDetail extends Component {
  constructor() {
    super()
    this.state ={
      forecast: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
    fetch(`http://api.surfline.com/v1/forecasts/${this.props.match.params.id}`)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        forecast: json
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

  render() {
    return (
      <div>

        <WelcomeScreen />
        <div className='tides padding'>
          <div id='render'>
            <h2>Report</h2>
            {!this.state.forecast ? null : <p>{this.state.forecast.Analysis.reportdate }</p>}
            {this.MyComponent()}
            <TideVizContainer />
          </div>
          <div className='frames'>
            <iframe
              className='frames'
              width="100%"
              height="650"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=${yungKeys}&q=${this.state.forecast.lat}, ${this.state.forecast.lon}&maptype=satellite`}>
            </iframe>
            <iframe
              className='frames'
              width="100%"
              height="650"    src={`https://embed.windytv.com/embed2.html?lat=${this.state.forecast.lat}&lon=${this.state.forecast.lon}&zoom=13&level=surface&overlay=wind&menu=&message=&marker=&forecast=12&calendar=now&location=coordinates&type=map&actualGrid=&metricWind=kt&metricTemp=%C2%B0C`}
              frameBorder="0">
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}


export default SpotDetail