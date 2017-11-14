// @flow
export const SET_TEMPLATE = 'SET_TEMPLATE';
export const MARK_EDITED = 'MARK_EDITED';
export const MARK_IDLE = 'MARK_IDLE';

type actionType = {
  type: string
};

export function setNewTemplate(template: string) {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: SET_TEMPLATE, template });
  };
}

export function markEdited() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: MARK_EDITED });
  };
}

export function markIdle() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: MARK_IDLE });
  };
}
