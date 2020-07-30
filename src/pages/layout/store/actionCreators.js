import * as constants from './constants';

const changeSideBar = (status) => ({
  type: constants.CHANGE_SIDEBAR,
  status,
});

export const setSideBar = (status) => {
  return (dispatch) => {
    dispatch(changeSideBar(status));
  };
};
