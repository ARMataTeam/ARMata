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
