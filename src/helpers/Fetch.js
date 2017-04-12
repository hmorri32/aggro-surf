import { saintDiegoTides } from '../actions/actions'


export const fetchThatYungData = () => {
  // fetch('http://api.spitcast.com/api/spot/forecast/235/')
  // .then(response => response.json())
  // .then((json) => {
  //   console.log(json);
  // })
  fetch('http://api.spitcast.com/api/county/tide/san-diego/')
  .then(response => response.json())
  .then((json) => {
    json.map((stuff) => {
      console.log(stuff);
      saintDiegoTides(stuff)
    })
  })
}