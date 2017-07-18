// @flow
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const ERROR = 'ERROR';
export const ALERT = 'ALERT';

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

export function clearErrors() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: CLEAR_ERRORS });
  };
}

export function error(errorMessage: string) {
  return {
    type: ERROR, message: errorMessage
  };
}

export function alert(alertMessage: string) {
  return {
    type: ALERT, message: alertMessage
  };
}
