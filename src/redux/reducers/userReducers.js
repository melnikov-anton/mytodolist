import { GET_USER, LOGOUT_USER } from '../actions/types';


export default function userReducers(state=null, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload.user
      };

    case LOGOUT_USER:
      if (action.payload.success) {
        return {
          ...state,
          user: null
        };
      } else {
        return {
          ...state
        };
      }


    default:
      return state;
  }
}
