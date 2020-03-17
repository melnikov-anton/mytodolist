import LoginForm from '../LoginForm/LoginForm';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
import { hideLoginForm, showLFErrMsg } from '../../redux/actions/appActions';



const mapStateToProps = (state) => {
  return {
    display: state.appReducers.displayLogin,
    errorMsg: state.appReducers.loginFormErrMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginUser(email, password)),
    hideLoginForm: () => dispatch(hideLoginForm()),
    showLFErrorMessage: (message) => dispatch(showLFErrMsg(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
