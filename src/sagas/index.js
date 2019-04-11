import {all, fork} from 'redux-saga/effects';
import authWatcher from './auth';

export default function* IndexSaga() {
  yield all([
    fork(authWatcher)
  ]);
}