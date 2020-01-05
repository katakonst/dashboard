import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DetailActions from '../actions/reqdetail';
import ReqDetail from "../components/proxy/ReqDetail";

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DetailActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReqDetail);
