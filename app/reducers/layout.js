// @flow
import { ProgressInfo } from 'electron-builder-http';
import { CHANGE_LAYOUT, CHANGE_VIEW, CLEAR_ERRORS, ERROR, ALERT, PROGRESS, OPEN_SETTINGS, CLOSE_SETTINGS, OPEN_NODE_WINDOW, CLOSE_NODE_WINDOW, OPEN_WINDOW } from '../actions/layout';

type actionType = {
  type: string
};

type layoutStateType = {
  hierarchicalLayout: boolean,
  view: string,
  message: string,
  title: string,
  isError: boolean,
  buttons: Object[],
  progress: ProgressInfo,
  isSettingsWindowOpen: boolean,
  isNodeWindowOpen: boolean,
  nodes: Array<string>,
  activeWindow: string
};

const initialState = {
  hierarchicalLayout: false,
  view: 'Structure',
  message: '',
  title: '',
  isError: false,
  buttons: [],
  progress: {},
  isSettingsWindowOpen: false,
  isNodeWindowOpen: false,
  nodes: [],
  activeWindow: ''
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
        title: '',
        isError: false
      });
    case ERROR:
      return Object.assign({}, state, {
        message: action.message,
        title: action.title,
        isError: true,
        buttons: action.buttons
      });
    case ALERT:
      return Object.assign({}, state, {
        title: action.title,
        message: action.message,
        buttons: action.buttons
      });
    case PROGRESS:
      return Object.assign({}, state, {
        progress: action.progress
      });
    case OPEN_SETTINGS:
      return Object.assign({}, state, {
        isSettingsWindowOpen: true
      });
    case CLOSE_SETTINGS:
      return Object.assign({}, state, {
        isSettingsWindowOpen: false
      });
    case OPEN_NODE_WINDOW:
      return Object.assign({}, state, {
        isNodeWindowOpen: true,
        nodes: action.nodes
      });
    case CLOSE_NODE_WINDOW:
      return Object.assign({}, state, {
        isNodeWindowOpen: false,
        nodes: []
      });
    case OPEN_WINDOW:
      return Object.assign({}, state, {
        activeWindow: action.windowName
      });
    default:
      return state;
  }
}
