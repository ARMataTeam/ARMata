// @flow
import { connect } from 'react-redux';
import Editor from '../components/Editor';

function mapStateToProps(state) {
  return {
    json: state.fileDialog.rawJson
  };
}

export default connect(mapStateToProps)(Editor);
