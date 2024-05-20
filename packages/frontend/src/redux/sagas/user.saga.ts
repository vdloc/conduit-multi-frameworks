import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserFailure } from '../actions/userActions';
import { FETCH_USER_REQUEST } from '../actions/actionTypes';
import { UserState } from '../reducers/user.reducer';
import Api from '../../services/api';

interface FetchUserAction {
  type: typeof FETCH_USER_REQUEST;
  payload: UserState;
}

/**
 * Fetches a user using the provided action.
 *
 * @param {Object} action - The action object containing the payload.
 * @param {string} action.payload.userId - The ID of the user to fetch.
 * @return {Generator} A generator function.
 */
function* fetchUser(action: FetchUserAction) {
  try {
    const user = yield call(Api.fetchUser, null);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFailure(e.message));
  }
}

/*
  Starts fetchUser on each dispatched `FETCH_USER_REQUEST` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}

export default mySaga;
