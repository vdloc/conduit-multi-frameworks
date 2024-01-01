import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
} from './actions';

/**
 * Fetches a user using the provided action.
 *
 * @param {Object} action - The action object containing the payload.
 * @param {string} action.payload.userId - The ID of the user to fetch.
 * @return {Generator} A generator function.
 */
function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
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
