// @flow
import { OPEN_FILE, SAVE_FILE, GENERATE_IMAGE } from '../actions/fileDialog';
import { SET_TEMPLATE } from '../actions/editor';
import { OPEN_VISUALIZATION, CLEAR_ERRORS, ADD_RESOURCE, OPEN_TEMPLATE, DELETE_RESOURCE } from '../actions/layout';
import TemplateParser from '../parsers/templateParser';
import { Template } from '../types/template';
import Uuid from '../utils/uuid';
import ResourceTemplateProvider from '../resources/resourceTemplateProvider';


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
    loadedIn: 0
  },
  rawJson: '{\r\n"$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymen' +
      'tTemplate.json#",\r\n"contentVersion": "1.0.0.0",\r\n"resources": []\r\n}',
  title: '',
  message: ''
};

export default function fileDialog(state: fileDialogStateType = initialState, action: actionType) {
  switch (action.type) {
    case OPEN_FILE:
      {
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
    case SAVE_FILE:
      {
        fs.writeFileSync(action.selectedFilename, state.rawJson, 'utf-8');
        return Object.assign({}, state, {});
      }
    case GENERATE_IMAGE:
      {
        const canvas = document.getElementsByTagName('canvas');
        if (canvas.length === 0) {
          return Object.assign({}, state, {});
        }

        const image = canvas[0]
          .toDataURL()
          .split(',')[1];
        fs.writeFileSync(action.selectedFilename, image, 'base64');
        return Object.assign({}, state, {});
      }
    case SET_TEMPLATE:
      {
        return Object.assign({}, state, { rawJson: action.template });
      }
    case OPEN_VISUALIZATION:
      {
        try {
          const templateParser = new TemplateParser(state.rawJson);
          const parsedTemplate = templateParser.parseTemplate();

          TemplateParser.normalizeNames(parsedTemplate);

          const filename = state.selectedFilename !== ''
            ? state.selectedFilename
            : 'EDITED TEMPLATE';

          return Object.assign({}, state, {
            selectedFilename: filename,
            fileData: parsedTemplate,
            hierarchicalLayout: false
          });
        } catch (e) {
          return Object.assign({}, state, {
            message: e.message,
            title: 'Error ocurred',
            isError: true
          });
        }
      }
    case CLEAR_ERRORS:
      return Object.assign({}, state, {
        message: '',
        title: '',
        isError: false
      });
    case ADD_RESOURCE:
      {
        const uuid = Uuid.uuidv4();
        state
          .fileData
          .resources
          .push({ id: `${action.resourceType}${uuid}`, displayName: `${action.resourceType}-${uuid}`, name: `${action.resourceType}-${uuid}`, dependsOn: [], type: action.resourceType });

        const rawJson = JSON.parse(state.rawJson);
        const json = JSON.parse(ResourceTemplateProvider.getTemplate(action.resourceType));
        rawJson
          .resources
          .push(json);
        return Object.assign({}, state, {
          selectedFilename: 'EDITED TEMPLATE',
          fileData: state.fileData,
          rawJson: JSON.stringify(rawJson, null, '\t')
        });
      }
    case OPEN_TEMPLATE:
      {
        const jsonstring = fs.readFileSync(action.deployPath, 'utf8');
        const templateParser = new TemplateParser(jsonstring);
        const parsedTemplate = templateParser.parseTemplate();

        TemplateParser.normalizeNames(parsedTemplate);

        return Object.assign({}, state, {
          selectedFilename: action.deployPath,
          fileData: parsedTemplate,
          hierarchicalLayout: false,
          rawJson: jsonstring
        });
      }
    case DELETE_RESOURCE: {
      const resources = [];
      state.fileData.resources.find((r) => {
        if (r.id !== action.id) {
          resources.push(r);
        }

        return true;
      });

      state.fileData.resources = resources; // eslint-disable-line no-param-reassign

      return Object.assign({}, state, {
        selectedFilename: 'EDITED TEMPLATE',
        fileData: state.fileData,
        rawJson: JSON.stringify(state.fileData, null, '\t')
      });
    }
    default: {
      return state;
    }
  }
}
