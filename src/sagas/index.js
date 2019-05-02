import {all, fork} from 'redux-saga/effects';
import authWatcher from './auth';
import userWatcher from './user';

export default function* IndexSaga() {
  yield all([
    fork(authWatcher),
    fork(userWatcher)
  ]);
}