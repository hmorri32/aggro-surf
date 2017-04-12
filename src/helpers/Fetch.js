import { store } from '../index.js';
import * as actions from '../actions/actions';


export const fetchYungSpitCastData = () => {
  fetch('http://api.spitcast.com/api/spot/forecast/235/')
  .then(response => response.json())
  .then((json) => {
    json.map((report) => {
      store.dispatch(actions.beaconsSurf(report))
      return report
    })
  })
  fetch('http://api.spitcast.com/api/spot/forecast/237/')
  .then(response => response.json())
  .then((json) => {
    json.map((report) => {
      store.dispatch(actions.tamarackSurf(report))
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