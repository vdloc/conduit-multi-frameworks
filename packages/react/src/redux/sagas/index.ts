import { all } from 'redux-saga/effects';
import userSaga from './user.saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    userSaga(),
    // you can add more sagas here
  ]);
}
