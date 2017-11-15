// @flow
import {
  ProgressInfo
} from 'electron-builder-http';
import {
  CHANGE_LAYOUT,
  CHANGE_VIEW,
  CLEAR_ERRORS,
  ERROR,
  ALERT,
  PROGRESS,
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  OPEN_NODE_WINDOW,
  CLOSE_NODE_WINDOW,
  OPEN_WINDOW,
  CLOSE_WINDOW,
  TOGGLE_PHYSICS,
  OPEN_TOOLBOX,
  CLOSE_TOOLBOX,
  OPEN_QUICKTEMPLATE,
  CLOSE_QUICKTEMPLATE,
  INCREMENT,
  DECREMENT
} from '../actions/layout';
import Window from '../types/window';

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
  activeWindow: string,
  window: Window,
  physicsEnabled: boolean,
  isToolboxOpen: boolean,
  isQuickTemplateOpen: boolean,
  currentPage: number
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
  activeWindow: '',
  window: {},
  physicsEnabled: true,
  isToolboxOpen: false,
  isQuickTemplateOpen: false,
  currentPage: 1
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
        activeWindow: action.windowName,
        window: {
          title: action.window.title,
          content: action.window.content
        }
      });
    case CLOSE_WINDOW:
      return Object.assign({}, state, {
        activeWindow: '',
        window: {}
      });
    case TOGGLE_PHYSICS:
      return Object.assign({}, state, {
        physicsEnabled: !state.physicsEnabled
      });
    case OPEN_TOOLBOX:
      return Object.assign({}, state, {
        isToolboxOpen: true
      });
    case CLOSE_TOOLBOX:
      return Object.assign({}, state, {
        isToolboxOpen: false
      });
    case OPEN_QUICKTEMPLATE:
      return Object.assign({}, state, {
        isQuickTemplateOpen: true
      });
    case CLOSE_QUICKTEMPLATE:
      return Object.assign({}, state, {
        isQuickTemplateOpen: false
      });
    case INCREMENT:
      if (state.currentPage === 63) {
        return Object.assign({}, state, {
          currentPage: 63
        });
      }
      return Object.assign({}, state, {
        currentPage: state.currentPage + 1
      });
    case DECREMENT:
      if (state.currentPage === 1) {
        return Object.assign({}, state, {
          currentPage: 1
        });
      }
      return Object.assign({}, state, {
        currentPage: state.currentPage - 1
      });
    default:
      return state;
  }
}
