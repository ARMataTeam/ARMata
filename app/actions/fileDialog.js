// @flow
export const OPEN_FILE = 'OPEN_FILE';
export const OPEN_FILE_ERROR = 'OPEN_FILE_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

type actionType = {
  type: string
};

export function open(selectedFilename: string, data: string) {
  return {
    type: OPEN_FILE, selectedFilename, data
  };
}

export function error(selectedFilename: string, errorMessage: string) {
  return {
    type: OPEN_FILE_ERROR, selectedFilename, errorMessage
  };
}

export function clearErrors() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: CLEAR_ERRORS });
  };
}
