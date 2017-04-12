import { combineReducers } from 'redux';
import { tides, spitBeaconsReport, spitTamarackReport, surfLineBeaconsReport, spitPontoReport, surfLinePontoReport,surfLineTamarackReport } from './reducers'
import { routerReducer } from 'react-router-redux';

export const root = combineReducers({
  tides,
  spitBeaconsReport,
  spitTamarackReport,
  spitPontoReport,
  surfLineBeaconsReport,
  surfLinePontoReport,
  surfLineTamarackReport,
  router: routerReducer
})