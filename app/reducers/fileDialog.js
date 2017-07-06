// @flow
import { OPEN_FILE } from '../actions/fileDialog';

type actionType = {
  type: string
};

type fileDialogStateType = {
  selectedFilename: string,
  fileData: string
};

const initialState = {
  selectedFilename: '',
  fileData: ''
};

export default function fileDialog(state: fileDialogStateType = initialState, action: actionType) {
  switch (action.type) {
    case OPEN_FILE:
      return Object.assign({}, state, {
        selectedFilename: action.selectedFilename,
        fileData: action.data
      });
    default:
      return state;
  }
}
