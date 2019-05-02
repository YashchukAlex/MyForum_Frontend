import { SIGNIN_REQUEST, SIGNUP_REQUEST, SIGNOUT_REQUEST } from '../constants/auth';

export const singInRequest = ({ grant_type, username, password })  => {
  return {
    type: SIGNIN_REQUEST,
    grant_type,
    password,
    username
  };
}

export const signUpRequest = ({ email , login, password, confirmPassword}) => {
  return {
    type: SIGNUP_REQUEST,
    email,
    login,
    password,
    confirmPassword
  };
}

export const signOutRequest = () => {
  return {
    type: SIGNOUT_REQUEST
  };
}