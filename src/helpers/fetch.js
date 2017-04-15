import { store }    from '../index.js';
import * as actions from '../actions/actions';

// FETCH : WINDANSEA spit 227 surfline 4248, SCRIPPS spit 228 surflin 4246, CARDIFF spit 232 surfline 139590, SWAMIS spit 234 surfline 4789, GRANDVIEW spit 400 surfline 4771, OCEANSIDE spit 238 surfline 4238


// you have that yung id in spot detail now.
// create overlay swell and tide charts.
// dassitmane

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
  fetch('http://api.spitcast.com/api/spot/forecast/229/')
  .then(response => response.json())
  .then((json) => {
    json.map((report) => {
      store.dispatch(actions.spitCastBlacksSurf(report))
      return report
    })
  })
  fetch('http://api.spitcast.com/api/spot/forecast/227/')
  .then(response => response.json())
  .then((json) => {
    json.map((report) => {
      store.dispatch(actions.spitCastWindAnSeaSurf(report))
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
    let report = json
    store.dispatch(actions.surfLineBeaconsSurf(report))
  })
  fetch('http://api.surfline.com/v1/forecasts/4772')
  .then(response => response.json())
  .then((json) => {
    store.dispatch(actions.surfLineBeaconsTide(json.Tide.dataPoints))
  })
  fetch('http://api.surfline.com/v1/forecasts/4245')
  .then(response => response.json())
  .then((json) => {
    store.dispatch(actions.surfLineBlacksSurf(json))
  })
  fetch('http://api.surfline.com/v1/forecasts/4773')
  .then(response => response.json())
  .then((json) => {
    store.dispatch(actions.surfLinePontoSurf(json))
  })
  fetch('http://api.surfline.com/v1/forecasts/4242')
  .then(response => response.json())
  .then((json) => {
    store.dispatch(actions.surfLineTamarackSurf(json))
  })
  fetch('http://api.surfline.com/v1/forecasts/4248')
  .then(response => response.json())
  .then((json) => {
    store.dispatch(actions.surfLineWindAnSeaSurf(json))
  })
}











