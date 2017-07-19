import layout from '../../app/reducers/layout';
import { CHANGE_LAYOUT, CHANGE_VIEW, CLEAR_ERRORS } from '../../app/actions/layout';

describe('reducers', () => {
  describe('layout', () => {
    it('should handle initial state', () => {
      expect(layout(undefined, {})).toMatchSnapshot();
    });

    it('should handle CHANGE_LAYOUT', () => {
      expect(layout({
        hierarchicalLayout: false,
        view: 'Structure',
        message: '',
        isError: false
      }, { type: CHANGE_LAYOUT })).toMatchSnapshot();
    });

    it('should handle CHANGE_VIEW', () => {
      expect(layout({
        hierarchicalLayout: false,
        view: 'Structure',
        message: '',
        isError: false
      }, { type: CHANGE_VIEW, view: 'JsonPreview' })).toMatchSnapshot();
    });

    it('should handle CLEAR_ERRORS', () => {
      expect(layout({
        hierarchicalLayout: false,
        view: 'Structure',
        message: 'Some message',
        isError: true
      }, { type: CLEAR_ERRORS })).toMatchSnapshot();
    });
  });
});
