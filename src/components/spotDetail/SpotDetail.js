import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {WelcomeScreen} from '../welcomeScreen/WelcomeScreen';
import {yungKeys} from '../../helpers/keys.js';
import './SpotDetail.css'

class SpotDetail extends Component {
  constructor() {
    super()
    this.state ={
      forecast: ''
    }
  }

  componentDidMount() {
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
      <div className='tides'>
        <WelcomeScreen />
        <div id='render'>
          {this.MyComponent()}
        </div>
        <div className='frames'>
          <iframe
            width="100%"
            height="650"
            frameBorder="0"
            type="satellite"
            src={`https://www.google.com/maps/embed/v1/place?key=${yungKeys}
            &q=${this.state.forecast.lat}, ${this.state.forecast.lon}`}>
          </iframe>
          <iframe
            width="100%"
            height="650"  src={`https://embed.windytv.com/embed2.html?lat=${this.state.forecast.lat}&lon=${this.state.forecast.lon}&zoom=13&level=surface&overlay=wind&menu=&message=&marker=&forecast=12&calendar=now&location=coordinates&type=map&actualGrid=&metricWind=kt&metricTemp=%C2%B0C`}
            frameBorder="0">
          </iframe>
        </div>
      </div>
    )
  }
}


export default SpotDetail