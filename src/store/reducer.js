import { combineReducers } from 'redux';

import { reducer as loginReducer } from '../pages/login/store';
import { reducer as layoutReducer } from '../pages/layout/store';
//必须是个函数
const reducer = combineReducers({
  login: loginReducer,
  layout: layoutReducer,
});

export default reducer;
