// @flow
export const OPEN_FILE = 'OPEN_FILE';

export function open(selectedFilename: string, data: string) {
  return {
    type: OPEN_FILE, selectedFilename, data
  };
}
