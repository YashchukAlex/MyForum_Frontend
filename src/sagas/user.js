import {takeLatest, call, put} from 'redux-saga/effects';

import * as Const from '../constants/user';
import { getUserInfo, changePassword } from '../api/user';

function* getUserInfoFlow() {
  try {
    const response = yield call(getUserInfo);
    yield put({
      type: Const.GET_USER_SUCCESS,
      response
    });
  } catch (e) {
    yield put({
      type: Const.GET_USER_FAILURE,
      e
    });
  }
}

function* changePasswordFlow(action) {
  try {
    const response = yield call(changePassword, action);
    yield put({
      type: Const.CHANGE_PASSWORD_SUCCESS,
      response
    });
  } catch (e) {
    yield put({
      type: Const.CHANGE_PASSWORD_FAILURE,
      e
    });
  }
}

function* userWatcher() {
  yield takeLatest(Const.GET_USER_REQUEST, getUserInfoFlow);
  yield takeLatest(Const.CHANGE_PASSWORD_REQUEST, changePasswordFlow);
}

export default userWatcher;