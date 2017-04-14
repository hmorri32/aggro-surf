import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {WelcomeScreen} from '../welcomeScreen/WelcomeScreen';

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

  renderForecast(){
    {!this.state.forecast ? null : <p>{document.getElementById('render').innerHTML = this.state.forecast.Analysis.short_term_forecast}</p>}
  }

  render() {
    return (
      <div className='tides'>
        <WelcomeScreen />
        <div id='render'>
          {this.renderForecast()}
        </div>
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCslKXSzLXNC1nEyVBDrkCdnxmOAcj0xRk
            &q=${this.state.forecast.lat}, ${this.state.forecast.lon}`}>
        </iframe>
      </div>
    )
  }
}


export default SpotDetail