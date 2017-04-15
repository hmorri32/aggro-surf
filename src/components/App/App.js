import React, { Component } from 'react';
import { Route }  from 'react-router-dom';

import { fetchYungSpitCastData, fetchYungSurflineData } from '../../helpers/fetch.js';
import { WelcomeScreen }   from '../welcomeScreen/WelcomeScreen';
import dataVizContainer    from '../dataVizGrid/DataVizContainer';
import SpotDetailContainer from '../spotDetail/SpotDetailContainer';
import MontageLife from '../montageLife/MontageLife'
import './App.css';

class App extends Component {

  componentDidMount() {
    fetchYungSpitCastData()
    fetchYungSurflineData()
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ () =>
          <div>
            <WelcomeScreen />
            <MontageLife />
          </div>
        }/>
        <div className="App-background">
          <Route exact path='/suh' component={ dataVizContainer } />
          <Route exact path='/suh/:id/' component={ SpotDetailContainer }/>
        </div>

        {/* <iframe className='tmbl' src='http://pineapplesandrum.tumblr.com/'></iframe> */}
      </div>
    );
  }
}

export default App;
