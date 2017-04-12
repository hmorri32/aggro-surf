import { combineReducers } from 'redux';
import { tides, spitBeaconsReport, spitTamarackReport, surfLineBeaconsReport } from './reducers'
import { routerReducer } from 'react-router-redux';

export const root = combineReducers({
  tides,
  spitBeaconsReport,
  spitTamarackReport,
  surfLineBeaconsReport,
  router: routerReducer
})