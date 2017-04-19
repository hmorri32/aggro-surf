
// FETCH : CARDIFF spit 232 surfline 139590, SWAMIS spit 234 surfline 4789, GRANDVIEW spit 400 surfline 4771, OCEANSIDE spit 238 surfline 4238


export const spitCastBeaconsData = () => {
  return fetch('http://api.spitcast.com/api/spot/forecast/235/')
  .then(response => response.json())
}

export const spitCastBlacksData = () => {
  return fetch('http://api.spitcast.com/api/spot/forecast/229/')
  .then(response => response.json())
}

export const spitCastCardiffData = () => {
  return fetch('http://api.spitcast.com/api/spot/forecast/232/')
  .then(response => response.json())
}

export const spitCastOceansideData = () => {
  return fetch('http://api.spitcast.com/api/spot/forecast/238/')
  .then(response => response.json())
}

export const spitCastPontoData = () => {
  return fetch('http://api.spitcast.com/api/spot/forecast/236/')
  .then(response => response.json())
}

export const spitCastScrippsData = () => {
  return fetch('http://api.spitcast.com/api/spot/forecast/228/')
  .then(response => response.json())
}

export const spitCastSwamisData = () => {
  return fetch('http://api.spitcast.com/api/spot/forecast/234/')
  .then(response => response.json())
}

export const spitCastTamarackData = () => {
  return fetch('http://api.spitcast.com/api/spot/forecast/237/')
  .then(response => response.json())
}

export const spitCastWindanseaData =() => {
  return fetch('http://api.spitcast.com/api/spot/forecast/227/')
  .then(response => response.json())
}

export const spitCastSDTides = () => {
  return fetch('http://api.spitcast.com/api/county/tide/san-diego/')
  .then(response => response.json())
}

export const surfLineBeaconsData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4772')
  .then(response => response.json())
}

export const surfLineBeaconsTide = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4772')
  .then(response => response.json())
}

export const surfLineBlacksData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4245')
  .then(response => response.json())
}

export const surfLineCardiffData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/139590')
  .then(response => response.json())
}

export const surfLineOceansideData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4238')
  .then(response => response.json())
}

export const surfLinePontoData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4773')
  .then(response => response.json())
}

export const surfLineScrippsData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4246')
  .then(response => response.json())
}

export const surfLineSwamisData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4789')
  .then(response => response.json())
}

export const surfineTamarackData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4242')
  .then(response => response.json())
}

export const surfLineWindanseaData = () => {
  return fetch('http://api.surfline.com/v1/forecasts/4248')
  .then(response => response.json())
}












