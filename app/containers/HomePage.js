// @flow
import { connect } from 'react-redux';
import Home from '../components/Home'; // eslint-disable-line flowtype-errors/show-errors

function mapStateToProps(state) {
  return {
    selectedFilename: state.fileDialog
  };
}

export default connect(mapStateToProps)(Home);
