// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Editor from '../components/Editor';
import * as EditorActions from '../actions/editor';

function mapStateToProps(state) {
  return {
    json: state.fileDialog.rawJson
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EditorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
