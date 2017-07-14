// @flow
import { OPEN_FILE, OPEN_FILE_ERROR, CLEAR_ERRORS } from '../actions/fileDialog';

type actionType = {
  type: string
};

type fileDialogStateType = {
  selectedFilename: string,
  fileData: string,
  errorMessage: string,
  isError: boolean
};

const initialState = {
  selectedFilename: '',
  fileData: '',
  errorMessage: '',
  isError: false
};

export default function fileDialog(state: fileDialogStateType = initialState, action: actionType) {
  switch (action.type) {
    case OPEN_FILE:
      return Object.assign({}, state, {
        selectedFilename: action.selectedFilename,
        fileData: action.data
      });
    case OPEN_FILE_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isError: true
      });
    case CLEAR_ERRORS:
      return Object.assign({}, state, {
        errorMessage: '',
        isError: false
      });
    default:
      return state;
  }
}
