import React, { Component, Fragment } from 'react';
import HeaderContainer from './hoc/HeaderContainer';
import LoginFormContainer from './hoc/LoginFormContainer';
import TodoListContainer from './hoc/TodoListContainer';
import AddTodoContainer from './hoc/AddTodoContainer';
import SearchContainer from './hoc/SearchContainer';
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
          <h3 className="pleaseLogin">Please login!</h3>
        }

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducers.user,
    //todos: state.todoReducers.todos,
    displayLogin: state.displayLogin,
    loginFormErrMsg: state.loginFormErrMsg
  }
}

export default connect(mapStateToProps)(App);
