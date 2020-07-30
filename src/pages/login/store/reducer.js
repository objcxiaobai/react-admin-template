import * as constants from './constants';
const defaultState = {
  token: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_TOKEN:
      const tempState = { ...defaultState };
      tempState.token = action.token;
      return tempState;
    default:
      return state;
  }
};
