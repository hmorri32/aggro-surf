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

export const spitTamarackReport = (state = [], action) => {
  switch(action.type) {
    case 'TAMARACK_SURF':
      return [...state, action.report]
    default:
      return state
  }
}



