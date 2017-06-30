// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as FileDialogActions from '../actions/fileDialog';

function mapStateToProps(state) {
  return {
    selectedFilename: state.fileDialog
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileDialogActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
