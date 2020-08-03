import * as constants from './constants';
const defaultStates = {
  status: false,
  tagList: [],
};

export default (state = defaultStates, action) => {
  switch (action.type) {
    case constants.CHANGE_SIDEBAR:
      const tempState = { ...state };
      tempState.status = !action.status;
      return tempState;
    case constants.ADD_TAGS:
      const temp = { ...state };
      temp.tagList = [...temp.tagList, action.tag];
      return temp;
    case constants.DELETE_TAGS:
      const deleteTemp = { ...state };
      deleteTemp.tagList = [
        ...state.tagList.filter((item) => item !== action.tag),
      ];
      return deleteTemp;
    default:
      return state;
  }
};
