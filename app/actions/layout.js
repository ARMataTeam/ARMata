// @flow
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

type actionType = {
  type: string
};

type changeViewType = {
  type: string,
  view: string
}

export function toggleHierarchicalLayout() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: CHANGE_LAYOUT });
  };
}

export function changeView(view: string) {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: CHANGE_VIEW, view });
  };
}

export function clearErrors() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: CLEAR_ERRORS });
  };
}
