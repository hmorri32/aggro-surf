export const reducer = (state=[]) => {
  return state
}

export const tides = (state = {}, action) => {
  switch(action.type){
    case 'GRAB_TIDES':
      return [...state, action]
    default:
      return state
  }
};
