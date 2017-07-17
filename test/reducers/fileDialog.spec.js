import fileDialog from '../../app/reducers/fileDialog';
import { OPEN_FILE } from '../../app/actions/fileDialog';

describe('reducers', () => {
  describe('fileDialog', () => {
    it('should handle initial state', () => {
      expect(fileDialog(undefined, {})).toMatchSnapshot();
    });

    it('should handle OPEN_FILE', () => {
      expect(fileDialog({ selectedFilename: 'C:\\Temp\\Foo.json', fileData: '{"foo":"bar"}' }, { type: OPEN_FILE, data: '{"foo":"bar"}' })).toMatchSnapshot();
    });
  });
});
