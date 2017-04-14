import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      console.log(this.state.forecast);
    })
  }

  renderForecast(){
    {!this.state.forecast ? null : <p>{document.getElementById('render').innerHTML = this.state.forecast.Analysis.short_term_forecast}</p>}
  }

  render() {
    if(this.state.forecast) {
    }
    return (
      <div>
        <Link to='/suh'>HELLOOOO</Link>
        <div id='render'>
          {this.renderForecast()}
        </div>
      </div>
    )
  }
}


export default SpotDetail