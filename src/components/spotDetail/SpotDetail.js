import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {WelcomeScreen} from '../welcomeScreen/WelcomeScreen';
import {yungKeys} from '../../helpers/keys.js'

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
    {!this.state.forecast ? null : this.myComponent()}
  }

  myComponent() {
    return <div dangerouslySetInnerHTML={this.state.forecast.Analysis.short_term_forecast} />;
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
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${yungKeys}
            &q=${this.state.forecast.lat}, ${this.state.forecast.lon}`}>
        </iframe>
      </div>
    )
  }
}


export default SpotDetail