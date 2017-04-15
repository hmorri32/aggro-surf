import { combineReducers } from 'redux';
import { tides, spitBeaconsReport, spitBlacksReport, spitTamarackReport, surfLineBeaconsReport, surfLineBlacksReport, surfLineBeaconsTide, spitPontoReport, surfLinePontoReport, surfLineTamarackReport, spitWindanseaReport, surfLineWindanseaReport } from './reducers'
import { routerReducer } from 'react-router-redux';

export const root = combineReducers({
  tides,
  spitBeaconsReport,
  spitBlacksReport,
  spitTamarackReport,
  spitPontoReport,
  surfLineBeaconsReport,
  surfLineBlacksReport,
  surfLineBeaconsTide,
  surfLinePontoReport,
  surfLineTamarackReport,
  spitWindanseaReport,
  surfLineWindanseaReport,
  router: routerReducer
})