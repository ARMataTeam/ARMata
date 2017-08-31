// @flow
export const OPEN_FILE = 'OPEN_FILE';
export const SAVE_FILE = 'SAVE_FILE';
export const GENERATE_IMAGE = 'GENERATE_IMAGE';

export function open(selectedFilename: string, data: string) {
  return {
    type: OPEN_FILE, selectedFilename, data
  };
}

export function save(selectedFilename: string) {
  return {
    type: SAVE_FILE, selectedFilename
  };
}

export function generate(selectedFilename: string) {
  return {
    type: GENERATE_IMAGE, selectedFilename
  };
}
