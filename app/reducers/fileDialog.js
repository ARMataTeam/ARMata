// @flow
import { OPEN_FILE } from '../actions/fileDialog';
import TemplateParser from '../parsers/templateParser';
import { Template } from '../types/template';

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
    parameters: [],
    lines: 0,
    characters: 0,
    loadedIn: 0,
    rawJson: ''
  }
};

export default function fileDialog(state: fileDialogStateType = initialState, action: actionType) {
  switch (action.type) {
    case OPEN_FILE: {
      const templateParser = new TemplateParser(action.data);
      const parsedTemplate = templateParser.parseTemplate();

      TemplateParser.normalizeNames(parsedTemplate);

      return Object.assign({}, state, {
        selectedFilename: action.selectedFilename,
        fileData: parsedTemplate,
        hierarchicalLayout: false,
        rawJson: action.data
      });
    }
    default: {
      return state;
    }
  }
}
