// @flow
import { OPEN_FILE } from '../actions/fileDialog'; // eslint-disable-line flowtype-errors/show-errors

type actionType = {
  type: string,
  selectedFilename: string
};

export type fileDialogStateType = {
    selectedFilename: string
};

export default function fileDialog(state: string = '', action: actionType) {
  switch (action.type) {
    case OPEN_FILE:
      return action.selectedFilename[0];
    default:
      return state;
  }
}
