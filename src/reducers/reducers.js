export const tides = (state = [], action) => {
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

export const surfLineBeaconsReport = (state = [], action) => {
  switch(action.type) {
    case 'SL_BEACONS_SURF':
    return  action.report
    default:
    return state
  }
}

export const surfLineBeaconsTide = (state = {}, action) => {
  switch(action.type) {
    case 'SL_BEACONS_TIDE':
    return action.report
    default:
    return state
  }
}

export const spitBlacksReport = (state = [], action) => {
  switch(action.type) {
    case 'BLACKS_REPORT':
      return [...state, action.report]
    default:
      return state
  }
}

export const surfLineBlacksReport = (state = {}, action) => {
  switch(action.type) {
    case 'SL_BLACKS_SURF':
    return action.report
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

export const surfLinePontoReport = (state = {}, action) => {
  switch(action.type) {
    case 'SL_PONTO_SURF':
    return action.report
    default:
    return state
  }
}

export const spitScrippsReport = (state = [], action) => {
  switch(action.type) {
    case 'SCRIPPS_SURF':
    return [...state, action.report]
    default:
    return state
  }
}

export const surfLineScrippsReport = (state = {}, action) => {
  switch(action.type) {
    case 'SL_SCRIPPS_SURF':
    return action.report
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

export const surfLineTamarackReport = (state = {}, action) => {
  switch(action.type) {
    case 'SL_TAMARACK_SURF':
      return action.report
    default:
      return state
  }
}

export const spitWindanseaReport = (state=[], action) => {
  switch(action.type) {
    case 'WINDANSEA_SURF':
      return [...state, action.report]
    default:
      return state
  }
}

export const surfLineWindanseaReport = (state={}, action) => {
  switch(action.type) {
    case 'SL_WINDANSEA_SURF':
      return action.report
    default:
      return state
  }
}


