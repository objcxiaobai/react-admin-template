import * as constants from './constants';

const changeDetail = (token) => ({
  type: constants.CHANGE_TOKEN,
  token,
});

export const setToken = (token) => {
  return (dispatch) => {
    dispatch(changeDetail(token));
  };
};
