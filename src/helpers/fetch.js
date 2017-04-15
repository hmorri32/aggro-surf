import { store } from '../index.js';
import * as actions from '../actions/actions';


// TO FETCH : WINDANSEA, SCRIPPS, CARDIFF, SWAMIS, GRANDVIEW, OCEANSIDE


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
    store.dispatch(actions.surfLinePontoReport(json))
  })
  fetch('http://api.surfline.com/v1/forecasts/4242')
  .then(response => response.json())
  .then((json) => {
    store.dispatch(actions.surfLineTamarackReport(json))
  })
}











