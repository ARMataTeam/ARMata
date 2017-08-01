import fileDialog from '../../app/reducers/fileDialog';
import { OPEN_FILE, OPEN_FILE_ERROR } from '../../app/actions/fileDialog';

describe('reducers', () => {
  describe('fileDialog', () => {
    it('should handle initial state', () => {
      expect(fileDialog(undefined, {})).toMatchSnapshot();
    });

    it('should handle OPEN_FILE', () => {
      expect(fileDialog({ selectedFilename: 'C:\\Temp\\Foo.json', fileData: '{"foo":"bar", "parameters": []}' }, { type: OPEN_FILE, data: '{"foo":"bar", "parameters": []}' })).toMatchSnapshot();
    });

    it('should handle OPEN_FILE_ERROR', () => {
      expect(fileDialog({ selectedFilename: '', fileData: null }, { type: OPEN_FILE_ERROR })).toMatchSnapshot();
    });
  });
});
