import React, { Component } from 'react';
import { Route }            from 'react-router-dom';

import {
  spitCastBeaconsData,
  spitCastBlacksData,
  spitCastPontoData,
  spitCastScrippsData,
  spitCastTamarackData,
  spitCastWindanseaData,
  spitCastSDTides,
  surfLineBeaconsData,
  surfLineBeaconsTide,
  surfLineBlacksData,
  surfLinePontoData,
  surfLineScrippsData,
  surfineTamarackData,
  surfLineWindanseaData }  from '../../helpers/fetch.js';
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

    spitCastBeaconsData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastBeaconsSurf(report)
        return report
      })
    })
.catch(e => e)
    spitCastBlacksData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastBlacksSurf(report)
        return report
      })
    })
    .catch(e => e)

    spitCastPontoData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastPontoSurf(report)
        return report
      })
    })
    .catch(e => e)

    spitCastScrippsData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastScrippsSurf(report)
        return report
      })
    })
    .catch(e => e)

    spitCastTamarackData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastTamarackSurf(report)
        return report
      })
    })
    .catch(e => e)

    spitCastWindanseaData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastWindanseaSurf(report)
        return report
      })
    })
    .catch(e => e)

    spitCastSDTides()
    .then((json) => {
      json.map((tideInfo) => {
        this.props.saintDiegoTides(tideInfo)
        return tideInfo
      })
    })
    .catch(e => e)

    surfLineBeaconsData()
    .then((json) => {
      this.props.surfLineBeaconsSurf(json)
    })
    .catch(e => e)

    surfLineBeaconsTide()
    .then((json) => {
      this.props.surfLineBeaconsTide(json.Tide.dataPoints)
    })
    .catch(e => e)

    surfLineBlacksData()
    .then((json) => {
      this.props.surfLineBlacksSurf(json)
    })
    .catch(e => e)

    surfLinePontoData()
    .then((json) => {
      this.props.surfLinePontoSurf(json)
    })
    .catch(e => e)

    surfLineScrippsData()
    .then((json) => {
      this.props.surfLineScrippsSurf(json)
    })
    .catch(e => e)

    surfineTamarackData()
    .then((json) => {
      this.props.surfLineTamarackSurf(json)
    })
    .catch(e => e)

    surfLineWindanseaData()
    .then((json) => {
      this.props.surfLineWindanseaSurf(json)
    })
    .catch(e => e)
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
