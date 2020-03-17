import Header from '../Header/Header';
import { logoutUser, loginUser } from '../../redux/actions/userActions';
import { showLoginForm, hideLoginForm } from '../../redux/actions/appActions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    user: state.userReducers.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
    login: (email, password) => dispatch(loginUser(email, password)),
    showLoginForm: () => dispatch(showLoginForm()),
    hideLoginForm: () => dispatch(hideLoginForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
