import React, { Component } from 'react';
import { Route, Redirect }            from 'react-router-dom';
import { Link }             from 'react-router-dom';

import { fetchYungSpitCastData, fetchYungSurflineData } from '../../helpers/fetch.js';
import { WelcomeScreen }   from '../welcomeScreen/WelcomeScreen';
import dataVizContainer    from '../dataVizGrid/DataVizContainer';
import AppContainer        from './AppContainer';
import SpotDetailContainer from '../spotDetail/SpotDetailContainer';
import LogInContainer      from '../logIn/LogInContainer';
import MontageLife         from '../montageLife/MontageLife';
import { auth, database }  from '../../firebase.js'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: false
    }
  }

  componentDidMount() {
    fetchYungSpitCastData()
    fetchYungSurflineData()
    this.checkAuth()
  }

  checkAuth() {
    auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        this.props.logIn(true)
      } else {
        console.log('not logged in');
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
          else {
            return <Redirect to='/login' />
          }
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
