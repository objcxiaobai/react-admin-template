import * as constants from './constants';

const changeDetail = (token, role) => ({
  type: constants.CHANGE_TOKEN,
  token,
  role,
});

const changeLoginStatus = () => ({
  type: constants.LOGIN_OUT,
});

export const setToken = (token, role) => {
  return (dispatch) => {
    dispatch(changeDetail(token, role));
  };
};

export const loginOut = () => {
  return (dispatch) => {
    dispatch(changeLoginStatus());
  };
};
