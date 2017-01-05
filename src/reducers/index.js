import { combineReducers } from 'redux';
import numAjaxCallsInProgress from './ajaxStatusReducer';
import authors from './authorReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  numAjaxCallsInProgress,
  authors,
  courses
});

export default rootReducer;
