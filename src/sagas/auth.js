import {takeLatest, call, put} from 'redux-saga/effects';

import * as Const from '../constants/auth';
import {signUp, signIn} from '../api/auth';

function* signUpFlow(action) {
  try {
    const response = yield call(signUp, {action});
    yield put({
      type: Const.SIGNUP_SUCCESS,
      response
    });
  } catch (e) {
    yield put({
      type: Const.SIGNUP_FAILURE,
      e
    });
  }
}

function updateToken(token) {
  if (token) {
    console.info('Saving a token...');
    localStorage.setItem(Const.TOKEN_NAME, token);
  } else {
    console.info('Removing a token...');
    localStorage.removeItem(Const.TOKEN_NAME);
  }
}

function* signInFlow(action) {
  try {
    const response = yield call(signIn, action);
    yield put({
      type: Const.SIGNIN_SUCCESS,
      response
    });
    yield call(updateToken, response.access_token);
    window.location.assign("/home");
  } catch (error) {
    yield put({
      type: Const.SIGNIN_FAILURE,
      error
    });
  }
}

function* signOutFlow() {
  try {
    const response = yield call(updateToken);
    yield put({
      type: Const.SIGNOUT_SUCCESS,
      response
    });
  } catch (error) {
    yield put({
      type: Const.SIGNOUT_FAILURE,
      error
    });
  }
}

function* authWatcher() {
  yield takeLatest(Const.SIGNIN_REQUEST, signInFlow); 
  yield takeLatest(Const.SIGNOUT_REQUEST, signOutFlow);
  yield takeLatest(Const.SIGNUP_REQUEST, signUpFlow);
}

export default authWatcher;