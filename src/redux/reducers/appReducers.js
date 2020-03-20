import {
  SHOW_LOGIN_APP,
  HIDE_LOGIN_APP,
  SHOW_LF_ERR_MSG_APP,
  HIDE_LF_ERR_MSG_APP,
  SHOW_ADD_ERR_MSG_APP,
  SHOW_POPUP_APP
} from '../actions/types';

export default function appReducers(state={}, action) {
  switch (action.type) {
    case SHOW_LOGIN_APP:
      return {
        ...state,
        displayLogin: true
      };
      case HIDE_LOGIN_APP:
        return {
          ...state,
          displayLogin: false
        };
      case SHOW_LF_ERR_MSG_APP:
        return {
          ...state,
          loginFormErrMsg: action.payload
        };
      case HIDE_LF_ERR_MSG_APP:
        return {
          ...state,
          loginFormErrMsg: null
        };
      case SHOW_ADD_ERR_MSG_APP:
        return {
          ...state,
          addErrMsg: action.payload
        };
      case SHOW_POPUP_APP:
        return {
          ...state,
          popUpMessage: action.payload
        }
    default:
      return state;
  }
}
