// @flow
import { connect } from 'react-redux';
import JsonPreview from '../components/JsonPreview';

function mapStateToProps(state) {
  return {
    template: state.fileDialog.fileData
  };
}

export default connect(mapStateToProps)(JsonPreview);
