import { combineReducers } from 'redux';

import { reducer as loginReducer } from '../pages/login/store';
//必须是个函数
const reducer = combineReducers({
  login: loginReducer,
});

export default reducer;
