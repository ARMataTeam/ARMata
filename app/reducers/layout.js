// @flow
import { ProgressInfo } from 'electron-builder-http';
import { CHANGE_LAYOUT, CHANGE_VIEW, CLEAR_ERRORS, ERROR, ALERT, PROGRESS } from '../actions/layout';

type actionType = {
  type: string
};

type layoutStateType = {
  hierarchicalLayout: boolean,
  view: string,
  message: string,
  isError: boolean,
  buttons: Object[],
  progress: ProgressInfo
};

const initialState = {
  hierarchicalLayout: false,
  view: 'Structure',
  message: '',
  isError: false,
  buttons: [],
  progress: {}
};

export default function layout(state: layoutStateType = initialState, action: actionType) {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return Object.assign({}, state, {
        hierarchicalLayout: !state.hierarchicalLayout
      });
    case CHANGE_VIEW:
      return Object.assign({}, state, {
        view: action.view
      });
    case CLEAR_ERRORS:
      return Object.assign({}, state, {
        message: '',
        isError: false
      });
    case ERROR:
      return Object.assign({}, state, {
        message: action.message,
        isError: true
      });
    case ALERT:
      return Object.assign({}, state, {
        message: action.message,
        buttons: action.buttons
      });
    case PROGRESS:
      return Object.assign({}, state, {
        progress: action.progress
      });
    default:
      return state;
  }
}
