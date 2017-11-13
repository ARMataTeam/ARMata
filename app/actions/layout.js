// @flow
import { ProgressInfo } from 'electron-updater';

export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const ERROR = 'ERROR';
export const ALERT = 'ALERT';
export const PROGRESS = 'PROGRESS';
export const REPORT_ERROR = 'REPORT_ERROR';
export const OPEN_SETTINGS = 'OPEN_SETTINGS';
export const CLOSE_SETTINGS = 'CLOSE_SETTINGS';
export const OPEN_NODE_WINDOW = 'OPEN_NODE_WINDOW';
export const CLOSE_NODE_WINDOW = 'CLOSE_NODE_WINDOW';
export const OPEN_WINDOW = 'OPEN_WINDOW';
export const CLOSE_WINDOW = 'CLOSE_WINDOW';
export const OPEN_VISUALIZATION = 'OPEN_VISUALIZATION';
export const OPEN_TOOLBOX = 'OPEN_TOOLBOX';
export const CLOSE_TOOLBOX = 'CLOSE_TOOLBOX';
export const TOGGLE_PHYSICS = 'TOGGLE_PHYSICS';
export const ADD_RESOURCE = 'ADD_RESOURCE';
export const DELETE_RESOURCE = 'DELETE_RESOURCE';

type actionType = {
  type: string
};

type changeViewType = {
  type: string,
  view: string
};

export function toggleHierarchicalLayout() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: CHANGE_LAYOUT });
  };
}

export function togglePhysics() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: TOGGLE_PHYSICS });
  };
}

export function changeView(view: string) {
  return (dispatch: (action: changeViewType) => void) => {
    dispatch({ type: CHANGE_VIEW, view });
  };
}

export function dispatchButtonClick(action: string) {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: action });
    dispatch({ type: CLEAR_ERRORS });
  };
}

export function openSettings() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: OPEN_SETTINGS });
  };
}

export function openNodeWindow(nodes: Array<string>) {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: OPEN_NODE_WINDOW, nodes });
  };
}

export function openVisualization() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: OPEN_VISUALIZATION });
  };
}

export function openToolbox() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: OPEN_TOOLBOX });
  };
}

export function closeToolbox() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: CLOSE_TOOLBOX });
  };
}

export function error(errorMessage: string, title: string = 'Error occured') {
  const buttons = [{ label: 'Got it', action: CLEAR_ERRORS }, { label: 'Report', action: REPORT_ERROR }];

  return {
    type: ERROR, message: errorMessage, buttons, title
  };
}

export function alert(alertMessage: string, buttons: Object[] = []) {
  return {
    type: ALERT, message: alertMessage, buttons
  };
}

export function notifyProgress(progress: ProgressInfo) {
  return {
    type: PROGRESS, progress
  };
}

export function clearErrors() {
  return {
    type: CLEAR_ERRORS
  };
}

export function openWindow(name: string, title: string, content: string) {
  return {
    type: OPEN_WINDOW, windowName: name, window: { title, content }
  };
}

export function closeWindow() {
  return {
    type: CLOSE_WINDOW
  };
}

export function addResource(resourceType: string) {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: ADD_RESOURCE, resourceType });
  };
}


export function deleteResource(id: string) {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: DELETE_RESOURCE, id });
  };
}