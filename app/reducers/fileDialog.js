// @flow
import { OPEN_FILE, SAVE_FILE, GENERATE_IMAGE } from '../actions/fileDialog';
import TemplateParser from '../parsers/templateParser';
import { Template } from '../types/template';

const fs = require('fs');

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
    case SAVE_FILE: {
      fs.writeFileSync(action.selectedFilename, state.rawJson, 'utf-8');
      return Object.assign({}, state, {});
    }
    case GENERATE_IMAGE: {
      const canvas = document.getElementsByTagName('canvas');
      if (canvas.length === 0) {
        return Object.assign({}, state, {});
      }

      const image = canvas[0].toDataURL().split(',')[1];
      fs.writeFileSync(action.selectedFilename, image, 'base64');
      return Object.assign({}, state, {});
    }
    default: {
      return state;
    }
  }
}
