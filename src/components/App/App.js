import React, { Component } from 'react';
import { Route }            from 'react-router-dom';

import { fetchYungSpitCastData, fetchYungSurflineData } from '../../helpers/fetch.js';
import { WelcomeScreen }   from '../welcomeScreen/WelcomeScreen';
import dataVizContainer    from '../dataVizGrid/DataVizContainer';
import SpotDetailContainer from '../spotDetail/SpotDetailContainer';
import LogInContainer      from '../logIn/LogInContainer';
import MontageLife         from '../montageLife/MontageLife';
import { auth }            from '../../firebase.js'

import './App.css';

class App extends Component {

  componentWillMount() {
    this.checkAuth()
    fetchYungSpitCastData()
    fetchYungSurflineData()
  }

  checkAuth() {
    const { logIn, history } = this.props

    auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        logIn(true)
        history.push('/')
      } else {
        history.push('/login')
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ () => {
          if(this.props.currentUser){
            return (
              <div>
                <WelcomeScreen />
                <MontageLife />
              </div>
            )
          }
          // loading page component
          return <div>Loading.....</div>
        }}/>
        <div className="App-background">
          <Route exact path='/suh' component={ dataVizContainer } />
          <Route exact path='/login' component={ LogInContainer } />
          <Route exact path='/suh/:id/' component={ SpotDetailContainer }/>
        </div>
      </div>
    );
  }
}

export default App;
