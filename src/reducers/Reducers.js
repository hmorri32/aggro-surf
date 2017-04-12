export const tides = (state = {}, action) => {
  switch(action.type){
    case 'GRAB_TIDES':
      return [...state, action.tides]
    default:
      return state
  }
};
