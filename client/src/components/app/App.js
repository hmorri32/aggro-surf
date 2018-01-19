/* eslint-disable */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as fetcher from '../../helpers/fetch.js';
import { WelcomeScreen } from '../welcomeScreen/WelcomeScreen';
import dataVizContainer from '../dataVizGrid/DataVizContainer';
import SpotDetailContainer from '../spotDetail/SpotDetailContainer';
import LogInContainer from '../logIn/LogInContainer';
import MontageLife from '../montageLife/MontageLife';
import { auth } from '../../firebase.js';

import './App.css';

class App extends Component {

  componentWillMount() {
    this.checkAuth();

    fetcher.spitCastBeaconsData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastBeaconsSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastBlacksData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastBlacksSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastCardiffData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastCardiffSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastOceansideData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastOceansideSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastPontoData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastPontoSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastScrippsData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastScrippsSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastSwamisData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastSwamisSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastTamarackData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastTamarackSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastWindanseaData()
      .then((json) => {
        json.map((report) => {
          this.props.spitCastWindanseaSurf(report);
          return report;
        });
      })
      .catch(e => e);

    fetcher.spitCastSDTides()
      .then((json) => {
        json.map((tideInfo) => {
          this.props.saintDiegoTides(tideInfo);
          return tideInfo;
        });
      })
      .catch(e => e);

    fetcher.surfLineBeaconsData()
      .then((json) => {
        this.props.surfLineBeaconsSurf(json);
      })
      .catch(e => e);

    fetcher.surfLineBeaconsTide()
      .then((json) => {
        this.props.surfLineBeaconsTide(json.Tide.dataPoints);
      })
      .catch(e => e);

    fetcher.surfLineBlacksData()
      .then((json) => {
        this.props.surfLineBlacksSurf(json);
      })
      .catch(e => e);

    fetcher.surfLineCardiffData()
      .then((json) => {
        this.props.surfLineCardiffSurf(json);
      })
      .catch(e => e);

    fetcher.surfLineOceansideData()
      .then((json) => {
        this.props.surfLineOceansideSurf(json);
      })
      .catch(e => e);

    fetcher.surfLinePontoData()
      .then((json) => {
        this.props.surfLinePontoSurf(json);
      })
      .catch(e => e);

    fetcher.surfLineScrippsData()
      .then((json) => {
        this.props.surfLineScrippsSurf(json);
      })
      .catch(e => e);

    fetcher.surfLineSwamisData()
      .then((json) => {
        this.props.surfLineSwamisSurf(json);
      })
      .catch(e => e);

    fetcher.surfLineTamarackData()
      .then((json) => {
        this.props.surfLineTamarackSurf(json);
      })
      .catch(e => e);

    fetcher.surfLineWindanseaData()
      .then((json) => {
        this.props.surfLineWindanseaSurf(json);
      })
      .catch(e => e);

    fetcher.magicBeaconsData()
      .then(json => this.props.magicBeaconsSurf(json));

    fetch('api/v1/forecast')
      .then(response => response.json())
      .then((response) => console.log(response));
  }

  checkAuth() {
    const { logIn, history } = this.props;

    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        logIn(true);
        history.push('/');
      } else {
        history.push('/login');
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => {
          if (this.props.currentUser) {
            return (
              <div>
                <WelcomeScreen />
                <MontageLife />
              </div>
            );
          }
          // loading page component
          return <div>Loading.....</div>;
        }} />
        <div className="App-background">
          <Route exact path='/suh' component={dataVizContainer} />
          <Route exact path='/login' component={LogInContainer} />
          <Route exact path='/suh/:id/' component={SpotDetailContainer} />
        </div>
      </div>
    );
  }
}

export default App;
