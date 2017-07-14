// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App'; // eslint-disable-line flowtype-errors/show-errors
import * as FileDialogActions from '../actions/fileDialog';

function mapStateToProps(state) {
  return {
    errorMessage: state.fileDialog.errorMessage,
    isError: state.fileDialog.isError
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileDialogActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
