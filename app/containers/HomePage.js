// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home'; // eslint-disable-line flowtype-errors/show-errors
import * as LayoutActions from '../actions/layout';

function mapStateToProps(state) {
  return {
    selectedFilename: state.fileDialog.selectedFilename,
    data: state.fileDialog.fileData,
    error: state.fileDialog.error,
    hierarchicalLayout: state.layout.hierarchicalLayout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
