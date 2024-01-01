import type { UserActionTypes } from '../actions/actionTypes';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT_USER,
} from '../actions/actionTypes';

interface UserState {
  loading: boolean;
  user: any | null;
  error: string | null;
}

// Initial State
const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

// User Reducer
const userReducer = (
  state: UserState = initialState,
  action: UserActionTypes
) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
