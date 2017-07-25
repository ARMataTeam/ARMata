// @flow
import { ProgressInfo } from 'electron-updater';

export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const ERROR = 'ERROR';
export const ALERT = 'ALERT';
export const PROGRESS = 'PROGRESS';

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

export function error(errorMessage: string) {
  const buttons = [{ label: 'Got it', action: CLEAR_ERRORS }];

  return {
    type: ERROR, message: errorMessage, buttons
  };
}

export function alert(alertMessage: string, buttons: Object[] = []) {
  return {
    type: ALERT, message: alertMessage, buttons
  };
}

export function progress(progress: ProgressInfo) {
  return {
    type: PROGRESS, progress
  };
}
