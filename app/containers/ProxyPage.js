import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Proxy from '../components/proxy/Proxy';
import * as DetailActions from '../actions/reqdetail';

function mapStateToProps(state) {
  console.log(state)
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DetailActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Proxy);
