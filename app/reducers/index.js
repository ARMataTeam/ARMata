// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import fileDialog from './fileDialog'; // eslint-disable-line flowtype-errors/show-errors
import layout from './layout';
import update from './update';

const rootReducer = combineReducers({
  router,
  fileDialog,
  layout,
  update
});

export default rootReducer;
