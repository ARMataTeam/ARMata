// @flow
import { OPEN_FILE, actionType } from '../actions/fileDialog';

export type fileDialogStateType = {
  selectedFilename: string
};

export default function fileDialog(defaultState: string = '', action: actionType) {
    switch (action.type) {
        case OPEN_FILE:
            return action.selectedFilename;
        default:
            return defaultState;
    }
}