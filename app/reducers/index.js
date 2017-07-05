// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import fileDialog from './fileDialog'; // eslint-disable-line flowtype-errors/show-errors

const rootReducer = combineReducers({
  router,
  fileDialog
});

export default rootReducer;
