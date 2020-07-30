import * as constants from './constants';

const changeDetail = (token) => ({
  type: constants.CHANGE_TOKEN,
  token,
});

const changeLoginStatus = () => ({
  type: constants.LOGIN_OUT,
});

export const setToken = (token) => {
  return (dispatch) => {
    dispatch(changeDetail(token));
  };
};

export const loginOut = () => {
  return (dispatch) => {
    dispatch(changeLoginStatus());
  };
};
