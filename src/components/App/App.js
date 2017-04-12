import React, { Component } from 'react';
import { Route }  from 'react-router-dom';

import { fetchYungSpitCastData, fetchYungSurflineData } from '../../helpers/fetch.js';
import { WelcomeScreen } from '../welcomeScreen/WelcomeScreen'
import  DataVizContainer from '../dataViz/DataVizContainer'
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
          <WelcomeScreen />
        }/>
        <div className="App-background">
          <Route exact path='/suh' component={ DataVizContainer } />
        </div>
      </div>
    );
  }
}

export default App;
