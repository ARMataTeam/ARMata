// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App'; // eslint-disable-line flowtype-errors/show-errors
import * as LayoutActions from '../actions/layout';

function mapStateToProps(state) {
  return {
    message: state.layout.message,
    title: state.layout.title,
    currentView: state.layout.view,
    buttons: state.layout.buttons,
    progressState: state.layout.progress,
    selectedFilename: state.fileDialog.selectedFilename,
    lines: state.fileDialog.fileData.lines,
    characters: state.fileDialog.fileData.characters,
    loadedIn: state.fileDialog.fileData.loadedIn,
    isSettingsWindowOpen: state.layout.isSettingsWindowOpen,
    isNodeWindowOpen: state.layout.isNodeWindowOpen,
    nodes: state.layout.nodes,
    resources: state.fileDialog.fileData.resources
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
