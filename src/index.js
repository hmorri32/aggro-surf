import React from 'react';
import { render } from 'react-dom';

  /******** store ********/
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

  /******** router ********/
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

  /******** files ********/
import { tides, spitBeaconsReport } from './reducers/reducers'
import AppContainer from './components/app/AppContainer';

  /******** yung store creation ********/
const history    = createHistory()
const middleware = routerMiddleware(history)
const devTools   = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const root = combineReducers({
  tides,
  spitBeaconsReport,
  router: routerReducer
})

export const store = createStore(root, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history } >
      <Route path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
)

render( router, document.getElementById('root'));
