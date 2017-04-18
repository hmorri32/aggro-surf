import React        from 'react';
import { render }   from 'react-dom';
import { database } from './firebase';

  /******** store ********/
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware }             from 'react-router-redux';
import createHistory                    from 'history/createBrowserHistory';

  /******** router ********/
import { ConnectedRouter } from 'react-router-redux';
import { Provider }        from 'react-redux';
import { Route }           from 'react-router-dom';

  /******** files ********/
import { root }     from './reducers/rootReducer';
import AppContainer from './components/app/AppContainer';

  /******** yung store creation ********/
const history      = createHistory()
const middleware   = routerMiddleware(history)
const devTools     = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(root, devTools, applyMiddleware(middleware))

// redirect() {
//   if(this.props.currentUser) {
//     return <ItineraryWrapper itineraries={this.props.itineraries}/>
//   }
//   return <Redirect to='/login' />
// }


const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history } >
      <Route path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
)

render( router, document.getElementById('root'));





