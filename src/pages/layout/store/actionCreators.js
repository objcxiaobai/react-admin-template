import * as constants from './constants';

const addTags = (tag) => ({
  type: constants.ADD_TAGS,
  tag,
});
export const addTag = (tag) => {
  return (dispatch) => {
    dispatch(addTags(tag));
  };
};

const deleteTags = (tag) => ({
  type: constants.DELETE_TAGS,
  tag,
});

export const deleteTag = (tag) => {
  return (dispatch) => {
    dispatch(deleteTags(tag));
  };
};

const emptyTags = (tag) => ({
  type: constants.EMPTY_TAGS,
  tag,
});

export const emptyTag = (tag) => {
  return (dispatch) => {
    dispatch(emptyTags(tag));
  };
};

const changeSideBar = (status) => ({
  type: constants.CHANGE_SIDEBAR,
  status,
});
export const setSideBar = (status) => {
  return (dispatch) => {
    dispatch(changeSideBar(status));
  };
};
