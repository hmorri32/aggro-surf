import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route }  from 'react-router-dom';

import { fetchYungSpitCastData } from '../../helpers/fetch.js';
import {WelcomeScreen} from '../welcomeScreen/WelcomeScreen'
import './App.css';

class App extends Component {

  componentDidMount() {
    fetchYungSpitCastData()
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ () =>
          <WelcomeScreen />
        }/>
      <div className="App-background"></div>
      </div>
    );
  }
}

  export default App;
