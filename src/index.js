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
import { tides } from './reducers/Reducers'
import AppContainer from './components/App/AppContainer';

  /******** yung store creation ********/
const history    = createHistory()
const middleware = routerMiddleware(history)
const devTools   = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const root = combineReducers({
  tides,
  router: routerReducer
})

export const store = createStore(root, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history } >
      <Route exact path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
)

render( router, document.getElementById('root'));
