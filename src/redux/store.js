import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initialState = {
  appReducers: {
    displayLogin: false,
    loginFormErrMsg: null
  },
  userReducers: {user: null},
  todoReducers: {
    todos: [],
    filterByStatus: 'all',
    sortByDate: 'desc',
    searchTask: '',
    todoToEdit: null
  }
}

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
