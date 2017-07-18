// @flow
import { OPEN_FILE } from '../actions/fileDialog';

const stripJsonComments = require('strip-json-comments');

type actionType = {
  type: string
};

type fileDialogStateType = {
  selectedFilename: string,
  fileData: Object
};

const initialState = {
  selectedFilename: '',
  fileData: {}
};

function removeBOM(data: string) {
  let clearedData = data;
  if (clearedData.charCodeAt(0) === 0xFEFF) {
    clearedData = clearedData.slice(1);
  }

  return clearedData;
}

export default function fileDialog(state: fileDialogStateType = initialState, action: actionType) {
  switch (action.type) {
    case OPEN_FILE: {
      const rawData = stripJsonComments(removeBOM(action.data));
      const json = JSON.parse(rawData);

      return Object.assign({}, state, {
        selectedFilename: action.selectedFilename,
        fileData: json,
        hierarchicalLayout: false
      });
    }
    default: {
      return state;
    }
  }
}
