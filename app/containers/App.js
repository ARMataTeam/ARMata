// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App'; // eslint-disable-line flowtype-errors/show-errors
import * as LayoutActions from '../actions/layout';

function mapStateToProps(state) {
  return {
    layout: state.layout,
    fileDialog: state.fileDialog,
    resources: state.fileDialog.fileData.resources,
    isSettingsWindowOpen: state.layout.isSettingsWindowOpen,
    currentView: state.router.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
