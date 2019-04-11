import { SIGNIN_REQUEST, SIGNUP_REQUEST, SIGNOUT_REQUEST } from '../constants/auth';

export function singInRequest({ grant_type, username, password }) {
  return {
    type: SIGNIN_REQUEST,
    grant_type,
    password,
    username
  };
}

export function signUpRequest({ email ,login, password, confirmPassword}) {
  return {
    type: SIGNUP_REQUEST,
    email,
    login,
    password,
    confirmPassword
  };
}

export function signOutRequest() {
  return {
    type: SIGNOUT_REQUEST
  };
}