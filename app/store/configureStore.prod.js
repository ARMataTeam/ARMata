// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers'; // eslint-disable-line flowtype-errors/show-errors
import type { fileDialogStateType } from '../reducers/fileDialog'; // eslint-disable-line flowtype-errors/show-errors

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: fileDialogStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
