import React      from 'react';
import { render } from 'react-dom';

  /******** store ********/
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware }             from 'react-router-redux';
import createHistory                    from 'history/createBrowserHistory';

  /******** router ********/
import { ConnectedRouter } from 'react-router-redux';
import { Provider }        from 'react-redux';
import { Route }           from 'react-router-dom';

  /******** import files ********/
import { root }     from './reducers/rootReducer';
import AppContainer from './components/app/AppContainer';

  /******** yung store creation ********/
const history      = createHistory()
const middleware   = routerMiddleware(history)
const devTools     = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(root, devTools, applyMiddleware(middleware))

  /******** yung firebase ********/
import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCDDiX2BgjgfpTtCC6QuWxZ7rDMqjkWeBc",
  authDomain: "aggro-surf-1492129595773.firebaseapp.com",
  databaseURL: "https://aggro-surf-1492129595773.firebaseio.com",
  projectId: "aggro-surf-1492129595773",
  storageBucket: "aggro-surf-1492129595773.appspot.com",
  messagingSenderId: "51405118693"
};

firebase.initializeApp(config);

const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history } >
      <Route path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
)

render( router, document.getElementById('root'));
