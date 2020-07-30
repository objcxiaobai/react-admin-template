import * as constants from './constants';
const defaultStates = {
  status: false,
};

export default (state = defaultStates, action) => {
  switch (action.type) {
    case constants.CHANGE_SIDEBAR:
      const tempState = { ...state };
      tempState.status = !action.status;
      return tempState;
    default:
      return state;
  }
};
