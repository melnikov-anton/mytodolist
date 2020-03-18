import React, { Component, Fragment } from 'react';
import HeaderContainer from './hoc/HeaderContainer';
import LoginFormContainer from './hoc/LoginFormContainer';
import TodoListContainer from './hoc/TodoListContainer';
import AddTodoContainer from './hoc/AddTodoContainer';
import SearchContainer from './hoc/SearchContainer';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/userActions';


class App extends Component {


  componentDidMount() {
    this.props.dispatch(getUser());
  }



  render() {
    return(
      <Fragment>
        <HeaderContainer/>
        <LoginFormContainer/>
        {
          this.props.user ?
          <Fragment>
            <AddTodoContainer/>
            <SearchContainer/>
            <TodoListContainer/>
          </Fragment>
          :
          <div className="pleaseLogin">Please login!</div>
        }
        <Footer/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducers.user,
    displayLogin: state.displayLogin,
    loginFormErrMsg: state.loginFormErrMsg
  }
}

export default connect(mapStateToProps)(App);
