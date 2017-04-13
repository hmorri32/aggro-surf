import { combineReducers } from 'redux';
import { tides, spitBeaconsReport, spitBlacksReport, spitTamarackReport, surfLineBeaconsReport, surfLineBeaconsTide, spitPontoReport, surfLinePontoReport, surfLineTamarackReport } from './reducers'
import { routerReducer } from 'react-router-redux';

export const root = combineReducers({
  tides,
  spitBeaconsReport,
  spitBlacksReport,
  spitTamarackReport,
  spitPontoReport,
  surfLineBeaconsReport,
  surfLineBeaconsTide,
  surfLinePontoReport,
  surfLineTamarackReport,
  router: routerReducer
})