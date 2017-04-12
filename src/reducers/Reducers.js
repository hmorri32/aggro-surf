export const tides = (state = {}, action) => {
  switch(action.type) {
    case 'GRAB_TIDES':
      return [...state, action.tides]
    default:
      return state
  }
};

export const spitBeaconsReport = (state = [], action) => {
  switch(action.type) {
    case 'BEACONS_REPORT':
      return [...state, action.report]
    default:
      return state
  }
}

export const spitPontoReport = (state = [], action) => {
  switch(action.type) {
    case 'PONTO_SURF':
    return [...state, action.report]
    default:
    return state
  }
}

export const spitTamarackReport = (state = [], action) => {
  switch(action.type) {
    case 'TAMARACK_SURF':
      return [...state, action.report]
    default:
      return state
  }
}

export const surfLineBeaconsReport = (state = {}, action) => {
  switch(action.type) {
    case 'SL_BEACONS_SURF':
      return action.report
    default:
      return state
  }
}

export const surfLinePontoReport = (state = {}, action) => {
  switch(action.type) {
    case 'SL_PONTO_SURF':
    return action.report
    default:
    return state
  }
}

export const surfLineTamarackReport = (state = {}, action) => {
  switch(action.type) {
    case 'SL_TAMARACK_SURF':
      return action.report
    default:
      return state
  }
}



