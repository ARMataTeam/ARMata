// @flow
export const OPEN_FILE = 'OPEN_FILE';
export const SAVE_FILE = 'SAVE_FILE';

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
