// @flow
import { OPEN_FILE } from '../actions/fileDialog';
import TemplateParser from '../parsers/templateParser';
import { Template } from '../types/template';

const stripJsonComments = require('strip-json-comments');

type actionType = {
  type: string
};

type fileDialogStateType = {
  selectedFilename: string,
  fileData: Template
};

const initialState = {
  selectedFilename: '',
  fileData: {
    schema: '',
    contentVersion: '',
    variables: [],
    outputs: [],
    resources: [],
    parameters: []
  }
};

export default function fileDialog(state: fileDialogStateType = initialState, action: actionType) {
  switch (action.type) {
    case OPEN_FILE: {
      const rawData = stripJsonComments(removeBOM(action.data));
      const json = JSON.parse(rawData);
      const templateParser = new TemplateParser(json);
      const parsedTemplate = templateParser.parseTemplate();

      TemplateParser.normalizeNames(parsedTemplate);

      return Object.assign({}, state, {
        selectedFilename: action.selectedFilename,
        fileData: parsedTemplate,
        hierarchicalLayout: false
      });
    }
    default: {
      return state;
    }
  }
}

function removeBOM(data: string) {
  let clearedData = data;
  if (clearedData.charCodeAt(0) === 0xFEFF) {
    clearedData = clearedData.slice(1);
  }

  return clearedData;
}
