import * as constants from './constants';
const defaultState = {
  token: '',
  role: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_TOKEN:
      const tempState = { ...state };
      tempState.token = action.token;
      tempState.role = action.role;
      return tempState;
    case constants.LOGIN_OUT:
      const temp = { ...state };
      temp.token = '';
      return temp;
    default:
      return state;
  }
};
