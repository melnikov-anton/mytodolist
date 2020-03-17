import {
  GET_USER,
  LOGOUT_USER,
//  LOGIN_USER
} from './types';
import { firebase } from '../../components/firebase';
import { clearTodos, getTodos } from './todoActions';
import { showLoginForm, hideLoginForm, showLFErrMsg } from './appActions';

export const getUser = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        dispatch(getTodos(user.uid));
        dispatch(hideLoginForm());
        return dispatch({
          type: GET_USER,
          payload: {
            user
          }
        });
      } else {
        return dispatch({
          type: GET_USER,
          payload: {
            user,
            todos: []
          }
        });
      }
    });
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then( () => {
        console.log('Logged Out');
        dispatch(clearTodos());
        dispatch({
          type: LOGOUT_USER,
          payload: {
            success: true
          }
        });
      })
      .catch( (error) => {
        console.log(error.message);
        dispatch({
          type: LOGOUT_USER,
          payload: {
            success: false,
            error
          }
        });
      });
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch( (error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      dispatch(showLoginForm());
      dispatch(showLFErrMsg(errorMessage));
    });
  }
}
