import {
  SHOW_LOGIN_APP,
  HIDE_LOGIN_APP,
  SHOW_LF_ERR_MSG_APP,
  HIDE_LF_ERR_MSG_APP,
  SHOW_ADD_ERR_MSG_APP
} from './types';

export const showLoginForm = () => {
  return {
    type: SHOW_LOGIN_APP
  }
}

export const hideLoginForm = () => {
  return {
    type: HIDE_LOGIN_APP
  }
}

export const showLFErrMsg = (msg) => {
  return {
    type: SHOW_LF_ERR_MSG_APP,
    payload: msg
  }
}

export const hideLFErrMsg = () => {
  return {
    type: HIDE_LF_ERR_MSG_APP
  }
}

export const showAddErrMsg = (msg) => {
  return {
    type: SHOW_ADD_ERR_MSG_APP,
    payload: msg
  }
}
