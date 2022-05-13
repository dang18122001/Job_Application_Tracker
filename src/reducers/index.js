import { combineReducers } from 'redux';

import applicationsReducer from './applicationsReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  applications: applicationsReducer,
  errors: errorReducer
});