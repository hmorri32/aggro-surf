import { store } from '../index.js';
import * as actions from '../actions/actions';


export const fetchYungSpitCastData = () => {
  fetch('http://api.spitcast.com/api/spot/forecast/235/')
  .then(response => response.json())
  .then((json) => {
    json.map((report) => {
      store.dispatch(actions.spitCastBeaconsSurf(report))
      return report
    })
  })
  fetch('http://api.spitcast.com/api/spot/forecast/237/')
  .then(response => response.json())
  .then((json) => {
    json.map((report) => {
      store.dispatch(actions.spitCastTamarackSurf(report))
      return report
    })
  })
  fetch('http://api.spitcast.com/api/spot/forecast/236/')
  .then(response => response.json())
  .then((json) => {
    json.map((report) => {
      store.dispatch(actions.spitCastPontoSurf(report))
      return report
    })
  })
  fetch('http://api.spitcast.com/api/county/tide/san-diego/')
  .then(response => response.json())
  .then((json) => {
    json.map((tideInfo) => {
      store.dispatch(actions.saintDiegoTides(tideInfo))
      return tideInfo
    })
  })
}

export const fetchYungSurflineData = () => {
  fetch('http://api.surfline.com/v1/forecasts/4772')
  .then(response => response.json())
  .then((json) => {
    let report = json.Surf
    store.dispatch(actions.surfLineBeaconsSurf(report))
  })
  fetch('http://api.surfline.com/v1/forecasts/4773')
  .then(response => response.json())
  .then((json) => {
    let report = json.Surf
    store.dispatch(actions.surfLinePontoReport(report))
  })
  fetch('http://api.surfline.com/v1/forecasts/4242')
  .then(response => response.json())
  .then((json) => {
    let report = json.Surf
    store.dispatch(actions.surfLineTamarackReport(report))
  })
}











