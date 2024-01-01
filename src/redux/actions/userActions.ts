import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT_USER,
} from './actionTypes';

export interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}

export interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: any;
}

export interface FetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE;
  payload: string;
}

export interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type UserActionTypes =
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction
  | LogoutUserAction;

export const fetchUserRequest = (): FetchUserRequestAction => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user: any): FetchUserSuccessAction => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error: string): FetchUserFailureAction => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const logoutUser = (): LogoutUserAction => ({
  type: LOGOUT_USER,
});
