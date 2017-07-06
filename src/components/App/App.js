import React, { Component } from 'react';
import { Route }            from 'react-router-dom';
import * as fetch           from '../../helpers/fetch.js'
import { WelcomeScreen }    from '../welcomeScreen/WelcomeScreen';
import dataVizContainer     from '../dataVizGrid/DataVizContainer';
import SpotDetailContainer  from '../spotDetail/SpotDetailContainer';
import LogInContainer       from '../logIn/LogInContainer';
import MontageLife          from '../montageLife/MontageLife';
import { auth }             from '../../firebase.js'

import './App.css';

class App extends Component {

  componentWillMount() {
    this.checkAuth()

    fetch.spitCastBeaconsData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastBeaconsSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastBlacksData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastBlacksSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastCardiffData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastCardiffSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastOceansideData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastOceansideSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastPontoData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastPontoSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastScrippsData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastScrippsSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastSwamisData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastSwamisSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastTamarackData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastTamarackSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastWindanseaData()
    .then((json) => {
      json.map((report) => {
        this.props.spitCastWindanseaSurf(report)
        return report
      })
    })
    .catch(e => e)

    fetch.spitCastSDTides()
    .then((json) => {
      json.map((tideInfo) => {
        this.props.saintDiegoTides(tideInfo)
        return tideInfo
      })
    })
    .catch(e => e)

    fetch.surfLineBeaconsData()
    .then((json) => {
      this.props.surfLineBeaconsSurf(json)
    })
    .catch(e => e)

    fetch.surfLineBeaconsTide()
    .then((json) => {
      this.props.surfLineBeaconsTide(json.Tide.dataPoints)
    })
    .catch(e => e)

    fetch.surfLineBlacksData()
    .then((json) => {
      this.props.surfLineBlacksSurf(json)
    })
    .catch(e => e)

    fetch.surfLineCardiffData()
    .then((json) => {
      this.props.surfLineCardiffSurf(json)
    })
    .catch(e => e)

    fetch.surfLineOceansideData()
    .then((json) => {
      this.props.surfLineOceansideSurf(json)
    })
    .catch(e => e)

    fetch.surfLinePontoData()
    .then((json) => {
      this.props.surfLinePontoSurf(json)
    })
    .catch(e => e)

    fetch.surfLineScrippsData()
    .then((json) => {
      this.props.surfLineScrippsSurf(json)
    })
    .catch(e => e)

    fetch.surfLineSwamisData()
    .then((json) => {
      this.props.surfLineSwamisSurf(json)
    })
    .catch(e => e)

    fetch.surfLineTamarackData()
    .then((json) => {
      this.props.surfLineTamarackSurf(json)
    })
    .catch(e => e)

    fetch.surfLineWindanseaData()
    .then((json) => {
      this.props.surfLineWindanseaSurf(json)
    })
    .catch(e => e)

    fetch.magicBeaconsData()
    .then(json => console.log(json))
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
