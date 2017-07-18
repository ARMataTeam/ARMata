// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App'; // eslint-disable-line flowtype-errors/show-errors
import * as LayoutActions from '../actions/layout';

function mapStateToProps(state) {
  return {
    errorMessage: state.layout.errorMessage,
    isError: state.layout.isError,
    currentView: state.layout.view
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
