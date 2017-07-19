// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import fileDialog from './fileDialog'; // eslint-disable-line flowtype-errors/show-errors
import layout from './layout';

const rootReducer = combineReducers({
  router,
  fileDialog,
  layout
});

export default rootReducer;
