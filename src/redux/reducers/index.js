import { combineReducers } from 'redux';
import todoReducers from './todoReducers';
import userReducers from './userReducers';
import appReducers from './appReducers';

const rootReducer = combineReducers({
  todoReducers,
  userReducers,
  appReducers
})

export default rootReducer;
