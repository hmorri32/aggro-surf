import { store } from '../index.js'
import { saintDiegoTides } from '../actions/actions'


export const yungTides = () => {
  // fetch('http://api.spitcast.com/api/spot/forecast/235/')
  // .then(response => response.json())
  // .then((json) => {
  //   console.log(json);
  // })
  fetch('http://api.spitcast.com/api/county/tide/san-diego/')
  .then(response => response.json())
  .then((json) => {
    json.map((tideInfo) => {
      store.dispatch(saintDiegoTides(tideInfo))
      return tideInfo
    })
  })
}